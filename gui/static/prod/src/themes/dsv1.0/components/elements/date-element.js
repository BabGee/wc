import{html,format,parse,DateElementBase}from"../../../../components/adaptive-ui.js";class DateElement extends DateElementBase{renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

  <style>
 .calendar-select-header{
  width: 100%;
  background: #fff;
  padding: 10px;
  position: relative;
  cursor: pointer;
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
  display: none;
}
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
  width: 12%;
  color: #013243;
  font-size: 10px;
  text-align: center;
}
.days {
  padding: 10px 0;
  background: #fff;
  margin: 0;
}

.days li {
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
  background: #1abc9c;
  color: white !important;
  /* border-radius: 50%; */
}
.next, .prev{
  cursor: pointer;
}

/* Add media queries for smaller screens */
@media screen and (max-width:720px) {
  .weekdays li, .days li {width: 13.1%;}
}

@media screen and (max-width: 420px) {
  .weekdays li, .days li {width: 12.5%;}
  .days li .active {padding: 2px;}
}

@media screen and (max-width: 290px) {
  .weekdays li, .days li {width: 12.2%;}
}

</style>
 <div class="column">
  <div class="clalendar-select" style="width:100%;">
    <div class="calendar-select-header" @click="${this.dateToggle}">
        <p class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${this.todayDateNumber+` `+this.months[this.currentMonth]+`, `+this.currentYear}</p>
    </div>

    <div class="calendar-select-body" id="cal-bdy">
        <div class="month">      
            <ul>
              <div class="columns">
                  <div class="column">
                      <li class="is-pulled-left" id="monthAndYear">
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
          <ul class="weekdays">
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
    </div>
  </div>
</div>
        `}static get properties(){return{label:{type:String,value:"Choose Date"},required:Boolean,datestring:{type:String,value:""},columnSize:{type:Array},currentMonth:Number,currentYear:Number,today:String,months:Array,todayDateNumber:Number,dateSelected:String,wasDateSelected:Boolean}}constructor(){super();this.today=new Date;this.currentMonth=this.today.getMonth();this.currentYear=this.today.getFullYear();this.todayDateNumber=this.today.getDate();this.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];this.wasDateSelected=!1}getInput(){let picker=this.dateSelected;if(picker===void 0){const inpInput=this.shadowRoot.querySelector(".calendar-select-header"),textDate=inpInput.innerText;if(14===textDate.length){const dayValue=textDate.substring(3,4),monthValue=textDate.substring(5,8),yearValue=textDate.substring(10);picker=`${this.months.indexOf(monthValue)+1}`+"/"+dayValue+"/"+yearValue;return picker}else if(15===textDate.length){const dayValue=textDate.substring(3,5),monthValue=textDate.substring(6,9),yearValue=textDate.substring(11);picker=`${this.months.indexOf(monthValue)+1}`+"/"+dayValue+"/"+yearValue;return picker}}else{return picker}}getValue(){const date=this.getInput();if(date.includes("Date")){return}const pickerDate=new Date(this.getInput());if(pickerDate){const outputTokens=this.e.details.output_format||this.e.kind;try{return format(pickerDate,outputTokens)}catch(exception){console.warn(`[DEPRECATED] ${this.e.name} invalid tokens ${outputTokens}, fall back to dd/MM/yyyy`,exception);return format(pickerDate,"dd/MM/yyyy")}}}valid(){}invalid(){}dateToggle(){const calBdy=this.shadowRoot.getElementById("cal-bdy");calBdy.classList.toggle("cal-active");this.showCalendar(this.currentMonth,this.currentYear)}showCalendar(month,year){const date=new Date,inpInput=this.shadowRoot.querySelector(".calendar-select-header"),firstDay=new Date(year,month).getDay(),months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],monthAndYear=this.shadowRoot.getElementById("monthAndYear");monthAndYear.innerHTML=months[month]+","+year;let renderNum=1;const bdy=this.shadowRoot.getElementById("days");bdy.innerHTML="";for(let i=0;6>i;i++){const row=document.createElement("ul");for(let j=0;7>j;j++){if(0===i&&j<firstDay){const cell=document.createElement("li"),cellText=document.createTextNode("");cell.appendChild(cellText);row.appendChild(cell)}else if(renderNum>this.daysInMonth(month,year)){break}else{const cell=document.createElement("li"),cellText=document.createTextNode(renderNum);if(renderNum===date.getDate()&&year===date.getFullYear()&&month===date.getMonth()){}cell.appendChild(cellText);row.appendChild(cell);renderNum++;cell.addEventListener("click",()=>{const allCells=this.shadowRoot.querySelector("#days").querySelectorAll("li");allCells.forEach(cell=>{cell.classList.remove("active")});cell.classList.add("active");const dateClicked=cell.innerText+" "+months[month]+", "+year;this.todayDateNumber=cell.innerText;this.dateSelected=`${month+1}`+"/"+cell.innerText+"/"+year;inpInput.innerHTML=`<p class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${dateClicked}</p>`})}}bdy.appendChild(row);if(!(!0==this.wasDateSelected)){const dates=this.shadowRoot.querySelector("#days").querySelectorAll("li");dates.forEach(date=>{if(date.innerText==this.todayDateNumber){date.classList.add("active");this.wasDateSelected=!0}})}}}next(){if(!0==this.wasDateSelected){const dates=this.shadowRoot.querySelector("#days").querySelectorAll("li");dates.forEach(date=>{date.classList.remove("active")});!1==this.wasDateSelected}this.currentMonth++;if(11<this.currentMonth){this.currentYear++;this.currentMonth=0}this.showCalendar(this.currentMonth,this.currentYear)}previous(){if(!0==this.wasDateSelected){const dates=this.shadowRoot.querySelector("#days").querySelectorAll("li");dates.forEach(date=>{date.classList.remove("active")});!1==this.wasDateSelected}this.currentMonth--;if(0>this.currentMonth){this.currentMonth=11;this.currentYear--}this.showCalendar(this.currentMonth,this.currentYear)}daysInMonth(iMonth,iYear){return 32-new Date(iYear,iMonth,32).getDate()}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const inpInput=this.shadowRoot.querySelector(".calendar-select-header");if(this.e.required&&!this.e.defaultValue){}if(!this.e.required&&!this.e.defaultValue){inpInput.innerHTML=`<p class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${"Select Date"}</p>`}if(this.e.defaultValue){const date=parse(this.e.defaultValue,this.e.details.input_format,new Date),defaultDate=new Date(new Date(date.getTime()+Math.abs(6e4*date.getTimezoneOffset())));this.currentMonth=defaultDate.getMonth();this.currentYear=defaultDate.getFullYear();this.todayDateNumber=defaultDate.getDate()}}}customElements.define(DateElement.is,DateElement);