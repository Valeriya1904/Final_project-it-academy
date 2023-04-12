import { Component } from "../../../core/Component";

class Header extends Component {
    render() {
        return `
            <shop-link>Одежа</shop-link>
        `
    }
}

customElements.define('shop-header');