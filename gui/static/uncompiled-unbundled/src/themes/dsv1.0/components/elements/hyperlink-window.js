import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { HyperlinkWindowBase } from "../../../../elements/base/hyperlink-window.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class HyperlinkWindow extends HyperlinkWindowBase {
  render() {
    return html`
                 <div class="column is-3 is-offset-5">
        <div class="field" style="margin-top: 20px; margin-bottom: 20px;">
        <a href="${this.e.defaultValue}" 
            class="button button-cta  raised primary-btn btn-outlined" 
            @click="${this._linkClick}" 
            style="width: 100%;">
            <span><iron-icon icon="${this.e.icon}"></iron-icon>${this.e.name}</span>
        </a>
        </div>

        `;
  }

}

customElements.define(HyperlinkWindow.is, HyperlinkWindow);