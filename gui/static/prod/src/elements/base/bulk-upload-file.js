import { fileUploadMixin } from "../../core/mixins/fileupload-mixin.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
export const BulkUploadFileBase = class extends utilsMixin(fileUploadMixin(SerializableElement)) {
  constructor() {
    super();
    this.uploads = [];
  }

  static get is() {
    return 'bulk-upload-file';
  }

  static get properties() {
    return {
      icon: String,
      service: String,
      title: String,
      value: String,
      fileName: String,
      required: Boolean,
      columnSize: Array,
      uploads: Array
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
    this.saveUploads(); // if required but there is a default value, it is not invalid

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

  saveUploads() {
    this.value = this.uploads.map(function (upload) {
      // return {'response': upload['response'],'name': upload['name'] }
      return `${upload['response']}:${upload['name']}`;
    }).join('|');
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.required = this.e.required;
    self.icon = pElement.icon; // TODO this icon is not used, should be given priority over the current default

    self.title = BulkUploadFileBase.toTitleCase(pElement.name);
    self.service = pElement.service;
    self.params = loader.pl.params;
    self.maxlength = pElement.max;
  }

};