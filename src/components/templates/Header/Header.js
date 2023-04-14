import { Component } from "../../../core/Component";
import '../../organisms/Navigation';
class Header extends Component {
    render() {
        return `
        <shop-navigation></shop-navigation>
        `
    }
}

customElements.define('shop-header', Header);