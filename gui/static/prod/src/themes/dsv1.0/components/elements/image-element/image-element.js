import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { ImageElementBase } from "../../../../../elements/base/image-element.js";
import { ImageElementStyles } from "./image-element-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ImageElement extends ImageElementBase {
  static get styles() {
    return [ImageElementStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
        
        <figure class="image is-128x128">
  <img src="${this.e.defaultValue || 'https://bulma.io/images/placeholders/256x256.png'}">
</figure>
        `;
  }

}

customElements.define(ImageElement.is, ImageElement);