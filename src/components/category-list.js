import './category-item.js';

class CategoryList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set category(category) {
        this._category = category;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = ``;
        this._category.forEach(category => {
            const categoryItem = document.createElement("category-item");
            categoryItem.category = category;
            this.shadowDOM.appendChild(categoryItem);
        });
    }

    renderError(msg) {
        this.shadowDOM.innerHTML = `
            <style>
                .error-msg{
                    font-weight:bold;
                    color:red;
                }
            </style>
            <h3 class='error-msg'>${msg}</h3>`;
    }
}

customElements.define('category-list', CategoryList);