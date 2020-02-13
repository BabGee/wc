import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/gold-cc-expiration-input/gold-cc-expiration-input.js";
import { CcExpirationBase } from "../../../../../elements/base/cc-expiration.js";
import { InputDefaultStyles } from "../../../styles/input-shared-default.js";
import { InputLabelAnimationtStyles } from "../../../styles/input-label-animation.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CcExpiration extends CcExpirationBase {
  static get styles() {
    return [InputDefaultStyles, InputLabelAnimationtStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column">
      <div class="input-mixin input-effect">
        <input class="label-animation" type="month" placeholder="">
        <label>${this.e.name}</label>
        <span class="focus-bg"></span>
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