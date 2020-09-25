import{SerializableElement,css,html,InputDefaultStyles,InputLabelAnimationtStyles}from"../../../../../components/adaptive-ui.js";const PinInputBase=class extends SerializableElement{static get is(){return"pin-input"}static get properties(){return{params:{type:Object,value:{}},type:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var pinInput={PinInputBase:PinInputBase};const PinInputStyles=css`
#danger-icon {
    visibility: hidden;
}

#check-icon {
    visibility: hidden;
}
#warning-text {
    display: none;
}
#label {
  font - size: 16 px;
  width: 100 % ;
  color: rgb(1, 50, 67);
  letter - spacing: 0.5 px;
  pointer - events: none;
  transition: all 0.3 s ease 0 s;
}
.counter {
  position: absolute;
  bottom: 120 px;
  color: rgb(206, 206, 206);
  right: 37px;
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
      <div class="input-mixin input-effect">
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
       <span class="focus-bg"></span>
     <div class = "counter"id="count"><p>0/${this.max}</p>
    
      </div>
    </div>

    <!-- Has counter and the eye reveal button -->
        `}invalid(message){this.shadowRoot.querySelector(".control").classList.add("required");this.shadowRoot.querySelector(".control").classList.add("has-error");this.shadowRoot.querySelector(".validation-info").style.display="flex";if(message){this.shadowRoot.querySelector(".validation-info").textContent=message}}valid(){this.shadowRoot.querySelector(".control").classList.remove("required");this.shadowRoot.querySelector(".control").classList.remove("has-error");this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}getValue(){return this.shadowRoot.querySelector("#input").value}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(null!=this.e.max){this.shadowRoot.querySelector("#input").setAttribute("maxlength",this.e.max)}if(null!=this.e.min){this.shadowRoot.querySelector("#input").setAttribute("minlength",this.e.min)}}reveal(){var password=this.shadowRoot.querySelector("#input").value,type=this.shadowRoot.querySelector("#input").type;if("password"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="text";var elementToFocus=this.shadowRoot.querySelector("#eye");elementToFocus.icon="icons:visibility-off"}else if("text"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="password";var elementToFocus2=this.shadowRoot.querySelector("#eye");elementToFocus2.icon="icons:visibility"}}stickyLabel2(e){const label=this.shadowRoot.querySelector("#label"),input=e.target.value;if(""==input){label.style.top=-35+"px";label.style.left=25+"px";label.style.fontSize=14+"px";label.style.fontWeight="normal"}}stickyLabel(e){const label=this.shadowRoot.querySelector("#label"),input=e.target.value;if(""==input){label.style.top=-65+"px";label.style.left=0;label.style.fontSize=12+"px";label.style.fontWeight=700}}count(){if(null!=this.e.max){var content=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=content+"/"+this.e.max;if(this.shadowRoot.querySelector("#input").value.length==this.e.max){this.shadowRoot.querySelector("#count").style.color="#FF7273"}else{this.shadowRoot.querySelector("#count").style.color="#cecece"}}}}window.customElements.define(PinInput.is,PinInput);export{pinInput as $pinInput,pinInputCss as $pinInputCss,PinInputBase,PinInputStyles};