import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../icons/my-icons.js";import{SharedStyles}from"../../styles/shared-styles.js";import"../../../../../node_modules/@polymer/iron-icons/iron-icons.js";import"../../../../../node_modules/@polymer/iron-icon/iron-icon.js";import{MsisdnInputBase}from"../../../../elements/base/msisdn-input.js";class MsisdnInput extends MsisdnInputBase{render(){return html`
        ${SharedStyles}
        <style>
       
        select {
    position: absolute;
    background-color: #f5f5f5;
    color: #363636;
    border: 1px solid #ccc;
    cursor: pointer;
    display: block;
    padding-left: 4px;
    font-size: 1em;
    max-width: 100%;
    width: 64px;
    height: 2.25em;
    margin-top: 1px;
    outline: none;
    z-index: 5;
        }
        option{
            font-size: 14px;
        }
        #country-code{
        color:#4a4a4a;
        }
</style>
  <div class="column ">
        <div class="field">
          <div class="select-country">
           <select id="code"  @change="${this.codeSelected}">
            ${this.rows.map(row=>html`<option ?selected="${"254"===row[0]}" value="${row[0]}">${row[1]} +${row[0]}</option>`)}
            </select>
              </div>
          <div class="control  has-icons-left">
         
                <input class="input"  
                        id="input"
                        name="${this.e.name}" 
                        type="tel" 
                        placeholder="${this.e.name}" 
                        required="${this.required}" 
                        minlength="${this.e.min}"  
                        maxlength="${this.e.max}"  style="text-indent: 110px;">
            <span class="icon is-left" style="font-size: 14px;margin-left: 64px; color:  black;">
                   <p id="country-code">+254</p>
            </span>
            <small class="info-error" style="display: none;"> Error </small>
        
          </div>
        </div>
        </div>
        `}constructor(){super()}getValue(){const codeSelect=this.shadowRoot.querySelector("#code"),numberInput=this.shadowRoot.querySelector("#input");if(numberInput.value){return"+"+codeSelect.value+numberInput.value}}codeSelected(){const codeSelect=this.shadowRoot.querySelector("#code").value;this.shadowRoot.querySelector("#country-code").textContent="+"+codeSelect}valid(){this.shadowRoot.querySelector(".info-error").style.display="none";this.shadowRoot.querySelector(".info-error").textContent="Required"}invalid(validation){this.shadowRoot.querySelector(".info-error").style.display="block";if(validation){this.shadowRoot.querySelector(".info-error").textContent=validation}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.checkKindValue()}checkKindValue(){const kindValue=this.e.kind,numberInput=this.shadowRoot.querySelector("#input");if(null!=kindValue){switch(kindValue.length){case 11:numberInput.value=kindValue.slice(2);break;case 12:numberInput.value=kindValue.slice(3);break;case 13:numberInput.value=kindValue.slice(4);break;default:numberInput.value="";break;}}else{numberInput.value=""}}}customElements.define(MsisdnInput.is,MsisdnInput);