import{SerializableElement,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const CheckboxInputBase=class extends utilsMixin(SerializableElement){static get is(){return"checkbox-input"}constructor(){super();this.checked=!1}static get properties(){return{checked:{type:Boolean},type:String,icon:String,title:String,maxlength:Number,required:Boolean,columnSize:String,columnOffset:{type:Array}}}getInput(){return this.qs("input")}getName(){return this.e.formName}validate(){return new this.Validation(!0,"always valid")}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=CheckboxInputBase.toTitleCase(pElement.name);self.name=pElement.name;if("true"===pElement.defaultValue){this.checked=!0}}};var checkboxInput={CheckboxInputBase:CheckboxInputBase};const CheckboxInputStyles=css`
.checkbox input[type="checkbox"] {
    opacity: 0;
}

.checkbox label {
    position: relative;
    display: inline-block;
    
    /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
    padding-left: 22px;
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
`;var checkboxInputCss={CheckboxInputStyles:CheckboxInputStyles};class CheckboxInput extends CheckboxInputBase{renderDefault(){return html`
    <div class="column">
      <div class="checkbox">
          <input type="checkbox" id="checkbox_1">
          <label for="checkbox_1">${this.name}</label>
      </div>
    </div>
`}static get properties(){return{rounded:Boolean}}static get styles(){return[CheckboxInputStyles,css`
        :host {
          display: block;
        }
      `]}constructor(){super();this.rounded=!1}getInput(){return this.qs("input")}getValue(){return this.qs("#checkbox_1").checked}valid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.rounded=this.e.details.rounded||!1;this.shadowRoot.querySelector("#checkbox_1").checked=this.checked}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(CheckboxInput.is,CheckboxInput);export{checkboxInput as $checkboxInput,checkboxInputCss as $checkboxInputCss,CheckboxInputBase,CheckboxInputStyles};