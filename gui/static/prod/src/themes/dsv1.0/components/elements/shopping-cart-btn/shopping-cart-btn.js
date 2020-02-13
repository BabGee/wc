import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { ShoppingCartBtnBase } from "../../../../../elements/base/shopping-cart-btn.js";
import { ShoppingCartBtnStyles } from "./shopping-cart-btn-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/
// TODO IMPLEMENT OWN LOCAL STORAGE

class ShoppingCartBtn extends ShoppingCartBtnBase {
  static get styles() {
    return [ShoppingCartBtnStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
             <div class="menu-fab" @click=${this.shopping}>
             <a id="shopping">     <iron-icon icon="icons:shopping-cart"></iron-icon></a>
             <div class="cart-badge" aria-hidden="true">${this.carted}</div>
            </div>
             `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

}

customElements.define(ShoppingCartBtn.is, ShoppingCartBtn);