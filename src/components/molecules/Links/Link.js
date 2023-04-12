import { Component } from "../../../core/Component";

class Link extends Component {
    render() {
        return `
            <a class='link'></a>
        `
    }
}

customElements.define('shop-link');