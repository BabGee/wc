import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../node_modules/fa-icons/index.js";
import { FileInputBase } from "../../../../elements/base/file-input.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class FileInput extends FileInputBase {
  renderDefault() {
    return html`
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <style>
      .drop-area{
        width: 100%;
      }
      .drop-area form.upload-form, .file-preview{
        width: 100%;
      }
      .ii-file-input {
        display: inline-block;
        text-align: left;
        background: #fff;
        padding: 16px;
        width: 100%;
        position: relative;
        border-radius: 3px;
      }

      .ii-file-input > [type='file'] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 10;
        cursor: pointer;
      }

      .ii-file-input > .button {
        display: inline-block;
        cursor: pointer;
        background: #eee;
        padding: 8px 16px;
        border-radius: 2px;
        margin-right: 8px;
      }
      .ii-file-input:hover > .button {
        background: dodgerblue;
        color: white;
      }
      .ii-file-input .label {
        
        white-space: nowrap;
        opacity: .9;
        position: relative;
        margin-left: 20px;
        top: 6px;
        font-family: 'Work Sans', sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: #4A4A4A
      }
      .ii-file-input.-chosen .label {
        opacity: 1;
      }
      .file-btn{
        font-size: 14px;
        font-weight: 600;
        color: #fff!important;
        background-color: var(--app-default-color)!important;
        padding: 20px 30px;
      }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="mainwrapper drop-area">
      <form id="file-form" class="upload-form">
        <div class='ii-file-input'>
          <!-- <div class="file-preview">
            <img />
          </div> -->
          <span id="display" ></span>
          <span id="errorDisplay" ></span>
          <input type='file'
            name=${this.e.name} 
            @change="${this.handleFile}"
            id="input" 
            >
          <div class="is-flex" style="background-color: #fff;border-radius: 6px;  border: 1px solid #e5e5e5;">
            <span class='file-btn file-cta'>Choose ${this.e.name} file</span>
            <span class='label' data-js-label>Choose file here</label>
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
  }
  /**
   * Cancel Last Upload
   * @param evt
   */


  cancelUpload(evt) {
    this.resetUpload();
    this.updateUploadMessage('');
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