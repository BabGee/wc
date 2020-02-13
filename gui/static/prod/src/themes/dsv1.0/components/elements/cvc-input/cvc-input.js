import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/gold-cc-cvc-input/gold-cc-cvc-input.js";
import { CvcInputBase } from "../../../../../elements/base/cvc-input.js";
import { CvcInputServiceStyles } from "./cvc-input-service-css.js";
import { CvcInputDefaultStyles } from "./cvc-input-default-css.js";
import { InputDefaultStyles } from "../../../styles/input-shared-default.js";
import { InputLabelAnimationtStyles } from "../../../styles/input-label-animation.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

const GetStylesConst = function () {
  console.log("GET STYLES");

  if (window.template == 'service') {
    return CvcInputServiceStyles;
  } else {
    return CvcInputDefaultStyles;
  }
};

class CvcInput extends CvcInputBase {
  static get styles() {
    return [InputDefaultStyles, InputLabelAnimationtStyles, GetStylesConst(), css`
        :host {
          display: block;
        }
      `];
  }

  renderService() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column row">
      <div class="input-mixin input-effect">
        <input class="label-animation" type="text" placeholder="">
        <label>${this.e.name}</label>
        <span class="focus-bg"></span>
      </div>
    </div>
    `;
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column is-paddingless">
      <div class="column">
        <div class="input-mixin input-effect">
          <input class="label-animation" type="text" placeholder="">
          <label>${this.e.name}</label>
          <span class="focus-bg"></span>
        </div>
      </div>
    </div>
        `;
  }

  static get properties() {
    return {
      value: String,
      params: {
        type: Object,
        value: {}
      },
      columnSize: {
        type: Array
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.getInput().value;
  }

  invalid(validation) {
    this.qs('.control').classList.add('required');
    this.qs('.control').classList.add('has-error'); // if (validation)
    // {this.qs('.validation-info').textContent= validation;}
  }

  valid(validation) {
    this.qs('.control').classList.remove('required');
    this.qs('.control').classList.remove('has-error'); // Revert general text content
  }

}

customElements.define(CvcInput.is, CvcInput);