class CategoryItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();
  }

  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
            .category-item{
                max-width:200px;
                float:left;
                box-sizing: border-box;
                padding: 10px;
                text-align: left;
                border: 1px solid #ccc;
                border-radius: 7.5px;
                box-shadow: 3px 4px 7px #ccc;
                margin-left:10px;
                margin-bottom: 5px;
            }
            button:hover{
                cursor:pointer;
                background: #b9b7b7;
                color:#fff;
                transition:0.75s;
            }
            </style>
            <button class='category-item' data-value="${this._category.name}">${this._category.name}</button>
            `;
    const button = this.shadowDOM.querySelector(".category-item");
    button.addEventListener("click", (el) => {
      const category = button.getAttribute("data-value");
      alert(`Copy "${category}" to input area, and then type Enter.`);
    });
  }
}

customElements.define("category-item", CategoryItem);
