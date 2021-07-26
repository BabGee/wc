import { SubmitElementBase } from "../../../../elements/base/submit-element.js";
import { buttonMixin } from "../mixins/button-mixin.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SubmitElement extends buttonMixin(SubmitElementBase) {}

customElements.define(SubmitElement.is, SubmitElement);