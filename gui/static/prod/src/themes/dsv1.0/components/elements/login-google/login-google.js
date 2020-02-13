import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { LoginGoogleBase } from "../../../../../elements/base/login-google.js";
import { LoginGoogleStyles } from "./login-google-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LoginGoogle extends LoginGoogleBase {
  static get styles() {
    return [LoginGoogleStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
        
 
              <div class="column">
        <div class="field">
        <a class="button is-rounded is-medium" style="background-color: #F14336; color:#fff; width: 40px; height: 60px;">
    <span class="icon">
      <i><iron-icon icon="social:google"></iron-icon></i>
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

  invalid(validation) {}

  valid(validation) {}

}

customElements.define(LoginGoogle.is, LoginGoogle);