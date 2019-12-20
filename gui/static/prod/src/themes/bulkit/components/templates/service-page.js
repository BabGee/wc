/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/social-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/communication-icons.js";
import '../snack-bar.js'; // These are the shared styles needed by this element.

import { DASHBOARD_STYLES } from "../../styles/dashboard-styles.js";
import { BULMA_STYLES } from "../../styles/bulma-styles.js";
import { TooltipStyles } from "../../styles/tooltip-styles.js";
import "./section-page.js"; // todo move into base

import '../form-render.js';
import { ServicePageBase } from "../../../../components/templates/service-page.js";
import { VIEW_MODE_DIALOG, VIEW_MODE_MAIN } from "../../../../components/templates/page-view-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ServicePage extends ServicePageBase {
  render() {
    if (!this.interface) {
      return html`<div>Cannot render an UNDEFINED tab!!.</div>`;
    } else if (!this.pageGroup || !this.page) {
      return html`
      <h3> this is a missing page </h3>
      <a href="/#/0/0/">Go Home</a>
      `;
    }

    return html`
        
${BULMA_STYLES}            
${DASHBOARD_STYLES}    
${TooltipStyles}    
<style>
.dashboard-wrapper{
    padding: 91px 52px 0 53px;
}
@media (min-width: 1281px) {
  
.dashboard-wrapper{
    padding: 91px 52px 0 53px;
}
  
}
@media (max-width: 767px){
  .dashboard-wrapper {
      margin-left: 79px;
      padding: 71px 43px 0 21px;
  }
}

nav {
    color: #fff;
}
.brand-name{
    
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
}
/*
.content-wrapper-before{
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    -webkit-transition: .3s ease all;
    -moz-transition: .3s ease all;
    -o-transition: .3s ease all;
    transition: .3s ease all;
    background-color: var(--app-default-color);
}
*/
@media (max-width: 767px){
    .dashboard-wrapper {
        margin-left: 60px;
        padding: 33px 0 0 0;
    }
    .mobile-borderless, .flex-card{
        border-radius: 0!important;
    }
    .column.mobile-fullwidth{
        width: 100%!important;
    }
    .columns, .column{
        padding: 0;
    }
}
.parent-link.is-active{
    background-color:var(--app-accent-color);
    color: #ffffff;
}

</style>        
            <!-- Main sidebar menu -->
        <nav class="main-menu">
            <div class="main-menu-inner">
                <!-- Side icon menu -->
                <ul style="overflow-y: auto;max-height: 100%;overflow-x: hidden;">

                    <li class="main-logo">
                        <a href="/">
                        <img style="" src="${this._computeLogo(this.gateway)}" alt="">
                        </a>
                    </li>
                    
                    ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                    <li class="side-icon ${pageGroupIndex == this._pageGroup ? 'is-active' : ''}" 
                       @mouseover="${this._sideIconClick}" 
                        data-title="${pageGroup.title}"
                        data-child-menu="dashboard-menu-${pageGroupIndex}">
                        <iron-icon icon="${pageGroup.icon || 'icons:announcement'}"></iron-icon>
                        
                    </li>
                    `)}
                </ul>
                <!-- /Side icon menu -->
                
                ${this.gateway.profile ? html`
                    <!-- Profile wrapper -->
                    <ul class="profile">
                        <li>
                            <!-- Profile avatar -->
                            <a class="profile-trigger" 
                                @click="${this._profileTriggerClick}"
                            href="javascript:void(0);">
                            <img class="main-menu-avatar" src="${this.gateway.profile.photo ? '/media/' + this.gateway.profile.photo : 'images/web/user.svg'}" alt="">
                            <span class="dot"></span>
                        </a>
                        <!-- /Profile avatar -->

                        <!-- Profile avatar -->
                        <div class="fab js-hamburger">
                            <!-- Profile page wrapper -->
                            <div class="profile-container">
                                <div class="inner">
                                    <div class="container is-fluid">
                                        <!-- Profile with cover -->
                                        <div id="profile-cover" class="columns">
                                            <div class="cover-overlay"></div>
                                            <div class="column is-10 is-offset-1 heading-wrapper">
                                                <div class="profile-heading">
                                                    <div class="columns">
                                                        <div class="column is-2 has-text-centered">
                                                            <div class="image is-128x128 avatar">
                                                                <div class="avatar-overlay">
                                                                    <i class="fa fa-camera fa-2x"></i>
                                                                </div>
                                                                <img src="${this.gateway.profile.photo ? '/media/' + this.gateway.profile.photo : 'images/web/user.svg'}" alt="">
                                                            </div>
                                                        </div>
                                                        <div class="column is-4 name">
                                                            <p>
                                                                <span class="title light-text is-bold">${this.gateway.profile.firstName} ${this.gateway.profile.lastName}</span>
                                                            </p>
                                                            <p class="tagline light-text">${this.gateway.profile.role}</p>
                                                            <div>
                                                                <button @click="${this.logout}" class="button dash-btn ripple primary-btn btn-outlined follow rounded width-100">
                                                                     <iron-icon icon="icons:exit-to-app"></iron-icon>Logout
                                                                </button>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <!-- /Profile with cover -->

                                        <!-- Profile Sections -->
                                        <div class="container">
                                            <div class="columns">
                                                <div class="column is-10 is-offset-1">
                                                    <div class="profile-sections-wrapper">
                                                        <!-- Profile details -->
                                                        <div id="profile-details">
                                                            <div class="columns">
                                                                <!-- Details sub view -->
                                                                <div id="profile-view" class="column is-10 is-offset-1">
                                                                    <div class="flex-card is-top light-bordered raised animated preFadeInUp fadeInUp">
                                                                        <div class="card-body">
                                                                            <div class="columns">
                                                                                <div class="column is-6">
                                                                                    <div class="info-section">
                                                                                        <h1 class="info-heading">Personal info</h1>
                                                                                        <div class="info-divider"><span></span></div>
                                                                                        <div class="info-item">
                                                                                            <div class="columns is-gapless">
                                                                                                <div class="column is-5">
                                                                                                    <div class="info-title">
                                                                                                        Full name :
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="column is-7">
                                                                                                    <div class="info-description highlighted">
                                                                                                       ${this.gateway.profile.firstName} ${this.gateway.profile.lastName}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="info-item">
                                                                                            <div class="columns is-gapless">
                                                                                                <div class="column is-5">
                                                                                                    <div class="info-title">
                                                                                                        Role :
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="column is-7">
                                                                                                    <div class="info-description">
                                                                                                      ${this.gateway.profile.role}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="info-item">
                                                                                            <div class="columns is-gapless">
                                                                                                <div class="column is-5">
                                                                                                    <div class="info-title">
                                                                                                        Status :
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="column is-7">
                                                                                                    <div class="info-description">
                                                                                                       ${this.interface.status}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="info-section">
                                                                                        <h1 class="info-heading">Contact info</h1>
                                                                                        <div class="info-divider"><span></span></div>
                                                                                        <div class="info-item">
                                                                                            <div class="columns is-gapless">
                                                                                                <div class="column is-5">
                                                                                                    <div class="info-title">
                                                                                                        Username :
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="column is-7">
                                                                                                    <div class="info-description highlighted">
                                                                                                        ${this.gateway.profile.username}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- /Details sub view -->
                                                            </div>
                                                        </div>
                                                        <!-- /Profile details -->

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /Profile Sections -->
                                    </div>
                                </div>
                            </div>
                            <!-- Profile page wrapper -->
                            <div class="fab__ripple"></div>
                            <div class="hamburger"></div>
                        </div>
                        <!-- Profile avatar -->
                    </li>  
                </ul>
                <!-- /Profile wrapper -->
                
                ` : html``}
            </div>
        </nav>
        <!-- /Main sidebar menu -->

        <!-- Child push sidebar menu -->
        <nav class="child-menu" style="overflow-y: auto;" @mouseleave="${this._menuWrapperClick}">
            <div class="child-menu-inner">
                <!-- Child menu header -->
                <ul>
                    <li class="child-header">
                        <div class="sidebar-title">Navigation</div>
                        <a id="close-child-menu" href="#" @click="${this._menuWrapperClick}" class="menu-wrapper">	
                            <span class="icon-box-toggle ef-4" @click="${this._iconBoxToggle}"> 	
                                <span class="rotate">
                                    <i class="icon-line-top">  	 </i>
                                    <i class="icon-line-center">  </i>
                                    <i class="icon-line-bottom">  </i> 
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
                <!-- /Child menu header -->
                ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                <!-- Sidebar menu 1 -->
                <ul id="dashboard-menu-${pageGroupIndex}" class="sidebar-menu is-active animated preFadeInRIght fadeInRight">
                    ${pageGroup.pages.map((tab, tabIndex) => html`
                    <li class="">
                    <a class="parent-link ${pageGroupIndex == this._pageGroup && tabIndex == this._page ? 'is-active' : ''}"
                        @click="${this._closeChildMenu}"
                        href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${tabIndex}/">
                          <span class="material-icons">
                        <iron-icon icon="${tab.icon || 'icons:announcement'}"></iron-icon>
                        </span>
                        ${tab.title}
                        </a>
                        
                    </li>`)}
                    
                </ul>
                <!-- /Sidebar menu 1 -->
                `)}
                
               
            </div>
        </nav>
        <!-- /Child push sidebar menu -->

        <!-- Top Navbar -->
        <nav class="nav dashboard-nav">
            <div class="container is-fluid" style="background: var(--app-default-color);">
                <!-- Nav left -->
                <div class="nav-left">
                    ${this.view === VIEW_MODE_DIALOG ? html`
                        <!-- Section Back button -->
                    <div class="nav-item nav-icon logout-button" @click="${this._viewList}">
                        <iron-icon icon="icons:arrow-back"
                                style="color: white"></iron-icon>
                    </div>
                     <button class="menu-fab" @click="${this._viewList}"><iron-icon icon="icons:close"></iron-icon></button>
                    <!-- /Section Back button -->
                    ` : html``}
                    
                    <!-- Reader mode switch TODO display on mobile -->
                    <div class="nav-item reader-switch is-hidden-desktop is-hidden-mobile is-hidden-tablet">
                        <div class="field">
                            <input id="reader-mode-switch" type="checkbox" name="reader-mode-switch" class="switch is-outlined is-primary is-small">
                            <label id="reader-mode-toggle" for="reader-mode-switch"></label>
                        </div>
                    </div>
                    <!-- Reader mode switch -->

                    <!-- Quick search (hidden on mobile) -->
                    <div class="nav-item">
                        <div> <span class="brand-name">${this.gateway.name}</span></div>
                    </div>
                    <!-- /Quick search -->

                    
                </div>
                <!-- /Nav left -->

                <!-- Nav right -->
                <div class="nav-right nav-menu" id="top">
                    <!-- Notifications dropdown (hidden on mobile) -->
                    <div class="nav-item drop-pop is-centered nav-icon">
                        <a href="#" class="nav-item nav-icon nav-inner is-active">
                            
                            <iron-icon icon="social:notifications"></iron-icon>
                        </a>
                        <div class="drop-wrapper notifications-drop">
                            <div class="drop-inner has-arrow">
                                <div class="notifications-header has-text-centered">
                                    <h3>Notifications</h3>
                                </div>
                                <div class="notifications-body">
                                    <ul class="notifications-list">
                                        <li>
                                            <i class="sl sl-icon-heart"></i>
                                            <div class="notification-content">
                                                <img src="https://place-hold.it/250x250" alt="">
                                                <div class="notification-text">
                                                    <div class="text">
                                                        <b>Henry</b> liked your <b>comment</b>.
                                                    </div>
                                                    <div class="timestamp">
                                                        23 minutes ago
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="sl sl-icon-check"></i>
                                            <div class="notification-content">
                                                <img src="https://place-hold.it/250x250" alt="">
                                                <div class="notification-text">
                                                    <div class="text">
                                                        <b>Marjory</b> followed you.
                                                    </div>
                                                    <div class="timestamp">
                                                        1 hour ago
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="sl sl-icon-heart"></i>
                                            <div class="notification-content">
                                                <img src="https://place-hold.it/250x250" alt="">
                                                <div class="notification-text">
                                                    <div class="text">
                                                        <b>Marc</b> commented one of your tasks.
                                                    </div>
                                                    <div class="timestamp">
                                                        Yesterday
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Notifications dropdown -->

                   
                </div>
                <!-- /Nav right -->
            </div>
        </nav>
        <!-- /Top Navbar -->

        <!-- Main dashboard container -->
        <div id="dashboard-wrapper" class="columns" style="background: -webkit-linear-gradient(45deg, #F4F6FE, #ecf0f1); background: linear-gradient(45deg, #F4F6FE, #ecf0f1);">
            <div class="content column is-12">
                  <div class="content-wrapper-before"></div>
                <!-- Dashboard Wrapper -->
                <div class="dashboard-wrapper">

                    <div class="columns" style="display: block;">           
                        <div class="column">
                            <!-- Main content -->
                            <div id="main-dashboard" class="section-wrapper">
                            ${this.view === VIEW_MODE_DIALOG ? html`


                                <section-page id="dialog" queue=${this.dialogServicesQueue}></section-page>


                            ` : html`
                                <!-- Dashboard content -->
                                <div class="columns dashboard-columns is-multiline">
                                    <!-- YOUR CONTENT COLUMNS GO HERE -->
                                    ${this.page.pageInputGroups.map((feed, feedIndex) => html`
                                    <div class="column ${this._gridClasses(feed)} mobile-fullwidth">
                                    <div class="flex-card light-bordered mobile-borderless">
                                      <div class="card-body is-responsive" style="padding: 0px;">
                                        <form-render .feed="${feed}" .params=${this.parseParams()}></form-render>
                                      </div>
                                    </div>
                                    </div>
                                    `)} 
                                            
                                    </div>`}
                                </div>
                                <!-- /Main content -->
                            </div>
                            <!-- /Main view -->
                        </div>
                    </div>
                    <!-- /Dashboard Wrapper -->
                </div>
                <div class="column">
                </div>
            </div>
            <!-- Main dashboard container -->
    
            <!-- /Main -->
    
            <!-- Footer -->
            <footer class="footer">
                <div class="container">
                    <div class="has-text-centered">
                        <div class="has-text-centered">
                            <img class="small-footer-logo" src="/media/${this.gateway.logo}" alt="">
                        </div>
                    </div>
                    <div class="has-text-centered">
                        <span class="more-info-company">${this.gateway.tagLine}</span>
                    </div>
                </div>
            </footer>
            <!-- /Footer -->
            
          <snack-bar id="snack-bar" ?active="${this._snackbarOpened}">
${this._snackbarTitle} ${this._snackbarMessage}
</snack-bar>`;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      view: String,
      pages: Array,
      tab: Object,
      profile: {
        type: Object,
        value: ''
      },
      page: Object
    };
  }

  _profileTriggerClick(e) {
    const self = this;
    this.qs('.main-menu-avatar, .dot').classList.toggle('vanish');

    if (this.qs('.js-hamburger').classList.contains('is-active')) {
      this.qs('.js-hamburger').classList.remove('is-active');
      document.querySelector('body').classList.remove('is-fixed');
    } else {
      this.qs('.js-hamburger').classList.add('is-active'); // wait 700ms before adding the fixed class to the body to prevent unpleasant effects

      setTimeout(function () {
        document.querySelector('body').classList.add('is-fixed');
      }, 700);
    }
  }

  _sideIconClick(e) {
    /*
    // make previous menu not selected
    // though a loop might not be needed as only one item will be previously active
    this.qsa('.side-icon.is-active').forEach(function (item) {
        item.classList.remove('is-active');
    });
      // make clicked to show selected
    e.currentTarget.classList.add('is-active');
    */
    this.qs('.menu-wrapper .icon-box-toggle').classList.add('active');
    this.qs('.child-menu').classList.add('is-sidebar-translated');
    this.qsa('.dashboard-nav, #dashboard-wrapper').forEach(function (el) {
      el.classList.add('is-pushed');
    }); // disable reader mode switch when sidebar is opened

    this.qs('.reader-switch label').classList.add('is-disabled');

    this._dataChildMenuSetup(e);
  }
  /**
     * Close child menu on page menu item click
     * Activates main view mode if there is a page change
     *
     * @param e
     * @private
     */


  _closeChildMenu(e) {
    // activate main view mode, page might have changed
    this.scrollToTop();

    if (this.view !== VIEW_MODE_MAIN) {
      this.viewMain();
    }
    /*
    // UN-OPTIMIZED VERSION OF ABOVE
    let app = document.querySelector('adaptive-ui');
      let hashPaths = e.currentTarget.hash.split('/');
    let currentPage = hashPaths[1];
    let currentTab = hashPaths[2];
      if (currentPage!==app._page && currentTab !== app._tab){
        this.view = 'main';
    }
      */


    this._menuWrapperClick(e);
  }
  /**
   * Dialogs Back navigation, Pop dialogs' stack
   *
   * @param {Event} evt
   * @private
   */


  _viewList(evt) {
    this.mainNavigation();
  }

  _menuWrapperClick(e) {
    this.qs('.child-menu').classList.remove('is-sidebar-translated');
    this.qsa('.dashboard-nav, #dashboard-wrapper').forEach(function (el) {
      el.classList.remove('is-pushed');
    }); // enable reader mode switch when sidebar is closed

    this.qs('.reader-switch label').classList.remove('is-disabled');
  }

  _iconBoxToggle(e) {
    e.currentTarget.classList.toggle('active');
    e.preventDefault();
  }

  _dataChildMenuSetup(e) {
    const menuId = e.currentTarget.dataset.childMenu;
    const menuTitle = e.currentTarget.dataset['title'];
    this.qsa('.sidebar-menu.is-active').forEach(function (el) {
      el.classList.remove('is-active');
    });
    this.qs('#' + menuId).classList.add('is-active');
    this.qs('.sidebar-title').textContent = menuTitle;
  }

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