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
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ServicePage extends ServicePageBase {
  render() {
    if (!this.interface) {
      return html`<div>Cannot render an UNDEFINED tab!!.</div>`;
    }

    return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
            <style>
html{

  overflow-y: auto;
  /* width: 50px; */
  /* color: red; */
  overflow-x: hidden;
}

            .center{
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .sub-items{
              display:none;
              background: #ebebed;  
            }

                     
            .service-header{
              padding: 29px 2px
            }
            .nav-items{
              margin-top: 20px;
              

            }
            .menu-item{
              
              color: white; 
              font-weight: normal; 
              font-family: lato; font-size: 14px;
              position: relative; 
            }

            #pagegroup-anchor:hover,
            #pagegroup-anchor:active {

              color: #575bde; 
            
              margin-left: -10px;
             
              } 

            #pagegroup-anchor {

              color: white; 

              margin-left: -10px;

              } 

              


          


                        #main-menu-item{
                          width: 198px;
                          z-index: 1; 
                          position: relative; 
                          /* background-color: var(--app-default-color); */
                          margin-left: 30px; 
                          margin-top: 5px; 
                          font-size: 14px; 
                          padding: 11px 3px 11px 35px;
                        }

                .selected {

                  background-color: #ebebed; 
                  color: #575bde;
                  z-index: 1; 
                  position: relative; 
                  
                  margin-left: 30px; 
                  margin-top: 5px; 
                  font-size: 14px; 
                  padding-left: 22px; 
                  padding-top: 7px; 
                  padding-bottom: 7px;
                }
                .selected>#pagegroup-anchor{color:#575bde;}
                .selected>#arrow-menu{ color: white !important;}

         



                  #pagegroup-icon{
                    
                    color: #ffffff;

                      }


            .item{
              padding: 6px 2px;
            }
            .item:hover{
              /* background: #ebebed; */
              background-color: #ebebed;;

            }

           

            .item:active{
              background-color: #ebebed;
              color: white;
            }

           
            .item, a:active {
              background-color: #ebebed;
              Color: white;
            }

            .sub-items-anchor, a {

              margin-top: 20px; 
              /* color: #575bde; 
              background-color: #ebebed; */

            }

            .sub-items-anchor:active {

              /* background-color: var(--app-default-color);
              color: white; */
              margin-top: 20px; 
              color: white ; 
              background-color: #ebebed;
              
            }         

            .selected-items>a, selected-items:hover{
               background-color: var(--app-default-color);
              color: white;
              padding: 5px 15px 5px 5px;
            }


            #side {

              width: 240px; 
              height: 103vh; 
              position: fixed;
              z-index: 1000;
              background-color: var(--app-default-color);
              margin-right: -12px;
            }

           



            #top-nav {

              width: 1200px; 
              /* height: 100vh;  */
              background-color: #ececee;
              /* width: 100%; */
            }

            

           

            /* For ipad from: 0px to 768*/

            @media only screen and (max-width: 768px ) {
              .mobile-menu{
                position: absolute!important;
                top: 43px!important;
                left: 438px!important;
                display: block!important;
                cursor: pointer;
                                }
              .main-content{
                width: 100%!important;
                margin-left: 0!important;
                position: relative;
                top: 146px;
              }

          div#side {

            width: 795px; 
            height: auto;  
            
             
            margin-right: -12px;
              

                }

                div#main-menu-item {

                      margin-left: 2px;
                }

                div#top-nav {

                  width: 795px; 
                  height: auto; 
                  background-color: #ececee;
                }

              


                    }
           
