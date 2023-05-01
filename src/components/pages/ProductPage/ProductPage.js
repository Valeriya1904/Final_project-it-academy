import { Component } from '../../../core/Component';
import { databaseService } from '../../../services/DatabaseService';

class ProductPage extends Component {
  static get observedAttributes() {
    return ['id']
  }




  componentDidMount() {
    this.getProducts();
  }
  render() {
    return `
            <h1>Product Page</h1>
        `;
  }
}

customElements.define('product-page', ProductPage);
