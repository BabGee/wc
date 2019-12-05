import { LitElement, html } from "../../../../../node_modules/lit-element/lit-element.js";
import { BaseElement } from "../../../../core/base-element.js";
import { SectionPElementDsc } from "../../../../elements/base/section-pelement-dsc.js";
export class ProductsElement extends SectionPElementDsc {
  constructor() {
    super();
  }

  render() {
    return html`
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
    ${this.rows.map(slide => html` 
     
    <div class="column">
        <a href="#">
          <div class="ii__product">
            <div class="ii__product-logo">
              <img src="${slide[3]}" alt="products logo">
            </div>
            <div class="ii__content">
              <h3 class="is-size-6 ii__title has-text-weight-bold"> ${slide[1]}</h3>
              <p class="ii__paragraph is-size-7">${slide[2]}</p>
            </div>
          </div>
        </a>
      </div>
    
    `)}
    </div>
        `;
  }

  static get is() {
    return 'products-element';
  }

  static get properties() {
    return {};
  }

}
customElements.define(ProductsElement.is, ProductsElement);