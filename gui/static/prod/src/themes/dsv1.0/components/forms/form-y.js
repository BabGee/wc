import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { FormBase } from "../../../../components/form.js";
import { register } from "../../register.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class FormY extends FormBase {
  static get is() {
    return 'form-y';
  }

  render() {
    return html`

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

<style>


</style>



<div class="card form-y-card" style="box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.03); " >
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

register(FormY);