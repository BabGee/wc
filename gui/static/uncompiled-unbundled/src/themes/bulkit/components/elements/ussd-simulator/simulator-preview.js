import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const CONNECTION_BEG = 'BEG';
export const CONNECTION_END = 'END';
export const CONNECTION_CON = 'CON';
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class UssdSimulatorPreview extends LitElement {
  constructor() {
    super();
    this.state = CONNECTION_CON;
  }

  static get properties() {
    return {
      menus: String,
      connection: String,
      state: String
    };
  }

  render() {
    return html`
        <style>
        *{
            box-sizing: border-box;
        }

      :host {
        display: block;
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
        background-color: black;
        color: white;
        border:1px solid gray;

        padding: 5px;
        
        /* 
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        text-align: center;
         */
        will-change: transform;
        transform: translate3d(0, 100%, 0);
        transition-property: visibility, transform;
        transition-duration: 0.2s;
        visibility: hidden;
      }
      :host([active]) {
        visibility: visible;
        transform: translate3d(0, 0, 0);
      }
      
      .white-space-pre {
            white-space: pre-wrap;
        }
      </style>


    <p class="white-space-pre">${this.menus}</p>
    <br>
    
    ${this.state === CONNECTION_CON ? html`
    <input type="text" id="selectionInput" style="width:100%;">
    ` : html``}
    

    <div style="display:flex;flex-direction:row;margin-top:5px;margin-bottom:5px;">
    
    <input type="submit" @click=${this.cancel} value="Cancel" style="flex:1">
    ${this.state === CONNECTION_CON ? html`
    <input type="submit" @click=${this.submit} value="Send" style="flex:1">
    ` : html``}
    </div>
    
    `;
  }

  cancel(evt) {
    evt.preventDefault();
    const event = new CustomEvent('cancel', {
      detail: {}
    });
    this.dispatchEvent(event);
  } // attach on enter key press event


  submit(evt) {
    evt.preventDefault();
    const selectionInput = this.shadowRoot.querySelector('#selectionInput'); // get current input

    const selection = selectionInput.value; // clear input

    selectionInput.value = ''; // fire event

    const event = new CustomEvent('submit', {
      detail: {
        selection: selection
      }
    });
    this.dispatchEvent(event);
  }

  updateDisplay(menuString) {
    this.menus = menuString;
  }

  setState(state) {
    this.state = state;
  }

}

customElements.define('ussd-simulator-preview', UssdSimulatorPreview);