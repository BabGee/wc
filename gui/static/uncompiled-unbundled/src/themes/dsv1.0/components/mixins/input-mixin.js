import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { InputStyles } from "../../styles/shared.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export const inputMixin = BaseClass => class extends BaseClass {
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
    <div class="field is-8">
      <!-- <label class="label">${this.e.name}</label> -->
      <div class="control">
        <input class="input inp" id="input" type="${this.type}" placeholder="${this.e.name}">
      </div>
    </div>
          `;
  }

  invalid(validation) {
    /*
    this.shadowRoot
      .querySelector('#validationIcon')
      .style.visibility = 'visible';
     this.shadowRoot
      .querySelector('#inputGroup')
      .className = '';
     this.shadowRoot
      .querySelector('#inputGroup')
      .classList.add('error-4px');
     this.shadowRoot
      .querySelector('#validationIcon')
      .setAttribute('src', 'src/themes/dsv1.0/img/warning.svg');
    if (validation) {
      this.shadowRoot
        .querySelector('#validationMessage')
        .style.display = 'block';
      this.shadowRoot
        .querySelector('#validationMessage')
        .textContent = validation;
    }
    */
  }

  valid(validation) {
    /*
    this.shadowRoot
      .querySelector('#validationIcon')
      .style.visibility = 'visible';
     // success-2px
    this.shadowRoot
      .querySelector('#inputGroup')
      .className = '';
     this.shadowRoot
      .querySelector('#inputGroup')
      .classList.add('success-2px');
     this.shadowRoot
      .querySelector('#validationIcon')
      .setAttribute('src', 'src/themes/dsv1.0/img/complete.svg');
    if (validation) {
      this.shadowRoot
        .querySelector('#validationMessage')
        .style.display = 'none';
    }
    */
  }

  getInput() {
    return this.shadowRoot.querySelector('#input');
  }

  getValue() {
    return this.getInput().value;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    /*
    this.shadowRoot
      .querySelector('#validationMessage')
      .style.display = 'none';
     this.shadowRoot
      .querySelector('#validationIcon')
      .style.visibility = 'hidden';
     */
  }

  get type() {
    return 'text';
  }

};