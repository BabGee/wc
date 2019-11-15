import{html,SharedStyles,ImageInputBase}from"../../../../components/adaptive-ui.js";class ImageInput extends ImageInputBase{renderDefault(){return html`
 ${SharedStyles}

    
 <div class="column">
<div class="field">
 
  <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img id="display" src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="field" style="margin: 25px 0px 0px;">
    <div class="file is-info has-name is-fullwidth">
    <label class="file-label">
       <input class="img-input" 
            id="input"
            type="file" 
            name=${this.e.name}
             @change="${this.handleFile}">
        <span class="file-cta">
          <span class="file-icon">
            <!--<i class="fas fa-upload"></i>-->
             <!--<svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>-->
                <iron-icon icon="icons:perm-media"></iron-icon>
          </span>
          <span class="file-label">Upload  ${this.e.name} </span>
        </span>
        <span class="file-name">
          ${this.fileName}
        </span>
    </label>
  </div>
  <small class="validation-info" style="display:none;"> Error </small>
    </div>
    </div>
    </article>

</div>
</div>
        `}getValue(){return this.value}valid(){this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}invalid(validation){this.shadowRoot.querySelector(".validation-info").style.display="flex";if(validation){this.shadowRoot.querySelector(".validation-info").textContent=validation}}updateUploadMessage(){const fileInput=this.qs("#input");fileInput.label="Image successfully uploaded. Please Proceed!";fileInput.placeholder="Image successfully uploaded. Please Proceed!"}updatePreview(src){var display=this.qs("#display");display.style["background-color"]="lightgray";display.src=src}handleFile(){const fileInput=this.qs("#input");this.uploadImage(fileInput)}}customElements.define(ImageInput.is,ImageInput);