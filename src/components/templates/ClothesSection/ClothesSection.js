import { Component } from '../../../core/Component';
import '../../molecules/SearchForm';
import '../../molecules/CategoryItems';
import './ClothesSection.scss';


class ClothesSection extends Component {
    static get observedAttributes() {
        return ['categories']
    }
  render() {
    const categories = this.props.categories
    return `
            <div class="card text-center">
                <div class="card-header d-flex">
                    <ul class="nav nav-tabs card-header-tabs d-flex">
                        <category-items items='${categories}'></category-items>
                    </ul>
                    <search-form></search-form>
                </div>
            </div>
        `;
  }
}

customElements.define('shop-clothessection', ClothesSection);
