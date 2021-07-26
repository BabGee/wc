import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../elements/base/navbar-base.js";
import "../../../../../node_modules/fa-icons/index.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar10 extends NavbarBase {
  static get properties() {
    return {
      categoriesDropDownMenuHidden: Boolean,
      newProductsDropDownMenuHidden: Boolean
    };
  }

  constructor() {
    super();
    this.categoriesDropDownMenuHidden = true;
    this.newProductsDropDownMenuHidden = true;
  }

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

.icon {
  margin-left:2px;
  margin-right:2px;
}
.level p a{
  color: #D4D3D3;
}

.level p a:hover{
  color: #4a4a4a;
}

.navbar-link{
  color: #FFFFFF;
}

nav a{
  font-size: 12px;
}

.menu-label {
  color: #7a7a7a;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

#drop-down-container a{
  font-size: 16px;
  font-weight: 420;
}
a.news::after, aside.menu ul.menu-list li a.news::after {
  color: #fff;
  content: " new ";
  font-size: 10px;
  background-color: #3273dc;
  text-align: center;
}

#site-name {
	font-size: 25px;
}

      </style>
      <div id="section12" class="bind-box has-background-dark">
        <div class="block">
          <nav class="level">
          <!-- left side -->
            <div class="level-left is-size-7">
              <p class="level-item"><a href="">Home</a></p>
              <p class="level-item"><a href="">Shop</a></p>
              <p class="level-item"><a href="">About</a></p>
              <p class="level-item"><a href="">Blog</a></p>
              <p class="level-item"><a href="">Vacancies</a></p>
              <p class="level-item"><a href="">Contacts</a></p>
            </div>
            <!-- right side -->
            <div class="level-right has-text-white">
              <div class="level-item">
                <div class="field">
                  <p class="control">
                    <span class = "icon">
                      <fa-icon class="fab fa-facebook-square" color="#FFFFFF" size="16px"></fa-icon>
                   </span>
                    <span class="icon">
                    <fa-icon class="fab fa-instagram" color="#FFFFFF" size="16px"></fa-icon>
                    </span>
                    <span class="icon">
                    <fa-icon class="fab fa-twitter" color="#FFFFFF" size="16px"></fa-icon>
                    </span>
                    <span class="icon">
                    <fa-icon class="fab fa-pinterest-p" color="#FFFFFF" size="16px"></fa-icon>
                    </span>
                    <span class="icon">
                    <fa-icon class="fab fa-google-plus" color="#FFFFFF" size="16px"></fa-icon>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <hr class="navbar-divider" clear="all">
        <nav class="navbar has-background-dark has-text-white is-size-7"role="navigation" aria-label="dropdown navigation">
          <div class="navbar-item has-dropdown is-active">
            <a class="navbar-link has-background-info" @click = "${() => this.dropCategoriesMenu()}">
              Categories
            </a>
            <div class="navbar-dropdown has-background-info is-hidden">
              <hr class="navbar-divider">
              <div class="navbar-item">
                New
              </div>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Women
              </div>
              <hr class="navbar-divider">
              <div class="navbar-item is-active">
                Men
              </div>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Kids
              </div>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Accessories
              </div>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Top Sales
              </div>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Discounts
              </div>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Collections
              </div>
              <hr class="navbar-divider">
            </div>
          </div>
            <div class="navbar-brand has-text-centered">
              <a class="navbar-item site-name" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28">
              </a>
            </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class="field">
                <p class="control">
                  <span class="icon">
                  <fa-icon class="fas fa-shopping-cart" color="#FFFFFF" size="18px"></fa-icon>
                  </span>
                </p>
              </div>
                <div class="navbar-item has-dropdown">
                  <a class="navbar-item">
                    <figure class="image is-32x32">
                      <img id="user-pic" class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
                    </figure>
                  </a>
                  <a class="navbar-link">
                    Patrick Lawrence
                  </a>
                </div>
            </div>
          </div>
        </nav>        
      </div>
      <div id="drop-down-container" class="bind-box is-hidden">
        <div class="columns">
          <div id="drop-down-categories-menu" class="column has-background-info">
            <aside class="menu">
              <ul id="category-menu" class="menu-list">
                <li><a class= "is-active" @click='${() => this.toggleProductMenu('new')}'>New</a></li>
                <li><a @click='${() => this.toggleProductMenu('men')}'>Men</a></li>
                <li><a @click='${() => this.toggleProductMenu('women')}'>Women</a></li>
                <li><a @click='${() => this.toggleProductMenu('kids')}'>Kids</a></li>
                <li><a @click='${() => this.toggleProductMenu('accessories')}'>Accessories</a></li>
                <li><a @click='${() => this.toggleProductMenu('discounts')}'>Discounts</a></li>
                <li><a @click='${() => this.toggleProductMenu('collections')}'>Collections</a></li>
              </ul>
            </aside>
          </div>
        <div class="column">
          <aside class="menu">
            <p class="menu-label">
            Outerwear
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

      </div>
      </div>

     `;
  }

  dropCategoriesMenu() {
    const dropDownContainer = this.shadowRoot.getElementById('drop-down-container');

    if (this.categoriesDropDownMenuHidden === true) {
      dropDownContainer.classList.remove('is-hidden');
      this.categoriesDropDownMenuHidden = false;
    } else {
      dropDownContainer.classList.add('is-hidden');
      this.categoriesDropDownMenuHidden = true;
      const menuItems = this.shadowRoot.querySelector('#category-menu').querySelectorAll('a');
      menuItems.forEach(item => item.classList.remove('is-active'));
      menuItems[0].classList.add('is-active');
    }
  }

  toggleProductMenu(product) {
    const menuItems = this.shadowRoot.querySelector('#category-menu').querySelectorAll('a');

    if (product === 'new') {
      menuItems.forEach(item => item.classList.remove('is-active'));
      menuItems[0].classList.add('is-active');
    } else if (product === 'men') {
      menuItems.forEach(item => item.classList.remove('is-active'));
      menuItems[1].classList.add('is-active');
    } else if (product === 'women') {
      menuItems.forEach(item => item.classList.remove('is-active'));
      menuItems[2].classList.add('is-active');
    } else if (product === 'kids') {
      menuItems.forEach(item => item.classList.remove('is-active'));
      menuItems[3].classList.add('is-active');
    } else if (product === 'accessories') {
      menuItems.forEach(item => item.classList.remove('is-active'));
      menuItems[4].classList.add('is-active');
    } else if (product === 'discounts') {
      menuItems.forEach(item => item.classList.remove('is-active'));
      menuItems[5].classList.add('is-active');
    } else if (product === 'collections') {
      menuItems.forEach(item => item.classList.remove('is-active'));
      menuItems[6].classList.add('is-active');
    }
  }

  static get is() {
    return 'navbar-10';
  }

}

customElements.define(Navbar10.is, Navbar10);