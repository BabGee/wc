import { EmailInputBase } from "../../../../elements/base/email-input.js";
import { inputMixin } from "../mixins/input-mixin.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class EmailInput extends inputMixin(EmailInputBase) {
  get type() {
    return 'email';
  }

}

customElements.define(EmailInput.is, EmailInput);