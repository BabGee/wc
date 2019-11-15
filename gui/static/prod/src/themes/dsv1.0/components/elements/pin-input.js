import{html,PinInputBase}from"../../../../components/adaptive-ui.js";class PinInput extends PinInputBase{renderDefault(){return html`
  <div class="column">
<div class="field">
 <label class="form-label"><span><iron-icon icon="icons:lock"></iron-icon></span>${this.e.name}</label>
  <div class="control  has-icons-left has-icons-right">
    <input class="input is-medium" 
            id="input"  
            name=${this.e.name} 
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
</div>
        `}invalid(message){this.shadowRoot.querySelector(".control").classList.add("required");this.shadowRoot.querySelector(".control").classList.add("has-error");this.shadowRoot.querySelector(".validation-info").style.display="flex";if(message){this.shadowRoot.querySelector(".validation-info").textContent=message}}valid(){this.shadowRoot.querySelector(".control").classList.remove("required");this.shadowRoot.querySelector(".control").classList.remove("has-error");this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}getValue(){return this.shadowRoot.querySelector("#input").value}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(null!=this.e.max){this.shadowRoot.querySelector("#input").setAttribute("maxlength",this.e.max)}if(null!=this.e.min){this.shadowRoot.querySelector("#input").setAttribute("minlength",this.e.min)}if(!0===this.required){this.shadowRoot.querySelector("#require").style.display="flex"}else{this.shadowRoot.querySelector("#require").style.display="none"}}reveal(){var password=this.shadowRoot.querySelector("#input").value,type=this.shadowRoot.querySelector("#input").type;if("password"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="text";var elementToFocus=this.shadowRoot.querySelector("#eye");elementToFocus.icon="icons:visibility-off"}else if("text"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="password";var elementToFocus2=this.shadowRoot.querySelector("#eye");elementToFocus2.icon="icons:visibility"}}count(){if(null!=this.e.max){var content=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=content+"/"+this.e.max;if(this.shadowRoot.querySelector("#input").value.length==this.e.max){this.shadowRoot.querySelector("#count").style.color="#FF7273"}else{this.shadowRoot.querySelector("#count").style.color="#cecece"}}}}window.customElements.define(PinInput.is,PinInput);