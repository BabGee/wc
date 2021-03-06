import { BaseElement } from "../../core/base-element.js";
export const LoginMipayBase = class extends BaseElement {
  static get is() {
    return 'login-mipay';
  }

  constructor() {
    super();
    this.addEventListener('click', this._submit.bind(this));
  }

  static get properties() {
    return {
      title: String,
      name: String,
      type: String,
      params: {
        type: Object,
        value: {}
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.type = 'submit';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    this.name = pElement.name;
  }

  _submit() {
    this.pl.submitForm();
  }

};