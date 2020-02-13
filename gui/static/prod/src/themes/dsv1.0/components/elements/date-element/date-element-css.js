/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const DateElementStyles = css`

.calendar-select{
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    position: relative;
  }
 .calendar-select-header{
  width: 100%;
  background: #fff;
  padding: 10px;
  position: relative;
  cursor: pointer;
  border-radius: 6px;
}
.arrow{
  position: relative;
}
.calendar-select-header::after{
  content: '';
  width: 8px;
  height: 8px;
  border-left: 2px solid #4a4a4a;
  border-bottom: 2px solid #4a4a4a;
  border-right: 2px solid transparent;
  border-top: 2px solid transparent;
  position: absolute;
  transform: rotate(-43deg);
  top: 13px;
  right: 23px;
}


.calendar-select-header p{
  font-size: 14px;
  font-weight: 500;
}
.calendar-select-body{
  width: 100%;
  margin-top: 15px;
  border-radius: 6px;
  display: none;
  z-index: 9999;
  border: 1px solid #e5e5e5;
  position: absolute;
}
/* .calendar-select-body::before{
  content: '';
  position: absolute;
  border: 1px solid #fff;
  border-bottom: 10px solid #fff;
  border-left: 10px solid transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
} */
.calendar-select-body.cal-active{
  display: block;
}

.calendar-select-body .month {
  padding: 10px 15px;
  width: 100%;
  background: #fff;
}

.calendar-select-body .month ul {
  margin: 0;
  padding: 0;
}

.calendar-select-body .month ul li {
  color: #013243;
  font-size: 14px;
  text-transform: capitalize;
  letter-spacing: 3px;
  font-weight: 500;
}
.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #fff;
}

.weekdays li {
  display: inline-block;
  width: 13%!important;
  color: #013243;
  font-size: 10px;
  text-align: center;
}
.days {
  padding: 10px 0;
  background: #fff;
  margin: 0;
}

.days li, .weekdays li {
  list-style-type: none;
  display: inline-block;
  width: 13.5%;
  text-align: center;
  margin-bottom: 5px;
  font-size:12px;
  color: #013243;
  cursor: pointer;
}

.days li.active {
  padding: 5px;
  background: var(--app-accent-color);
  color: white !important;
  /* border-radius: 50%; */
}
.next, .prev{
  cursor: pointer;
}
.monthAndYear {
  cursor: pointer;

}

.month-calender {
  padding: 10px 0;
  background: #fff;
  margin: 0;
  display:none;
}

.month-calender li {
  list-style-type: none;
  display: inline-block;
  width: 13.5%;
  text-align: center;
  margin-bottom: 5px;
  font-size:12px;
  color: #013243;
  cursor: pointer;
}

.month-calender li.active {
  padding: 5px;
  background:var(--app-accent-color);
  color: white !important;
  /* border-radius: 50%; */
}




/* Add media queries for smaller screens */
@media screen and (max-width:720px) {
  .weekdays li, .days li {width: 12.1%;}
}

@media screen and (max-width:522px) {
  .weekdays li, .days li {width: 11.1%;}
}
@media screen and (max-width:522px){
  .days li{width: 12.1%;}
}

@media screen and (max-width: 420px) {
  .weekdays li{width: 10.5%!important;}
  .days li {width: 12.5%;}
  .days li .active {padding: 2px;}
}

@media screen and (max-width: 320px) {
  .weekdays li{width: 10%!important;}
}

@media screen and (max-width: 360px) {
  .weekdays li{width: 10.4%!important;}
}

@media screen and (max-width: 290px) {
  .weekdays li, .days li {width: 12.2%;}
}
@media screen and (min-width: 426px){
  .weekdays li{
    width: 11.1%!important;
  }
}

@media screen and (min-width: 722px){
  .weekdays li{
    width: 12.5%!important;
  }
}
/* @media screen and (min-width: 770px){
  .weekdays li{
    width: 11.5%!important;
  }
} */
@media screen and (min-width: 1025px){
  .weekdays li{
    width: 13%!important;
  }
}


`;