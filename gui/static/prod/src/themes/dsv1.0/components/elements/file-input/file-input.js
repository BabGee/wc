import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../../node_modules/fa-icons/index.js";
import { FileInputBase } from "../../../../../elements/base/file-input.js";
import { FileInputStyles } from "./file-input-css.js";
import { InputDefaultStyles } from "../../../styles/input-shared-default.js";
import { FileUploadStyles } from "../../../styles/file-upload.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class FileInput extends FileInputBase {
  static get styles() {
    return [InputDefaultStyles, FileInputStyles, FileUploadStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
    <!-- <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="mainwrapper drop-area">
      <form id="file-form" class="upload-form">
        <div class='ii-file-input'>
          <input type='file'
            @change="${this.handleFile}"
            multiple accept='text/*|pdf/*|word/*/|excel/*|powerpoint/*|zip/*'
            >
          <div class="is-flex" style="background-color: #fff;border-radius: 6px;  border: 1px solid #ccc;">
            <span class='file-btn file-cta'>Choose file</span>
            <span class='label' id="display" data-js-label>Choose file here</label>
          </div>
        </div>
      </form>
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
   * from SerializableElement
   * @override
   */


  valid(validation) {
    const errorDisplay = this.shadowRoot.querySelector('#errorDisplay');
    errorDisplay.style.display = 'none';
  }
  /**
   * from SerializableElement
   * @override
   */


  invalid(validation) {
    const errorDisplay = this.shadowRoot.querySelector('#errorDisplay');
    errorDisplay.style.display = 'block';
    errorDisplay.textContent = validation;
  }
  /**
   * from FileInputBase
   * @override
   */


  updateUploadMessage(message) {
    const display = this.shadowRoot.querySelector('#display');
    display.textContent = message;
  } // getFileExtension(filename){
  //   return filename.split('.').pop();
  // }
  // /**
  //  * Cancel Last Upload
  //  * @param evt
  //  */
  // cancelUpload(evt) {
  //   this.resetUpload();
  //   this.updateUploadMessage('');
  // }

  /**
   * File Selection Change handler
   * @param evt
   */


  handleFile(evt) {
    const fileInput = this.shadowRoot.querySelector('[type="file"]');
    this.uploadFile(fileInput); // const label = this.shadowRoot.querySelector('[data-js-label]');
    // let preview = this.shadowRoot.querySelector('.file-preview img');
    // let reader = new FileReader();
    // reader.onload = function(){
    //   preview.src = reader.result;
    // };
    // reader.readAsDataURL(evt.target.files[0]);
    // fileInput.onmouseout = function () {
    //   if (!fileInput.value) return
    //   let value = fileInput.value.replace(/^.*[\\\/]/, '')
    //   // console.log(this.getFileExtension(value))
    //   // el.className += ' -chosen'
    //   label.innerText = value
    // }
    // this.uploadFile(fileInput);
  }

}

window.customElements.define(FileInput.is, FileInput);