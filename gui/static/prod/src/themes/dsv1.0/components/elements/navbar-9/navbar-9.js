import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../../elements/base/navbar-base.js";
import { NavbarNineStyles } from "./navbar-9-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar9 extends NavbarBase {
  static get styles() {
    return [NavbarNineStyles, css`
        :host{
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

    <div id="section11" class="bind-box">
      <header class="ii__main-header">
        <div class="ii__container-main">
          <nav class="navbar" role="navigation" aria-label="main navigation" style="background-color:var(--app-primary-color)">
            <div class="navbar-brand">
              <a class="navbar-item" href="/" @click=${this.reloadPage} style="width: 200px;">
                <img class="logo-img" src="/media/${this.gateway.logo}" alt="brand" >
              </a>
                
              <a role="button" class="navbar-burger burger" @click=${this.addBlock} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
                
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-end">
               ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                  ${pageGroup.pages.map((menu, menuIndex) => html`
                  <a class="navbar-item nav__item is-capitalized"
                  @click="${this.scrollToSection}"
                  data-name="${menu.id}"
                  >${menu.title}</a>
                  `)}
                  
                `)}
                
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>

     `;
  }

  reloadPage() {
    window.location.reload();
  }

  addBlock() {
    let nav = this.shadowRoot.querySelector('.navbar-menu');
    nav.classList.toggle('is-block'); // if(nav.classList == 'top'){
    //   nav.classList.remove('top')
    // }else{
    //   nav.classList.add('top')
    // }
  }

  scrollToSection(event) {
    var menuId = event.target.getAttribute("data-name");
    let navHeight = this.shadowRoot.querySelector('.navbar').offsetHeight;
    const element = document.getElementById(menuId);
    const offset = navHeight; //height of navbar

    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  static get is() {
    return 'navbar-9';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(Navbar9.is, Navbar9);