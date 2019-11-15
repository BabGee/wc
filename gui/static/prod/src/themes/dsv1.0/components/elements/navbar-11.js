import{html,NavbarBase}from"../../../../components/adaptive-ui.js";class Navbar11 extends NavbarBase{renderDefault(){return html`
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
<div class="bind-box">
          <div class="block">
              <nav class="navbar">
                <div class="navbar-brand">
                  <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                  </a>
                </div>
                <div class="navbar-menu">
                  <div class="navbar-end">
                    <a class="navbar-item is-active" @click="${()=>this.activePage("home")}">
                      Home
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("products")}">
                      Products
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("services")}">
                      Services
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("about-us")}">
                      About Us
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("help")}">
                      Help
                    </a>
                    <a class="navbar-item" @click="${()=>this.activePage("contacts")}">
                      Contacts
                    </a>
                    <div class="navbar-item">
                      <div class="buttons">
                        <a class="button is-small is-rounded is-primary"  @click="${()=>this.activePage("buy-now")}">Buy now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
          </div>
        </div>

     `}activePage(mainNavLink){const links=this.shadowRoot.querySelector(".navbar-menu").querySelectorAll("a"),btnClassName="button is-small is-rounded is-primary";if("home"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[0].className="navbar-item is-active";links[6].className=btnClassName}else if("products"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[1].className="navbar-item is-active";links[6].className=btnClassName}else if("services"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[2].className="navbar-item is-active";links[6].className=btnClassName}else if("about-us"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[3].className="navbar-item is-active";links[6].className=btnClassName}else if("help"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[4].className="navbar-item is-active";links[6].className=btnClassName}else if("contacts"===mainNavLink){links.forEach(link=>link.className="navbar-item");links[5].className="navbar-item is-active";links[6].className=btnClassName}else if("buy-now"===mainNavLink){}}static get is(){return"navbar-11"}}customElements.define(Navbar11.is,Navbar11);