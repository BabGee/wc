/**
 @license
 Copyright (c) 2018 InterIntel. All rights reserved.
 */
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/social-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/communication-icons.js";
import '../snack-bar.js';
import { BULMA_STYLES } from "../../styles/bulma-styles.js";
import { LANDING_STYLES } from "../../styles/landing-style.js";
import '../form-render.js';
import "./section-page.js"; // todo move into base

import { VIEW_MODE_DIALOG, VIEW_MODE_MAIN } from "../../../../components/templates/page-view-element.js";
import { LandingPageBase } from "../../../../components/templates/landing-page.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LandingPage extends LandingPageBase {
  render() {
    if (!this.interface) {
      return html`        
      ${BULMA_STYLES}            
      ${LANDING_STYLES}         
      <div class="Wallop Wallop--fade">
        <div class="Wallop-list">
          <div class="Wallop-item  has-background-image" >
            <div id="main-hero" class="hero-body pt-80 pb-80">
              <div class="container has-text-centered">
                  <div class="columns is-vcentered">
                      <div class="column is-12 has-text-centered">
                        <img class="main-menu-avatar" src="images/web/thinking-emoji.png" alt="">
                        <h1 class="title main-title is-4 dark-text" style="font-size: 56px;font-weight: 300;">
                            Oops!
                        </h1>
                        <h2 class="subtitle is-4 dark-text pt-10 pb-10">
                          We can't seem to find the page you are looking for <br>
                          Cannot render an UNDEFINED tab.
                        </h2>
                        <br>
                        <div class="action">
                           <a href="/" class="button button-cta primary-btn rounded" style="font-size: 28px; font-weight: 500;">
                            Go Back Home
                           </a>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
         </div>
        </div>
      </div>
`;
    }

    return html`
        ${BULMA_STYLES}            
        ${LANDING_STYLES} 

        <style>
        :host{
          max-height: 100%;
          overflow-y: auto;
          display: block;
        }

        form-render{
          width:100%;
        }
        .column.is-tablet-landscape-padded{
          padding-left:0px;
          padding-right:0px;
        }
           
        </style>
                  

        <!-- Hero and nav -->
        <div class="hero hero-waves-dark is-relative is-light-grey">
            <div class="navbar-wrapper navbar-fade">
                <div class="hero-head">
                    <!-- Nav -->
                    <div class="topbar">
                        <nav class="nav">
                            <div class="toolbar">
                                <div class="nav-left">
                                     <!-- Responsive toggle -->
                                <span class="nav-toggle" @click="${this.toggleNav}">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <a class="nav-item" href="/">
                                    <img src="/media/${this.gateway.logo}" alt="logo">
                                </a>
                                ${this.view === VIEW_MODE_DIALOG ? html`
                                  <!-- Section Back button -->
                                  <button class="menu-fab" @click="${this._viewList}">
                                    <iron-icon icon="icons:close"></iron-icon>
                                  </button>
                                  <!-- /Section Back button -->
                                ` : html``}
                                ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                                <div class="subNav">
                                  <a href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/0/" 
                                      class="nav-item is-tab nav-inner is-not-mobile">
                                      ${pageGroup.title}
                                  </a>
                                  <ul class="drop">
                                      ${pageGroup.pages.map((section, index) => html` 
                                      <li>
                                        <a href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${index}" 
                                           @click="${this.scrollPage}"  
                                           .pageIndex="${index}"  
                                           target="_self" >${section.title}</a>
                                      </li>`)} 
                                  </ul>
                                </div>
                                    
                                 `)}
                                <span id="top" class="nav-item"></span>  
                                </div>
                           
                                <div class="nav-right nav-menu">
                                    ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                                    <a href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/0/" 
                                        class="nav-item is-tab nav-inner is-menu-mobile">
                                        ${pageGroup.title}
                                    </a>`)}
                                </div>
                                 
                            </div>
                        </nav>
                    </div>
                    <!-- /Nav -->

                </div>
            </div>         
        </div>
        <!-- /Hero and nav -->
        
        ${this.view === VIEW_MODE_DIALOG ? html`
        <section-page id="dialog" queue=${this.dialogServicesQueue} ></section-page>
        ` : html`
        ${this.pageGroup.pages.map((page, index) => html`        
        <!-- Feature -->
        <section  class="section is-fullWidth"  style="padding: 0px; background-color: #f4f6fb;">
                                    
            <div id="section_${index}" class="is-fullWidth">
              ${page.pageInputGroups.map(feed => html`
              ${feed.styles !== '' && JSON.parse(feed.styles).type !== null && JSON.parse(feed.styles).type === 'register' ? html`
              <div class="login-wrapper columns is-gapless">
              <!-- Image section (hidden on mobile) -->
              <div class="column login-column is-5 hero-banner" style="background: var(--app-default-color);">
                  <div class="hero  is-theme-primary is-relative">
                      <div class="columns has-text-centered">
                          <div class="column">
                              <h2 class="title is-2 light-text" style="padding-top: 25px">
                                ${feed.title} 
                                
                              </h2>
                              <h3 class="subtitle is-5 light-text">
                                   ${JSON.parse(feed.styles).detail} 
                              </h3>
                               <div class="container" style="margin: 40px;">
                         
                            </div>
                          </div>
                      </div>
                    <img id="hero-image" style="margin-top: -40px; align-self:  center;width: 200px; margin-bottom: 20px;" 
                      src="${JSON.parse(feed.styles).image || 'https://bulkit.cssninja.io/assets/images/illustrations/drawings/city.svg'}" alt="">
                  </div>
              </div>
              <!-- /Image section -->
              <!-- Form section -->
              <div class="column is-7">
                  <div class="hero">
                  <div class="columns">
                      <div class="content column is-12">
                          <!-- Dashboard Wrapper -->
                          <div class="dashboard-wrapper" style="padding: 20px; margin-left: 0px;">
                              <div class="columns">           
                                  <div class="column">
                                      <div id="main-dashboard" class="section-wrapper">                           
                                        <div class="columns is-vcentered">
                                            <form-render .feed="${feed}" .top=${this._computeTop()} .params=${this.parseParams()}></form-render>
                                        </div>
                                       </div>
                                   </div>
                                </div>
                          </div>
                  </div>
              </div>
              </div>
            </div>
            </div>` : html`<div class="columns is-vcentered">
                <form-render .feed="${feed}" .top=${this._computeTop()} .params=${this.parseParams()}></form-render>
           </div>`}
           `)}      
        </div>
        </section>`)}
        `}
        <footer class="footer footer-dark">
            <div class="container">
                <div class="columns footer-columns is-flex-mobile">
                  <div class="copyright mt-20">
                      <span class="moto light-text"> ${this.gateway.name}, Copyright &copy; 2019.</span>
                  </div>
                </div>
            </div>
        </footer> 
<snack-bar id="snack-bar" ?active="${this._snackbarOpened}">${this._snackbarMessage}</snack-bar>
`;
  }

  constructor() {
    super();
  }

  scrollPage(evt) {
    const index = evt.currentTarget.pageIndex; // var elementToFocus = document.getElementById(window.location.hash.slice(1));
    //   var elementToFocus = document.getElementById("#section_1");

    var elementToFocus = this.shadowRoot.querySelector('#section_' + index);

    if (elementToFocus) {
      //  elementToFocus.scrollIntoView(true);
      elementToFocus.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      }); //   console.log("Scroll");
    }
  }

  static get properties() {
    return {
      title: String,
      name: String,
      logo: String,
      view: String,
      defaultColor: String,
      pages: Array,
      tab: Object,
      group: Object,
      toggle: Boolean
    };
  }

  toggleNav() {
    if (this.toggle) {
      this.qs('.navbar-wrapper').classList.remove('navbar-light');
      this.qs('.navbar-wrapper').classList.remove('mobile-menu-dark');
      this.qs('.nav-toggle').classList.remove('is-active');
      this.qs('.nav-right').classList.remove('is-active');
      this.toggle = false;
    } else {
      this.qs('.navbar-wrapper').classList.add('navbar-light');
      this.qs('.navbar-wrapper').classList.add('mobile-menu-dark');
      this.qs('.nav-toggle').classList.add('is-active');
      this.qs('.nav-right').classList.add('is-active');
      this.toggle = true;
    }
  }

  stateChanged(state) {
    super.stateChanged(state);
  }
  /**
   * Dialogs Back navigation, Pop dialogs' stack
   *
   * @param {ClickEvent} evt
   * @private
   */


  _viewList(evt) {
    this.mainNavigation();
  }

}

window.customElements.define('landing-page', LandingPage);