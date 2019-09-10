import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../elements/base/navbar-base.js";
import "../../../../../node_modules/fa-icons/index.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar4 extends NavbarBase {
  render() {
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

.has-text-white a {
 	color: #fff;
 }

#site-name {
	font-size: 25px;
}

#section5 nav.navbar div.navbar-menu a.is-active {
    border-bottom-color: #3273dc;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    margin-bottom: -1px;
}
#section5 a.is-active:hover {
	border-bottom-color: #3273dc;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    color: #4a4a4a;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
}
.icon{
  margin: 0px 2px;
}

      </style>
    

    <div id="section5" class="bind-box has-background-dark has-text-white has-text-weight-semibold">
        <div class="block">
          <nav class="level">
              <!-- left side -->
              <div class="level-left">
                <div class="level-item">
                  <div class="field">
                    <p class="control">
                      <span class="icon">
                        <fa-icon class="fab fa-facebook-square" color="#fff" size="16px"></fa-icon>
                      </span>
                      <span class="icon">
                      <fa-icon class="fab fa-instagram" color="#fff" size="16px"></fa-icon>
                      </span>
                      <span class="icon">
                      <fa-icon class="fab fa-twitter" color="#fff" size="16px"></fa-icon>
                      </span>
                      <span class="icon">
                      <fa-icon class="fab fa-pinterest-p" color="#fff" size="16px"></fa-icon>
                      </span>
                      <span class="icon">
                      <fa-icon class="fab fa-google-plus" color="#fff" size="16px"></fa-icon>
                      </span>
                    </p>
                  </div>
                </div>
              </div>                                                        
              <!-- right side -->
              <div class="level-right">
                <p class="level-item"><a href="">EN - RU</a></p>
              </div>
            </nav>
              <hr class="navbar-divider" clear="all">
            <nav class="navbar has-background-dark has-text-white">
              <div id="site-name" class="navbar-brand has-text-weight-semibold">
                <a class="navbar-item" href="https://bulma.io">
                  <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28">
                </a>
              </div>
              <div class="navbar-menu is-spaced is-active">
                <a class="navbar-item is-active has-text-link" @click="${() => this.activePage('home')}">
                  Home
                </a>
                <a class="navbar-item" @click="${() => this.activePage('about')}">
                  About
                </a>
                <a class="navbar-item" @click="${() => this.activePage('portfolio')}">
                  Portfolio
                </a>
                <a class="navbar-item" @click="${() => this.activePage('services')}">
                  Services
                </a>
                <a class="navbar-item" @click="${() => this.activePage('news')}">
                  News
                </a>
                <a class="navbar-item" @click="${() => this.activePage('contacts')}">
                  Contacts
                </a>
              </div>
              <div class="navbar-menu">
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-rounded is-small is-dark">Sign In</a>
                      <a class="button is-rounded is-small is-link">Sign Up</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        </div>
        </div>

     `;
  }

  activePage(mainNavLink) {
    const links = this.shadowRoot.querySelector('.navbar-menu').querySelectorAll('a');

    if (mainNavLink === 'home') {
      links.forEach(link => link.className = 'navbar-item');
      links[0].className = 'navbar-item is-active has-text-link';
    } else if (mainNavLink === 'about') {
      links.forEach(link => link.className = 'navbar-item');
      links[1].className = 'navbar-item is-active has-text-link';
    } else if (mainNavLink === 'portfolio') {
      links.forEach(link => link.className = 'navbar-item');
      links[2].className = 'navbar-item is-active has-text-link';
    } else if (mainNavLink === 'services') {
      links.forEach(link => link.className = 'navbar-item');
      links[3].className = 'navbar-item is-active has-text-link';
    } else if (mainNavLink === 'news') {
      links.forEach(link => link.className = 'navbar-item');
      links[4].className = 'navbar-item is-active has-text-link';
    } else if (mainNavLink === 'contacts') {
      links.forEach(link => link.className = 'navbar-item');
      links[5].className = 'navbar-item is-active has-text-link';
    }
  }

  static get is() {
    return 'navbar-4';
  }

}

customElements.define(Navbar4.is, Navbar4);