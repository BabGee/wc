/**
@license
Copyright (c) 2018 InterIntel Technologies. All rights reserved.

*/
import { html } from "../../../../node_modules/lit-element/lit-element.js";
import { SnackBarBase } from "../../../components/snack-bar.js";
import { register } from '../register.js';

class SnackBar extends SnackBarBase {
  render() {
    return html`


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
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 12px;
        background-color: var(--app-default-color);
        color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        will-change: transform;
        transform: translate3d(0, 100%, 0);
        transition-property: visibility, transform;
        transition-duration: 0.2s;
        visibility: hidden;
        width: 360px;
        height: 100px;
        font-family: 'TTNormsPro';
        font-size: 14px;
      }
      :host([active]) {
        visibility: visible;
        transform: translate3d(0, 0, 0);
      }
      @media (min-width: 460px) {
        :host {
          width: 320px;
          height: 60px;
          margin: auto;
        }
      }
    </style>
 <div class="columns">

<div class="column " >

        <div class="notification has-text-white  is-success " 
        style=" font-size: 14px;  margin-top: 30px; ">

        <button class="delete"></button>

        <span class="icon  has-text-white  is-pulled-left" 
              style="margin-left: 30px; margin-right: 20px; margin-top: 32px; margin-bottom: 32px;">

                <i class="fas fa-check-circle" style="height:36px; width: 36px;"></i>

            </span>

              <p style="margin-left: 86px; margin-top: 16px; font-weight: bold; font-size: 18px;"> Well done! </p>  

              <p style="margin-left: 86px; margin-bottom: 22px;">You succesfully read this important alert message.</p> 
                
                    
                
    </div>

</div>

<div class="column ">

        <div class="notification has-text-white   " 
        style=" font-size: 14px;  margin-top: 30px; background-color: #11bf5a;">

        <button class="delete"></button>

        <span class="icon  has-text-white  is-pulled-left" 
              style="margin-left: 30px; margin-right: 20px; margin-top: 32px; margin-bottom: 32px;">

                <i class="fas fa-check-circle" style="height:36px; width: 36px;"></i>

            </span>

              <p style="margin-left: 86px; margin-top: 16px; font-weight: bold; font-size: 18px;"> Well done! </p>  

              <p style="margin-left: 86px; margin-bottom: 22px;">You succesfully read this important alert message.</p>
                
                    
                
    </div>
        
</div>

<div class="column">

        <div class="notification has-text-white   " 
        style=" font-size: 14px;  margin-top: 30px; background-color: #11bf5a;">

        <button class="delete"></button>

        <span class="icon  has-text-white  is-pulled-left" 
              style="margin-left: 30px; margin-right: 20px; margin-top: 32px; margin-bottom: 32px;">

                <i class="fas fa-check-circle" style="height:36px; width: 36px;"></i>

            </span>

              <p style="margin-left: 86px; margin-top: 16px; font-weight: bold; font-size: 18px;"> Well done! </p>  

              <p style="margin-left: 86px; margin-bottom: 22px;">You succesfully read this important alert message.</p>
                
                    
                
    </div>
        
</div>
 </div>
    
    <slot></slot>
    `;
  }

}

register(SnackBar);