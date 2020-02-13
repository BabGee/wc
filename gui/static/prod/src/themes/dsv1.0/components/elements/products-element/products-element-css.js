/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const ProductsElementStyles = css`

.ii__product{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    color: #4a4a4a;
  }
  .ii__product:hover{
    box-shadow: 1px 1px 11px 0 hsla(0, 0%, 79.2%, 0.5);
  }
  .ii__product-logo{
    width: 95px;
    height: 95px;
    background: var(--app-accent-color);
    border-radius: 50%;
    margin: 0 auto;
    
  }
  .ii__product-logo img{
    width: 75%;
    position: relative;
    top: 30%;
    left: 16%;
  }
  .read_more{
    color:var(--app-accent-color);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .show_less{
    color:var(--app-accent-color);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .is-custom-color{
    background-color: var(--app-accent-color);
    color: #fff;
  }
  .ii__content{
    margin-top:10px;
  }

`;