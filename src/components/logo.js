class Logo extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                .blue {
                    color: #4285f4;
                }
                .red {
                    color: #eb4335;
                }
                .green {
                    color: #4ea853;
                }
                .yellow {
                    color: #fbbd34;
                }
                :host {
                    padding-top: 50px;
                    margin: 0 auto;
                    text-align: center;
                    width: 100%;
                }
                #logo{
                    padding-top:60px;
                }
                :host span {
                    font-size: 5em;
                    margin: 0 !important;
                    margin-block-start: 0 !important;
                    margin-right: 3px;
                    font-family: ProductSansFont;
                    text-align: center;
                    font-weight: bolder;
                }
            </style>
            <div id="logo">
                <span class="blue">G</span>
                <span class="red">o</span>
                <span class="yellow">Q</span>
                <span class="blue">u</span>
                <span class="green">o</span>
                <span class="red">t</span>
                <span class="yellow">e</span>
                <span class="blue">s</span>
            </div>`;
    }
}

customElements.define('my-logo', Logo);