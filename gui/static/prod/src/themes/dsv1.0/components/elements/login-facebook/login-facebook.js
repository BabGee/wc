import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { LoginFacebookBase } from "../../../../../elements/base/login-facebook.js";
import { LoginFacebookStyles } from "./login-facebook-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LoginFacebook extends LoginFacebookBase {
  static get styles() {
    return [LoginFacebookStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`

      
                 <div class="column">
        <div class="field">
        <a class="button is-rounded is-medium" style="background-color: #3578E5; color:#fff; width: 40px; height: 60px;">
    <span class="icon">
      <i><iron-icon icon="social:facebook"></iron-icon></i>
    </span>
  </a>
        </div>
        </div>
        `;
  }

  constructor() {
    super();
  }

}

customElements.define(LoginFacebook.is, LoginFacebook);