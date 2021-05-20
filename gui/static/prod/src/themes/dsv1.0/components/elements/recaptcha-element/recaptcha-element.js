import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const RecaptchaElementBase=class extends utilsMixin(SerializableElement){static get is(){return"recaptcha-element"}static get properties(){return{}}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()||this.getValue()===void 0||null===this.getValue()){return new this.Validation(!1,"invalid")}console.log("recaptcha passed");return new this.Validation(!0,"valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=RecaptchaElementBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.params=self.pl.paramsCopy()}};var recaptchaElement={RecaptchaElementBase:RecaptchaElementBase};const RecaptchaElementStyles=css`
#warning-text{
    display:none;
}
.position{
    position:absolute;
    bottom:0;
    right:0;
}
#rBody{
    padding: 40px;
}

`;var recaptchaElementCss={RecaptchaElementStyles:RecaptchaElementStyles};class RecaptchaElement extends RecaptchaElementBase{static get styles(){return[RecaptchaElementStyles,css`
        :host {
          display: block;
        }
      `]}static get properties(){return{}}constructor(){super()}renderDefault(){return html`

        <div id="rBody"></div>
 
         <p id="warning-text" style="color:#ff3860;">verification is required</p>
 
    `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.initRecaptcha()}initRecaptcha(){let rBody=this.shadowRoot.querySelector("#rBody"),topPosition=rBody.getBoundingClientRect().top,leftPosition=rBody.getBoundingClientRect().left+12;const self=this;var script=document.createElement("script");script.src="https://www.google.com/recaptcha/api.js";script.async=!0;script.defer=!0;console.log("RECAPTURE LOADED");var recaptcha=document.createElement("div");recaptcha.setAttribute("class","g-recaptcha");recaptcha.setAttribute("style","position:absolute;top:"+topPosition+"px;"+"left:"+leftPosition+"px;");recaptcha.setAttribute("data-theme",self.e.details.theme);recaptcha.setAttribute("data-callback","recaptchaCallback");recaptcha.setAttribute("data-sitekey",self.e.defaultValue);document.body.appendChild(recaptcha);document.head.appendChild(script);let callBackScript=document.createElement("script");callBackScript.textContent=" function recaptchaCallback(){var recapValue = document.createElement(\"p\"); recapValue.setAttribute(\"id\",\"recapValue\"); recapValue.setAttribute(\"pass\",\"r-true\");document.body.appendChild(recapValue);console.log(\"Recaptcha callback passed\");}";document.body.appendChild(callBackScript)}getValue(){let recaptchaValue=document.querySelector("#recapValue");if(null!=recaptchaValue){return recaptchaValue.getAttribute("pass")}else{return null}}valid(){const warningText=this.shadowRoot.querySelector("#warning-text");warningText.style.display="none"}invalid(){const warningText=this.shadowRoot.querySelector("#warning-text");warningText.style.display="block"}}customElements.define(RecaptchaElement.is,RecaptchaElement);export{recaptchaElement as $recaptchaElement,recaptchaElementCss as $recaptchaElementCss,RecaptchaElementBase,RecaptchaElementStyles};