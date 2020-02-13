import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { CheckboxCheckBase } from "../../../../../elements/base/checkbox-check.js";
import { CheckboxCheckStyles } from "./checkbox-check-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CheckboxCheck extends CheckboxCheckBase {
  static get styles() {
    return [CheckboxCheckStyles, css`
        :host {
          display: block;
        }
      `];
  } // createRenderRoot() {return this;}


  renderDefault() {
    return html`
    <label class="switch">
      <input type="checkbox" id="input"  name=${this.e.name} 
      type="checkbox"
      placeholder=${this.e.name} 
      required=${this.required}" >
      <span class="slider round"></span>
    </label>
    <small class="validation-info">Required</small>
    <span>${this.name}</span>
    `;
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.shadowRoot.querySelector('#input').checked ? 'on' : 'off';
  }

  valid(Validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'none'; // Revert general text content

    this.shadowRoot.querySelector('.validation-info').textContent = 'Required';
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'block';

    if (validation) {
      this.shadowRoot.querySelector('.validation-info').textContent = validation;
    }
  }

}

window.customElements.define(CheckboxCheck.is, CheckboxCheck);