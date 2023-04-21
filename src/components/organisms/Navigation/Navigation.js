import { Component } from '../../../core/Component';
import { appPages } from '../../../constants/appPages';
// import '../../molecules/Categories';
import './Navigation.scss';
import '../../molecules/MenuItems';


class Navigation extends Component {
  render() {
    return `
        <div class="wrapper">
            <div class="wrapper__logo">
                <a class="nav-link position-relative" href="#">
                    <img src="./assets/images/icons/logo.svg" alt="cart" width="90" height="90">
                </a>
            </div>
            <div class="wrapper__navigation">
                <menu-items items='${JSON.stringify(appPages)}'
                ></menu-items>
            </div>
            <div class="wrapper__tabs">
                <ul class="wrapper__navbar list-unstyled d-inline-flex">
                    <li class="nav-item">
                        <a class="nav-link position-relative" href="#">
                            <img src="./assets/images/icons/cart.svg" alt="cart" width="30" height="30">
                        </a>
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
