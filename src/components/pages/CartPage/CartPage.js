import { Component } from '../../../core/Component';
import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';

import './CartPage.scss';

class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  setProducts = (products) => {
    const mapProducts = products
      .filter((item, index, arr) => {
        return arr.findIndex((findItem) => findItem.id === item.id) === index;
      })
      .map((item) => {
        return {
          ...item,
          quantity: item.quantity
            ? item.quantity
            : products.filter((filterItem) => filterItem.id === item.id).length,
        };
      });

    this.setState((state) => {
      return {
        ...state,
        products: mapProducts,
      };
    });
  };

  onDeleteItem = (evt) => {
    if (evt.target.closest('.buttons__btn')) {
      const id = evt.target.dataset.id;
      const items = this.state.products;
      const filteredItems = items
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => Boolean(item.quantity));
      storageService.setItem(APP_STORAGE_KEYS.cartData, filteredItems);
    }
  };

  onStorage = (evt) => {
    this.setProducts(evt.detail.data);
  };

  componentDidMount() {
    const products = storageService.getItem(APP_STORAGE_KEYS.cartData);
    this.setProducts(products ?? []);
    this.addEventListener('click', this.onDeleteItem);
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }
  render() {
    return `
        <div class="cart-container">
            <div class="cart-container__title">
                Shopping Bag
            </div>
            ${this.state.products
              .map((item, index) => {
                return `
                <div class="numbering">${index + 1}</div>
                <div class="quantity">Quantity ${item.quantity}</div>
                <div class="item">
                    <div class="buttons">
                        <button class="buttons__btn" data-id="${item.id}"">
                            Delete
                        </button>
                    </div>
                    <div class="item__image-fit"
                    src="${item.image}"
                    alt="image">
                    </div>
                    <div class="item__title-products">
                        ${item.title}
                    </div>
                    <div class="item__description">
                    ${item.description}
                    </div>
                    <div class="item__total-price">${item.price}$</div> 
                </div>`;
              })
              .join(' ')}
        </div>
        `;
  }
}

customElements.define('cart-page', CartPage);
