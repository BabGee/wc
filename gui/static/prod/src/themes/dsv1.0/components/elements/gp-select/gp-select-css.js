/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const GpSelectStyles = css`

.center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* Account dropdown select */
  .account-select{
    position: relative;
   -moz-user-select: none; 
   -webkit-user-select: none; 
   -ms-user-select:none; 
   user-select:none;
   -o-user-select:none;"
  }
  .account-select .account-header{
    background: #fff;
    padding: 10px 20px 10px 10px;
    position: relative;
    display:inline-block;
    cursor: pointer;
  }
  .account-header p {
    color: #013243;
  }
  .account-header p span{
    color: #6c7a89;
  }
  .account-select .account-header::after{
    content: '';
    width: 8px;
    height: 8px;
    border-left: 2px solid #4a4a4a;
    border-bottom: 2px solid #4a4a4a;
    border-right: 2px solid transparent;
    border-top: 2px solid transparent;
    position: absolute;
    transform: rotate(-43deg);
    top: 23px;
    right:4px;
  }
  .account-item{
    padding: 7px;
  }
  .account-item .profile-pic img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .account-item .accout-details p{
    font-size: 14px;
    font-weight: 500;
  }
  .account-item .accout-details p span{
    font-weight: lighter;
  }
  .account-body{
    background: #fff;
    display: none;
    position:absolute;
    padding: 10px 20px 10px 10px;
  }
  .account-body ul li{
    cursor: default;
    border-bottom: 1px solid #ececec;
  }
  .account-body ul li:hover{
    background-color: #f1f1f1;

  }
  .list-active{
    background-color: #f1f1f1;
  }
  .account-body ul li:last-child{
    border-bottom: 0 solid transparent;
  }

`;