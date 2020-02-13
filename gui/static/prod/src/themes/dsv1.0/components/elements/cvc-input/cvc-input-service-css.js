/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const CvcInputServiceStyles = css`
.row{
    width: 100%;
}
.row .inp-right{
    /* width: 5%; */
    height: 100px;
}
.row .inp-right input{
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
    padding: 18px calc(.625em - 1px) 18px 20px;
}
.row .inp-right input::-webkit-input-placeholder { /* Edge */
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
}
.row .inp-right input :-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
}
.row .inp-right input ::placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
}
.row .inp-right .field .label{
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
}

.row .inp-right .field.error, 
.row .inp-right .field.error input, 
.row .inp-right .field.error .icon{
    color: #ff3860;
    fill: #ff3860;
}
.row .inp-right .field.error{
    font-weight: normal;
    font-size: 12px;
}

.row .inp-right .field.success, 
.row .inp-right .field.success input, 
.row .inp-right .field.success svg{
    color: #23d160;
    fill: #23d160;
}
.row .inp-right .field.success{
    font-weight: normal;
    font-size: 12px;
}
`;