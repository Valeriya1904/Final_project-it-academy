import { Component } from '../../../core/Component';
import '../../molecules/SearchForm';
import '../../molecules/CategoryItems';
import './CatalogControls.scss';



class CatalogControls extends Component {
    static get observedAttributes() {
        return ['categories']
    }
  render() {
    const categories = this.props.categories
    return `
        <nav class="navbar navbar-expand-lg ">
        <div class="container mt-5">
            <div class="collapse navbar-collapse d-flex mt-5">
            <category-items items='${categories}'></category-items>
            <search-form></search-form>
            </div>
        </div>
        </nav>
        `;
  }
}

customElements.define('catalog-controls', CatalogControls);
