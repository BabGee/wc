import{utilsMixin,BaseElement,html}from"../../../../components/adaptive-ui.js";const HeaderViewBase=class extends utilsMixin(BaseElement){static get is(){return"header-view"}static get properties(){return{icon:String,text:String,name:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.required=this.e.required||pElement.min&&0<pElement.min;this.name=HeaderViewBase.toTitleCase(pElement.name);this.text=HeaderViewBase.toTitleCase(pElement.defaultValue)}};var headerView={HeaderViewBase:HeaderViewBase};class HeaderView extends HeaderViewBase{renderDefault(){return html`
      <style>
        .field {
          display: flex;
          justify-content: space-around;
        }
      </style>
      <div class="field">
        <h2>${this.text}<h2>
      </div> `}}window.customElements.define(HeaderView.is,HeaderView);export{headerView as $headerView,HeaderViewBase};