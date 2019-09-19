import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { DropdownSelectBase } from "../../../../elements/base/dropdown-select.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DropdownSelect extends DropdownSelectBase {
  renderDefault() {
    return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<style>
  /*Dropdown select*/
.dropdown-item-select .dropdown-item-header{
  width: 100%!important;
  background: #fff;
  padding: 10px 20px;
  position: relative;
  cursor: pointer;
  /*-webkit-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);*/
}
.dropdown-item-select .dropdown-item-header::after{
  content: '';
  width: 8px;
  height: 8px;
  border-left: 2px solid #4a4a4a;
  border-bottom: 2px solid #4a4a4a;
  border-right: 2px solid transparent;
  border-top: 2px solid transparent;
  position: absolute;
  transform: rotate(-43deg);
  top: 14px;
  right: 14px;
}
.dropdown-item-select .dropdown-item-header p{
  font-size: 14px;
  font-weight: 500;
  color: #013243;
}
.dropdown-item-body{
  padding: 0;
  background: #fff;
}
.dropdown-item-body ul li{
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 20px;
  font-weight: lighter;
  font-size: 14px;
}
</style>
<div class="dropdown-item-select">
    <div class="dropdown-item-header">
        <p>Dropdown item select</p>
    </div>
    <div class="dropdown-item-body">
        <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
        </ul>
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