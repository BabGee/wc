import { SerializableElement } from "../core/serializable-element.js";

class FingerprintElement extends SerializableElement {
  static get is() {
    return 'fingerprint-element';
  }

  getValue() {
    return window.csrfToken;
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    return new this.Validation(true, 'valid');
  }

  valid(validation) {}

  invalid(validation) {// will never happen
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

window.customElements.define(FingerprintElement.is, FingerprintElement);