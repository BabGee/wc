import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/gold-cc-expiration-input/gold-cc-expiration-input.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import { CcExpirationBase } from "../../../../elements/base/cc-expiration.js";

class CcExpiration extends CcExpirationBase {
  renderDefault() {
    return html`
 ${SharedStyles}
 <div class="column">
<div class="field">
  <div class="control  has-icons-left has-icons-right">
        <gold-cc-expiration-input auto-validate required id="input" label="${this.e.name}"></gold-cc-expiration-input>
           <small class="validation-info error" style="display: none;">Required</small>
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
    console.log('Expire ', this.getInput().value);
    return this.getInput().value;
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.control').classList.add('required');
    this.shadowRoot.querySelector('.control').classList.add('has-error');
    this.shadowRoot.querySelector('.validation-info').style.display = 'flex';

    if (validation) {
      this.shadowRoot.querySelector('.validation-info').textContent = validation;
    }
  }

  valid(validation) {
    this.shadowRoot.querySelector('.control').classList.remove('required');
    this.shadowRoot.querySelector('.control').classList.remove('has-error');
    this.shadowRoot.querySelector('.validation-info').style.display = 'none'; // Revert general text content

    this.shadowRoot.querySelector('.validation-info').textContent = 'Required';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.columnSize = loader.pl.getElementColumnSize();
  }

}

customElements.define(CcExpiration.is, CcExpiration);