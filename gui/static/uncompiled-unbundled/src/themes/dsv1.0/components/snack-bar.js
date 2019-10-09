/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { html } from "../../../../node_modules/lit-element/lit-element.js";
import { SnackBarBase } from "../../../components/snack-bar.js";
import { register } from '../register.js';
import "../../../../node_modules/fa-icons/index.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SnackBar extends SnackBarBase {
  render() {
    console.log(this.message);
    return html`

 <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

      <style>

@font-face {
        font-family: 'TT Norms';
        src:  url('fonts/tt_norms_pro/tt_norms_pro_light-webfont.eot');/* IE9 Compat Modes */
        src:  url('fonts/tt_norms_pro/tt_norms_pro_light-webfont.woff') format('woff'), /* Modern Browsers */
              url('fonts/tt_norms_pro/tt_norms_pro_light-webfont.ttf') format('truetype'), /* Safari, Android, iOS */
              url('fonts/tt_norms_pro/tt_norms_pro_light-webfont.svg#TT Norms-300') format('svg');/* Legacy iOS */
        /* font-style: medium; */
        font-weight: 300;
        text-rendering: optimizeLegibility;
      }

       :host {
          will-change: transform;
          transform: translate3d(0, 100%, 0);
          transition-property: visibility, transform;
          transition-duration: 0.2s;
          visibility: hidden;
      }
      
      :host([active]) {
        visibility: visible;
        transform: translate3d(0, 0, 0);
      }


      .firstGreen {
        font-size: 14px;  
        margin-top: 30px; 
        background-color: #11bf5a;
        color: #fff;
      }
      .firstGreen-icon-check{
          margin-left: 30px; 
          margin-right: 20px; 
          margin-top: 32px; 
          margin-bottom: 32px;
      }
      
      .notification-container{
        width: 370px;
        margin: 0 auto;
      }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
 <div class="columns">
  <div class="column">
    <div class="notification-container">
      <div class="notification has-text-white is-${this.context.toLowerCase()}" style=" font-size: 14px;  margin-top: 30px;">
        <button class="delete"></button>
          <span class="icon  has-text-white  is-pulled-left" style="margin-left: 30px; margin-right: 20px; margin-top: 32px; margin-bottom: 32px;">
              <fa-icon class="fas fa-check-circle" color="#fff" style="height:36px; width: 36px;"></fa-icon>
          </span>
          <p style="margin-left: 86px; margin-top: 16px; font-weight: bold; font-size: 18px;"> <slot name="title"></slot></p>  
          <p style="margin-left: 86px; margin-bottom: 22px;"><slot name="message"></slot></p>              
      </div>
    </div>        
  </div>
</div>
    `;
  }

}

register(SnackBar);