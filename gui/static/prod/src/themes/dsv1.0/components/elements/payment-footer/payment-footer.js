import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const PaymentFooterBase=class extends utilsMixin(BaseElement){static get is(){return"payment-footer"}};var paymentFooter={PaymentFooterBase:PaymentFooterBase};const PaymentFooterStyles=css`
.tab-right-bottom{
    margin-top: 20px;
    position: absolute;
    bottom: 0px;
    /* margin-top: 30px; */
  }
`;var paymentFooterCss={PaymentFooterStyles:PaymentFooterStyles};class PaymentFooter extends PaymentFooterBase{static get styles(){return[PaymentFooterStyles,css`
      :host{
        display: block;
      }
      `]}renderDefault(){return html`
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
        `}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(PaymentFooter.is,PaymentFooter);export{paymentFooter as $paymentFooter,paymentFooterCss as $paymentFooterCss,PaymentFooterBase,PaymentFooterStyles};