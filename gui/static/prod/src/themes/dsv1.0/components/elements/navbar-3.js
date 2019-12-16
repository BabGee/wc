import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{NavbarBase}from"../../../../elements/base/navbar-base.js";class Navbar3 extends NavbarBase{renderDefault(){return html`
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

.has-text-white a {
 	color: #fff;
 }

      </style>
    
    <div class="bind-box has-background-dark">
          <div class="block">
            <nav class="level has-text-white">
            <p id="site-name" class="level-item has-text-centered has-text-weight-semibold">
              <a class="link">${this.gateway.name}</a>
            </p>
            ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
            <p class="level-item has-text-centered">
            <a href="${window.location.pathname+window.location.search}#/${pageGroupIndex}/0/" 
            class="link is-info ${pageGroupIndex==this._pageGroup?"is-active":""}" >
                ${pageGroup.title}
            </a>
            </p>
            `)}
          </nav>
        </div>
      </div>



     `}static get is(){return"navbar-3"}}customElements.define(Navbar3.is,Navbar3);