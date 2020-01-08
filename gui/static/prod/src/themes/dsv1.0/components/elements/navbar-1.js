import{html,NavbarBase}from"../../../../components/adaptive-ui.js";class Navbar1 extends NavbarBase{renderDefault(){return html`
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


#section1 nav.navbar div.navbar-menu div.navbar-end a {
	color: #d4d3d3;
}
#section1 .navbar .navbar-menu .navbar-end a.is-active {
	color: #2f75ec;
	list-style: disc;
}
#section1 .navbar .navbar-menu .navbar-end a.is-active::before {
	color: #2f75ec;
	content: "•"  ; /* &#8226; &#160; */
	font-size: 18px;
}
#section1 .navbar .navbar-menu .navbar-start a:hover {
	color: #2f75ec;
}

#site-name {
	font-size: 25px;
}

      </style>
    <div id="section1" class="bind-box">
        <nav class="navbar">
          <div id="site-name" class="navbar-brand has-text-weight-semibold">
            <a class="navbar-item" href="#">
              <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
            ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
            <a href="${window.location.pathname+window.location.search}#/${pageGroupIndex}/0/" 
            class="navbar-item ${pageGroupIndex==this._pageGroup?"is-active":""}" >
                ${pageGroup.title}
            </a>`)}
            </div>
          </div>
        </nav>
      </div>
     `}static get is(){return"navbar-1"}}customElements.define(Navbar1.is,Navbar1);