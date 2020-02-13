/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const TextFieldStyles = css`
.input-field{
    display:flex;
    padding-bottom:13px;
}
.Label-Name{
    position: fixed;
    width: 161px;
    height: 12px;
    font-family: ProximaNova;
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #6c7a89;
    padding-top:1px;
}
.default-2px{
    display: flex;
    flex-direction: row;
    width: 249px;
    height: 41px;
    border-bottom: solid 1px #acafb3;
}
.error-4px{
    display: flex;
    flex-direction: row;
    width: 249px;
    height: 41px;
    border-bottom: solid 1px #e74c3c; 
}
.success-2px{
    display: flex;
    flex-direction: row;
    width: 249px;
    height: 41px;
    border-bottom: solid 1px #acafb3; 
}
input#input{
    display: flex;
    flex: 1;
    border: initial;
    /*border-bottom: solid 1px #acafb3;*/
    padding-top: 23px;
    width: 208px;
    height: 16px;
}
#validationIcon{
    display:flex;
    position:absolute;
    padding-left:37%;
    top:20px;
}
#validationMessage{
    margin-top: 3px;
    display: block;
    position: absolute;
    top: 20px;
    color: #6c7a89;
    font-family: TTNormsPro;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
}
`;