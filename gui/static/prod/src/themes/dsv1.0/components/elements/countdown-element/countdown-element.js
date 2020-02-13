import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { CountdownElementBase } from "../../../../../elements/base/countdown-element.js";
import { CountdownElementStyles } from "./countdown-element-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CountdownElement extends CountdownElementBase {
  static get styles() {
    return [CountdownElementStyles, css`
        :host {
          display: block;
        }
      `];
  }

  createRenderRoot() {
    return this;
  }

  renderDefault() {
    return html`
        
        <h3 style="text-align: center">${this.name}</h3>
        <h2 style="text-align: center">${this.timeLeft.hours} hrs : ${this.timeLeft.minutes} mins : ${this.timeLeft.seconds} s</h2>
        `;
  }

}

customElements.define(CountdownElement.is, CountdownElement);