import{css,html}from"../../../../../node_modules/lit-element/lit-element.js";import"./section-page.js";import"../form-render.js";import"../snack-bar.js";import{ServicePageBase}from"../../../../components/templates/service-page.js";import{Colors,Fonts,Reset}from"../../styles/shared.js";import{ServiceStyles}from"../../styles/service.js";import{VIEW_MODE_DIALOG,VIEW_MODE_MAIN}from"../../../../components/templates/page-view-element.js";import"../../../../../node_modules/@polymer/iron-icon/iron-icon.js";import"../../../../../node_modules/@polymer/iron-icons/iron-icons.js";import"../../../../../node_modules/@polymer/iron-icons/editor-icons.js";import"../../../../../node_modules/@polymer/iron-icons/communication-icons.js";import"../../../../../node_modules/@polymer/iron-icons/notification-icons.js";import"../../../../../node_modules/fa-icons/index.js";import"./missing-page.js";import"../../../../components/adaptive-ui-icon.js";class ServicePage extends ServicePageBase{render(){if(!this.interface){return html`<div>Cannot render an UNDEFINED tab!!.</div>`}else if(!this.pageGroup||!this.page){return html`
      <missing-page></missing-page>
      `}return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
      <style>
      header.header{
          height: 64px;
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 15px;
      }


      div.heading{

        margin-bottom: -30px;
       } 

      div.modal-container{
        width: 100%;
        height: 100vh;
        background: rgba(226, 226, 226, .9);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        padding: 45px;
      }
      div.modal-container div.modal-base {
        opacity: 1;
        width: 688px;
        border-radius: 5px;
        background-color: #fff;
        margin: 0 auto;
        padding: 0 25px;
        position: relative;
      }
      div.modal-container div.modal-base .modal-header{
        padding: 25px 0 25px 35px;
        /* border-bottom: solid 1px rgba(71, 71, 71, 0.2); */
      }
      div.modal-container div.modal-base .modal-header h1 {
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #1f2552;
      }
      /*div.modal-container div.modal-base .modal-body{*/
        /*padding: 90px calc(68px - 25px) 68px calc(68px - 25px);*/
      /*}*/
      div.modal-container div.modal-base .modal-body label{
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        color: #202124;
      }
      div.modal-container div.modal-base .modal-body select{
        width: 317px;
        font-size: 14px;
        height: 40px;
        padding: 0 13.9px;
        display: inline-block;
        color: #202124;
        line-height: 1;
        background-color: #f6f6f6;
        border: 1px solid #ededed;
      }
      div.modal-container div.modal-base .modal-body input{
        width: 100%;
        height: 40px;
        border-radius: 6px;
        border: solid 1px #ededed;
        background-color: #f6f6f6;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        color: #202124;
        padding: 16px 13.5px;
      }
      div.modal-container div.modal-base .modal-cta{
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
      }
      div.modal-container div.modal-base .modal-cta button{
        width: 211px;
        height: 49px;
        border-radius: 4px;
        background-color: #157cf8;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
      }

      body {
          background-color: #fff;
          color: #172B4D;
          font-family: 'Work Sans', sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.42857142857143;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          text-decoration-skip-ink: auto;
      }

      .column-wrap {
          display: flex;
          flex-direction: row;
          height: calc(100vh - 0px);
          margin-top: 0px;
      }

      .mipay-aside {
          bottom: 0px;
          left: 0px;
          position: fixed;
          top: 0px;
          z-index: 200;
          width: 304px;
      }
      .mipay-aside.left{
          left: 0;
      }

      .aside {
          height: 100%;
          overflow: hidden;
          /* background-color: rgb(7, 71, 166); */
          background-color: var(--app-default-color);
          color: #fff;
          /* padding: 10px; */
      }

      .aside-header{
          width: 100%;
          position: relative;
          /* box-sizing: border-box; */
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 50px;
          margin: 0 0 55px 0;
      }
      .aside-header img{
          margin: 0 0 0 60px;
         
      }

      .aside-body a{
          color: #fff!important;
          font-weight: normal;
          padding: 17px 0!important;
      }

      .menu-list a:hover{
          background: rgba(4, 105, 255, 0.5)!important; 
          border-left: 3px solid var(--app-accent-color);   
      }
      .menu-list li ul{
          display: none;
          transition: display 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
          margin-right: 0;
          padding-left: 0;
      }
      .menu-list ul li a{
          padding-left: 20px!important;
      }
      .menu-list ul li a:hover, .menu-list ul li a.active{
          border-left: 0 solid transparent!important;
      }

      .aside-icons{
          margin-right: 15px;
          margin-left: 30px;
          position: relative;
          top: 6px;
      }
      .aside-icons svg{
        fill: #fff;
      }

      .aside-sub-menu{
          margin-left: 68px!important;
          display: block;
      }

      .is-active, 
      .menu-list a.active{
          background: rgba(4, 105, 255, 0.5)!important; 
          border-left: 3px solid var(--app-accent-color);
      }



      /* The main content section */
      .main-content{
          margin-left: 64px;
          margin-top: 0px;
          width: 0px;
          background-color: #EDEDEE;
          flex: 1 1 auto;
      }
      .main-section{
          min-width: 0px;
          min-height: 100%;
          flex: 1 1 0px;
      }
      .section-header{
          width: 100%;
          background-color: #fff;
          height: 64px;
          box-shadow: 0 1px 5px 0 #E5E5E5;
      }
      /* .navbar-burger >span.span-white */
      .navbar-burger {
          color: #4a4a4a;
          cursor: pointer;
          display: block;
          height: 3.25rem;
          position: absolute!important;
          width: 3.25rem;
          margin-left: auto;
          top: 7px;
          left: 5px;
          transition: left 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
      }
      .navbar-burger span {
          background-color: currentColor;
          display: block;
          height: 1px;
          left: calc(50% - 8px);
          position: absolute;
          transform-origin: center;
          transition-duration: 86ms;
          transition-property: background-color,opacity,transform;
          transition-timing-function: ease-out;
          width: 16px;
      }
      .navbar-burger span:nth-child(1) {
          top: calc(50% - 6px);
      }
      .section-user{
          margin-right: 40px;
          cursor: pointer;
      }
      .profile-image{
          border: 3px solid var(--app-default-color);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin-right: 15px;
      }
      .profile{
          height: 64px;
          align-items: center;
      }
      .profile p  {
          font-weight: 600;
      }
      .dash-content{
          margin-top: 30px;
          padding: 0 45px;
      }

      .profile-select{
        position: absolute;
        right: 44px;
        top: 89px;
        width: 300px;
        background: #fff;
        padding: 20px;
        box-shadow: 3px 8px 5px #e5e5e5;
        z-index: 9999;
        border-radius: 4px;
        display: none;
      }
      .profile-select::after{
        content: '';
        position: absolute;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
        top: -20px;
        right: 20px;
      }
      .profile-select .profile-image{
        width: 70px;
        height: 70px;
        margin-left: 20px;
      }
      .profile-out a{
        background-color: var(--app-default-color);
        color: white;
        padding: 10px 25px;
        margin: 20px 0 0 0;
        position: relative;
        top: 19px;
        border-radius: 6px;
      }



      /* Mobile responsive */
      @media screen and (min-width: 1024px){
          .navbar-burger {
              display: none;
          }
      }
      @media screen and (max-width: 768px) {
          .mipay-aside{
              /* position: absolute; */
              left: -304px;
              transition: left 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
          }
          .main-content{
              padding: 0!important;
              margin: 0;
          }
          .section-header{
              margin: 0 0 0 0;
          }
      }
      </style>
      <div class="main-wrapper">
        
        ${this.view===VIEW_MODE_DIALOG?html`
        <div class="modal-container">
        <div class="modal-base " style="max-height: 100vh; padding: 7px; overflow: auto; width: 100vw;">
          <div class="modal-header" >
            <div class="heading" >
              <h1 class="title has-text-black-bis" style="width: 80%; display: inline-block; ">${this.page.title}</h1>


              <a style="display: inline-block;float: right; color: black;
              border: 1px solid black; padding: 0.1rem 1rem; 
              border-radius: 25px 1px 1px 25px; box-shadow: 1px 1px 1px 0px black; " @click=${this._viewList}>Back</a>

            </div>
          </div>

        

          <div id="d-styling" class="modal-body">            
          <section-page id="dialog" queue=${this.dialogServicesQueue} ></section-page>
          </div>

         

        </div>
      </div>
        `:html`
        
        `}
        
        <div class="columns column-wrap">
          <div class="column is-paddingless mipay-aside">
            <aside class="aside"  @click="${this.closeProfile}" style="overflow-y: auto;">
              <div class="aside-header">
              <img src="${this._computeLogo(this.gateway)}" height="128px" width="128px"alt="branding" />
              </div>
              <div class="aside-body">
                <nav class="manu">
                  <ul class="menu-list">
                    ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
                        <li id="list_${pageGroupIndex}">
                          <a
                            href="#"
                            class="${pageGroupIndex==this._pageGroup?"selected  active":""}"
                            @click="${this.handleClick}"
                          >
                            <span class="icon is-small aside-icons"><adaptive-ui-icon style="width: 19px;height: 19px;fill: #fff;" icon="${pageGroup.icon||"icons:info"}"></adaptive-ui-icon></span>
                            ${ServicePage.toTitleCase(pageGroup.title)}&nbsp;
                            <span class="icon is-small aside-icons"><fa-icon ></fa-icon></span>
                          </a>
                          <ul class="aside-sub-menu">
                            ${pageGroup.pages.map((menu,menuIndex)=>html`
                                <li @click="${this.toggleMenu}">
                                  <a
                                    class="nav-item ${pageGroupIndex==this._pageGroup&&menuIndex==this._page?"selected  active":""}"
                                    href="${window.location.pathname+window.location.search}#/${pageGroupIndex}/${menuIndex}/"
                                    >${ServicePage.toTitleCase(menu.title)}</a
                                  >
                                </li>
                              `)}
                          </ul>
                        </li>
                      `)}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
          <div
            class="column main-content"
            style="will-change: padding-left; padding-top: 0; padding-left: 253px; transition: padding-left 300ms cubic-bezier(0.2, 0, 0, 1) 0s;"
          >
            <div class="is-flex">
              <div class="main-section">
                <div class="section-header">
                  <div
                    id="navbarBurger"
                    @click=${this.toggleMenu}
                    class="navbar-burger burger"
                    data-target="navMenuIndex"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="section-user is-pulled-right is-flex" @click=${this.ShowProfile}>
                    <div class="icon is-small"></div>
                    ${this.gateway.profile?html`
                    <div class="profile is-flex">
                      <div class="profile-image">
                        <img src="${this.gateway.profile.photo?"/media/"+this.gateway.profile.photo:"images/web/user.svg"}" alt="" />
                      </div>
                      <p>${this.gateway.profile.firstName} ${this.gateway.profile.lastName}</p>
                    </div>

                    <div class="profile-select" id="profile">
                        <div class="columns is-mobile">
                          <div class="column is-5">
                            <div class="profile-image">
                              <img src="${this.gateway.profile.photo?"/media/"+this.gateway.profile.photo:"images/web/user.svg"}" alt="" />
                            </div>
                          </div>

                          <div class="column">
                            <div class="profile-name">
                              <p>${this.gateway.profile.firstName} ${this.gateway.profile.lastName}</p>
                            </div>

                            <div class="profile-out">
                              <a  @click="${this.logout}" href="#">Logout</a>
                            </div>
                          </div>
                        </div>
                    </div>

                    `:html``}
                  </div>
                </div>
                <div class="dash-content"  @click="${this.closeProfile}">
                  <!-- <div class="dash-title" style="margin-bottom: 20px;">

                  </div> -->
                  <div class="dash-body">
                    ${this.page.pageInputGroups.map(feed=>html`
                        <div class="column is-12 is-paddingless">
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
      </div>
      <snack-bar
        id="snack-bar"
        ?active="${this._snackbarOpened}"
        context="${this._snackbarContext}"
      >
        <span slot="title">${this._snackbarTitle}</span>
        <span>${this._snackbarMessage}</span>
      </snack-bar>
     `}constructor(){super();this.isSideMenuVisible=!1;this.isProfileVisible=!1;this.shouldDocumentClick=!1}static get properties(){return{pages:Array,tab:Object,profile:{type:Object,value:""},page:Number,mainColor:String,isSideMenuVisible:Boolean,isProfileVisible:Boolean,shouldDocumentClick:Boolean}}handleClick(evt){evt.preventDefault();const menuItems=evt.currentTarget.nextElementSibling,toggleClass="is-block",highLight="selected";if(menuItems.classList.contains(toggleClass)){menuItems.classList.remove(toggleClass)}else{this.qsa(".aside-sub-menu, .is-block").forEach(function(el){el.classList.remove(toggleClass)});menuItems.classList.add(toggleClass)}this.qsa(".selected").forEach(function(el){if(!el.classList.contains("active"))el.classList.remove(highLight)});this.qsa(".selected").forEach(function(el){if(!el.classList.contains("is-block"))el.classList.remove(highLight)});if(!menuItems.classList.contains(highLight)){menuItems.classList.add(highLight)}}static get styles(){return[Colors,Fonts,ServiceStyles,css`
        :host {
          display: block;
        }
      `]}toggleProfile(evt){evt.preventDefault();const profileContent=document.getElementById("profile-content");profileContent.classList.toggle("is-block")}toggleMenu(){const menu=document.querySelector(".mipay-aside"),bars=document.querySelector("#navbarBurger");if(this.isSideMenuVisible){menu.classList.remove("left");bars.style.left="0";this.isSideMenuVisible=!1}else{bars.style.left="314px";menu.classList.add("left");bars.style.background="white";this.isSideMenuVisible=!0}}ShowProfile(){const prof=document.querySelector(".profile-select");if(!1==this.isProfileVisible){prof.style.display="block";this.isProfileVisible=!0;this.shouldDocumentClick=!0}else{prof.style.display="none";this.shouldDocumentClick=!1;this.isProfileVisible=!1}}closeProfile(){const prof=document.querySelector(".profile-select");if(!0==this.isProfileVisible){prof.style.display="none";this.shouldDocumentClick=!1;this.isProfileVisible=!1}}_viewList(){this.mainNavigation()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}window.customElements.define("service-page",ServicePage);