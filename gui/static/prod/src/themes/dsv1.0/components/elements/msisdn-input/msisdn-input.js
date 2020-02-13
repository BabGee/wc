import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { MsisdnInputBase } from "../../../../../elements/base/msisdn-input.js";
import "../datalist-element/loader-element.js";
import { MsisdnInputStyles } from "./msisdn-input-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class MsisdnInput extends MsisdnInputBase {
  static get styles() {
    return [MsisdnInputStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
      <div class="column is-12 is-block is-paddingless is-marginless">
        <div class="field">
          <div class="select-country">
           <select id="code"  @change="${this.codeSelected}">
           ${this.loading ? html`<loader-element></loader-element>` : html`${this.rows.map(row => html`<option ?selected="${row[0] === '254'}" value="${row[0]}">${row[1]} +${row[0]}</option>`)}`} 
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