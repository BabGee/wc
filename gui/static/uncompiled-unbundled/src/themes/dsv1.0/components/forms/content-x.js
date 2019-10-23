import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { FormBase } from '../../../../components/form.js';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ContentX extends FormBase {
  static get is() {
    return 'content-x';
  }

  render() {
    return html`

        <style>
            .column .column-title {
                border-bottom: 1px solid #dcd0ff;
                padding-bottom: 8.5px;
                font-size: 15px;
                font-weight: 500;
                margin-bottom: 30px;
                text-transform: capitalize!important;
            }
        </style>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="column column-left">
            <div class="column-title">
                <slot name="header"></slot>
            </div>
            <div class="tab-content">
                <slot name="sub-heading"></slot>
                <slot name="body"></slot>
            </div>
        </div>
    `;
  }

  getForm() {
    return this.shadowRoot.querySelector('slot[name=\'body\']').assignedNodes()[0];
  }

}

window.customElements.define(ContentX.is, ContentX);