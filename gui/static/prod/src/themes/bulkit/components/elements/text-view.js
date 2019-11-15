import{html,SharedStyles,TextViewBase}from"../../../../components/adaptive-ui.js";class TextView extends TextViewBase{renderDefault(){return html`
 ${SharedStyles}
 <div class="column" style="margin:auto">
<div class="field">
<article class="message is-primary">
  <div class="message-header has-text-centered" style="display: block;">
    ${this.name}
  </div>
  <div class="message-body has-text-centered">
   ${this.text}
  </div>
</article>
</div>
</div>

        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(TextView.is,TextView);