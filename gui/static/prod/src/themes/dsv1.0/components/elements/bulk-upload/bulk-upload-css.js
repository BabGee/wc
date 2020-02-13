/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const BulkUploadStyles = css`
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
	
	
	
}
 
 .inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: var(--app-default-color);
    display: inline-block;
    max-width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    padding: 0.625rem 1.25rem;
    
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: red;
}

.inputfile + label {
	cursor: pointer; /* "hand" cursor */
}

`;