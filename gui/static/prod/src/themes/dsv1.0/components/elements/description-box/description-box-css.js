/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const DescriptionBoxStyles = css`

.descriptionBox{
    width: 100%;
    padding: 10px;
    background: #fff!important;
}
/* .descriptionBox button{
    background: transparent!important;
    border: none;
    cursor: pointer;
} */
.descriptionBox__tabs{
    width: 28%;
    top: 0;
    right: 0;
    border-right: 1px solid var(--app-secondary-color)!important;
    position: relative;
}
.descriptionBox__item{
    padding: 10px 60px 10px 20px;
    min-height: 74px;
    border-bottom: 1px solid #ffffff!important;
    cursor: pointer;
    position: relative;
}
.descriptionBox__item:hover{
    background-color: var(--app-secondary-color)!important;
    border-right: 3px solid var(--app-default-color);
    color: #fff!important;
}
.bodTItle{
    font-weight: 500;
    line-height: 18px;
}

.descriptionBox__content{
    padding: 20px;
    width: 100%;
}
.descriptionBox__content .content-container{
    width: inherit;
    display: none;
}   
.tab_drawer_heading{
    display: none;
}
.li-active {
    background-color: var(--app-secondary-color)!important;
    color: #fff!important;
    border-right: 3px solid var(--app-default-color)!important;
}
.li-active:hover {
    background-color: var(--app-secondary-color)!important;
    color:#fff!important;
    border-right: 3px solid var(--app-default-color)!important;
}

@media screen and (max-width: 800px) {
    .descriptionBox__tabs {
        display: none;
    }
    .tab_drawer_heading {
        background-color: #ccc!important;
        margin: 0;
        padding: 10px 40px;
        display: block;
        cursor: pointer;
        user-select: none;
    }
    .descriptionBox__content .content-container{
        width: inherit;
        display: block;
    } 
    .data{
        display: none;
    }
    
}

`;