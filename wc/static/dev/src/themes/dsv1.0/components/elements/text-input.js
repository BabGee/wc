import { TextInputBase } from "../../../../elements/base/text-input.js";
import { inputMixin } from "../mixins/input-mixin.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TextInput extends inputMixin(TextInputBase) {}

window.customElements.define(TextInput.is, TextInput);