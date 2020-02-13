import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { ToggleInputBase } from "../../../../../elements/base/toggle-input.js";
import { ToggleInputStyles } from "./toggle-input-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ToggleInput extends ToggleInputBase {
  static get styles() {
    return [ToggleInputStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
<div class="main-container">
  <div class="column">
  <div class="field">
  <label class="switch">
    <input type="checkbox" id="input" required=${this.required}>
    <span class="slider round"></span>
  </label>
  <label for="switch" class="lbl">${this.name}</label>
    </div>
    </div>
  </div>
  `;
  }

  static get is() {
    return 'toggle-input';
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.getInput().checked;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // this.type = "text";
  }

}

window.customElements.define(ToggleInput.is, ToggleInput);