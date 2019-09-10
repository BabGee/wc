import { TextAreaBase } from "../../../../elements/base/text-area.js";
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import { DASHBOARD_STYLES } from "../../styles/dashboard-styles.js";

class TextArea extends TextAreaBase {
  render() {
    return html`
 ${SharedStyles}       
${DASHBOARD_STYLES} 
 <div class="column"> 
<div class="field">
<label class="form-label"><span><iron-icon icon=${this.e.icon || 'icons:input'}></iron-icon></span>${this.e.name}</label>
  <div class="control">
    <textarea class="textarea is-medium is-grow" rows="5"
                id="input" 
                @mouseout = ${() => this.removeFocus()}
                placeholder=${this.e.name} 
                required=${this.required}
                @keyup=${this.count} 
                maxlength=${this.e.max}>${this.value}</textarea>
                <small class="validation-info error" style="display: none;">Required</small>
                <p id ="count" class="input-counter">${this.e.max}</p>

  </div>
</div>
</div>
        `;
  }

  removeFocus() {
    this.shadowRoot.querySelector('textarea').blur();
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.getInput().value;
  }

  invalid(validation) {
    const control = '.control';
    this.qs(control).classList.add('required');
    this.qs(control).classList.add('has-error');
    this.qs('.validation-info').style.display = 'flex';

    if (validation) {
      this.qs('.validation-info').textContent = validation;
    }
  }

  valid(validation) {
    const control = '.control';
    this.qs(control).classList.remove('required');
    this.qs(control).classList.remove('has-error');
    this.qs('.validation-info').style.display = 'none'; // Revert general text content

    this.qs('.validation-info').textContent = 'Required';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  count() {
    if (this.e.max != null) {
      var content = this.getValue().length;
      this.qs('#count').textContent = content + '/' + this.e.max;

      if (this.getValue().length == this.e.max) {
        this.qs('#count').style.color = '#FF7273';
      } else {
        this.qs('#count').style.color = '#cecece';
      }
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.columnSize = loader.pl.getElementColumnSize();
  }

}

window.customElements.define(TextArea.is, TextArea);