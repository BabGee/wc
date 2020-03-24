import{utilsMixin,fileUploadMixin,SerializableElement,Logger,css,html,InputDefaultStyles,FileUploadStyles}from"../../../../../components/adaptive-ui.js";const FileInputBase=class extends utilsMixin(fileUploadMixin(SerializableElement)){constructor(){super();this._validFileExtensions=[]}static get is(){return"file-input"}static get properties(){return{_validFileExtensions:Array,extensions:String,title:String,required:Boolean,value:String}}getValue(){return this.value}getName(){return this.e.formName}getFileSizeLimit(){const fileSizeLimit=this.e.details.file_size_limit;if(fileSizeLimit!=void 0){console.log("getFileSizeLimit - ",this.e.details.file_size_limit," bytes")}else{console.log("getFileSizeLimit set to DEFAULT 12MB")}return fileSizeLimit}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_hasExtension(fileName,exts){return new RegExp("("+exts.join("|").replace(/\./g,"\\.")+")$").test(fileName)}updateUploadMessage(){Logger.i.incompleteDev("file upload not displayed to user ")}uploadFile(fileInput){var file=fileInput.files[0];const self=this;if(!file){return}if(self._validFileExtensions&&self._hasExtension(file.name,self._validFileExtensions)){this.uploadTempFile(file,"image",null,this.getFileSizeLimit()).then(upload=>{this.value=upload.response;this.updateUploadMessage("File successfully uploaded. Please Proceed!")}).catch(reason=>{Logger.i.incompleteDev("Better error handling.",reason)})}else{this.updateUploadMessage("File type"+file.type+" not supported!")}}resetUpload(){this.value=""}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.icon=pElement.icon;self.title=FileInputBase.toTitleCase(pElement.name);this.value="";self.extensions=pElement.kind;if(self.extensions){this._validFileExtensions=this.extensions.split("|").map(function(li){return"."+li})}}};var fileInput={FileInputBase:FileInputBase};const FileInputStyles=css`

`;var fileInputCss={FileInputStyles:FileInputStyles};class FileInput extends FileInputBase{static get styles(){return[InputDefaultStyles,FileInputStyles,FileUploadStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
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
        `}constructor(){super()}getValue(){return this.value}valid(){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="none"}invalid(validation){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="block";errorDisplay.textContent=validation}updateUploadMessage(message){const display=this.shadowRoot.querySelector("#display");display.textContent=message}handleFile(){const fileInput=this.shadowRoot.querySelector("[type=\"file\"]");this.uploadFile(fileInput)}}window.customElements.define(FileInput.is,FileInput);export{fileInput as $fileInput,fileInputCss as $fileInputCss,FileInputBase,FileInputStyles};