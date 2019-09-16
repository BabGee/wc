import { GpSelectBase } from "../../../../elements/base/gp-select.js";
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class GpSelect extends GpSelectBase {
  constructor() {
    super();
  }

  renderDefault() {
    return html`
        TODO!!
        `;
  }

}

customElements.define(GpSelect.is, GpSelect);