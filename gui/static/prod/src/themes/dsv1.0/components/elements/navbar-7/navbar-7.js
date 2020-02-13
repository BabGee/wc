import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../../elements/base/navbar-base.js";
import { NavbarSevenStyles } from "./navbar-7-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar7 extends NavbarBase {
  static get styles() {
    return [NavbarSevenStyles, css`
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
              <nav class="navbar is-dark">
                <div class="navbar-brand">
                  <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                  <a class="navbar-item" href="#">
                    <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                  </a>
                </div>

                <div class="navbar-menu">
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="buttons has-text-weight-semibold">
                        <a class="button is-rounded is-small text-is-orange">Sign In</a>
                        <a class="button is-small is-rounded bg-is-orange">Sign Up</a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
          </div>
        </div>

     `;
  }

  static get is() {
    return 'navbar-7';
  }

}

customElements.define(Navbar7.is, Navbar7);