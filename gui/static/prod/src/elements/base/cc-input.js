import { SerializableElement } from "../../core/serializable-element.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
export const CcInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'cc-input';
  }

  static get properties() {
    return {
      value: String,
      params: {
        type: Object,
        value: {}
      },
      type: String,
      columnSize: String,
      ColumnOffset: {
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

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.getInput().value;
  }

  validate() {
    if (this.e.required && !this.getValue() && this.getValue().length !== 15) {
      if (this.getValue().length !== 15) {
        return new this.Validation(false, this.e.name + ' Minimum of 3 Required');
      } else {
        return new this.Validation(false, this.e.name + ' is Required');
      }
    }

    return new this.Validation(true, 'valid');
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    self.title = CcInputBase.toTitleCase(pElement.name);
    this.required = pElement.min && pElement.min > 0;
    this.name = pElement.name;
  }

};