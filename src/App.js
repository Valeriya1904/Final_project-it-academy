import { Component } from './core/Component';
// import { eventEmmiter } from './core/EventEmmiter';
// import { APP_EVENTS } from './constants/appEvents';

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