import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { DASHBOARD_STYLES } from "../../styles/dashboard-styles.js";
import { FileInputBase } from "../../../../elements/base/file-input.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

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
  /**
   * from FileInputBase
   * @override
   */


  updateUploadMessage(message) {
    const display = this.shadowRoot.querySelector('#display');
    display.textContent = message;
  }
  /**
   * File Selection Change handler
   * @param evt
   */


  handleFile(evt) {
    const fileInput = this.shadowRoot.querySelector('#input');
    this.uploadFile(fileInput);
  }

}

window.customElements.define(FileInput.is, FileInput);