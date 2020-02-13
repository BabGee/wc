import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { FormBase } from '../../../../components/form.js';
import { register } from "../../register.js";
import "../../../../components/adaptive-ui-icon.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class FormX extends FormBase {
  static get is() {
    return 'form-x';
  }

  constructor() {
    super();
    this.pos = 0;
    this.sections = []; // this.head = "";
  }

  render() {
    return html`

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

<style>


.l-title{
  position: relative;
  top: -13px;
}
  </style>

<div class="card form-x-card" style="box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.03); ">
    <header class="card-header" style="padding-left: 32px; padding-top: 11px; padding-right: 32px;">    
        <adaptive-ui-icon style="float: left;position:relative;top: 13px;"
                    ?hidden="${this._hideB(this.pos, this.sections)}"
                   icon="icons:arrow-back"
                   @click="${this._back}"></adaptive-ui-icon>
        <slot name="header"></slot>
        <adaptive-ui-icon style="float: right;position: relative; top:13px;"
                   ?hidden="${this._hideF(this.pos, this.sections)}"
                   icon="icons:arrow-forward"
                   @click="${this._forward}"></adaptive-ui-icon>
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

  _notifyPosChange(newPos) {
    this.dispatchEvent(new CustomEvent('pos-change', {
      bubbles: true,
      composed: true,
      detail: {
        pos: newPos
      }
    }));
  }

  _back(evt) {
    // console.info('back')
    this.pos -= 1;

    this._notifyPosChange(this.pos);
  }

  _forward(evt) {
    this.pos += 1;

    this._notifyPosChange(this.pos);
  }

  _hideB(p, s) {
    // return false;
    return p === 0; // ||  p >= s.length-1
  }

  _hideF(p, s) {
    // return false;
    return p >= s.length - 1;
  }

}

register(FormX);