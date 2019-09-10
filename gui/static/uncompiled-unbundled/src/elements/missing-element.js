import { LitElement, html } from "../../node_modules/lit-element/lit-element.js";

class MissingElement extends LitElement {
  render() {
    return html`
        <style>
            /* CSS rules for your element */
            #content{
                color: red;
                font-size: 17px;
            }

        </style>
        
        <!-- shadow DOM for your element -->
        <div id="content"> Missing Element <strong>${this.msg}</strong></div>`;
  }

  static get is() {
    return 'missing-element';
  } // Declare properties for the element's public API


  static get properties() {
    return {
      msg: String
    };
  }

}

window.customElements.define(MissingElement.is, MissingElement);