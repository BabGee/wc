import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const TextViewBase=class extends utilsMixin(BaseElement){static get is(){return"text-view"}static get properties(){return{icon:String,text:String,name:String,style:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}checkStyles(){console.log("check style called");if(this.style){return!0}else{return!1}}init(pElement,loader){super.init(pElement,loader);this.name=TextViewBase.toTitleCase(pElement.name);this.text=pElement.defaultValue;this.style=pElement.styles}};var textView={TextViewBase:TextViewBase};const TextViewStyles=css`

`;var textViewCss={TextViewStyles:TextViewStyles};class TextView extends TextViewBase{static get styles(){return[TextViewStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`

<div class="field">
<article class="message is-primary">
  <div class="message-header">
    <p>${this.name}</p>
  </div>
  <div class="message-body">
   ${this.text}
  </div>
</article>
</div>

        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(this.checkStyles){this.loadStyle()}}loadStyle(){const style=document.createElement("style");style.innerHTML=unescape(this.style);this.shadowRoot.appendChild(style)}}window.customElements.define(TextView.is,TextView);export{textView as $textView,textViewCss as $textViewCss,TextViewBase,TextViewStyles};