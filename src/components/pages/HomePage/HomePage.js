import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { databaseService } from '../../../services/DatabaseService';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import { slides } from './constants';
// import '../../templates/CatalogControls';
import '../../molecules/Slider';
import '../../molecules/Pagination';
import '../../organisms/CardList';
import { CATEGORIES } from '../../../constants/categories';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      limit: 8,
      currentPage: 1,
    };
  }

  sliceData(currentPage = 1) {
    const { limit } = this.state;

    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;

    return this.state.products.slice(start, end);
  }

  onChangePaginationPage = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        currentPage: Number(evt.detail.page),
      };
    });
  };

  onFilterProductsByCategory = (evt) => {
    const { selectedCategory } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        products: PRODUCTS.filter((item) => item.category.id === selectedCategory.id),
        currentPage: 1,
      };
    });
  };

  onSearch = (evt) => {
    const { data } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        products: this.state.products.filter((item) => {
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

  componentDidMount() {
    this.getProducts();
    this.sliceData();
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
      <div class="content">
        <h3>For Women</h3>
        <button>Shop Women's</button>
      </div>
    </catalog-slider>
    <catalog-controls categories='${JSON.stringify(CATEGORIES)}'></catalog-controls>
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