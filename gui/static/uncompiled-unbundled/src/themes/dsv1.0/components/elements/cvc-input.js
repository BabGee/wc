import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/gold-cc-cvc-input/gold-cc-cvc-input.js";
import { CvcInputBase } from "../../../../elements/base/cvc-input.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CvcInput extends CvcInputBase {
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
                <input class="input inp" type="tell" placeholder="Primary input">
            </div>
        </div>
    </div>
        `;
  }

  static get properties() {
    return {
      value: String,
      params: {
        type: Object,
        value: {}
      },
      columnSize: {
        type: Array
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.getInput().value;
  }

  invalid(validation) {
    this.qs('.control').classList.add('required');
    this.qs('.control').classList.add('has-error');
    this.qs('.validation-info').style.display = 'flex';

    if (validation) {
      this.qs('.validation-info').textContent = validation;
    }
  }

  valid(validation) {
    this.qs('.control').classList.remove('required');
    this.qs('.control').classList.remove('has-error');
    this.qs('.validation-info').style.display = 'none'; // Revert general text content

    this.qs('.validation-info').textContent = 'Required';
  }

}

customElements.define(CvcInput.is, CvcInput);