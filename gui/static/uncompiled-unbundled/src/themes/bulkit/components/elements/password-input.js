import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { SharedStyles } from "../../styles/shared-styles.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { PasswordInputBase } from "../../../../elements/base/password-input.js";

class PasswordInput extends PasswordInputBase {
  renderDefault() {
    return html`
 ${SharedStyles}
  <div class="column">
<div class="field">
 <label class="form-label"><span><iron-icon icon="icons:lock"></iron-icon></span>${this.e.name}<span id="require" class="icon is-small is-right">*</span></label>
  <div class="control  has-icons-left has-icons-right">
    <input class="input" id="input"  
            name=${this.e.name} 
            type='password' 
            value=${this.value} 
            placeholder=${this.e.name} 
            required=${this.required} 
            minlength=${this.e.min} 
            maxlength=${this.e.max}   
            @keyup="${this.count}" >
     
     <small class="validation-info error" style="display: none;">Required</small>
    <p id ="count" class="input-counter">${this.e.max}</p>
        <span class="icon is-right">
          <iron-icon id="eye" icon="icons:visibility" @click="${this.reveal}"></iron-icon>
    </span>
  </div>
</div>
</div>
        `;
  }

  invalid(message) {
    this.shadowRoot.querySelector('.control').classList.add('required');
    this.shadowRoot.querySelector('.control').classList.add('has-error');
    this.shadowRoot.querySelector('.validation-info').style.display = 'flex';

    if (message) {
      this.shadowRoot.querySelector('.validation-info').textContent = message;
    }
  }

  valid(validation) {
    this.shadowRoot.querySelector('.control').classList.remove('required');
    this.shadowRoot.querySelector('.control').classList.remove('has-error');
    this.shadowRoot.querySelector('.validation-info').style.display = 'none'; // Revert general text content

    this.shadowRoot.querySelector('.validation-info').textContent = 'Required';
  }

  getValue() {
    return this.shadowRoot.querySelector('#input').value;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    if (this.e.max != null) {
      this.shadowRoot.querySelector('#input').setAttribute('maxlength', this.e.max);
    }

    if (this.e.min != null) {
      this.shadowRoot.querySelector('#input').setAttribute('minlength', this.e.min);
    }

    if (this.required === true) {
      this.shadowRoot.querySelector('#require').style.display = 'unset';
    } else {
      this.shadowRoot.querySelector('#require').style.display = 'none';
    }
  }

  reveal() {
    var password = this.shadowRoot.querySelector('#input').value;
    var type = this.shadowRoot.querySelector('#input').type;

    if (this.shadowRoot.querySelector('#input').type === 'password') {
      this.shadowRoot.querySelector('#input').type = 'text'; //  this.$.input.icon = "icons:visibility-off";

      var elementToFocus = this.shadowRoot.querySelector('#eye');
      elementToFocus.icon = 'icons:visibility-off'; //  elementToFocus.icon = "icons:visibility";
    } else if (this.shadowRoot.querySelector('#input').type === 'text') {
      this.shadowRoot.querySelector('#input').type = 'password'; // iconButton.icon = "icons:visibility";
      //  this.$.input.eye.icon = "icons:visibility";

      var elementToFocus2 = this.shadowRoot.querySelector('#eye');
      elementToFocus2.icon = 'icons:visibility';
    }
  }

  count() {
    if (this.e.max != null) {
      var content = this.shadowRoot.querySelector('#input').value.length;
      this.shadowRoot.querySelector('#count').textContent = content + '/' + this.e.max;

      if (this.shadowRoot.querySelector('#input').value.length === this.e.max) {
        this.shadowRoot.querySelector('#count').style.color = '#FF7273';
      } else {
        this.shadowRoot.querySelector('#count').style.color = '#cecece';
      }
    }
  }

}

window.customElements.define(PasswordInput.is, PasswordInput);