import{SerializableElement,$indexEsmDefault as firebase,css,html}from"../../../../../components/adaptive-ui.js";const LoginFacebookBase=class extends SerializableElement{static get is(){return"login-facebook"}constructor(){super();if(!firebase.apps.length){firebase.initializeApp({apiKey:"AIzaSyDuTzygKaqHl9ZDXJwvvIS_0YDIpraDjPQ",authDomain:"capsule-950eb.firebaseapp.com",projectId:"capsule-950eb",storageBucket:"capsule-950eb.appspot.com",messagingSenderId:"176622876828",appId:"1:176622876828:web:5bed6ead849795c2d01559",measurementId:"G-RZ973XE574"})}}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.name=pElement.name}facebookLogin(){const provider=new firebase.auth.FacebookAuthProvider;firebase.auth().signInWithPopup(provider).then(result=>{this.fetchFacebookData(result.additionalUserInfo.profile)}).catch(error=>{console.error(error)})}fetchFacebookData(response){const self=this,value={email:response.email};self.value=value;this.pl.submitForm()}_submit(){this.facebookLogin()}getName(){return this.e.formName}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}invalid(){}valid(){}};var loginFacebook={LoginFacebookBase:LoginFacebookBase};const LoginFacebookStyles=css`
  .hero-body {
    padding:16px;
  }
  .button {
    padding: 0 8px 0 8px;
    border-color:#1877F2;
    width:220px;
    justify-content: space-evenly;
  }
  .facebook-icon {
    width:24px;
    height:24px;
  }
`;var loginFacebookCss={LoginFacebookStyles:LoginFacebookStyles};class LoginFacebook extends LoginFacebookBase{static get styles(){return[LoginFacebookStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      
    <div class="hero-body">
      <a class="button" style="color: #1877F2;">
        <img src="src/themes/dsv1.0/img/isometic/facebook.svg" class="facebook-icon"/>
        <h3 style="font-weight:bold;">Login with Facebook</h3>
      </a>
    </div>
  `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.shadowRoot.querySelector(".button").addEventListener("click",()=>{this.facebookLogin()})}}customElements.define(LoginFacebook.is,LoginFacebook);export{loginFacebook as $loginFacebook,loginFacebookCss as $loginFacebookCss,LoginFacebookBase,LoginFacebookStyles};