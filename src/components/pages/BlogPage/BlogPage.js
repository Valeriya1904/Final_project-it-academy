import { Component } from "../../../core/Component";

class BlogPage extends Component {
    render() {
        return `
            <h1>Blog Page</h1>
        `
    }
}

customElements.define('blog-page', BlogPage)