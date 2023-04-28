import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import './serchForm.scss';

class SearchForm extends Component {
  onSearch = (evt) => {
    evt.preventDefault();
    const data = {};
    const formData = new FormData(evt.target);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (data.search) {
      eventEmmiter.emit(APP_EVENTS.searchProducts, { data });
    }
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSearch);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSearch);
  }

  render() {
    return `
        <form class="search d-flex ms-5" role="search">
          <input name='search' class="form-control me-2 search__input" type="search" placeholder="Поиск..." aria-label="Search">
          <button class="btn btn btn-secondary search__button d-flex align-items-center" type="submit">Поиск</button>
        </form>
        `;
  }
}

customElements.define('search-form', SearchForm);