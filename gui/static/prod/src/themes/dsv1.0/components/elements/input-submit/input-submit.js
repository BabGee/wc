import { InputSubmitBase } from "../../../../../elements/base/input-submit.js";
import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { InputDefaultStyles } from "../../../styles/input-shared-default.js";
import { InputLabelAnimationtStyles } from "../../../styles/input-label-animation.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class InputSubmit extends InputSubmitBase {
  constructor() {
    super();
  }

  static get styles() {
    return [InputDefaultStyles, InputLabelAnimationtStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
      <div class="column">
        <div class="input-mixin input-effect">
          <input class="label-animation" type="${this.type}" class="input is-medium" id="input"  name=${this.e.name} value=${this.value} required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max} @keyup="${this.count}">
          <label>${this.e.name}</label>
          <span class="focus-bg"></span>
        </div>
      </div>
      `;
  }

}

window.customElements.define(InputSubmit.is, InputSubmit);