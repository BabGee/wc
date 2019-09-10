import { css, html, LitElement } from "../../../../node_modules/lit-element/lit-element.js";
import { FormBase } from "../../../components/form.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class FormY extends FormBase {
  static get is() {
    return 'form-y';
  }

  render() {
    return html`

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

<div class="card">
  <div class="card-content">
      <slot name="body"></slot>
</div>  

</div>
`;
  }

  getForm() {
    return this.shadowRoot.querySelector('slot[name=\'body\']').assignedNodes()[0];
  }

}

window.customElements.define(FormY.is, FormY);