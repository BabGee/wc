import{fileUploadMixin,utilsMixin,SerializableElement,Logger,css,html,InputDefaultStyles,FileUploadStyles}from"../../../../../components/adaptive-ui.js";const ImageInputBase=class extends utilsMixin(fileUploadMixin(SerializableElement)){static get is(){return"image-input"}static get properties(){return{icon:String,title:String,value:String,fileName:String,pattern:String,required:Boolean}}getName(){return this.e.formName}getValue(){return this.value}validate(){if(this.required&&!this.getValue()&&!this.e.defaultValue){return new this.Validation(!1,"this input is invalid")}return new this.Validation(!0,"this input is valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(this.e.defaultValue){this.updatePreview("/media/"+this.e.defaultValue)}}updateUploadMessage(){Logger.i.incompleteDev("image upload progress not displayed to user ")}updatePreview(){Logger.i.incompleteDev("image uploaded not previewed to user ")}uploadImage(fileInput){const self=this;var file=fileInput.files[0],imageType=/image.*/;if(!file){return}self.uploadTempFile(file,"image",imageType).then(upload=>{this.updateUploadMessage("Image successfully uploaded. Please Proceed!");self.value=upload.response;self.fileName=upload.name;this.updatePreview(upload.result)}).catch(reason=>{Logger.i.incompleteDev("Better error handling.",reason)})}resetUpload(){this.value="";this.fileName=""}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.icon=pElement.icon;self.title=ImageInputBase.toTitleCase(pElement.name);self.params=loader.pl.paramsCopy()}};var imageInput={ImageInputBase:ImageInputBase};const ImageInputStyles=css`

`;var imageInputCss={ImageInputStyles:ImageInputStyles};class ImageInput extends ImageInputBase{static get styles(){return[InputDefaultStyles,ImageInputStyles,FileUploadStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
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
          <div class="is-flex"style="background-color: #fff;border-radius: 6px;  border: 1px solid #ccc;">
            <span class='file-btn file-cta'>Upload  ${this.e.name} </span>
            <span id="label" class='label' data-js-label> ${this.fileName}</label>
          </div>
        </div>
      </form>
    </div>
        `}constructor(){super()}getValue(){return this.value}firstUpdated(){}updatePreview(src){var display=this.qs("#display");display.src=src}updateUploadMessage(message){const display=this.shadowRoot.querySelector("#label");display.textContent=message}handleFile(){const fileInput=this.shadowRoot.querySelector("[type=\"file\"]");this.uploadImage(fileInput)}valid(){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="none"}invalid(validation){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="block";errorDisplay.textContent=validation}cancelUpload(){this.resetUpload();this.updateUploadMessage("")}}customElements.define(ImageInput.is,ImageInput);export{imageInput as $imageInput,imageInputCss as $imageInputCss,ImageInputBase,ImageInputStyles};