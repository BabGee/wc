/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const HeroElement3Styles = css`

.hero-container{
    max-width: 100%;
    height: 100%;
    min-height: 0;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
    padding-top: 80px;
    background-color: #fff!important;
}
.hero-container::before, .row::before{
    display: table;
    content: " ";
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}
.row{
    margin-left: -10px;
    margin-right: -10px;
    margin-top: 42px;
}
.c-title-xl {
    margin-top: 8px;
    margin-bottom: 18px;
    color: var(--app-default-color)!important;;
    font-size: 70px;
    font-weight: bold;
    line-height: 58px;
    letter-spacing: .22px;
}
.c-paragraph {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: .15px;
}
.str-btn {
    border-radius: 5px!important;
    width: 170px!important;
    height: 3em!important;
    background-color: var(--app-secondary-color)!important;
    color: #fff!important;
    margin-top: 20px;
    border: none!important;
    font-weight: bold;
}

`;