import { SerializableElement } from "../core/serializable-element.js";

class HiddenElement extends SerializableElement {
  static get is() {
    return 'hidden-element';
  }

  static get properties() {
    return {
      icon: String,
      params: {
        type: Object,
        value: {}
      }
    };
  }

  getValue() {
    return this.e.defaultValue;
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    return new this.Validation(true, '');
  }

  valid(validation) {}

  invalid(validation) {// will never happen
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(HiddenElement.is, HiddenElement);