import{utilsMixin,BaseElement,html}from"../../../../components/adaptive-ui.js";const spacerElementBase=class extends utilsMixin(BaseElement){static get is(){return"spacer-element"}init(pElement,loader){super.init(pElement,loader)}getWidth(){if(null===this.e.kind||""===this.e.kind){return 0}else{return this.e.kind}}getHeight(){if(null===this.e.defaultValue||""===this.e.defaultValue){return 0}else{return this.e.defaultValue}}};var spacerElement={spacerElementBase:spacerElementBase};class SpacerElement extends spacerElementBase{renderDefault(){return html`
        <style>
            .spacer{
                margin-top: 90px;
                width: ${this.getWidth()};
                height: ${this.getHeight()};
                
            }
        </style>
        <div class="spacer"></div>
    `}}customElements.define(SpacerElement.is,SpacerElement);export{spacerElement as $spacerElement,spacerElementBase};