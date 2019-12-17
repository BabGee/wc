import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/paper-swatch-picker/paper-swatch-picker.js";
import { ColorInputBase } from "../../../../elements/base/color-input.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ColorInput extends ColorInputBase {
  createRenderRoot() {
    return this;
  }

  renderDefault() {
    return html`
           
           <div class="column">
 <div class="field">
 ${this.title} 
        <paper-swatch-picker id="input" color="${this.value}"></paper-swatch-picker>
        </div>
        </div>
        `;
  }

  static get properties() {
    return {};
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    //   return this.selectedColor;
    return this.getInput().color;
  }

  valid(validation) {}

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

}

customElements.define(ColorInput.is, ColorInput);