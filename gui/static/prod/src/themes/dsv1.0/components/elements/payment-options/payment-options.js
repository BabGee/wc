import{dataSourceMixin,SerializableElement,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const PaymentOptionsBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){static get is(){return"payment-options"}constructor(){super();this.paymentMethods=[]}static get properties(){return{icon:String,title:String,maxlength:Number,columnSize:{type:Array},paymentMethods:Array}}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}valid(){}invalid(){}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{const options={};for(let i=0;i<dsc.data.length;i++){const option=dsc.data[i];if(!(option.payment_method_name in options)){options[option.payment_method_name]=[]}options[option.payment_method_name].push(option)}const listOptions=[];for(const entry of Object.entries(options)){listOptions.push({name:entry[0],options:entry[1]})}self.paymentMethods=listOptions})}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.title=PaymentOptionsBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.params=self.pl.paramsCopy();self.loader=this.loadData()}};var paymentOptions={PaymentOptionsBase:PaymentOptionsBase};const PaymentOptionsStyles=css`
/* The container */
.checkcontent {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.checkcontent input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 100%;
     border: 2px solid #a9abac;
}

/* On mouse-over, add a grey background color */
.checkcontent:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkcontent input:checked ~ .checkmark {
    background-color: #4a4a4a;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.checkcontent input:checked ~ .checkmark:after {
    display: block;
}
/* Style the checkmark/indicator */
.checkcontent .checkmark:after {
    left: 8px;
    top: 3px;
    width: 2px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

 option{
 font-size: 18px;
 }
 .select select {
    background-color: white;
    border-color: #dbdbdb;
    color: #363636;
    cursor: pointer;
    padding-left: 2.5em;
    height: 2.5em;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none;
}

`;var paymentOptionsCss={PaymentOptionsStyles:PaymentOptionsStyles};class PaymentOptions extends PaymentOptionsBase{static get styles(){return[PaymentOptionsStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`

   <div class="column">
 <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
 <div class="control">
 
 ${this.paymentMethods.map((paymentMethod,methodIndex)=>html`
<div class="is-inline">
     <span class="icon">
      <i><iron-icon icon="mipayicon:mipayicon"></iron-icon></i>
    </span>
    <label class="checkcontent">${paymentMethod.name}
   <input type="radio" name="method" value="method-${methodIndex}">
  <span class="checkmark"></span>

      <span>
      <div class="select is-fullwidth">
  <select id="method-${methodIndex}" style="text-indent: 20px;padding: 0px; border-radius: 4px;" >
    ${paymentMethod.options.map(option=>html`
    <option value="${option.id}">${option.record}</option>
    </div>
    `)}
    
  </select>
</div>
</span>
</label>
  
 `)}
</div>
</div>
  </div>
  </div>`}constructor(){super()}getValue(){const method=this.qs("input[name=\"method\"]:checked").value,select=this.qs("#"+method);return select.value}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this}}customElements.define(PaymentOptions.is,PaymentOptions);export{paymentOptions as $paymentOptions,paymentOptionsCss as $paymentOptionsCss,PaymentOptionsBase,PaymentOptionsStyles};