import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const HeaderViewBase=class extends utilsMixin(BaseElement){static get is(){return"header-view"}static get properties(){return{icon:String,text:String,name:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.required=this.e.required||pElement.min&&0<pElement.min;this.name=HeaderViewBase.toTitleCase(pElement.name);this.text=HeaderViewBase.toTitleCase(pElement.defaultValue)}};var headerView={HeaderViewBase:HeaderViewBase};const HeaderViewStyles=css`
.field {
    display: flex;
    justify-content: space-around;
  }

`;var headerViewCss={HeaderViewStyles:HeaderViewStyles};class HeaderView extends HeaderViewBase{static get styles(){return[HeaderViewStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
      <div class="field">
        <h2>${this.text}<h2>
      </div> `}}window.customElements.define(HeaderView.is,HeaderView);export{headerView as $headerView,headerViewCss as $headerViewCss,HeaderViewBase,HeaderViewStyles};