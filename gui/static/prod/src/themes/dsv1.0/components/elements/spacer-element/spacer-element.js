import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const spacerElementBase=class extends utilsMixin(BaseElement){static get is(){return"spacer-element"}init(pElement,loader){super.init(pElement,loader)}getWidth(){if(null===this.e.kind||""===this.e.kind){return 0}else{return this.e.kind}}getHeight(){if(null===this.e.defaultValue||""===this.e.defaultValue){return 0}else{return this.e.defaultValue}}};var spacerElement={spacerElementBase:spacerElementBase};const SpacerElementStyles=css`
.spacer{
    margin-top: 90px;
    
}

`;var spacerElementCss={SpacerElementStyles:SpacerElementStyles};class SpacerElement extends spacerElementBase{static get styles(){return[SpacerElementStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        
        <div class="spacer" style="width: ${this.getWidth()};height: ${this.getHeight()};"></div>
    `}}customElements.define(SpacerElement.is,SpacerElement);export{spacerElement as $spacerElement,spacerElementCss as $spacerElementCss,spacerElementBase,SpacerElementStyles};