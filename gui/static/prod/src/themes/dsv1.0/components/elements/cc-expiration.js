import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../../../../node_modules/@polymer/gold-cc-expiration-input/gold-cc-expiration-input.js";import{CcExpirationBase}from"../../../../elements/base/cc-expiration.js";class CcExpiration extends CcExpirationBase{renderDefault(){return html`
        <style>
        .inp{
            border-radius: 6px!important;
            font-size: 14px!important;
            padding: 20px!important;
            line-height: 1;
            background-color: #fcfcfc!important;
            border: 1px solid #a3a3a4!important;
            box-shadow: 0 0 0 transparent!important;
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column is-paddingless">
      <div class="field">
            <div class="control">
                <input id='input' class="input inp" type="month" placeholder="Primary input">
            </div>
        </div>
    </div>
        `}static get is(){return"cc-expiration"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getInput(){return this.qs("#input")}getValue(){let newValue="";if(this.getInput().value){let oldValue=this.getInput().value,year=oldValue.substring(0,4),month=oldValue.substring(5);newValue=month+"-"+year}console.log("Expire ",newValue);return newValue}invalid(){this.shadowRoot.querySelector(".control").classList.add("required");this.shadowRoot.querySelector(".control").classList.add("has-error")}valid(){this.shadowRoot.querySelector(".control").classList.remove("required");this.shadowRoot.querySelector(".control").classList.remove("has-error")}}customElements.define(CcExpiration.is,CcExpiration);