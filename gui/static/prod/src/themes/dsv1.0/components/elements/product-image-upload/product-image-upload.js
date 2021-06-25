import{dataSourceMixin,fileUploadMixin,utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const ProductImageUploadBase=class extends utilsMixin(fileUploadMixin(dataSourceMixin(SerializableElement))){constructor(){super();this.uploads=[]}static get properties(){return{icon:String,title:String,selected:String,value:String,fileName:String,required:Boolean,columnSize:Array,uploads:Array}}getName(){return this.e.formName}getValue(){return this.value}validate(){this.saveUploads();if(!this.getValue()||this.getValue()===void 0){return new this.Validation(!1,"invalid")}const inputValueInt=this.getValue();if(inputValueInt.length<this.e.min||inputValueInt.length>this.e.max){if(this.e.min==this.e.max){return new this.Validation(!1,this.e.name+" value is invalid. Please add "+this.e.max+" images.")}else{return new this.Validation(!1,this.e.name+" value is invalid. Only "+this.e.min+" \u2014 "+this.e.max+" images accepted.")}}else{return new this.Validation(!0,"valid")}}valid(){const title=this.shadowRoot.querySelector(".title"),addBtn=this.shadowRoot.querySelector(".add-btn"),warningText=this.shadowRoot.querySelector("#warning-text");addBtn.classList.add("add-btn-success");title.classList.remove("title-danger");title.classList.add("title-success");warningText.style.display="none";setTimeout(()=>{title.classList.remove("title-success");addBtn.classList.remove("add-btn-success")},3e3)}invalid(validation){const title=this.shadowRoot.querySelector(".title"),warningText=this.shadowRoot.querySelector("#warning-text");title.classList.add("title-danger");warningText.innerText=validation.validationMessage;warningText.style.display="block"}_dataJoined(data){const self=this;var concatExclude=[];if(self.e.details.concat_exclude){concatExclude=self.e.details.concat_exclude.split(",")}return data.filter(function(item,index){return!(0===index||concatExclude.includes(index+"")||self.cols.length&&"href"===self.cols[index].type)}).join(" ")}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{self.q="";self.currentGroups=self.groups;self.currentData=self.data;self.checkAlreadyUploadedImages()})}uploadFile(file){this.uploadTempFile(file,"image",/image.*/).then(upload=>{this.uploads=[...this.uploads,{name:upload.name,response:upload.response,src:upload.result}]}).catch(reason=>{console.warn("[INCOMPLETE DEV] Better error handling.",reason)})}saveUploads(){this.value=this.uploads.map(function(upload){return`${upload.response}:${upload.name}`}).join("|")}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_computeItems(rows,q){const filteredItems=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filteredItems.push(item)}}else{filteredItems.push(item)}}return filteredItems}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=ProductImageUploadBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.params=self.pl.paramsCopy();if(pElement.kind){this.selected=+pElement.kind}else if(self.required&&0<self.rows.length){self.selected=self.rows[0][0]}self.loader=this.loadData()}};var productImageUpload={ProductImageUploadBase:ProductImageUploadBase};const ProductImageUploadStyles=css`
    .container {
        padding:17px;
    }
    #images-column {
        max-height:370px;
        overflow-y:auto;
        border: 1.3px solid rgb(183, 181, 181);
        border-radius: 6px;
    }
    .columns {
        flex:1;
        flex-wrap:wrap;
    }
    #columns-container{
        margin:0;
    }
    #button-column {
        flex:1;
        justify-content:center;
        align-items:center;
        width:fit-content;
    }
    #button-container {
        flex-direction:column;
        max-width:fit-content;
        align-items:center;
    }
    .button{
        width:fit-content;
    }
    .subtitle {
        width:fit-content;
    }
    .show-images-column{
        display:flex;
    }
    .image-item {
        position:relative;
        border: 1.3px solid rgb(183, 181, 181);
        border-radius: 6px;
        justify-content:center;
        height:fit-content;
        margin:17px 4px;
        padding:5px;
    }
    .upload-image {
        object-fit:contain;
        width:100%
    }
    .add-btn {
        position:relative;
        padding: 60px;
        background-color: var(--app-default-color);
    } 
    .add-icon {
        position:absolute;
        width:38px !important;
        height: 38px !important;
        top: 50%;
        transform: translateY(-50%);
        left:50%;
        margin-left:-19px;
        fill: white;
    }
    .remove-icon {
        position:absolute;
        width:34px !important;
        height: 34px !important;
        top: 0;
        left:0;
        margin:-17px 0 0 -17px;
        background-color: white;
        cursor:pointer;
        fill: var(--app-secondary-color);
    }
    .remove-icon:hover {
        fill: var(--app-default-color);
    }
    #file-input {
        display:none;
    }
    .list {
        flex-direction:column;
        box-shadow:none;
    }
    
    
    .large-image {
        height:317px;
    }
    .small-image {
        height:135px;
    }

    .title-danger{
        color: #ff2b56;
    }
    .title-success{
        color: #23d160 !important;
    }
    .add-btn-success {
        background-color: #23d160 !important;   
    }
    #warning-text{
        display:none;
    }
    @media screen and (max-width: 550px) {
        #images-column {
            min-width:100%
        }
        .large-image,
        .small-image {
            height:200px;
        }
        .image-item {
            margin:10px;
        }
    }
`;var productImageUploadCss={ProductImageUploadStyles:ProductImageUploadStyles};class ProductImageUpload extends ProductImageUploadBase{static get styles(){return[ProductImageUploadStyles,css`
                : host {
                    display:block;
                }
            `]}static get properties(){return{files:Array}}constructor(){super();this.files=[]}firstUpdated(){this.loader.then(()=>{this.getAlreadyUploadedImages();this.imagesVisibility()})}getAlreadyUploadedImages(){this.rows.forEach(row=>{this.files=[...this.files,{src:row[3],type:"already-uploaded"}]})}fileInputChangeHandler(){const fileInput=this.shadowRoot.querySelector("#file-input");if(fileInput.files&&fileInput.files.length){for(let i=0;i<fileInput.files.length;i++){const file=fileInput.files[i];this.uploadFile(file)}}this.uploads.forEach(upload=>{this.files=[...this.files,{src:upload.src,type:"newly-upload"}]});this.imagesVisibility()}removeUploadClickHandler(src,type){const tempFiles=this.files.concat();this.files=tempFiles.filter(file=>file.src!==src);if("newly-upload"===type){const tempUploads=this.uploads.concat();this.uploads=tempUploads.filter(upload=>upload.src!==src)}this.imagesVisibility()}uploadImageView(src,type,clss){return html`
            <li class="image-item is-flex">
                <iron-icon class="remove-icon"  icon="remove-circle" @click=${()=>this.removeUploadClickHandler(src,type)}></iron-icon>
                <img class="upload-image ${clss}" src="${src}"/>
            </li>
        `}imagesVisibility(){const imagesColumn=this.shadowRoot.querySelector("#images-column");if(0<this.files.length){imagesColumn.style.display="flex"}else{imagesColumn.style.display="none"}}largeImagesList(){return html`
            <li class="list is-flex">
                ${this.files.map((file,index)=>{return 0===index||0===index%3?this.uploadImageView(file.src,file.type,"large-image"):html``})}
            </li>
        `}smallImagesList(){return html`
            <li class="list is-flex">
                ${this.files.map((file,index)=>{return 0!==index&&0!==index%3?this.uploadImageView(file.src,file.type,"small-image"):html``})}
            </li>
        `}static get is(){return"product-image-upload"}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            <div class="container">
                <h3 class="title is-5">${this.e.name}</h3>
                <div id="columns-container" class="columns is-flex">
                    <div id="images-column" class="column card is-three-quarters">
                        <div class="columns">
                            <div class="column is-three-quarters">
                                ${this.largeImagesList()}
                            </div>
                            <div class="column">
                                ${this.smallImagesList()}
                            </div>
                        </div>
                    </div>
                    <div id="button-column" class="column is-flex">
                        <div id="button-container" class="column is-flex">
                            <label for="file-input" class="button add-btn">
                                <iron-icon icon="add" class="add-icon"></iron-icon>
                            </label>
                            <input id="file-input" type="file" accept="image/*" @change=${this.fileInputChangeHandler} multiple>
                            <h4 class="subtitle is-6">Add images</h4>
                        </div>
                    </div>
                </div>
                <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            </div>
        `}}customElements.define(ProductImageUpload.is,ProductImageUpload);var productImageUpload$1={ProductImageUpload:ProductImageUpload};export{productImageUpload as $productImageUpload,productImageUploadCss as $productImageUploadCss,productImageUpload$1 as $productImageUpload$1,ProductImageUploadBase,ProductImageUploadStyles,ProductImageUpload};