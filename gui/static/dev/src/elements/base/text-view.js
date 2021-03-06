import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { BaseElement } from "../../core/base-element.js";
export const TextViewBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'text-view';
  }

  static get properties() {
    return {
      icon: String,
      text: String,
      name: String
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.name = TextViewBase.toTitleCase(pElement.name); //  the content should be rendered as is

    this.text = pElement.defaultValue;
  }

};