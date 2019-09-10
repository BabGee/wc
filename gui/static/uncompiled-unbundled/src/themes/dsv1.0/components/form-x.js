import { css, html, LitElement } from "../../../../node_modules/lit-element/lit-element.js";
import { FormBase } from '../../../components/form.js';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class FormX extends FormBase {
  static get is() {
    return 'form-x';
  }

  render() {
    return html`

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

<div class="card">
    <header class="card-header">    
        <slot name="header"></slot>
</header>

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

window.customElements.define(FormX.is, FormX);