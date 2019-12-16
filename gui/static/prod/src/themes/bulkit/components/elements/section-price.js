import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{DASHBOARD_STYLES}from"../../styles/dashboard-styles.js";import{BULMA_STYLES}from"../../styles/bulma-styles.js";import{LANDING_STYLES}from"../../styles/landing-style.js";import{SectionPElementDsc}from"../../../../elements/base/section-pelement-dsc.js";class SectionPrice extends SectionPElementDsc{renderDefault(){return html`
        ${BULMA_STYLES}
     ${DASHBOARD_STYLES} 
     ${LANDING_STYLES}
        <style>
        .pricing-card-body{
        height:700px;
        }
        .is-bottom{
            position: absolute;
    bottom: 32px;
    left: 40px;
    right: 40px;
        }
</style>
<section class="section is-large">
            <div class="container">
                <div id="header-pricing" class="header-pricing is-wavy">
                    <div class="columns is-vcentered">
                        <div class="column is-12">
                            <div class="columns is-vcentered">
                                ${this.data.map((pkg,index)=>html`
                                    <div class="column is-3">
                                        <!-- Pricing table -->
                                        <div class="flex-card header-pricing-card ${this.colorType[index]} hover-inset">
                                            <h3 class="plan-name">${pkg.name}</h3>
                                            <div class="pricing-card-body">
                                                <div class="plan-price per-month animated preFadeInUp fadeInUp">
                                                    <small>KSH</small> ${pkg.unit_cost} <small>/mon</small>
                                                </div>
                                                    <div class="plan-item"><b>${pkg.description}</b></div>
                                                    <div class="plan-item"><b>${pkg.storage}MB</b> Storage <b>|</b> <b>${pkg.bandwidth}MB</b> BANDWITH</div>
                                                <ul class="plan-features">
                                                    ${pkg.ecommerce_support?html`<li><span class="feature-count-text">Supports Ecommerce</span></li>`:html``}
                                                    ${pkg.custom_ads?html`<li><span class="feature-count-text">Custom Ads</span></li>`:html`<li><span class="feature-count-text">Nikobizz Ads</span></li>`}
                                                    ${pkg.mobile_money_acceptance?html`<li><span class="feature-count-text">Mobile Money Acceptance</span></li>`:html``}
                                                    ${pkg.card_payment_acceptance?html`<li><span class="feature-count-text">Card Payment Acceptance (VISA,MasterCard, AMEX, DISCOVER,JCB e.t.c.)</span></li>`:html``}
                                                    ${pkg.free_ssl?html`<li><span class="feature-count-text">Free SSL Certificate</span></li>`:html``}
                                                    ${pkg.custom_ssl?html`<li><span class="feature-count-text">Custom SSL Certificate</span></li>`:html``}
                                                    ${pkg.priority_support?html`<li><span class="feature-count-text">First Priority Support</span></li>`:html``}
                                                    ${pkg.shared_ussd?html`<li><span class="feature-count-text">Shared USSD</span></li>`:html``}
                                                
                                                </ul>
                                                <div class="pt-20 pb-20">
                                                   ${pkg.links.map(item=>html`
                                                    <a class="button button-cta rounded raised ${this.colorType[index]}-btn btn-outlined is-bold is-bottom" .dataLink="${item}" @click="${this._action}">${item.title}</a>
                                                        `)}
                                                </div>
                                            </div>   
                                        </div>
                                        <!-- /Pricing table -->
                                    </div>    
                                
                                `)}
                            
                                
                            </div>

                        </div>
                    </div>       
                </div>
            </div>
        </section>
        `}static get is(){return"section-price"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}init(pElement,loader){super.init(pElement,loader);var self=this;self.colorType=["success","secondary","warning","danger","primary"]}}customElements.define(SectionPrice.is,SectionPrice);