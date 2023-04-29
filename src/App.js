import { Component } from './core/Component';
import { routes } from './constants/routes';
import { authService } from './services/Auth';
import { eventEmmiter } from './core/EventEmmiter';
import { APP_EVENTS } from './constants/appEvents';

import './core/Router/Router';
import './components/templates/CatalogControls';
import './components/pages/CartPage';
import './components/pages/HomePage';
import './components/pages/AboutPage';
import './components/pages/ErrorPage';
import './components/pages/BlogPage';
import './components/pages/SignUpPage';
import './components/pages/SignInPage';
import './components/molecules/Preloader';
import './components/pages/SignOutPage';
import './components/pages/AdminPage';
import './components/molecules/Footer';
import './components/organisms/Navigation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      user: null,
    };
  }

  setUser(user) {
    this.setState((state) => {
      return {
        ...state,
        user,
      };
    });
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  async authorizeUser() {
    this.setIsLoading(true);
    try {
      const user = await authService.authorizeUser();
      this.setUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  onAuthorizeUser = ({ detail }) => {
    this.setUser(detail.user);
  };

  componentDidMount() {
    this.authorizeUser();
    eventEmmiter.on(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }
  render() {
    return `
    <shop-preloader is-loading="${this.state.isLoading}">
        <div class="main-layout">
            <shop-navigation user='${JSON.stringify(this.state.user)}'></shop-navigation>
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
                path="${routes.signUp.href}" 
                title="Sign Up" 
                component="${routes.signUp.component}">
              </app-route>

              <app-route 
                path="${routes.signIn.href}" 
                title="Sign Up" 
                component="${routes.signIn.component}">
              </app-route>

              <app-route 
                path="${routes.signOut.href}" 
                title="Sign out" 
                component="${routes.signOut.component}">
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
        </shop-preloader>
        `;
  }
}

customElements.define('shop-app', App);
