import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { TextViewBase } from "../../../../elements/base/text-view.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TextView extends TextViewBase {
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