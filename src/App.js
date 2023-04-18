import { Component } from './core/Component';
import './components/templates/Header';
import './components/templates/ClothesSection';

class App extends Component {
    render() {
        return `
           <shop-header></shop-header>
           <shop-clothessection></shop-clothessection>
        `
    }
}

customElements.define('shop-app', App)