import{html,ReceiveSyncBase}from"../../../../components/adaptive-ui.js";class ReceiveSync extends ReceiveSyncBase{renderDefault(){return html`
 
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