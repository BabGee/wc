import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{MarkupElementBase}from"../../../../elements/base/markup-element.js";class MarkupElement extends MarkupElementBase{renderDefault(){return html`
     <style>
  
    #content{
        padding-top: 10px;
    }
    </style>
        <div id="content"></div>
        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.qs("#content").innerHTML=unescape(this.markup)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(MarkupElement.is,MarkupElement);