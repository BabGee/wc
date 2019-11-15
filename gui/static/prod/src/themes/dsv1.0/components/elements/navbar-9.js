import{html,NavbarBase}from"../../../../components/adaptive-ui.js";class Navbar9 extends NavbarBase{renderDefault(){return html`
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


#site-name {
	font-size: 25px;
}

      </style>

<div id="section11" class="bind-box">
        <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
          </div>          
          <div class="navbar-menu has-text-centered">
            <div id="main-nav"class="navbar is-uppercase is-size-7 pull-center has-text-weight-semibold">
              <a class="navbar-item is-active" @click='${()=>this.activePage("home")}'>
                Home
              </a>

              <a class="navbar-item" @click='${()=>this.activePage("about")}'>
                About
              </a>

              <a class="navbar-item" @click='${()=>this.activePage("portfolio")}'>
                Portfolio
              </a>

              <a class="navbar-item" @click='${()=>this.activePage("blog")}'>
                Blog
              </a>

              <a class="navbar-item" @click='${()=>this.activePage("contacts")}'>
                Contacts
              </a>
            </div>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class="field">
                <p class="control">
                  <span class="icon">
                    <i class="fas fa-search"></i>
                  </span>
                  <span class="icon">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </nav>
        </nav>
      </div>

     `}activePage(mainNavLink){const links=this.shadowRoot.querySelector("#main-nav").querySelectorAll("a");if("home"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[0].className="navbar-item is-active"}else if("about"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[1].className="navbar-item is-active"}else if("portfolio"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[2].className="navbar-item is-active"}else if("blog"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[3].className="navbar-item is-active"}else if("contacts"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[4].className="navbar-item is-active"}}static get is(){return"navbar-9"}}customElements.define(Navbar9.is,Navbar9);