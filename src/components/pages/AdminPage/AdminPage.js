import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { databaseService } from '../../../services/DatabaseService';

import { forms, menuItems } from './constants';
import '../../molecules/Tabs';
import '../../molecules/Preloader';
import '../../organisms/CategoryForm';
import '../../organisms/ProductForm';
import './AdminPage.scss';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import { firebaseStorageService } from '../../../services/FirebaseStorageService';

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: menuItems[0],
      categories: [],
      isLoading: false,
    };
  }

  setCaegories(categories) {
    this.setState((state) => {
      return {
        ...state,
        categories,
      };
    });
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  setActiveTab = (activeTab) => {
    this.setState((state) => {
      return {
        ...state,
        activeTab,
      };
    });
  };

  onChangeTab = ({ detail }) => {
    this.setActiveTab(detail.activeItem);
  };

  createCategory = ({ detail }) => {
    databaseService.createDocument(FIRESTORE_KEYS.categories, detail.data);
    this.getAllCategories();
  };

  createProduct = ({ detail }) => {
    this.setIsLoading(true);
    const { data } = detail;
    firebaseStorageService
      .uploadFile(data.preview, 'products')
      .then((snapshot) => {
        firebaseStorageService.downloadURL(snapshot.ref).then((url) => {
          databaseService.createDocument('products', {
            ...data,
            preview: url,
          });
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  };

  getAllCategories = async () => {
    this.setIsLoading(true);
    try {
      const data = await databaseService.getCollection(FIRESTORE_KEYS.categories);
      this.setCaegories(data);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    this.getAllCategories();
    eventEmmiter.on(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.on(APP_EVENTS.createCategory, this.createCategory);
    eventEmmiter.on(APP_EVENTS.createProduct, this.createProduct);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.off(APP_EVENTS.createCategory, this.createCategory);
    eventEmmiter.off(APP_EVENTS.createProduct, this.createProduct);
  }

  render() {
    return `
    <shop-preloader is-loading="${this.state.isLoading}">
      <div class="admin-container">
        <div class="mt-5">
          <shop-tabs 
            menu-items='${JSON.stringify(menuItems)}' 
            active-item='${JSON.stringify(this.state.activeTab)}'>
          </shop-tabs>
          <div class="mb-3 border-end border-bottom border-start p-3">
            ${forms(this.state)[this.state.activeTab.id]}
          </div>
        </div>
      </div>
    <shop-preloader>
    `;
  }
}

customElements.define('admin-page', AdminPage);
