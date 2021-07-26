import{SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const LoginGoogleBase=class extends SerializableElement{static get is(){return"login-google"}constructor(){super()}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}initializeGoogle(element){const script=document.createElement("script");script.src="https://apis.google.com/js/api.js";script.async=!0;script.defer=!0;document.head.appendChild(script);script.onload=()=>this.setupGoogleAuthentication(element)}setupGoogleAuthentication(element){gapi.load("auth2",()=>{gapi.auth2.init({client_id:"206229838441-3pnkd4eth7e13si1qvli71s223i0qvai.apps.googleusercontent.com",cookiepolicy:"single_host_origin"}).attachClickHandler(element,{},googleUser=>{this.submitGoogleEmail(googleUser.At.ku)},error=>{console.error(JSON.stringify(error,void 0,2))})})}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.name=pElement.name}submitGoogleEmail(email){const self=this;self.value={email:email};this.pl.submitForm()}_submit(){this.googleLogin()}getName(){return this.e.formName}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}invalid(){}valid(){}};var loginGoogle={LoginGoogleBase:LoginGoogleBase};const LoginGoogleStyles=css`
  .hero-body {
    padding:16px;
  }
  .button {
    padding: 0 8px 0 8px;
    width:220px;
    justify-content: space-evenly;
  }
  .google-icon {
    width:18px;
    height:18px;
  }
`;var loginGoogleCss={LoginGoogleStyles:LoginGoogleStyles};class LoginGoogle extends LoginGoogleBase{static get styles(){return[LoginGoogleStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
  
      <div class="hero-body">
        <a class="google-button button" style="color: black;">
          <svg class="google-icon" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
          <h3 style="font-weight:bold;">Login with Google</h3>
        </a>
      </div>
    `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.initializeGoogle(this.shadowRoot.querySelector(".google-button"))}init(pElement,loader){super.init(pElement,loader)}invalid(){}valid(){}}customElements.define(LoginGoogle.is,LoginGoogle);export{loginGoogle as $loginGoogle,loginGoogleCss as $loginGoogleCss,LoginGoogleBase,LoginGoogleStyles};