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

                        z-index: 1; 
                        position: relative; 
                        /* background-color: var(--app-default-color); */
                        margin-left: 30px; 
                        margin-top: 5px; 
                        font-size: 14px; 
                        padding-left: 35px; 
                        padding-top: 7px; 
                        padding-bottom: 7px;
                        }

                .selected {

                  background-color: #ebebed; 
                  color: #575bde;
                  z-index: 1; 
                  position: relative; 
                  
                  margin-left: 30px; 
                  margin-top: 5px; 
                  font-size: 14px; 
                  padding-left: 35px; 
                  padding-top: 7px; 
                  padding-bottom: 7px;
                }

               

               



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

            #sub-items-anchor, a {

              margin-top: 20px; 
              /* color: #575bde; 
              background-color: #ebebed; */

            }

            #sub-items-anchor:active {

              /* background-color: var(--app-default-color);
              color: white; */
              margin-top: 20px; 
              color: white ; 
              background-color: #ebebed;
              
            }         

            #side {

              width: 240px; 
              height: 1476px; 
              
              background-color: var(--app-default-color);
              margin-right: -12px;
            }

           



            #top-nav {

              width: 1200px; height: auto; background-color: #ececee;
            }

            #fomr-x {
              margin-top: 40px; 
              margin-left: 50px; 
              max-width: 1225px;
            }

            /* For ipad from: 0px to 768*/

            @media only screen and (max-width: 768px ) {

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

                #form-x {

                  margin-top: 40px; 
                  margin-left: -3.5px; 
                  max-width: 775px;
                }


                    }
           
/* tablets and small laptops  */

            @media only screen and (max-width: 751px ) {

                div#side {

                  width: 766px; 
                  height: auto;  
                  
                  
                  margin-right: -12px;
                    

                      }

                div#main-menu-item {

                      margin-left: 2px;
                }

                div#top-nav {

                  width: 766px; 
                  height: auto; 
                  background-color: #ececee;
                }

                #form-x {

                  margin-top: 40px; 
                  margin-left: -3.5px; 
                  max-width: 746px;
                  }


                    }

                    /* small phones to small tablets: from 0px to 386px*/
              @media only screen and (max-width: 360px ) {


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

                  #form-x {

                        margin-top: 40px; 
                        margin-left: -3.5px; 
                        max-width: 366px;
                        }

                      }


                        /* small phones to small tablets: from 0px to 411px*/
                @media only screen and (max-width: 411px ) {

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

                    #form-x {

                          margin-top: 40px; 
                          margin-left: -3.5px; 
                          max-width: 417px;
                          }

                }


