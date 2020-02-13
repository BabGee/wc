import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { PaymentFooterBase } from "../../../../../elements/base/payment-footer.js";
import { PaymentFooterStyles } from "./payment-footer-css.js";

class PaymentFooter extends PaymentFooterBase {
  static get styles() {
    return [PaymentFooterStyles, css`
      :host{
        display: block;
      }
      `];
  }

  renderDefault() {
    return html`
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