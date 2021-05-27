import{css,html,NavbarBase}from"../../../../../components/adaptive-ui.js";const NavbarTenStyles=css`
.ii__container-main{
  margin: 0 auto;
  padding: 0 90px;
  background-color: white;
}
/* header */
.ii__main-header{
  background-color: white;
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
  background-color: white;
}
.nav__item{
  font-weight: regular;
  font-size: 16px;
  font-weight: 450;
}
.nav__item:hover{
  /* font-weight: bolder; */
  position: relative;
  color: #fff!important;
  position: relative;
  background: transparent!important;
}
.nav__item:hover::after{
  position: absolute;
  width: 100%;
  border-bottom: 4px solid var(--app-secondary-color);
  z-index: 9999;
  content: '';
  bottom: 0;
  left: 0;
}
.nav__item:focus::after{
  position: absolute!important;
  width: 100%!important;
  border-bottom: 4px solid var(--app-secondary-color)!important;
  z-index: 9999!important;
  content: ''!important;
  bottom: 0!important;
  left: 0!important;
  background-color:white!important;
  color:#fff!important;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {
  background-color:white!important;
  color:black !important;
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
.navbar-item .logo-img {
height: auto;
object-fit: contain;
width: 100%;
}
.navbar-item img{
min-height: 3.75rem!important; 
}
.navbar-menu{
  background-color: white!important;
  margin-left: 50px;
}
.navbar-burger{
  color:black!important;
  margin: auto 0px auto auto;
}
.navbar-end {
  width:100%;
  justify-content:flex-start;
}
.login-btn {
  display:block;
  background-color:var(--app-secondary-color);
  color:white;
  border-radius:8px;
  font-size: 16px;
  font-weight: inherit;
  height: fit-content;
  padding: 7px 14px;
  margin:7px;
  text-align:center;
  align-self: center;
}
.login-btn:hover {
  border:2px solid var(--app-default-color);

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
  .login-btn {
    border-radius:0;
    text-align:left;
    margin:0;
  }
}
`;var navbar10Css={NavbarTenStyles:NavbarTenStyles};class Navbar10 extends NavbarBase{static get styles(){return[NavbarTenStyles,css`
        :host{
          display: block;
        }
      `]}visibleMenuTitles(pageGroup,pageGroupIndex){return pageGroup.pages.map((menu,menuIndex)=>{let firstVisibleMenuIndex=0;if(!this.e.details.hide.includes(menu.title)){firstVisibleMenuIndex+=1;return html`
          <a tabindex="${menuIndex+1}" class="${"Log In"===menu.title?"login-btn":"navbar-item nav__item is-capitalized"}"
            @click="${this.scrollToSection}"
            style=${1===pageGroupIndex&&1===firstVisibleMenuIndex?"margin-left:auto;":""}
            data-name="${menu.id}"  pageGroup="${pageGroupIndex}" page="${menuIndex}" 
          >
            ${menu.title}
          </a>            
        `}else{return html``}})}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

    <div id="section11" class="bind-box">
      <header class="ii__main-header">
        <div class="ii__container-main">
          <nav class="navbar" role="navigation" aria-label="main navigation" style="background-color:white">
            <div class="navbar-brand">
              <a class="navbar-item" href="/" @click=${this.redirectPage} style="width: 200px;">
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
                ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>this.visibleMenuTitles(pageGroup,pageGroupIndex))} 
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>

     `}loginBtn(){}reloadPage(){window.location.reload()}redirectPage(){window.location.href="/"}addBlock(){let nav=this.shadowRoot.querySelector(".navbar-menu");nav.classList.toggle("is-block")}scrollToSection(event){let targetElement=event.target,selectedPagegroup=event.target.getAttribute("pageGroup"),selectedPage=event.target.getAttribute("page");if(this._pageGroup==selectedPagegroup){var menuId=event.target.getAttribute("data-name");let navHeight=this.shadowRoot.querySelector(".navbar").offsetHeight;const element=document.getElementById(menuId);if(element){const bodyRect=document.body.getBoundingClientRect().top,elementRect=element.getBoundingClientRect().top;window.scrollTo({top:elementRect-bodyRect-navHeight,behavior:"smooth"})}}else{window.location.hash="#/"+selectedPagegroup+"/"+selectedPage}}static get is(){return"navbar-10"}init(pElement,loader){super.init(pElement,loader)}}customElements.define(Navbar10.is,Navbar10);export{navbar10Css as $navbar$10Css,NavbarTenStyles};