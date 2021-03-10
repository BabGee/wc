import{utilsMixin,BaseElement,css,ACTION_SERVICE_CALL,buttonMixin}from"../../../../../components/adaptive-ui.js";const HyperlinkElementBase=class extends utilsMixin(BaseElement){static get is(){return"hyperlink-element"}static get properties(){return{name:String,params:Object,type:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.title=HyperlinkElementBase.toTitleCase(pElement.name);this.name=HyperlinkElementBase.toTitleCase(pElement.name);this.params=loader.pl.paramsCopy()}};var hyperlinkElement={HyperlinkElementBase:HyperlinkElementBase};const HyperlinkElementStyles=css`
button.btn{
    width: 100%;
    background: var(--app-accent-color);
    border: 0 solid transparent!important;
    margin: 12px;
    color: #fff!important;
    font-size: 1rem;
    border-radius: 5px!important;
    
    height: 40px;
    /* justify-content: flex-start; */

    justify-content: center!important;
    padding-bottom: calc(.375em - 1px)!important;
    padding-left: .75em!important;
    padding-right: .75em!important;
    padding-top: calc(.375em - 1px)!important;
    text-align: center!important;
    white-space: nowrap!important;
}
button.btn:hover{
    
    color: #fff!important;
    
}
.button-container{
    position: relative;
    padding-right: 22px;
}
.link-container{
    position: relative;
    display: flex!important;
    align-items: center!important;
    justify-content: center!important;
    text-decoration: underline!important;
    color: var(--app-default-color)!important;
    cursor: pointer!important;
}

.link-container:hover{
    text-decoration: none!important;
}

p {
    color: var(--app-default-color)!important;
}

.awesome-icon{
    position: absolute;
    top: 22px;
    right: 30px;
}
`;var hyperlinkElementCss={HyperlinkElementStyles:HyperlinkElementStyles};class HyperlinkElement extends buttonMixin(HyperlinkElementBase){static get properties(){return{name:String,params:{type:Object,value:{}}}}constructor(){super();this.type="LINK"}static get styles(){return[HyperlinkElementStyles,css`
        :host {
          display: block;
        }
      `]}get action(){return ACTION_SERVICE_CALL}}customElements.define(HyperlinkElement.is,HyperlinkElement);export{hyperlinkElement as $hyperlinkElement,hyperlinkElementCss as $hyperlinkElementCss,HyperlinkElementBase,HyperlinkElementStyles};