import { SerializableElement } from "../../core/serializable-element.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
export const CcExpirationBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'cc-expiration';
  }

  static get properties() {
    return {
      label: String,
      params: {
        type: Object,
        value: {}
      },
      columnSize: {
        type: Array
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    if (this.e.required && !this.getValue()) {
      return new this.Validation(false, 'invalid');
    }

    return new this.Validation(true, 'valid');
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = CcExpirationBase.toTitleCase(pElement.name);
    this.required = pElement.min && pElement.min > 0;
    this.name = pElement.name;
  }

};