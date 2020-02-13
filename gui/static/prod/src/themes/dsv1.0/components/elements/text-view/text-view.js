import { html } from "../../../../../../node_modules/lit-element/lit-element.js";
import { TextViewBase } from "../../../../../elements/base/text-view.js";
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { TextViewStyles } from "./text-view-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TextView extends TextViewBase {
  static get styles() {
    return [TextViewStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`

<div class="field">
<article class="message is-primary">
  <div class="message-header">
    <p>${this.name}</p>
  </div>
  <div class="message-body">
   ${this.text}
  </div>
</article>
</div>

        `;
  }

}

window.customElements.define(TextView.is, TextView);