import{fileUploadMixin,utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const BulkUploadBase=class extends utilsMixin(fileUploadMixin(SerializableElement)){constructor(){super();this.uploads=[]}static get is(){return"bulk-upload"}static get properties(){return{icon:String,service:String,title:String,value:String,fileName:String,required:Boolean,columnSize:Array,uploads:Array}}getName(){return this.e.formName}getValue(){return this.value}validate(){this.saveUploads();if(this.required&&!this.getValue()&&!this.e.defaultValue){return new this.Validation(!1,"this input is invalid")}return new this.Validation(!0,"this input is valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}saveUploads(){this.value=this.uploads.map(function(upload){return`${upload.response}:${upload.name}`}).join("|")}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.icon=pElement.icon;self.title=BulkUploadBase.toTitleCase(pElement.name);self.service=pElement.service;self.params=loader.pl.params;self.maxlength=pElement.max}};var bulkUpload={BulkUploadBase:BulkUploadBase};const BulkUploadStyles=css`
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
	
	
	
}
 
 .inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: var(--app-default-color);
    display: inline-block;
    max-width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    padding: 0.625rem 1.25rem;
    
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: red;
}

.inputfile + label {
	cursor: pointer; /* "hand" cursor */
}

`;var bulkUploadCss={BulkUploadStyles:BulkUploadStyles};class BulkUpload extends BulkUploadBase{static get styles(){return[BulkUploadStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    
 <div class="column">
<div class="field">
 
     <div class="controls">  
         <input class="inputfile" 
                    id="input"
                    type="file" 
                    name=${this.e.name} 
                    placeholder="Upload  ${this.e.name}"
                    @change="${this.handleFile}" multiple>
        <label for="input">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
          <span>Choose files</span></label>
     
     <!--<button @click="${this.saveUploads}">Save Uploads</button>-->
     </div>
     <small class="validation-info" style="display:none;">Required</small>
    <ul class="uploads" style="margin-top: 10px">
        ${this.uploads.map(upload=>html`<li>                         
          <article class="media">
         <figure class="media-left">
            <p class="image is-64x64">
              <img id="" src="${upload.src}" style="background-color:lightgray;">
            </p>
         </figure>
          <div class="media-content">         
            <span class="file-name">
            ${upload.name}
          </span>
         
         </div>
         </article>            
    </li>`)}
    
    
    </ul>
  
 
 
</div>
</div>`}constructor(){super()}getValue(){return this.value}valid(){this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}invalid(validation){this.shadowRoot.querySelector(".validation-info").style.display="flex";if(validation){this.shadowRoot.querySelector(".validation-info").textContent=validation}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(this.e.defaultValue){this.qs("#display").src="/media/"+this.e.defaultValue}}handleFile(){var self=this;const fileInput=this.qs("#input"),label=input.nextElementSibling,labelVal=label.innerHTML;if(fileInput.files&&fileInput.files.length){for(let i=0;i<fileInput.files.length;i++){const file=fileInput.files[i];self.uploadTempFile(file,"image",/image.*/).then(upload=>{self.uploads=[...self.uploads,{name:upload.name,response:upload.response,src:upload.result}]}).catch(reason=>{console.warn("[INCOMPLETE DEV] Better error handling.",reason)})}}else{label.innerHTML=labelVal}}}customElements.define(BulkUpload.is,BulkUpload);export{bulkUpload as $bulkUpload,bulkUploadCss as $bulkUploadCss,BulkUploadBase,BulkUploadStyles};