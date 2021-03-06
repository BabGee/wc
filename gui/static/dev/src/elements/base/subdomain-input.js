import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
export const SubdomainInputBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'subdomain-input';
  }

  static get properties() {
    return {};
  }

  invalid(validation) {
    this.qs('#message').innerText = validation.message;
  }

  valid(validation) {
    this.qs('#message').innerText = validation.message;
  }

  getValue() {
    return this.qs('#input').value;
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    const value = this.getValue();

    if (this.required && !value) {
      // this.invalid();
      return new this.Validation(false, this.e.name + ' is Required');
    }

    if (value) {
      let message;
      let regex;
      message = 'must be alphanumeric; a-z, 0-9 or hyphen with no spaces';
      regex = /^[a-z0-9\-]*$/gmi;

      if (!regex.test(value)) {
        return new this.Validation(false, message);
      }

      message = 'cannot start or end with a hyphen';

      if (value.startsWith('-') || value.endsWith('-')) {
        return new this.Validation(false, message);
      }

      message = 'must have between 3 and 63 characters';

      if (value.length < this.e.min || value.length > this.e.max) {
        return new this.Validation(false, message + ', Current ' + value.length);
      }
    }

    return new this.Validation(true, 'Valid Domain');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this; // self.title = SubdomainInput.toTitleCase(pElement.name);

    this.required = this.e.required || pElement.min && pElement.min > 0;
    this.value = pElement.defaultValue || '';
  }

};