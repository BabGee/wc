import { InputSubmitBase } from "../../../../elements/base/input-submit.js";
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";

class InputSubmit extends InputSubmitBase {
  constructor() {
    super();
  }

  render() {
    return html`
        ${SharedStyles}
        <div class="field">
          <div class="control  has-icons-left has-icons-right">
          <input class="input is-medium" id="input"  name=${this.e.name} type=${this.type} value=${this.value} placeholder=${this.e.name} required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max}   @keyup="${this.count}"  >
           <span id="require" class="icon is-small is-right">*</span>
           <small class="validation-info error" style="display: none;">Required</small>
            <span class="icon is-small is-left">
               <svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </span>
                <span class="icon is-small is-right">
                 <svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </span>
                <i class=" is-right" style="color:red; font-size: 10px; float: right">${this.e.max}</i>

          </div>
        </div>
        `;
  }

}

window.customElements.define(InputSubmit.is, InputSubmit);