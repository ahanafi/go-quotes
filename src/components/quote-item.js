class QuoteItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set quote(quote) {
        this._quote = quote;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            .quotes-item{
                width: 100%;
                box-sizing: border-box;
                padding: 25px;
                text-align: left;
                border: 1px solid #ccc;
                border-radius: 7.5px;
                box-shadow: 3px 4px 7px #ccc;
                margin-bottom: 10px;
            }
            :host .quote-text {
                font-style: italic;
            }

            :host .quote-author {
                padding-top: 30px;
                font-style: normal;
            }
            </style>
            <div class="quotes-item">
                "<i>${this._quote.content}</i>"
                <br>
                <span class="quote-author">
                    <b>- ${this._quote.author} -</b>
                </span>
            </div>
            `;
    }
}

customElements.define('quote-item', QuoteItem);