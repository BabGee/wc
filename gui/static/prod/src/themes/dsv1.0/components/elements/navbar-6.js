import{html,NavbarBase}from"../../../../components/adaptive-ui.js";class Navbar6 extends NavbarBase{renderDefault(){return html`
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

<div class="bind-box has-background-dark">
          <div class="block">
              <nav class="navbar has-background-dark">
                <div class="navbar-brand">
                  <a class="navbar-item" href="#">
                    <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                  </a>
                  <a role="button" class="navbar-burger is-active flexthis" aria-label="menu" aria-expanded="false" >
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu is-active">
                  <div class="navbar-end">
                  ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
                  <a href="${window.location.pathname+window.location.search}#/${pageGroupIndex}/0/" 
                  class="navbar-item ${pageGroupIndex==this._pageGroup?"is-purple":""}" >
                      ${pageGroup.title}
                  </a>`)}
                  </div>
                </div>
              </nav>
          </div>
        </div>

     `}static get is(){return"navbar-6"}}customElements.define(Navbar6.is,Navbar6);