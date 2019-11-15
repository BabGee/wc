import{html,TextViewBase}from"../../../../components/adaptive-ui.js";class TextView extends TextViewBase{renderDefault(){return html`

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

        `}}window.customElements.define(TextView.is,TextView);