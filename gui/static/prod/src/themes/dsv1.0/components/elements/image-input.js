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
            <img />
          </div>
        <div class='ii-file-input'>
          <input type='file'
            @change="${this.handleFile}"
            multiple accept='image/*|audio/*|video/*'
            >
          <div class="is-flex"style="background-color: #fff;border-radius: 6px;  border: 1px solid #e5e5e5;">
            <span class='file-btn file-cta'>Choose file</span>
            <span class='label' data-js-label>Choose file here</label>
          </div>
        </div>
      </form>
    </div>
        `}constructor(){super()}getValue(){return this.value}firstUpdated(){let preview=this.shadowRoot.querySelector(".file-preview img"),previewFile=this.shadowRoot.querySelector(".file-preview");if(preview.src){previewFile.innerContent="No Preview"}}// /**
//  * from SerializableElement
//  * @override
//  */
// valid(validation) {
//   const validationDisplay = this.shadowRoot.querySelector('#validation');
//   validationDisplay.style.display='none';
//   validationDisplay.textContent= 'Required';
// }
// /**
//  * from SerializableElement
//  * @override
//  */
// invalid(validation) {
//   const validationDisplay = this.shadowRoot.querySelector('#validation');
//   validationDisplay.style.display='flex';
//   if (validation) {
//     validationDisplay.textContent= validation;
//   }
// }
// /**
//  * from ImageInputBase
//  * @override
//  */
// updatePreview(src) {
//   var display = this.qs('#preview');
//   display.src = src;
// }
// /**
//  * Override to display a message to user
//  * @param message
//  */
// updateUploadMessage(message) {
//   const display = this.shadowRoot.querySelector('#display');
//   display.textContent = message;
// }
// /**
//  * Cancel Last Upload
//  * @param evt
//  */
// cancelUpload(evt) {
//   this.resetUpload();
//   this.updateUploadMessage('');
// }
// handleFile() {
//   const fileInput = this.qs('#file-upload');
//   this.uploadImage(fileInput);
// }
/**
   * from SerializableElement
   * @override
   */valid(validation){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="none"}/**
     * from SerializableElement
     * @override
     */invalid(validation){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="block";errorDisplay.textContent=validation}/**
     * from FileInputBase
     * @override
     */updateUploadMessage(message){const display=this.shadowRoot.querySelector("#display");// display.textContent = message;
}getFileExtension(filename){return filename.split(".").pop()}/**
     * Cancel Last Upload
     * @param evt
     */cancelUpload(evt){this.resetUpload();this.updateUploadMessage("")}uploadFile(fileInput){var file=fileInput.files[0];const self=this;if(!file){// no file selected
return}if(self._validFileExtensions&&self._hasExtension(file.name,self._validFileExtensions)){this.uploadTempFile(file,"image",null).then(upload=>{this.value=upload.response;// Bind Image Path
this.updateUploadMessage("File successfully uploaded. Please Proceed!")}).catch(reason=>{// TODO add better error handling
Logger.i.incompleteDev("Better error handling.",reason)})}else{this.updateUploadMessage("File type"+file.type+" not supported!")}}/**
     * File Selection Change handler
     * @param evt
     */handleFile(evt){const fileInput=this.shadowRoot.querySelector("[type=\"file\"]"),label=this.shadowRoot.querySelector("[data-js-label]");let preview=this.shadowRoot.querySelector(".file-preview img"),reader=new FileReader;// console.log(preview.src);
reader.onload=function(){preview.src=reader.result};reader.readAsDataURL(evt.target.files[0]);fileInput.onmouseout=function(){if(!fileInput.value)return;let value=fileInput.value.replace(/^.*[\\\/]/,"");// console.log(this.getFileExtension(value))
// el.className += ' -chosen'
label.innerText=value};this.uploadFile(fileInput)}}customElements.define(ImageInput.is,ImageInput);