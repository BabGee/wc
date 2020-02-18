import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const TimeElementBase=class extends utilsMixin(SerializableElement){static get is(){return"time-element"}static get properties(){return{label:{type:String,value:"Choose Time"},required:Boolean,datestring:{type:String,value:""},columnSize:{type:Array}}}convertTime24to12(timeString){var H=+timeString.substr(0,2),ampm=12>H||24===H?"AM":"PM";timeString=(H%12||12)+timeString.substr(2,3)+" "+ampm;return timeString}convertTime12to24(time12h){const[time,modifier]=time12h.split(" ");let[hours,minutes]=time.split(":");if("12"===hours){hours="00"}if("PM"===modifier){hours=parseInt(hours,10)+12}return hours+":"+minutes}getName(){return this.e.formName}valid(){}invalid(){}validate(){if((this.e.required||this.required)&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.label=TimeElementBase.toTitleCase(pElement.name)}};var timeElement={TimeElementBase:TimeElementBase};const TimeElementStyles=css`

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
 

`;var timeElementCss={TimeElementStyles:TimeElementStyles};class TimeElement extends TimeElementBase{static get styles(){return[TimeElementStyles,css`
        :host {
          display: block;
        }
      `]}static get properties(){return{dropDownMenuHidden:Boolean,today:String,todayHourTime:String,todayMinTime:String,amOrPm:String,isHourSelected:Boolean,isMinSelected:Boolean,isTODSelected:Boolean}}constructor(){super();this.dropDownMenuHidden=!0;this.today=new Date;this.todayHourTime=this._getHour(this.today);this.todayMinTime=this._getMin(this.today.getMinutes());this.amOrPm=this._getAMOrPM(this.today)}_getHour(today){let H=today.getHours();return(H%12||12).toString()}_getMin(time){let min=time;10>min?min="0"+time:min=time;return min.toString()}_getAMOrPM(today){let H=today.getHours();var ampm=12>H||24===H?"AM":"PM";return ampm.toString()}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">


<div class="column">
  <div class="calendar-select" style="width:100%;">
    <div class="calendar-select-header" @click="${()=>this._dropdown()}">
      <p id="dateSelected" class="has-text-center">
        <fa-icon class="fas fa-clock" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; <a class="hour" id="hrs">${this.todayHourTime}</a>&nbsp;:&nbsp;<a class="minutes" id="min">${this.todayMinTime}</a> <a class="tod" id="tod">${this.amOrPm}</a></p>
    </div>

   <div class="timer-dropdown is-hidden" id="timer-dropdown">
    <div class="columns is-mobile"style="padding: 10px;">
      <div class="column">
        <div class="drop hrs-drop">
          <div class="heading">
            <p class="time-font-title has-text-centered">Hrs</p>
          </div>
          <ul id="timer-lineup" class="is-marginless" style="overflow: scroll;height: 100px;overflow-x: hidden;">
          ${this.range(1,12).map(data=>html`
            <li id="hour-${data}" class="has-text-centered" @click='${()=>this.addHour(data)}'>${data}</li>
          `)}
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="drop min-drop">
          <div class="heading">
            <p class="time-font-title has-text-centered">Mins</p>
          </div>
          <ul id="timer-lineup-minutes" style="overflow: scroll;height:100px;overflow-x: hidden;">
          ${this.range(0,59).map(data=>html`
            <li id="min-${data}" class="has-text-centered" @click='${()=>this.addMin(data)}'>${10>data?"0"+data:data}</li>
          `)}
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="drop tod-drop">
          <div class="heading">
            <p class="time-font-title has-text-centered">TOD</p>
          </div>
          <div class="radio timer-radio">
            <div class ="radio-div"><input type="radio" name="tod" value="AM"  @click='${()=>this.addTOD("AM")}'> AM</div>
            <div class ="radio-div"><input type="radio" name="tod" value="PM"  @click='${()=>this.addTOD("PM")}'> PM </div>
          </div>
        </div>
      </div>
    </div>


    </div> <!-- end of calender body -->

  </div> <!-- end of calender select -->


</div>
`}_dropdown(){const dropdown=this.shadowRoot.querySelector("#timer-dropdown");if(!0===this.dropDownMenuHidden){dropdown.classList.remove("is-hidden");this.dropDownMenuHidden=!1}else{dropdown.classList.add("is-hidden");this.dropDownMenuHidden=!0}this.isHourSelected=!1;this.isMinSelected=!1;this.isTODSelected=!1}addHour(time){const hourText=this.shadowRoot.querySelector("#hrs");hourText.innerHTML=time;const allHourTime=this.shadowRoot.querySelector("#timer-lineup").querySelectorAll("li"),selectedHour=this.shadowRoot.querySelector("#hour-"+time);allHourTime.forEach(li=>{li.classList.remove("time-active")});selectedHour.classList.add("time-active");this.isHourSelected=!0;if(this.isHourSelected&&this.isMinSelected&&this.isTODSelected){this._dropdown()}}addMin(time){let min=time;10>min?min="0"+time:min=time;const minText=this.shadowRoot.querySelector("#min");minText.innerHTML=min;const allMinTime=this.shadowRoot.querySelector("#timer-lineup-minutes").querySelectorAll("li"),selectedMin=this.shadowRoot.querySelector("#min-"+time);allMinTime.forEach(li=>{li.classList.remove("time-active")});selectedMin.classList.add("time-active");this.isMinSelected=!0;if(this.isHourSelected&&this.isMinSelected&&this.isTODSelected){this._dropdown()}}addTOD(tod){const timeofDay=this.shadowRoot.querySelector("#tod");timeofDay.innerHTML=tod;this.isTODSelected=!0;if(this.isHourSelected&&this.isMinSelected&&this.isTODSelected){this._dropdown()}}range(start,end){return Array(end-start+1).fill().map((_,idx)=>start+idx)}getInput(){const hourText=this.shadowRoot.querySelector("#hrs"),minText=this.shadowRoot.querySelector("#min"),timeofDay=this.shadowRoot.querySelector("#tod"),actualTime=hourText.innerText+":"+minText.innerText+" "+timeofDay.innerText;return actualTime}getValue(){const pickerDate=this.getInput();return pickerDate}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(this.required&&!this.e.defaultValue){}if(this.e.defaultValue){if(5<this.e.defaultValue.length){let defaultTime=this.e.defaultValue;const[time,modifier]=defaultTime.split(" ");let[hours,minutes]=time.split(":");this.todayHourTime=hours;this.todayMinTime=minutes;this.amOrPm=modifier.toUpperCase()}else{let defaultTime=this.convertTime24to12(this.e.defaultValue);const[time,modifier]=defaultTime.split(" ");let[hours,minutes]=time.split(":");this.todayHourTime=hours;this.todayMinTime=minutes;this.amOrPm=modifier}}}}customElements.define(TimeElement.is,TimeElement);export{timeElement as $timeElement,timeElementCss as $timeElementCss,TimeElementBase,TimeElementStyles};