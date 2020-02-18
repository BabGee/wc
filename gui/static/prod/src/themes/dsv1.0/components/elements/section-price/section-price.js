import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const SectionPriceStyles=css`
header.header{
    padding: 20px;
}
div.price__item{
    box-shadow: 1px 2px 15px rgba(80,80,80,0.12);
    background-color: #fff;
}
div.price__item div.price__item-header{
    padding: 20px;
    background: #23d160;
    color: #fff;
    position: relative;
    z-index: 100;
}
div.price__item div.price__item-header:before{
    content: "";
    position: absolute;
    left: 50%;
    top: 63px;
    border-top: 10px solid #23d160;
    border-left: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid transparent;
}
.price__item-body{
    width: 100%;
    position: relative;
    background: #fff;
    z-index: 1;
}
.price__item-body .plan__title{
    padding: 35px 20px;
}
.price__item-body .plan__content{
    padding: 0 20px;
    font-size: 14px;
}
.price__item-body .plan__content ul li{
    text-align: center;
    margin-bottom: 10px;
}

.plan__cta a{
    padding: 10px;
    color: #4a4a4a;
    margin-top: 50px;
    background: #e5e5e5;
    display: inline-block;
    width: 100%
}

`;var sectionPriceCss={SectionPriceStyles:SectionPriceStyles};class SectionPrice extends SectionPElementDsc{static get styles(){return[SectionPriceStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
  
    <div class="section-pricing">
        <header class="header">
            <div class="heading">
                <h1 class="title has-text-centered">Plan for every size</h1>
                <p class="sub-title has-text-centered is-size-7">Choose the best plan for you business</p>
            </div>
        </header>
        
        <section class="section">
            <div class="columns">
            ${this.data.map((item,index)=>html`
            <div class="column">
                <div class="price__item">
                <div class="price__item-header">
                    <p class="has-text-centered is-size-6 is-uppercase has-text-weight-bold">${item.name}</p>
                </div>
                
                <div class="price__item-body">
                    <div class="plan__title">
                        <p style="position: relative;" class="has-text-centered title is-size-1"><span style="position: relative; right: 0px; top: -20px" class="is-size-5">KSH</span> ${item.unit_cost}<span class="has-text-weight-lighter is-size-7">/Mon</span></p>
                    </div>
                    
                    <div class="plan__content">
                    <div style="padding: 0 10px; margin-bottom: 10px;">
                        <div class="plan-item has-text-centered"><b>${item.description}</b></div>
                        <div class="plan-item has-text-centered"><b>${item.storage}MB</b> Storage <b>|</b> <b>${item.bandwidth}MB</b> BANDWITH</div>
                    </div>
                    <ul class="plan__feature-list">
                        ${item.custom_ads?html`<li class="plan__feature-item"><span class="feature-count-text">Custom Ads</span></li>`:html`<li><span class="feature-count-text">Nikobizz Ads</span></li>`}
                        ${item.mobile_money_acceptance?html`<li class="plan__feature-item"><span class="feature-count-text">Mobile Money Acceptance</span></li>`:html``}
                        ${item.ecommerce_support?html`<li class="plan__feature-item"><span class="feature-count-text">Supports Ecommerce</span></li>`:html``}
                        ${item.card_payment_acceptance?html`<li class="plan__feature-item"><span class="feature-count-text">Card Payment Acceptance (VISA,MasterCard, AMEX, DISCOVER,JCB e.t.c.)</span></li>`:html``}
                        ${item.free_ssl?html`<li class="plan__feature-item"><span class="feature-count-text">Free SSL Certificate</span></li>`:html``}
                        ${item.custom_ssl?html`<li class="plan__feature-item"><span class="feature-count-text">Custom SSL Certificate</span></li>`:html``}
                        ${item.priority_support?html`<li class="plan__feature-item"><span class="feature-count-text">First Priority Support</span></li>`:html``}
                        ${item.shared_ussd?html`<li class="plan__feature-item"><span class="feature-count-text">Shared USSD</span></li>`:html``}
                    </ul>
                    </div>
                    
                    <div class="plan__cta">
                    ${item.links.map(items=>html`
                    <a href="#" class="has-text-centered ${this.colorType[index]}-btn" .dataLink="${items}" @click="${this._action}">${items.title}</a>
                    `)}
                    </div>
                </div>
                </div>
            </div>
            `)}
            
            </div>
        </section>
        
        </div>

        `}static get is(){return"section-price"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}init(pElement,loader){super.init(pElement,loader);var self=this;self.colorType=["success","secondary","warning","danger","primary"]}}customElements.define(SectionPrice.is,SectionPrice);export{sectionPriceCss as $sectionPriceCss,SectionPriceStyles};