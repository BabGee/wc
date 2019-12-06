import{html,BarcodeScannerBase}from"../../../../components/adaptive-ui.js";class BarcodeScanner extends BarcodeScannerBase{renderDefault(){return html`

 <style>
 .input-counter{
 text-align: right;
    font-size: 10px;
    color: #cecece;
 }
</style>
 <div class="column">
<div class="field" style="margin-top: 0px">
 ${"payments"!==this.pageType.template?html`
                    
        <label class="form-label"><span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>${this.e.name}<span id="require" class="icon is-small is-right">*</span></label>
  <div class="control  has-icons-left has-icons-right">

    <input class="input is-medium"  
            id="input" 
            name=${this.e.name} 
            type="text"
            value=${this.value} 
            placeholder=${this.e.name} 
            required=${this.required}"   
            @keyup="${this.count}"  >
     
     <small class="validation-info error" style="display: none;">Required</small>
    <p id ="count" class="input-counter">${this.e.max}</p>

  </div>            
                 `:html`
                      <div class="control-material is-primary">    
    <input class="material-input"            
            id="input" 
            name=${this.e.name} 
            type="text"
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
 
 
        `}invalid(validation){let control=".control";if("payments"===this.pageType.template){control=".control-material"}this.shadowRoot.querySelector(control).classList.add("required");this.shadowRoot.querySelector(control).classList.add("has-error");this.shadowRoot.querySelector(".validation-info").style.display="flex";if(validation){this.shadowRoot.querySelector(".validation-info").textContent=validation}}valid(validation){let control=".control";if("payments"===this.pageType.template){control=".control-material"}this.shadowRoot.querySelector(control).classList.remove("required");this.shadowRoot.querySelector(control).classList.remove("has-error");this.shadowRoot.querySelector(".validation-info").style.display="none";// Revert general text content
this.shadowRoot.querySelector(".validation-info").textContent="Required"}getInput(){return this.qs("#input")}getValue(){return this.qs("#input").value}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.type="text";if(null!=this.e.max){this.qs("#input").setAttribute("maxlength",this.e.max)}if(null!=this.e.min){this.qs("#input").setAttribute("minlength",this.e.min)}if(!0===this.required){this.qs("#require").style.display="unset"}else{this.qs("#require").style.display="none"}}count(){if(null!=this.e.max){var content=this.qs("#input").value.length;this.qs("#count").textContent=content+"/"+this.e.max;if(this.qs("#input").value.length==this.e.max){this.qs("#count").style.color="#FF7273"}else{this.qs("#count").style.color="#cecece"}}}}window.customElements.define(BarcodeScanner.is,BarcodeScanner);