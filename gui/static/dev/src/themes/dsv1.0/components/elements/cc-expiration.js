import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/gold-cc-expiration-input/gold-cc-expiration-input.js";
import { CcExpirationBase } from "../../../../elements/base/cc-expiration.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CcExpiration extends CcExpirationBase {
  renderDefault() {
    return html`
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column is-paddingless">
      <div class="field">
            <div class="control">
                <input id='input' class="input inp" type="month" placeholder="Primary input">
            </div>
        </div>
    </div>
        `;
  }

  static get is() {
    return 'cc-expiration';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  getInput() {
    // return  this.shadowRoot.querySelector('#input');
    return this.qs('#input');
  }

  getValue() {
    let newValue = "";

    if (this.getInput().value) {
      let oldValue = this.getInput().value;
      let year = oldValue.substring(0, 4);
      let month = oldValue.substring(5);
      newValue = month + "-" + year;
    }

    console.log('Expire ', newValue);
    return newValue;
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.control').classList.add('required');
    this.shadowRoot.querySelector('.control').classList.add('has-error'); // this.shadowRoot.querySelector('.validation-info').style.display='flex';
    // if (validation)
    // {this.shadowRoot.querySelector('.validation-info').textContent= validation;}
  }

  valid(validation) {
    this.shadowRoot.querySelector('.control').classList.remove('required');
    this.shadowRoot.querySelector('.control').classList.remove('has-error'); // this.shadowRoot.querySelector('.validation-info').style.display='none';
    // // Revert general text content
    // this.shadowRoot.querySelector('.validation-info').textContent= 'Required';
  }

}

customElements.define(CcExpiration.is, CcExpiration);