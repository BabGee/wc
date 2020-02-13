/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const FeatureElementStyles = css`


.ii__features{
    margin-bottom:50px;
  }
  .feature-button{
    width:50%;
    margin-top:20px;
    background-color: var(--app-primary-color);
    color:#fff;
    transition:width ease-in .3s
  }

  .feature-button:hover{
    width:100%;
    background-color: var(--app-primary-color);
    color:#fff;
   
  }
  .feature-button:focus{
    width:50%;
    background-color: var(--app-primary-color);
    color:#fff;
    border-color: var(--app-primary-color);
   
  }
  .btn{
    display:flex;
    width:100%;
    justify-content:flex-start;
  }
  .feature-title{
    font-size:20px
  }
`;