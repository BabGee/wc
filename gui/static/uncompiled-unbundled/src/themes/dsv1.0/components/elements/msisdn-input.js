import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { MsisdnInputBase } from "../../../../elements/base/msisdn-input.js";
import "./datalist-element/loader-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class MsisdnInput extends MsisdnInputBase {
  renderDefault() {
    return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
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
        select {
          position: absolute;
          background-color: #fcfcfc;
          color: #363636;
          border: 1px solid transparent;
          cursor: pointer;
          font-size: 14px!important;
          border-right: 1px solid #cac1c1;
          display: block;
          margin-left: 2px;
          margin-top: 4px!important;
          padding-left: 4px;
          max-width: 100%;
          width: 58px;
          height: 32px;
          outline: none;
          z-index: 5;
        }
        #country-code{
          font-size: 14px;
          margin-top: 5px;
          color: #363636;
        }
        option{
            font-size: 14px;
        }
        #country-code{
        color:#4a4a4a;
        }
</style>
${this.loading ? html`
<loader-element></loader-element>` : html`
<div class="column is-8 is-block is-paddingless">
        <div class="field">
          <div class="select-country">
           <select id="code"  @change="${this.codeSelected}">
            ${this.rows.map(row => html`<option ?selected="${row[0] === '254'}" value="${row[0]}">${row[1]} +${row[0]}</option>`)}
            </select>
              </div>
          <div class="control  has-icons-left">
         
                <input class="input inp"  
                        id="input"
                        name="${this.e.name}" 
                        type="number" 
                        placeholder="${this.e.name}" 
                        required="${this.required}" 
                        minlength="${this.e.min}"  
                        maxlength="${this.e.max}"  style="text-indent: 110px;">
            <span class="icon is-medium is-left" style="font-size: 14px;padding-top: 4px;padding-left: 4px;margin-left: 64px; color:  black;">
                   <p id="country-code">+254</p>
            </span>
            <small class="info-error" style="display: none;"> Error </small>
        
          </div>
        </div>
        </div>
`}
        `;
  }

  constructor() {
    super();
  }

  getValue() {
    const codeSelect = this.shadowRoot.querySelector('#code');
    const numberInput = this.shadowRoot.querySelector('#input');

    if (numberInput.value) {
      return '+' + codeSelect.value + numberInput.value;
    }
  }

  codeSelected() {
    const codeSelect = this.shadowRoot.querySelector('#code').value;
    this.shadowRoot.querySelector('#country-code').textContent = '+' + codeSelect;
  }

  valid(Validation) {
    this.shadowRoot.querySelector('.info-error').style.display = 'none'; // Revert general text content

    this.shadowRoot.querySelector('.info-error').textContent = 'Required';
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.info-error').style.display = 'block';

    if (validation) {
      this.shadowRoot.querySelector('.info-error').textContent = validation;
    }
  }

}

customElements.define(MsisdnInput.is, MsisdnInput);