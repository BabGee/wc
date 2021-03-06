import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { BaseElement } from "../../core/base-element.js";
export const ServiceButtonBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'service-button';
  }

  static get properties() {
    return {
      color: String,
      params: {
        type: Object,
        value: {}
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    self.addEventListener('click', function (evt) {
      evt.preventDefault();

      self.pl._dialog(self.e.service, self.params);
    });
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.params = loader.pl.paramsCopy();
  }

};