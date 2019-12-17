import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/paper-swatch-picker/paper-swatch-picker.js";
import { SharedStyles } from "../../styles/shared-styles.js";
import { ColorInputBase } from "../../../../elements/base/color-input.js";

class ColorInput extends ColorInputBase {
  renderDefault() {
    return html`
            ${SharedStyles}
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

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(ColorInput.is, ColorInput);