/* for small phones: from 0px to 320px  */
                @media only screen and (max-width: 320px ) {

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

                     #form-x {

                            margin-top: 40px; 
                            margin-left: -3.5px; 
                            max-width: 327px;
                            }

                                    }

                        /* for small phones: from 0px to 414px  */
                        @media only screen and (max-width: 414px ) {

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

                          #form-x {

                                margin-top: 40px; 
                                margin-left: -3.5px; 
                                max-width: 421px;
                                }

}

                          /* for small phones from: 0px to 375  */

                          @media only screen and (max-width: 375px ) {


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
                          #form-x {

                                  margin-top: 40px; 
                                  margin-left: -3.5px; 
                                  max-width: 382px;
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
               
            <div id = "side" class="column is-three-fifths ">
              
              <div class="service-header is-flex">
                <figure class="image is-rounded is-24x24" 
                      style="margin-left: 20px; background-color: #5a6ef2;">
                        <img src="${this._computeLogo(this.gateway)}"> 
                </figure>
                <p style="color: #ffffff; font-weight: 900; 
                        font-family: lato; font-size: 16px;
                        position: relative;">${this.gateway.name}</p>
              </div>   





                    ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`



                      <div id="main-menu-item" class=" ${pageGroupIndex == this._pageGroup ? 'selected active' : ''}  ">

                      <a id = "pagegroup-anchor" href=""
                            
                            class=" is-capitalized  " 
                            style="cursor: pointer; color:${this.mainColor};" 
                            @click = ${this.handleClick}>

                          <span id="pagegroup-icon" class="icon has-text-white" style="margin-left: -20px;  position: absolute; top: 5px;">

                            <fa-icon class="fas fa-th-large" color = "${this.iconColor}" style=" height: 20px; width: 16px;"></fa-icon>

                          </span>

                          &nbsp;${pageGroup.title}&nbsp;&nbsp;&nbsp;
                        </a>
                        <div class="sub-items" style="margin-top: 20px;">

                            ${pageGroup.pages.map((menu, menuIndex) => html`
                            <div class="item">
                            
                            

                            <a id="sub-items-anchor "
                                href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${menuIndex}/"> ${ServicePage.toTitleCase(menu.title)} </a> 
                            <br>
                            </div>



                            `)}

                          </div>
                          
                      </div>

                      
                    `)}
            </div>


                  
            <div id="top-nav" class="column" >
                   
                    <section class="hero" style="background-color: #f6f6f9; height: 64px; margin-left: -10px;">
                       
                        <div class="hero-body">
                           
                            <div style="display: flex; flex-direction: row; 
                              float: right; align-items: center; margin-top: -30px; ">
                               
                                <div style="margin-right: 30px; margin-top: 5px;">
                                
                                <span class="icon" style="color: #ccced0;">
                                    <fa-icon class="fab fa-elementor" color = "#ccced0" style="height: 16px; width: 19.5px;"></fa-icon>
                                    
                                </span>
                                
                                </div>
                                
                                
                                <div style="margin-right: 30px; margin-top: 5px;"> 
                                
                                <span class="icon" style="color: #ccced0;">
                                    <fa-icon class="fas fa-bell" color = "#ccced0" style="height: 16px; width: 19.5px;"></fa-icon>
                                </span>
                                 
                                
                                </div>

                              

                                ${this.gateway.profile ? html`

                                <div style="margin-right: 5.4px;" >

                                 

                                 <a>   
                                <figure class="image is-rounded">
                                       
                                    <img src="images/user-img.PNG" 
                                       style="height: 24px; width: 23.6px;">
                                        
                                </figure>
                                    
                                </div>
                                
                              

                                <div> 
                                
                                <p style="color: #575bde; font-weight: bold; font-size: 12px; margin-right: 2.1px;">${this.gateway.profile.firstName} &nbsp; ${this.gateway.profile.lastName} </p> 

                                </a>
                               
                                
                                </div>
                                ` : html``}
                                 
                                
                                
                                <div style="margin-right: 30px;">
                                    
                                    <span class="icon" style="color: #000000;">
                                    
                                    <fa-icon class="fas fa-caret-down" color = "#000" ></fa-icon>


                                    
                                    </span>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </section>
                    
                    <div id="form-x" class="columns is-multiline" >
                      ${this.page.pageInputGroups.map((feed, feedIndex) => html`        
                       <div class="column is-12" >
                          <form-render .feed="${feed}" .params=${this.parseParams()}></form-render>
                      </div>`)}
                    </div>    
            </div>
                
        </div>
    


  </section>
  </div> `}
     `;
  }

  constructor() {
    super();
    this.iconColor = '#fff';
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

  handleClick(evt) {
    evt.preventDefault();
    const menuItems = evt.currentTarget.nextElementSibling;
    const toggleClass = 'is-block';
    const highLight = 'selected';

    if (this.iconColor == 'black') {
      this.iconColor = '#fff';
    } else {
      this.iconColor = 'black';
    }

    if (this.mainColor == 'white') {
      this.mainColor = '#575bde';
    } else {
      this.mainColor = 'white';
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

    let isCollapse = false; // collapse all previously expanded except the active

    this.qsa('.selected').forEach(function (el) {
      if (!el.classList.contains('active')) {
        if (el === menuItems.parentElement) isCollapse = true;
        el.classList.remove(highLight);
      }
    }); // expand clicked

    if (!isCollapse && !menuItems.parentElement.classList.contains(highLight)) {
      menuItems.parentElement.classList.add(highLight);
    }
  }

  static get styles() {
    return [Colors, Fonts, ServiceStyles, css`:host { display: block; }`];
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