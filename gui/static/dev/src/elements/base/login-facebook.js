import { SerializableElement } from "../../core/serializable-element.js";
export const LoginFacebookBase = class extends SerializableElement {
  static get is() {
    return 'login-facebook';
  }

  constructor() {
    super(); // console.log('componentDidMount')
    // Load the required SDK asynchronously for facebook, google and linkedin

    (function (d, s, id) {
      var js;
      var fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

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

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: pElement.defaultValue,
        // config.facebook,
        cookie: true,
        // enable cookies to allow the server to access the session
        xfbml: true,
        // parse social plugins on this page
        version: 'v3.1' // use version 2.1

      });
    };
  }

  facebookLogin() {
    /* window.FB.login(
            this.checkLoginState(),
            { scope : 'email, public_profile' } //Add scope whatever you need about the facebook user
        ); */
    window.FB.login(function (resp) {
      this.statusChangeCallback(resp);
    }.bind(this), {
      scope: 'email,public_profile'
    });
  }

  checkLoginState() {
    alert('Checking Login Status');
    console.log('Checking login status...........');
    window.FB.getLoginStatus(function (response) {
      alert('FB Callback');
      console.log('----------->');
      console.log(response);
      this.statusChangeCallback(response);
    }.bind(this));
  }

  statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);

    if (response.status === 'connected') {
      // alert( "Connected to facebook. Retriving user from fb" );
      // Logged into your app and Facebook.
      // todo this.fetchDataFacebook();
      this.value = response['authResponse']['accessToken'];
      this.pl.submitForm();
    } else if (response.status === 'not_authorized') {
      console.log('Import error', 'Authorize app to import data', 'error');
    } else {
      console.log('Import error', 'Error occured while importing data', 'error');
    }
  }

  fetchDataFacebook() {
    const self = this;
    console.log('Welcome!  Fetching your information.... ');
    window.FB.api('/me?fields=id,name,email', function (user) {
      console.log(user);
      console.log('Successful login from facebook : ' + user.name); // alert( 'Successful login for: ' + user.name );

      const value = {};
      value['name'] = user['name'];
      value['email'] = user['email'];
      self.value = value;
      self.pl.submitForm();
    });
  }

  _submit() {
    this.facebookLogin();
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