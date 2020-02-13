import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { PriceSelectBase } from "../../../../../elements/base/price-select.js";
import { PriceSelectStyles } from "./price-select-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class PriceSelect extends PriceSelectBase {
  static get styles() {
    return [PriceSelectStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`

   <div class="column">
 <div class="field" style="margin-top: 0px; margin-bottom: 0px;">
 
                 <div  class="header-pricing is-wavy">
                    <div class="columns is-vcentered">
                        <div class="column is-12">
                            <div class="columns is-vcentered">
                                ${this.rows.map((data, index) => html`
                                    <div class="column is-3">
                                        <!-- Pricing table -->
                                        <div class="flex-card header-pricing-card ${this.colorType[index]} hover-inset">
                                            <h3 class="plan-name">${data[2]}</h3>
                                           <label   class="container">${data[3]}
                                           <input id="check_${data[0]}"  type="radio" name="radio" @click="${() => this.setSelected(data[0])}" ?checked=${this.check(data[0])}><span class="checkmark"></span>
                                           </label>
                                        </div>
                                        <!-- /Pricing table -->
                                    </div>    
                                
                                `)}
                            
                                
                            </div>

                        </div>
                    </div>       
                </div>
 
 
 
  </div>
  </div>`;
  }

  getValue() {
    return this.selected;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
  }

  check(num) {
    if (this.dropdownValue !== null && this.dropdownValue === num) {
      return true;
    } else {
      return false;
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(PriceSelect.is, PriceSelect);