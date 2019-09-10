import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { CountdownElementBase } from "../../../../elements/base/countdown-element.js";

class CountdownElement extends CountdownElementBase {
  render() {
    return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <h3 style="text-align: center">${this.name}</h3>
        <h2 style="text-align: center">${this.timeLeft.hours} hrs : ${this.timeLeft.minutes} mins : ${this.timeLeft.seconds} s</h2>
        `;
  }

  static get properties() {
    return {};
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(CountdownElement.is, CountdownElement);