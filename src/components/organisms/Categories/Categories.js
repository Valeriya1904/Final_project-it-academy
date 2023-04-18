import { Component } from '../../../core/Component';
import './Categories.scss';

class Categories extends Component {
  render() {
    return `
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="true" href="#">Clothes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Shoes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Accessories</a>
              </li>
            </ul>
          </div>
        </div>
        `;
  }
}

customElements.define('shop-categories', Categories);
