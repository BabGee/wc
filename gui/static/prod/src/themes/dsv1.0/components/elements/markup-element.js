import{html,MarkupElementBase}from"../../../../components/adaptive-ui.js";class MarkupElement extends MarkupElementBase{renderDefault(){return html`
     <style>
     .resize_icon {
         width: 100%;
        height: 80px;
    }
    /* {
        padding-top: 10px;
    } */
    </style>
        <div id="content"></div>
        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.qs("#content").innerHTML=unescape(this.markup)}}customElements.define(MarkupElement.is,MarkupElement);