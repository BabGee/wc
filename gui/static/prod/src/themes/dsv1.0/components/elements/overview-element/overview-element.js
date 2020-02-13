import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { BaseElement } from "../../../../../core/base-element.js";
import { OverviewElementStyles } from "./overview-element-css.js";

class OverviewElement extends BaseElement {
  static get is() {
    return 'overview-element';
  }

  static get styles() {
    return [OverviewElementStyles, css`
            :host {
              display: block;
            }
          `];
  }

  render() {
    return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">


        <div class="container mipay-overview">
            <div class="columns">
                <div class="column">this is the left side</div>
                <div class="column">
                    <div class="heading">
                        <h1 class="title">this is the title area</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto dolore repudiandae odit vel libero, eius ad velit eaque non beatae. Ut qui nostrum blanditiis laboriosam eligendi non dolore sapiente.</p>
                    <a href="$1" class="button btn">Get started</a>
                </div>
            </div>
        </div>
        `;
  }

}

customElements.define(OverviewElement.is, OverviewElement);