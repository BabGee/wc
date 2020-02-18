import{css,html,NavbarBase}from"../../../../../components/adaptive-ui.js";const NavbarTwoStyles=css`
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    
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
.navbar-item img {
  max-height: 100%;!important
}
.navbar-item:hover{
    color:var(--app-secondary-color)!important;

}
.is-active {
    border-radius: 15px!important;
    background-color: var(--app-secondary-color)!important;
    color: #fff!important;
}
.navbar-item.is-active:hover{
    color: #fff!important;
    background-color: var(--app-secondary-color)!important;
}
a.navbar-item:hover {
    background-color: transparent!important;
    
}
.li-page:hover{
    color: var(--app-secondary-color)!important;

}
.active-page{
    color: var(--app-secondary-color)!important;

}
.active-page:hover{
    color: var(--app-secondary-color)!important;

}
`;var navbar2Css={NavbarTwoStyles:NavbarTwoStyles};class Navbar2 extends NavbarBase{static get styles(){return[NavbarTwoStyles,css`
        :host {
          display: block;
        }
      `]}static get properties(){return{newProductsMenuHidden:Boolean}}constructor(){super();this.newProductsMenuHidden=!0}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

    <div id="section2" class="bind-box">
        <nav class="navbar" style="top: -7px;">
          <div class="navbar-brand">
            <div class="navbar-start">
            <a class="navbar-item"  @click=${this.reloadPage} >
              <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
            </a>

            
            </div>
          </div>
          <div id="site-name" class="navbar-menu has-text-weight-semibold">
          <div class="navbar-end">
            ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
            <a href="${window.location.pathname+window.location.search}#/${pageGroupIndex}/0/" 
            class="is-uppercase navbar-item is-size-6 ${pageGroupIndex==this._pageGroup?"is-active":""}" >
                ${pageGroup.title}
            </a>`)}
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
                ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
                  ${pageGroup.pages.map((menu,menuIndex)=>html`
                  ${pageGroupIndex==this._pageGroup?html`
                  <li><a @click="${this.scrollToSection}"
                  data-name="${menu.id}"  class="li-page ${menuIndex==this._page?"active-page":""} ">${menu.title}</a></li>
                  `:html``}
                 

                  
                  `)}
  
                
                `)}
                  
                </ul>
              </div>
            </div>
            <!-- right side -->
            
          </nav>
        </div>
      </div>




   </div>

     `}reloadPage(){window.location.reload()}scrollToSection(event){var menuId=event.target.getAttribute("data-name");let navHeight=this.shadowRoot.querySelector(".navbar").offsetHeight;const element=document.getElementById(menuId);if(element){const bodyRect=document.body.getBoundingClientRect().top,elementRect=element.getBoundingClientRect().top;window.scrollTo({top:elementRect-bodyRect-navHeight,behavior:"smooth"})}}static get is(){return"navbar-2"}}customElements.define(Navbar2.is,Navbar2);export{navbar2Css as $navbar$2Css,NavbarTwoStyles};