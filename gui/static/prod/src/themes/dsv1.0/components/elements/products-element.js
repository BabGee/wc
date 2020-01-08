import{html,SectionPElementDsc}from"../../../../components/adaptive-ui.js";class ProductsElement extends SectionPElementDsc{constructor(){super()}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
      .ii__product{
        width: 100%;
        height: 150px;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        position: relative;
        color: #4a4a4a;
      }
      .ii__product:hover{
        box-shadow: 1px 1px 11px 0 hsla(0, 0%, 79.2%, 0.5);
      }
      .ii__product-logo{
        position: absolute;
        width: 60px;
        height: 60px;
        background: #1C1565;
        border-radius: 50%;
        left: 37%;
        top: -44px;
      }
      .ii__product-logo img{
        width: 75%;
        position: relative;
        top: 30%;
        left: 16%;
      }
    </style>
    <div class="columns is-multiline">
    ${this.rows.map(slide=>html` 
     
    <div class="column">
        <a href="${this._getLink(slide[1])}" target="_blank">
          <div class="ii__product">
            <div class="ii__product-logo">
              <img src="/media/${slide[3]}" alt="products logo">
            </div>
            <div class="ii__content">
              <h3 class="is-size-6 ii__title has-text-weight-bold">${this._getTitle(slide[1])}</h3>
              <p class="ii__paragraph is-size-7">${slide[2]}</p>
            </div>
          </div>
        </a>
      </div>
    
    `)}
    </div>
        `}static get is(){return"products-element"}static get properties(){return{}}_getLink(text){let[title,link]=text.split("|");return link}_getTitle(text){let[title,link]=text.split("|");return title}}customElements.define(ProductsElement.is,ProductsElement);var productsElement={ProductsElement:ProductsElement};export{productsElement as $productsElement,ProductsElement};