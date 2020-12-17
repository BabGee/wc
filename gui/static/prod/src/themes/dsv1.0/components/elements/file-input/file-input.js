import{utilsMixin,fileUploadMixin,SerializableElement,Logger,css,html,InputDefaultStyles,FileUploadStyles}from"../../../../../components/adaptive-ui.js";const FileInputBase=class extends utilsMixin(fileUploadMixin(SerializableElement)){constructor(){super();this._validFileExtensions=[];this.uploading=!1;this.validationError=!1}static get is(){return"file-input"}static get properties(){return{_validFileExtensions:Array,extensions:String,title:String,required:Boolean,value:String,uploading:Boolean,validationError:Boolean}}getValue(){return this.value}getName(){return this.e.formName}getFileSizeLimit(){const fileSizeLimit=this.e.details.file_size_limit;if(fileSizeLimit!=void 0){console.log("getFileSizeLimit - ",this.e.details.file_size_limit," bytes")}else{console.log("getFileSizeLimit set to DEFAULT 12MB")}return fileSizeLimit}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,"invalid file try again")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_hasExtension(fileName,exts){return new RegExp("("+exts.join("|").replace(/\./g,"\\.")+")$").test(fileName)}updateUploadMessage(){Logger.i.incompleteDev("file upload not displayed to user ")}uploadFile(fileInput){var file=fileInput.files[0];const self=this;if(!file){return}if(self._validFileExtensions&&self._hasExtension(file.name,self._validFileExtensions)){this.uploadTempFile(file,"image",null,this.getFileSizeLimit()).then(upload=>{this.value=upload.response;this.updateUploadMessage("File successfully uploaded. Please Proceed!");this.uploading=!1}).catch(reason=>{Logger.i.incompleteDev("Better error handling.",reason);this.uploading=!1})}else{this.uploading=!1;this.updateUploadMessage(file.type+" not supported! Please upload a "+self.extensions+" file")}}resetUpload(){this.uploading=!1;this.value=""}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required;self.icon=pElement.icon;self.title=FileInputBase.toTitleCase(pElement.name);this.value="";self.extensions=pElement.kind;if(self.extensions){this._validFileExtensions=this.extensions.split("|").map(function(li){return"."+li})}}};var fileInput={FileInputBase:FileInputBase};const FileInputStyles=css`
.file-input-label{
    font-size: 12px;
    font-weight: 700;
    padding-bottom:8px;
    color: rgb(1, 50, 67);
}
.pro-container{
    margin:16px;
    margin-top:4px;
  }

  #warning{
    display: none;
    position: relative;
    margin-top:4px;
    color:#ff3860;

}
#divinput{
    background-color: #fff;
    border-radius: 6px;  
    border: 1px solid #ccc;
}
.danger {
    color:#ff3860!important;
}
.success {
    color: #23d160!important;
}



`;var fileInputCss={FileInputStyles:FileInputStyles};class FileInput extends FileInputBase{static get styles(){return[InputDefaultStyles,FileInputStyles,FileUploadStyles,css`
        :host {
          display: block;
        }
      `]}static get properties(){return{validErrorValue:String}}renderDefault(){return html`
    <!-- <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="mainwrapper drop-area">
      <form id="file-form" class="upload-form">
        
        <div class='ii-file-input'>
          <div class="file-input-label">
            <p>${this.e.name}</p>
          </div>
          <input type='file'
            @change="${this.handleFile}"
            multiple accept='text/*|pdf/*|word/*/|excel/*|powerpoint/*|zip/*'
            >
          <div class="is-flex" style="${this.checkValidation()}">
            <span class='file-btn file-cta'>Choose file</span>
            <span class='label' id="display" data-js-label>Choose ${this.extensions?html`${this.extensions} file here`:html` file here`}</label>
          </div>
          <p id="warning" style="color:#ff3860;"></p>

        </div>
        ${this.uploading?html`
            <div class="pro-container"><div>Uploading file...</div><progress class="progress is-small is-primary" max="100">15%</progress></div>

        `:html``}

      </form>
    </div>
        `}constructor(){super();this.uploading=!1;this.validationError=!1}getValue(){return this.value}checkValidation(){if(this.validationError){if("invalid"===this.validErrorValue){return`background-color: #fff;border-radius: 6px;   border: 2px solid #ff3860; color:#ff3860;`}}else{if("valid"===this.validErrorValue){return`background-color: #fff;border-radius: 6px; border: 2px solid #23d160;`}else{return`background-color: #fff;border-radius: 6px;  border: 1px solid #ccc;`}}}valid(){const self=this,errorDisplay=this.shadowRoot.querySelector("#warning"),display=this.shadowRoot.querySelector("#display");display.classList.remove("danger");display.classList.add("success");errorDisplay.style.display="none";this.validationError=!1;this.validErrorValue="valid";setTimeout(function(){self.resetStyles()},3e3)}resetStyles(){const display=this.shadowRoot.querySelector("#display");display.classList.remove("success");this.validationError=!1;this.validErrorValue=void 0}invalid(validation){const errorDisplay=this.shadowRoot.querySelector("#warning"),display=this.shadowRoot.querySelector("#display");errorDisplay.style.display="block";errorDisplay.textContent=validation;display.classList.add("danger");this.validationError=!0;this.validErrorValue="invalid"}updateUploadMessage(message){const warning=this.shadowRoot.querySelector("#warning");warning.style.display="block";warning.textContent=message}handleFile(){this.uploading=!0;const fileInput=this.shadowRoot.querySelector("[type=\"file\"]"),warning=this.shadowRoot.querySelector("#warning");warning.style.display="none";this.uploadFile(fileInput)}}window.customElements.define(FileInput.is,FileInput);export{fileInput as $fileInput,fileInputCss as $fileInputCss,FileInputBase,FileInputStyles};