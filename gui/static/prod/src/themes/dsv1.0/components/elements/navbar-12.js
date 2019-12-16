import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{NavbarBase}from"../../../../elements/base/navbar-base.js";class Navbar12 extends NavbarBase{renderDefault(){return html`
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
            <nav class="navbar is-dark">
              <div class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                  </a>
                </div>
                <div class="navbar-end">
                  <a class="navbar-link">
                    <figure class="image is-32x32">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
                    </figure>
                  </a>
                  <a role="button" class="navbar-burger flexthis" aria-label="menu" aria-expanded="false" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>


     `}static get is(){return"navbar-12"}}customElements.define(Navbar12.is,Navbar12);