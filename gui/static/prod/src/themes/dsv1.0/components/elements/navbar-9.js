import{html,NavbarBase}from"../../../../components/adaptive-ui.js";class Navbar9 extends NavbarBase{renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
    .ii__container-main{
          margin: 0 auto;
          padding: 0 90px;
          background-color: var(--app-primary-color);

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
          <nav class="navbar" role="navigation" aria-label="main navigation" style="background-color:var(--app-primary-color)">
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
               ${this.interface.pageGroups.map(pageGroup=>html`
                  ${pageGroup.pages.map(menu=>html`
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

     `}reloadPage(){window.location.reload()}addBlock(){let nav=this.shadowRoot.querySelector(".navbar-menu");nav.classList.toggle("is-block")}scrollToSection(event){var menuId=event.target.getAttribute("data-name"),elementToFocus=document.getElementById(menuId);if(elementToFocus){elementToFocus.scrollIntoView({block:"start",behavior:"smooth"})}}static get is(){return"navbar-9"}init(pElement,loader){super.init(pElement,loader)}}customElements.define(Navbar9.is,Navbar9);