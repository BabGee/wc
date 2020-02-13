/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const StaticProductsListStyles = css`
/* The Modal (background) */
.product-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 2000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.product-modal-content {
  margin: 15% auto; /* 15% from the top and centered */
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.card {
  background-color: white;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  border-radius: 5px;
  margin: 20px;
}
.detail-image img{
width: 100%;
    height: 250px;
    margin: 10px auto;
    object-fit: contain;
}
.detail{
padding: 50px;
}
.detail-name{
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600!important;
}
.detail-description{
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
}
.detail-price{
    font-size: 24px;
    font-weight: 600!important;
    color: #58d288;
}
.ribbon{
background-color: #58d288;
    border-right: none;
    color: #fff;
    margin: 5px;
    font-size: 1rem !important;
    justify-content: center;
    padding: 8px 0.75em;
    text-align: center;
    white-space: nowrap;
    position: absolute;
    top: 0.5em;
    left: 0;
    font-weight: 400;
    z-index: 2;
}
.close-modal{
background-color: #ffffff;
    border-radius: 100%;
    border-right: none;
    height: 32px;
    width: 32px;
    color: #000000;
    font-size:20px;
    justify-content: center;
    padding: 10px;
    text-align: center;
    white-space: nowrap;
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 400;
    z-index: 2;
}

`;