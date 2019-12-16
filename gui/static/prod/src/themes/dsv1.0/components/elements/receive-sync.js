import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{ReceiveSyncBase}from"../../../../elements/base/receive-sync.js";class ReceiveSync extends ReceiveSyncBase{renderDefault(){return html`
 
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

        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}onMqttMessage(message){super.onMqttMessage(message);this;console.log("on-mqtt-message")}}window.customElements.define(ReceiveSync.is,ReceiveSync);