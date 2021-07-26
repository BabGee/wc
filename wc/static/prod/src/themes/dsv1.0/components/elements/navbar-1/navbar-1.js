import{css,html,NavbarBase}from"../../../../../components/adaptive-ui.js";const NavbarOneStyles=css`
body{
    font-family: 'Montserrat', sans-serif;
  }
  .btn{
    border-radius: 5px;
    width: 120px;
    height: 3em!important;
    background-color: var(--app-secondary-color)!important;
    color: #fff!important;
  }
  .btn:hover{
    background-color: #fff;
    color: var(--app-secondary-color)!important;
    border: 2px solid var(--app-secondary-color)!important;
  }
  .btnless{
    border: 0 solid transparent;
  }
  nav{
    margin: 14px 0 0 0;
  }
  .nav__item{
    color: var(--app-default-color)!important;
  }
  .nav__item:hover{
    color: #4a4a4a!important;
  }
  .navbar-item img {
    max-height: 100%;
  }

  @media screen and (min-width: 1024px){
    .navbar {
        min-height: 5.25rem!important;
    }
  }
`;var navbar1Css={NavbarOneStyles:NavbarOneStyles};class Navbar1 extends NavbarBase{static get styles(){return[NavbarOneStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item"  @click=${this.reloadPage}  style="width: 138px; top: -3px;">
            <img src="/media/${this.gateway.logo}">
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
          ${this.interface.pageGroups.map(pageGroup=>html`
            ${pageGroup.pages.map(menu=>html`
            ${"Sign in"==menu.title||"Log in"==menu.title||"Sign up"===menu.title||"Register"==menu.title?html``:html`
            
            <a class="navbar-item nav__item is-capitalized has-text-weight-bold"
              @click="${this.scrollToSection}"
              data-name="${menu.id}"
              >${menu.title}</a>
            
            `}

              
            `)}
          `)}
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
              ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
                ${pageGroup.pages.map((menu,menuIndex)=>html`

                ${"Sign in"==menu.title||"Log in"==menu.title||"Sign up"===menu.title||"Register"==menu.title?html`
                
                <a href="${window.location.pathname+window.location.search}#/${pageGroupIndex}/${menuIndex}/" 
                class="button ${"Sign in"==menu.title||"Log in"==menu.title?"btnless":"btn"} has-text-weight-bold">
                  ${"Sign in"==menu.title||"Log in"==menu.title?html` <strong style="color: #2F4799;">${menu.title}</strong>`:html`${menu.title}`}
          
                </a>`:html``}


                  `)}
                
                `)} 
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
     `}reloadPage(){window.location.reload()}scrollToSection(event){var menuId=event.target.getAttribute("data-name");let navHeight=this.shadowRoot.querySelector(".navbar").offsetHeight;const element=document.getElementById(menuId);if(element){const bodyRect=document.body.getBoundingClientRect().top,elementRect=element.getBoundingClientRect().top;window.scrollTo({top:elementRect-bodyRect-navHeight,behavior:"smooth"})}}static get is(){return"navbar-1"}}customElements.define(Navbar1.is,Navbar1);export{navbar1Css as $navbar$1Css,NavbarOneStyles};