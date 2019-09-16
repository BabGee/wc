import { ItemSubmitBase } from "../../../../elements/base/item-submit.js";
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';

class ItemSubmit extends ItemSubmitBase {
  constructor() {
    super();
  }

  renderDefault() {
    return html``;
  }

}

customElements.define(ItemSubmit.is, ItemSubmit);