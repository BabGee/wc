import { html, LitElement, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { BaseElement } from "../../../../../core/base-element.js";
import { HeroElementStyles } from "./hero-element-css.js";

class HeroElement extends BaseElement {
  static get styles() {
    return [HeroElementStyles, css`
            :host {
              display: block;
            }
          `];
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
      
        <section class="section module ">
            <div class="module-inner">
                <div class="module-wrap">
                    <div class="columns">
                        <div class="column">
                            <h1 class="ii__hero-title">${this.e.name} </h1>
                            <p class="ii__hero-text">${this.e.defaultValue}</p>
                        </div>
                        <div class="column">
                            <div class="ii__hero-image">
                                <img src="${this.e.details.hero_image_src}" alt="hero image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
  }

  static get is() {
    return 'hero-element';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(HeroElement.is, HeroElement);