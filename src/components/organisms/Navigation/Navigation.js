import { Component } from '../../../core/Component';
import { appPages } from '../../../constants/appPages';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { APP_EVENTS } from '../../../constants/appEvents';
import { storageService } from '../../../services/StorageService';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { ADMIN } from '../../../constants/userRoles';
import './Navigation.scss';
import '../../molecules/MenuItems';
import '../../../core/Router/Link';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      productsCount: 0,
    };
  }

  static get observedAttributes() {
    return ['user'];
  }

  setProductsCount = (count) => {
    this.setState((state) => {
      return {
        ...state,
        productsCount: count,
      };
    });
  };

  countProducts = (data) => {
    return data
      .filter((item, index, arr) => {
        return arr.findIndex((indexItem) => indexItem.id === item.id) === index;
      })
      .map((item) => {
        return {
          ...item,
          quantity: item.quantity
            ? item.quantity
            : data.filter((filteredItem) => filteredItem.id === item.id).length,
        };
      })
      .reduce((acc, item) => acc + item.quantity, 0);
  };

  onStorage = (evt) => {
    const count = this.countProducts(evt.detail.data);
    this.setProductsCount(count);
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
    const count = this.countProducts(items);
    this.setProductsCount(count);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  getItems() {
    const user = JSON.parse(this.props.user);
    if (user) {
      if (user.email === ADMIN) {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      } else {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn, APP_ROUTES.admin].every(
            (item) => item !== menuItem.href,
          );
        });
      }
    } else {
      return appPages.filter((menuItem) => {
        return [APP_ROUTES.signOut, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
      });
    }
  }

  render() {
    return `
        <div class="wrapper d-flex justify-content-around align-items-center">
            <div class="wrapper__logo">
               <route-link to="${APP_ROUTES.home}">
                  <a class="nav-link position-relative" href="#">
                    <img src="./assets/images/icons/logo.svg" alt="cart" width="90" height="90">
                  </a>
               </route-link>
            </div>
            <div class="wrapper__navigation">
               <menu-items 
                  items='${JSON.stringify(this.getItems())}'>
               </menu-items>
            </div>
            <div class="wrapper__tabs">
               <ul class="wrapper__navbar list-unstyled d-inline-flex">
                  <li class="nav-item ">
                     <route-link to="${APP_ROUTES.cart}">
                        <a class="nav-link position-relative" href="#">
                           <img src="./assets/images/icons/cart.svg" alt="cart" width="30" height="30">
                              <span class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                                 ${this.state.productsCount}
                                 <span class="visually-hidden">unread messages</span>
                              </span>
                        </a>
                     </route-link>
                  </li>
                  <li class="nav-item ms-5">
                     <a class="nav-link position-relative" href="#">
                        <img src="./assets/images/icons/user.svg" alt="user" width="30" height="30">
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      `;
  }
}

customElements.define('shop-navigation', Navigation);
