import{SerializableElement,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const TermsConditionsBase=class extends utilsMixin(SerializableElement){static get is(){return"terms-conditions"}constructor(){super();this.checked=!1}static get properties(){return{}}getInput(){return this.qs("input")}getName(){return this.e.formName}validate(){if(this.e.required&&!this.getValue()){return new this.Validation(!1,"you must accept the ")}else{return new this.Validation(!0,"accepted")}}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=TermsConditionsBase.toTitleCase(pElement.name);self.name=pElement.name}};var termsConditions={TermsConditionsBase:TermsConditionsBase};const TermsConditionsStyles=css`
a{
    color: var(--app-secondary-color)!important;
    cursor: pointer;
    text-decoration: none!important;
}
span{
    color:var(--app-secondary-color);
    font-style: italic;
    font-weight: 500;
    cursor: pointer;
}
.error{
    text-decoration: underline;
   text-decoration-color: red;
}
.checkbox input[type="checkbox"] {
    opacity: 0;
}

.checkbox label {
    position: relative;
    display: inline-block;
    
    /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
    
    padding-left: 24px;
    padding-top: 1px;
}

.checkbox label::before,
.checkbox label::after {
    position: absolute;
    content: "";
    
    /*Needed for the line-height to take effect*/
    display: inline-block;
}

/*Outer box of the fake checkbox*/
.checkbox label::before{
    height: 16px;
    width: 16px;
    
    border: 1px solid;
    left: 0px;
    
    /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
     *to vertically center it.
     */
    top: 3px;
}

/*Checkmark of the fake checkbox*/
.checkbox label::after {
    height: 5px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    
    transform: rotate(-45deg);
    
    left: 4px;
    top: 7px;
}

/*Hide the checkmark by default*/
.checkbox input[type="checkbox"] + label::after {
    content: none;
}

/*Unhide on the checked state*/
.checkbox input[type="checkbox"]:checked + label::after {
    content: "";
}

/*Adding focus styles on the outer-box of the fake checkbox*/
.checkbox input[type="checkbox"]:focus + label::before {
    outline: rgb(59, 153, 252) auto 5px;
}
`;var termsConditionsCss={TermsConditionsStyles:TermsConditionsStyles};class TermsConditions extends TermsConditionsBase{renderDefault(){return html`
    <div class="column">
      <div class="checkbox">
          <input type="checkbox" id="checkbox_1">
          <label  for="checkbox_1">${this.name}<span><a href="${this.e.details.path}" target="_blank"> terms and conditions</span></label>
      </div>
    </div>
`}static get properties(){return{rounded:Boolean}}static get styles(){return[TermsConditionsStyles,css`
        :host {
          display: block;
        }
      `]}constructor(){super()}getInput(){return this.qs("input")}getValue(){return this.qs("#checkbox_1").checked}invalid(){const label=this.qs("label");label.classList.add("error")}valid(){const label=this.qs("label");label.classList.remove("error")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(TermsConditions.is,TermsConditions);export{termsConditions as $termsConditions,termsConditionsCss as $termsConditionsCss,TermsConditionsBase,TermsConditionsStyles};