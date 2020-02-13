import { PasswordInputBase } from "../../../../../elements/base/password-input.js";
import { inputMixin } from "../../mixins/input-mixin.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class PasswordInput extends inputMixin(PasswordInputBase) {
  get type() {
    return 'password';
  }

}

window.customElements.define(PasswordInput.is, PasswordInput);