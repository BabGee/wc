import { SerializableElement } from "../../core/serializable-element.js";
export const PasswordInputBase = class extends SerializableElement {
  static get is() {
    return 'password-input';
  }

  static get properties() {
    return {
      params: {
        type: Object,
        value: {}
      },
      type: String,
      columnSize: {
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
    super.init(pElement, loader); // this.required = pElement.min && pElement.min > 0;

    this.required = this.e.required || pElement.min && pElement.min > 0;
    this.value = pElement.defaultValue || '';
  }

};