import { html } from "../../../../node_modules/lit-element/lit-element.js";
import { FormRenderBase, FORM_TYPE_FORM, FORM_TYPE_PAYMENTS_FORM, FORM_TYPE_LANDING_FORM, FORM_TYPE_HIDDEN_FORM, FORM_TYPE_SECTION_FORM, FORM_TYPE_HERO_FORM } from '../../../components/form-render.js';
import { register } from "../register.js";
import "./forms/content-x.js";
import './forms/form-x.js';
import './forms/form-y.js';
import "./forms/section-x.js";
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

    const formType = af.element;

    if (formType === FORM_TYPE_FORM) {
      form = html`
       <form-x id="form" .sections=${this.sections} .pos=${this.pos} @pos-change=${this._onPosChange}>
        <p slot="header" class="card-header-title">${this.feed.title}</p> 
        <e-list 
          slot="body" 
          .renderMode=${this.renderMode} 
          .fr=${this} 
          .oe=${this.activeFeedOe(this.feed, this.pos)}></e-list>
      </form-x>
      `;
    } else if (formType === FORM_TYPE_PAYMENTS_FORM) {
      form = html`
      <style>
        .ii__title{
          margin-bottom: 15px;
          font-size: 14px;
          font-weight: bolder;
        }
      </style>
       <content-x id="form">
        <p slot="header" class="is-capitalized has-text-weight-bold ii__title">${FormRenderBase.toTitleCase(this.feed.title)}</p> 
        <e-list slot="body" .fr=${this} .oe=${this.activeFeedOe(this.feed, this.pos)} ></e-list>
      </content-x>
      `;
    } else if (formType === FORM_TYPE_LANDING_FORM) {
      form = html`
       <landing-x id="form">
        <!-- <p slot="header" class="is-capitalized">${FormRenderBase.toTitleCase(this.feed.title)}</p>  -->
        <e-list slot="body" .fr=${this} .oe=${this.activeFeedOe(this.feed, this.pos)} ></e-list>
      </landing-x>
      `;
    } else if (formType === FORM_TYPE_SECTION_FORM) {
      form = html`
       <section-x id="form">
        <e-list slot="body" .fr=${this} .oe=${this.activeFeedOe(this.feed, this.pos)} ></e-list>
      </section-x>
      `;
    } else if (formType === FORM_TYPE_HERO_FORM) {
      form = html`
       <hero-x id="form">
        <e-list slot="body" .fr=${this} .oe=${this.activeFeedOe(this.feed, this.pos)} ></e-list>
      </hero-x>
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
    ${this.loading ? html`Processing...` : html``}
     ${form}
     `;
  }

}

register(FormRender);