/* tablets and small laptops  */

            @media only screen and (max-width: 751px ) {
              .mobile-menu{
                position: absolute!important;
                top: 43px!important;
                left: 438px!important;
                display: block!important;
                cursor: pointer;
                                }
                div#side {

                  width: 766px; 
                  height: auto;  
                  
                  
                  margin-right: -12px;
                    

                      }

                div#main-menu-item {
                      display: none;
                      margin-left: 2px;
                      width: 100%;
                }

                div#top-nav {

                  width: 766px; 
                  height: auto; 
                  background-color: #ececee;
                }

                


                    }

                    /* small phones to small tablets: from 0px to 386px*/
              @media only screen and (max-width: 360px ) {
                .mobile-menu{
                position: absolute!important;
                top: 43px!important;
                left: 438px!important;
                display: block!important;
                cursor: pointer;
                                }

                div#side {

                        width: 386px; 
                        height: auto;  
                        
                        
                        margin-right: -12px;
                          

                            }

                  div#main-menu-item {

                        margin-left: 2px;
                        }

                  div#top-nav {

                        width: 386px; 
                        height: auto; 
                        background-color: #ececee;
                        }

                 

                      }


                        /* small phones to small tablets: from 0px to 411px*/
                @media only screen and (max-width: 411px ) {
                  .mobile-menu{
                position: absolute!important;
                top: 43px!important;
                left: 438px!important;
                display: block!important;
                cursor: pointer;
                                }

                  div#side {

                        width: 437px; 
                        height: auto;  

                        
                        margin-right: -12px;
                          

                            }

                  div#main-menu-item {

                          margin-left: 2px;
                          }

                  div#top-nav {

                          width: 437px; 
                          height: auto; 
                          background-color: #ececee;
                          }

                    
                    

                }


/* for small phones: from 0px to 320px  */
                @media only screen and (max-width: 320px ) {
                  .mobile-menu{
                position: absolute!important;
                top: 43px!important;
                left: 438px!important;
                display: block!important;
                cursor: pointer;
                                }
                  .mobile-menu{
                                  position: absolute;
                                  top: 0px;
                                  left: 0;
                                  display: block;
                                }

                    div#side {

                          width: 347px; 
                          height: auto;  
                          
                          
                          margin-right: -12px;
                            

                              }

                    div#main-menu-item {

                            margin-left: 2px;
                            }

                    div#top-nav {

                            width: 347px; 
                            height: auto; 
                            background-color: #ececee;
                            }

                    

                                    }

                        /* for small phones: from 0px to 414px  */
                        @media only screen and (max-width: 414px ) {
                          .mobile-menu{
                position: absolute!important;
                top: 43px!important;
                left: 438px!important;
                display: block!important;
                cursor: pointer;
                                }

                        div#side {

                              width: 441px; 
                              height: auto;  

                               
                              margin-right: -12px;
                                

                                  }

                        div#main-menu-item {

                                margin-left: 2px;
                                }

                        div#top-nav {

                                width: 441px; 
                                height: auto; 
                                background-color: #ececee;
                                }

                         
}

                          /* for small phones from: 0px to 375  */

                          @media only screen and (max-width: 375px ) {

              .mobile-menu{
                position: absolute!important;
                top: 43px!important;
                left: 438px!important;
                display: block!important;
                cursor: pointer;
                                }
                          div#side {

                                  width: 402px; 
                                  height: auto;  
                                  
                                   
                                  margin-right: -12px;
                                    

                                      }

                            div#main-menu-item {

                                  margin-left: 2px;
                                  }

                          div#top-nav {

                                  width: 402px; 
                                  height: auto; 
                                  background-color: #ececee;
                                  }
                        

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
                                .main-content{
                                  width: 1092px;
                                  /* padding: 20px; */
                                  background-color: #fff;
                                  margin-left: 240px;
                                }
                                .main-content .top-nav-menu{
                                  background-color: #f6f6f9;
                                  display: flex;
                                  align-items: center;
                                  height: 64px;
                                  margin-top: 12px;
                                  padding: 0 50px;
                                  justify-content: flex-end;
                                }
                                .main-content .top-nav-menu .icons .icon{
                                  padding: 0 30px 0 0;
                                }
                                .main-content .top-nav-menu .icons .icon:last-child{
                                  padding: 0;
                                }
                                .profiles{
                                  cursor: pointer;
                                }
                                .profies .profile-image img{
                                  width: 40px;
                                  height: 40px;
                                  border-radius: 50%;
                                }
                                .profiles .profile-name p{
                                  font-size: 12px;
                                  font-weight: bold;
                                  font-style: normal;
                                  font-stretch: normal;
                                  line-height: 1.33;
                                  letter-spacing: normal;
                                  color: #575bde;
                                }
                                .content-area{
                                  background-color: #ececee;
                                  padding: 10px;
                                }
                                .mobile-menu{
                                  position: absolute;
                                  top: 0px;
                                  left: 0;
                                  display: none;
                                }

                                /* FORM STYLING  */

                                .form-styles{

                          margin-top: 40px;
                          margin-left: 50px;
                          margin-right: 50px;
                          
                          }

