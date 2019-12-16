import{LitElement,html,css}from"../../node_modules/lit-element/lit-element.js";import{connect}from"../../node_modules/pwa-helpers/connect-mixin.js";import{installMediaQueryWatcher}from"../../node_modules/pwa-helpers/media-query.js";import{installOfflineWatcher}from"../../node_modules/pwa-helpers/network.js";import{installRouter}from"../../node_modules/pwa-helpers/router.js";import{updateMetadata}from"../../node_modules/pwa-helpers/metadata.js";import{Logger}from"../core/logger.js";import{store}from"../store.js";import{navigate,updateOffline,getPayload}from"../actions/app.js";import{COMMAND_GET_SECTION}from"../core/parsers/response.js";class AdaptiveUi extends connect(store)(LitElement){render(){if(this._payload){return html`
      <service-page ?active="${"service"===this.template}"></service-page>
      <landing-page ?active="${"landing"===this.template}"></landing-page>
      <canvas-page ?active="${"canvas"===this.template}"></canvas-page>
      <payments-page ?active="${"payments"===this.template}"></payments-page>
      ${"section"===this.template?html`
      <section-page       
        .payload="${this._cleanPayload}"
        .loading="${!1}"></section-page>`:html``}
      <view-404  
        ?active="${"view-404"===this.template}"></view-404>
    `}else{return html`loading ...`}}createRenderRoot(){return this}get _cleanPayload(){if(this._payload){return this._payload.serviceCommands[COMMAND_GET_SECTION]}return null}static get properties(){return{appTitle:String,template:String,_page:Number,_tab:Number,_payload:Object,payloadjson:String,params:String,csrftoken:String,activeTab:Object,activePageGroup:Object}}constructor(){super();Logger.i.info("ADAPTIVE UI WEB");Logger.i.info(`THEME : ${window.THEME}`)}static get styles(){return css`
    :host {
      display: block;
      width: 100vw;
      height: 100vh;
      overflow-x:hidden;
      overflow-y:hidden;
    }`}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(window.NO_NETWORKING){this.payloadjson=JSON.stringify(window.PAYLOAD_JSON)}window.template=this.template;store.dispatch(getPayload(this.payloadjson,this.template));Logger.i.debug("dispatched getPayload");installRouter(location=>store.dispatch(navigate(window.decodeURIComponent(location.pathname))));installOfflineWatcher(offline=>store.dispatch(updateOffline(offline)));window.csrfToken=this.csrftoken}templatePage(){switch(this.template){case"service":return this.querySelector("service-page");case"landing":return this.querySelector("landing-page");case"canvas":return this.querySelector("canvas-page");default:console.error("THIS SHOULD NOT HAPPEN");break;}}dialogView(...args){this.templatePage()._activateLoadSectionInterface(...args).then(r=>{console.log(r)}).catch(error=>{console.error(error)})}updated(changedProperties){super.updated(changedProperties)}paramsToObject(entries){const result={};for(const entry of entries){result[entry[0]]=entry[1]}return result}stateChanged(state){this;this._payload=state.app.payload}}window.customElements.define("adaptive-ui",AdaptiveUi);