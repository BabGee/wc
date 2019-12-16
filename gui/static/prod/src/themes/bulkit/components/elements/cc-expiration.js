import{html,SharedStyles,CcExpirationBase}from"../../../../components/adaptive-ui.js";class CcExpiration extends CcExpirationBase{renderDefault(){return html`
 ${SharedStyles}
 <div class="column">
<div class="field">
  <div class="control  has-icons-left has-icons-right">
        <gold-cc-expiration-input auto-validate required id="input" label="${this.e.name}"></gold-cc-expiration-input>
           <small class="validation-info error" style="display: none;">Required</small>
                </div>
</div>
</div>
        `}static get is(){return"cc-expiration"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getInput(){return this.qs("#input")}getValue(){console.log("Expire ",this.getInput().value);return this.getInput().value}invalid(validation){this.shadowRoot.querySelector(".control").classList.add("required");this.shadowRoot.querySelector(".control").classList.add("has-error");this.shadowRoot.querySelector(".validation-info").style.display="flex";if(validation){this.shadowRoot.querySelector(".validation-info").textContent=validation}}valid(){this.shadowRoot.querySelector(".control").classList.remove("required");this.shadowRoot.querySelector(".control").classList.remove("has-error");this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}}customElements.define(CcExpiration.is,CcExpiration);