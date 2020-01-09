import{html,SharedStyles,PaymentOptionsBase}from"../../../../components/adaptive-ui.js";class PaymentOptions extends PaymentOptionsBase{renderDefault(){return html`
 ${SharedStyles}
<style>
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
</style>

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
  </div>`}constructor(){super()}getValue(){const method=this.qs("input[name=\"method\"]:checked").value,select=this.qs("#"+method);// find selected payment method
// find selection option in the method
return select.value}valid(validation){}invalid(validation){}}customElements.define(PaymentOptions.is,PaymentOptions);