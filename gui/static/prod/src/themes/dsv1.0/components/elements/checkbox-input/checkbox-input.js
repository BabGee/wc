import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { CheckboxInputBase } from "../../../../../elements/base/checkbox-input.js";
import { CheckboxInputStyles } from "./checkbox-input-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CheckboxInput extends CheckboxInputBase {
  // createRenderRoot() {return this;}
  renderDefault() {
    return html`
    <div class="column">
      <div class="checkbox">
          <input type="checkbox" id="checkbox_1">
          <label for="checkbox_1">${this.name}</label>
      </div>
    </div>
`;
  }

  static get properties() {
    return {
      'rounded': Boolean
    };
  }

  static get styles() {
    return [CheckboxInputStyles, css`
        :host {
          display: block;
        }
      `];
  }

  constructor() {
    super();
    this.rounded = false;
  }

  getInput() {
    return this.qs('input');
  }

  getValue() {
    return this.qs('#checkbox_1').checked ? 'on' : 'off';
  }

  valid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.rounded = this.e.details['rounded'] || false;
    this.shadowRoot.querySelector('#checkbox_1').checked = this.checked;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

window.customElements.define(CheckboxInput.is, CheckboxInput);