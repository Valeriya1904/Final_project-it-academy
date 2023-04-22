import { Component } from '../../../core/Component';
import { PRODUCTS } from '../../../constants/products';

import '../../molecules/Pagination';
import '../../organisms/CardList';

class CatalogPage extends Component {
  constructor() {
    super();
    this.state = {
      products: PRODUCTS,
      limit: 12,
      currentPage: 1,
    };
  }

  sliceData() {
    const { currentPage, limit } = this.state;

    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;

    this.setState((state) => {
      return {
        ...state,
        products: PRODUCTS.slice(start, end),
      };
    });
  }

  onChangePaginationPage = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        currentPage: PRODUCTS.slice(start, end)
      };
    });
    window.scrollTo(0, { behavior: 'smooth' });
  };

  componentDidMount() {
    this.sliceData();
  }

  componentWillUnmount() {}

  render() {
    return `
        <div class="container mt-5 pt-5 border-top">
        <div class="row">
          <div class='col-sm-9'>
            <card-list products='${JSON.stringify(this.state.products)}'></card-list>
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

customElements.define('catalog-page', CatalogPage);
