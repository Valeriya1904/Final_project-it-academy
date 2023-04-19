import { Component } from "../../../core/Component";

class CatalogPage extends Component {
    render() {
        return `
            <h1>Catalog Page</h1>
        `
    }
}

customElements.define('catalog-page', CatalogPage)