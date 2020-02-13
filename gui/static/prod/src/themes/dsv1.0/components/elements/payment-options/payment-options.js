import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { PaymentOptionsBase } from "../../../../../elements/base/payment-options.js";
import { PaymentOptionsStyles } from "./payment-options-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class PaymentOptions extends PaymentOptionsBase {
  static get styles() {
    return [PaymentOptionsStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`

   <div class="column">
 <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
 <div class="control">
 
 ${this.paymentMethods.map((paymentMethod, methodIndex) => html`
<div class="is-inline">
     <span class="icon">
      <i><iron-icon icon="mipayicon:mipayicon"></iron-icon></i>
    </span>
    <label class="checkcontent">${paymentMethod.name}
   <input type="radio" name="method" value="method-${methodIndex}">
  <span class="checkmark"></span>

      <span>
      <div class="select is-fullwidth">
  <select id="method-${methodIndex}" style="text-indent: 20px;padding: 0px; border-radius: 4px;" >
    ${paymentMethod.options.map(option => html`
    <option value="${option.id}">${option.record}</option>
    </div>
    `)}
    
  </select>
</div>
</span>
</label>
  
 `)}
</div>
</div>
  </div>
  </div>`;
  }

  constructor() {
    super();
  }

  getValue() {
    const method = this.qs('input[name="method"]:checked').value;
    const select = this.qs('#' + method); // find selected payment method
    // find selection option in the method

    return select.value;
  }

  valid(validation) {}

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
  }

}

customElements.define(PaymentOptions.is, PaymentOptions);