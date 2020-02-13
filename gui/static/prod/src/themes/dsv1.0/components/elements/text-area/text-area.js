import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { TextAreaBase } from "../../../../../elements/base/text-area.js";
import { Logger } from "../../../../../core/logger.js";
import { TextAreaStyles } from "./text-area-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TextArea extends TextAreaBase {
  static get styles() {
    return [TextAreaStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">

 <div class="text-area">
        <div class="animait">

            <div class="form">
            <div class="field">
            <div class="control">
   
                <textarea class="textarea" name="" id="input" @keyup="${this.count}">${this.value}</textarea>

                <label for="name" class="label-name"><span class="content-name">${this.e.name}</span></label>
                <div class="counter" id="count"><p>0/${this.max}</p></div>
            </div>
            </div>
            </div>
            <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            
        </div>
    </div>


 `;
  }

  getInput() {
    return this.qs('#input');
  }

  getValue() {
    return this.getInput().value;
  }

  valid(validation) {
    if (this.qs('#warning-text').style.display === 'block') {
      this.qs('#warning-text').style.display = 'none';
    }

    Logger.i.debug(validation);

    if (validation) {}
  }

  invalid(validation) {
    this.qs('#warning-text').style.display = 'block';
    Logger.i.debug(validation);
  }

  count() {
    const valueLength = this.shadowRoot.querySelector('#input').value.length;
    this.shadowRoot.querySelector('#count').textContent = valueLength + '/' + this.max;

    if (this.e.max != null && valueLength > this.e.max) {
      this.shadowRoot.querySelector('#count').style.color = '#FF7273';
    } else {
      this.shadowRoot.querySelector('#count').style.color = '#cecece';
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    console.log(this.e.max);

    if (this.e.max == null) {
      this.max = 'unlimited';
    } else {
      this.max = this.e.max;
    }
  }

}

window.customElements.define(TextArea.is, TextArea);