/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const ProductItemImagesStyles = css`


.product{
    border: 1px solid #dddddd;
    /*height: 321px;*/
}

.product>img{
    max-width: 230px;
}


.service1-items {
    padding: 0px 0 0px 0;
    float: left;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    height: 321px;
    width: 130px;
    display: none;
}

.service1-item {
    height: 107px;
    width: 120px;
    display: block;
    float: left;
    position: relative;
    padding-right: 20px;
    border-right: 1px solid #DDD;
    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
}

.service1-item > img {
    max-height: 110px;
    max-width: 110px;
    opacity: 0.6;
    transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -moz-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
}

.service1-item > img:hover {
    cursor: pointer;
    opacity: 1;
}

.service-image-left {
    padding-right: 50px;
    height: auto;
    max-width: 100%;
}
.col-md-3 {
    width: 100%;
    padding: 25px;
}



.service-image-left > center > img,.service-image-right > center > img{
    height: auto;
}



`;