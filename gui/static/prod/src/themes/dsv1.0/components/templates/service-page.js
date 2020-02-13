/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { css, html } from "../../../../../node_modules/lit-element/lit-element.js";
import "./section-page.js"; // todo move into base

import '../form-render.js';
import '../snack-bar.js';
import { ServicePageBase } from "../../../../components/templates/service-page.js";
import { Colors, Fonts, Reset } from "../../styles/shared.js";
import { ServiceStyles } from "../../styles/service.js";
import { VIEW_MODE_DIALOG, VIEW_MODE_MAIN } from "../../../../components/templates/page-view-element.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/editor-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/communication-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/notification-icons.js";
import "../../../../../node_modules/fa-icons/index.js";
import './missing-page.js';
import "../../../../components/adaptive-ui-icon.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ServicePage extends ServicePageBase {
  render() {
    if (!this.interface) {
      return html`<div>Cannot render an UNDEFINED tab!!.</div>`;
    } else if (!this.pageGroup || !this.page) {
      return html`
      <missing-page></missing-page>
      `;
    }

    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
      <style>
        body{
          font-size: 14px;
        }
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .lh-1 {
          line-height: 1!important;
        }
        .bdrs-50p {
          border-radius: 50%!important;
        }
        .peer>img {
          max-width: none;
        }
        .sz-2r, .w-2r {
          width: 32px;
          width: 2rem;
        }
        .mR-10 {
          margin-right: 10px!important;
        }
        [class*=" ti-"], [class^=ti-] {
          font-family: themify;
          speak: none;
          font-style: normal;
          font-weight: 400;
          -webkit-font-feature-settings: normal;
          font-feature-settings: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .peer {
          display: block;
          height: auto;
          -webkit-box-flex: 0;
          -ms-flex: 0 0 auto;
          flex: 0 0 auto;
        }
        .pos-r {
          position: relative!important;
        }
        .ps {
          overflow: hidden!important;
          overflow-anchor: none;
          -ms-overflow-style: none;
          touch-action: auto;
          -ms-touch-action: auto;
        }
        .flex-nw{
          flex-wrap: nowrap;
        }
        .align-c{
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .peer-greed, 
        .peers-greed>.peer, 
        .peers-greed>.peers {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 auto;
          flex: 1 1 auto;
        }
        .sidebar {
          background-color: var(--app-default-color);
          bottom: 0;
          overflow: hidden;
          position: fixed;
          top: 0;
          -webkit-transition: all .2s ease;
          -o-transition: all .2s ease;
          transition: all .2s ease;
          width: 60px;
          z-index: 1000;
        }
        .sidebar.active{
          width: 280px;
        }

        .section-card-content{
          width: 100%!important;
        }

        .sidebar.active + .page-container{
          width: calc(100% - 280px);
        }
        .sidebar.active + .page-container .section-card-content{
          width: 100%
        }
        .sidebar.active + .page-container .nav-bar{
          width: calc(100% - 280px)
        }

        /* .sidebar:hover{
          width: 280px;
        }

        .sidebar:hover + .page-container{
          width: calc(100% - 280px);
        }
        .sidebar:hover + .page-container .section-card-content{
          width: 100%
        }
        .sidebar:hover + .page-container .nav-bar{
          width: calc(100% - 280px)
        }
        .sidebar.active .logo{
          width: 40%;
          display: flex;
          justify-content: center;
          margin: 15px auto;
          position: relative;
        }
        .sidebar:hover .logo{
          width: 40%;
          display: flex;
          justify-content: center;
          margin: 15px auto;
          position: relative;
        } */
        .sidebar-menu>ul>li>a{
          display: none;
        }
        .sidebar-inner{
          position: relative;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
        }
        .sidebar-logo {
          border-bottom: 1px solid rgba(0,0,0,.0625);
          border-right: 1px solid rgba(0,0,0,.0625);
          line-height: 0;
          /* padding: 0 20px; */
          -webkit-transition: all .2s ease;
          -o-transition: all .2s ease;
          transition: all .2s ease;
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
        .sidebar-logo a {
          display: inline-block;
          width: 100%;
        }

        .sidebar-menu {
          border-right: 1px solid rgba(0,0,0,.0625);
          height: calc(100vh - 65px);
          list-style: none;
          margin: 30px 0 0 0;
          overflow: auto;
          padding: 0;
          position: relative;
        }
        .sidebar-menu:after {
          display: block;
          clear: both;
          content: "";
        }
        .sidebar-menu>ul>li>a {
          display: block;
          font-size: 15px;
          font-weight: 500;
          padding: 5px 15px;
          position: relative;
          white-space: nowrap;
          color: #fff;
        }
        .sidebar-menu li a {
          color: #72777a;
          -webkit-transition: all .3s ease;
          -o-transition: all .3s ease;
          transition: all .3s ease;
        }
        .sidebar-menu li a.active{
          background: rgba(4, 105, 255, 0.5)!important; 
          border-left: 3px solid var(--app-accent-color);
        }
        .sidebar-menu>ul>li>a .icon-holder {
          border-radius: 6px;
          display: inline-block;
          font-size: 17px;
          height: 35px;
          left: 6px;
          top: 9px;
          line-height: 35px;
          margin-right: 14px;
          position: relative;
          text-align: center;
          -webkit-transition: all .3s ease;
          -o-transition: all .3s ease;
          transition: all .3s ease;
          width: 35px;
        }
        .sidebar-menu>ul>li>a[title]:hover::after{
          background: var(--app-default-color);
          content: '';
        }
        /* .sidebar:hover .sub-menu{
          display: none;
          margin-top: 10px;
        } */
        .sub-menu{
          display: none;
          margin-top: 10px;
        }
        .sub-menu li{
          color: #fff;
          margin: 0 0 0 67px;
          padding: 0 0 0 15px;
          border-left: 1px solid #fff;
        }
        .sub-menu li a{
          padding: 10px 0;
          color: inherit;
          display: inline-block;
          width: 100%;
        }
        .sub-menu li.active{
          background: rgba(4, 105, 255, 0.5)!important;
        }
        .logo{
          width: 47px;
          display: flex;
          justify-content: center;
          margin: 15px auto;
          position: relative;
          /* padding: 20px; */
        }


        .page-container {
          width: 100%;
          min-height: 100vh;
          margin-left: 60px;
          position: relative;
          -webkit-transition: all .2s ease;
          -o-transition: all .2s ease;
          transition: all .2s ease;
          /* background-color: #e5e5e5; */
        }
        .page-container.active{
          margin-left: 280px;
        }
        /* .sidebar:hover + .page-container{
          margin-left: 280px;
        } */
        .header {
          background-color: #fff;
          border-bottom: 1px solid rgba(0,0,0,.0625);
          display: block;
          height: 65px;
          margin-bottom: 0;
          padding: 0;
          position: fixed;
          -webkit-transition: all .2s ease;
          -o-transition: all .2s ease;
          transition: all .2s ease;
          width: calc(100% - 61px);
          z-index: 800;
        }
        .header .header-container:after {
          display: block;
          clear: both;
          content: "";
        }
        .header .header-container .header-left {
          float: left;
          margin-left: 15px;
        }
        .header .header-container .header-left, 
        .header .header-container .header-right {
          list-style: none;
          margin-bottom: 0;
          padding-left: 0;
          position: relative;
        }
        .header .header-container .header-left>li, 
        .header .header-container .header-right>li {
          float: left;
        }
        .header .header-container .header-left>li>a, 
        .header .header-container .header-right>li>a {
          color: #72777a;
          display: block;
          line-height: 65px;
          min-height: 65px;
          padding: 0 15px;
          -webkit-transition: all .2s ease-in-out;
          -o-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
        }
        .navbar-burger {
          color: #4a4a4a;
          cursor: pointer;
          display: block;
          position: absolute!important;
          width: 3.25rem;
          margin-left: auto;
          top: 7px;
          left: -11px;
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
          margin: 21px 0 0 0;
        }
        .navbar-burger:hover{
          background: transparent!important;
        }
        .navbar-burger span:nth-child(1) {
          top: 5px;
          transform-origin: center;
          transition-duration: 86ms;
          transition-property: background-color,opacity,transform;
          transition-timing-function: ease-out;
        }
        .navbar-burger span:nth-child(2) {
          top: 10px;
          transform-origin: center;
          transition-duration: 86ms;
          transition-property: background-color,opacity,transform;
          transition-timing-function: ease-out;
        }
        .navbar-burger span:nth-child(3) {
          top: 0;
        }
        .navbar-burger span:nth-child(2).active {
          opacity: 0;
        }
        .navbar-burger span:nth-child(1).active{
          transform-origin: center;
          transition-duration: 86ms;
          transition-property: background-color,opacity,transform;
          transition-timing-function: ease-out;
          transform: rotate(45deg) translateY(1px) translateX(-8px);
        }
        .navbar-burger span:nth-child(3).active{
          transform-origin: center;
          transition-duration: 86ms;
          transition-property: background-color,opacity,transform;
          transition-timing-function: ease-out;
          transform: rotate(-45deg) translateY(-5px) translateX(-4px);
        }
        .header .header-container .header-right {
          float: right;
        }
        .header .header-container .header-right .profile-name{
          line-height: 61px;
        }
        .header .header-container .header-right .profile{
          line-height: 84px;
        }
        .header .header-container .header-right img{
          vertical-align: center;
        }
        .main-container{
          padding: 85px 20px 20px;
          min-height: calc(100vh);
          background: #e5e5e5;
          min-height: calc(100vh - 61px);
        }
        .sticky{
          display: none;
        }
        /* .header .header-container .header-right:hover .profile-select{
          display: block;
        } */
        .profile-select{
          position: absolute;
          right: -1px;
          top: 78px;
          width: 230px;
          background: #fff;
          /* padding: 20px; */
          box-shadow: 3px 8px 5px #e5e5e5;
          z-index: -1;
          border-radius: 4px;
          display: none;
          height: auto;
          transition: .3s ease-in-out top;
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
      .profile-select-icon{
        position: relative; 
        top: 4px;
        font-size: 12px;
      }
      .profile-select .profile-list li{
        color: #202124;
        border-bottom: 1px solid #f6f6f6;
      }
      .profile-select .profile-list li:last-child{
        border-bottom: 0 solid transparent;
      }
      .profile-select .profile-list li a{
        width: 100%;
        color: inherit;
        /* margin: 5px 0; */
        display: inline-block;
        text-transform: capitalize;
        padding: 16px 20px;
        font-size: 14px;
      }
      .profile-select .profile-list li a:hover{
        background: #e5e5e5;
      }
        @media (min-width: 567px){
          .sticky{
            display:none;
            position: absolute; 
            background: var(--app-default-color); 
            /* width: 300px;  */
            padding: 10px 20px;
            padding: 12px 20px;
            top: 0;
            margin-bottom:20px;
            left: 60px;
            z-index: 20;
          }
        }
      </style>
      <div class="main-wrapper">
        
        ${this.view === VIEW_MODE_DIALOG ? html`
          <section-page id="dialog" @view-list=${this._viewList} queue=${this.dialogServicesQueue} ></section-page>
        ` : html`
        
        `}
      <div class="is-flex">
        <div class="sidebar" id="sidebar"  @click=${this.closeProfile}>
          <div class="sidebar-inner">
            <div class="sidebar-logo">
              <div class="peers flex-nw align-c">
                <div class="peer peer-greed">
                  <a @click="${this.reloadPage}"class="sidebar-logo">
                    <div class="peer align-c flex-nw">
                      <div class="peer">
                        <div class="logo">
                           <img src="${this._computeLogo(this.gateway)}" alt=""> 
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div> 

            <div class="sidebar-menu scrollable ps">
              <ul>
                ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                <li class="nav-item" title="${ServicePage.toTitleCase(pageGroup.title)}">
                  <a href="$1" id="menu-item" class="nav-menu-item ${pageGroupIndex == this._pageGroup ? "selected  active" : ""} items" @click=${this.handleClick}>
                    <span class="icon-holder">
                      <adaptive-ui-icon style="width: 19px;height: 19px;fill: #fff;" icon="${pageGroup.icon || 'icons:info'}"></adaptive-ui-icon>
                    </span>
                    <span style="position: relative; top: 6px;" class="nav-title">${ServicePage.toTitleCase(pageGroup.title)}</span>
                    <!-- <span class="icon is-small aside-icons" style="float: right;"><fa-icon class="fa fa-caret-down" color="white"></fa-icon></span> -->
                  </a>
                  <!-- <ul class="sticky">
                    <li>${ServicePage.toTitleCase(pageGroup.title)}</li>
                    ${pageGroup.pages.map((menu, menuIndex) => html`
                    <li @click="${this.toggleMenu}" class="${pageGroupIndex == this._pageGroup && menuIndex == this._page ? "selected  active" : ""}">
                        <a
                        class="nav-item"
                        href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${menuIndex}/"
                        >${ServicePage.toTitleCase(menu.title)}</a>
                    </li>
                    `)}
                  </ul> -->
                  <ul class="sub-menu">
                    ${pageGroup.pages.map((menu, menuIndex) => html`
                        <li @click="${this.toggleMenu}" class="${pageGroupIndex == this._pageGroup && menuIndex == this._page ? "selected  active" : ""}">
                            <a
                            class="nav-item"
                            href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${menuIndex}/"
                            >${ServicePage.toTitleCase(menu.title)}</a
                            >
                        </li>
                        `)}
                  </ul>
                </li>
                `)}
              </ul>
            </div>
          </div>
        </div>

        <div class="page-container">
          <header class="header nav-bar">
            <div class="header-container">
              <ul class="header-left">
                <li>
                  <a >
                  <div
                    id="navbarBurger"
                    class="navbar-burger burger"
                    data-target="navMenuIndex"
                    @click=${this.drawer}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  </a>
                </li>
              </ul>
              <ul class="header-right">
                <li id="profile-drop" class="pos-r" @click=${this.selectToggle}>
                  ${this.gateway.profile ? html`
                  <a class="dropdown-toggle profile-toggle no-after peers flex-nw align-c lh-1"  data-toggle="dropdown">
                    <div class="peer mR-10 profile">
                      <img class="w-2r bdrs-50p" src="${this.gateway.profile.photo ? "/media/" + this.gateway.profile.photo : "images/web/user.svg"}" alt="">
                    </div>
                    <div class="peer profile-name">
                      <span style="color: #4a4a4a; font-weight: bolder;">
                      ${this.gateway.profile.firstName} ${this.gateway.profile.lastName}</span>
                    </div>
                  </a>
                  ` : html``}
                </li>

                <div class="profile-select" id="profile">
                  <ul class="profile-list">
                    <li><a @click=${this.logout} class="profile-item"><span class="profile-select-icon"><fa-icon class="fas fa-power-off" color="var(--app-default-color)" ></fa-icon></span>&nbsp; Logout</a></li>
                  </ul>                 
                </div>
              </ul>
            </div>
          </header>

          <main class="main-container" @click="${this.closeProfile}">
            <div class="row">
              ${this.page.pageInputGroups.map((feed, feedIndex) => html`
                  <div class="column ${this._gridClasses(feed)} is-paddingless">
                    <form-render
                      .feed="${feed}"
                      .params=${this.parseParams()}
                    ></form-render>
                  </div>
                `)}
            </div>
          </main>
        </div>
      </div>
      <snack-bar
        id="snack-bar"
        ?active="${this._snackbarOpened}"
        context="${this._snackbarContext}"
        style="z-index: 9999;"
      >
        <span slot="title">${this._snackbarTitle}</span>
        <span>${this._snackbarMessage}</span>
      </snack-bar>
     `;
  }

  constructor() {
    super();
    this.isSideMenuVisible = false;
    this.isSideMenuVisible = false;
    this.sideBarOpen = 280;
    this.sideBarClose = 60;
  }

  static get properties() {
    return {
      pages: Array,
      tab: Object,
      profile: {
        type: Object,
        value: ""
      },
      page: Number,
      mainColor: String,
      isSideMenuVisible: Boolean,
      isSubMenuOpen: Boolean,
      isProfileVisible: Boolean
    };
  }

  reloadPage() {
    window.location.reload();
  }

  drawer(evt) {
    evt.preventDefault();
    this.closeProfile();
    const aside = document.querySelector('#sidebar');
    const content = document.querySelector('.page-container');
    const hum = document.querySelector('.navbar-burger');

    if (this.isSideMenuVisible) {
      aside.classList.remove('active');
      content.classList.remove('active');
      hum.firstElementChild.classList.remove("active");
      hum.lastElementChild.classList.remove("active");
      hum.children[1].classList.remove('active');
      this.isSideMenuVisible = false;
    } else {
      aside.classList.add('active');
      content.classList.add('active');
      hum.firstElementChild.classList.add("active");
      hum.lastElementChild.classList.add("active");
      hum.children[1].classList.add('active');
      this.isSideMenuVisible = true;
    }

    if (aside.clientWidth == this.sideBarOpen) {
      const menuItems = document.querySelectorAll('.sub-menu'); // menuItems

      menuItems.forEach(item => {
        item.classList.remove('is-block');
      });
    } // this.handleClick();

  }

  handleClick(evt) {
    evt.preventDefault();
    const menuItems = evt.currentTarget.nextElementSibling;
    const toggleClass = "is-block";
    const highLight = "selected";

    if (!this.isSideMenuVisible) {
      //if sidebar is not visible drawer function to open sidebar
      this.drawer(evt);
    } else {
      if (menuItems.classList.contains(toggleClass)) {
        menuItems.classList.remove(toggleClass);
      } else {
        // collapse all current active
        this.qsa(".aside-sub-menu, .is-block").forEach(function (el) {
          el.classList.remove(toggleClass);
        }); // expand related to source of event

        menuItems.classList.add(toggleClass);
      }

      this.qsa(".selected").forEach(function (el) {
        if (!el.classList.contains("active")) el.classList.remove(highLight); //
      });
      this.qsa(".selected").forEach(function (el) {
        if (!el.classList.contains("is-block")) el.classList.remove(highLight); //
      });

      if (menuItems.classList.contains(highLight)) {} else {
        menuItems.classList.add(highLight);
      }
    }
  }

  fitstUpdated() {
    var parent = document.querySelector('.sidebar');
    var child = document.querySelector('.sidebar-inner');
    child.style.right = child.clientWidth - child.offsetWidth + "px";
  }

  selectToggle() {
    profile.classList.toggle('is-block');
    profile.classList.contains('is-block') ? this.isProfileVisible = true : this.isProfileVisible = false;
  }

  closeProfile() {
    let profile = document.querySelector('#profile');

    if (this.isProfileVisible) {
      if (profile.classList.contains('is-block')) {
        profile.classList.toggle('is-block');
        this.isProfileVisible = false;
      }
    }
  }

  static get styles() {
    return [Colors, Fonts, ServiceStyles, css`
        :host {
          display: block;
        }
      `];
  }
  /**
   * Dialogs Back navigation, Pop dialogs' stack
   *
   * @param evt
   * @private
   */


  _viewList(evt) {
    this.mainNavigation();
  }
  /**
   * TODO #301 duplicated function
   * @param feed
   * @returns {string}
   * @private
   */


  _gridClasses(feed) {
    const grid = super._gridClasses(feed);

    const grids = grid.split('|');

    try {
      return `is-${Math.floor(Number(grids[0] / 2))}`;
    } catch (e) {
      return 'is-12';
    }
  }

}

window.customElements.define('service-page', ServicePage);