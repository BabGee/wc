import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import { StaticDropdownSelectBase } from "../../../../elements/base/static-dropdown-select.js";

class StaticDropdownSelect extends StaticDropdownSelectBase {
  render() {
    return html`
 ${SharedStyles}
  <style>
 option{
 font-size: 18px;
 }
</style>
<div class="column">
    <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
        <label class="form-label">
        <span><iron-icon icon=${this.e.icon || 'icons:input'}></iron-icon></span>${this.e.name}
        </label>
        <div class="select is-fullwidth">
            <select id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
                <option value="" disabled hidden ?selected="${!this.dropdownValue}">${this.e.name}</option>    
                ${this.data.map(item => html`<option value="${item.id}" ?selected="${this.dropdownValue === item.id}">${item.name}</option>`)}
            </select>
        </div>
    </div>
</div>
`;
  }

  constructor() {
    super();
  }

  getValue() {
    const select = this.shadowRoot.querySelector('#input');
    this.dropdownValue = select.value;
    return this.dropdownValue;
  }

  valid(validation) {}

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.columnSize = loader.pl.getElementColumnSize();
  }

}

customElements.define(StaticDropdownSelect.is, StaticDropdownSelect);