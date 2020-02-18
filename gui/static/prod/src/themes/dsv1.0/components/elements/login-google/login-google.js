import{SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const LoginGoogleBase=class extends SerializableElement{static get is(){return"login-google"}constructor(){super();(function(){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src="https://apis.google.com/js/client:platform.js?onload=gPOnLoad";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();this.addEventListener("click",this._submit.bind(this))}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this;this.name=pElement.name}googleLogin(){const self=this;window.gapi.auth.signIn({callback:function(authResponse){this.googleSignInCallback(authResponse)}.bind(this),clientid:this.e.defaultValue,cookiepolicy:"single_host_origin",requestvisibleactions:"http://schema.org/AddAction",scope:"https://www.googleapis.com/auth/plus.login email"})}googleSignInCallback(e){if(e.status.signed_in&&"PROMPT"===e.status.method){this.value=e.id_token;this.pl.submitForm()}else{console.log("Oops... Error occured while importing data")}}getUserGoogleProfile(){this;var e=window.gapi.client.plus.people.get({userId:"me"});e.execute(function(e){if(e.error){console.log(e.message);console.log("Import error - Error occured while importing data")}else if(e.id){alert("Successfull login from google : "+e.displayName);console.log(e);({name:e.displayName,email:e.emails[0].value})}})}_submit(){this.googleLogin()}getName(){return this.e.formName}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}invalid(){}valid(){}};var loginGoogle={LoginGoogleBase:LoginGoogleBase};const LoginGoogleStyles=css`

.icon:hover{
    z-index: 1;
    opacity: 0.8;
    border-radius: 100%;
    transform: scale(2.0);
    transition: all 0.3s;
}

`;var loginGoogleCss={LoginGoogleStyles:LoginGoogleStyles};class LoginGoogle extends LoginGoogleBase{static get styles(){return[LoginGoogleStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        
 
              <div class="column">
        <div class="field">
        <a class="button is-rounded is-medium" style="background-color: #F14336; color:#fff; width: 40px; height: 60px;">
    <span class="icon">
      <i><iron-icon icon="social:google"></iron-icon></i>
    </span>
  </a>
        </div>
        </div>
        `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}invalid(){}valid(){}}customElements.define(LoginGoogle.is,LoginGoogle);export{loginGoogle as $loginGoogle,loginGoogleCss as $loginGoogleCss,LoginGoogleBase,LoginGoogleStyles};