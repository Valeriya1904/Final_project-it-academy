import { Component } from '../../../core/Component';

class ProductPage extends Component {
  render() {
    return `
            <h1>Product Page</h1>
        `;
  }
}

customElements.define('product-page', ProductPage);
