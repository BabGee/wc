import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { SubmitElementBase } from "../../../../elements/base/submit-element.js";

class SubmitElement extends SubmitElementBase {
  render() {
    return html`
        ${SharedStyles}
        <style>
        .button.is-primary.is-rounded.is-fullwidth {
          width:200px;
          
        }
        @media (max-width: 350px) {
          a.button.is-primary.is-rounded.is-fullwidth {
               width:150px;
          }
        </style>
         <div class="column" >
        <div class="field"style="margin-bottom: 20px;">
        <a class="button is-primary  is-rounded is-fullwidth" style="margin:  auto;" @click=${this._onAction}>
            <span>${this.name}</span>
        </a>
        </div>
        </div>
        `;
  }

  _onAction(evt) {
    evt.preventDefault();
    this.submit();
  }

}

customElements.define(SubmitElement.is, SubmitElement);