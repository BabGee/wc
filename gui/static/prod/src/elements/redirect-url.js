import { SerializableElement } from "../core/serializable-element.js";
import { html } from "../../node_modules/lit-element/lit-element.js";

class RedirectUrl extends SerializableElement {
  static get is() {
    return 'redirect-url';
  } // todo move into super class


  render() {
    return html``;
  }

  static get properties() {
    return {
      name: String,
      result: String
    };
  }

  getValue() {
    return this.result;
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
    super.init(pElement, loader); // TODO remove this re-assignment

    var self = this;
    self.name = pElement.elementJson[4];
    self.result = window.location.pathname + window.location.search + window.location.hash;
  }

}

customElements.define(RedirectUrl.is, RedirectUrl);