import { NumberInputBase } from "../../../../elements/base/number-input.js";
import { inputMixin } from "../mixins/input-mixin.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class NumberInput extends inputMixin(NumberInputBase) {
  get type() {
    return 'number';
  }

}

customElements.define(NumberInput.is, NumberInput);