import { SerializableElement } from "../../core/serializable-element.js";
export const LoginGoogleBase = class extends SerializableElement {
  static get is() {
    return 'login-google';
  }

  constructor() {
    super();

    (function () {
      var e = document.createElement('script');
      e.type = 'text/javascript';
      e.async = true;
      e.src = 'https://apis.google.com/js/client:platform.js?onload=gPOnLoad';
      var t = document.getElementsByTagName('script')[0];
      t.parentNode.insertBefore(e, t);
    })();

    this.addEventListener('click', this._submit.bind(this));
  }

  static get properties() {
    return {
      title: String,
      name: String,
      type: String,
      params: {
        type: Object,
        value: {}
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    const self = this;
    this.name = pElement.name;
  } // Triggering login for google


  googleLogin() {
    const self = this;
    const response = null;
    window.gapi.auth.signIn({
      callback: function (authResponse) {
        this.googleSignInCallback(authResponse);
      }.bind(this),
      clientid: this.e.defaultValue,
      // config.google, //Google client Id
      cookiepolicy: 'single_host_origin',
      requestvisibleactions: 'http://schema.org/AddAction',
      scope: 'https://www.googleapis.com/auth/plus.login email'
    });
  }

  googleSignInCallback(e) {
    // console.log( e )
    if (e['status']['signed_in'] && e['status']['method'] === 'PROMPT') {
      this.value = e['id_token'];
      this.pl.submitForm(); // window.gapi.client.load("plus", "v1", function() {
      //     if (e["access_token"]) {
      //         this.getUserGoogleProfile( e["access_token"] )
      //     } else if (e["error"]) {
      //         console.log('Import error', 'Error occured while importing data')
      //     }
      // }.bind(this));
    } else {
      console.log('Oops... Error occured while importing data');
    }
  }

  getUserGoogleProfile(accesstoken) {
    const self = this;
    var e = window.gapi.client.plus.people.get({
      userId: 'me'
    });
    e.execute(function (e) {
      if (e.error) {
        console.log(e.message);
        console.log('Import error - Error occured while importing data');
        return;
      } else if (e.id) {
        // Profile data
        alert('Successfull login from google : ' + e.displayName);
        console.log(e);
        const value = {};
        value['name'] = e['displayName'];
        value['email'] = e['emails'][0]['value']; // self.value = value;

        return;
      }
    });
  }

  _submit() {
    this.googleLogin(); // this.pl.submitForm();
  }

  getName() {
    return this.e.formName;
  }

  getValue() {
    return this.value;
  }

  validate() {
    return new this.Validation(true, 'valid');
  }

  invalid(validation) {// will never happen
  }

  valid(validation) {}

};