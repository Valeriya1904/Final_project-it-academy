import { Component } from './core/Component';
import { routes } from './constants/routes';



import './core/Router/Router';
import './components/templates/Header';
import './components/templates/ClothesSection';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';



class App extends Component {

  render() {
    const pathname = window.location.pathname;
    return `
        <div class="main-layout">
           <shop-header></shop-header>
           <shop-clothessection></shop-clothessection>
           <main>
                <hr class="dropdown-divider">
                 ${
                  routes.find((route) => route.href === pathname)?.component ??
                  '<error-page></error-page>'
                }
           </main>
        </div>
        `;
  }
}

customElements.define('shop-app', App);
