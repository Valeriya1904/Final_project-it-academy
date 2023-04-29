import { Component } from '../../../core/Component';

class ProductPage extends Component {
  static get observedAttributes() {
    return ['id']
  }

  componentDidMount() {
    const product = this.state.products.find((item) => item.id === this.props.id);
    console.log(product);
  }
  render() {
    return `
            <h1>Product Page</h1>
        `;
  }
}

customElements.define('product-page', ProductPage);
