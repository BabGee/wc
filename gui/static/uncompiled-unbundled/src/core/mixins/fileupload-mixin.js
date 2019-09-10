import { httpMixin } from "./http-mixin.js";
export const fileUploadMixin = BaseClass => class extends httpMixin(BaseClass) {
  constructor() {
    super();
  } // TODO add events for watching the file reader onload and return the src for previewing
  // TODO add events for watching the upload progress

  /**
    * Temp File Uploader
    *
    * @param {File} file attribute of form file field
    * @param {string} name the file name  can `image` for images or `file` for files
    * @param {RegExp} types a regex to use for matching allowed file types
    * @return {Promise}
    */


  uploadTempFile(file, name, types) {
    const self = this;
    return new Promise(function (resolve, reject) {
      if (types && !file.type.match(types)) {
        console.warn('[ INCOMPLETE DEV ] File type not supported!');
        reject(new Error('File not supported!'));
      }

      if (file.size > 12000000) {
        // size is in bytes
        // todo is this the 2MB? make this an api from a mixin
        reject(new Error('File Size is Above allowed Limit of 2MB!'));
      }

      const reader = new FileReader();

      reader.onload = function (e) {
        self.send({
          url: self.baseUrl() + '/api/upload-temp-file/',
          body: formData,
          method: 'POST',
          handleAs: 'json',
          headers: {
            'X-File-Name': file.name,
            'X-File-Size': file.size,
            'X-File-Type': file.type
          }
        }).then(req => {
          // TODO perform temp file response parsing
          const response = req.response;

          if ('response_status' in response && response['response_status'] === '00') {
            resolve({
              'name': file.name,
              'response': response.response,
              'result': e.target.result // TODO is it possible to preview from /media/tmp/uploads/?

            });
          } else {
            if ('response' in response) {
              reject(new Error(response.response));
            } else {
              console.error('[this should never happen]');
              reject(new Error('Upload Failed.'));
            }
          }

          resolve(req);
        }).catch(rejected => {
          reject(rejected);
        });
      };

      reader.readAsDataURL(file); // Send the file (doh)

      const formData = new FormData();
      formData.append(name, file);
    });
  }

};