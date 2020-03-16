import{SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const LoginFacebookBase=class extends SerializableElement{static get is(){return"login-facebook"}constructor(){super();(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/en_US/sdk.js";fjs.parentNode.insertBefore(js,fjs)})(document,"script","facebook-jssdk");this.addEventListener("click",this._submit.bind(this))}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this;this.name=pElement.name;window.fbAsyncInit=function(){window.FB.init({appId:pElement.defaultValue,cookie:!0,xfbml:!0,version:"v3.1"})}}facebookLogin(){window.FB.login(function(resp){this.statusChangeCallback(resp)}.bind(this),{scope:"email,public_profile"})}checkLoginState(){alert("Checking Login Status");console.log("Checking login status...........");window.FB.getLoginStatus(function(response){alert("FB Callback");console.log("----------->");console.log(response);this.statusChangeCallback(response)}.bind(this))}statusChangeCallback(response){console.log("statusChangeCallback");console.log(response);if("connected"===response.status){this.value=response.authResponse.accessToken;this.pl.submitForm()}else if("not_authorized"===response.status){console.log("Import error","Authorize app to import data","error")}else{console.log("Import error","Error occured while importing data","error")}}fetchDataFacebook(){const self=this;console.log("Welcome!  Fetching your information.... ");window.FB.api("/me?fields=id,name,email",function(user){console.log(user);console.log("Successful login from facebook : "+user.name);const value={name:user.name,email:user.email};self.value=value;self.pl.submitForm()})}_submit(){this.facebookLogin()}getName(){return this.e.formName}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}invalid(){}valid(){}};var loginFacebook={LoginFacebookBase:LoginFacebookBase};const LoginFacebookStyles=css`

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

`;var loginFacebookCss={LoginFacebookStyles:LoginFacebookStyles};class LoginFacebook extends LoginFacebookBase{static get styles(){return[LoginFacebookStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      
    <section class="hero">
    <div class="hero-body">

        <a><span class="gplus-i facebook-i"><fa-icon class="fab fa-facebook-f gplus-icon facebook-iconic " style ="fill: #fff; margin-bottom: -4px;"></fa-icon></span> <span class="gplus facebook-icon">Login in with Facebook</span></a>

    </div>
</section>
        `}constructor(){super()}}customElements.define(LoginFacebook.is,LoginFacebook);export{loginFacebook as $loginFacebook,loginFacebookCss as $loginFacebookCss,LoginFacebookBase,LoginFacebookStyles};