import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../node_modules/fa-icons/index.js";
import { FileInputBase } from "../../../../elements/base/file-input.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class FileInput extends FileInputBase {
  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

    <div class="file has-name is-info is-fullwidth">
      <label class="file-label">
        <input id="input" class="file-input" type="file" 
        name=${this.e.name} 
        required=${this.required} 
        @change="${this.handleFile}"
        minlength=${this.e.min}
        maxlength=${this.e.max}>
          <span class="file-cta">
            <span class="file-icon">
              <fa-icon class="fas fa-upload" color="#FFFFFF"></fa-icon>
          </span>
          <span class="file-label">
            Choose File…
          </span>
        </span>
        <span class="file-name" id="display">
        No file selected
        </span>
      </label>
</div>
        `;
  }

  constructor() {
    super();
  }

  getValue() {
    return this.value;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  handleFile() {
    console.log('handle');
    const self = this;
    /* TODO
        var progress = this.$.paper_progress;
        progress.value = 0;
        progress.style['display'] = 'block';
        */

    var display = this.shadowRoot.querySelector('#display');
    const fileInput = this.shadowRoot.querySelector('#input');
    var file = fileInput.files[0];

    if (!file) {
      // no file selected
      return;
    }

    if (self._validFileExtensions && self._hasExtension(file.name, self._validFileExtensions)) {
      self.uploadTempFile(file, 'image', null).then(upload => {
        self.value = upload['response']; // Bind Image Path

        display.textContent = 'File successfully uploaded. Please Proceed!';
      }).catch(reason => {
        // TODO add better error handling
        console.warn('[INCOMPLETE DEV] Better error handling.', reason);
      });
    } else {
      display.textContent = 'File type' + file.type + ' not supported!';
    }
  }

}

window.customElements.define(FileInput.is, FileInput);