import { Component } from "../../../core/Component";
import '../../organisms/Categories';

class ClothesSection extends Component {
    render() {
        return `
            <shop-categories></shop-categories>
        `
    }
}

customElements.define('shop-clothessection', ClothesSection);