import{html,TimeElementBase}from"../../../../components/adaptive-ui.js";class TimeElement extends TimeElementBase{static get properties(){return{dropDownMenuHidden:Boolean,today:String,todayHourTime:String,todayMinTime:String,amOrPm:String}}constructor(){super();this.dropDownMenuHidden=!0;this.today=new Date;this.todayHourTime=this._getHour(this.today);this.todayMinTime=this._getMin(this.today.getMinutes());this.amOrPm=this._getAMOrPM(this.today)}_getHour(today){let H=today.getHours();return(H%12||12).toString()}_getMin(time){let min=time;10>min?min="0"+time:min=time;return min.toString()}_getAMOrPM(today){let H=today.getHours();var ampm=12>H||24===H?"AM":"PM";return ampm.toString()}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
 <style>
 .timer-container{
   width: 100%;
 }
 .timer-container .timer-element{
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
  margin: 10px 0;
  border: 1px solid #b9b9b9;
  padding: 20px;
  border-radius: 4px;

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
 }
</style>
<div class="timer-container">
 <div class="timer-element" @click="${()=>this._dropdown()}">
  <p class="has-text-centered has-text-weight-bold is-size-4">
    <a class="hour" id="hrs">${this.todayHourTime}</a>&nbsp; : &nbsp;<a class="minutes" id="min">${this.todayMinTime}</a> <a class="tod" id="tod">${this.amOrPm}</a></p>
 </div>
 <div id="timer-dropdown" class="timer-dropdown is-hidden">
  <div class="inner-container columns">
    <div class="column hrs-drp drp">
      <div class="heading">
        <p class="has-text-weight-bold is-size-5 has-text-centered">Hours</p>
      </div>
      <ul>
      ${this.range(1,12).map(data=>html`
           <li @click='${()=>this.addHour(data)}'><a href="#">${data}</a></li>
      `)}
      </ul>
    </div>
    <div class="column drp">
    <div class="heading">
        <p class="has-text-weight-bold is-size-5 has-text-centered">Minutes</p>
      </div>
      <ul>
      ${this.range(0,59).map(data=>html`
      <li @click='${()=>this.addMin(data)}'><a href="#">${10>data?"0"+data:data}</a></li>
      `)}
       
      </ul>
    </div>
    <div class="column drp">
    <div class="heading">
        <p class="has-text-weight-bold is-size-5 has-text-centered">TOD</p>
      </div>
      <div class="radio">
        <input type="radio" name="tod" value="AM" checked @click='${()=>this.addTOD("AM")}'> AM
        <input type="radio" name="tod" value="PM"  @click='${()=>this.addTOD("PM")}'> PM
      </div>
    </div>
  </div>
  </div>
</div>
`}_dropdown(){const dropdown=this.shadowRoot.querySelector("#timer-dropdown");if(!0===this.dropDownMenuHidden){dropdown.classList.remove("is-hidden");this.dropDownMenuHidden=!1}else{dropdown.classList.add("is-hidden");this.dropDownMenuHidden=!0}}addHour(time){const hourText=this.shadowRoot.querySelector("#hrs");hourText.innerHTML=time}addMin(time){let min=time;10>min?min="0"+time:min=time;const minText=this.shadowRoot.querySelector("#min");minText.innerHTML=min}addTOD(tod){const timeofDay=this.shadowRoot.querySelector("#tod");timeofDay.innerHTML=tod}range(start,end){return Array(end-start+1).fill().map((_,idx)=>start+idx)}getInput(){const hourText=this.shadowRoot.querySelector("#hrs"),minText=this.shadowRoot.querySelector("#min"),timeofDay=this.shadowRoot.querySelector("#tod"),actualTime=hourText.innerText+":"+minText.innerText+" "+timeofDay.innerText;return actualTime}getValue(){const pickerDate=this.getInput();return pickerDate}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(this.required&&!this.e.defaultValue){}if(this.e.defaultValue){if(5<this.e.defaultValue.length){let defaultTime=this.e.defaultValue;const[time,modifier]=defaultTime.split(" ");let[hours,minutes]=time.split(":");this.todayHourTime=hours;this.todayMinTime=minutes;this.amOrPm=modifier.toUpperCase()}else{let defaultTime=this.convertTime24to12(this.e.defaultValue);const[time,modifier]=defaultTime.split(" ");let[hours,minutes]=time.split(":");this.todayHourTime=hours;this.todayMinTime=minutes;this.amOrPm=modifier}}}}customElements.define(TimeElement.is,TimeElement);