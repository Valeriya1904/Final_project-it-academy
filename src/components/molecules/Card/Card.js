import { Component } from '../../../core/Component';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import './Card.scss';

class Card extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'description', 'price', 'id',];
  }

  addToCart = (evt) => {
    if (evt.target.closest('.btn')) {
      const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
      storageService.setItem(APP_STORAGE_KEYS.cartData, [...allItems, this.props]);
    }
    // if (evt.target.closest('.card')) {
    //   eventEmmiter.emit(APP_EVENTS.changeRoute, { target: `home/${this.props.id}` });
    // }
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
