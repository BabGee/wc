import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { CheckboxInputBase } from "../../../../elements/base/checkbox-input.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CheckboxInput extends CheckboxInputBase {
  createRenderRoot() {
    return this;
  }

  renderDefault() {
    return html`
<style>
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 3px solid #4a4a4a
}
.container:hover input ~ .checkmark {
  background-color: #ccc;
}
.container input:checked ~ .checkmark {
  background-color: #fff;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark::after {
  display: block;
}
.container .checkmark::after {
  left: 7px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #4a4a4a;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
<div class="collumn">
  <label class="container"> <p class="is-size-6">${this.name}</p>
    <input type="checkbox" >
    <span class="checkmark"></span>
  </label>
</div>
`;
  }

  static get properties() {
    return {
      'rounded': Boolean
    };
  }

  constructor() {
    super();
    this.rounded = false;
  }

  getInput() {
    return this.qs('input');
  }

  getValue() {
    return this.shadowRoot.querySelector('#input').checked ? 'on' : 'off';
  }

  valid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.rounded = this.e.details['rounded'] || false;
    this.shadowRoot.querySelector('#input').checked = this.checked;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

window.customElements.define(CheckboxInput.is, CheckboxInput);