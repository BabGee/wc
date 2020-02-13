import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { LoginMipayBase } from "../../../../../elements/base/login-mipay.js";
import { LoginMipayStyles } from "./login-mipay-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LoginMipay extends LoginMipayBase {
  static get styles() {
    return [LoginMipayStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`

                        <div class="column">
        <div class="field">
        <a class="button is-rounded is-medium" style="background-color: #FBBB00; color:#fff; width: 40px; height: 60px;">
    <span class="icon">
      <i><iron-icon icon="mipayicon:mipayicon"></iron-icon></i>
    </span>
  </a>
        </div>
        </div>
        `;
  }

  constructor() {
    super();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(LoginMipay.is, LoginMipay);