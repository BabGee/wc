import { HyperlinkElementBase } from "../../../../../elements/base/hyperlink-element.js";
import { ACTION_SERVICE_CALL, buttonMixin } from "../../mixins/button-mixin.js";
import { HyperlinkElementStyles } from "./hyperlink-element-css.js";
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
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

  static get styles() {
    return [HyperlinkElementStyles, css`
        :host {
          display: block;
        }
      `];
  }

  get action() {
    return ACTION_SERVICE_CALL;
  }

}

customElements.define(HyperlinkElement.is, HyperlinkElement);