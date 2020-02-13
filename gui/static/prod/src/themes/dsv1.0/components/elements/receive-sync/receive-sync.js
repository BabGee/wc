import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { ReceiveSyncBase } from "../../../../../elements/base/receive-sync.js";
import { ReceiveSyncStyles } from "./receive-sync-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ReceiveSync extends ReceiveSyncBase {
  static get styles() {
    return [ReceiveSyncStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
 
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

        `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  onMqttMessage(message) {
    super.onMqttMessage(message);
    var self = this;
    console.log('on-mqtt-message');
    /*
        var payload = JSON.parse(message.payloadString);
        console.info(payload);
        self.$.datasource._parsePayload(payload);
        */
  }

}

window.customElements.define(ReceiveSync.is, ReceiveSync);