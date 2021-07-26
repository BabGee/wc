import{utilsMixin,BaseElement,html,css,InputDefaultStyles,InputLabelAnimationtStyles}from"../../../../../components/adaptive-ui.js";const InputSubmitBase=class extends utilsMixin(BaseElement){static get is(){return"input-submit"}static get properties(){return{params:{type:Object,value:{}},type:String}}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}getName(){return this.e.formName}validate(){if((this.e.required||this.required)&&!this.getValue()){return!1}return this.$.input.validate()}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.type="number"}init(pElement,loader){super.init(pElement,loader);let self=this;self.title=InputSubmitBase.toTitleCase(pElement.name);this.required=pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var inputSubmit={InputSubmitBase:InputSubmitBase};class InputSubmit extends InputSubmitBase{constructor(){super()}static get styles(){return[InputDefaultStyles,InputLabelAnimationtStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
      <div class="column">
        <div class="input-mixin input-effect">
          <input class="label-animation" type="${this.type}" class="input is-medium" id="input"  name=${this.e.name} value=${this.value} required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max} @keyup="${this.count}">
          <label>${this.e.name}</label>
          <span class="focus-bg"></span>
        </div>
      </div>
      `}}window.customElements.define(InputSubmit.is,InputSubmit);export{inputSubmit as $inputSubmit,InputSubmitBase};