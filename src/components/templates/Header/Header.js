import { Component } from '../../../core/Component';
import '../../organisms/Navigation';
import './Header.scss';

class Header extends Component {
  render() {
    return `
        <shop-navigation></shop-navigation>
        <div class="content">
            <h2 class="content__text">Buy Clothes</h2>
            <button class="content__btn">Go shopping</button>
        </div>
        `;
  }
}

customElements.define('shop-header', Header);
