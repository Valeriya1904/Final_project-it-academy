import { Component } from './core/Component';
import './components/templates/Header';

class App extends Component {
    render() {
        return `
           <shop-header></shop-header>
        `
    }
}

customElements.define('shop-app', App)