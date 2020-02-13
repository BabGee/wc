import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { TextFieldBase } from "../../../../../elements/base/text-field.js";
import { TextFieldStyles } from "./text-field-css.js";

class TextField extends TextFieldBase {
  static get styles() {
    return [TextFieldStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
        <div class="input-field">
            <label for="input" class="Label-Name">${this.e.name}</label>

            <div id="inputGroup" class="default-2px">

                <input 
                 type=${this.type} 
                 style="font-family: TTNormsPro; font-size: 14px; font-weight: normal;font-style: normal;
                        font-stretch: normal;line-height: 1.14;letter-spacing: normal;color: #6c7a89;" 
                 class="input-padding Your-text"
                 value=${this.value}
                 required=${this.required}
                 placeholder=${this.e.name}
                 id="input">

                <img id="validationIcon" src="" class="complete icon">

            </div>
             <div id="validationMessage" class="Username-or-Password" style="margin-top:3px;"></div>

        </div>

        `;
  }

  invalid(validation) {
    this.shadowRoot.querySelector('#validationIcon').style.visibility = 'visible';
    this.shadowRoot.querySelector('#inputGroup').className = '';
    this.shadowRoot.querySelector('#inputGroup').classList.add('error-4px');
    this.shadowRoot.querySelector('#validationIcon').setAttribute('src', 'src/themes/dsv1.0/img/warning.svg');

    if (validation) {
      this.shadowRoot.querySelector('#validationMessage').style.display = 'block';
      this.shadowRoot.querySelector('#input').placeholder = validation;
    }
  }

  valid(validation) {
    this.shadowRoot.querySelector('#validationIcon').style.visibility = 'visible'; // success-2px

    this.shadowRoot.querySelector('#inputGroup').className = '';
    this.shadowRoot.querySelector('#inputGroup').classList.add('success-2px');
    this.shadowRoot.querySelector('#validationIcon').setAttribute('src', 'src/themes/dsv1.0/img/complete.svg');

    if (validation) {
      this.shadowRoot.querySelector('#validationMessage').style.display = 'none';
    }
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.getInput().value;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.shadowRoot.querySelector('#validationMessage').style.display = 'none';
    this.shadowRoot.querySelector('#validationIcon').style.visibility = 'hidden';
  }

  get type() {
    return 'text';
  }

}

window.customElements.define(TextField.is, TextField);