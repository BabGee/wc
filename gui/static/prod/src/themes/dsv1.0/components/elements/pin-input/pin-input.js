import{SerializableElement,css,html,InputDefaultStyles,InputLabelAnimationtStyles}from"../../../../../components/adaptive-ui.js";const PinInputBase=class extends SerializableElement{static get is(){return"pin-input"}static get properties(){return{params:{type:Object,value:{}},type:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if((this.e.required||this.required)&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}else if((this.e.required||this.required)&&(this.getValue().length>this.e.max||this.getValue().length<this.e.min)){if(this.getValue().length>this.e.max){return new this.Validation(!1,this.e.name+" characters must not be more than "+this.e.max)}else if(this.getValue().length<this.e.min){return new this.Validation(!1,this.e.name+" characters must not be less than "+this.e.min)}}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var pinInput={PinInputBase:PinInputBase};const PinInputStyles=css`
#danger-icon {
  visibility: hidden;
  margin-top: 8 px;
  margin-right: 50px;
}

#check-icon {
  visibility: hidden;
  margin-top: 8px;
  margin-right: 50px;
}
#danger-icon {
    visibility: hidden;
}

#check-icon {
    visibility: hidden;
}

#label {
  font - size: 16 px;
  width: 100 % ;
  letter - spacing: 0.5 px;
  pointer - events: none;
  transition: all 0.3 s ease 0 s;
}
.counter {
  position: absolute;
  bottom: 120 px;
  color: rgb(206, 206, 206);
  right: 10px;
  top:48px;
}
.toggle - password {
  cursor: pointer;
  top: 4 px!important;
}
#warning-text{
    position: relative;
    top: -18px;
    display: none;
}`;var pinInputCss={PinInputStyles:PinInputStyles};class PinInput extends PinInputBase{static get styles(){return[InputDefaultStyles,InputLabelAnimationtStyles,PinInputStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
    />
    <div class="column">
      <div class="control has-icons-right input-mixin input-effect">
        <input 
          id="input"
          class="label-animation" 
          type="password"
          name=${this.e.name}
          value=${this.value}  
          required=${this.required} 
          minlength=${this.e.min}  
          maxlength=${this.e.max}
           @keyup="${this.count}"
          @focusin=${this.stickyLabel}
          @focusout=${this.stickyLabel2}
          >
      
       <label id="label">${this.e.name}</label>
       <span toggle="#password-field" class="field-icon toggle-password" style="position: absolute;right: 18px;top: 15px;">
            <iron-icon id="eye" icon="icons:visibility-off" @click="${this.reveal}"></iron-icon>
        </span>


       <span class="focus-bg"></span>
     <div class = "counter"id="count"><p>0/${this.max}</p>

      </div>
   
         <p class="help" id="warning-text" style="color:#ff3860;">${this.e.name} required</p>

      </div>
        `}invalid(message){const input=this.shadowRoot.querySelector("#input"),warningText=this.shadowRoot.querySelector("#warning-text"),eye=this.shadowRoot.querySelector("#eye");input.classList.remove("is-success");eye.classList.remove("is-success");eye.classList.add("is-danger");input.classList.add("is-danger");warningText.innerText=message.validationMessage;warningText.style.display="block";this.shadowRoot.querySelector("#count").style.color="#FF7273"}valid(){const input=this.shadowRoot.querySelector("#input"),warningText=this.shadowRoot.querySelector("#warning-text"),eye=this.shadowRoot.querySelector("#eye");eye.classList.remove("is-danger");eye.classList.add("is-success");input.classList.remove("is-danger");input.classList.add("is-success");warningText.style.display="none";this.shadowRoot.querySelector("#count").style.color="#23D160"}getInput(){return this.this.shadowRoot.querySelector("#input")}getValue(){return this.shadowRoot.querySelector("#input").value}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(null!=this.e.max){this.shadowRoot.querySelector("#input").setAttribute("maxlength",this.e.max)}if(null!=this.e.min){this.shadowRoot.querySelector("#input").setAttribute("minlength",this.e.min)}}reveal(){var password=this.shadowRoot.querySelector("#input").value,type=this.shadowRoot.querySelector("#input").type;if("password"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="text";var elementToFocus=this.shadowRoot.querySelector("#eye");elementToFocus.icon="icons:visibility-off"}else if("text"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="password";var elementToFocus2=this.shadowRoot.querySelector("#eye");elementToFocus2.icon="icons:visibility"}}stickyLabel2(e){const label=this.shadowRoot.querySelector("#label"),input=e.target.value;if(""==input){label.style.top=-35+"px";label.style.left=25+"px";label.style.fontSize=14+"px";label.style.fontWeight="normal"}}stickyLabel(e){const label=this.shadowRoot.querySelector("#label"),input=e.target.value;if(""==input){label.style.top=-65+"px";label.style.left=0;label.style.fontSize=12+"px";label.style.fontWeight=700}}count(){if(null!=this.e.max){var content=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=content+"/"+this.e.max;if(this.shadowRoot.querySelector("#input").value.length==this.e.max){this.shadowRoot.querySelector("#count").style.color="#23D160"}else{this.shadowRoot.querySelector("#count").style.color="#cecece"}}}}window.customElements.define(PinInput.is,PinInput);export{pinInput as $pinInput,pinInputCss as $pinInputCss,PinInputBase,PinInputStyles};