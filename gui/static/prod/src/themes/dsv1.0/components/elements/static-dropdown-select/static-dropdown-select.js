import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const StaticDropdownSelectBase=class extends utilsMixin(SerializableElement){constructor(){super();this.data=[]}static get is(){return"static-dropdown-select"}static get properties(){return{icon:String,items:{type:Object},color:String,vid:Object,title:String,required:Boolean,dropdownValue:Object,data:Array,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.e.required){return new this.Validation(!!this.getValue(),"")}return new this.Validation(!0,"valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.parseData()}parseData(){const parsed=[];let keys=!1,titles=[];for(var i=0;i<this.items.length;i++){const item=this.items[i];if("object"===typeof item){parsed.push(item)}else{if(!keys){titles=item;keys=!0;continue}const obj={};for(var j=0;j<titles.length;j++){obj[titles[j]]=item[j]}parsed.push(obj)}if(item.selected||this.e.kind&&item.id===this.e.kind){this.dropdownValue=item.id}}this.data=parsed}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=StaticDropdownSelectBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.items=JSON.parse(pElement.defaultValue)}};var staticDropdownSelect={StaticDropdownSelectBase:StaticDropdownSelectBase};const StaticDropDownSelectStyles=css`

.main-container {
    padding: 16px;
  }

option{
    font-size: 18px;
    }

`;var staticDropdownSelectCss={StaticDropDownSelectStyles:StaticDropDownSelectStyles};class StaticDropdownSelect extends StaticDropdownSelectBase{static get styles(){return[StaticDropDownSelectStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`


<div class="main-container">
<div class="column is-5 is-offset-4">
    <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
        <label class="form-label">
        <span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>${this.e.name}
        </label>
        <div class="select is-fullwidth">
            <select id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
                <option value="" disabled hidden ?selected="${!this.dropdownValue}">${this.e.name}</option>    
                ${this.data.map(item=>html`<option value="${item.id}" ?selected="${this.dropdownValue===item.id}">${item.name}</option>`)}
            </select>
        </div>
    </div>
</div>
</div>
`}constructor(){super()}getValue(){const select=this.shadowRoot.querySelector("#input");this.dropdownValue=select.value;return this.dropdownValue}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(StaticDropdownSelect.is,StaticDropdownSelect);export{staticDropdownSelect as $staticDropdownSelect,staticDropdownSelectCss as $staticDropdownSelectCss,StaticDropdownSelectBase,StaticDropDownSelectStyles};