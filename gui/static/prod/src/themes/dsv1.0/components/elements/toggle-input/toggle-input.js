import{SerializableElement,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const ToggleInputBase=class extends utilsMixin(SerializableElement){static get is(){return"toggle-input"}static get properties(){return{params:{type:Object,value:{}},icon:String,service:String,title:String,maxlength:Number,pattern:String,required:Boolean,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.name=ToggleInputBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min}};var toggleInput={ToggleInputBase:ToggleInputBase};const ToggleInputStyles=css`
.main-container{
    padding:16px;
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
    background-color:var(--app-default-color);
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1pxvar(--app-default-color);
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .lbl{
      position: relative;
      top: -12px;
      font-weight: 400;
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
`;var toggleInputCss={ToggleInputStyles:ToggleInputStyles};class ToggleInput extends ToggleInputBase{static get styles(){return[ToggleInputStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
<div class="main-container">
  <div class="column">
  <div class="field">
  <label class="switch">
    <input type="checkbox" id="input" required=${this.required}>
    <span class="slider round"></span>
  </label>
  <label for="switch" class="lbl">${this.name}</label>
    </div>
    </div>
  </div>
  `}static get is(){return"toggle-input"}getInput(){return this.qs("#input")}getValue(){return this.getInput().checked?"on":"off"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}window.customElements.define(ToggleInput.is,ToggleInput);export{toggleInput as $toggleInput,toggleInputCss as $toggleInputCss,ToggleInputBase,ToggleInputStyles};