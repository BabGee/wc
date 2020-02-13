import { SerializableElement } from "../../core/serializable-element.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
export const CvcInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'cvc-input';
  }

  static get properties() {
    return {
      value: String,
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
    if (this.e.required && !this.getValue() && this.getValue().length !== 3) {
      if (this.getValue().length !== 3) {
        return new this.Validation(false, this.e.name + ' 3 numbers required');
      } else {
        return new this.Validation(false, this.e.name + ' is Required');
      }
    }

    return new this.Validation(true, 'valid');
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    self.title = CvcInputBase.toTitleCase(pElement.name);
    this.required = pElement.min && pElement.min > 0;
    this.name = pElement.name;
  }

};