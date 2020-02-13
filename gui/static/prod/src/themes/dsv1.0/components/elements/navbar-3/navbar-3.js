import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../../elements/base/navbar-base.js";
import { NavbarThreeStyles } from "./navbar-3-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar3 extends NavbarBase {
  static get styles() {
    return [NavbarThreeStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

    <div class="bind-box has-background-dark">
          <div class="block">
            <nav class="level has-text-white">
            <p id="site-name" class="level-item has-text-centered has-text-weight-semibold">
              <a class="link">${this.gateway.name}</a>
            </p>
            ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
            <p class="level-item has-text-centered">
            <a href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/0/" 
            class="link is-info ${pageGroupIndex == this._pageGroup ? 'is-active' : ''}" >
                ${pageGroup.title}
            </a>
            </p>
            `)}
          </nav>
        </div>
      </div>



     `;
  }

  static get is() {
    return 'navbar-3';
  }

}

customElements.define(Navbar3.is, Navbar3);