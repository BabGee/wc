import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { BaseElement } from "../../../../../core/base-element.js";
import { HeroElement3Styles } from "./hero-element-3-css.js";

class HeroElement3 extends BaseElement {
  static get styles() {
    return [HeroElement3Styles, css`
            :host {
              display: block;
            }
          `];
  }

  render() {
    return html`
     
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="hero-container">
            <div class="container">
                <div class="columns row">
                    <div class="column">
                        <div class="hero-iso-image">
                            <img src="${this.e.details.hero_image_src}" />
                        </div>
                    </div>
                    <div class="column">
                        <h1 class="c-title-xl">${this.e.name}</h1>
                        <p class="c-paragraph">${this.e.defaultValue}</p>
                        <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                    </div>
                </div>
            </div
        </div>
        `;
  }

  static get is() {
    return `hero-element-3`;
  }

}

customElements.define(HeroElement3.is, HeroElement3);