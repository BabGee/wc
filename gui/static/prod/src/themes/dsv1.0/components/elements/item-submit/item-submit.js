import { ItemSubmitBase } from "../../../../../elements/base/item-submit.js";
import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { ItemSubmitStyles } from "./item-submit-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ItemSubmit extends ItemSubmitBase {
  constructor() {
    super();
  }

  static get styles() {
    return [ItemSubmitStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html``;
  }

}

customElements.define(ItemSubmit.is, ItemSubmit);