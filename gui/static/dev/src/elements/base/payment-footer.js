import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { BaseElement } from "../../core/base-element.js";
export const PaymentFooterBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'payment-footer';
  }

};