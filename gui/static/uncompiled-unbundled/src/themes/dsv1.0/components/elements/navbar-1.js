import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../elements/base/navbar-base.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar1 extends NavbarBase {
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


#section1 nav.navbar div.navbar-menu div.navbar-end a {
	color: #d4d3d3;
}
#section1 .navbar .navbar-menu .navbar-end a.is-active {
	color: #2f75ec;
	list-style: disc;
}
#section1 .navbar .navbar-menu .navbar-end a.is-active::before {
	color: #2f75ec;
	content: "•"  ; /* &#8226; &#160; */
	font-size: 18px;
}
#section1 .navbar .navbar-menu .navbar-start a:hover {
	color: #2f75ec;
}

#site-name {
	font-size: 25px;
}

      </style>
    <div id="section1" class="bind-box">
        <nav class="navbar">
          <div id="site-name" class="navbar-brand has-text-weight-semibold">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active" @click="${() => this.activePage('home')}">
                Home
              </a>
              <a class="navbar-item" @click="${() => this.activePage('about')}">
                About
              </a>
              <a class="navbar-item" @click="${() => this.activePage('portfolio')}">
                Portfolio
              </a>
              <a class="navbar-item" @click="${() => this.activePage('blog')}">
                Blog
              </a>
              <a class="navbar-item" @click="${() => this.activePage('contacts')}">
                Contacts
              </a>
            </div>
          </div>
        </nav>
      </div>
     `;
  }

  activePage(mainNavLink) {
    const links = this.shadowRoot.querySelector('.navbar-menu').querySelectorAll('a');

    if (mainNavLink === 'home') {
      links.forEach(link => link.className = 'navbar-item');
      links[0].className = 'navbar-item is-active';
    } else if (mainNavLink === 'about') {
      links.forEach(link => link.className = 'navbar-item');
      links[1].className = 'navbar-item is-active';
    } else if (mainNavLink === 'portfolio') {
      links.forEach(link => link.className = 'navbar-item');
      links[2].className = 'navbar-item is-active';
    } else if (mainNavLink === 'blog') {
      links.forEach(link => link.className = 'navbar-item');
      links[3].className = 'navbar-item is-active';
    } else if (mainNavLink === 'contacts') {
      links.forEach(link => link.className = 'navbar-item');
      links[4].className = 'navbar-item is-active';
    }
  }

  static get is() {
    return 'navbar-1';
  }

}

customElements.define(Navbar1.is, Navbar1);