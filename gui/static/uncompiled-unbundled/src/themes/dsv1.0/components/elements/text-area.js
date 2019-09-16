import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { TextAreaBase } from "../../../../elements/base/text-area.js";
import { Logger } from "../../../../core/logger.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TextArea extends TextAreaBase {
  renderDefault() {
    return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<div class="field">
  <label class="label">${this.e.name}</label>
  <div class="control">
    <textarea class="textarea" id="input" placeholder="${this.e.name}">${this.value}</textarea>
  </div>
</div>
 `;
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.getInput().value;
  }

  valid(validation) {
    Logger.i.debug(validation);

    if (validation) {}
  }

  invalid(validation) {
    Logger.i.debug(validation);
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

}

window.customElements.define(TextArea.is, TextArea);