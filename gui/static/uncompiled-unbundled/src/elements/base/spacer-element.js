import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { BaseElement } from "../../core/base-element.js";
export const spacerElementBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'spacer-element';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

};