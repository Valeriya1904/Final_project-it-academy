import { Component } from '../../../core/Component';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import './Card.scss';
import { APP_ROUTES } from '../../../constants/appRoutes';

class Card extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'description', 'price', 'id'];
  }

  addToCart = (evt) => {
    if (evt.target.closest('.btn')) {
      if (storageService.getItem('user')) {
        const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
        storageService.setItem(APP_STORAGE_KEYS.cartData, [...allItems, this.props]);
      } else {
        eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.signUp });
      }
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.addToCart);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addToCart);
  }
  render() {
    const { image, title, description, price } = this.props;
    return `
        <div class="card">
            <img class="card__img" src="${image}" alt="img" class="rounded">
            <div class="card-body">
                <h5 class="card-title fix-line-of-title text-center">${title}</h5>
                <p class="card-text fix-line-of-description">${description}</p>
                <div class='d-flex justify-content-between align-items-center border-top pt-2'>
                <strong class="card-title pricing-card-title mb-0">
                ${price}$
                </strong>
                <button class="btn btn-secondary">Buy</button>
            </div>
        </div>
        `;
  }
}

customElements.define('shop-card', Card);
