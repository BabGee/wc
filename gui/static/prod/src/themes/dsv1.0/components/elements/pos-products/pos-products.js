import { PosProductsBase } from "../../../../../elements/base/pos-products.js";
import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { PosProductsStyles } from "./pos-products-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class PosProducts extends PosProductsBase {
  static get styles() {
    return [PosProductsStyles, css`
            :host {
              display: block;
            }
          `];
  }

  constructor() {
    super();
  }

  renderDefault() {
    return html`

    
    <div class="title_section">
        <div class="wrapper">
            <h2><strong>${this.name}</strong></h2>
        </div>
    </div>
    <section class="product_list_nav">
        <div class="container u-full-width">
            <ul>
                <li class="view_type">
                    <span class="active">x</span>
                    <span>y</span>
                    <div class="cb"></div>
                </li>
                <li class="calculaor">
                    <span></span>
                    calculaor
                </li>
                <li class="code">
                    <span></span>
                    <input type="text" placeholder="Enter code">
                </li>
            </ul>
        </div>
     </section>
    <section class="shop-products-section">
        <div class="container u-full-width">

            <template
                    is="dom-repeat"
                    items="[[items]]"
                    as="row">

                <div class="product_section">
                    <div class="wrapper">
                        <template
                                is="dom-repeat"
                                items="[[row]]"
                                as="product">
                            <div class="two columns">
                                <div class="product">
                                    <pos-product-item product="[[product]]">
                                    </pos-product-item>
                                </div>
                            </div>
                        </template>
                        <div class="cb"></div>
                    </div>
                    </div>

            </template>
        </div>
    </section>
        `;
  }

}

customElements.define(PosProducts.is, PosProducts);