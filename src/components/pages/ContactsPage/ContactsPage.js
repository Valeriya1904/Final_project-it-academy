import { Component } from "../../../core/Component";

class ContactsPage extends Component {
    render() {
        return `
            <h1>Contacts Page</h1>
        `
    }
}

customElements.define('contacts-page', ContactsPage)