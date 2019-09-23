import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { DropdownSelectBase } from "../../../../elements/base/dropdown-select.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DropdownSelect extends DropdownSelectBase {
  renderDefault() {
    return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<style>
  /*Dropdown select*/
  .dropdown-item-select{
    position: relative;
   -moz-user-select: none; 
   -webkit-user-select: none; 
   -ms-user-select:none; 
   user-select:none;
   -o-user-select:none;"
  }
.dropdown-item-select .dropdown-item-header{
  background: #fff;
  padding: 10px 20px 10px 10px;
  display:inline-block;
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
  right:4px;
}
.dropdown-item-select .dropdown-item-header p{
  font-size: 14px;
  font-weight: 500;
  color: #013243;
}
.dropdown-item-body{
  background: #fff;
  display: none;
  width:auto;
  position:absolute;
  padding: 10px 20px 10px 10px;

}
.dropdown-item-body ul li{
  
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 20px;
  font-weight: lighter;
  font-size: 14px;
}
.dropdown-item-body ul li:hover{
  background-color: #f1f1f1;

}
.is-active{
  background-color: #f1f1f1;
}
</style>
<div class="dropdown-item-select">
    <div class="dropdown-item-header" @click='${() => this.dropdown('head')}'>
        <p>${this.e.name}</p>
    </div>
    <div id="dropdown-item-body" class="dropdown-item-body">
        <ul>
        ${this._computeItems(this.rows, this.q).map(data => html`
        <li id="list-${data[0]}" class="" value="${data[0]}" ?selected="${this.e.kind === data[0]}"  @click='${() => this.dropdown(this._dataJoined(data), data[0])}'>${this._dataJoined(data)}</li>
    `)} 
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

  dropdown(link, data) {
    if (link == 'head') {
      this.shadowRoot.querySelector('.dropdown-item-body').classList.toggle('is-block');
    } else {
      const selected = this.shadowRoot.querySelector('.dropdown-item-header').querySelector('p');
      selected.innerHTML = link;
      const allLists = this.shadowRoot.querySelector('#dropdown-item-body').querySelectorAll('li');
      allLists.forEach(list => list.className = '');
      const selectedList = this.shadowRoot.querySelector('#list-' + data);
      selectedList.className = 'is-active';
      this.shadowRoot.querySelector('.dropdown-item-body').classList.toggle('is-block');
    }
  }

  getValue() {
    const select = this.shadowRoot.querySelector('.dropdown-item-header').querySelector('p');
    this.dropdownValue = select.innerHTML;
    return this.dropdownValue;
  }

  valid(validation) {}

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

}

customElements.define(DropdownSelect.is, DropdownSelect);