/* small phones to ipad pro: from 0px to 1024px */
@media only screen and (max-width: 1024px ) {
 
 .form-styles{

     margin-top: 40px;
     margin-left: 20px;
     margin-right: 20px;
     width: 745px;
     }
}


/* small phones to ipad: from 0px to 768px */
@media only screen and (max-width: 768px ) {
 
 .form-styles{

     margin-top: 40px;
     margin-left: 20px;
     margin-right: 20px;
     width: 725px;
     }
}


/* : from 0px to 751px */
@media only screen and (max-width: 751px ) {
 
 .form-styles{

     margin-top: 20px;
     margin-left: 20px;
     margin-right: 20px;
     width: 710px;
     }
}


/* small phones to iphone 6/7/8 PLUS: from 0px to 414PX */
@media only screen and (max-width: 414px ) {
 
 .form-styles{

     margin-top: 20px;
     margin-left: 20px;
     margin-right: 20px;
     width: 370px;
     }
}

/* small phones to Pixel 2 and pixel 2XL: from 0px to 411px*/
@media only screen and (max-width: 411px ) {
 
 .form-styles{

     margin-top: 20px;
     margin-left: 20px;
     margin-right: 20px;
     width: 370px;
     }
}

/* small phones to iphone 6/7/8: from 0px to 375px*/
@media only screen and (max-width: 375px ) {
 
 .form-styles{

     margin-top: 20px;
     margin-left: 20px;
     margin-right: 20px;
     width: 330px;
     }
}


/* small phones to iphone X: from 0px to 375px */
@media only screen and (max-width: 375px ) {
 
 .form-styles{

     margin-top: 20px;
     margin-left: 20px;
     margin-right: 20px;
     width: 330px;
     }
}


    /* small phones to small Galaxy s5: from 0px to 360px*/

@media only screen and (max-width: 360px ) {
 
  .form-styles{

      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px;
      width: 320px;
      }
}







/* small phones to iphone5/SE: from 0px to 320px*/
@media only screen and (max-width: 320px ) {
 
 .form-styles{

     margin-top: 20px;
     margin-left: 20px;
     margin-right: 20px;
     width: 280px;
     }
}
            </style>

