import { Component } from "../../../core/Component";

class CartPage extends Component {
    render() {
        return `
            <h1>Cart Page</h1>
        `
    }
}

customElements.define('cart-page', CartPage)