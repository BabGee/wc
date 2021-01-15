import{BaseElement,utilsMixin,adaptiveUiMixin,css,html}from"../../../../../components/adaptive-ui.js";const Navbar14Base=class extends adaptiveUiMixin(utilsMixin(BaseElement)){constructor(){super()}static get is(){return"navbar-14"}init(pElement,loader){super.init(pElement,loader);this}};var navbar14={Navbar14Base:Navbar14Base};const Navbar14Styles=css`
.navbar-item .logo-img {
    height: auto;
    object-fit: contain;
    width: 100%;
}
.navbar-item img {
    max-height:3.75rem !important;
}
body{
    font-family: 'Montserrat', sans-serif;
}
a{
    font-family: 'Montserrat', sans-serif;
}
a {
    display: block;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    text-decoration: none;
    color: #333333;
}
.zua-c{
  background: var(--app-default-color)!important;
  color: #fff!important;
}
.nav-header{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 9999;
}
.navbar{
    padding: 10px 0;
}
.logo{
    font-weight: bolder;
    font-size: 19px;
}
.nav-link a{
    font-weight: 600;
    font-size: 14px;
    color: #4a4a4a;
}
.nav-link a::before{
    content: '';
    width: 5px;
    height: 5px;
    background: var(--app-default-color);
    border-radius: 50%;
    position: relative;
    right: 6px;
    visibility: hidden;
}
.nav-link a:hover::before{
    visibility: visible;
}
.nav-link a:hover{
    color: var(--app-default-color);
    background: none;
}
.nav-link a.active{
    color: var(--app-default-color);
    background: none;
}
.nav-link a::before.active{
    visibility: visible;
}


`;var navbar14Css={Navbar14Styles:Navbar14Styles};class Navbar14 extends Navbar14Base{static get styles(){return[Navbar14Styles,css` 
            :host{
                disply: block;
            }
            `]}toggleMenu(){const menuItems=this.shadowRoot.querySelector(".navbar-menu");menuItems.classList.toggle("is-block")}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>   
        <header class="nav-header">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand navbar-start">
                        <a class="navbar-item" href="/" style="width: 200px;"  @click=${this.reloadPage}>
                            <img class="logo-img" src="/media/${this.gateway.logo}" alt="${this.gateway.name}">
                        </a>
                        <a role="button" @click=${this.toggleMenu} class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-end  nav-link">
                            ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
                                ${pageGroup.pages.map((menu,menuIndex)=>html`

                                ${this.e.details.hide.includes(menu.title)?html``:html`

                                    <a tabindex="${menuIndex+1}" class="navbar-item nav__item is-capitalized"
                                    @click="${this.scrollToSection}"
                                    data-name="${menu.id}"  pageGroup="${pageGroupIndex}" page="${menuIndex}" 
                                    >${menu.title}</a>
                                
                                `}
                               
                                `)}
                            `)}

                        </div>
                    </div>
                </div>
            </nav>
        </header>
        `}reloadPage(){window.location.reload()}scrollToSection(event){let targetElement=event.target,selectedPagegroup=event.target.getAttribute("pageGroup"),selectedPage=event.target.getAttribute("page");if(this._pageGroup==selectedPagegroup){var menuId=event.target.getAttribute("data-name");let navHeight=this.shadowRoot.querySelector(".navbar").offsetHeight;const element=document.getElementById(menuId);if(element){const bodyRect=document.body.getBoundingClientRect().top,elementRect=element.getBoundingClientRect().top;window.scrollTo({top:elementRect-bodyRect-navHeight,behavior:"smooth"})}}else{window.location.hash="#/"+selectedPagegroup+"/"+selectedPage}}}customElements.define(Navbar14.is,Navbar14);export{navbar14 as $navbar$14,navbar14Css as $navbar$14Css,Navbar14Base,Navbar14Styles};