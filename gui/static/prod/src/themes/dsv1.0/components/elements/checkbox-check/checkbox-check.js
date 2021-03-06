import{SerializableElement,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const CheckboxCheckBase=class extends utilsMixin(SerializableElement){static get is(){return"checkbox-check"}static get properties(){return{icon:String,maxlength:Number}}getName(){return this.e.formName}validate(){const isOff="on"!==this.getValue();return new this.Validation(!isOff,isOff?this.e.name+" is invalid":"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=CheckboxCheckBase.toTitleCase(pElement.name)}};var checkboxCheck={CheckboxCheckBase:CheckboxCheckBase};const CheckboxCheckStyles=css`
.container{
    margin-top: 8px;
    margin-bottom:8px;
    display:flex;
    align-items:center;
}
.label {
    margin-left:8px;
}
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {display:none;}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: var(--app-default-color);
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
.validation-info{
    display:none;
}
`;var checkboxCheckCss={CheckboxCheckStyles:CheckboxCheckStyles};class CheckboxCheck extends CheckboxCheckBase{static get styles(){return[CheckboxCheckStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <div class="container">
      <label class="switch">
        <input type="checkbox" id="input"  name=${this.e.name} 
        type="checkbox"
        placeholder=${this.e.name} 
        required=${this.required}" >
        <span class="slider round"></span>
      </label>
      <small class="validation-info">Required</small>
      <span class="label">${this.e.name}${this.e.kind?html`: ${this.e.kind}`:html`:`}</span>
    </div>
    `}getInput(){return this.qs("#input")}getValue(){return this.shadowRoot.querySelector("#input").checked?"on":"off"}valid(){this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}invalid(validation){this.shadowRoot.querySelector(".validation-info").style.display="block";if(validation){this.shadowRoot.querySelector(".validation-info").textContent=validation}}}window.customElements.define(CheckboxCheck.is,CheckboxCheck);export{checkboxCheck as $checkboxCheck,checkboxCheckCss as $checkboxCheckCss,CheckboxCheckBase,CheckboxCheckStyles};