import { HyperlinkElementBase } from "../../../../elements/base/hyperlink-element.js";
import { ACTION_SERVICE_CALL, buttonMixin } from "../mixins/button-mixin.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class HyperlinkElement extends buttonMixin(HyperlinkElementBase) {
  static get properties() {
    return {
      name: String,
      params: {
        type: Object,
        value: {}
      }
    };
  }

  get action() {
    return ACTION_SERVICE_CALL;
  }

}

customElements.define(HyperlinkElement.is, HyperlinkElement);