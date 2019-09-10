import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { BaseElement } from "../../core/base-element.js";
export const GpSelectBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'gp-select';
  }

  static get properties() {
    return {
      title: String,
      q: {
        type: String,
        value: ''
      },
      selected: Object,
      params: {
        type: Object,
        value: ''
      }
    };
  }

  getValue() {
    return this.selected;
  }

  getName() {
    const el = this.e.formName; // .split("=");

    return el;
  }

  validate() {
    if (this.e.required && !this.getValue()) {
      return false;
    } // TODO implement validation


    return true;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // this.loadData().then(dsc => {});
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.title = GpSelect.toTitleCase(pElement.name);
    self.params = self.pl.params;
  }

};