import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const TimeElementBase=class extends utilsMixin(SerializableElement){static get is(){return"time-element"}static get properties(){return{label:{type:String,value:"Choose Time"},required:Boolean,datestring:{type:String,value:""},columnSize:{type:Array}}}convertTime24to12(timeString){var H=+timeString.substr(0,2),ampm=12>H||24===H?"AM":"PM";timeString=(H%12||12)+timeString.substr(2,3)+" "+ampm;return timeString}convertTime12to24(time12h){const[time,modifier]=time12h.split(" ");let[hours,minutes]=time.split(":");if("12"===hours){hours="00"}if("PM"===modifier){hours=parseInt(hours,10)+12}return hours+":"+minutes}getName(){return this.e.formName}valid(){return!0}invalid(){}validate(){if((this.e.required||this.required)&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.label=TimeElementBase.toTitleCase(pElement.name)}};var timeElement={TimeElementBase:TimeElementBase};const TimeElementStyles=css`
#warning-text{
  position: relative;
  top: 5px;
  font-size: 0.75rem;
  padding: 0px;
  margin: 0px 0px 0px 1px;
  display:none;
}
.close{
  position: absolute;
  top: 4px;
  right: 20px;
  cursor: pointer;
}
.is-danger {
  color: rgb(255, 56, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(255, 56, 96)!important;
  border-radius: 6px;
  border-image: initial;
  position: relative;
}

.is-success{
  color: rgb(35, 209, 96)!important;
  border-width: 2px!important;
  border-style: solid!important;
  border-color: rgb(35, 209, 96)!important;
  border-radius: 6px;
  border-image: initial;
  position: relative;
}

.is-label-success{
  color: rgb(35, 209, 96)!important;
}
.is-label-danger{
  color: rgb(255, 56, 96)!important;
}

.dropdown-arrow{
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

.is-arrow-success{

  border-left: 2px solid #23D160!important;
  border-bottom: 2px solid #23D160!important;

}

.is-arrow-danger{

  border-left: 2px solid rgb(255, 56, 96)!important;
  border-bottom: 2px solid rgb(255, 56, 96)!important;

}

.timer-p{
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
#dateSelected{
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
label {
  font-size: 12px;
  font-weight: 700;
  width: 100%;
  color: rgb(1, 50, 67);
  letter-spacing: 0.5px;
  pointer-events: none;
  padding-bottom: 10px;  
  position: relative;
  top: -5px;

  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.timer-container{
    width: 100%;
  }
  .timer-container{
   width: 100%;
   border: 1px solid rgb(183, 181, 181);;
   padding: 10px;
   border-radius: 4px;
   display: flex;
   align-items: center;
   cursor:pointer;
   justify-content: center;
   position: relative;
  }
  .calendar-select{
   border: 1px solid rgb(183, 181, 181);;
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
//  .calendar-select-header::after{
//  content: '';
//  width: 8px;
//  height: 8px;
//  border-left: 2px solid #4a4a4a;
//  border-bottom: 2px solid #4a4a4a;
//  border-right: 2px solid transparent;
//  border-top: 2px solid transparent;
//  position: absolute;
//  transform: rotate(-43deg);
//  top: 13px;
//  right: 23px;
//  }
 
 
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

 .timer-dropdown-container{
   background-color: #fff;
   padding: 20px;
  //  width: 200px;
   margin-top: 20px;
   box-shadow: 3px 8px 5px #e5e5e5; 
   flex-direction: row;
   justify-content: center;
   align-items: center;
   font-size: 25px;
   border: 1px solid rgb(183, 181, 181);
 }
 .timer-columns{
   align-items: center;
   justify-content: center;
 }
 .timer-column{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }

`;var timeElementCss={TimeElementStyles:TimeElementStyles};class TimeElement extends TimeElementBase{static get styles(){return[TimeElementStyles,css`
        :host {
          display: block;
        }
      `]}static get properties(){return{dropDownMenuHidden:Boolean,today:String,todayHourTime:String,todayMinTime:String,amOrPm:String,isHourSelected:Boolean,isMinSelected:Boolean,isTODSelected:Boolean,iconColor:String}}constructor(){super();this.dropDownMenuHidden=!0;this.today=new Date;this.todayHourTime=this._getHour(this.today);this.todayMinTime=this._getMin(this.today.getMinutes());this.amOrPm=this._getAMOrPM(this.today);this.iconColor="#4a4a4a"}_getHour(today){let H=today.getHours();return(H%12||12).toString()}_getMin(time){let min=time;10>min?min="0"+time:min=time;return min.toString()}_getAMOrPM(today){let H=today.getHours();var ampm=12>H||24===H?"AM":"PM";return ampm.toString()}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">


<div class="column">
<label>${this.e.name}</label>
  <!-- Start of calender select -->
  <div class="calendar-select" style="width:100%;">
    <div id="calendar-select-header" class="calendar-select-header" @click="${()=>this._dropdown()}">
      <p id="dateSelected"  class="has-text-center">
        <fa-icon class="fas fa-clock" color="${this.iconColor}" size="1em"></fa-icon>&nbsp;&nbsp; <a class="hour" id="hrs">${this.todayHourTime}</a>&nbsp;:&nbsp;<a class="minutes" id="min">${this.todayMinTime}</a> <a class="tod" id="tod">${this.amOrPm}</a></p>
        <div id="dropdown-arrow" class="dropdown-arrow"></div>
    </div>
  </div> 

  <!-- start of the timer dropdown -->
  <div id="timer-dropdown" class="timer-dropdown-container dropdown-containeris-flex is-hidden" style="position: relative;">
    <div id="timer-section" class="timer-columns is-flex">
      <div class="timer-column">
        <a @click="${this.increaseHour}"><span><fa-icon class="fas fa-angle-up"></fa-icon></span></a>
        <p  class="timer-p" id="hourTxt">${this.todayHourTime}</p>
        <a @click="${this.decreaseHour}"><span><fa-icon class="fas fa-angle-down"></fa-icon></span></a>
      </div>
      <div class="timer-column">
        <p class="timer-p">&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class="timer-column">
        <a @click="${this.increaseMin}"><span><fa-icon class="fas fa-angle-up"></fa-icon></span></a>
        <p  class="timer-p"style="padding:0 1px" contentEditable="true" @keydown=${this.validateKeys} @keyup=${this.validateKeys2} @focusout=${this.validateKeys3} id="minTxt">${this.todayMinTime}</p>
        <a @click="${this.decreaseMin}"><span><fa-icon class="fas fa-angle-down"></fa-icon></span></a>
      </div>
      <div class="timer-column">
        <p class="timer-p">&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class="timer-column">
        <a @click="${this.changeTimeOfDay}"><span><fa-icon class="fas fa-angle-up"></fa-icon></span></a>
        <p class="timer-p" id="todTxt">${this.amOrPm}</p>
        <a @click="${this.changeTimeOfDay}"><span><fa-icon class="fas fa-angle-down"></fa-icon></span></a>
      </div>
    </div>
    <div class="close" @click="${this.closeDropdown}"><span><fa-icon  class="fas fa-times" color="#4a4a4a"></fa-icon></span></div>
  </div>
  <!-- end of the timer dropdown -->
  <!-- end of calender select -->

  <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>

</div>
`}increaseHour(){const hourTxt=this.shadowRoot.querySelector("#hourTxt"),hourText=this.shadowRoot.querySelector("#hrs");let hourNum=parseInt(hourTxt.innerText);if(12==hourNum){hourNum=1;hourTxt.innerText=hourNum;hourText.innerText=hourTxt.innerText}else{hourNum++;hourTxt.innerText=hourNum;hourText.innerText=hourTxt.innerText}}decreaseHour(){const hourTxt=this.shadowRoot.querySelector("#hourTxt"),hourText=this.shadowRoot.querySelector("#hrs");let hourNum=parseInt(hourTxt.innerText);if(1==hourNum){hourNum=12;hourTxt.innerText=hourNum;hourText.innerText=hourTxt.innerText}else{hourNum--;hourTxt.innerText=hourNum;hourText.innerText=hourTxt.innerText}}increaseMin(){const minTxt=this.shadowRoot.querySelector("#minTxt"),minText=this.shadowRoot.querySelector("#min");let minNum=parseInt(minTxt.innerText);if(59==minNum){minNum=0}else{minNum++}if(10>minNum){minTxt.innerText="0"+minNum;minText.innerText=minTxt.innerText}else{minTxt.innerText=minNum;minText.innerText=minTxt.innerText}}decreaseMin(){const minTxt=this.shadowRoot.querySelector("#minTxt"),minText=this.shadowRoot.querySelector("#min");let minNum=parseInt(minTxt.innerText);if(0==minNum){minNum=59}else{minNum--}if(10>minNum){minTxt.innerText="0"+minNum;minText.innerText=minTxt.innerText}else{minTxt.innerText=minNum;minText.innerText=minTxt.innerText}}changeTimeOfDay(){const todTxt=this.shadowRoot.querySelector("#todTxt"),todText=this.shadowRoot.querySelector("#tod");if("AM"==todTxt.innerText){todTxt.innerText="PM";todText.innerText=todTxt.innerText}else{todTxt.innerText="AM";todText.innerText=todTxt.innerText}}validateKeys(e){const minTxt=this.shadowRoot.querySelector("#minTxt"),key=e.key||e.code;if(13==e.keyCode){e.preventDefault();return}if(1>=e.key.length&&!(e.metaKey||e.ctrlKey||e.altKey)){if(2==minTxt.innerText.length){if(8!==e.keyCode){e.preventDefault();return}}if(!("0"<=key&&"9">=key)){if(e.preventDefault){e.preventDefault()}else{e.returnValue=!1}}}}validateKeys2(){const minTxt=this.shadowRoot.querySelector("#minTxt"),minNumber=parseInt(minTxt.innerText);if(2==minTxt.innerText.length){if(59<minNumber){minTxt.innerText=this.todayMinTime}}}validateKeys3(){const minTxt=this.shadowRoot.querySelector("#minTxt");if(0==minTxt.innerText.length){minTxt.innerText=this.todayMinTime}}_dropdown(){const dropdown=this.shadowRoot.querySelector("#timer-dropdown");dropdown.classList.toggle("is-hidden")}closeDropdown(){const dropdown=this.shadowRoot.querySelector("#timer-dropdown");if(!dropdown.classList.contains("is-hidden")){dropdown.classList.add("is-hidden")}}getInput(){const hourText=this.shadowRoot.querySelector("#hrs"),minText=this.shadowRoot.querySelector("#min"),timeofDay=this.shadowRoot.querySelector("#tod"),actualTime=hourText.innerText+":"+minText.innerText+" "+timeofDay.innerText;return actualTime}getValue(){const pickerDate=this.getInput();return pickerDate}valid(){this.shadowRoot.querySelector("#warning-text").style.display="none";const calenderSelect=this.shadowRoot.querySelector(".calendar-select"),label=this.shadowRoot.querySelector("label"),hours=this.shadowRoot.querySelector("#hrs"),mins=this.shadowRoot.querySelector("#min"),tod=this.shadowRoot.querySelector("#tod"),dropdownArrow=this.shadowRoot.querySelector("#dropdown-arrow");calenderSelect.classList.remove("is-danger");calenderSelect.classList.remove("calender-select");calenderSelect.classList.add("is-success");label.classList.remove("is-label-danger");label.classList.add("is-label-success");hours.classList.remove("is-label-danger");hours.classList.add("is-label-success");mins.classList.remove("is-label-danger");mins.classList.add("is-label-success");tod.classList.remove("is-label-danger");tod.classList.add("is-label-success");dropdownArrow.classList.remove("is-arrow-danger");dropdownArrow.classList.add("is-arrow-success");this.iconColor="#23D160"}invalid(validation){this.shadowRoot.querySelector("#warning-text").style.display="block";this.shadowRoot.querySelector("#warning-text").innerText=validation.message;const calenderSelect=this.shadowRoot.querySelector(".calendar-select-header"),label=this.shadowRoot.querySelector("label"),hours=this.shadowRoot.querySelector("#hrs"),mins=this.shadowRoot.querySelector("#min"),tod=this.shadowRoot.querySelector("#tod"),dropdownArrow=this.shadowRoot.querySelector("#dropdown-arrow");calenderSelect.classList.remove("is-success");calenderSelect.classList.add("is-danger");label.classList.remove("is-label-success");label.classList.add("is-label-danger");hours.classList.remove("is-label-success");hours.classList.add("is-label-danger");mins.classList.remove("is-label-success");mins.classList.add("is-label-danger");tod.classList.remove("is-label-success");tod.classList.add("is-label-danger");dropdownArrow.classList.remove("is-arrow-success");dropdownArrow.classList.add("is-arrow-danger");this.iconColor="#23D160"}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this,qIn=self.shadowRoot.querySelector("#dateSelected");document.addEventListener("click",function(event){if("P"==event.path[0].tagName||"svg"==event.path[0].tagName||"use"==event.path[0].tagName||"timer-section"==event.path[0].id||"timer-dropdown"==event.path[0].id||"fa-icon"==event.path[0].className){if(!(qIn.id==event.path[0].id||"timer-section"==event.path[0].id||"timer-dropdown"==event.path[0].id||"svg"==event.path[0].tagName||"timer-p"==event.path[0].className||"fa-icon"==event.path[0].className||"timer-column"==event.path[0].className||"use"==event.path[0].tagName)){self.closeDropdown()}}else{self.closeDropdown()}});if(this.required&&!this.e.defaultValue){}if(this.e.defaultValue){if(5<this.e.defaultValue.length){let defaultTime=this.e.defaultValue;const[time,modifier]=defaultTime.split(" ");let[hours,minutes]=time.split(":");this.todayHourTime=hours;this.todayMinTime=minutes;this.amOrPm=modifier.toUpperCase()}else{let defaultTime=this.convertTime24to12(this.e.defaultValue);const[time,modifier]=defaultTime.split(" ");let[hours,minutes]=time.split(":");this.todayHourTime=hours;this.todayMinTime=minutes;this.amOrPm=modifier}}}}customElements.define(TimeElement.is,TimeElement);export{timeElement as $timeElement,timeElementCss as $timeElementCss,TimeElementBase,TimeElementStyles};