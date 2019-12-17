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
      },
      noPastDate: Boolean
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
    } else {
      this.noPastDate = this.e.details.noPastDate;

      if (this.noPastDate) {
        if (this.getInput().valueAsDate == null) {
          return new this.Validation(false, 'Invalid date');
        } else {
          const datePicked = this.getInput().valueAsDate;
          const todaysDate = new Date();

          if (datePicked < todaysDate) {
            return new this.Validation(false, 'Invalid date');
          } else {
            return new this.Validation(true, 'valid date');
          }

          ;
        }
      } //end of this.noPastDate


      return new this.Validation(true, 'valid date');
    }
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