import { Component } from '../../../core/Component';

import '../../organisms/RegisterForm';
import '../../molecules/Preloader';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { authService } from '../../../services/Auth';
import { APP_ROUTES } from '../../../constants/appRoutes';

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      errorMessage: '',
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  setError(error) {
    this.setState((state) => {
      return {
        ...state,
        errorMessage: error,
      };
    });
  }

  register = async ({ detail }) => {
    const { data } = detail;
    this.setIsLoading(true);
    try {
      const user = await authService.signUp(data.email, data.password);
      // storageService.removeItem('user');
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.home });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.signUp, this.register);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.signUp, this.register);
  }

  render() {
    const message = this.state.errorMessage;
    return `
        <shop-preloader is-loading="${this.state.isLoading}">
            <div class="container mt-5">
                <div class="row justify-content-center mt-5">
                    <div class="col-6 mt-5 mb-5">
                        <div class="border p-5">
                            <h1 class="text-center mt-2">Sign Up</h1>
                            <div class="invalid-feedback d-block">${message}</div>
                            <register-form></register-form>
                        </div>
                    </div>
                <div>
            </div>
        </shop-preloader>
    `;
  }
}

customElements.define('sign-up-page', SignUpPage);
