import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { format, parse } from "../../../../../node_modules/date-fns/esm/index.js";
import "../../../../../node_modules/fa-icons/index.js";
import { DateElementBase } from "../../../../elements/base/date-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DateElement extends DateElementBase {
  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

  <style>
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
  background: #1abc9c;
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
  background: #1abc9c;
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

</style>
 <div class="column">
  <div class="calendar-select" style="width:100%;">
    <div class="calendar-select-header" @click="${this.dateToggle}">
        <p id="dateSelected" class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${this.todayDateNumber + ` ` + this.months[this.currentMonth] + `, ` + this.currentYear}</p>
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

            ${this.months.map(month => html`                
                <li @click = "${() => this.selectMonth(month)}"class ="monthN">${month}</li>
            `)} 
            </ul>
          </div>
    </div>
  </div>
</div>
        `;
  }

  static get properties() {
    return {
      /**
             * The label for this input.
             */
      label: {
        type: String,
        value: 'Choose Date'
      },
      required: Boolean,
      datestring: {
        type: String,
        value: ''
      },
      columnSize: {
        type: Array
      },
      // dateRange: Array,
      currentMonth: Number,
      currentYear: Number,
      today: String,
      months: Array,
      todayDateNumber: Number,
      dateSelected: String,
      wasDateSelected: Boolean,
      monthYearCalenderVisibile: Boolean,
      monthCalenderValue: String
    };
  }

  constructor() {
    super();
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.todayDateNumber = this.today.getDate();
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.wasDateSelected = false;
    this.monthYearCalenderVisibile = false;
  }

  getInput() {
    let picker = this.dateSelected;

    if (picker === undefined) {
      const inpInput = this.shadowRoot.querySelector('.calendar-select-header');
      const textDate = inpInput.innerText;

      if (textDate.length === 14) {
        const dayValue = textDate.substring(3, 4);
        const monthValue = textDate.substring(5, 8);
        const yearValue = textDate.substring(10);
        picker = `${this.months.indexOf(monthValue) + 1}` + '/' + dayValue + '/' + yearValue;
        return picker;
      } else if (textDate.length === 15) {
        const dayValue = textDate.substring(3, 5);
        const monthValue = textDate.substring(6, 9);
        const yearValue = textDate.substring(11);
        picker = `${this.months.indexOf(monthValue) + 1}` + '/' + dayValue + '/' + yearValue;
        return picker;
      }
    } else {
      return picker;
    }
  }

  getValue() {
    const substring = 'Date';
    const date = this.getInput();

    if (date.includes(substring)) {
      // no date was selected, form to validate to invalid
      return;
    }

    const pickerDate = new Date(this.getInput());

    if (pickerDate) {
      const outputTokens = this.e.details['output_format'] || this.e.kind;

      try {
        return format(pickerDate, outputTokens);
      } catch (exception) {
        console.warn(`[DEPRECATED] ${this.e.name} invalid tokens ${outputTokens}, fall back to dd/MM/yyyy`, exception);
        return format(pickerDate, 'dd/MM/yyyy');
      }
    }
  }

  valid(validation) {}

  invalid(validation) {}

  dateToggle() {
    const calBdy = this.shadowRoot.getElementById('cal-bdy');
    calBdy.classList.toggle('cal-active'); // Creating the calender
    // const today = new Date();
    // const currentMonth = today.getMonth();
    // console.log("MONTH>>>>>"+currentMonth);
    // const currentYear = today.getFullYear();

    this.showCalendar(this.currentMonth, this.currentYear);
  }

  monthToggle() {
    const monthBody = this.shadowRoot.getElementById('months-calender');
    const days = this.shadowRoot.getElementById('days');
    const weekdays = this.shadowRoot.getElementById('weekdays');
    const monthYearView = this.shadowRoot.getElementById('monthAndYear');
    const allMonthsInCalender = this.shadowRoot.querySelectorAll(".monthN");

    if (!this.monthYearCalenderVisibile) {
      monthBody.style.display = "block";
      days.style.display = "none";
      weekdays.style.display = "none";
      allMonthsInCalender.forEach(month => {
        if (month.innerText == this.months[this.currentMonth]) {
          month.classList.add("active");
        }
      }); //show current year

      monthYearView.innerText = this.currentYear;
      this.monthYearCalenderVisibile = true;
    } else {
      monthBody.style.display = "none";
      days.style.display = "block";
      weekdays.style.display = "block"; //show current year

      this.monthYearCalenderVisibile = false;
      this.showCalendar(this.currentMonth, this.currentYear);
    }
  }

  selectMonth(monthText) {
    const allMonthsInCalender = this.shadowRoot.querySelectorAll(".monthN");
    const monthBody = this.shadowRoot.getElementById('months-calender');
    const days = this.shadowRoot.getElementById('days');
    const weekdays = this.shadowRoot.getElementById('weekdays');
    allMonthsInCalender.forEach(month => {
      month.classList.remove("active");
    });
    allMonthsInCalender.forEach(month => {
      if (month.innerText == monthText) {
        month.classList.add("active");
      }
    });
    this.currentMonth = this.months.indexOf(monthText);
    monthBody.style.display = "none";
    days.style.display = "block";
    weekdays.style.display = "block";
    this.monthYearCalenderVisibile = false;
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  showCalendar(month, year) {
    const date = new Date();
    const inpInput = this.shadowRoot.querySelector('.calendar-select-header');
    const firstDay = new Date(year, month).getDay(); // const dateRange = [];
    // const len = dateRange.length = Math.max(dateRange.length, 2)
    // const today = date.getDate();

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthAndYear = this.shadowRoot.getElementById('monthAndYear');
    monthAndYear.innerHTML = months[month] + ',' + year;
    let renderNum = 1;
    const bdy = this.shadowRoot.getElementById('days');
    bdy.innerHTML = '';

    for (let i = 0; i < 6; i++) {
      const row = document.createElement('ul');

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          const cell = document.createElement('li');
          const cellText = document.createTextNode('');
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (renderNum > this.daysInMonth(month, year)) {
          break;
        } else {
          const cell = document.createElement('li');
          const cellText = document.createTextNode(renderNum);

          if (renderNum === date.getDate() && year === date.getFullYear() && month === date.getMonth()) {
            if (!this.wasDateSelected) {
              cell.classList.add("active");
            }
          }

          cell.appendChild(cellText);
          row.appendChild(cell);
          renderNum++;
          cell.addEventListener('click', () => {
            const allCells = this.shadowRoot.querySelector('#days').querySelectorAll('li');
            allCells.forEach(cell => {
              cell.classList.remove('active');
            });
            cell.classList.add('active');
            const dateClicked = cell.innerText + ' ' + months[month] + ', ' + year;
            this.todayDateNumber = cell.innerText;
            this.dateSelected = `${month + 1}` + '/' + cell.innerText + '/' + year;
            this.wasDateSelected = true;
            let str = `<p id="dateSelected" class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${dateClicked}</p>`;
            inpInput.innerHTML = str; // //IMPLEMENTATION OF DATE RANGE FOR FUTURE PURPOSES
            // dateRange.push(...[cell.innerText + " " + months[month] + " " + year]);
            // dateRange.shift();
            // let filtered = dateRange.filter(function (el) {
            //   return el != null;
            // });
            // const dateOne = filtered[0].split(' ');
            // const filteredDateOne = dateOne[0];
            // const filteredMonthOne = dateOne[1];
            // const filteredYearOne = dateOne[2];
            // const dateTwo = filtered[filtered.length - 1].split(' ');
            // const filteredDatetwo = dateTwo[0];
            // const filteredMonthTwo = dateTwo[1];
            // const filteredYearTwo = dateTwo[2];
            // if(filtered.length < 2){
            //   let str = `<p class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${filtered[0]}</p>`;
            //   inpInput.innerHTML = str;
            // }else{
            //   if(filteredDateOne > filteredDatetwo){
            //     let str = `<p class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; Cannot reverse date</p>`;
            //     inpInput.innerHTML = str;
            //   }else{
            //     let str = `<p class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${filtered[0]} - ${filtered[filtered.length - 1]}</p>`;
            //     inpInput.innerHTML = str;
            //   }
            // }
            // // console.log(onths.indexOf(months[month]) == month, today, date.getDate())
            // console.log(filteredDateOne, filteredDatetwo)
          });
        }
      }

      bdy.appendChild(row);
      let dates = this.shadowRoot.querySelector('#days').querySelectorAll('li');

      if (this.wasDateSelected) {
        let monthAndYear = this.shadowRoot.getElementById("monthAndYear").innerHTML;
        let actualtDateText = this.shadowRoot.querySelector("#dateSelected").innerText.trim();
        let month = monthAndYear.slice(0, 3);
        let year = monthAndYear.slice(4);
        let actualMonth;
        let actualYear;

        if (actualtDateText.length == 11) {
          actualMonth = actualtDateText.slice(1, 5).trim();
          actualYear = actualtDateText.slice(6).trim(); //check wheather actualMonth and actualYear match month and year

          if (actualMonth == month && actualYear == year) {
            //set active date color
            dates.forEach(date => {
              if (date.innerText == this.todayDateNumber) {
                date.classList.add('active');
              }
            });
          }
        } else {
          actualMonth = actualtDateText.slice(2, 6).trim();
          actualYear = actualtDateText.slice(7).trim(); //check wheather actualMonth and actualYear match month and year

          if (actualMonth == month && actualYear == year) {
            //set active date color
            dates.forEach(date => {
              if (date.innerText == this.todayDateNumber) {
                date.classList.add('active');
              }
            });
          }
        }
      } //end of this.wasDateSelected

    } //end of for loop

  } //end of showCalender


  next() {
    if (this.monthYearCalenderVisibile) {
      const monthYearView = this.shadowRoot.getElementById('monthAndYear');
      this.currentYear++;
      monthYearView.innerText = this.currentYear;
    } else {
      //Remove active color by default
      let allCells = this.shadowRoot.querySelector('#days').querySelectorAll('li');
      allCells.forEach(cell => {
        cell.classList.remove('active');
      });
      this.currentMonth++;

      if (this.currentMonth > 11) {
        this.currentYear++;
        this.currentMonth = 0;
      }

      this.showCalendar(this.currentMonth, this.currentYear);
    }
  }

  previous() {
    if (this.monthYearCalenderVisibile) {
      const monthYearView = this.shadowRoot.getElementById('monthAndYear');
      this.currentYear--;
      monthYearView.innerText = this.currentYear;
    } else {
      let allCells = this.shadowRoot.querySelector('#days').querySelectorAll('li');
      allCells.forEach(cell => {
        cell.classList.remove('active');
      });
      this.currentMonth--;

      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }

      this.showCalendar(this.currentMonth, this.currentYear);
    }
  }

  daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const inpInput = this.shadowRoot.querySelector('.calendar-select-header');

    if (this.e.required && !this.e.defaultValue) {// show todays date by default in html
    }

    if (!this.e.required && !this.e.defaultValue) {
      // shows empty date based on docs
      const selectDateText = 'Select Date';
      let str = `<p id="dateSelected" class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${selectDateText}</p>`;
      inpInput.innerHTML = str;
    }

    if (this.e.defaultValue) {
      // show default value date
      const date = parse(this.e.defaultValue, this.e.details['input_format'], new Date());
      const defaultDate = new Date(new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000)));
      this.currentMonth = defaultDate.getMonth();
      this.currentYear = defaultDate.getFullYear();
      this.todayDateNumber = defaultDate.getDate();
    }
  }

}

customElements.define(DateElement.is, DateElement);