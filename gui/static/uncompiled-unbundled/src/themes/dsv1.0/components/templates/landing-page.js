/**
 @license
 Copyright (c) 2018 InterIntel. All rights reserved.
 */
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "./section-page.js"; // todo move into base

import '../snack-bar.js';
import { LandingPageBase } from "../../../../components/templates/landing-page.js";
import { VIEW_MODE_DIALOG } from "../../../../components/templates/page-view-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LandingPage extends LandingPageBase {
  render() {
    if (!this.interface) {
      return html`        
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
        <style>
        elements-list{
        width:100%;
        }
        :root{
          --header-color: #00c6ff;
          --light-pink: #fcf0e3;
          --dark-pink: #f36b7f;
          --main-color: #333333;
          --cta-color: #2566F2;
          --lighter-blue: #edf3ff;
          --light-blue: #9fbfff;
          --yellow: #f8cf61;
          --golden-yellow: #f8d21c;
          --primary-blue: #0040bf;
          --deep-sky-blue: #157cf8;
      }
      .center, .content{
          margin: 0 auto;
          width: 50%;
          display: flex;
          align-content: center;
          align-items: center;
          justify-content: center;
      }
      .landing-btn{
          outline: none;
          color: #fff;
          width: 170px;
          transition: all 0.5s;
          background-color: var(--cta-color);
          border-radius: 5px;
          font-size: 16px;
          line-height: 1.5;
          padding: 13px;
      }
      .landing-btn-borderd{
          border: 2px solid var(--dark-pink)!important;
          background: transparent!important;
          border-radius: 5px;
          font-size: 16px!important;
          line-height: 1.5;
          padding: 15px 50px!important;
          color: var(--dark-pink)!important;
      }
      .landing-container{
          width: 95%;
          margin: 0 auto;
      }
      .landing-header{
          color: #fff;
          background-color: var(--header-color);
          /* height: 100vh; */
      }
      @media screen and (max-width: 400px){
          .loading-header{
              height: auto;
          }
      }
      .landing-header .loading-branding{
          font-weight: bolder;
          font-size: 20px;
      }
      .landing-header .navbar{
          background-color: transparent;
      }
      .landing-header .navbar .navbar-brand .navbar-burger span{
          backgroud-color: #fff!important;
      }
      .landing-header .navbar .nav-center{
          display: flex;
          justify-content: center;
          align-content: center;
      }
      .landing-header .navbar .navbar-item{
          color: inherit;
          font-weight: 600;
      }
      .hero .landing-subtitle{
          padding: 30px 0 0 0;

      }
      .hero .landing-subtitle p{
          font-size: 20px;
      }
      .hero .main-title{
          width: 90%;
          margin: 20px auto 40px auto;
      }
      .hero .main-title .title{
          font-size: 72px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.11;
          letter-spacing: normal;
          text-align: center;
          color: white;
      }
      .hero .main-lander-cta{
          margin-bottom: 50px;
      }
      .main-media{
          width: 50%;
          margin: 0 auto;
          z-index: 1000;
      }
      .main-media .video{
          width: 100%;
          border-radius: 8px;
          border: 10px solid #333333;
          background: #fff;
      }

      .section.coffee-break{
          background-color: #fcf0e3;
          position: absolute;
          width: 100%;
          padding: 270px 0 100px 0;
      }
      .section.coffee-break-2{
          background-color: #f9d9eb;
          position: relative;
          width: 100%;
          padding: 270px 0 100px 0;
      }
      .section .section-content{
          padding: 0 15px;
          margin-bottom: 20px;
      }
      .section .section-content .section-sub-title p{
          font-size: 20px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.2;
          letter-spacing: 1px;
          color: #f36b7f;
      }
      .section .section-content .heading .title{
          font-size: 56px;
          margin: 40px 0;
      }
      .padd a{
          margin-top: 30px;
          width: 50%;
          padding: 13px 70px;
      }
      .section.landing-tiles{
          padding: 140px 0;
          margin-top: 767px;
      }
      .section .custom-card{
          border-radius: 10px;
          padding: 20px;
          border: 0 solid transparent!important;
          box-shadow: 0 0 0 transparent!important;
      }
      .section .custom-card.card-1{
          background-color: var(--lighter-blue);
      }
      .section .custom-card.card-2{
          background-color: #daa2d8;
      }
      .section .custom-card.card-3{
          background-color: var(--golden-yellow);
      }
      .section .custom-card .card-header{
          border: 0 solid transparent;
          box-shadow: 0 0 0 transparent;
      }
      .section .custom-card .card-header .icon-container{
          width: 78px;
          height: 78px;
          border-radius: 50%;
          margin: 30px;
      }
      .section .custom-card .card-header .icon-container.icon-1{
          background-color: #157cf8

      }
      .section .custom-card .card-header .icon-container.icon-2{
          background-color: #f8cf61
      }
      .section .custom-card .card-header .icon-container.icon-3{
          background-color: #2566F2
      }
      .section-3-description p{
          font-weight: bold;
          font-size: 24px;
          margin-top: 40px;
      }
      .icon-pair{
          margin-bottom: 30px;
      }
      .icon-content-circle{
          width: 40px;
          height: 40px;
          background-color: var(--dark-pink);
          border-radius: 50%;
          margin: 0 10px 0 0;
      }
      .section.blue-section{
          color: #fff;
          background-color: #75c5e2;
          padding: 100px 0 100px 0;
      }
      .section.blue-section .blue-user .profile-content .profile-name{
          font-size: 24px;
          font-weight: bold;
          line-height: 1.33;
      }
      .section.blue-section .blue-user .profile-content .profile-text{
          opacity: .5;
          font-size: 16px;
          line-height: 1.5;
      }
      .communication-title-content .communication-title{
          font-size: 56px;
          font-weight: bold;
          color: #333333;
          line-height: 1.14;
      }
      .communincation-content .sub{
          font-size: 20px;
          color: #333333;
          line-height: 1.6;
          padding: 32px 0 23px 0;
          width: 364px;
      }
      .communincation-content .content-text{
          font-size: 16px;
          color: #333333;
          line-height: 1.5;
          opacity: .5;
      }
      .section-menu ul li{
          font-size: 16px;
          font-weight: normal;
          line-height: 1.5; 
          text-align: right;
          padding: 12px 0;
      }
      .section-menu ul li a{
          opacity: .5;
          color: #333333;
      }
      .break-line{
          width: 100%;
          height: 2px;
          background-color: #000000;
          opacity: 0.1;
      }
      .stats{
          padding: 85px 0;
          color: #333333;
      }
      .stats .stat-column .num{
          font-size: 56px;
          font-weight: bold;
      }
      .stats .stat-column .stat-desc{
          font-size: 24px;
          font-weight: bold;
      }
      .cards .card{
          margin-bottom: 40px;
          border-radius: 8px!important;
          border: 0 solid transparent!important;
          box-shadow: 0 0 0 transparent!important;
      }
      .card .content{
          display: block;
          align-content: flex-start;
          align-items: flex-start;
          justify-content: flex-start;
          margin: 0;
      }
      .card .content .title{
          font-size: 24px;
          color: #333333;
          font-weight: bold;
      }
      .section-text{
          padding-top: 109px;
      }
      .section-text p{
          opacity: .5;
          font-size: 16px;
          color: #333333;
          line-height: 1.5;
          margin-bottom: 40px;
      }
      /* .portfolio-image{
          position: absolute;
          top: -88px;
      } */
      .portfolio-name .title{
          margin: 4px;
      }
      div.scroll{
          margin-top: 58px;
      }
      div.scroll .dial{
          width: 50px;
          height: 50px;
          border: 2px solid var(--dark-pink);
          border-radius: 50%;
          margin-right: 15px;
      }
      div.card-img{
          border-radius: 8px;
          width: 100%;
      }
      .blog-content .sub p{
          font-size: 12px;
          font-weight: bold; 
          color: #333333;
          line-height: 2;
          padding-bottom: 15px;
          padding-top: 10px;
      }
      .blog-content .title h1{
          color: #333333;
          line-height: 1.33;
          font-size: 24px;
          font-weight: bold;
      }
      .blog-content > p{
          font-size: 16px;
          opacity: .5;
          color: #333333;
          line-height: 1.5;
      }
      footer .footer-top{
          background-color: #157cf8;
          padding: 30px 0;
      }
      footer .footer-top .subscribe{
          padding: 15px;
      }
      footer .footer-top .subscribe .title{
          color: white;
          font-weight: bold;
          font-size: 40px;
          line-height: 1.2;
          margin-bottom: 2px;
      }
      footer .footer-top .subscribe .sub{
          opacity: 0.5;
          font-size: 16px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5;
          letter-spacing: normal;
          color: #fff;
          padding: 0;
          margin-top: 3px 0;
      }
      footer .footer-top .input{
          margin-top: 35px;
          padding: 21px 24px;
          font-size: 14px;
      }
      footer .footer-top .btn button{
          display: flex;
          align-items: center;
          color: #fff;
          background-color: #0040bf;
          font-size: 16px;
          border-radius: 6px;
          border: 0;
          position: relative;
          top: 39px;
          left: 20px;
      }
      footer .footer-top .icons{
          margin-top: 39px;
      }
      footer .footer-top .icons .icon{
          border: 2px solid #fff;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-right: 10px;
      }
      footer .bottom-footer{
          background-color: #0040bf;
          padding: 40px 0;
          color: #fff;
          padding: 100px 0 0 0;
      }
      footer .bottom-footer .branding h1{
          color: inherit;
          font-size: 40px;
          font-weight: bold;
          text-transform: uppercase;
      }
      footer .bottom-footer .footer-links-content .title{
          margin-bottom: 24px;
          font-size: 16px;
          color: inherit;
          font-weight: bold;
      }
      footer .bottom-footer .footer-links-content .footer-links ul li a{
          opacity: 0.5;
          font-size: 16px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5;
          letter-spacing: normal;
      }
      .footer-links ul li{
          margin-bottom: 8px;
      }
      footer .sub-footer{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 115px;
      }
      footer .sub-footer a{
          font-size: 16px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5;
          letter-spacing: normal;
          text-align: right;
          opacity: 1!important;
      }
    
</style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
      <div class="main-wrapper">
      <header class="landing-header" id="headar">
                <div class="landing-container">
                    <nav class="navbar" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                          <a class="nav-item" href="/">
                              <img class="loading-branding" src="/media/${this.gateway.logo}" alt="logo">
                          </a>
                      
                          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="${this.toggleNav}">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                          </a>
                        </div>
                      
                        <div id="navbarBasicExample" class="navbar-menu">
                          <div class="navbar-end nav-center">
                          ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                          <a href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/0/" 
                              class="navbar-item is-capitalized">
                              ${pageGroup.title}
                          </a>`)}
                          </div>
                        </div>
                    </nav>
                </div>
            </header>
            
            <footer class="landing-footer">


                <div class="bottom-footer">
                    <div class="container" style="padding: 0 10px">
                        <div class="columns">
                            <div class="column">
                                <a class="nav-item branding" href="/">
                                    <img class="loading-branding" src="/media/${this.gateway.logo}" alt="logo">
                                </a>
                            </div>

                            <div class="column">
                                <div class="columns">
                                    <div class="column">
                                        <div class="footer-links-content">
                                            <p class="title">Assum</p>
                                        </div>
                                        <div class="footer-links">
                                            <ul>
                                                <li><a href="">Novum</a></li>
                                                <li><a href="">Dolorum</a></li>
                                                <li><a href="">Constituto</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="column">
                                            <div class="footer-links-content">
                                                <p class="title">Assum</p>
                                            </div>
                                            <div class="footer-links">
                                                <ul>
                                                    <li><a href="">Novum</a></li>
                                                    <li><a href="">Dolorum</a></li>
                                                    <li><a href="">Constituto</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                    <div class="column">
                                        <div class="footer-links-content">
                                            <p class="title">Assum</p>
                                        </div>
                                        <div class="footer-links">
                                            <ul>
                                                <li><a href="">Novum</a></li>
                                                <li><a href="">Dolorum</a></li>
                                                <li><a href="">Constituto</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container" style="margin-top: 30px;"> 
                        <div class="break-line" style="background-color: #fff;"></div>
                        <div class="sub-footer">
                            <div class="columns" style="width: 100%">
                                <div class="column">
                                    <p><span class="moto light-text"> ${this.gateway.name}, Copyright &copy; 2019.</span></p>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <a href="">Convenire</a>
                                        </div>
                                        <div class="column">
                                            <a href="">Convenire</a>
                                        </div>
                                        <div class="column">
                                            <a href="">Convenire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar>

      </div>
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