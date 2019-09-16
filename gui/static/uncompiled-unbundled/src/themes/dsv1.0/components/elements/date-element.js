import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { format, parse } from "../../../../../node_modules/date-fns/esm/index.js";
import { DateElementBase } from "../../../../elements/base/date-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DateElement extends DateElementBase {
  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

  <style>
 #input{
 text-indent: 20px;
 }
 /* Removes the clear button from date inputs */
 input[type="date"]::-webkit-clear-button {
     display: none;
 }
 
 /* Removes the spin button */
 input[type="date"]::-webkit-inner-spin-button { 
     display: none;
 }
 
 /* Always display the drop down caret */
 input[type="date"]::-webkit-calendar-picker-indicator {
     color: #1496ED;
 }
 
 .control {
   margin-top: 5px;
 }

</style>
  <div class="column">
        <div class="field">
            <label class="form-label">
            <span><iron-icon icon=${this.e.icon || 'icons:input'}></iron-icon></span>${this.e.name}
            </label>
            <div class="control  has-icons-left">
                <input class="input is-medium"  
                    name=${this.e.name} 
                    id="input"
                    type="date"   
                    placeholder=${this.e.name} 
                    required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max}>
                <span class="icon is-medium is-left">
                <iron-icon icon=${this.e.icon || 'icons:date-range'}></iron-icon>                   
                </span>

            </div>
        </div>
    </div>
        `;
  }

  static get properties() {
    return {
      /**
             * The label for this input.
             */
      label: {
        type: String,
        value: 'Choose Date'
      },
      required: Boolean,
      datestring: {
        type: String,
        value: ''
      },
      columnSize: {
        type: Array
      }
    };
  }

  getInput() {
    const picker = this.qs('#input');
    return picker;
  }

  getValue() {
    const pickerDate = this.getInput().valueAsDate;

    if (pickerDate) {
      const outputTokens = this.e.details['output_format'] || this.e.kind;

      try {
        return format(pickerDate, outputTokens);
      } catch (exception) {
        console.warn(`[DEPRECATED] ${this.e.name} invalid tokens ${outputTokens}, fall back to dd/MM/yyyy`, exception);
        return format(pickerDate, 'dd/MM/yyyy');
      }
    }
  }

  valid(validation) {}

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    if (this.e.required && !this.e.defaultValue) {
      this.getInput().valueAsDate = new Date(); // .toDateInputValue();
    }

    if (this.e.defaultValue) {
      const date = parse(this.e.defaultValue, this.e.details['input_format'], new Date()); // date = new Date(this.e.defaultValue);

      this.getInput().valueAsDate = new Date(new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000)));
    }
  }

}

customElements.define(DateElement.is, DateElement);