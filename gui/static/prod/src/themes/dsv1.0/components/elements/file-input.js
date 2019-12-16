import{html,FileInputBase}from"../../../../components/adaptive-ui.js";class FileInput extends FileInputBase{renderDefault(){return html`
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
          <input type='file'
            @change="${this.handleFile}"
            multiple accept='text/*|pdf/*|word/*/|excel/*|powerpoint/*|zip/*'
            >
          <div class="is-flex" style="background-color: #fff;border-radius: 6px;  border: 1px solid #e5e5e5;">
            <span class='file-btn file-cta'>Choose file</span>
            <span class='label' data-js-label>Choose file here</label>
          </div>
        </div>
      </form>
    </div>
        `}constructor(){super()}getValue(){return this.value}valid(){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="none"}invalid(validation){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="block";errorDisplay.textContent=validation}updateUploadMessage(message){const display=this.shadowRoot.querySelector("#display");display.textContent=message}getFileExtension(filename){return filename.split(".").pop()}cancelUpload(){this.resetUpload();this.updateUploadMessage("")}handleFile(evt){const fileInput=this.shadowRoot.querySelector("[type=\"file\"]"),label=this.shadowRoot.querySelector("[data-js-label]");let preview=this.shadowRoot.querySelector(".file-preview img"),reader=new FileReader;reader.onload=function(){preview.src=reader.result};reader.readAsDataURL(evt.target.files[0]);fileInput.onmouseout=function(){if(!fileInput.value)return;let value=fileInput.value.replace(/^.*[\\\/]/,"");label.innerText=value};this.uploadFile(fileInput)}}window.customElements.define(FileInput.is,FileInput);