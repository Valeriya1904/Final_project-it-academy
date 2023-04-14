import { Component } from "../../../core/Component";
import './Navigation.scss';



class Navigation extends Component {
    render() {
        return `
        <div class="wrapper">
            <div class="wrapper__logo">
                <a class="nav-link position-relative" href="#">
                    <img src="./assets/images/icons/logo.svg" alt="cart" width="90" height="90">
                </a>
            </div>
            <div class="wrapper__navigation ">
                <ul class="btn-toggle-nav list-unstyled d-inline-flex">
                    <li><a href="#" class="nav-link active">Home</a></li>
                    <li><a href="#" class="nav-link">Services</a></li>
                    <li><a href="#" class="nav-link">About us</a></li>
                    <li><a href="#" class="nav-link">Gifting</a></li>
                    <li><a href="#" class="nav-link">About us</a></li>
                </ul>
            </div>
            <div class="wrapper__tabs">
                <ul class="navbar-nav list-unstyled d-inline-flex">
                    <li class="nav-item">
                        <a class="nav-link position-relative" href="#">
                            <img src="./assets/images/icons/cart.svg" alt="cart" width="30" height="30">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link position-relative" href="#">
                            <img src="./assets/images/icons/user.svg" alt="user" width="30" height="30">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header-content">
        </div>
        `
    }
}

customElements.define('shop-navigation', Navigation);