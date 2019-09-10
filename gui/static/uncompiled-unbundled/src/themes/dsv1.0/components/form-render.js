import { css, html } from "../../../../node_modules/lit-element/lit-element.js";
import { FormRenderBase, FORM_TYPE_FORM, FORM_TYPE_PAYMENTS_FORM, FORM_TYPE_HIDDEN_FORM } from '../../../components/form-render.js';
import { register } from "../register.js";
import "./content-x.js";
import './form-x.js';
import './form-y.js';
import './e-list.js';
import { Logger } from "../../../core/logger.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class FormRender extends FormRenderBase {
  constructor() {
    super();
  }

  render() {
    let form;

    const af = this.__computeActiveFeed();

    Logger.i.info(af);
    const formType = af.element;

    if (formType === FORM_TYPE_FORM) {
      form = html`
       <form-x id="form">
        <p slot="header" class="card-header-title">${this.feed.title}</p> 
        <e-list slot="body" .fr=${this} .oe=${this.activeFeedOe(this.feed, this.pos)} ></e-list>
      </form-x>
      `;
    } else if (formType === FORM_TYPE_PAYMENTS_FORM) {
      form = html`
       <content-x id="form">
        <p slot="header" class="is-capitalized">${FormRenderBase.toTitleCase(this.feed.title)}</p> 
        <e-list slot="body" .fr=${this} .oe=${this.activeFeedOe(this.feed, this.pos)} ></e-list>
      </content-x>
      `;
    } else if (formType === FORM_TYPE_HIDDEN_FORM) {
      form = html`
      <form-y id="form"> 
        <e-list slot="body" .fr=${this} .oe=${this.activeFeedOe(this.feed, this.pos)} ></e-list>
      </form-y>
      `;
    } else {
      form = html`
      <h4>Undefined Form Type  <strong style="color: red;">${formType}</strong> </h4>
      `;
    }

    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
     ${form}
     `;
  }

}

register(FormRender);