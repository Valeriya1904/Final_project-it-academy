import { Component } from '../../../core/Component';
import '../../molecules/Card';

class CardList extends Component {
  static get observedAttributes() {
    return ['products'];
  }

  render() {
    console.log(this.props.products);
    const products = JSON.parse(this.props.products);

    return `
        <div class="row">
            ${products
              .map((item) => {
                return `
                <div class="col-sm-3 mb-3">
                    <shop-card
                        image='${item.images[0]}'
                        title='${item.title}'
                        price='${item.price}'
                        description='${item.description}'
                        id='${item.id}'
                    ></shop-card>
                </div>
                `;
              })
              .join(' ')}
        </div>
        `;
  }
}

customElements.define('card-list', CardList);
