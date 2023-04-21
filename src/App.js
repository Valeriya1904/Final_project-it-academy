import { Component } from './core/Component';
import { routes } from './constants/routes';

import './core/Router/Router';
import './components/templates/Header';
import './components/templates/ClothesSection';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/AboutPage';
import './components/pages/ErrorPage';
import './components/pages/BlogPage';
import './components/molecules/Footer';
import { CATEGORIES } from './constants/categories';

class App extends Component {
  render() {
    const pathname = window.location.pathname;
    return `
        <div class="main-layout">
           <shop-header></shop-header>
           <shop-clothessection categories='${JSON.stringify(CATEGORIES)}'></shop-clothessection>
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
