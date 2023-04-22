import { Component } from '../../../core/Component';
import './Card.scss';

class Card extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'description', 'price', 'id'];
  }
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
            <img src="${image}" alt="">
            <div class="card-body">
                <h5 class="card-title fix-line-of-title">${title}</h5>
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
