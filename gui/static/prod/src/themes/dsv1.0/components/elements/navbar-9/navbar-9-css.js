/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const NavbarNineStyles = css`
.ii__container-main{
    margin: 0 auto;
    padding: 0 90px;
    background-color: var(--app-primary-color);

}
/* header */
.ii__main-header{
    background-color: var(--app-primary-color);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    box-shadow: 0 1px 0 0 #d9d9d9;
    /* background: #fff; */
}
.navbar{
    background: transparent;
    height: 5.5em;
    background-color: var(--app-primary-color);
}
.nav__item{
    font-weight: regular;
    font-size: 16px;
}
.nav__item:hover{
    /* font-weight: bolder; */
    position: relative;
    color: #fff!important;
    border-bottom: 4px solid #fff;
    background: var(--app-accent-color)!important;
}
/* .nav__item:hover::after{
    content: '';
    position: absolute;
    width: 90%;
    height: 3px;
    top: 50px;
    left: 0;
    background: #409DB5;
} */
.navbar-item .buttons .button{
    font-size: 13px;
    font-weight: inherit;
    width: 115px;
    height: 3em;
}
.navbar-item .logo-img {
  height: auto;
  object-fit: contain;
  width: 100%;
}
.navbar-item img{
  min-height: 3.75rem!important; 
}
@media screen and (max-width: 1023px){
  .ii__container-main{
        margin: 0 auto;
        padding: 0 10px;
    }
    .top{
        position: relative;
        top: 44px;
    }
}
`;