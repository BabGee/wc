import{utilsMixin,SerializableElement,format,parse,css,html}from"../../../../../components/adaptive-ui.js";const DateElementBase=class extends utilsMixin(SerializableElement){static get is(){return"date-element"}static get properties(){return{label:{type:String,value:"Choose Date"},required:Boolean,datestring:{type:String,value:""},columnSize:{type:Array},noPastDate:Boolean}}getName(){return this.e.formName}valid(){}invalid(){}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,"Invalid date")}else{this.noPastDate=this.e.details.noPastDate;if(this.noPastDate){if(null==this.getInput().valueAsDate){return new this.Validation(!1,"Invalid date")}else{const datePicked=this.getInput().valueAsDate,todaysDate=new Date;if(datePicked<todaysDate){return new this.Validation(!1,"Invalid date")}else{return new this.Validation(!0,"valid date")}}}return new this.Validation(!0,"valid date")}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.label=DateElementBase.toTitleCase(pElement.name);self.params=loader.pl.paramsCopy()}};var dateElement={DateElementBase:DateElementBase};const DateElementStyles=css`
#warning-text{
  position: relative;
  top: 5px;
  font-size: 0.75rem;
  padding: 0px;
  margin: 0px 0px 0px 1px;
  display:none;
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
// .calendar-select-header::after{
//   content: '';
//   width: 8px;
//   height: 8px;
//   border-left: 2px solid #4a4a4a;
//   border-bottom: 2px solid #4a4a4a;
//   border-right: 2px solid transparent;
//   border-top: 2px solid transparent;
//   position: absolute;
//   transform: rotate(-43deg);
//   top: 13px;
//   right: 23px;
// }

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


.calendar-select-header p{
  font-size: 14px;
  font-weight: 500;
}
.calendar-select-body{
  width: 100%;
  margin-top: 15px;
  border-radius: 4px;
  display: none;
  z-index: 9999;
  border: 1px solid rgb(183, 181, 181);;
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
  font-size: 14px;
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

.weekdays li, .days li{
  font-size: 12px;
 
}
#weekdays li {
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
}

.is-success {
    color: rgb(35, 209, 96) !important;
    border-width: 2px !important;
    border-style: solid !important;
    border-color: rgb(35, 209, 96) !important;
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

.is-label-success{
  color: rgb(35, 209, 96)!important;
}
.is-label-danger{
  color: rgb(255, 56, 96)!important;
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


`;var dateElementCss={DateElementStyles:DateElementStyles};class DateElement extends DateElementBase{static get styles(){return[DateElementStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">


 <div class="column" id="dateElement">
 <label>${this.e.name}</label>
  <div class="calendar-select" style="width:100%;">
    <div class="calendar-select-header" @click="${this.dateToggle}">
        <p id="dateSelected" class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="${this.iconColor}" size="1em"></fa-icon>&nbsp;&nbsp; ${this.todayDateNumber+` `+this.months[this.currentMonth]+`, `+this.currentYear}</p>
        <div id="dropdown-arrow" class="dropdown-arrow"></div>

    </div>

    <div class="calendar-select-body" id="cal-bdy">
        <div class="month">      
            <ul>
              <div class="columns">
                  <div class="column" @click="${this.monthToggle}">
                      <li class="is-pulled-left monthAndYear" id="monthAndYear">
                        August
                      </li>
                  </div>
                  <div class="column">
                      <div class="calendar-scroll is-flex is-pulled-right">
                          <li class="prev" @click = "${this.previous}">&#10094;</li>
                          <li class="next" @click = "$${this.next}">&#10095;</li>
                      </div>
                  </div>
              </div>
            </ul>
          </div>
          <ul class="weekdays" id="weekdays">
            <li>Su</li>
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
          </ul>

          <div class="days" id="days">  
          
          </div>
          <div class="month-calender" id="months-calender">
            <ul id="months" class="months">

            ${this.months.map(month=>html`                
                <li @click = "${()=>this.selectMonth(month)}"class ="monthN">${month}</li>
            `)} 
            </ul>
          </div>
    </div>
  </div>
  <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>

</div>
        `}static get properties(){return{label:{type:String,value:"Choose Date"},required:Boolean,datestring:{type:String,value:""},columnSize:{type:Array},currentMonth:Number,currentYear:Number,today:String,months:Array,todayDateNumber:Number,dateSelected:String,wasDateSelected:Boolean,monthYearCalenderVisibile:Boolean,monthCalenderValue:String,iconColor:String}}constructor(){super();this.today=new Date;this.currentMonth=this.today.getMonth();this.currentYear=this.today.getFullYear();this.todayDateNumber=this.today.getDate();this.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];this.wasDateSelected=!1;this.monthYearCalenderVisibile=!1;this.iconColor="#4a4a4a"}getInput(){let picker=this.dateSelected;if(picker===void 0){const inpInput=this.shadowRoot.querySelector(".calendar-select-header"),textDate=inpInput.innerText;if(14===textDate.length){const dayValue=textDate.substring(3,4),monthValue=textDate.substring(5,8),yearValue=textDate.substring(10);picker=`${this.months.indexOf(monthValue)+1}`+"/"+dayValue+"/"+yearValue;return picker}else if(15===textDate.length){const dayValue=textDate.substring(3,5),monthValue=textDate.substring(6,9),yearValue=textDate.substring(11);picker=`${this.months.indexOf(monthValue)+1}`+"/"+dayValue+"/"+yearValue;return picker}}else{return picker}}getValue(){const date=this.getInput();if(date.includes("Date")){return}const pickerDate=new Date(this.getInput());if(pickerDate){const outputTokens=this.e.details.output_format||this.e.kind;try{return format(pickerDate,outputTokens)}catch(exception){console.warn(`[DEPRECATED] ${this.e.name} invalid tokens ${outputTokens}, fall back to dd/MM/yyyy`,exception);return format(pickerDate,"dd/MM/yyyy")}}}valid(){this.shadowRoot.querySelector("#warning-text").style.display="none";const calenderSelect=this.shadowRoot.querySelector(".calendar-select"),label=this.shadowRoot.querySelector("label"),dropdownArrow=this.shadowRoot.querySelector("#dropdown-arrow");calenderSelect.classList.remove("is-danger");calenderSelect.classList.add("is-success");label.classList.remove("is-label-danger");label.classList.add("is-label-success");dropdownArrow.classList.remove("is-arrow-danger");dropdownArrow.classList.add("is-arrow-success");this.iconColor="#23D160";setTimeout(()=>{this.resetStyles()},3e3)}resetStyles(){const calenderSelect=this.shadowRoot.querySelector(".calendar-select"),label=this.shadowRoot.querySelector("label"),dropdownArrow=this.shadowRoot.querySelector("#dropdown-arrow");calenderSelect.classList.remove("is-success");label.classList.remove("is-label-success");dropdownArrow.classList.remove("is-arrow-success");this.iconColor="#4a4a4a"}invalid(){}dateToggle(){const calBdy=this.shadowRoot.getElementById("cal-bdy");calBdy.classList.toggle("cal-active");this.showCalendar(this.currentMonth,this.currentYear)}monthToggle(){const monthBody=this.shadowRoot.getElementById("months-calender"),days=this.shadowRoot.getElementById("days"),weekdays=this.shadowRoot.getElementById("weekdays"),monthYearView=this.shadowRoot.getElementById("monthAndYear"),allMonthsInCalender=this.shadowRoot.querySelectorAll(".monthN");if(!this.monthYearCalenderVisibile){monthBody.style.display="block";days.style.display="none";weekdays.style.display="none";allMonthsInCalender.forEach(month=>{if(month.innerText==this.months[this.currentMonth]){month.classList.add("active")}});monthYearView.innerText=this.currentYear;this.monthYearCalenderVisibile=!0}else{monthBody.style.display="none";days.style.display="block";weekdays.style.display="block";this.monthYearCalenderVisibile=!1;this.showCalendar(this.currentMonth,this.currentYear)}}selectMonth(monthText){const allMonthsInCalender=this.shadowRoot.querySelectorAll(".monthN"),monthBody=this.shadowRoot.getElementById("months-calender"),days=this.shadowRoot.getElementById("days"),weekdays=this.shadowRoot.getElementById("weekdays");allMonthsInCalender.forEach(month=>{month.classList.remove("active")});allMonthsInCalender.forEach(month=>{if(month.innerText==monthText){month.classList.add("active")}});this.currentMonth=this.months.indexOf(monthText);monthBody.style.display="none";days.style.display="block";weekdays.style.display="block";this.monthYearCalenderVisibile=!1;this.showCalendar(this.currentMonth,this.currentYear)}showCalendar(month,year){const date=new Date,inpInput=this.shadowRoot.querySelector(".calendar-select-header"),firstDay=new Date(year,month).getDay(),months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],monthAndYear=this.shadowRoot.getElementById("monthAndYear");monthAndYear.innerHTML=months[month]+","+year;let renderNum=1;const bdy=this.shadowRoot.getElementById("days");bdy.innerHTML="";for(let i=0;6>i;i++){const row=document.createElement("ul");for(let j=0;7>j;j++){if(0===i&&j<firstDay){const cell=document.createElement("li"),cellText=document.createTextNode("");cell.appendChild(cellText);row.appendChild(cell)}else if(renderNum>this.daysInMonth(month,year)){break}else{const cell=document.createElement("li"),cellText=document.createTextNode(renderNum);if(renderNum===date.getDate()&&year===date.getFullYear()&&month===date.getMonth()){if(!this.wasDateSelected){cell.classList.add("active")}}cell.appendChild(cellText);row.appendChild(cell);renderNum++;cell.addEventListener("click",()=>{const allCells=this.shadowRoot.querySelector("#days").querySelectorAll("li");allCells.forEach(cell=>{cell.classList.remove("active")});cell.classList.add("active");const dateClicked=cell.innerText+" "+months[month]+", "+year;this.todayDateNumber=cell.innerText;this.dateSelected=`${month+1}`+"/"+cell.innerText+"/"+year;this.wasDateSelected=!0;inpInput.innerHTML=`<p id="dateSelected" class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${dateClicked}</p>`;this.dateToggle()})}}bdy.appendChild(row);let dates=this.shadowRoot.querySelector("#days").querySelectorAll("li");if(this.wasDateSelected){let monthAndYear=this.shadowRoot.getElementById("monthAndYear").innerHTML,actualtDateText=this.shadowRoot.querySelector("#dateSelected").innerText.trim(),month=monthAndYear.slice(0,3),year=monthAndYear.slice(4),actualMonth,actualYear;if(11==actualtDateText.length){actualMonth=actualtDateText.slice(1,5).trim();actualYear=actualtDateText.slice(6).trim();if(actualMonth==month&&actualYear==year){dates.forEach(date=>{if(date.innerText==this.todayDateNumber){date.classList.add("active")}})}}else{actualMonth=actualtDateText.slice(2,6).trim();actualYear=actualtDateText.slice(7).trim();if(actualMonth==month&&actualYear==year){dates.forEach(date=>{if(date.innerText==this.todayDateNumber){date.classList.add("active")}})}}}}}next(){if(this.monthYearCalenderVisibile){const monthYearView=this.shadowRoot.getElementById("monthAndYear");this.currentYear++;monthYearView.innerText=this.currentYear}else{let allCells=this.shadowRoot.querySelector("#days").querySelectorAll("li");allCells.forEach(cell=>{cell.classList.remove("active")});this.currentMonth++;if(11<this.currentMonth){this.currentYear++;this.currentMonth=0}this.showCalendar(this.currentMonth,this.currentYear)}}previous(){if(this.monthYearCalenderVisibile){const monthYearView=this.shadowRoot.getElementById("monthAndYear");this.currentYear--;monthYearView.innerText=this.currentYear}else{let allCells=this.shadowRoot.querySelector("#days").querySelectorAll("li");allCells.forEach(cell=>{cell.classList.remove("active")});this.currentMonth--;if(0>this.currentMonth){this.currentMonth=11;this.currentYear--}this.showCalendar(this.currentMonth,this.currentYear)}}daysInMonth(iMonth,iYear){return 32-new Date(iYear,iMonth,32).getDate()}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const inpInput=this.shadowRoot.querySelector(".calendar-select-header"),calBdy=this.shadowRoot.getElementById("cal-bdy");document.addEventListener("click",e=>{const foundObject=e.composedPath().find(o=>"dateElement"===o.id),foundClass=Object.values(calBdy.classList).find(c=>"cal-active"===c);if(foundObject===void 0&&"cal-active"===foundClass){calBdy.classList.toggle("cal-active")}});if(this.e.required&&!this.e.defaultValue){}if(!this.e.required&&!this.e.defaultValue){inpInput.innerHTML=`<p id="dateSelected" class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${"Select Date"}</p>`}if(this.e.defaultValue){const date=parse(this.e.defaultValue,this.e.details.input_format,new Date),defaultDate=new Date(new Date(date.getTime()+Math.abs(6e4*date.getTimezoneOffset())));this.currentMonth=defaultDate.getMonth();this.currentYear=defaultDate.getFullYear();this.todayDateNumber=defaultDate.getDate();this.wasDateSelected=!0}}}customElements.define(DateElement.is,DateElement);export{dateElement as $dateElement,dateElementCss as $dateElementCss,DateElementBase,DateElementStyles};