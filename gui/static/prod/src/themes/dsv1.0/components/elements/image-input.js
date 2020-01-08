import{html,ImageInputBase}from"../../../../components/adaptive-ui.js";class ImageInput extends ImageInputBase{renderDefault(){return html`
    <style>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
      .drop-area{
        width: 100%;
      }
      .file-preview{
        width: 10%;
        background: #e5e5e5;
      }
      .drop-area form.upload-form{
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
      <form id="file-form" class="upload-form is-flex">
          <div class="file-preview">
            <img id="display" src="" />
          </div>
        <div class='ii-file-input'>
          <input type='file'
            @change="${this.handleFile}"
            multiple accept='image/*|audio/*|video/*'
            >
          <div class="is-flex"style="background-color: #fff;border-radius: 6px;  border: 1px solid #e5e5e5;">
            <span class='file-btn file-cta'>Upload  ${this.e.name} </span>
            <span id="label" class='label' data-js-label> ${this.fileName}</label>
          </div>
        </div>
      </form>
    </div>
        `}constructor(){super()}getValue(){return this.value}firstUpdated(){}updatePreview(src){var display=this.qs("#display");display.src=src}updateUploadMessage(message){const display=this.shadowRoot.querySelector("#label");display.textContent=message}handleFile(){const fileInput=this.shadowRoot.querySelector("[type=\"file\"]");this.uploadImage(fileInput)}valid(){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="none"}invalid(validation){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="block";errorDisplay.textContent=validation}cancelUpload(){this.resetUpload();this.updateUploadMessage("")}}customElements.define(ImageInput.is,ImageInput);