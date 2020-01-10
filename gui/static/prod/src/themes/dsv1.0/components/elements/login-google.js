import{html,LoginGoogleBase}from"../../../../components/adaptive-ui.js";class LoginGoogle extends LoginGoogleBase{renderDefault(){return html`
        
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
        <a class="button is-rounded is-medium" style="background-color: #F14336; color:#fff; width: 40px; height: 60px;">
    <span class="icon">
      <i><iron-icon icon="social:google"></iron-icon></i>
    </span>
  </a>
        </div>
        </div>
        `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}invalid(validation){}valid(validation){}}customElements.define(LoginGoogle.is,LoginGoogle);