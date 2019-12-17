import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { format } from "../../../../../node_modules/date-fns/esm/index.js";
import { SharedStyles } from "../../styles/shared-styles.js";
import { TimeElementBase } from "../../../../elements/base/time-element.js";

class TimeElement extends TimeElementBase {
  renderDefault() {
    return html`
 ${SharedStyles}
 <style>
 #input{
 text-indent: 20px;
 }
</style>
<div class="column">
    <div class="field">
        <label class="form-label">
        <span><iron-icon icon=${this.e.icon || 'icons:input'}></iron-icon></span>${this.e.name}
        </label>
        <div class="control  has-icons-left">
            <input class="input"  
                name=${this.e.name} 
                id="input"
                type="time" 
                placeholder=${this.e.name} 
                required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max}
            >
            <span class="icon is-left">
            <iron-icon icon="icons:schedule"></iron-icon>                   
            </span>

        </div>
        <small class="validation-info" style="display:none;">Error </small>
    </div>
</div>
        `;
  }

  getInput() {
    const picker = this.shadowRoot.querySelector('#input');
    return picker;
  }

  getValue() {
    const pickerDate = this.getInput().value; // AsDate;//.getUTCDate();

    if (pickerDate) {
      return this.convertTime24to12(pickerDate);
    }
  }

  valid(Validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'none'; // Revert general text content

    this.shadowRoot.querySelector('.validation-info').textContent = 'Required';
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'block';

    if (validation) {
      this.shadowRoot.querySelector('.validation-info').textContent = validation;
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    if (this.required && !this.e.defaultValue) {
      this.getInput().value = format(new Date(), 'HH:mm');
    }

    if (this.e.defaultValue) {
      this.getInput().value = this.convertTime12to24(this.e.defaultValue);
    }
  }

}

customElements.define(TimeElement.is, TimeElement);