${this.view === VIEW_MODE_DIALOG ? html`
                <iron-icon icon="icons:arrow-back"style="color: white" @click="${this._viewList}"></iron-icon>
                <section-page id="dialog" queue=${this.dialogServicesQueue}></section-page>
            ` : html`

 <div class="main">

    
<section class="section is-paddingless ">
   
        <div class="columns " >
               
            <div id = "side" class="column is-three-fifths " style="overflow: auto;">
              
              <div class="service-header is-flex">
                <figure class="image is-rounded is-24x24" 
                      style="margin-left: 20px;">
                        <img src="${this._computeLogo(this.gateway)}"> 
                </figure>
                <p style="color: #ffffff; font-weight: 900; 
                        font-family: lato; font-size: 16px;
                        position: relative;">${this.gateway.name}</p>
              </div>   





                    ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`



                      <div id="main-menu-item" class=" ${pageGroupIndex == this._pageGroup ? 'selected  active' : ''}  " style="overflow: auto;">

                      <a id = "pagegroup-anchor" href=""
                            class=" is-capitalized  main-menu-p " 
                            style="cursor: pointer; color:${this.mainColor};" 
                            @click = ${this.handleClick}>

                          <span id="pagegroup-icon" class="icon has-text-white" style="margin-left: -20px;  position: absolute; top: 5px;">

                            <fa-icon class="fas fa-th-large" color = "${this.iconColor}" style=" height: 20px; width: 16px; position: relative; top: 1px;"></fa-icon>

                          </span>

                          &nbsp;${pageGroup.title}&nbsp;
                        </a>

                        <div id="sub-items-${pageGroupIndex}" class="sub-items" style="margin-top: 20px; ">

                            ${pageGroup.pages.map((menu, menuIndex) => html`

                            <div id="item-${menuIndex}" @click='${() => this.selectedPage(menuIndex)}' class="item">
                            
                            

                            <a id="sub-items-anchor-"  class="sub-items-anchor " 
                                href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${menuIndex}/"> ${ServicePage.toTitleCase(menu.title)} </a> 
                            <br>
                            </div>
                            
                            

                            `)}

                          </div>
                          
                      </div>

                      
                    `)}

                    <div class="mobile-menu" @click="${this.menuClick}">
                      <span><fa-icon class="fas fa-bars" color = "#ccced0" style="height: 16px; width: 19.5px;"></fa-icon></span>
                    </div>
            </div>

            <div class="main-content">
              <div class="top-nav-menu">
                <div class="profile-content is-pulled-right" style="width: 180px;">
                  <div class="columns is-mobile">
                     <div class="column">
                       <div class="icons is-flex">
                         <div class="icon icon-left">
                           <span><fa-icon class="fab fa-elementor" color = "#ccced0" style="height: 16px; width: 19.5px;"></fa-icon></span>
                         </div>
                         <div class="icon icon-left">
                           <span><fa-icon class="fas fa-bell" color = "#ccced0" style="height: 16px; width: 19.5px;"></fa-icon></span>
                         </div>
                       </div>
                     </div>
                     <div class="column">
                     ${this.gateway.profile ? html`
                      <div class="service-profile"> 
                        <div class="profiles is-flex" @click="${this.toggleProfile}">
                          <div class="profile-image profile">
                            <img src="${this.gateway.profile.photo ? '/media/' + this.gateway.profile.photo : 'images/web/user.svg'}" alt="profile image">
                          </div>
                          <div class="profile-name profile">
                              <p>${this.gateway.profile.firstName} ${this.gateway.profile.lastName}</p>   
                          </div>
                        </div>

                        <div class="profile-select-content" id="profile-content">
                            <div class="profile-content is-flex">
                                <div class="profile-picture cta" style="margin-right: 15px">
                                <img src="${this.gateway.profile.photo ? '/media/' + this.gateway.profile.photo : 'images/web/user.svg'}" alt="profile image">
                                </div>
                                <div class="prifile-info">
                                    <p class="profile-name">${this.gateway.profile.firstName}&nbsp;${this.gateway.profile.lastName}</p>
                                    <p class="profile-email is-size-7">${this.gateway.profile.username}</p>
                                </div>
                            </div>
                            <div class="profile-buttons">
                                <div class="main-cta center">
                                    <a href="/logout" class="button is-rounded is-uppercase">Logout</a>
                                </div>
                            </div>
                        </div>
                      </div>
                     
                     ` : html``}
                     </div>
                  </div>
                </div>
              </div>

              <div class="content-area">
                <div id="form-x" class="columns is-multiline form-styles" >
                  ${this.page.pageInputGroups.map((feed, feedIndex) => html`        
                    <div class="column is-12" >
                      <form-render .feed="${feed}" .params=${this.parseParams()}></form-render>
                  </div>`)}
                </div> 
              </div>
            </div> 
                        
              </section> 
            </div>
                
        </div>
    


  </section>
  </div> `}
  <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar>
     `;
  }

  constructor() {
    super();
    this.iconColor = "#fff";
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
      iconColor: String,
      mainColor: String
    };
  }

  menuClick() {
    document.querySelector('#main-menu-item').classList.toggle('is-block');
  }

  handleClick(evt) {
    evt.preventDefault();
    const menuItems = evt.currentTarget.nextElementSibling;
    const toggleClass = 'is-block';
    const highLight = 'selected';
    const mainWord = document.querySelector('.main-menu-p');

    if (this.iconColor == "black") {
      this.iconColor = "#fff";
    } else {
      this.iconColor = "black";
    }

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

  selectedPage(index) {
    const activeItems = document.querySelector('#item-' + index).querySelectorAll('.item');
    const selectedLink = document.querySelector('#item-' + index);
    activeItems.forEach(item => item.classList.remove('selected-items'));
    selectedLink.classList.add('selected-items');
  }

  static get styles() {
    return [Colors, Fonts, ServiceStyles, css`:host { display: block; }`];
  }

  toggleProfile() {
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