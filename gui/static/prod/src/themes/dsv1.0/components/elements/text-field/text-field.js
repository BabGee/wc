import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const TextFieldBase=class extends utilsMixin(SerializableElement){static get is(){return"text-field"}static get properties(){return{params:{type:Object,value:{}},type:String,value:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if((this.e.required||this.required)&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}return new this.Validation(!0,"valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=TextFieldBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var textField={TextFieldBase:TextFieldBase};const TextFieldStyles=css`
.input-field{
    display:flex;
    padding-bottom:13px;
}
.Label-Name{
    position: fixed;
    width: 161px;
    height: 12px;
    font-family: ProximaNova;
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #6c7a89;
    padding-top:1px;
}
.default-2px{
    display: flex;
    flex-direction: row;
    width: 249px;
    height: 41px;
    border-bottom: solid 1px #acafb3;
}
.error-4px{
    display: flex;
    flex-direction: row;
    width: 249px;
    height: 41px;
    border-bottom: solid 1px #e74c3c; 
}
.success-2px{
    display: flex;
    flex-direction: row;
    width: 249px;
    height: 41px;
    border-bottom: solid 1px #acafb3; 
}
input#input{
    display: flex;
    flex: 1;
    border: initial;
    /*border-bottom: solid 1px #acafb3;*/
    padding-top: 23px;
    width: 208px;
    height: 16px;
}
#validationIcon{
    display:flex;
    position:absolute;
    padding-left:37%;
    top:20px;
}
#validationMessage{
    margin-top: 3px;
    display: block;
    position: absolute;
    top: 20px;
    color: #6c7a89;
    font-family: TTNormsPro;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
}
`;var textFieldCss={TextFieldStyles:TextFieldStyles};class TextField extends TextFieldBase{static get styles(){return[TextFieldStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        <div class="input-field">
            <label for="input" class="Label-Name">${this.e.name}</label>

            <div id="inputGroup" class="default-2px">

                <input 
                 type=${this.type} 
                 style="font-family: TTNormsPro; font-size: 14px; font-weight: normal;font-style: normal;
                        font-stretch: normal;line-height: 1.14;letter-spacing: normal;color: #6c7a89;" 
                 class="input-padding Your-text"
                 value=${this.value}
                 required=${this.required}
                 placeholder=${this.e.name}
                 id="input">

                <img id="validationIcon" src="" class="complete icon">

            </div>
             <div id="validationMessage" class="Username-or-Password" style="margin-top:3px;"></div>

        </div>

        `}invalid(validation){this.shadowRoot.querySelector("#validationIcon").style.visibility="visible";this.shadowRoot.querySelector("#inputGroup").className="";this.shadowRoot.querySelector("#inputGroup").classList.add("error-4px");this.shadowRoot.querySelector("#validationIcon").setAttribute("src","src/themes/dsv1.0/img/warning.svg");if(validation){this.shadowRoot.querySelector("#validationMessage").style.display="block";this.shadowRoot.querySelector("#input").placeholder=validation}}valid(validation){this.shadowRoot.querySelector("#validationIcon").style.visibility="visible";this.shadowRoot.querySelector("#inputGroup").className="";this.shadowRoot.querySelector("#inputGroup").classList.add("success-2px");this.shadowRoot.querySelector("#validationIcon").setAttribute("src","src/themes/dsv1.0/img/complete.svg");if(validation){this.shadowRoot.querySelector("#validationMessage").style.display="none"}}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.shadowRoot.querySelector("#validationMessage").style.display="none";this.shadowRoot.querySelector("#validationIcon").style.visibility="hidden"}get type(){return"text"}}window.customElements.define(TextField.is,TextField);export{textField as $textField,textFieldCss as $textFieldCss,TextFieldBase,TextFieldStyles};