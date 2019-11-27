import{html,SharedStyles,NumberInputBase,enterSubmitMixin}from"../../../../components/adaptive-ui.js";class NumberInput extends enterSubmitMixin(NumberInputBase){renderDefault(){return html`
        ${SharedStyles}
        <div class="column " >
<div class="field" style="margin-top: 0px">
 ${"payments"!==window.template?html`
                    
        <label class="form-label">
          <span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>
          ${this.e.name}<span id="require" class="icon is-small is-right">*</span>
        </label>
    
  <div class="control  has-icons-left has-icons-right">

    <input class="input"  
            id="input" 
            name=${this.e.name} 
            type="number"
            value=${this.value} 
            placeholder=${this.e.name} 
            required=${this.required}"   
            @keyup="${this.count}"  >
     
     <small class="validation-info error" style="display: none;">Required</small>
    <p id ="count" class="input-counter">${this.e.max}</p>

  </div>            
                 `:html`
                      <div class="control control-material is-primary">    
    <input class="material-input"            
            id="input" 
            name=${this.e.name} 
            type="number"
            value=${this.value} 
            required=${this.required}"   
            @keyup="${this.count}"  >
    <span class="material-highlight"></span>
    <span class="bar"></span>
         <small class="validation-info error" style="display: none;">Required</small>
    <p id ="count" class="input-counter">${this.e.max}</p>
    <label><span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>${this.e.name} <span id="require" class="icon is-small is-right">*</span></label>
</div>
                     `}     
</div>
</div>
 
 
        `}invalid(message){this.shadowRoot.querySelector(".control").classList.add("required");this.shadowRoot.querySelector(".control").classList.add("has-error");this.shadowRoot.querySelector(".validation-info").style.display="flex";if(message){this.shadowRoot.querySelector(".validation-info").textContent=message}}valid(){this.shadowRoot.querySelector(".control").classList.remove("required");this.shadowRoot.querySelector(".control").classList.remove("has-error");this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}getValue(){return this.shadowRoot.querySelector("#input").value}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.type="number";if(null!=this.e.max){this.shadowRoot.querySelector("#input").setAttribute("maxlength",this.e.max)}if(null!=this.e.min){this.shadowRoot.querySelector("#input").setAttribute("minlength",this.e.min)}if(!0===this.required){this.shadowRoot.querySelector("#require").style.display="unset"}else{this.shadowRoot.querySelector("#require").style.display="none"}}count(){if(null!=this.e.max){var content=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=content+"/"+this.e.max;if(this.shadowRoot.querySelector("#input").value.length==this.e.max){this.shadowRoot.querySelector("#count").style.color="#FF7273"}else{this.shadowRoot.querySelector("#count").style.color="#cecece"}}}}customElements.define(NumberInput.is,NumberInput);