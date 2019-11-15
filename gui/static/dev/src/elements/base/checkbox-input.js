import { SerializableElement } from "../../core/serializable-element.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
export const CheckboxInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'checkbox-input';
  }

  constructor() {
    super();
    this.checked = false;
  }

  static get properties() {
    return {
      checked: {
        type: Boolean
      },
      type: String,
      icon: String,
      title: String,
      maxlength: Number,
      required: Boolean,
      columnSize: String,
      columnOffset: {
        type: Array
      }
    };
  }

  getInput() {
    return this.qs('input');
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    return new this.Validation(true, 'always valid');
  }

  invalid(validation) {// will never happen
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.title = CheckboxInputBase.toTitleCase(pElement.name);
    self.name = pElement.name;

    if (pElement.defaultValue === 'true') {
      this.checked = true;
    }
  }

};