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
            .item{
              padding: 6px 2px;
            }
            .item:hover{
              background: #ebebed;
              

            }
            .item.active{
              background: #ebebed;
            }
            .item.active a{
              color: #575bde;
            }

          
            </style>

${this.view === VIEW_MODE_DIALOG ? html`
                <iron-icon icon="icons:arrow-back"style="color: white" @click="${this._viewList}"></iron-icon>
                <section-page id="dialog" queue=${this.dialogServicesQueue}></section-page>
            ` : html`

 <div class="main">

    
<section class="section is-paddingless ">
   
        <div class="columns  is-mobile">
               
            <div class="column is-three-fifths" style=" width: 240px; height: 100vh; background-image: linear-gradient(165deg, #606cc3, #313fae 98%); margin-right: -12px;">
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
                      
                      


                      <div class=" ${pageGroupIndex == this._pageGroup && pageGroupIndex == this._page ? 'active' : ''}"
                      style="z-index: 1; position: relative; background-color: #ebebed; margin-left: 30px; margin-top: 5px; font-size: 14px; padding-left: 35px; padding-top: 7px; padding-bottom: 7px; ">

                        

                        <a href=""style="color:  #575bde; background-color: #ebebed; margin-left: -10px; " class=" is-capitalized" style="cursor: pointer;" @click = ${() => this.handleClick()} >


                          <span class="icon has-text-white" style="margin-left: -20px;  position: absolute; top: 5px;">

                            <fa-icon class="fas fa-th-large" color = "#000" style=" height: 20px; width: 16px;"></fa-icon>

                            </span>

                            &nbsp; ${pageGroup.title}

                        </a>

                        
                        <div class="sub-items  " style="margin-top: 20px;">

                            ${pageGroup.pages.map((menu, menuIndex) => html`

              

                            <div class="item">
                            
                            <!-- when adding more menu items please incude the <br> to give more styling -->

                            <a style="margin-top: 20px; color: #575bde; background-color: #ebebed;" 
                                href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${menuIndex}/"> ${ServicePage.toTitleCase(menu.title)} </a> 
                            <br>
                            </div>

                            

                            `)}

                          </div>
                        
                         

      
                      </div>

                      
                    `)}
            </div>
                  
            <div class="column" style=" width: 1200px; height: auto; background-color: #ececee; ">
                   
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
                    
                    <div class="columns is-multiline">
                      ${this.page.pageInputGroups.map((feed, feedIndex) => html`        
                       <div class="column is-12">
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
  }

  static get properties() {
    return {
      pages: Array,
      tab: Object,
      profile: {
        type: Object,
        value: ''
      },
      page: Number
    };
  }

  handleClick() {
    const items = this.qs('.sub-items');
    items.classList.toggle("is-block");
  } // handleClick() {
  //   const items = this.qs('.sub-items');
  //   items.classList.toggle("is-block")
  // }


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