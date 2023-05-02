import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { databaseService } from '../../../services/DatabaseService';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import { slides } from './constants';
import { convertString } from '../../../utils/convertString';
import '../../molecules/Slider';
import '../../molecules/Pagination';
import './HomePage.scss';
import '../../organisms/CardList';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categories: [],
      limit: 8,
      currentPage: 1,
    };
  }

  sliceData(currentPage = 1) {
    const { limit } = this.state;

    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;

    const data = this.state.products;

    return data
      .map((item) => ({ ...item, description: convertString(item.description) }))
      .slice(start, end);
  }

  onChangePaginationPage = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        currentPage: Number(evt.detail.page),
      };
    });
  };

  onFilterProductsByCategory = async (evt) => {
    const { selectedCategory } = evt.detail;
    const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
    const filtered =
      selectedCategory.name === 'All Products'
        ? products
        : products.filter((item) => item.category === selectedCategory.id);
    this.setState((state) => {
      return {
        ...state,
        products: filtered,
        currentPage: 1,
      };
    });
  };

  onSearch = async (evt) => {
    const { data } = evt.detail;
    const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
    this.setState((state) => {
      return {
        ...state,
        products: products.filter((item) => {
          return item.title.toLowerCase().includes(data.search.toLowerCase());
        }),
        currentPage: 1,
      };
    });
  };

  setProducts(products) {
    this.setState((state) => {
      return {
        ...state,
        products,
      };
    });
  }

  getProducts = async () => {
    try {
      const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  getAllCategories = async () => {
    try {
      const data = await databaseService.getCollection(FIRESTORE_KEYS.categories);
      this.setCaegories(data);
    } catch (error) {
      console.error(error);
    }
  };

  setCaegories(categories) {
    this.setState((state) => {
      return {
        ...state,
        categories,
      };
    });
  }

  componentDidMount() {
    this.getProducts();
    this.sliceData();
    this.getAllCategories();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.on(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.on(APP_EVENTS.searchProducts, this.onSearch);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.off(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.off(APP_EVENTS.searchProducts, this.onSearch);
  }

  render() {
    return `
    <catalog-slider slides='${JSON.stringify(slides)}'>
        <h3 class="slider-logo">EVANS</h3>
    </catalog-slider>
    <catalog-controls categories='${JSON.stringify(this.state.categories)}'></catalog-controls>
        <div class="container mt-5 pt-5 border-top">
        <div class="row">
          <div class='col-sm-10'>
            <card-list 
               products='${JSON.stringify(this.sliceData(this.state.currentPage))}'>
            </card-list>
            <div class='mt-5'>
              <shop-pagination 
                total="${this.state.products.length}"
                limit="${this.state.limit}"
                current="${this.state.currentPage}"
              ></shop-pagination>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define('home-page', HomePage);
