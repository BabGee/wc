import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../../elements/base/navbar-base.js";
import { NavbarFiveStyles } from "./navbar-5-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar5 extends NavbarBase {
  static get styles() {
    return [NavbarFiveStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

    <div class="bind-box is-paddingless">
          <div class="block bind-box-4block-left">
              <div class="columns">
                <div class="column is-half">
                  <nav class="navbar">
                    <div class="navbar-brand">
                      <a class="navbar-item" href="#">
                        <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                      </a>
                      <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="column has-background-dark">
                  <div class="navbar-menu is-active is-size-7 is-uppercase has-text-white">
                    <div class="navbar-end block">
                      <a class="navbar-item has-text-weight-semibold">
                        Sign Up
                      </a>
                      <a class="navbar-item">
                        Sign In
                      </a>
                      <div class="bind-box-4block-right"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>


     `;
  }

  static get is() {
    return 'navbar-5';
  }

}

customElements.define(Navbar5.is, Navbar5);