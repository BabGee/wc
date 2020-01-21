import{html,SharedStyles,DASHBOARD_STYLES,FileInputBase}from"../../../../components/adaptive-ui.js";class FileInput extends FileInputBase{renderDefault(){return html`
 ${SharedStyles}       
${DASHBOARD_STYLES} 
 <div class="column " >
<div class="field">
    <div class="control field-input-wrapper">
        <div class='field-input'>
        <input 
            id="input" 
            type="file" 
            name=${this.e.name}             
            required=${this.required} 
            @change="${this.handleFile}"
             >
            <span class='button btn-align info-btn raised'><iron-icon icon="icons:file-upload"></iron-icon>Choose File</span>
            <span class='label' id="display" data-js-label>No file selected</span>
        </div>
    </div>   
</div>
</div>


        `}constructor(){super()}getValue(){return this.value}/**
     * from FileInputBase
     * @override
     */updateUploadMessage(message){const display=this.shadowRoot.querySelector("#display");display.textContent=message}/**
     * File Selection Change handler
     * @param evt
     */handleFile(evt){const fileInput=this.shadowRoot.querySelector("#input");this.uploadFile(fileInput)}}window.customElements.define(FileInput.is,FileInput);