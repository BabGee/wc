import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { BulkUploadFileBase } from "../../../../elements/base/bulk-upload-file.js";
import { Dropzone } from "./dropzone/dropzone.js";

class BulkUploadFile extends BulkUploadFileBase {
  renderDefault() {
    return html`
 ${SharedStyles}

 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.3.0/dropzone.css"/>
  <style>
  .dropzone {
      background: white;
      border-radius: 5px;
      border: 2px dashed rgb(0, 135, 247);
      border-image: none;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
  }
  
  </style>

 <div class="column">
<div class="field">
<SECTION>
  <DIV id="dropzone">
    <form class="dropzone needsclick" id="demo-upload" action="/upload">
      <DIV class="dz-message needsclick">    
        Drop files here or click to upload.<BR>
        <SPAN class="note needsclick">(This is just a demo dropzone. Selected 
        files are <STRONG>not</STRONG> actually uploaded.)</SPAN>
      </DIV>
    </form>
  </DIV>
</SECTION>

<DIV id="preview-template" style="display: none;">
<DIV class="dz-preview dz-file-preview">
<DIV class="dz-image"><IMG data-dz-thumbnail=""></DIV>
<DIV class="dz-details">
<DIV class="dz-size"><SPAN data-dz-size=""></SPAN></DIV>
<DIV class="dz-filename"><SPAN data-dz-name=""></SPAN></DIV></DIV>
<DIV class="dz-progress"><SPAN class="dz-upload" 
data-dz-uploadprogress=""></SPAN></DIV>
<DIV class="dz-error-message"><SPAN data-dz-errormessage=""></SPAN></DIV>
<div class="dz-success-mark">
  <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <title>Check</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>
    </g>
  </svg>
</div>
<div class="dz-error-mark">
  <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
      <title>error</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
          <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">
              <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>
          </g>
      </g>
  </svg>
</div>
 
</div>
</div>`;
  }

  constructor() {
    super();
  }

  getValue() {
    return this.value;
  }

  valid(validation) {}

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    var dropzone = new Dropzone(this.shadowRoot.querySelector('#demo-upload'), {
      previewTemplate: this.shadowRoot.querySelector('#preview-template').innerHTML,
      parallelUploads: 2,
      thumbnailHeight: 120,
      thumbnailWidth: 120,
      maxFilesize: 3,
      filesizeBase: 1000,
      thumbnail: function (file, dataUrl) {
        if (file.previewElement) {
          file.previewElement.classList.remove('dz-file-preview');
          var images = file.previewElement.querySelectorAll('[data-dz-thumbnail]');

          for (var i = 0; i < images.length; i++) {
            var thumbnailElement = images[i];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }

          setTimeout(function () {
            file.previewElement.classList.add('dz-image-preview');
          }, 1);
        }
      }
    }); // Now fake the file upload, since GitHub does not handle file uploads
    // and returns a 404

    var minSteps = 6;
    var maxSteps = 60;
    var timeBetweenSteps = 100;
    var bytesPerStep = 100000;

    dropzone.uploadFiles = function (files) {
      var self = this;

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

        for (var step = 0; step < totalSteps; step++) {
          var duration = timeBetweenSteps * (step + 1);
          setTimeout(function (file, totalSteps, step) {
            return function () {
              file.upload = {
                progress: 100 * (step + 1) / totalSteps,
                total: file.size,
                bytesSent: (step + 1) * file.size / totalSteps
              };
              self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);

              if (file.upload.progress == 100) {
                file.status = Dropzone.SUCCESS;
                self.emit('success', file, 'success', null);
                self.emit('complete', file);
                self.processQueue(); // document.getElementsByClassName("dz-success-mark").style.opacity = "1";
              }
            };
          }(file, totalSteps, step), duration);
        }
      }
    };
  }

  handleFile() {
    var self = this;
    const fileInput = this.qs('#input');
    const label = input.nextElementSibling;
    const labelVal = label.innerHTML;
    /* TODO
        var fileName = '';
        if( this.files && this.files.length > 1 )
            fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
            fileName = e.target.value.split( '\\' ).pop();
         if( fileName )
            label.querySelector( 'span' ).innerHTML = fileName;
        else
            label.innerHTML = labelVal;
        */

    if (fileInput.files && fileInput.files.length) {
      for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        self.uploadTempFile(file, 'image', /image.*/).then(upload => {
          self.uploads = [...self.uploads, {
            'name': upload['name'],
            'response': upload['response'],
            'src': upload['result'] // TODO is it possible to preview from /media/tmp/uploads/?

          }];
        }).catch(reason => {
          // TODO add better error handling
          console.warn('[INCOMPLETE DEV] Better error handling.', reason);
        });
      }
    } else {
      label.innerHTML = labelVal;
    }
  }

}

customElements.define(BulkUploadFile.is, BulkUploadFile);