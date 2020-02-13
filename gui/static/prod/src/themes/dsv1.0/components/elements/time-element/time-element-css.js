/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const TimeElementStyles = css`

.timer-container{
    width: 100%;
  }
  .timer-container{
   width: 100%;
   border: 1px solid #b9b9b9;
   padding: 10px;
   border-radius: 4px;
   display: flex;
   align-items: center;
   cursor:pointer;
   justify-content: center;
   position: relative;
  }
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
 
 .calendar-select-header p a{
   color: #4a4a4a
 }
 .time-font-title {
   font-size: 14px;
   font-weight: 600;
   text-transform: capitalize;
 }
 
 .heading{
   padding-top: 10px;
 }
 
 a {
   color: #4A4A4A;
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
 
 .timer-radio{
   display: flex;
   align-items: flex-start;
   justify-content: space-around;
 }
 
 .time-active {
   background-color:var(--app-accent-color);
   color:#fff;
 }
 .time-active:hover  {
   background-color:var(--app-accent-color);
   color:#fff;
 }
 
  .timer-container .timer-element::after{
     content: '';
     width: 7px;
     position: absolute;
     right: 25px;
     border-left: 2px solid;
     height: 7px;
     border-bottom: 2px solid;
     transform: rotate(-45deg);
  }
  .timer-container .timer-element p a{
   color: inherit;
  }
  .drop-down{
   width: 10%;
   position: absolute;
   border: 1px solid #b9b9b9;
   padding: 10px;
   border-radius: 4px;
  }
  .timer-dropdown{
   width: 100%;
   margin-top: 15px;
   border-radius: 6px;
   z-index: 9999;
   border: 1px solid #e5e5e5;
   position: absolute;
   background-color:white;
 
  }
  .drp{
    width: 100%;
    /* height: 120px; */
    text-align:  right;
  }
  .drp ul{
   overflow-y: scroll;
     overflow-x: auto;
     height: 130px;
  }
  .drp ul li:hover {
   background: #e5e5e5;
   cursor: pointer;
  }
 
 
  @media screen and (max-width: 768px){
 
   #timer-lineup li{
 
     /* margin-right: 320px ;
      margin-left:  60px; */
      overflow: auto;
      font-size: 150%;
      
    }
  
    ul#timer-lineup{
  
      height: 37px;
      
        
      
    }
  
    #timer-linuep-minutes li{
  
      margin-right: 315px ;
      margin-left:  60px;
      overflow: auto;
      font-size: 130%;
      
    }
  
    #timer-linuep-minutes{
      height: 37px;
      
    }
  
    .timer-radio {
  
      /* margin-right: 269px; */
      font-size: 130%;
      
    }
 
  }
 
 
  @media screen and (max-width: 414px){
 
   #timer-lineup li{
 
     /* margin-right:140px ;
      margin-left:  60px; */
      overflow: auto;
      font-size: 150%;
      
    }
  
    ul#timer-lineup{
  
      height: 37px;
      
        
      
    }
  
    #timer-linuep-minutes li{
  
      margin-right:135px ;
      margin-left:  60px;
      overflow: auto;
      font-size: 130%;
      
    }
  
    #timer-linuep-minutes{
      height: 37px;
      
    }
  
    .timer-radio {
  
      /* margin-right: 95px; */
      font-size: 130%;
      
    }
 
  }
 
 
  @media screen and (max-width: 375px){
 
   #timer-lineup li{
 
     /* margin-right: 120px ;
      margin-left:  60px; */
      overflow: auto;
      font-size: 150%;
      
    }
  
    ul#timer-lineup{
  
      height: 37px;
      
        
      
    }
  
    #timer-linuep-minutes li{
  
      margin-right: 115px ;
      margin-left:  60px;
      overflow: auto;
      font-size: 130%;
      
    }
  
    #timer-linuep-minutes{
      height: 37px;
      
    }
  
    .timer-radio {
  
      /* margin-right: 75px; */
      font-size: 130%;
      
    }
 
  }
 
  @media screen and (max-width: 360px){
           
   #timer-lineup li{
 
    /* margin-right:110px ;
     margin-left:  60px; */
     overflow: auto;
     font-size: 150%;
     
   }
 
   ul#timer-lineup{
 
     height: 37px;
     
       
     
   }
 
   #timer-linuep-minutes li{
 
     margin-right:105px ;
     margin-left:  60px;
     overflow: auto;
     font-size: 130%;
     
   }
 
   #timer-linuep-minutes{
     height: 37px;
     
   }
 
   .timer-radio {
 
     /* margin-right: 75px; */
     
   }
 
 
 }
 
 @media screen and (max-width: 320px){
           
   #timer-lineup li{
 
    /* margin-right:95px ;
     margin-left:  60px; */
     overflow: auto;
     font-size: 150%;
     
   }
 
   ul#timer-lineup{
 
     height: 37px;
     
       
     
   }
 
   #timer-linuep-minutes li{
 
     margin-right:90px ;
     margin-left:  60px;
     overflow: auto;
     font-size: 130%;
     
   }
 
   #timer-linuep-minutes{
     height: 37px;
     
   }
 
   .timer-radio {
 
     /* margin-right: 47px; */
     
   }
 
 
 }
 

`;