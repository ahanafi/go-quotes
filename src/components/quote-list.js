import './quote-item.js';

class QuoteList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set quote(quote) {
        this._quote = quote;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = ``;
        this._quote.forEach(quote => {
            const quoteItem = document.createElement("quote-item");
            quoteItem.quote = quote;
            this.shadowDOM.appendChild(quoteItem);
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

customElements.define('quote-list', QuoteList);