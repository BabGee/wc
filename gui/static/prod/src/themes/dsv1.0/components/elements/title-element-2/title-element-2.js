import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { BaseElement } from "../../../../../core/base-element.js";
import { TitleElement2Styles } from "./title-element-2-css.js";

class TitleElement2 extends BaseElement {
  static get styles() {
    return [TitleElement2Styles, css`
            :host {
              display: block;
            }
          `];
  }

  render() {
    return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
           
            <div class="container">
                <div class="heading">
                    <h1 class="title has-text-centered">${this.e.name}</h1>
                    <p class="sub-title has-text-centered">${this.e.defaultValue}</p>
                </div>
            </div>
        `;
  }

  static get is() {
    return 'title-element-2';
  }

}

customElements.define(TitleElement2.is, TitleElement2);