import{SerializableElement,css,html,InputDefaultStyles,InputLabelAnimationtStyles}from"../../../../../components/adaptive-ui.js";const PinPadInputBase=class extends SerializableElement{static get is(){return"pinpad-input"}static get properties(){return{params:{type:Object,value:{}},type:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}else if(this.required&&this.getValue().length<this.e.min){return new this.Validation(!1,this.e.name+" cannot be less than "+this.e.min)}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var pinpadInput={PinPadInputBase:PinPadInputBase};const PinpadInputStyles=css`
.pinpad-dropdown{
    position:absolute;
    z-index:9999;
    width: 97.8%;
    background-color: #fff;
    border: 1px solid rgb(183, 181, 181);
    border-radius: 7px;
    padding: 10px;
    display: none;
}
.pin-btn{
    width: 100%;
    border: 2px solid rgb(183, 181, 181);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 15px;
}

.is-danger {
    color: rgb(255, 56, 96)!important;
    border-width: 2px!important;
    border-style: solid!important;
    border-color: rgb(255, 56, 96)!important;
    border-radius: 6px;
    border-image: initial;
    position: relative;
  }
  
  .is-success{
    color: rgb(35, 209, 96)!important;
    border-width: 2px!important;
    border-style: solid!important;
    border-color: rgb(35, 209, 96)!important;
    border-radius: 6px;
    border-image: initial;
    position: relative;
  }
.message-block{
    display:flex;
    justify-content:space-between;
}

.input-counter{
    position: absolute;
    right: 12px;
    top: 60px;
    color:#cecece;
}

@media screen and (max-width: 1024px){ 

    .pinpad-dropdown{ 
        width: 97.4%;
    }

}

@media screen and (max-width: 1081px){ 

    .pinpad-dropdown{ 
        width: 97.5%;
    } 
}

@media screen and (max-width: 1013px){ 

    .pinpad-dropdown{ 
        width: 97.2%;
    } 
}



@media screen and (max-width: 810px){ 

    .pinpad-dropdown{ 
        width: 96.7%;
    } 
}

@media screen and (max-width: 772px){ 

    .pinpad-dropdown{ 
        width: 96.4%;
    } 
}

@media screen and (max-width: 768px){ 

    .pinpad-dropdown{ 
        width: 96%;
    }

}

@media screen and (max-width: 727px){ 

    .pinpad-dropdown{ 
        width: 95.9%;
    } 
}

@media screen and (max-width: 652px){ 

    .pinpad-dropdown{ 
        width: 95.4%;
    } 
}

@media screen and (max-width: 593px){ 

    .pinpad-dropdown{ 
        width: 94.9%;
    } 
}

@media screen and (max-width: 546px){ 

    .pinpad-dropdown{ 
        width: 94.2%;
    } 
}

@media screen and (max-width: 414px){ 

    .pinpad-dropdown{ 
        width: 91%;
    }

}


@media screen and (max-width: 375px){ 

    .pinpad-dropdown{ 
        width: 90%;
    }

}

@media screen and (max-width: 360px){ 

    .pinpad-dropdown{ 
        width: 89.8%;
    }

}

@media screen and (max-width: 320px){ 

    .pinpad-dropdown{ 
        width: 87.9%;
    }

    .the-third{
        margin-left: -5px;
    }

}

`;var pinpadInputCss={PinpadInputStyles:PinpadInputStyles};class PinPadInput extends PinPadInputBase{static get styles(){return[PinpadInputStyles,InputDefaultStyles,InputLabelAnimationtStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <div class="column" style="position:relative;">
      <div class="field">
        <div class="control has-icons-right input-mixin input-effect">
          <input class="label-animation" id="input" @focusin=${this.openDropDown} required=${this.required} 
          minlength=${this.e.min}  
          maxlength=${this.e.max}   
          @keyup="${this.count}" type="password" placeholder="">
          <label id="label">${this.e.name}</label>
          <span id="danger-icon" class="icon is-small is-right">
            <fa-icon
              class="fas fa-exclamation-triangle icon"
              size="1em"
              color="#ff3860"
            ></fa-icon>
          </span>
          <span id="check-icon" class="icon is-small is-right">
            <fa-icon
              class="fas fa-check"
              size="1em"
              color="#23d160"
            ></fa-icon>
          </span>
          <span class="focus-bg"></span>
        </div>
          <div class="message-block">
            <p class="help" id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            <p id ="count" class="input-counter">0/${this.e.max}</p>
          </div>

      </div>

      <div class="pinpad-dropdown">
        <div class="columns is-multiline is-mobile">
          <div class="column is-4">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">1</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">2</p>
            </div>
          </div>
          <div class="column is-4 the-third">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">3</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">4</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">5</p>
            </div>
          </div>
          <div class="column is-4 the-third">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">6</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">7</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">8</p>
            </div>
          </div>
          <div class="column is-4 the-third">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">9</p>
            </div>
          </div>

          <div class="column is-4">
            <div class="pin-btn" @click=${this.btnDelete}>
            <p><fa-icon class="fas fa-backspace" color="#4a4a4a"></fa-icon></p>
            </div>
          </div>

          <div class="column is-4">
            <div class="pin-btn" @click=${this.pinBtn}>
              <p class="key-num">0</p>
            </div>
          </div>

          <div class="column is-4 the-third">
            <div class="pin-btn" @click=${this.submit}>
              <p><fa-icon class="fas fa-check" color="#23D160"></fa-icon></p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  <!-- <div class="column">
<div class="field">
 <label class="form-label"><span><iron-icon icon="icons:lock"></iron-icon></span>${this.e.name}</label>
  <div class="control  has-icons-left has-icons-right">
    <input class="input is-medium" 
            id="input"  name=${this.e.name} 
            type="password" 
            value=${this.value} 
            placeholder=${this.e.name} 
            required=${this.required} 
            minlength=${this.e.min}  
            maxlength=${this.e.max}   
            @keyup="${this.count}">
     <span id="require" class="icon is-small is-right">*</span>
     <small class="validation-info error" style="display: none;">Required</small>
    <p id ="count" class="input-counter">${this.e.max}</p>
        <span class="icon is-medium is-right">
          <iron-icon id="eye" icon="icons:visibility" @click="${this.reveal}"></iron-icon>
    </span>
  </div>
</div>
</div> -->
        `}constructor(){super();this.pinArr=[];this.iskeyboardVisible=!1}static get properties(){return{pinArr:Array,iskeyboardVisible:Boolean,keyBoard:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.keyBoard=this.shadowRoot.querySelector(".pinpad-dropdown");this.disableKey();document.addEventListener("click",function(event){if("input"==event.path[0].id){return}if(""==event.path[0].id&&"pin-btn"==event.path[0].className){return}if(!("input"==event.path[0].id||"column is-4"==event.path[0].className||"pin-btn"==event.path[0].className||"key-num"==event.path[0].className||"svg"==event.path[0].tagName)){self.close()}});if(null!=this.e.max){this.shadowRoot.querySelector("#input").setAttribute("maxlength",this.e.max)}if(null!=this.e.min){this.shadowRoot.querySelector("#input").setAttribute("minlength",this.e.min)}if(!0===this.required){this.shadowRoot.querySelector("#require").style.display="flex"}else{this.shadowRoot.querySelector("#require").style.display="none"}}invalid(validation){const input=this.shadowRoot.querySelector(".label-animation");input.classList.remove("is-success");input.classList.add("is-danger");this.shadowRoot.querySelector("#count").style.color="rgb(255, 56, 96)";this.shadowRoot.querySelector("#warning-text").style.display="block";this.shadowRoot.querySelector("#warning-text").innerText=validation.validationMessage}valid(){const input=this.shadowRoot.querySelector(".label-animation");input.classList.remove("is-danger");input.classList.add("is-success");this.shadowRoot.querySelector("#count").style.color="rgb(35, 209, 96)";this.shadowRoot.querySelector("#warning-text").style.display="none"}getValue(){return this.shadowRoot.querySelector("#input").value}pinBtn(e){const tream=e.target.textContent.trim();if(this.pinArr.length>=this.e.max)return;this.pinArr.push(tream);let str=this.pinArr.toString();this.shadowRoot.querySelector(".label-animation").value=str.replace(/,/g,"");this.count()}btnDelete(){this.pinArr.pop();let str=this.pinArr.toString();this.shadowRoot.querySelector(".label-animation").value=str.replace(/,/g,"");this.count()}openDropDown(){this.keyBoard.classList.add("is-block");if(this.keyBoard.classList.contains("is-block")){this.iskeyboardVisible=!0;this.stickyLabel()}}submit(){this.close();this.pl.submitForm()}close(){if(this.iskeyboardVisible){this.keyBoard.classList.remove("is-block");this.iskeyboardVisible=!1;this.stickyLabel2()}}disableKey(){const input=this.shadowRoot.querySelector("#input");input.onkeydown=function(){return!1}}reveal(){var password=this.shadowRoot.querySelector("#input").value,type=this.shadowRoot.querySelector("#input").type;if("password"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="text";var elementToFocus=this.shadowRoot.querySelector("#eye");elementToFocus.icon="icons:visibility-off"}else if("text"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="password";var elementToFocus2=this.shadowRoot.querySelector("#eye");elementToFocus2.icon="icons:visibility"}}stickyLabel(){const label=this.shadowRoot.querySelector("#label"),input=this.shadowRoot.querySelector("#input");if(""==input.value&&"input"==this.shadowRoot.activeElement.id){label.style.top=-65+"px";label.style.left=0;label.style.fontSize=12+"px";label.style.fontWeight=700}}stickyLabel2(){const label=this.shadowRoot.querySelector("#label"),input=this.shadowRoot.querySelector("#input");if(""==input.value){label.style.top=-35+"px";label.style.left=25+"px";label.style.fontSize=14+"px";label.style.fontWeight="normal"}}count(){if(null!=this.e.max){var content=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=content+"/"+this.e.max;if(this.shadowRoot.querySelector("#input").value.length==this.e.max){this.shadowRoot.querySelector("#count").style.color="rgb(35, 209, 96)"}else{if(this.shadowRoot.querySelector("#input").value.length>this.e.max){this.shadowRoot.querySelector("#count").style.color="rgb(255, 56, 96)";return}this.shadowRoot.querySelector("#count").style.color="#cecece"}}}}window.customElements.define(PinPadInput.is,PinPadInput);export{pinpadInput as $pinpadInput,pinpadInputCss as $pinpadInputCss,PinPadInputBase,PinpadInputStyles};