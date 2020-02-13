import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { MenuServiceButtonBase } from "../../../../../elements/base/menu-service-button.js";
import { MenuServiceButtonStyles } from "./menu-service-button-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class MenuServiceButton extends MenuServiceButtonBase {
  static get styles() {
    return [MenuServiceButtonStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
          <div class="box">
              <div id="container">
                <div class="ccc">
                    <div class="feature-wrap">
                    <iron-icon style="width:88px !important;height: 88px !important;"
                               icon="[[icon]]"></iron-icon>
                    </div>
                    <h3>${this.name}</h3>
                </div>
              </div>
          </div>
        `;
  }

}

window.customElements.define(MenuServiceButton.is, MenuServiceButton);