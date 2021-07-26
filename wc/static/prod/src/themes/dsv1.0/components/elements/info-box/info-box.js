import{css,html,BaseElement}from"../../../../../components/adaptive-ui.js";const InfoBoxStyles=css`
.button{
    margin-top: 20px;
}
.hero-body{
    color: var(--app-default-color);
}
.default{
    color: var(--app-default-color);
}
.button{
    background-color: var(--app-default-color) !important;
    border-radius: 15px;
}
.hero-body {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3rem 2.5rem;
}

`;var infoBoxCss={InfoBoxStyles:InfoBoxStyles};class InfoBox extends BaseElement{static get styles(){return[InfoBoxStyles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        
        <section class="hero">
            <div style="padding: 0 20px" class="hero-body is-size-5 has-text-weight-bold">
                Direct Deposits
            </div>
        </section>
        <section class="section">
            <div class="container has-text-left">
                
                <p>You can deposit money into your Kopo Kopo to use for repaying your cash adavance or SMS credits purchase.
                    Go to your lipa na M-pesa menu, select the paybill option and use <span class="has-text-weight-bold default"> 840105 </span> as the business number,
                    kdpt as the account number, then enter the amount. Once payment is complete you can 'Claim' the deposit from this page
                </p>
                <p class="button has-text-white">Claim direct deposit</p>
            </div>
        </section>
        `}static get is(){return"info-box"}}customElements.define(InfoBox.is,InfoBox);export{infoBoxCss as $infoBoxCss,InfoBoxStyles};