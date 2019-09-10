import { fileUploadMixin } from "../../core/mixins/fileupload-mixin.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
export const ImageInputBase = class extends utilsMixin(fileUploadMixin(SerializableElement)) {
  static get is() {
    return 'image-input';
  }

  static get properties() {
    return {
      icon: String,
      title: String,
      value: String,
      fileName: String,
      maxlength: Number,
      pattern: String,
      required: Boolean,
      columnSize: {
        type: Array
      }
    };
  }

  getName() {
    return this.e.formName;
  }

  getValue() {
    return this.value;
  }
  /**
     *
     *
     * @return {Validation|*}
     */


  validate() {
    // if required but there is a default value, it is not invalid
    if (this.required && !this.getValue() && !this.e.defaultValue) {
      return new this.Validation(false, 'this input is invalid');
    }

    return new this.Validation(true, 'this input is valid');
  }

  valid(validation) {}

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.required = this.e.required || pElement.min && pElement.min > 0;
    self.icon = pElement.icon; // TODO this icon is not used, should be given priority over the current default

    self.title = ImageInputBase.toTitleCase(pElement.name);
    self.params = loader.pl.params;
    self.maxlength = pElement.max;
  }

};