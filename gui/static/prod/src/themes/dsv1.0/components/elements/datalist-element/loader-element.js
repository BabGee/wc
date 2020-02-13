import { LitElement, html } from "../../../../../../node_modules/lit-element/lit-element.js";
import { register } from "../../../register.js";
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { LoaderElementStyles } from "./datalist-element-styles/loader-element-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LoaderElement extends LitElement {
  static get styles() {
    return [LoaderElementStyles, css`
            :host {
              display: block;
            }
          `];
  }

  render() {
    return html`
        <div class="loader-wrapper center">
            <div id="loader"></div>
        </div>
        `;
  }

  static get is() {
    return 'loader-element';
  }

}

register(LoaderElement);