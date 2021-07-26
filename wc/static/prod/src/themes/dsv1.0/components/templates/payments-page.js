import{PageViewElement,html}from"../../../../components/adaptive-ui.js";const PaymentsPageBase=class extends PageViewElement{constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}async _activateLoadSectionInterface(...args){self.params=params;this.dialogServicesQueue.push([service,params]);self.view="dialog"}};var paymentsPage={PaymentsPageBase:PaymentsPageBase};class PaymentsPage extends PaymentsPageBase{render(){if(!this.interface){return html`
        <div>Cannot render an UNDEFINED tab!!.</div>
      `}else if(!this.pageGroup||!this.page){return html`
        <missing-page></missing-page>
      `}return html`
    <head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css"
        type="text/css"
      />

 
    </head>
      <style>

@font-face {
        src: url('${this.getMainFontPath(this.gateway.mainFont)}');
        font-family:'main';
        ;
      }
  
      *{
        font-family: 'main',BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif
        ;
      } 
        body {
          font-family: 'main',BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif

          font-size: 14px;
          font-style: normal;
        }
        header.payments-header{
          width: 100%;
          /* height: auto; */
        }
        .header-fl{
          display: flex;
          justify-content: right;
        }
        header {
          background-color: #fff;
          border-bottom: 1px solid rgba(0,0,0,.0625);
          display: block;
          height: 65px;
          margin-bottom: 0;
          padding: 0;
          position: relative;
          -webkit-transition: all .2s ease;
          -o-transition: all .2s ease;
          transition: all .2s ease;
          width: calc(100% - 61px);
          z-index: 800;
      }
      header .header-container .header-right {
          float: right;
      }
      header .header-container .header-left, header .header-container .header-right {
          list-style: none;
          margin-bottom: 0;
          padding-left: 0;
          position: relative;
      }
      header .header-container .header-left>li, header .header-container .header-right>li {
          float: left;
      }
      .pos-r {
          position: relative!important;
      }
      header .header-container .header-left>li>a, header .header-container .header-right>li>a {
          color: #72777a;
          display: block;
          line-height: 65px;
          position: relative;
          min-height: 65px;
          padding: 0 15px;
          -webkit-transition: all .2s ease-in-out;
          -o-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
      }
      .peers {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: -webkit-box!important;
          display: -ms-flexbox!important;
          display: flex!important;
          -webkit-box-align: start;
          -ms-flex-align: start;
          align-items: flex-start;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-flow: row wrap;
          flex-flow: row wrap;
          height: auto;
          max-width: 100%;
          margin: 0;
          padding: 0;
      }
      header .header-container .header-right .profile {
          line-height: 84px;
      }
      .peer {
          display: block;
          height: auto;
          -webkit-box-flex: 0;
          -ms-flex: 0 0 auto;
          flex: 0 0 auto;
      }
      header .header-container .header-right img {
          vertical-align: center;
      }
      .peer>img {
          max-width: none;
      }
      .sz-2r, .w-2r {
          width: 32px;
          width: 2rem;
      }
      .bdrs-50p {
          border-radius: 50%!important;
      }
      img {
          height: auto;
          max-width: 100%;
      }
      header .header-container .header-right .profile-name {
          display: flex;
          flex-direction: column;
          padding-top: 21px;
      }
      .profile-select {
          position: absolute;
          right: -1px;
          top: 78px;
          width: 230px;
          background: #fff;
          padding: 10px;
          box-shadow: 3px 8px 5px #e5e5e5;
          z-index: -1;
          border-radius: 4px;
          display: none;
          height: auto;
          transition: .3s ease-in-out top;
      }
      .profile-select .profile-list li:last-child {
          border-bottom: 0 solid transparent;
      }
      .profile-select .profile-list li {
          color: #202124;
          border-bottom: 1px solid #f6f6f6;
      }
      .profile-select .profile-list li a {
          width: 100%;
          color: inherit;
          /* margin: 5px 0; */
          display: inline-block;
          text-transform: capitalize;
          padding: 10px 20px;
          font-size: 14px;
      }
      .profile-select-icon {
          position: relative;
          top: 4px;
          font-size: 12px;
      }
        .worko-tabs, .container {
          margin: 0 auto;
          width: 80%;
        }
        
        .body-content{
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
        }
        .payments-banner{
          position: relative;
          inset: 0px;
          display: none;
          padding: 8px 0px;
          color: rgb(255, 255, 255);
          background-color: var(--app-default-color);
          /* top: 65px; */
        }
        .intercom-wrapper {
          display: flex;
          flex-direction: row;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          position: relative;
          padding-left: 32px;
          padding-right: 32px;
        }
        .intercom-mr {
          display: flex;
          flex-flow: row wrap;
          max-width: 960px;
          padding-right: 16px;
        }
        .intercom-pd {
          padding: 6px 16px 6px 0px;
        }
        .intercom-fs {
          font-size: 16px;
          line-height: 20px;
        }
        .intercom-pr:last-child {
            margin-bottom: 0px !important;
        }
        .intercom-pr {
            overflow-wrap: break-word;
            word-break: break-word;
        }
        .intercom-cl {
          position: absolute;
          top: 3px;
          right: 52px;
          width: 12px;
          height: 12px;
          padding-right: 8px;
          cursor: pointer;
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
          margin-top: 70px;
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
          border-bottom: 2px solid var(--app-accent-color) !important;
          background: transparent !important;
        }
        .content {
          width: 95%;
          margin: 0 auto;
          padding: 2rem 0 0 0;
        }
        .header-left, .header-right{
          width: 100%; 
        }
      </style>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <div class="main-wrapper">
        <!-- <GatewayHeader></GatewayHeader> -->
        <header class="payments-header">
          <div class="container header-fl">
            <div class="header-container columns" style="width: 100%">
              <div class="header-left column">
                <div id="site-name" class="navbar-brand has-text-weight-semibold">
                  <a class="navbar-item" href="#">
                    <img src="/media/${this.gateway.logo}" alt="logo" width="112" height="28">
                  </a>
                </div>
              </div>
              <ul class="header-right column" style="display: flex; justify-content: flex-end;">
                <li id="profile-drop" class="pos-r" @click=${this.selectToggle}>
                  ${this.gateway.profile?html`
                  <a class="dropdown-toggle profile-toggle no-after peers flex-nw align-c lh-1"  data-toggle="dropdown">
                    <div class="peer mR-10 profile">
                      <img class="w-2r bdrs-50p" src="${this.gateway.profile.photo?"/media/"+this.gateway.profile.photo:"images/web/user.svg"}" alt="">
                    </div>
                    <div class="peer profile-name">
                      <div class="gateway_name" style="margin-top: -4px;">
                        <span class="text" style="color: #4a4a4a; height: 0; font-weight: bolder;position: relative;top: -22px;left: -34px; z-index: 9999; width: 102px; margin-left: 44px;">
                        ${this.gateway.profile.firstName} ${this.gateway.profile.lastName}</span>
                        <span style="
                        padding-top: 6px; height: 0; position: absolute; left: 57px; top: 5px; font-size: 13px;">
                        ${this.gateway.profile.role}
                        </span>
                      </div>
                    </div>
                    
                  </a>
                  `:html``}
                </li>

                <div class="profile-select" id="profile">
                  <ul class="profile-list">
                    <li><a @click=${this.logout} class="profile-item"><span class="profile-select-icon"><fa-icon class="fas fa-power-off" color="var(--app-secondary-color)" ></fa-icon></span>&nbsp; Logout</a></li>
                  </ul>                 
                </div>
              </ul>
            </div>
          </div>
        </header>
        <div class="payments-banner">
          <div class="intercom-wrapper">
            <div class="intercom-mr">
              <div class="intercom-pd">
                  <div class="intercom-fs">
                      <p class="intercom-pr">You have 5 days left of your free trial</p>
                  </div>
              </div>
            </div>
            <div class="intercom-cl" @click=${this.close}>
              <fa-icon class="fas fa-times" size="1.5em" color="white"></fa-icon>
            </div>
          </div>
        </div>
        <div class="container">
          <div id="pay" class="base-card pay-frame">
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
                        style="margin-bottom:16px;"
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
    `}constructor(){super()}static get properties(){return{title:String,tagline:String,logo:String,pages:Array,tab:Object,oe:Array,profile:{type:Object,value:""}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);window.onclick=function(event){if(!event.target.matches(".text")){var sharedowns=document.getElementsByClassName("profile-select"),i;for(i=0;i<sharedowns.length;i++){var openSharedown=sharedowns[i];if(openSharedown.classList.contains("is-block")){openSharedown.classList.remove("is-block")}}}}}selectToggle(){profile.classList.toggle("is-block");profile.classList.contains("is-block")?this.isProfileVisible=!0:this.isProfileVisible=!1;return!0}getMainFontPath(url){if(url!=void 0||null!=url||""!=url){return url}else{return""}}close(){const cl=document.querySelector(".payments-banner");cl.style.display="none";console.log("clicked")}_profileTriggerClick(){this;this.qs(".main-menu-avatar, .dot").classList.toggle("vanish");if(this.qs(".js-hamburger").classList.contains("is-active")){this.qs(".js-hamburger").classList.remove("is-active");document.querySelector("body").classList.remove("is-fixed")}else{this.qs(".js-hamburger").classList.add("is-active");setTimeout(function(){document.querySelector("body").classList.add("is-fixed")},700)}}_sideIconClick(e){this.shadowRoot.querySelector(".tab-icon.is-active").classList.remove("is-active");e.currentTarget.classList.add("is-active");this.shadowRoot.querySelector(".menu-wrapper .icon-box-toggle").classList.add("active");this.qsa(".dashboard-nav, #dashboard-wrapper").forEach(function(el){el.classList.add("is-pushed")});this.shadowRoot.querySelector(".reader-switch label").classList.add("is-disabled");this._dataChildMenuSetup(e)}_viewList(){this.shadowRoot.querySelector("#hero").style.display="block";this.shadowRoot.querySelector("#pay").style.display="none";this.shadowRoot.querySelector("#pay").classList.add("is-hidden-mobile")}_gridClasses(pageInputGroup){const grid=super._gridClasses(pageInputGroup),grids=grid.split("|");try{return`is-${Math.floor(+(grids[0]/2))}`}catch(e){return"is-12"}}_iconBoxToggle(e){e.currentTarget.classList.toggle("active");e.preventDefault()}_dataChildMenuSetup(e){const menuId=e.currentTarget["data-child-menu"],menuTitle=e.currentTarget["data-title"];this.qsa(".sidebar-menu.is-active").forEach(function(el){el.classList.remove("is-active")});this.qs("#"+menuId).classList.add("is-active");this.qs(".sidebar-title").textContent=menuTitle}addActive(){let current=document.getElementsByClassName("active");if(0<current.length){current[0].className=current[0].className.replace(" active","")}this.className+=" active"}stateChanged(state){super.stateChanged(state)}_changeLink(pageGroupIndex,tabIndex){var url=window.location.pathname+window.location.search+"#/"+pageGroupIndex+"/"+tabIndex+"/";return url}}window.customElements.define("payments-page",PaymentsPage);export{paymentsPage as $paymentsPage,PaymentsPageBase};