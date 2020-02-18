import{SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const LoginFacebookBase=class extends SerializableElement{static get is(){return"login-facebook"}constructor(){super();(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/en_US/sdk.js";fjs.parentNode.insertBefore(js,fjs)})(document,"script","facebook-jssdk");this.addEventListener("click",this._submit.bind(this))}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this;this.name=pElement.name;window.fbAsyncInit=function(){window.FB.init({appId:pElement.defaultValue,cookie:!0,xfbml:!0,version:"v3.1"})}}facebookLogin(){window.FB.login(function(resp){this.statusChangeCallback(resp)}.bind(this),{scope:"email,public_profile"})}checkLoginState(){alert("Checking Login Status");console.log("Checking login status...........");window.FB.getLoginStatus(function(response){alert("FB Callback");console.log("----------->");console.log(response);this.statusChangeCallback(response)}.bind(this))}statusChangeCallback(response){console.log("statusChangeCallback");console.log(response);if("connected"===response.status){this.value=response.authResponse.accessToken;this.pl.submitForm()}else if("not_authorized"===response.status){console.log("Import error","Authorize app to import data","error")}else{console.log("Import error","Error occured while importing data","error")}}fetchDataFacebook(){const self=this;console.log("Welcome!  Fetching your information.... ");window.FB.api("/me?fields=id,name,email",function(user){console.log(user);console.log("Successful login from facebook : "+user.name);const value={name:user.name,email:user.email};self.value=value;self.pl.submitForm()})}_submit(){this.facebookLogin()}getName(){return this.e.formName}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}invalid(){}valid(){}};var loginFacebook={LoginFacebookBase:LoginFacebookBase};const LoginFacebookStyles=css`
.icon:hover{
    z-index: 1;
    opacity: 0.8;
    border-radius: 100%;
    transform: scale(2.0);
    transition: all 0.3s;
}

`;var loginFacebookCss={LoginFacebookStyles:LoginFacebookStyles};class LoginFacebook extends LoginFacebookBase{static get styles(){return[LoginFacebookStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`

      
                 <div class="column">
        <div class="field">
        <a class="button is-rounded is-medium" style="background-color: #3578E5; color:#fff; width: 40px; height: 60px;">
    <span class="icon">
      <i><iron-icon icon="social:facebook"></iron-icon></i>
    </span>
  </a>
        </div>
        </div>
        `}constructor(){super()}}customElements.define(LoginFacebook.is,LoginFacebook);export{loginFacebook as $loginFacebook,loginFacebookCss as $loginFacebookCss,LoginFacebookBase,LoginFacebookStyles};