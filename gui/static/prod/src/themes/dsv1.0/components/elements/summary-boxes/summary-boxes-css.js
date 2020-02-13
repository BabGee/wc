/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const SummaryBoxesStyles = css`
@media screen and (max-width: 775px){
    .column{
        width: 100%;
        max-width: 100%;
    }
}
.column{
    width: 236px;
    max-width: 236px;
}
.summary-wrapper{
    width: 100%;
    background: #fff;
    border: 1px solid #ebebed;
    border-radius: 10px;
    padding: 30px;
}
.summary-details{
    width: 100%;
}
.summary-details h1{
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #141821;
}
.summary-details p, .summary-details h1{
    margin: 0;
}
.summary-details p.currency{
    font-size: 12px;
    font-weight: bold;
}
.summary-details p.summary-type{
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #858997;
}
.chart {
    background: white;
    padding: 0px 20px 20px 29px;       
    position: relative;
    left: -30px;
}

`;