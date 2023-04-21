import { Component } from '../../../core/Component';

class Footer extends Component {
  render() {
    return `
    <div class="container">
        <footer>
          <div class="d-flex flex-column flex-sm-row   border-top">
            <p>© 2022 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
        `;
  }
}

customElements.define('shop-footer', Footer);
