import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { InputStyles } from "../../styles/shared.js";
import { RENDER_M_DEFAULT, RENDER_M_SIDE_BY_SIDE } from "../../../../components/e-list.js";
import { enterSubmitMixin } from "../../../../components/mixins/enter-submit-mixin.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export const inputMixin = BaseClass => class extends enterSubmitMixin(BaseClass) {
  renderService() {
    if (this.renderMode === RENDER_M_SIDE_BY_SIDE) {
      return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <style>
          div.input-item label{
            font-size: 12px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.17;
            letter-spacing: normal;
            color: #202124;
          }
          div.input-item input{
            width: 100%;
            height: 40px;
            border-radius: 6px;
            border: solid 1px #ededed;
            background-color: #f6f6f6;
            font-size: 14px;
            font-weight: 500;
            line-height: 1;
            color: #202124;
            padding: 16px 13.5px;
          }
        </style>
        <div class="columns input-item">
          <div class="column is-one-quarter" style="display: flex; align-items: center;">
            <label class="label is-uppercase">${this.e.name}</label>
          </div>
          <div class="column">
            <div class="field">
              <div class="control">
                <input class="input" id="input" type="${this.type}" placeholder="${this.e.name}">
              </div>
            </div>
          </div>
        </div>
        `;
    } else {
      // RENDER_M_DEFAULT
      return html`
    <style>
    .row{
        width: 100%;
    }
    .row .inp-right{
        /* width: 5%; */
        /*height: 100px;*/
    }
    .row .inp-right input{
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
        padding: 18px calc(.625em - 1px) 18px 20px;
    }
    .row .inp-right input::-webkit-input-placeholder { /* Edge */
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }
    .row .inp-right input :-ms-input-placeholder { /* Internet Explorer 10-11 */
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }
    .row .inp-right input ::placeholder {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }
    .row .inp-right .field .label{
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }

    .row .inp-right .field.error, 
    .row .inp-right .field.error input, 
    .row .inp-right .field.error .icon{
        color: #ff3860;
        fill: #ff3860;
    }
    .row .inp-right .field.error{
        font-weight: normal;
        font-size: 12px;
    }

    .row .inp-right .field.success, 
    .row .inp-right .field.success input, 
    .row .inp-right .field.success svg{
        color: #23d160;
        fill: #23d160;
    }
    .row .inp-right .field.success{
        font-weight: normal;
        font-size: 12px;
    }
    #danger-icon{
     visibility:hidden;
    }
   
    #check-icon{
      visibility:hidden;
    }
    #warning-text{
      display:none;

    }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column row">
      <div class="inp-right">
        <label class="label">${this.e.name}</label>
        <!-- For success message use 'is-success' within the 'input' element and add is-danger whithin the input tag-->
        <!-- For error message use 'is-danger' within the 'input' element and add is-danger whithin the input tag-->
        <!--- Error message is commented at the bottom of this component --->
          <div class="field">
              <div class="control has-icons-right">
                  <input class="input" id="input" type="${this.type}" placeholder="${this.e.name}">
                  <span id="danger-icon" class="icon is-small is-right">
                  <fa-icon class="fas fa-exclamation-triangle icon" size="1em" color="#ff3860"></fa-icon>
                  </span>
                  <span id="check-icon" class="icon is-small is-right">
                  <fa-icon class="fas fa-check" size="1em" color="#23d160"></fa-icon>
                  </span>
              </div>
              <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
          </div>
      </div>
    </div>
          `;
    }
  }

  renderDefault() {
    return html`
    <style>
      .inp{
        border-radius: 6px!important;
        font-size: 14px!important;
        padding: 20px!important;
        line-height: 1;
        background-color: #fcfcfc!important;
        border: 1px solid #a3a3a4!important;
        box-shadow: 0 0 0 transparent!important;
      }
      #danger-icon{
        visibility:hidden;
       }
      
       #check-icon{
         visibility:hidden;
       }
       #warning-text{
         display:none;
   
       }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="field is-8">
      <label class="label">${this.e.name}</label>
      <div class="control has-icons-right">
        <input class="input inp" id="input" type="${this.type}" placeholder="${this.e.name}">
          <span id="danger-icon" class="icon is-small is-right">
            <fa-icon class="fas fa-exclamation-triangle icon" size="1em" color="#ff3860"></fa-icon>
          </span>
          <span id="check-icon" class="icon is-small is-right">
            <fa-icon class="fas fa-check" size="1em" color="#23d160"></fa-icon>
          </span>
      </div>
      <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
    </div>
          `;
  }

  invalid(validation) {
    const input = this.shadowRoot.querySelector("#input");
    const dangerIcon = this.shadowRoot.querySelector("#danger-icon");
    const checkIcon = this.shadowRoot.querySelector("#check-icon");
    const warningText = this.shadowRoot.querySelector("#warning-text");
    input.className = "input is-danger";
    warningText.style.display = "block";
    dangerIcon.style.visibility = "visible";
    checkIcon.style.visibility = "hidden";
  }

  valid(validation) {
    const input = this.shadowRoot.querySelector("#input");
    const dangerIcon = this.shadowRoot.querySelector("#danger-icon");
    const checkIcon = this.shadowRoot.querySelector("#check-icon");
    const warningText = this.shadowRoot.querySelector("#warning-text");
    input.className = "input is-success";
    warningText.style.display = "none";
    dangerIcon.style.visibility = "hidden";
    checkIcon.style.visibility = "visible";
  }

  getInput() {
    return this.shadowRoot.querySelector('#input');
  }

  getValue() {
    return this.getInput().value;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  get renderMode() {
    return this.pl.renderMode;
  }

  get type() {
    return 'text';
  }

};