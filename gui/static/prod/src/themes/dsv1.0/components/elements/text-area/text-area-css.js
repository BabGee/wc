/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const TextAreaStyles = css`
/* .text-area {
    padding: 16px;
   
  } */
  
  .text-area .field.success{
      position: relative;
  }
  .text-area{
    position: relative;
    padding: 16px;
  }
  .text-area textarea{
      height: 200px;
      position: relative;
      font-size: 14px!important;
      font-family: 'Work Sans', sans-serif;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #4A4A4A;
      padding: 25px;
      border-radius: 6px;
      border: 1px solid #e5e5e5;
      box-shadow: none;
  }
  .text-area textarea::-webkit-input-placeholder { /* Edge */
      font-size: 14px;
      font-weight: 500;
      font-family: 'Work Sans', sans-serif;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #4A4A4A!important;
  }
  .text-area textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
      font-size: 14px;
      font-weight: 500;
      font-family: 'Work Sans', sans-serif;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #4A4A4A!important;
  }
  .text-area textarea::placeholder{
      font-size: 14px;
      font-weight: 500;
      font-family: 'Work Sans', sans-serif;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #4A4A4A!important;
  }
  .text-area .field.success::before{
      content: '\f00c';
      position: absolute;
  }
  #warning-text{
    display:none;
  }
  .counter{
    position: absolute;
    right: 20px;
    bottom: 10px;
    color: #cecece;
  }
  
  
  /* NEW IMPLEMENTATION */
  
  
  .form {
    font-size: 16px;
    width: 100%;
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  
  .form textarea{
      
      
      padding-top: 30px;
      
  }
  .form textarea:focus{
      outline: none;
  }
  .form label{
      position: absolute;
      top: -78px;
      left: 11px; 
      height: 100%;
      width: 100%;
      pointer-events: none;
      
  }
  .form label::after{
      content: '';
      position: absolute;
      left: 0px;
      bottom: -1px;
      height: 100%;
      width: 100%;
      border-bottom: #595f6e;
      transform: translateX(-100%);
      transition: transform .3s ease;
  }
  .content-name{
      position: absolute;
      bottom: 70px;
      left: 10px;
      transition: all .3s ease;
  }
  .form textarea:focus + .label-name .content-name, .form input:valid + .label-name .content-name{
      transform: translateY(-17px);
      font-size: 85%;
      color: var(--app-default-color);
      margin-left: 0px;
      margin-bottom: 7px;
      
  }
  .form textarea:focus + .label-name::after, .form input:valid + .label-name::after{
      transform: translateX(50%);
      margin-left: 20px;
      
  }
  
  textarea{
  
      padding-top: 20px;
      
  }
  
  textarea:focus, textarea:hover{
  
    border-color: var(--app-default-color);
    
  }
`;