import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const StaticDropdownSelectBase=class extends utilsMixin(SerializableElement){constructor(){super();this.data=[]}static get is(){return"static-dropdown-select"}static get properties(){return{icon:String,items:{type:Object},color:String,vid:Object,title:String,required:Boolean,dropdownValue:Object,data:Array,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.e.required){return new this.Validation(!!this.getValue(),"")}return new this.Validation(!0,"valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.parseData()}parseData(){const parsed=[];let keys=!1,titles=[];for(var i=0;i<this.items.length;i++){const item=this.items[i];if("object"===typeof item){parsed.push(item)}else{if(!keys){titles=item;keys=!0;continue}const obj={};for(var j=0;j<titles.length;j++){obj[titles[j]]=item[j]}parsed.push(obj)}if(item.selected||this.e.kind&&item.id===this.e.kind){this.dropdownValue=item.id}}this.data=parsed}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=StaticDropdownSelectBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.items=JSON.parse(pElement.defaultValue)}};var staticDropdownSelect={StaticDropdownSelectBase:StaticDropdownSelectBase};const StaticDropDownSelectStyles=css`
#warning-text{
  display:none;
  padding: 0px;
    margin: 0;
    margin-left: 17px;
    position: relative;
    top: -12px;
    font-size: .75rem;
}
.main-container {
    padding: 16px 12px;
  }

option{
    font-size: 16px;
    border-width: 1px!important;
    border-style: solid!important!;
    border-color: rgb(183, 181, 181)!important;
    border-image: initial!important;     
    }

option:focus{
  box-shadow:none!important;
}

#input{
    width: 100%!important;
    border-width: 1px;
    border-style: solid;;
    border-color: rgb(183, 181, 181);
    border-image: initial;     
          
}

#input:focus{
  box-shadow:none!important;
}
#input:active{
  box-shadow:none!important;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #757575!important;
  right: 1.5em!important;
  
}

.is-danger {
  color: rgb(255, 56, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(255, 56, 96)!important;
}

.is-success{
  color: rgb(35, 209, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(35, 209, 96)!important;
}


`;var staticDropdownSelectCss={StaticDropDownSelectStyles:StaticDropDownSelectStyles};class StaticDropdownSelect extends StaticDropdownSelectBase{static get styles(){return[StaticDropDownSelectStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

<div class="main-container">
  <div class="field">
    <div class="control">
      <div class="select" style="width: 100%;">
        <select id="input" style="width: 100%;">
        <option data-placeholder="true" value="" disabled hidden ?selected="${!this.dropdownValue}">${this.e.name}</option>    
        ${this.data.map(item=>html`<option value="${item.id}" ?selected="${this.dropdownValue===item.id}">${item.name}</option>`)}
        </select>
      </div>
    </div>
  </div>
</div>
<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>

`}constructor(){super()}getValue(){const select=this.shadowRoot.querySelector("#input");this.dropdownValue=select.value;return this.dropdownValue}valid(){const warningText=this.shadowRoot.querySelector("#warning-text"),select=this.shadowRoot.querySelector("#input");select.classList.remove("is-danger");select.classList.add("is-success");warningText.style.display="none"}invalid(){const warningText=this.shadowRoot.querySelector("#warning-text");warningText.style.display="block";const select=this.shadowRoot.querySelector("#input");select.classList.remove("is-success");select.classList.add("is-danger")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(StaticDropdownSelect.is,StaticDropdownSelect);export{staticDropdownSelect as $staticDropdownSelect,staticDropdownSelectCss as $staticDropdownSelectCss,StaticDropdownSelectBase,StaticDropDownSelectStyles};