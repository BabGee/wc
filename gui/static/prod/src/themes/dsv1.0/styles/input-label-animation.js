/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../node_modules/lit-element/lit-element.js";
export const InputLabelAnimationtStyles = css`
.label-animation{
    border: 0; 
    padding: 7px 15px; 
    border: 1px solid #ccc; 
    position: relative; 
    background: transparent;
}
.label-animation ~ .focus-bg:before,
.label-animation ~ .focus-bg:after{
    content: ""; 
    position: absolute; 
    left: 50%; 
    top: 50%; 
    width: 0; 
    height: 0; 
    background-color: #ededed; 
    transition: 0.3s; 
    z-index: -1;
}
.label-animation:focus ~ .focus-bg:before,
.has-content.label-animation ~ .focus-bg:before{
    transition: 0.3s; 
    width: 50%; 
    left: 0; 
    top: 0; 
    height: 100%;
}
.label-animation ~ .focus-bg:after{
    left: auto; 
    right: 50%; 
    top: auto; 
    bottom: 50%;
}
.label-animation:focus ~ .focus-bg:after,
.has-content.label-animation ~ .focus-bg:after{
    transition: 0.3s; 
    width: 50%; 
    height: 100%; 
    bottom: 0; 
    right: 0;
}
.label-animation ~ label{
    position: relative;
    left: 25px;
    top: -30px; 
    width: 100%;  
    color: #4a4a4a; 
    transition: 0.3s; 
    letter-spacing: 0.5px;
    pointer-events: none;
}
.label-animation:focus ~ label, 
.has-content.label-animation ~ label{
    top: -62px; 
    left: 0; 
    font-size: 12px; 
    color: #333; 
    transition: 0.3s;
}
`;