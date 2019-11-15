import{html,FileInputBase}from"../../../../components/adaptive-ui.js";class FileInput extends FileInputBase{renderDefault(){return html`

    <style>
      .uploader {
        display: block;
        clear: both;
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        box-shadow: 0 0 3px #EFEFEF;
      }

      .uploader label {
          float: left;
          clear: both;
          width: 100%;
          padding: 0;
          text-align: center;
          background: #fff;
          border-radius: 4px;
          transition: all .2s ease;
          user-select: none;
      }
      .uploader label .btn {
        width: 100%;
          display: inline-block;
          margin: 0;
          clear: both;
          font-family: inherit;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          text-transform: initial;
          border: none;
          border-bottom-right-radius: .2rem;
          border-bottom-left-radius: .2rem;
          outline: none;
          padding: 0 1rem;
          height: 36px;
          line-height: 36px;
          color: #fff;
          transition: all 0.2s ease-in-out;
          box-sizing: border-box;
          background: #2e75ec;
          border-color: #2e75ec;
          cursor: pointer;
      }
      .file-header p{
          text-align: left;
          padding: 1em;
          margin: 0;
      }

      #start {
        float: left;
        clear: both;
        width: 100%;
      }

      #file-image {
        display: inline;
        margin: 0 auto .5rem auto;
        width: auto;
        height: auto;
        max-width: 180px;
      }
        
      #notimage {
        display: block;
        float: left;
        clear: both;
        width: 100%;
      }

      progress,.progress {
        /*appearance: none;*/
        display: inline;
        clear: both;
        margin: 0 auto;
        width: 100%;
        max-width: 180px;
        height: 8px;
        border: 0;
        border-radius: 4px;
        background-color: #eee;
        overflow: hidden;
      }

      .progress[value]::-webkit-progress-bar {
        border-radius: 4px;
        background-color: #eee;
      }

      .progress[value]::-webkit-progress-value {
        background: linear-gradient(to right, darken($theme,8%) 0%, $theme 50%);
        border-radius: 4px; 
      }
      .progress[value]::-moz-progress-bar {
        background: linear-gradient(to right, darken($theme,8%) 0%, $theme 50%);
        border-radius: 4px; 
      }

      input[type="file"] {
        display: none;
      }

      #start svg{
        width: 288px;
        height: 288px;
        transform: scale(0.8);
        /* opacity: 0.3; */
        font-size: 90px;
        margin-bottom: 1rem;
        transition: all .2s ease-in-out;
      }

      #start.hidden, 
      #start #response.hidden,
      #file-image.hidden, 
      #notimage.hidden{
        display: none;
      }

      #start #response {
          float: left;
          clear: both;
          width: 100%;
      }
      .header{
        width: 50%;
        padding-right: 15px;
      }
      .cancel{
        display: flex;
        justify-content: flex-end;
        position: relative;
        top: 12px;
        cursor: pointer;
      }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

    <div class="mainwrapper">
      <form id="file-upload-form" class="uploader">
        <input  id="file-upload" 
                type="file"
                name=${this.e.name}
                @change="${this.handleFile}">
        <label for="file-upload" id="file-drag">
          <div class="file-header is-flex">
            <p class="header is-pulled-left">Upload File</p>
          <div class="header cancel is-pulled-right" @click=${this.cancelUpload}>x</div>
          </div>	
          <img id="file-image" src="#" alt="Preview" class="hidden">
          <div id="start">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 548.176 548.176" style="enable-background:new 0 0 548.176 548.176;" xml:space="preserve"><g><g>
        <path d="M524.326,297.352c-15.896-19.89-36.21-32.782-60.959-38.684c7.81-11.8,11.704-24.934,11.704-39.399   c0-20.177-7.139-37.401-21.409-51.678c-14.273-14.272-31.498-21.411-51.675-21.411c-18.083,0-33.879,5.901-47.39,17.703   c-11.225-27.41-29.171-49.393-53.817-65.95c-24.646-16.562-51.818-24.842-81.514-24.842c-40.349,0-74.802,14.279-103.353,42.83   c-28.553,28.544-42.825,62.999-42.825,103.351c0,2.474,0.191,6.567,0.571,12.275c-22.459,10.469-40.349,26.171-53.676,47.106   C6.661,299.594,0,322.43,0,347.179c0,35.214,12.517,65.329,37.544,90.358c25.028,25.037,55.15,37.548,90.362,37.548h310.636   c30.259,0,56.096-10.711,77.512-32.12c21.413-21.409,32.121-47.246,32.121-77.516C548.172,339.944,540.223,317.248,524.326,297.352   z M362.729,289.648c-1.813,1.804-3.949,2.707-6.42,2.707h-63.953v100.502c0,2.471-0.903,4.613-2.711,6.42   c-1.813,1.813-3.949,2.711-6.42,2.711h-54.826c-2.474,0-4.615-0.897-6.423-2.711c-1.804-1.807-2.712-3.949-2.712-6.42V292.355   H155.31c-2.662,0-4.853-0.855-6.563-2.563c-1.713-1.714-2.568-3.904-2.568-6.566c0-2.286,0.95-4.572,2.852-6.855l100.213-100.21   c1.713-1.714,3.903-2.57,6.567-2.57c2.666,0,4.856,0.856,6.567,2.57l100.499,100.495c1.714,1.712,2.562,3.901,2.562,6.571   C365.438,285.696,364.535,287.845,362.729,289.648z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#2E75EC"/>
        </g></g> </svg>
            <div id="notimage" class="hidden">Please select an image</div>
          </div>
          <span id="file-upload-btn" class="btn btn-primary">Choose file</span>
        </label>
        <span id="display"></span>
        <span id="errorDisplay" style="color: red;display: none;"></span>
      </form>
    </div>
        `}constructor(){super()}getValue(){return this.value}valid(){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="none"}invalid(validation){const errorDisplay=this.shadowRoot.querySelector("#errorDisplay");errorDisplay.style.display="block";errorDisplay.textContent=validation}updateUploadMessage(message){const display=this.shadowRoot.querySelector("#display");display.textContent=message}cancelUpload(){this.resetUpload();this.updateUploadMessage("")}handleFile(){const fileInput=this.shadowRoot.querySelector("#file-upload");this.uploadFile(fileInput)}}window.customElements.define(FileInput.is,FileInput);