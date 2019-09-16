import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../elements/base/navbar-base.js";
import "../../../../../node_modules/fa-icons/index.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar2 extends NavbarBase {
  static get properties() {
    return {
      newProductsMenuHidden: Boolean
    };
  }

  constructor() {
    super();
    this.newProductsMenuHidden = true;
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

    <style>
nav {
    font-size: 16px;
}

a figure img#user-pic {
    border: solid 3px #157cf8;
}

.bind-box {
    margin-bottom: 1.5rem;
    background-color: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem 4.5rem;
    
}

.menu-link-image {
    text-align: center;
    color: white;
    font-size: 12px;
    font-weight: 300;
}

.menu-link-image-label {
    position: absolute;
    top: 10px;
    left: -4px;
    background-color: #3273dc;
    padding: 3px 5px;
}

#site-name {
    font-size: 25px;
}

#section2 .navbar .navbar-menu .navbar-start a, #section11 .navbar .navbar-menu a, #section12 .block .level a {
    color: #d4d3d3;
}

#section2 .navbar .navbar-menu .navbar-start a:hover, #section11 .navbar .navbar-menu a:hover, #section12 .block .level a:hover {
    color: #4a4a4a;
}

#section2 .navbar .navbar-menu .navbar-start a.is-active, #section11 .navbar .navbar-menu a.is-active, #section12 .block .level a.is-active {
    color: #4a4a4a;
}

#section2 div.block nav.level div.level-left p {
    padding: 0 10px;
}

#section2 .tabs a {
    align-items: center;
    border-bottom-color: #fff;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    color: #4a4a4a;
    font-weight: 500;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
}

#section2 .tabs li.is-active a {
    border-bottom-color: #3273dc;
}

#section3 {
    display: none;
}

#section3 aside p.menu-label a {
    font-weight: 500;
    color: #4a4a4a;
}

#section3 aside p.menu-label a:hover {
    border-bottom-color: #3273dc;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    color: #4a4a4a;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
}

#section3 aside ul.menu-list li a.news::after, aside.menu ul.menu-list li a.news::after {
    color: #fff;
    content: " new ";
    font-size: 10px;
    background-color: #3273dc;
    text-align: center;
}

