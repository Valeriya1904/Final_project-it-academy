import { Component } from './core/Component';
import { routes } from './constants/routes';
import './core/Router/Router';
import './components/templates/CatalogControls';
import './components/pages/CartPage';
import './components/pages/HomePage';
import './components/pages/AboutPage';
import './components/pages/ErrorPage';
import './components/pages/BlogPage';
import './components/pages/AdminPage';
import './components/molecules/Footer';
import './components/organisms/Navigation';

class App extends Component {
  render() {
    return `
        <div class="main-layout">
            <shop-navigation></shop-navigation>
           <main>
            <app-router>
              <app-route 
                path="${routes.home.href}" 
                title="Главная" 
                component="${routes.home.component}">
              </app-route>

              <app-route 
                path="${routes.blog.href}" 
                title="Блог" 
                component="${routes.blog.component}">
              </app-route>

              <app-route 
                path="${routes.about.href}" 
                title="О нас" 
                component="${routes.about.component}">
              </app-route>

              <app-route 
                path="${routes.cart.href}" 
                title="Корзина" 
                component="${routes.cart.component}">
              </app-route>

              <app-route 
                path="${routes.admin.href}" 
                title="Admin" 
                component="${routes.admin.component}">
              </app-route>
              
              <app-route 
                path="${routes.error.href}" 
                title="Error" 
                component="${routes.error.component}">
              </app-route>

              <app-outlet></app-outlet>

            </app-router>
           </main>
           <shop-footer></shop-footer>
        </div>
        `;
  }
}

customElements.define('shop-app', App);
