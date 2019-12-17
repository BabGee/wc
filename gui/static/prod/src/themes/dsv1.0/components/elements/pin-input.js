import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../../../../node_modules/@polymer/iron-icons/iron-icons.js";import"../../../../../node_modules/@polymer/iron-icon/iron-icon.js";import{PinInputBase}from"../../../../elements/base/pin-input.js";class PinInput extends PinInputBase{renderDefault(){return html`
    <style>
      .inp {
        width: 100%;
        border-radius: 6px !important;
        font-size: 14px !important;
        padding: 20px !important;
        line-height: 1;
        background-color: #fff !important;
        border: 1px solid #e5e5e5 !important;
        box-shadow: 0 0 0 transparent !important;
        color: #5d5d5e;
      }
      #danger-icon {
        visibility: hidden;
      }

      #check-icon {
        visibility: hidden;
      }
      #warning-text {
        display: none;
      }
    </style>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
    />
    <div class="field is-12" style="position: relative;">
      <label class="label" style="font-size: 12px">${this.e.name}</label>
      <div class="control has-icons-right">
        <input
          class="input inp"
          id="input"
          type= "password"
          placeholder="${this.e.name}"
          name=${this.e.name}
          value=${this.value}  
          required=${this.required} 
          minlength=${this.e.min}  
          maxlength=${this.e.max}   
          @keyup="${this.count}"
        />
        <span id="danger-icon" class="icon is-small is-right">
          <fa-icon
            class="fas fa-exclamation-triangle icon"
            size="1em"
            color="#ff3860"
          ></fa-icon>
        </span>
      </div>
      <p id="warning-text" style="color:#ff3860;">
        ${this.e.name} required
      </p>
      <!-- <span id="require" class="icon is-small is-right">*</span> -->
     <small class="validation-info error" style="display: none;">Required</small>
    <p id ="count" class="input-counter">${this.e.max}</p>
    <span class="icon is-medium is-right" style="position: absolute; top: 27px; right: 10px; z-index: 9999; cursor: pointer;">
      <iron-icon id="eye" icon="icons:visibility" @click="${this.reveal}"></iron-icon>
    </span>
    </div>
        `}invalid(message){this.shadowRoot.querySelector(".control").classList.add("required");this.shadowRoot.querySelector(".control").classList.add("has-error");this.shadowRoot.querySelector(".validation-info").style.display="flex";if(message){this.shadowRoot.querySelector(".validation-info").textContent=message}}valid(){this.shadowRoot.querySelector(".control").classList.remove("required");this.shadowRoot.querySelector(".control").classList.remove("has-error");this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}getValue(){return this.shadowRoot.querySelector("#input").value}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(null!=this.e.max){this.shadowRoot.querySelector("#input").setAttribute("maxlength",this.e.max)}if(null!=this.e.min){this.shadowRoot.querySelector("#input").setAttribute("minlength",this.e.min)}}reveal(){var password=this.shadowRoot.querySelector("#input").value,type=this.shadowRoot.querySelector("#input").type;if("password"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="text";var elementToFocus=this.shadowRoot.querySelector("#eye");elementToFocus.icon="icons:visibility-off"}else if("text"===this.shadowRoot.querySelector("#input").type){this.shadowRoot.querySelector("#input").type="password";var elementToFocus2=this.shadowRoot.querySelector("#eye");elementToFocus2.icon="icons:visibility"}}count(){if(null!=this.e.max){var content=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=content+"/"+this.e.max;if(this.shadowRoot.querySelector("#input").value.length==this.e.max){this.shadowRoot.querySelector("#count").style.color="#FF7273"}else{this.shadowRoot.querySelector("#count").style.color="#cecece"}}}}window.customElements.define(PinInput.is,PinInput);