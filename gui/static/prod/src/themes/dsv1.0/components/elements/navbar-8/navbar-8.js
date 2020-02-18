import{css,html,NavbarBase}from"../../../../../components/adaptive-ui.js";const NavbarEightDarkStyles=css`
nav {
	font-size: 16px;
}
.bind-box {
	margin-bottom: 1.5rem;
	background-color: #4a4a4a!important;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
	color: white;
    display: block;
    padding: 1.25rem 4.5rem;
    
}
#site-name {
	font-size: 25px;
}

.icon{
  margin: 0px 3px;
}
`;var navbar8DarkCss={NavbarEightDarkStyles:NavbarEightDarkStyles};const NavbarEightDefaultStyles=css`

`;var navbar8DefaultCss={NavbarEightDefaultStyles:NavbarEightDefaultStyles};class Navbar8 extends NavbarBase{constructor(){super()}static get properties(){return{darkMode:{type:Boolean,reflect:!0}}}get styles(){console.log("dark mode");return[this.darkModeUpdator,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
  
    <div class="bind-box">
      <div class="block">
        <nav class="level">
            <div class="has-text-left">
              <p class="control">
                <span class="icon">
                <fa-icon class="fab fa-facebook-square" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-instagram" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-twitter" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-pinterest-p" color="#ffffff" size="16px"></fa-icon>
                </span>
                <span class="icon">
                <fa-icon class="fab fa-google-plus" color="#ffffff" size="16px"></fa-icon>
                </span>
              </p>
            </div>
          <p class="level-item has-text-centered">
            <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
          </p>
          <p class="level-item has-text-centered">
            <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </p>
        </nav>
      </div>
    </div>


     `}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}darkModeUpdator(){this.darkMode=this.e.details.darkMode;if(this.darkMode){return NavbarEightDarkStyles}else{return NavbarEightDefaultStyles}}static get is(){return"navbar-8"}}customElements.define(Navbar8.is,Navbar8);export{navbar8DarkCss as $navbar$8DarkCss,navbar8DefaultCss as $navbar$8DefaultCss,NavbarEightDarkStyles,NavbarEightDefaultStyles};