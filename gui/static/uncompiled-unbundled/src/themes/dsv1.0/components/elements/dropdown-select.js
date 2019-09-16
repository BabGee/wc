import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { DropdownSelectBase } from "../../../../elements/base/dropdown-select.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DropdownSelect extends DropdownSelectBase {
  renderDefault() {
    return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<style>
  .inp{
    border-radius: 6px!important;
    font-size: 14px!important;
    padding: 20px!important;
    line-height: 1;
    background-color: #fcfcfc!important;
    border: 1px solid #a3a3a4!important;
    box-shadow: 0 0 0 transparent!important;
  }
</style>
<div class="field">
  <!-- <label class="label">${this.e.name}</label> -->
<div class="control">
  <div class="select is-loading">
    <select id="input" class="inp">
    ${this._computeItems(this.rows, this.q).map(data => html`
      <option value="${data[0]}" ?selected="${this.e.kind === data[0]}">${this._dataJoined(data)}</option>
    `)}
    </select>
  </div>
</div>
</div>`;
  }

  static get properties() {
    return {
      icon: String,
      dataName: {
        type: String,
        value: ''
      },
      service: String,
      title: String,
      maxlength: Number,
      pattern: String,
      q: {
        type: String,
        value: ''
      },
      dropdownValue: Object,
      rows: {
        value: []
      },
      params: {
        type: Object,
        value: ''
      },
      columnSize: {
        type: Array
      }
    };
  }

  getValue() {
    const select = this.shadowRoot.querySelector('#input');
    this.dropdownValue = select.value;
    return this.dropdownValue;
  }

  valid(validation) {}

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

}

customElements.define(DropdownSelect.is, DropdownSelect);