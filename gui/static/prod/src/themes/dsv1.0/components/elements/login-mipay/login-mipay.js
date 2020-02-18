import{BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const LoginMipayBase=class extends BaseElement{static get is(){return"login-mipay"}constructor(){super();this.addEventListener("click",this._submit.bind(this))}static get properties(){return{title:String,name:String,type:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.type="submit"}init(pElement,loader){super.init(pElement,loader);this;this.name=pElement.name}_submit(){this.pl.submitForm()}};var loginMipay={LoginMipayBase:LoginMipayBase};const LoginMipayStyles=css`

.icon:hover{
    z-index: 1;
    opacity: 0.8;
    border-radius: 100%;
    transform: scale(2.0);
    transition: all 0.3s;
}

`;var loginMipayCss={LoginMipayStyles:LoginMipayStyles};class LoginMipay extends LoginMipayBase{static get styles(){return[LoginMipayStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`

                        <div class="column">
        <div class="field">
        <a class="button is-rounded is-medium" style="background-color: #FBBB00; color:#fff; width: 40px; height: 60px;">
    <span class="icon">
      <i><iron-icon icon="mipayicon:mipayicon"></iron-icon></i>
    </span>
  </a>
        </div>
        </div>
        `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(LoginMipay.is,LoginMipay);export{loginMipay as $loginMipay,loginMipayCss as $loginMipayCss,LoginMipayBase,LoginMipayStyles};