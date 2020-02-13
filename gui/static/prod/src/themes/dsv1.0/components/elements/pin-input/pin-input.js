import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { PinInputBase } from "../../../../../elements/base/pin-input.js";
import { InputDefaultStyles } from "../../../styles/input-shared-default.js";
import { InputLabelAnimationtStyles } from "../../../styles/input-label-animation.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class PinInput extends PinInputBase {
  static get styles() {
    return [InputDefaultStyles, InputLabelAnimationtStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
    />
    <div class="column">
      <div class="input-mixin input-effect">
        <input 
          id="input"
          class="label-animation" 
          type="password"
          name=${this.e.name}
          value=${this.value}  
          required=${this.required} 
          minlength=${this.e.min}  
          maxlength=${this.e.max}   
          @keyup="${this.count}">
        <label>${this.e.name}</label>
        <span class="focus-bg"></span>
      </div>
    </div>

    <!-- Has counter and the eye reveal button -->
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
    } // if (this.required=== true) {
    //   this.shadowRoot.querySelector('#require').style.display='flex';
    // } else {
    //   this.shadowRoot.querySelector('#require').style.display='none';
    // }

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

      if (this.shadowRoot.querySelector('#input').value.length == this.e.max) {
        this.shadowRoot.querySelector('#count').style.color = '#FF7273';
      } else {
        this.shadowRoot.querySelector('#count').style.color = '#cecece';
      }
    }
  }

}

window.customElements.define(PinInput.is, PinInput);