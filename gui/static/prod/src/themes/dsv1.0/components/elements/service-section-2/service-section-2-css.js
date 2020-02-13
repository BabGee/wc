/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const ServiceSection2Styles = css`

.service-section{
    background-color: #fff!important;
}
/* .row {
    margin-left: -10px;
    margin-right: -10px;
} */
.row::before {
    display: table;
    content: " ";
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}

.service-title{
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
}

`;