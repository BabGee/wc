import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
import { format, parse } from "../../../node_modules/date-fns/esm/index.js";
export const DateElementBase = class extends utilsMixin(SerializableElement) {
  static get is() {
    return 'date-element';
  }

  static get properties() {
    return {
      /**
             * The label for this input.
             */
      label: {
        type: String,
        value: 'Choose Date'
      },
      required: Boolean,
      datestring: {
        type: String,
        value: ''
      },
      columnSize: {
        type: Array
      }
    };
  }

  getName() {
    return this.e.formName;
  }

  valid(validation) {}

  invalid(validation) {}

  validate() {
    if (this.required && !this.getValue()) {
      return new this.Validation(false, 'Invalid date');
    }

    return new this.Validation(true, 'Invalid date');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.required = this.e.required || pElement.min && pElement.min > 0;
    self.label = DateElementBase.toTitleCase(pElement.name);
    self.params = loader.pl.paramsCopy();
  }

};