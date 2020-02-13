import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { spacerElementBase } from "../../../../../elements/base/spacer-element.js";
import { SpacerElementStyles } from "./spacer-element-css.js";

class SpacerElement extends spacerElementBase {
  static get styles() {
    return [SpacerElementStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
        
        <div class="spacer" style="width: ${this.getWidth()};height: ${this.getHeight()};"></div>
    `;
  }

}

customElements.define(SpacerElement.is, SpacerElement);