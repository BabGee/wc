import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../elements/base/navbar-base.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar5 extends NavbarBase {
  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>

nav {
	font-size: 16px;
}
      .bind-box {
	margin-bottom: 1.5rem;
	background-color: white;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
	color: #4a4a4a;
    display: block;
    padding: 1.25rem 4.5rem;
    
}

.bind-box-4block-left {
  padding: 0 0 0 4.5rem;
}

.has-text-white a {
 	color: #fff;
 }

#site-name {
	font-size: 25px;
}

      </style>
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