import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { ImageInputBase } from "../../../../elements/base/image-input.js";

class ImageInput extends ImageInputBase {
  renderDefault() {
    return html`
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
            required=${this.required} 
            minlength=${this.e.min}  
            maxlength=${this.e.max} 
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
        `;
  }

  getValue() {
    return this.value;
  }

  valid(validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'none'; // Revert general text content

    this.shadowRoot.querySelector('.validation-info').textContent = 'Required';
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'flex';

    if (validation) {
      this.shadowRoot.querySelector('.validation-info').textContent = validation;
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // TODO this.$.paper_progress.style['display'] = 'none';

    if (this.e.defaultValue) {
      this.qs('#display').src = '/media/' + this.e.defaultValue;
    }
  }

  handleFile() {
    // todo check file input
    var self = this;
    /* TODO
        var progress = this.$.paper_progress;
        progress.value = 0;
        progress.style['display'] = 'block';
        */

    var self = this;
    var display = this.qs('#display');
    const fileInput = this.qs('#input');
    var file = fileInput.files[0];
    var paper_input = fileInput;
    var imageType = /image.*/;

    if (!file) {
      // no file selected
      return;
    }

    self.uploadTempFile(file, 'image', imageType).then(upload => {
      paper_input.label = 'Image successfully uploaded. Please Proceed!';
      paper_input.placeholder = 'Image successfully uploaded. Please Proceed!';
      self.value = upload['response']; // Bind Image Path

      self.fileName = upload['name'];
      display.style['background-color'] = 'lightgray';
      display.src = upload['result'];
    }).catch(reason => {
      // TODO add better error handling
      console.warn('[INCOMPLETE DEV] Better error handling.', reason);
    });
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.columnSize = loader.pl.getElementColumnSize();
  }

}

customElements.define(ImageInput.is, ImageInput);