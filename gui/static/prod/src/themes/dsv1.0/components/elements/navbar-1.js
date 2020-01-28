import{html,NavbarBase}from"../../../../components/adaptive-ui.js";class Navbar1 extends NavbarBase{renderDefault(){return html`
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
    body{
      font-family: 'Montserrat', sans-serif;
    }
    .btn{
      border-radius: 5px;
      width: 120px;
      height: 3em;
      background-color: #F49E37;
      color: #fff;
    }
    .btnless{
      border: 0 solid transparent;
    }
    nav{
      margin: 14px 0 0 0;
    }
    .nav__item{
      color: #2F4799;
    }
    .nav__item:hover{
      color: #4a4a4a!important;
    }
    .navbar-item img {
      max-height: 100%;
    }

    @media screen and (min-width: 1024px){
      .navbar {
          min-height: 5.25rem;
      }
    }
    </style>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io"  style="width: 138px; top: -3px;">
            <img src="https://gomipay.com/media/administration_gateway_logo/mipay.png">
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
          ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
            ${pageGroup.pages.map((menu,menuIndex)=>html`
              <a class="navbar-item nav__item is-capitalized has-text-weight-bold"
              data-name="${menu.id}"
              >${menu.title}</a>
            `)}
          `)}
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button btnless has-text-weight-bold">
                  <strong style="color: #2F4799;">Sign in</strong>
                </a>
                <a class="button btn has-text-weight-bold">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
     `}static get is(){return"navbar-1"}}customElements.define(Navbar1.is,Navbar1);