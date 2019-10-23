import { html } from "../../../../node_modules/lit-element/lit-element.js";
import { FormRenderBase, FORM_TYPE_FORM, FORM_TYPE_PAYMENTS_FORM, FORM_TYPE_HIDDEN_FORM } from '../../../components/form-render.js';
import { register } from "../register.js";
import './forms/form-x.js';
import './forms/form-y.js';
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
       <form-x id="form" .sections=${this.sections} .pos=${this.pos} @pos-change=${this._onPosChange}>
        <p slot="header" class="card-header-title">${FormRenderBase.toTitleCase(this.feed.title)}</p> 
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
    <style>             
        .column{
            display:block;
            flex-basis:0;
            flex-grow:1;
            flex-shrink:1
        }
        .column.is-1,.column.is-1-tablet{
            flex:none;
            width:8.33333%
        }
        .column.is-offset-1,.column.is-offset-1-tablet{
            margin-left:8.33333%
        }
        .column.is-2,.column.is-2-tablet{
            flex:none;
            width:16.66667%
        }
        .column.is-offset-2,.column.is-offset-2-tablet{
            margin-left:16.66667%
        }
        .column.is-3,.column.is-3-tablet{
            flex:none;
            width:25%;
        }
        .column.is-offset-3,.column.is-offset-3-tablet{
            margin-left:25%;
        }
        .column.is-4,.column.is-4-tablet{
            flex:none;width:33.33333%;
        }
        .column.is-offset-4,.column.is-offset-4-tablet{
            margin-left:33.33333%;
        }
        .column.is-5,.column.is-5-tablet{
            flex:none;
            width:41.66667%;
        }
        .column.is-offset-5,.column.is-offset-5-tablet{
            margin-left:41.66667%
        }
        .column.is-6,.column.is-6-tablet{
            flex:none;
            width:50%;
        }
        .column.is-offset-6,.column.is-offset-6-tablet{
            margin-left:50%;
        }
        .column.is-7,.column.is-7-tablet{
            flex:none;
            width:58.33333%;
        }
        .column.is-offset-7,.column.is-offset-7-tablet{
            margin-left:58.33333%;
        }
        .column.is-8,.column.is-8-tablet{
            flex:none;width:66.66667%;
        }
        .column.is-offset-8,.column.is-offset-8-tablet{
            margin-left:66.66667%;
        }
        .column.is-9,.column.is-9-tablet{
            flex:none;width:75%;
        }
        .column.is-offset-9,.column.is-offset-9-tablet{
            margin-left:75%;
        }
        .column.is-10,.column.is-10-tablet{
            flex:none;
            width:83.33333%;
        }
        .column.is-offset-10,.column.is-offset-10-tablet{
            margin-left:83.33333%;
        }
        .column.is-11,.column.is-11-tablet{
            flex:none;
            width:91.66667%;
        }
        .column.is-offset-11,.column.is-offset-11-tablet{
            margin-left:91.66667%;
        }
        .column.is-12,.column.is-12-tablet{
            flex:none;width:100%;
        }
        .column.is-offset-12,.column.is-offset-12-tablet{
            margin-left:100%;
        }
        .columns{
            margin-left:0;
            margin-right:0;
            margin-top:0;
        }
        .columns:not(:last-child){
            margin-bottom:calc(1.5rem - .75rem);
        }
        .columns.is-centered{
            justify-content:center;
        }
        .columns.is-mobile{
            display:flex;
        }.columns.is-multiline{
            flex-wrap:wrap;
        }
        .columns.is-vcentered{
            align-items:center;
        }
        @media screen and (min-width:769px),print{
            .columns:not(.is-desktop){
                display:flex;
            }
        }
        @media screen and (min-width:1088px){
            .columns.is-desktop{display:flex;
            }
        }
                
        @media screen and (max-width: 768px)  {
            .column, .column.is-1, .column.is-2, 
            .column.is-3, .column.is-4, .column.is-5, 
            .column.is-6, .column.is-7, .column.is-8, 
            .column.is-9, .column.is-10, .column.is-11, 
            .column.is-12{
                flex: none;
            }
        }
     </style>
     ${form}
     `;
  }

}

register(FormRender);