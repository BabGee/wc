import { LitElement, html } from "../../../../../../node_modules/lit-element/lit-element.js";
import { register } from "../../../register.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LoaderElement extends LitElement {
  render() {
    return html`
        <style>
        .loader-wrapper{
            width: 100%;
            padding: 30px;
        }
        #loader{
            border: 9px solid transparent; 
            border-top: 9px solid #3498db; 
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 2s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .center{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        </style>
        <div class="loader-wrapper center">
            <div id="loader"></div>
        </div>
        `;
  }

  static get is() {
    return 'loader-element';
  }

}

register(LoaderElement);