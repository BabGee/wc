import{BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const RemoveSubmitBase=class extends BaseElement{static get is(){return"remove-submit"}static get properties(){return{title:String,name:String,icon:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_inlineSubmit(evt){evt.preventDefault();const self=this;self.pl.submitForm()}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=pElement.name;self.name=pElement.name;self.icon=pElement.icon}};var removeSubmit={RemoveSubmitBase:RemoveSubmitBase};const RemoveSubmitStyles=css`


`;var removeSubmitCss={RemoveSubmitStyles:RemoveSubmitStyles};class RemoveSubmit extends RemoveSubmitBase{constructor(){super()}static get styles(){return[RemoveSubmitStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        <a class="button is-primary is-rounded">
            <span class="icon">
            <!--<i class="fab fa-github"></i>-->
              <svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </span>
            <span>${this.name}</span>
        </a>
        `}}customElements.define(RemoveSubmit.is,RemoveSubmit);export{removeSubmit as $removeSubmit,removeSubmitCss as $removeSubmitCss,RemoveSubmitBase,RemoveSubmitStyles};