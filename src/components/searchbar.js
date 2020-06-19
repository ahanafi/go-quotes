class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render()
    }

    set keyUpEvent(evt) {
        this._keyUpEvent = evt;
        this.render();
    }

    set value(value) {
        this.shadowDOM.querySelector("#inp-form").value = value;
    }

    get value() {
        return this.shadowDOM.querySelector("#inp-form").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host{
                    box-sizing: border-box;
                    margin-top: 20px;
                    margin-bottom: 30px;
                    width: 100%;
                }
                #search-bar{
                    padding-right: 10%;
                    padding-left: 10%;
                }
                #inp-form {
                    width: 100%;
                    padding: 10px;
                    border-radius: 25px;
                    border: 1px solid #cecece;
                    box-shadow: 1px 1px 1px #cdcdcd;
                }

                :host #inp-form:focus,
                #inp-form:active {
                    border: 1px solid #cecece;
                }
            </style>
            <div id="search-bar">
                <input autofocus type="text" id="inp-form" placeholder="Type keyword here, then Enter...">
            </div>`;
        const input = this.shadowDOM.querySelector("#inp-form");
        input.addEventListener("keyup", this._keyUpEvent);
    }
}

customElements.define('search-bar', SearchBar);