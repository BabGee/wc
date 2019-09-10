import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { spacerElementBase } from "../../../../elements/base/spacer-element.js";

class SpacerElement extends spacerElementBase {
  render() {
    return html`
        <style>
            .spacer{
                margin-top: 90px
            }
        </style>
        <div class="spacer"></div>
    `;
  }

}

customElements.define(SpacerElement.is, SpacerElement);