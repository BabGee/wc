import{html,LoginMipayBase}from"../../../../components/adaptive-ui.js";class LoginMipay extends LoginMipayBase{renderDefault(){return html`
        
        <style>
        .icon:hover{
    z-index: 1;
    opacity: 0.8;
    border-radius: 100%;
    transform: scale(2.0);
    transition: all 0.3s;
}
</style>
                        <div class="column">
        <div class="field">
        <a class="button is-rounded is-medium" style="background-color: #FBBB00; color:#fff; width: 40px; height: 60px;">
    <span class="icon">
      <i><iron-icon icon="mipayicon:mipayicon"></iron-icon></i>
    </span>
  </a>
        </div>
        </div>
        `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(LoginMipay.is,LoginMipay);