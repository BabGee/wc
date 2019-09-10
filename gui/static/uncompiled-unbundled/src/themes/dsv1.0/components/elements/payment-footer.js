import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { PaymentFooterBase } from "../../../../elements/base/payment-footer.js";

class PaymentFooter extends PaymentFooterBase {
  render() {
    return html`
    <style>
      .tab-right-bottom{
        margin-top: 20px;
        position: absolute;
        bottom: 0px;
        /* margin-top: 30px; */
      }
    </style>
    <div class="tab-right-bottom">
      <div class="columns">
        <div class="column">
          <div class="content-logos">
            <p class="level-item has-text-centered">
              <img src="https://www.merchantequip.com/image/?logos=v|m|a|d|jcb|me|msc&height=64" alt="Merchant Equipment Store Credit Card Logos"/>
            </p>
          </div>
        </div>
      </div>
    </div>
        `;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

window.customElements.define(PaymentFooter.is, PaymentFooter);