import{html,SharedStyles,CcInputBase}from"../../../../components/adaptive-ui.js";class CcInput extends CcInputBase{renderDefault(){return html`
 ${SharedStyles}
 <div class="column">
<div class="field">
  <div class="control  has-icons-left has-icons-right">

     <gold-cc-input id="input" placeholder="${this.name}" required label="${this.name}" auto-validate></gold-cc-input>
          <small class="validation-info error" style="display: none;">Required</small>

  </div>
</div>
</div>
        `}static get is(){return"cc-input"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}invalid(validation){this.shadowRoot.querySelector(".control").classList.add("required");this.shadowRoot.querySelector(".control").classList.add("has-error");this.shadowRoot.querySelector(".validation-info").style.display="flex";if(validation){this.shadowRoot.querySelector(".validation-info").textContent=validation}}valid(){this.shadowRoot.querySelector(".control").classList.remove("required");this.shadowRoot.querySelector(".control").classList.remove("has-error");this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=CcInput.toTitleCase(pElement.name);this.required=pElement.min&&0<pElement.min;this.name=pElement.name}}customElements.define(CcInput.is,CcInput);