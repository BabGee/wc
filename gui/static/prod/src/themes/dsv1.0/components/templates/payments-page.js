import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../../../../node_modules/fa-icons/index.js";import"../snack-bar.js";import"../form-render.js";import"./missing-page.js";import{PaymentsPageBase}from"../../../../components/templates/payments-page.js";class PaymentsPage extends PaymentsPageBase{render(){if(!this.interface){return html`
        <div>Cannot render an UNDEFINED tab!!.</div>
      `}else if(!this.pageGroup||!this.page){return html`
        <missing-page></missing-page>
      `}return html`
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css"
        type="text/css"
      />
      <style>
        body {
          font-family: "Montserrat", sans-serif !important;
          font-size: 14px;
          font-style: normal;
        }
        .main-wrapper {
          height: auto;
          width: 100%;
          height: 100vh;
          background-color: #e9e9eb;
        }
        header.main-header {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          height: 51px;
          z-index: 999;
          background: #fff;
          margin-bottom: 30px;
        }
        header > .mipay-brand {
          width: 22%;
          padding: 10px;
          background: var(--app-default-color);
        }
        header > .mipay-user {
          width: 78%;
          padding: 10px;
          background: #f6f6f9;
        }
        .user-profile {
          width: 200px;
          align-items: center;
        }
        .profile-image img {
          width: 32px !important;
          height: 32px !important;
          border-radius: 50%;
          object-fit: cover;
          /* border: 3px solid var(--app-default-color); */
        }
        .profile-name p {
          font-size: 12px;
          line-height: 1.33;
          font-weight: bold;
          margin-left: 5.4px;
          position: relative;
          top: 6px;
        }

        .pay-frame {
          width: 100%;
          background: #fff;
          border-radius: 6px;
          padding: 20px 30px;
          box-shadow: 1px 1px 11px 0 hsla(0, 0%, 79.2%, 0.5);
        }
        .payment-header {
          border-bottom: 2px solid #e9e9eb !important;
          padding: 0 0 15px 0;
          color: #212890;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .ii__tab a {
          font-size: 13px;
          justify-content: flex-start !important;
          padding-left: 10px !important;
          padding-right: 0;
          padding-bottom: 18px !important;
        }
        .is-active,
        .ii_tab a:hover,
        .tabs.is-boxed a:hover {
          border-bottom: 2px solid var(--app-primary-color) !important;
          background: transparent !important;
        }
        .content {
          width: 95%;
          margin: 0 auto;
          padding: 2rem 0 0 0;
        }
      </style>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <div class="main-wrapper">
        <!-- <GatewayHeader></GatewayHeader> -->
        <header id="section11" class="main-header is-flex">
          <div class="mipay-brand"></div>
          <div class="mipay-user">
            <div class="columns is-mobile">
              <div class="column">
                <div class="is-pulled-right user-profile">
                  <div class="user-icon"></div>
                  <div class="user-info is-flex">
                    <div class="profile-image">
                      <figure class="image">
                        <img
                          src="# : 'images/web/user.svg'}"
                          alt="profile-image"
                        />
                      </figure>
                    </div>
                    <div class="profile-name">
                      <p>Anwar Magara</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="container">
          <div id="pay" class="base-card pay-frame">
            <div class="payment-header">
              <p class="is-capitalized">Payments</p>
            </div>
            <header class="header card-head is-marginless">
              <nav
                class="tabs is-boxed is-fullwidth"
                style="overflow: auto; overflow-y:hidden; width: 95%; margin: 0 auto"
              >
                <div class="container">
                  <ul>
                    ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
                        <link
                          rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css"
                          type="text/css"
                        />
                        ${pageGroup.pages.map((tab,tabIndex)=>html`
                            <li
                              id="tab_${tabIndex}"
                              class="tab is-marginless ii__tab"
                            >
                              <a
                                href="${this._changeLink(pageGroupIndex,tabIndex)}"
                                @click=${this.addActive}
                                class="frame-bg  ${pageGroupIndex==this._pageGroup&&tabIndex==this._page?"is-active":""}"
                                >${PaymentsPage.toTitleCase(tab.title)}</a
                              >
                            </li>
                          `)}
                      `)}
                  </ul>
                </div>
              </nav>
            </header>
            <div class="content">
              <div class="content-tab">
                <div class="columns is-multiline cols is-paddingless">
                  ${this.page.pageInputGroups.map(feed=>html`
                      <div
                        class="column is-paddingless w__cols ${this._gridClasses(feed)}"
                      >
                        <form-render
                          .feed="${feed}"
                          .params=${this.parseParams()}
                        ></form-render>
                      </div>
                    `)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <snack-bar
        id="snack-bar"
        ?active="${this._snackbarOpened}"
        context="${this._snackbarContext}"
      >
        ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar
      >
    `}constructor(){super()}static get properties(){return{title:String,tagline:String,logo:String,pages:Array,tab:Object,oe:Array,profile:{type:Object,value:""}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_profileTriggerClick(){this;this.qs(".main-menu-avatar, .dot").classList.toggle("vanish");if(this.qs(".js-hamburger").classList.contains("is-active")){this.qs(".js-hamburger").classList.remove("is-active");document.querySelector("body").classList.remove("is-fixed")}else{this.qs(".js-hamburger").classList.add("is-active");setTimeout(function(){document.querySelector("body").classList.add("is-fixed")},700)}}_sideIconClick(e){this.shadowRoot.querySelector(".tab-icon.is-active").classList.remove("is-active");e.currentTarget.classList.add("is-active");this.shadowRoot.querySelector(".menu-wrapper .icon-box-toggle").classList.add("active");this.qsa(".dashboard-nav, #dashboard-wrapper").forEach(function(el){el.classList.add("is-pushed")});this.shadowRoot.querySelector(".reader-switch label").classList.add("is-disabled");this._dataChildMenuSetup(e)}_viewList(){this.shadowRoot.querySelector("#hero").style.display="block";this.shadowRoot.querySelector("#pay").style.display="none";this.shadowRoot.querySelector("#pay").classList.add("is-hidden-mobile")}_gridClasses(pageInputGroup){const grid=super._gridClasses(pageInputGroup),grids=grid.split("|");try{return`is-${Math.floor(+(grids[0]/2))}`}catch(e){return"is-12"}}_iconBoxToggle(e){e.currentTarget.classList.toggle("active");e.preventDefault()}_dataChildMenuSetup(e){const menuId=e.currentTarget["data-child-menu"],menuTitle=e.currentTarget["data-title"];this.qsa(".sidebar-menu.is-active").forEach(function(el){el.classList.remove("is-active")});this.qs("#"+menuId).classList.add("is-active");this.qs(".sidebar-title").textContent=menuTitle}addActive(){let current=document.getElementsByClassName("active");if(0<current.length){current[0].className=current[0].className.replace(" active","")}this.className+=" active"}stateChanged(state){super.stateChanged(state)}_changeLink(pageGroupIndex,tabIndex){var url=window.location.pathname+window.location.search+"#/"+pageGroupIndex+"/"+tabIndex+"/";return url}}window.customElements.define("payments-page",PaymentsPage);