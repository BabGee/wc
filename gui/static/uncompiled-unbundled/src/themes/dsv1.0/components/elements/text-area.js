import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { TextAreaBase } from "../../../../elements/base/text-area.js";
import { Logger } from "../../../../core/logger.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TextArea extends TextAreaBase {
  renderDefault() {
    return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<style>
.text-area .field.success{
    position: relative;
}
.text-area textarea{
    height: 200px;
    position: relative;
    font-size: 16px!important;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #013243;
    padding: 25px;
    border-radius: 6px;
    border: solid 1px #b7b5b5;
}
.text-area textarea::-webkit-input-placeholder { /* Edge */
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #013243!important;
}
.text-area textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #013243!important;
}
.text-area textarea::placeholder{
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #013243!important;
}
.text-area .field.success::before{
    content: '\f00c';
    position: absolute;
}
</style>
<div class="text-area">
  <div class="field">
      <div class="control">
          <textarea class="textarea" placeholder=${this.e.name}>${this.value}</textarea>
      </div>
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