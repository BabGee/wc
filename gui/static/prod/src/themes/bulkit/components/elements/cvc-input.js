import{html,SharedStyles,CvcInputBase}from"../../../../components/adaptive-ui.js";class CvcInput extends CvcInputBase{renderDefault(){return html`
 ${SharedStyles}
 <div class="column">
<div class="field">
  <div class="control  has-icons-left has-icons-right">
        <gold-cc-cvc-input id="input" placeholder="${this.name}" label="${this.name}" auto-validate></gold-cc-cvc-input>
          <small class="validation-info error" style="display: none;">Required</small>
          </div>
</div>
</div>
        `}static get properties(){return{value:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}invalid(validation){this.qs(".control").classList.add("required");this.qs(".control").classList.add("has-error");this.qs(".validation-info").style.display="flex";if(validation){this.qs(".validation-info").textContent=validation}}valid(validation){this.qs(".control").classList.remove("required");this.qs(".control").classList.remove("has-error");this.qs(".validation-info").style.display="none";// Revert general text content
this.qs(".validation-info").textContent="Required"}init(pElement,loader){super.init(pElement,loader)}}customElements.define(CvcInput.is,CvcInput);