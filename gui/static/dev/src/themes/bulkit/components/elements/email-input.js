import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { EmailInputBase } from "../../../../elements/base/email-input.js";
import { enterSubmitMixin } from "../../../../components/mixins/enter-submit-mixin.js";

class EmailInput extends enterSubmitMixin(EmailInputBase) {
  renderDefault() {
    return html`
        ${SharedStyles}     
         <div class="column " >
<div class="field" style="margin-top: 0px">
 ${window.template !== 'payments' ? html`
        <label class="form-label">
        <span><iron-icon icon="icons:mail"></iron-icon></span>${this.e.name}
        </label>
        
         <div class="control  has-icons-left has-icons-right">
            <input class="input"
            name=${this.e.name}
            id="input"
            type="email"
            value=${this.value}
            placeholder=${this.e.name}
            required=${this.required}
            minlength=${this.e.min}
            maxlength=${this.e.max}>
            <span id="require" class="icon is-right">*</span>
            <small class="validation-info error" style="display: none;">Required</small>
          </div>` : html`<div class="control-material is-primary">    
    <input class="material-input" 
        name=${this.e.name}
        id="input"
        type=${this.type}
        value=${this.value}
        required=${this.required}
        minlength=${this.e.min}
        maxlength=${this.e.max}>
        <span class="material-highlight"></span>
        <span class="bar"></span>
        <small class="validation-info error" style="display: none;">Required</small>
        <p id ="count" class="input-counter">${this.e.max}</p>
        <label> <span><iron-icon icon="icons:mail"></iron-icon></span>${this.e.name}</label>
</div>
                     `}     
</div>
</div>
 
        `;
  }

  static get properties() {
    return {
      params: {
        type: Object,
        value: {}
      },
      type: String,
      required: Boolean,
      pageType: {
        type: Object,
        value: {}
      }
    };
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.shadowRoot.querySelector('#input').value;
  }

  valid(validation) {
    let control = '.control';

    if (window.template === 'payments') {
      control = '.control-material';
    }

    this.shadowRoot.querySelector(control).classList.remove('required');
    this.shadowRoot.querySelector(control).classList.remove('has-error');
    this.shadowRoot.querySelector('.validation-info').style.display = 'none'; // Revert general text content

    this.shadowRoot.querySelector('.validation-info').textContent = 'Required';
  }

  invalid(validation) {
    let control = '.control';

    if (window.template === 'payments') {
      control = '.control-material';
    }

    this.shadowRoot.querySelector(control).classList.add('required');
    this.shadowRoot.querySelector(control).classList.add('has-error');
    this.shadowRoot.querySelector('.validation-info').style.display = 'flex';

    if (validation) {
      this.shadowRoot.querySelector('.validation-info').textContent = validation;
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

}

customElements.define(EmailInput.is, EmailInput);