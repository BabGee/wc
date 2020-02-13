import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { ServiceButtonBase } from "../../../../../elements/base/service-button.js";
import { ServiceButtonStyles } from "./service-button-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ServiceButton extends ServiceButtonBase {
  static get styles() {
    return [ServiceButtonStyles, css`
            :host {
                display: block;
            }
            `];
  }

  renderDefault() {
    return html`
        <div class="row center-xs">
            <div class="col-xs-6">
                <div class="box">
                    <div id="container">
                        <div  class="ccc">
                            <div class="feature-wrap">
                                <iron-icon style="width:88px !important;height: 88px !important;"
                                           icon="${this.e.icon}"></iron-icon>
                            </div>
                            <h3>${ServiceButton.toTitleCase(this.e.name)}</h3>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        `;
  }

}

customElements.define(ServiceButton.is, ServiceButton);