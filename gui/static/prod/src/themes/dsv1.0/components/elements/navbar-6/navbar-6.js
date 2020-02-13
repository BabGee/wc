import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../../elements/base/navbar-base.js";
import { NavbarSixStyles } from "./navbar-6-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar6 extends NavbarBase {
  static get styles() {
    return [NavbarSixStyles, css`
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
              <nav class="navbar has-background-dark">
                <div class="navbar-brand">
                  <a class="navbar-item" href="#">
                    <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                  </a>
                  <a role="button" class="navbar-burger is-active flexthis" aria-label="menu" aria-expanded="false" >
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu is-active">
                  <div class="navbar-end">
                  ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                  <a href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/0/" 
                  class="navbar-item ${pageGroupIndex == this._pageGroup ? 'is-purple' : ''}" >
                      ${pageGroup.title}
                  </a>`)}
                  </div>
                </div>
              </nav>
          </div>
        </div>

     `;
  }

  static get is() {
    return 'navbar-6';
  }

}

customElements.define(Navbar6.is, Navbar6);