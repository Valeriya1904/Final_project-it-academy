import { Component } from './core/Component';
import { routes } from './constants/routes';


import './core/Router/Router';
import './components/templates/CatalogControls';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/AboutPage';
import './components/pages/ErrorPage';
import './components/pages/BlogPage';
import './components/molecules/Footer';
import './components/organisms/Navigation';


class App extends Component {
  render() {
    const pathname = window.location.pathname;
    return `
        <div class="main-layout">
            <shop-navigation></shop-navigation>
           <main>
                <hr class="dropdown-divider">
                 ${
                   routes.find((route) => route.href === pathname)?.component ??
                   '<error-page></error-page>'
                 }
           </main>
           <shop-footer></shop-footer>
        </div>
        `;
  }
}

customElements.define('shop-app', App);
