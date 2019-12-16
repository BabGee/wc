import{LitElement,html,css}from"../../node_modules/lit-element/lit-element.js";import{Logger}from"../core/logger.js";import{PageInput}from"../core/parsers/commands/iic/page-input.js";class ElementLoader extends LitElement{constructor(){super();this.renderInstance=0;this.loading=!0}render(){if(this.loading){return html`
<style>
   .loading {
    text-align: center;
   }
   .loading-bar {
     display: inline-block;
     width: 4px;
     height: 18px;
     border-radius: 4px;
     animation: loading 1s ease-in-out infinite;
   }
   .loading-bar:nth-child(1) {
     background-color: var(--app-default-color);
     animation-delay: 0s;
   }
   .loading-bar:nth-child(2) {
     background-color: var(--app-default-color);
     animation-delay: 0.09s;
   }
   .loading-bar:nth-child(3) {
     background-color: var(--app-default-color);
     animation-delay: .18s;
   }
   .loading-bar:nth-child(4) {
     background-color: var(--app-default-color);
     animation-delay: .27s;
   }
   
   @keyframes loading {
     0% {
       transform: scale(1);
     }
     20% {
       transform: scale(1, 2.2);
     }
     40% {
       transform: scale(1);
     }
   }
</style>
<div class="loading">
<div class="loading-bar"></div>
<div class="loading-bar"></div>
<div class="loading-bar"></div>
<div class="loading-bar"></div>
</div>`}else{return html`<div id="content"></div>`}}static get styles(){return css`
    :host {
      display: block;
    }`}createRenderRoot(){return this}set element(val){let oldVal=this._element;this._element=val;if(oldVal!==val){Logger.i.debug("this.load",this,this.renderInstance+1);this.load()}}get element(){return this._element}static get properties(){return{icon:String,_element:PageInput,element:{type:Object},el:Object,pl:Object,params:{type:Object,value:{}},loading:!0}}loadedElement(){if(!this.el){Logger.i.alert("[EARLY ELEMENT ACCESS] "+this._element.name+" not loaded")}return this.el}elementPath(el){if(!el)el=this._element;let switchName=el.variableType.toLocaleLowerCase();if(1===switchName.split(" ").length){Logger.i.switchConfiguration(`Single worded element naming is not recommended -> ${switchName.toUpperCase()}`);switchName+=" element"}let eln=switchName.replace(/ /g,"-"),elp=`../themes/${window.THEME}/components/elements/${eln}.js`;return{path:elp,name:eln,switchName:el.variableType}}load(){let el=this._element;this.renderInstance+=1;let elementProps=this.elementPath();this.loading=!0;this.loadDynamic(elementProps,this.renderInstance,(newElement,rI)=>{if(rI<this.renderInstance){Logger.i.info("skipped redundant render: ",rI,this.renderInstance,newElement)}else{try{this.el=newElement;newElement.init(el,this);Logger.i.debug("this.load done",newElement,rI);this.replaceWith(newElement)}catch(e){if("newElement.init is not a function"===e.message){Logger.i.error(`Custom Element Doesn't implement init:${elementProps.path}`)}else{Logger.i.error(e)}}}})}importAndInit(elementPath,elementName,renderInstance,cb){const self=this;import(elementPath).then(()=>{Logger.i.debug(`Auto-Loaded ${elementName} from ${elementPath}.`);let newElement=document.createElement(elementName);if(newElement.constructor===HTMLElement){throw new DOMException("Custom Element Not Found: "+elementName)}if(cb)return cb(newElement,renderInstance,self)}).catch(error=>{Logger.i.info(`${elementName} Couldn't be loaded`);Logger.i.error(error);const missingElementName="missing-element";if(elementName===missingElementName){return}self.importAndInit("../elements/missing-element.js",missingElementName,renderInstance,newElement=>{newElement.msg=elementName;this.replaceWith(newElement)})})}async replaceWith(newElement){this.loading=!1;await this.updateComplete;const content=this.querySelector("#content");if(content.firstChild){content.firstChild.replaceWith(newElement)}else{content.appendChild(newElement)}}loadDynamic(elementProps,rI,cb){let l=ElementLoader.autoLoad(elementProps.switchName);if(l){this.importAndInit(l.path,l.name,rI,cb)}else{this.importAndInit(elementProps.path,elementProps.name,rI,cb)}}static autoLoad(elementName){switch(elementName){case"HIDDEN":return{path:"../elements/hidden-element.js",name:"hidden-element"};case"FINGERPRINT ELEMENT":return{path:"../elements/fingerprint-element.js",name:"fingerprint-element"};case"REDIRECT URL":return{path:"../elements/redirect-url.js",name:"redirect-url"};default:}}}window.customElements.define("element-loader",ElementLoader);