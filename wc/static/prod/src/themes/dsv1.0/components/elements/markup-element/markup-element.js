import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const MarkupElementBase=class extends utilsMixin(BaseElement){static get is(){return"markup-element"}static get properties(){return{icon:String,data_name:String,color:String,title:String,maxlength:Number,pattern:String,required:Boolean,markup:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=MarkupElementBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.markup=escape(pElement.defaultValue)}};var markupElement={MarkupElementBase:MarkupElementBase};const MarkupElementStyles=css`
.resize_icon {
    width: 100%;
   height: 80px;
}
/* {
   padding-top: 10px;
} */

`;var markupElementCss={MarkupElementStyles:MarkupElementStyles};class MarkupElement extends MarkupElementBase{static get styles(){return[MarkupElementStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
   
        <div id="content"></div>
        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.qs("#content").innerHTML=unescape(this.markup)}}customElements.define(MarkupElement.is,MarkupElement);export{markupElement as $markupElement,markupElementCss as $markupElementCss,MarkupElementBase,MarkupElementStyles};