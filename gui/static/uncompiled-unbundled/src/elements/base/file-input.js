import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { fileUploadMixin } from "../../core/mixins/fileupload-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
export const FileInputBase = class extends utilsMixin(fileUploadMixin(SerializableElement)) {
  constructor() {
    super();
    this._validFileExtensions = [];
  }

  static get is() {
    return 'file-input';
  }

  static get properties() {
    return {
      _validFileExtensions: Array,
      extensions: String,
      title: String,
      required: Boolean,
      value: String,
      columnSize: Array
    };
  }

  getValue() {
    return this.value;
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    if (this.required && !this.getValue()) {
      return new this.Validation(false, 'invalid');
    }

    return new this.Validation(true, 'valid');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  _hasExtension(fileName, exts) {
    return new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$').test(fileName);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.required = this.e.required || pElement.min && pElement.min > 0;
    self.icon = pElement.icon;
    self.title = FileInputBase.toTitleCase(pElement.name);
    this.value = '';
    self.extensions = pElement.kind;

    if (self.extensions) {
      this._validFileExtensions = this.extensions.split('|').map(function (li) {
        return '.' + li;
      });
    }
  }

};