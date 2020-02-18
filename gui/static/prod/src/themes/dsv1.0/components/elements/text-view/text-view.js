import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const TextViewBase=class extends utilsMixin(BaseElement){static get is(){return"text-view"}static get properties(){return{icon:String,text:String,name:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.name=TextViewBase.toTitleCase(pElement.name);this.text=pElement.defaultValue}};var textView={TextViewBase:TextViewBase};const TextViewStyles=css`

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

        `}}window.customElements.define(TextView.is,TextView);export{textView as $textView,textViewCss as $textViewCss,TextViewBase,TextViewStyles};