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
      header.header{
          height: 64px;
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 15px;
      }
      div.modal-container{
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .4);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
      }
      div.modal-container div.modal-base {
        opacity: 1;
        width: 688px;
        border-radius: 5px;
        background-color: #ececee;
        margin: 0 auto;
        padding: 0 25px;
        position: relative;
      }
      div.modal-container div.modal-base .modal-header{
        padding: 25px 0 16px 0;
        border-bottom: solid 1px rgba(71, 71, 71, 0.2);
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

      aside.aside div.aside-menu ul li a:hover, 
      aside.aside div.aside-menu ul li a.active, 
      aside.aside div.aside-menu ul li a.selected{
          background-color: #ececee;
          border-radius: 0;
          color: var(--app-default-color);;
          opacity: 1;
      }
      aside.aside div.aside-menu ul li a:hover aside.aside div.aside-menu ul li a p .icon{
          color: #ccced0;
      }
      aside.aside div.aside-menu ul{
          border-left: transparent solid 1px;
          margin: 0;
      }
      aside.aside{
          background-color: var(--app-default-color);
          height: 100vh;
          position:fixed;
          top:0px;
          bottom:0px;
          left:0px;  
          overflow-y: auto; 
          overflow-x: hidden; 
          width:21%; 
      }
      aside.aside .aside-header{
        display: flex;
        justify-content: center;
      }
      aside.aside .aside-header,
      aside.aside div.aside-menu{
        padding-left: 18px;
      }
      aside.aside .aside-header #mobile-menu{
          display: none;
      }
      aside.aside div.aside-menu ul li a{
          font-size: 14px;
          padding-top: 5px;
          padding-bottom: 10px;
          color: #fff;
          opacity: .9;
      }
      aside.aside div.aside-menu ul li a p .icon{
          position: relative;
          right: 0;
          top: 3px;
      }

      aside.aside div.aside-menu ul li .sub-menu{
          width: 100%;
          background-color: #ececee;
          display: none;
      }
      aside.aside div.aside-menu ul li .sub-menu ul li a.nav-item{
          padding-top: 9px;
          padding-bottom: 9px;
          color: var(--app-default-color);;
          margin-left: 16px;
      }
      aside.aside div.aside-menu ul li .sub-menu ul li a.nav-item:hover{
          color: #4a4a4a;
      }
      main.main-section{
          background-color: #ececee;
          width: 79%;
          margin-left: 20.55%;
          /* height: 100vh; */
      }
      main.main-section .main-header{
          background-color: #f6f6f9;
          margin-top: 13px;
          margin-bottom: 40px;

          display: flex;
          justify-content: flex-end;
      }


      main.main-section .main-header .profile-header-container{
          width: 279px;
      }
      main.main-section .main-header .profile-header-container .icons{
          width: 30px;
      }
      main.main-section .main-header .profile-header-container .icon{
          color: #ccced0;
      }
      main.main-section .main-header .profile-header-container .profile .profile-image img{
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--app-default-color);
      }
      main.main-section .main-header .profile-header-container .profile .profile-name{
          font-size: 12px;
          line-height: 1.33;
          font-weight: bold;
          margin-left: 5.4px;
          position: relative;
          top: 6px;
      }
      main.main-section .main-content{
          position: relative;
          margin: 95px 50px;
      }
      .profile-modal-select{
        position: relative;
      }
      .profile-select-content::after{
        content: '';
        position: absolute;
        top: -19px;
        z-index: 1000;
        right: 7px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid #fff;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
      }
      .profile-header{
        cursor: pointer;
      }
      .profile-modal-select .profile-picture img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .profile-select-content{
        width: 288px;
        background: #fff;
        display: none;
        padding: 20px;
        position: absolute;
        top: 73px;
        z-index: 1000;
        right: 39px;
      }
      .profile-modal-select .profile-name{
        font-size: 14px;
        font-weight: 500;
        color: #013243;
      }
      .profile-buttons .main-cta a{
        background-color: #2273f0;
        color: #fff;
        padding: 10px 30px;
        font-size: 12px;
        margin: 20px auto;
      }
      .profile-buttons .btn a{
        font-size: 11px;
        color: #013243;
        background-color: #c2c3c3;
        padding: 5px 20px;
      }

      @media screen and (max-width: 768px){
          
        .is-pulled-right-icon{
          position: absolute;
          right: -350px;
          top: -10px;
        }

        .logo-image{

          position: absolute;
          left: 30px;
          bottom: 20px;
        }


        div.main-wrapper{
              width: 100%;
          }
          main.main-section,
          aside.aside{
              width: 100%;
              height: auto;
              display: block;
              position: relative;
              margin: 0;
          }
          aside.aside .aside-header{
              margin: 11px 20px 0 20px;
          }
          aside.aside .aside-header, 
          main.main-section .main-header{
              z-index: 100;
          }
          aside.aside div.aside-menu{
              display: none;
          }
          aside.aside .aside-header .mobile-menu{
              display: block;
          }
          aside.aside .aside-header #mobile-menu{
              display: flex;
              justify-content: flex-end;
              cursor: pointer;
              position: relative;
              right: 5%;
          }
          aside.aside .aside-header #mobile-menu .icon{
              color: #fff;
              position: absolute;
              right: -350px
          }
          main.main-section .main-header, aside.aside div.aside-menu{
              margin: 0;
          }
          aside.aside div.aside-menu ul li a {
              padding-left: 20px;
          }
          main.main-section .main-content{
              margin: 0 15px;
              padding-top: 80px;
              z-index: 1;
          }
      }

      @media screen and (max-width: 650px){

      aside.aside .aside-header #mobile-menu .icon {
          color: #fff;
          position: absolute;
          right: -247px;
      }
    }

    @media screen and (max-width: 520px){

      aside.aside .aside-header #mobile-menu .icon {
          color: #fff;
          position: absolute;
          right: -200px;
      }
    }

      @media screen and (max-width: 414px){
          
        .is-pulled-right-icon{
          position: absolute;
          right: -170px;
          top: -10px;
        }

        .logo-image{

          position: absolute;
          left: 30px;
          bottom: 20px;
          
        }

        aside.aside .aside-header #mobile-menu .icon {
          color: #fff;
          position: absolute;
          right: -160px;
      }

      }

      @media screen and (max-width: 411px){
          
        .is-pulled-right-icon{
          position: absolute;
          right: -170px;
          top: -10px;
          
        }

        .logo-image{

          position: absolute;
          left: 30px;
          bottom: 20px;
          
        }

        aside.aside .aside-header #mobile-menu .icon {
          color: #fff;
          position: absolute;
          right: -155px;
      }

      }

      @media screen and (max-width: 375px){
          
        .is-pulled-right-icon{
          position: absolute;
          right: -150px;
          top: -10px;
        }

        .logo-image{

          position: absolute;
          left: 30px;
          bottom: 20px;
          
        }

        aside.aside .aside-header #mobile-menu .icon {
          color: #fff;
          position: absolute;
          right: -150px;
      }

      }

      @media screen and (max-width: 360px){
          
        .is-pulled-right-icon{
          position: absolute;
          right: -150px;
          top: -10px;
          
        }

        .logo-image{

          position: absolute;
          left: 30px;
          bottom: 20px;
          
        }

        aside.aside .aside-header #mobile-menu .icon {
          color: #fff;
          position: absolute;
          right: -140px;
      }

      }


      @media screen and (max-width: 320px){
          
        .is-pulled-right-icon{
          position: absolute;
          right: -110px;
          top: -10px;
        }

        .logo-image{

          position: absolute;
          left: 30px;
          bottom: 20px;
          
        }

        aside.aside .aside-header #mobile-menu .icon {
          color: #fff;
          position: absolute;
          right: -120px;
      }

      }


      /* @media screen and (max-width: 1024px){
          main.main-section{
              margin-left: 187px;
          }
      } */
      </style>
      <div class="main-wrapper">
        
        ${this.view === VIEW_MODE_DIALOG ? html`
        <div class="modal-container">
          <div class="modal-base" style="max-height: 90vh;">
            <div class="modal-header">
              <div class="heading">
                <h1 class="title" style="width: 80%; display: inline-block;">${this.page.title}</h1>

 
                <a style="display: inline-block;float: right; color: black;
                border: 1px solid black; padding: 0.1rem 1rem; 
                border-radius: 25px 1px 1px 25px; box-shadow: 1px 1px 1px 0px black; " @click=${this._viewList}>Back</a>

              </div>
            </div>
            <div class="modal-body">            
            <section-page id="dialog" queue=${this.dialogServicesQueue}></section-page>
            </div>
          </div>
        </div>
        ` : html`
        
        `}
        
        <div class="columns">
            <aside class="column aside is-paddingless">
                <header class="header aside-header">
                <a href="" >
                <figure class="logo-image ">
                    <img src="${this._computeLogo(this.gateway)}" height="64px" width="128px">
                </figure>
            </a>

                    <a href="" id="mobile-menu" class="is-pulled-right">
                        <span class="icon is-pulled-right-icon">
                          <fa-icon class="fas fa-bars" color="#fff"></fa-icon>
                        </span>
                    </a>
                </header>
                <div class="aside-menu">
                    <nav class="menu">
                        <ul class="menu-list">
                          ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                          <li>
                                <a class="nav-active ${pageGroupIndex == this._pageGroup ? 'selected  active' : ''}" @click='${this.handleClick}'>
                                    <p>
                                        <span class="icon">
                                        
                                          <adaptive-ui-icon style="width: 19px;height: 19px;" icon="${pageGroup.icon || 'icons:info'}"></adaptive-ui-icon>
                                          <!--<fa-icon class="fas fa-th-large" size="1rem" color="#fff"></fa-icon>                                        -->
                                         
                                         </span>
                                        ${ServicePage.toTitleCase(pageGroup.title)}&nbsp;
                                        <span class="icon is-pulled-right">
                                          <fa-icon class="fas fa-caret-down" size="1rem" color="#fff"></fa-icon>
                                        </span>
                                    </p>
                                </a>

                                <div class="sub-menu" id="sub-items-${pageGroupIndex}">
                                    <ul>
                                      ${pageGroup.pages.map((menu, menuIndex) => html`
                                      <li><a class="nav-item" href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${menuIndex}/">${ServicePage.toTitleCase(menu.title)}</a></li>
                                      `)}
                                    </ul>
                                </div>
                            </li>
                          `)}
                        </ul>
                    </nav>
                </div>
            </aside>
          
            <main class="main-section column is-paddingless">
                <header class="header main-header  is-pulled-right">
                    <div class="columns is-mobile profile-header-container">
                        <div class="column is-2">
                            <a href="">
                                <!-- <span class="icon" style="margin: 4px 0 0 0;">
                                  <fa-icon class="fab fa-elementor" size="1rem" color="#ccced0"></fa-icon>
                                </span> -->
                            </a>
                        </div>
                        <div class="column is-2">
                            <a href="">
                                <!-- <span class="icon" style="margin: 4px 0 0 0;">
                                  <fa-icon class="fas fa-bell" size="1rem" color="#ccced0"></fa-icon>
                                </span> -->
                            </a>
                        </div>
                        <div class="column profile">
                            <div class="profile-info">
                              ${this.gateway.profile ? html`
                              <a href="#" class="is-flex"  @click="${this.toggleProfile}">
                                    <div class="profile-image">
                                        <figure class="image">
                                            <img src="${this.gateway.profile.photo ? '/media/' + this.gateway.profile.photo : 'images/web/user.svg'}" alt="profile-image">
                                        </figure>
                                    </div>
                                    <div class="profile-name">
                                        <p>
                                        ${this.gateway.profile.firstName} ${this.gateway.profile.lastName}
                                            <span class="icon is-pulled-right">
                                              <fa-icon class="fas fa-caret-down" size="1rem" color="#fff"></fa-icon>
                                            </span>
                                        </p>
                                    </div>
                                </a>  
                                <div class="profile-select-content" id="profile-content">
                                      <div class="profile-content is-flex">
                                          <div class="profile-picture cta" style="margin-right: 15px">
                                          <img src="${this.gateway.profile.photo ? '/media/' + this.gateway.profile.photo : 'images/web/user.svg'}" $
                                          </div>
                                          <div class="prifile-info">
                                              <p class="profile-name">${this.gateway.profile.firstName}&nbsp;${this.gateway.profile.lastName}</p>
                                              <p class="profile-email is-size-7">${this.gateway.profile.username}</p>
                                          </div>
                                      </div>
                                      <div class="profile-buttons">
                                          <div class="main-cta center">
                                              <a @click="${this.logout}" class="button is-rounded is-uppercase">Logout</a>
                                          </div>
                                      </div>
                                  </div>
                                </div>                            
                              ` : html``}
                            </div>
                        </div>
                    </div>
                </header>
                <div class="main-content">
                  ${this.page.pageInputGroups.map((feed, feedIndex) => html`        
                    <div class="column is-12" >
                      <form-render .feed="${feed}" .params=${this.parseParams()}></form-render>
                  </div>`)}
                </div>
            </main>
        </div>
    </div>
  <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> 
<span slot="title">${this._snackbarTitle}</span> 
<span>${this._snackbarMessage}</span>
</snack-bar>
     `;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      pages: Array,
      tab: Object,
      profile: {
        type: Object,
        value: ''
      },
      page: Number,
      mainColor: String
    };
  }

  handleClick(evt) {
    evt.preventDefault();
    const menuItems = evt.currentTarget.nextElementSibling;
    const toggleClass = 'is-block';
    const highLight = 'selected';

    if (menuItems.classList.contains(toggleClass)) {
      menuItems.classList.remove(toggleClass);
    } else {
      // collapse all current active
      this.qsa('.sub-items, .is-block').forEach(function (el) {
        el.classList.remove(toggleClass);
      }); // expand related to source of event

      menuItems.classList.add(toggleClass);
    }

    this.qsa('.selected').forEach(function (el) {
      if (!el.classList.contains('active')) el.classList.remove(highLight); //
    });
    this.qsa('.selected').forEach(function (el) {
      if (!el.classList.contains('is-block')) el.classList.remove(highLight); //
    });

    if (menuItems.parentElement.classList.contains(highLight)) {} else {
      menuItems.parentElement.classList.add(highLight);
    }
  }

  static get styles() {
    return [Colors, Fonts, ServiceStyles, css`:host { display: block; }`];
  }

  toggleProfile(evt) {
    evt.preventDefault();
    const profileContent = document.getElementById('profile-content');
    profileContent.classList.toggle('is-block');
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

  firstUpdated(changedProperties) {}

}

window.customElements.define('service-page', ServicePage);