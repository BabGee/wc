import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { BaseElement } from "../../core/base-element.js";
import { adaptiveUiMixin } from "../../core/mixins/adaptiveui-mixin.js";
export const NavbarBase = class extends adaptiveUiMixin(utilsMixin(BaseElement)) {
  static get is() {
    // todo test
    throw new DOMException('Extending [SectionPElementBase] must implement `static get is()`');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

};