import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { DASHBOARD_STYLES } from "../../styles/dashboard-styles.js";
import { FileInputBase } from "../../../../elements/base/file-input.js";

class FileInput extends FileInputBase {
  renderDefault() {
    return html`
 ${SharedStyles}       
${DASHBOARD_STYLES} 
 <div class="column " >
<div class="field">
    <div class="control field-input-wrapper">
        <div class='field-input'>
        <input 
            id="input" 
            type="file" 
            name=${this.e.name}             
            required=${this.required} 
            @change="${this.handleFile}"
            minlength=${this.e.min}  
            maxlength=${this.e.max} >
            <span class='button btn-align info-btn raised'><iron-icon icon="icons:file-upload"></iron-icon>Choose File</span>
            <span class='label' id="display" data-js-label>No file selected</span>
        </div>
    </div>   
</div>
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

  init(pElement, loader) {
    super.init(pElement, loader);
    this.columnSize = loader.pl.getElementColumnSize();
  }

}

window.customElements.define(FileInput.is, FileInput);