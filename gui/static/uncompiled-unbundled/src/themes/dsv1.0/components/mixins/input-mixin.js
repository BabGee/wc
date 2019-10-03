import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { InputStyles } from "../../styles/shared.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export const inputMixin = BaseClass => class extends BaseClass {
  renderService() {
    return html`
    <style>
    .row{
        width: 100%;
    }
    .row .inp-right{
        /* width: 5%; */
        height: 100px;
    }
    .row .inp-right input{
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
        padding: 18px calc(.625em - 1px) 18px 20px;
    }
    .row .inp-right input::-webkit-input-placeholder { /* Edge */
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }
    .row .inp-right input :-ms-input-placeholder { /* Internet Explorer 10-11 */
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }
    .row .inp-right input ::placeholder {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }
    .row .inp-right .field .label{
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }

    .row .inp-right .field.error, 
    .row .inp-right .field.error input, 
    .row .inp-right .field.error .icon{
        color: #ff3860;
        fill: #ff3860;
    }
    .row .inp-right .field.error{
        font-weight: normal;
        font-size: 12px;
    }

    .row .inp-right .field.success, 
    .row .inp-right .field.success input, 
    .row .inp-right .field.success svg{
        color: #23d160;
        fill: #23d160;
    }
    .row .inp-right .field.success{
        font-weight: normal;
        font-size: 12px;
    }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column row">
      <div class="inp-right">
        <!-- For success message use 'success' whithin the 'field' class-->
        <!-- For error message use 'error' whithin the 'field' element and add is-danger whithin the input tag-->
        <!--- Error message is commented at the bottom of this component --->
          <div class="field">
              <div class="control has-icons-right">
                  <input class="input" type="${this.type}" placeholder="${this.e.name}">
                  <span class="icon is-small is-right">
                  <fa-icon class="fas fa-exclamation-triangle icon" size="1em"></fa-icon>
                  </span>
              </div>
              <p style="display: none;">Username or password is incorrect</p>
          </div>
      </div>
    </div>
          `;
  }

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