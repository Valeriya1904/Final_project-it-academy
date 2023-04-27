import { Component } from '../../../core/Component';
import '../../atoms/Links';
import '../../../core/Router/Link';

class MenuItems extends Component {
  static get observedAttributes() {
    return ['items', 'active-item'];
  }

  isActive(menuItem) {
    const item = this.props['active-item'];
    if (!item) {
      return false;
    }
    const activeItem = item ? JSON.parse(item) : {};
    return menuItem.href === activeItem.href;
  }

  render() {
    const items = JSON.parse(this.props.items);

    return `
      <ul class="__links list-unstyled d-inline-flex ">
        ${items
          .map(
            (item) =>
              `
              <li class="nav-item mx-3">
              <route-link to="${item.href}">
                <shop-link 
                  class="${this.isActive(item) ? 'active' : ''}"
                  href="${item.href ? item.href : ''}"
                  content="${item.label}"
                ></shop-link>
              </route-link>
            </li>
          `,
          )
          .join(' ')}
      </ul>
         `;
  }
}

customElements.define('menu-items', MenuItems);
