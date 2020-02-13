/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const ShoppingCartBtnStyles = css`
.menu-fab {
    position: fixed;
    right: 58px;
    top: 12px;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 901;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04);
    transition: all .4s;
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
    opacity: 1
}

.cart-badge {
    position: absolute;
    top: -2px;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: #F44336;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    font-weight: 500;
    pointer-events: none;
    text-align: center;
    
}
a{
    text-decoration: none;
}
`;