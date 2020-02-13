import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
export const TextInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'text-input';
  }

  static get properties() {
    return {
      params: {
        type: Object,
        value: {}
      },
      type: String,
      pageType: {
        type: Object,
        value: {}
      },
      columnSize: {
        type: Array
      },
      columnOffset: {
        type: Array
      }
    };
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    if (this.required && !this.getValue()) {
      return new this.Validation(false, this.e.name + ' is Required');
    }

    return new this.Validation(true, 'valid');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = TextInputBase.toTitleCase(pElement.name);
    this.required = this.e.required || pElement.min && pElement.min > 0;
    this.value = pElement.defaultValue || '';
  }

};