.icon {
  margin-left:2px;
  margin-right:2px;
}
</style>

    <div id="section2" class="bind-box">
        <nav class="navbar">
          <div class="navbar-menu">
            <div class="navbar-start">
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
          <div id="site-name" class="navbar-brand has-text-weight-semibold">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item has-dropdown is-active">
                <a @click="${() => this.activePage('user')}" class="navbar-item">
                  Patrick Lawrence
                </a>
                <a class="navbar-link">
                  <figure class="image is-32x32">
                    <img id="user-pic" class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
                  </figure>
                </a>
                <!-- <div class="navbar-dropdown">
                  <a class="navbar-item">
                    Settings
                  </a>
                  <a class="navbar-item is-active">
                    More...
                  </a>
                  <hr class="navbar-divider">
                  <div class="navbar-item">
                    Logout
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </nav>
        <hr class="navbar-divider" clear="all">

        <div class="block">
          <nav class="level">
          <!-- left side -->
            <div class="level-left">
              <div class="tabs">
                <ul>
                  <li><a @click="${() => this.dropDownMenu('newProducts')}">New Products</a></li>
                  <li><a @click="${() => this.dropDownMenu('men')}" >Men</a></li>
                  <li><a @click="${() => this.dropDownMenu('women')}">Women</a></li>
                  <li><a @click="${() => this.dropDownMenu('kids')}">Kids</a></li>
                  <li><a @click="${() => this.dropDownMenu('topSales')}">Top Sales</a></li>
                </ul>
              </div>
            </div>
            <!-- right side -->
            <div class="level-right">
              <div class="level-item">
                <div class="field">
                  <p class="control">
                    <span class="icon">
                      <fa-icon class="fas fa-search" color="#4A4A4A" size="16px"></fa-icon>
                    </span>
                    <span class="icon">
                      <fa-icon class="fas fa-heart" color="#4A4A4A" size="16px"></fa-icon>
                    </span>
                    <span class="icon">
                    <fa-icon class="fas fa-shopping-cart" color="#4A4A4A" size="16px"></fa-icon>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>




      <!-- dropdown content -->

      <div id="section3" class="bind-box">
        <div class="columns">
        <div class="column">
          <aside class="menu">
            <p class="menu-label">
            <a href="">Outerwear</a>
            </p>
            <ul class="menu-list">
              <li><a href="">Coats</a></li>
              <li><a href="">Jacket</a></li>
              <li><a href="" class="news">Cloaks</a></li>
              <li><a href="">Winter Jackets</a></li>
              <li><a href="">Wind Breakers</a></li>
            </ul>
            <p class="menu-label">
            Jumpers & Cardigans
            </p>
            <ul class="menu-list">
              <li><a href="">Vests</a></li>
              <li><a href="">Jumpers</a></li>
              <li><a href="">Sweaters</a></li>
              <li><a href="">Cardigans</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <aside class="menu">
            <p class="menu-label">
            Pants & Jeans
            </p>
            <ul class="menu-list">
              <li><a href="">Classic</a></li>
              <li><a href="" class="news">Sport</a></li>
              <li><a href="">Jeans</a></li>
              <li><a href="">Daily</a></li>
              <li><a href="">Warm</a></li>
            </ul>
            <p class="menu-label">
            T-Shirts & Shirts
            </p>
            <ul class="menu-list">
              <li><a href="">T-Shirts</a></li>
              <li><a href="" class="news">Polo</a></li>
              <li><a href="">Shirts</a></li>
              <li><a href="">Undershirts</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <aside class="menu">
            <p class="menu-label">
            Shoes
            </p>
            <ul class="menu-list">
              <li><a href="">Sport</a></li>
              <li><a href="">Classic</a></li>
              <li><a href="" class="news">Essentials</a></li>
              <li><a href="">Evening</a></li>
              <li><a href="">Slippers</a></li>
            </ul>
            <p class="menu-label">
            Underwears
            </p>
            <ul class="menu-list">
              <li><a href="">Boxers</a></li>
              <li><a href="">Briefs</a></li>
              <li><a href="">Complects</a></li>
              <li><a href="">Shorts</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <a class="menu-link-image is-relative">
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/480x320.png">
                <div class="menu-link-image-label">Collection</div>
              </figure>
          </a><br />

          <a class="menu-link-image">
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/480x320.png">
                <div class="menu-link-image-label">Popular</div>
              </figure>
          </a>
        </div>

      </div>
      </div>

     `;
  }

  activePage(mainNavLink) {
    const links = this.shadowRoot.querySelector('.navbar').querySelectorAll('a');
    const userLink = this.shadowRoot.querySelector('.navbar-end').querySelector('a');

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
    } else if (mainNavLink === 'user') {
      userLink.className === 'navbar-item is-active' ? userLink.className = 'navbar-item' : userLink.className = 'navbar-item is-active';
    }
  } // end of activePage()


  dropDownMenu(linkName) {
    const newProductsMenu = this.shadowRoot.getElementById('section3');
    const links = this.shadowRoot.querySelector('.tabs').querySelectorAll('li');

    if (linkName === 'newProducts') {
      links.forEach(link => link.classList.remove('is-active'));
      links[0].classList.add('is-active');
      this.toggleNewProductsMenu(newProductsMenu);
    } else if (linkName === 'men') {
      links.forEach(link => link.classList.remove('is-active'));
      links[1].classList.add('is-active');
    } else if (linkName === 'women') {
      links.forEach(link => link.classList.remove('is-active'));
      links[2].classList.add('is-active');
    } else if (linkName === 'kids') {
      links.forEach(link => link.classList.remove('is-active'));
      links[3].classList.add('is-active');
    } else if (linkName === 'topSales') {
      links.forEach(link => link.classList.remove('is-active'));
      links[4].classList.add('is-active');
    }
  }

  toggleNewProductsMenu(section) {
    if (this.newProductsMenuHidden === true) {
      section.style.display = 'block';
      this.newProductsMenuHidden = false;
    } else {
      section.style.display = 'none';
      this.newProductsMenuHidden = true;
    }
  }

  static get is() {
    return 'navbar-2';
  }

}

customElements.define(Navbar2.is, Navbar2);