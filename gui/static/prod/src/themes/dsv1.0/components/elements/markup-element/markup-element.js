import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { MarkupElementBase } from "../../../../../elements/base/markup-element.js";
import { MarkupElementStyles } from "./markup-element-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class MarkupElement extends MarkupElementBase {
  static get styles() {
    return [MarkupElementStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
   
        <div id="content"></div>
        `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // todo update to use import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

    this.qs('#content').innerHTML = unescape(this.markup);
  }

}

customElements.define(MarkupElement.is, MarkupElement);