import { CATEGORIES } from '../../../constants/categories';
import { Component } from '../../../core/Component';
import '../../molecules/MenuItems';

class ClothesSection extends Component {
  render() {
    return `
            <div class="card text-center">
                <div class="card-header d-flex">
                    <ul class="nav nav-tabs card-header-tabs d-flex">
                        <menu-items items='${JSON.stringify(CATEGORIES)}'></menu-items>
                    </ul>
                    <form class="d-flex ms-5" role="search">
                        <input name='search' class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        `;
  }
}

customElements.define('shop-clothessection', ClothesSection);
