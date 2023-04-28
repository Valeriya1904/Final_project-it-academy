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
    if (evt.target.closest('.minus')) {
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

  onAllItem = (evt) => {
    if (evt.target.closest('.plus')) {
      const id = evt.target.dataset.id;
      const items = this.state.products;
      const filteredItems = items
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
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

  sum(products) {
    return products.reduce((acc, item) => {
      return (acc += item.quantity ? item.price * item.quantity : item.price);
    }, 0);
  }

  componentDidMount() {
    const products = storageService.getItem(APP_STORAGE_KEYS.cartData);
    this.setProducts(products ?? []);
    this.addEventListener('click', this.onDeleteItem);
    this.addEventListener('click', this.onAllItem);
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
    this.removeEventListener('click', this.onDeleteItem);
    this.removeEventListener('click', this.onAllItem);
  }
  render() {
    return `
        <div class="container container-cart">
            <div class="cart-container__title">
               <h4 class="text-secondary">Ваш заказ</h4>
            </div>
            ${this.state.products
              .map((item) => {
                const sumPrice = item.price * item.quantity;
                return `
                <div class="item">
                    <div class="buttons d-flex">
                        <button class="btn minus text-light btn-card-item" data-id="${item.id}">-</button>
                        <div class="quantity p-2 pe-3 ps-3">${item.quantity}</div>
                        <button class="btn plus text-light btn-card-item" data-id="${item.id}"">+</button>
                    </div>
                    <div class="">
                       <img class="item__image-fit" src="${item.image}" alt="image">
                    </div>
                    <div class="item__title-products ms-2 col-2">
                        ${item.title}
                    </div>
                    <div class="item__description col-7">
                    ${item.description}
                    </div>
                    <div class="item__total-price col-1">${item.price}$</div> 
                    <div class="item__total-price col-1">${sumPrice}$</div> 
                </div>
                `;
              })
              .join(' ')}
              <div class="text-end col-12 fs-5">Итого: ${this.sum(this.state.products)}$</div>
        </div>
        `;
  }
}

customElements.define('cart-page', CartPage);
