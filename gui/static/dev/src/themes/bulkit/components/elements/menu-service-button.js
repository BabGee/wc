import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import { MenuServiceButtonBase } from "../../../../elements/base/menu-service-button.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class MenuServiceButton extends MenuServiceButtonBase {
  renderDefault() {
    return html`
 ${SharedStyles}
         <style>
            .ccc {
                width : 100%;
                min-width: 10em;
                padding: 1em 0.5em;
                text-align: center;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -ms-flex-direction: column;
                -webkit-flex-direction: column;
                flex-direction: column;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                -ms-flex: 1 1 0.000000001px;
                -webkit-flex: 1;
                flex: 1;
                -webkit-flex-basis: 0.000000001px;
                flex-basis: 0.000000001px;
                margin-bottom: 10px;
                margin-top: 10px;
            }
            .feature-wrap {
                font-size: 48px;
                padding: 32px;
                border-radius: 100%;
                text-align: center;
                background: blue;
                color: #ffffff;
                box-shadow: inset 0 0 0 5px #f2f2f2;
                -webkit-box-shadow: inset 0 0 0 5px #f2f2f2;
                -webkit-transition: 500ms;
                -moz-transition: 500ms;
                -o-transition: 500ms;
                transition: 500ms;
            }

            h3{
                font-weight: 300;
            }
            .feature-wrap:hover {
                box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
                opacity: 0.6;
                transform: scale(1.1);
            }
            iron-icon {
                color: #ffffff;
            }
        </style>
          <div class="box">
              <div id="container">
                <div class="ccc">
                    <div class="feature-wrap">
                    <iron-icon style="width:88px !important;height: 88px !important;"
                               icon="[[icon]]"></iron-icon>
                    </div>
                    <h3>${this.name}</h3>
                </div>
              </div>
          </div>
        `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

window.customElements.define(MenuServiceButton.is, MenuServiceButton);