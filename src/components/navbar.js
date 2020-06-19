class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(evt) {
        this._clickEvent = evt;
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host{
                    width: 100%;
                    display: block;
                    height: 40px;
                    align-items: center;
                    box-sizing: border-box;
                }

                :host ul {
                    width: 100%;
                    box-sizing: border-box;
                    display: block;
                    margin-top: 10px;
                }

                :host ul li {
                    float: right;
                    align-content: center;
                    margin-right: 20px;
                    list-style:none;
                }

                :host ul li a {
                    color: #3f3f3f;
                    margin-top: 10px;
                    font-size: 10px;
                    text-align: center;
                    height: 40px;
                    display: block;
                    text-decoration:none;
                }

                :host ul li a:hover {
                    text-decoration: underline;
                }

                li.user img {
                    float: right;
                    width: 30px;
                    border-radius: 50%;
                }
            </style>
            <div id="navbar">
                <ul>
                    <li class="user">
                        <img src="src/img/me.jpg" alt="" class="img-user">
                    </li>
                    <li><a id="get-categories" href="#">Show Categories</a></li>
                    <li><a href="https://www.dicoding.com/users/9991" target="_blank">My Profile</a></li>
                </ul>
            </div>`;
        const input = this.shadowDOM.querySelector("#get-categories");
        input.addEventListener("click", this._clickEvent);
    }
}

customElements.define('nav-bar', NavBar);