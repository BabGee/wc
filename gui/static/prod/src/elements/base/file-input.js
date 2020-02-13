import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { fileUploadMixin } from "../../core/mixins/fileupload-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
import { Logger } from "../../core/logger.js";
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
      value: String
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
  /**
   * Override to display a message to user
   * @param message
   */


  updateUploadMessage(message) {
    Logger.i.incompleteDev('file upload not displayed to user ');
  }
  /**
   * Uploads the first file from a fileInput
   * @param fileInput input type file node
   */


  uploadFile(fileInput) {
    var file = fileInput.files[0];
    const self = this;

    if (!file) {
      // no file selected
      return;
    }

    if (self._validFileExtensions && self._hasExtension(file.name, self._validFileExtensions)) {
      this.uploadTempFile(file, 'image', null).then(upload => {
        this.value = upload['response']; // Bind Image Path

        this.updateUploadMessage('File successfully uploaded. Please Proceed!');
      }).catch(reason => {
        // TODO add better error handling
        Logger.i.incompleteDev('Better error handling.', reason);
      });
    } else {
      this.updateUploadMessage('File type' + file.type + ' not supported!');
    }
  }
  /**
   * Reset Last Upload
   */


  resetUpload() {
    this.value = '';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.required = this.e.required || pElement.min && pElement.min > 0; // TODO this is deprecated

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