import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { format, parse } from "../../../../../node_modules/date-fns/esm/index.js";
import { SharedStyles } from "../../styles/shared-styles.js";
import { DateElementBase } from "../../../../elements/base/date-element.js";

class DateElement extends DateElementBase {
  renderDefault() {
    return html`
 ${SharedStyles}
  <style>
 #input{
 text-indent: 20px;
 }
</style>
  <div class="column " >
        <div class="field">
            <label class="form-label">
            <span><iron-icon icon=${this.e.icon || 'icons:input'}></iron-icon></span>${this.e.name}
            </label>
            <div class="control  has-icons-left">
                <input class="input"  
                    name=${this.e.name} 
                    id="input"
                    type="date"   
                    placeholder=${this.e.name} 
                    required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max}>
                <span class="icon is-left">
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

  init(pElement, loader) {
    super.init(pElement, loader);
    this.columnSize = loader.pl.getElementColumnSize();
  }

}

customElements.define(DateElement.is, DateElement);