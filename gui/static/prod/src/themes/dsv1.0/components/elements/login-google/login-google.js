import{SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const LoginGoogleBase=class extends SerializableElement{static get is(){return"login-google"}constructor(){super();(function(){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src="https://apis.google.com/js/client:platform.js?onload=gPOnLoad";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();this.addEventListener("click",this._submit.bind(this))}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this;this.name=pElement.name}googleLogin(){const self=this;window.gapi.auth.signIn({callback:function(authResponse){this.googleSignInCallback(authResponse)}.bind(this),clientid:this.e.defaultValue,cookiepolicy:"single_host_origin",requestvisibleactions:"http://schema.org/AddAction",scope:"https://www.googleapis.com/auth/plus.login email"})}googleSignInCallback(e){if(e.status.signed_in&&"PROMPT"===e.status.method){this.value=e.id_token;this.pl.submitForm()}else{console.log("Oops... Error occured while importing data")}}getUserGoogleProfile(){this;var e=window.gapi.client.plus.people.get({userId:"me"});e.execute(function(e){if(e.error){console.log(e.message);console.log("Import error - Error occured while importing data")}else if(e.id){alert("Successfull login from google : "+e.displayName);console.log(e);({name:e.displayName,email:e.emails[0].value})}})}_submit(){this.googleLogin()}getName(){return this.e.formName}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}invalid(){}valid(){}};var loginGoogle={LoginGoogleBase:LoginGoogleBase};const LoginGoogleStyles=css`

.gplus, .facebook-icon {
    background-color: #DB4F2E;
    padding: 12px;
    margin-left: -4px;
}

.facebook-icon{
  background-color: #395D9B !important;
}

    .gplus-icon, .facebook-iconic{
        
        background-color: #CE3D28;
        
        margin-top: 15px;
        
    }

    .facebook-iconic{
      background-color: #354F88 !important;
    }

    .hero-body a {
        color: #fff;
    }

    .gplus-i, .facebook-i {

      background-color: #CE3D28;
        
        padding: 12px;
    }

    .facebook-i {
      background-color: #354F88 !important;
    }

    fa-icon.fab.fa-facebook-f.gplus-icon.facebook-iconic {

        margin-bottom: -4px !important;
        
        
        }

`;var loginGoogleCss={LoginGoogleStyles:LoginGoogleStyles};class LoginGoogle extends LoginGoogleBase{static get styles(){return[LoginGoogleStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
 
    <section class="hero">
    <div class="hero-body">

        <a><span class="gplus-i"><fa-icon class="fab fa-google-plus-g gplus-icon" style ="fill: #fff; margin-bottom: -4px;"></fa-icon></span> <span class="gplus">Login in with Google+</span></a>

    </div>
</section>
        `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}invalid(){}valid(){}}customElements.define(LoginGoogle.is,LoginGoogle);export{loginGoogle as $loginGoogle,loginGoogleCss as $loginGoogleCss,LoginGoogleBase,LoginGoogleStyles};