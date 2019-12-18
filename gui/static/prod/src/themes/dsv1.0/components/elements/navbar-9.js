import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { NavbarBase } from "../../../../elements/base/navbar-base.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Navbar9 extends NavbarBase {
  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
    .ii__container-main{
          margin: 0 auto;
          padding: 0 90px;
      }
      /* header */
      .ii__main-header{
          background-color: var(--app-primary-color);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          box-shadow: 0 1px 0 0 #d9d9d9;
          /* background: #fff; */
      }
      .navbar{
          background: transparent;
          height: 5.5em;
          background-color: var(--app-primary-color);
      }
      .nav__item{
          font-weight: regular;
          font-size: 16px;
      }
      .nav__item:hover{
          /* font-weight: bolder; */
          position: relative;
          color: #fff!important;
          border-bottom: 4px solid #fff;
          background: var(--app-accent-color)!important;
      }
      /* .nav__item:hover::after{
          content: '';
          position: absolute;
          width: 90%;
          height: 3px;
          top: 50px;
          left: 0;
          background: #409DB5;
      } */
      .navbar-item .buttons .button{
          font-size: 13px;
          font-weight: inherit;
          width: 115px;
          height: 3em;
      }
      @media screen and (max-width: 1023px){
        .ii__container-main{
          margin: 0 auto;
          padding: 0 10px;
      }
      .top{
        position: relative;
        top: 44px;
      }
      }
    </style>

    <div id="section11" class="bind-box">
      <header class="ii__main-header">
        <div class="ii__container-main">
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/" @click=${this.reloadPage}>
                <img src="/media/${this.gateway.logo}" width="112" height="28">
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
                  href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${menuIndex}/">${menu.title}</a>
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

  scrollToSection(index) {
    //MAXIMUM OF 6 ONLY
    if (index == 0) {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    } else if (index == 1) {
      window.scroll({
        top: 800,
        behavior: 'smooth'
      });
    } else if (index == 2) {
      window.scroll({
        top: 1600,
        behavior: 'smooth'
      });
    } else if (index == 3) {
      window.scroll({
        top: 2400,
        behavior: 'smooth'
      });
    } else if (index == 4) {
      window.scroll({
        top: 3200,
        behavior: 'smooth'
      });
    } else if (index == 5) {
      window.scroll({
        top: 4000,
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