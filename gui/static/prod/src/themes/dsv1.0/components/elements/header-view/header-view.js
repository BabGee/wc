import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { HeaderViewStyles } from "./header-view-css.js";
import { HeaderViewBase } from "../../../../../elements/base/header-view.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class HeaderView extends HeaderViewBase {
  static get styles() {
    return [HeaderViewStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
      <div class="field">
        <h2>${this.text}<h2>
      </div> `;
  }

}

window.customElements.define(HeaderView.is, HeaderView);