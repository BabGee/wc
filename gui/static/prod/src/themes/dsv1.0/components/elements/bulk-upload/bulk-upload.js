import{fileUploadMixin,utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const BulkUploadBase=class extends utilsMixin(fileUploadMixin(SerializableElement)){constructor(){super();this.uploads=[]}static get is(){return"bulk-upload"}static get properties(){return{icon:String,service:String,title:String,value:String,fileName:String,required:Boolean,columnSize:Array,uploads:Array}}getName(){return this.e.formName}getValue(){return this.value}validate(){this.saveUploads();if(this.required&&!this.getValue()&&!this.e.defaultValue){return new this.Validation(!1,"this input is invalid")}return new this.Validation(!0,"this input is valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}saveUploads(){this.value=this.uploads.map(function(upload){return`${upload.response}:${upload.name}`}).join("|")}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.icon=pElement.icon;self.title=BulkUploadBase.toTitleCase(pElement.name);self.service=pElement.service;self.params=loader.pl.params;self.maxlength=pElement.max}};var bulkUpload={BulkUploadBase:BulkUploadBase};const BulkUploadStyles=css`
    .column {
        padding:16px;
    }
    .files-drop-zone {
        display:flex;
        height:300px;
        border:2px dashed black;
        border-radius:10px;
        align-items:center;
        padding:10px;
        justify-content:center
    }
    .files-drop-zone:hover {
        border:2px solid black;
    }
    .instructions-container {
        display:flex;
        flex-direction:column;
        width:fit-content;
        align-items:center;
        flex:1;
        padding:5px;
        height:fit-content;
    } 
    .icon-container {
        width:100px;
        height:100px;
        border-radius:50%;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color:#f5f5f5;
    }
    .instruction-text {
        text-align:center;
    }
    .browse-text {
        color:var(--app-secondary-color);
    }
    .browse-text:hover {
        cursor:pointer;
    }
    .uploads-list {
        display:none;
        flex:1;
        flex-direction:column;
        height:100%;
        overflow-y:auto;
        padding:0;
        max-height:300px;
        overflow-x:hidden;
    }
    .show-list {
        display:flex;
    }
    #file-input {
        display:none;
    }
    
    .upload-item {
        display:flex;
        flex-direction:column;
        padding:25px 10px 10px 10px;
        margin: 6px;
        border:1px solid black;
        border-radius:3px;
        position:relative;
    }
    .upload-image {
        display:none
        height:140px;
        max-width:100%;
        object-fit:contain;
    }
    .upload-name {
        margin:5px
    }
    .remove-upload {
        position:absolute;
        top:0;
        right:0;
        margin:4px;
        width:20px !important;
        height: 20px !important;
    }
    .remove-upload:hover {
        cursor:pointer;
        border-radius:50%;
        background-color:#f5f6e9;
    }  
`;var bulkUploadCss={BulkUploadStyles:BulkUploadStyles};class BulkUpload extends BulkUploadBase{static get styles(){return[BulkUploadStyles,css`
        :host {
          display: block;
        }
      `]}static get properties(){return{files:Array}}filesDropHandler(evt){evt.preventDefault();if(evt.dataTransfer.items){for(let i=0;i<evt.dataTransfer.items.length;i++){if("file"===evt.dataTransfer.items[i].kind){const file=evt.dataTransfer.items[i].getAsFile();this.uploadFile(file);this.files.push({name:file.name,type:file.type})}}}}fileInputChangeHandler(){const fileInput=this.shadowRoot.querySelector("#file-input");if(fileInput.files&&fileInput.files.length){for(let i=0;i<fileInput.files.length;i++){const file=fileInput.files[i];this.uploadFile(file);this.files.push({name:file.name,type:file.type})}}}removeUploadClickHandler(i){const tempUploads=this.uploads.concat();this.uploads=tempUploads.filter((upload,index)=>index!==i);this.uploadsListVisibility()}getUploadFileType(upload){const foundFile=this.files.find(file=>file.name===upload.name);return foundFile.type}uploadsList(id){return html`
      <ul id="${id}" class="uploads-list">
        <li style="position:sticky; top:0; background-color:white; z-index:1;"><h4>Selected Files</h4></li>
        ${this.uploads.map((upload,index)=>html`
            <li class="upload-item" key="${index}">
              ${this.getUploadFileType(upload).match(/image/)?html`
                  <img class="upload-image" src="${upload.src}"/>
                `:html``}
              <h4 class="upload-name">${upload.name}</h4>
              <iron-icon class="iron-icon remove-upload"  icon="close" @click=${()=>this.removeUploadClickHandler(index)}></iron-icon>
            </li>
          `)}
      </ul>
    `}uploadsListVisibility(){const smallList=this.shadowRoot.querySelector("#small-list"),largeList=this.shadowRoot.querySelector("#large-list"),filesDropZoneWidth=this.shadowRoot.querySelector(".files-drop-zone").offsetWidth;if(0<this.uploads.length){if(520>filesDropZoneWidth){smallList.classList.add("show-list")}else{largeList.classList.add("show-list")}}else{largeList.classList.remove("show-list");smallList.classList.remove("show-list")}}render(){return html`
      <div class="column">
        <h3>${this.e.name}</h3>
        <h4>${this.e.details.description}</h4>
        <div class="files-drop-zone" @drop=${this.filesDropHandler} @dragover=${evt=>evt.preventDefault()}>
          ${this.uploadsList("large-list")}
          <div class="instructions-container">
            <div class="icon-container">
              <svg style="width:50px !important;height: 50px !important;" viewBox="0 -24 512.00046 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m413.492188 128.910156c-17.292969-86.765625-101.648438-143.082031-188.414063-125.789062-63.460937 12.648437-113.082031 62.238281-125.769531 125.691406-61.519532 7.089844-105.648438 62.707031-98.5625 124.230469 6.523437 56.621093 54.480468 99.339843 111.476562 99.300781h80.09375c8.847656 0 16.019532-7.171875 16.019532-16.019531 0-8.847657-7.171876-16.019531-16.019532-16.019531h-80.09375c-44.238281-.261719-79.882812-36.332032-79.625-80.566407.261719-44.234375 36.332032-79.882812 80.570313-79.625 8.164062.003907 15.023437-6.140625 15.921875-14.253906 8.132812-70.308594 71.722656-120.710937 142.03125-112.578125 59.109375 6.839844 105.738281 53.464844 112.574218 112.578125 1.34375 8.257813 8.5 14.308594 16.867188 14.253906 44.238281 0 80.097656 35.859375 80.097656 80.097657 0 44.234374-35.859375 80.09375-80.097656 80.09375h-80.09375c-8.847656 0-16.019531 7.171874-16.019531 16.019531 0 8.847656 7.171875 16.019531 16.019531 16.019531h80.097656c61.925782-.386719 111.816406-50.898438 111.433594-112.828125-.351562-56.394531-42.53125-103.753906-98.507812-110.605469zm0 0"/><path d="m313.019531 287.464844c6.148438 6.367187 16.289063 6.542968 22.652344.394531 6.363281-6.144531 6.539063-16.285156.394531-22.648437-.128906-.136719-.261718-.265626-.394531-.394532l-67.9375-67.953125c-6.246094-6.265625-16.390625-6.277343-22.65625-.03125-.007813.011719-.019531.019531-.027344.03125l-67.9375 67.953125c-6.363281 6.144532-6.539062 16.285156-.394531 22.648438 6.148438 6.363281 16.289062 6.539062 22.652344.394531.132812-.128906.265625-.261719.394531-.394531l40.609375-40.625v201.617187c0 8.847657 7.171875 16.019531 16.019531 16.019531 8.84375 0 16.015625-7.171874 16.015625-16.019531v-201.617187zm0 0"/></svg>
            </div>
            <h4 class="instruction-text">Drag and Drop or 
              <span>
                <input type="file" id="file-input" @change=${this.fileInputChangeHandler} multiple>
                <label for="file-input" class="browse-text" >Browse </label>
              <span>
            your files.</h4>
          </div>
        </div>
        <small class="validation-info" style="display:none;">Required</small>
        ${this.uploadsList("small-list")}  
      </div>
    `}constructor(){super();this.files=[]}getValue(){return this.value}valid(){this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}invalid(validation){this.shadowRoot.querySelector(".validation-info").style.display="flex";if(validation){this.shadowRoot.querySelector(".validation-info").textContent=validation}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}uploadFile(file){this.uploadTempFile(file,"image",/image.*/).then(upload=>{this.uploads=[...this.uploads,{name:upload.name,response:upload.response,src:upload.result}]}).catch(reason=>{console.warn("[INCOMPLETE DEV] Better error handling.",reason)});this.uploadsListVisibility()}}customElements.define(BulkUpload.is,BulkUpload);export{bulkUpload as $bulkUpload,bulkUploadCss as $bulkUploadCss,BulkUploadBase,BulkUploadStyles};