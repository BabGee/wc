/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../node_modules/lit-element/lit-element.js";
export const InputDefaultStyles = css`
:focus{
    outline: none;
    border: 1px solid var(--app-default-color);
}
input{
    font: 15px/24px "Lato", Arial, sans-serif; 
    color: #333; 
    width: 100%; 
    box-sizing: border-box; 
    letter-spacing: 1px;
    border-radius: 6px;
}
`;