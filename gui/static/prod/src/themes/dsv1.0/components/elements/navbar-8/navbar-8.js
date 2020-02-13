import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../../elements/base/navbar-base.js";
import { NavbarEightDarkStyles } from "./navbar-8-dark-css.js";
import { NavbarEightDefaultStyles } from "./navbar-8-default-css.js";
import "../../../../../../node_modules/fa-icons/index.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar8 extends NavbarBase {
  constructor() {
    super();
  }

  static get properties() {
    return {
      darkMode: {
        type: Boolean,
        reflect: true
      }
    };
  }

  get styles() {
    console.log("dark mode");
    return [this.darkModeUpdator, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    // this is dark
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
  
    <div class="bind-box">
      <div class="block">
        <nav class="level">
            <div class="has-text-left">
              <p class="control">
                <span class="icon">
                <fa-icon class="fab fa-facebook-square" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-instagram" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-twitter" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-pinterest-p" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-google-plus" color="#ffffff" size="16px"></fa-icon>
                </span>
              </p>
            </div>
          <p class="level-item has-text-centered">
            <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
          </p>
          <p class="level-item has-text-centered">
            <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </p>
        </nav>
      </div>
    </div>


     `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  darkModeUpdator() {
    this.darkMode = this.e.details.darkMode;

    if (this.darkMode) {
      return NavbarEightDarkStyles;
    } else {
      return NavbarEightDefaultStyles;
    }
  }

  static get is() {
    return 'navbar-8';
  }

}

customElements.define(Navbar8.is, Navbar8);