import { Component } from '../../../core/Component';
import '../../atoms/Links';
import '../../../core/Router/Link';

class MenuItems extends Component {
  static get observedAttributes() {
    return ['items', 'active-item'];
  }

  render() {
    const items = JSON.parse(this.props.items);

    return `
      <ul class="__links list-unstyled d-inline-flex">
        ${items
          .map(
            (item) =>
              `
          <li><a class="nav-link active" href="${item.href}">${item.label}</a></li>
          `,
          )
          .join(' ')}
      </ul>
         `;
  }
}

customElements.define('menu-items', MenuItems);
