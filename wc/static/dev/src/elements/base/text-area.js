import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
export const TextAreaBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'text-area';
  }

  static get properties() {
    return {
      params: {
        type: Object,
        value: {}
      },
      type: String,
      value: String,
      columnSize: {
        type: Array
      }
    };
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    if ((this.e.required || this.required) && !this.getValue()) {
      return new this.Validation(false, 'invalid');
    }

    return new this.Validation(true, 'valid');
  }

  valid(validation) {}

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = TextAreaBase.toTitleCase(pElement.name);
    this.required = this.e.required || pElement.min && pElement.min > 0;
    this.value = pElement.defaultValue || '';
  }

};