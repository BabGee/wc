import{css,html,TemplateSelectorBase}from"../../../../../components/adaptive-ui.js";const PaymentSelectorStyles=css`
    .column {
        padding: 16px;
    }
    .payment-selector-list {
        display: flex;
        flex-direction: row;
        overflow:auto;
        margin: 10px 0;
    }
    .card {
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-width:170px;
        margin: 0 20px;
        padding: 15px;
        border: 2.8px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    .card-image {
        width: 140px;
        object-fit: contain;
    }
    .subtitle {
        text-align:center;
    }
    .check-icon {
        display:none;
        position:absolute;
        top: 50%;
        transform: translateY(-50%);
        right:-20px;
        width:38px !important;
        height: 38px !important;
        fill: var(--app-default-color);
        background-color:white;
    }
    .card:hover {
        border-color: var(--app-default-color);
    }
    .selected {
        border-color: var(--app-default-color);
    }
    .title-danger{
        color: #ff2b56;
    }
    .title-success{
        color: #23d160 !important;
    }
    .selected-success {
        border-color: #23d160 !important;   
        fill: #23d160 !important;
    }
    #warning-text{
        display:none;
    }
    @media screen and (max-width: 550px) {
        .card {
            margin:0 10px;
        }
    }
`;var paymentSelectorCss={PaymentSelectorStyles:PaymentSelectorStyles};class PaymentSelector extends TemplateSelectorBase{static get styles(){return[PaymentSelectorStyles,css`
                : host {
                    display:block;
                }
            `]}static get properties(){return{selectedPayment:String,value:String}}getSelectedPayment(payment){const o=this.rows.find(row=>row[0]===payment[0]);if(o){this.selectedPayment={label:o[1],value:o[0]};this.value=this.selectedPayment.value}}isPaymentSelected(payment){if(this.selectedPayment){return payment[0]===this.selectedPayment.value?!0:!1}}onPaymentClickHandler(payment){this.getSelectedPayment(payment)}valid(){const title=this.shadowRoot.querySelector(".title"),selectedElements=this.shadowRoot.querySelectorAll(".selected"),checkIcon=this.shadowRoot.querySelector(".check-icon"),warningText=this.shadowRoot.querySelector("#warning-text");selectedElements.forEach(selectedElement=>selectedElement.classList.add("selected-success"));checkIcon.classList.add("check-icon-success");title.classList.remove("title-danger");title.classList.add("title-success");warningText.style.display="none";setTimeout(()=>{title.classList.remove("title-success");selectedElements.forEach(selectedElement=>selectedElement.classList.remove("selected-success"));checkIcon.classList.remove("check-icon-success")},3e3)}invalid(){const title=this.shadowRoot.querySelector(".title"),warningText=this.shadowRoot.querySelector("#warning-text");title.classList.remove("title-success");title.classList.add("title-danger");warningText.style.display="block"}getValue(){return this.value}static get is(){return"payment-selector"}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            <div class="column">
                <h3 class="title is-6">${this.e.name}</h3>
                <ul class="payment-selector-list">
                    ${this.rows.map(payment=>html`
                            <li class="card is-flex ${this.isPaymentSelected(payment)?"selected":""}" @click="${()=>this.onPaymentClickHandler(payment)}">
                                <img class="card-image" src="${payment[3]}"/>
                                <h4 class="subtitle is-6" style="margin-bottom:0;">${payment[1]}</h4>
                                <iron-icon icon="check-circle" style="display: ${this.isPaymentSelected(payment)?"flex":"none"};" class="check-icon ${this.isPaymentSelected(payment)?"selected":""}"></iron-icon>
                            </li>
                        `)}
                </ul>
                <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            </div>
        `}}customElements.define(PaymentSelector.is,PaymentSelector);var paymentSelector={PaymentSelector:PaymentSelector};export{paymentSelectorCss as $paymentSelectorCss,paymentSelector as $paymentSelector,PaymentSelectorStyles,PaymentSelector};