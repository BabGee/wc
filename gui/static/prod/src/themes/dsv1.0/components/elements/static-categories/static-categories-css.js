/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const StaticCategoriesStyles = css`
.wrapper{
    display: flex;
    flex-wrap: wrap;
    }
.card {
    background-color: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    }
.dropContain{
    padding: 40px;
}
.text-content{
    overflow: hidden;
    text-overflow: ellipsis;
}
.hover{
    display: none;
    color: white;
    background-color:#4D4C4B;
    padding:10px;
}
.text-content:hover + .hover{
    display:inline-table;
}
`;