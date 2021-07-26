import{utilsMixin,mqttMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const ReceiveSyncBase=class extends utilsMixin(mqttMixin(BaseElement)){static get is(){return"receive-sync"}static get properties(){return{icon:String,text:String,name:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);let self=this;if(self.e.kind){try{self.register(self,self.e.kind)}catch(e){console.error(e)}}}onMqttMessage(message){super.onMqttMessage(message);this;console.log("on-mqtt-message")}init(pElement,loader){super.init(pElement,loader);this.required=pElement.min&&0<pElement.min;this.name=ReceiveSyncBase.toTitleCase(pElement.name);this.text=ReceiveSyncBase.toTitleCase(pElement.defaultValue)}};var receiveSync={ReceiveSyncBase:ReceiveSyncBase};const ReceiveSyncStyles=css`

`;var receiveSyncCss={ReceiveSyncStyles:ReceiveSyncStyles};class ReceiveSync extends ReceiveSyncBase{static get styles(){return[ReceiveSyncStyles,css`
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

        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}onMqttMessage(message){super.onMqttMessage(message);this;console.log("on-mqtt-message")}}window.customElements.define(ReceiveSync.is,ReceiveSync);export{receiveSync as $receiveSync,receiveSyncCss as $receiveSyncCss,ReceiveSyncBase,ReceiveSyncStyles};