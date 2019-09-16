import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { MarkupElementBase } from "../../../../elements/base/markup-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class MarkupElement extends MarkupElementBase {
  renderDefault() {
    return html`
     <style>
     .resize_icon {
         width: 100%;
        height: 80px;
    }
    #content{
        padding-top: 10px;
    }
    </style>
        <div id="content"></div>
        `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // todo update to use import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

    this.qs('#content').innerHTML = unescape(this.markup);
  }

}

customElements.define(MarkupElement.is, MarkupElement);