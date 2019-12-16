import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../../../../node_modules/@polymer/gold-cc-cvc-input/gold-cc-cvc-input.js";import"../../icons/my-icons.js";import{SharedStyles}from"../../styles/shared-styles.js";import{CvcInputBase}from"../../../../elements/base/cvc-input.js";class CvcInput extends CvcInputBase{renderDefault(){return html`
 ${SharedStyles}
 <div class="column">
<div class="field">
  <div class="control  has-icons-left has-icons-right">
        <gold-cc-cvc-input id="input" placeholder="${this.name}" label="${this.name}" auto-validate></gold-cc-cvc-input>
          <small class="validation-info error" style="display: none;">Required</small>
          </div>
</div>
</div>
        `}static get properties(){return{value:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}invalid(validation){this.qs(".control").classList.add("required");this.qs(".control").classList.add("has-error");this.qs(".validation-info").style.display="flex";if(validation){this.qs(".validation-info").textContent=validation}}valid(){this.qs(".control").classList.remove("required");this.qs(".control").classList.remove("has-error");this.qs(".validation-info").style.display="none";this.qs(".validation-info").textContent="Required"}init(pElement,loader){super.init(pElement,loader)}}customElements.define(CvcInput.is,CvcInput);