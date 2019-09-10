import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { ToggleInputBase } from "../../../../elements/base/toggle-input.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ToggleInput extends ToggleInputBase {
  render() {
    return html`
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
 <div class="column">
<div class="field">
<label class="switch">
  <input type="checkbox" id="input" required=${this.required}>
  <span class="slider round"></span>
</label>
 <label for="switch">${this.name}</label>
  </div>
  </div>`;
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