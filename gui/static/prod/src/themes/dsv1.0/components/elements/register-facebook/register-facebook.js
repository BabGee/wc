import{SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const RegisterFacebookBase=class extends SerializableElement{static get is(){return"register-facebook"}constructor(){super()}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}facebookInit(){window.fbAsyncInit=function(){FB.init({appId:"458003402162508",cookie:!0,xfbml:!0,version:"v10.0"});FB.AppEvents.logPageView()};(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.src="https://connect.facebook.net/en_US/sdk.js";fjs.parentNode.insertBefore(js,fjs)})(document,"script","facebook-jssdk")}facebookRegister(){window.FB.login(response=>{if("connected"===response.status){FB.api("/me?fields=email",data=>{data.email&&this.submitFacebookEmail(data.email)})}},{scope:"email",return_scopes:!0})}submitFacebookEmail(email){const self=this;self.value={email:email};if(this.e.details.auto_submit){this.pl.submitForm()}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.name=pElement.name}getName(){return this.e.formName}getValue(){return this.value}validate(){return new this.Validation(!0,"valid")}invalid(){}valid(){}};var registerFacebook={RegisterFacebookBase:RegisterFacebookBase};const RegisterFacebookStyles=css`
  .hero-body {
    padding:16px;
  }
  .button {
    padding: 0 5px 0 5px;
    border-color:#1877F2;
    width:220px;
    justify-content: space-evenly;
  }
  .facebook-icon {
    width:24px;
    height:24px;
  }
`;var registerFacebookCss={RegisterFacebookStyles:RegisterFacebookStyles};class RegisterFacebook extends RegisterFacebookBase{static get styles(){return[RegisterFacebookStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        
      <div class="hero-body">
          <a class="button" style="color: #1877F2;" @click=${()=>this.facebookRegister()}>
            <svg xmlns="http://www.w3.org/2000/svg" class="facebook-icon" viewBox="0 0 14222 14222"><circle cx="7111" cy="7112" r="7111" fill="#1977f3"/><path d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z" fill="#fff"/></svg>
            <h3 style="font-weight:bold;">Sign up with Facebook</h3>
          </a>
          ${this.getValue()&&!this.e.details.auto_submit?html`
            <h3 style="margin:7px 0 0 17px;">${this.getValue().email}</h3>`:html``}
      </div>
    `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.facebookInit()}}customElements.define(RegisterFacebook.is,RegisterFacebook);export{registerFacebook as $registerFacebook,registerFacebookCss as $registerFacebookCss,RegisterFacebookBase,RegisterFacebookStyles};