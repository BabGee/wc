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
  width: 12.6%;
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
  width: 13%;
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
        <p class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${this.todayDateNumber + ` ` + this.months[this.currentMonth] + `, ` + this.currentYear}</p>
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
      dateRange: Array,
      currentMonth: Number,
      currentYear: Number,
      today: String,
      months: Array,
      todayDateNumber: Number,
      dateSelected: String,
      wasDateSelected: Boolean
    };
  }

  constructor() {
    super();
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.todayDateNumber = this.today.getDate();
    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.wasDateSelected = false;
  }

  getInput() {
    const picker = this.dateSelected;
    return picker;
  }

  getValue() {
    const pickerDate = this.getInput().valueAsDate;

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

  showCalendar(month, year) {
    const date = new Date();
    const inpInput = this.shadowRoot.querySelector('.calendar-select-header');
    let firstDay = new Date(year, month).getDay(),
        dateRange = []; // const len = dateRange.length = Math.max(dateRange.length, 2)

    const today = date.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthAndYear = this.shadowRoot.getElementById("monthAndYear");
    monthAndYear.innerHTML = months[month] + "," + year;
    let renderNum = 1;
    const bdy = this.shadowRoot.getElementById('days');
    bdy.innerHTML = "";

    for (let i = 0; i < 6; i++) {
      let row = document.createElement('ul');

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          let cell = document.createElement("li");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (renderNum > this.daysInMonth(month, year)) {
          break;
        } else {
          let cell = document.createElement("li");
          let cellText = document.createTextNode(renderNum);

          if (renderNum === date.getDate() && year === date.getFullYear() && month === date.getMonth()) {// cell.classList.add("active");
          }

          cell.appendChild(cellText);
          row.appendChild(cell);
          renderNum++;
          cell.addEventListener('click', () => {
            let allCells = this.shadowRoot.querySelector('#days').querySelectorAll('li');
            allCells.forEach(cell => {
              cell.classList.remove('active');
            });
            cell.classList.add("active");
            const dateClicked = cell.innerText + " " + months[month] + " " + year;
            this.todayDateNumber = cell.innerText;
            this.dateSelected = cell.innerText + '/' + `${month + 1}` + '/' + year;
            let str = `<p class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; ${dateClicked}</p>`;
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

      if (this.wasDateSelected == true) {} else {
        let dates = this.shadowRoot.querySelector('#days').querySelectorAll('li');
        dates.forEach(date => {
          if (date.innerText == this.todayDateNumber) {
            date.classList.add('active');
            this.wasDateSelected = true;
          }
        });
      }
    }
  }

  next() {
    if (this.wasDateSelected == true) {
      let dates = this.shadowRoot.querySelector('#days').querySelectorAll('li');
      dates.forEach(date => {
        date.classList.remove('active');
      });
      this.wasDateSelected == false;
    }

    this.currentMonth++;

    if (this.currentMonth > 11) {
      this.currentYear++;
      this.currentMonth = 0;
    }

    this.showCalendar(this.currentMonth, this.currentYear);
  }

  previous() {
    if (this.wasDateSelected == true) {
      let dates = this.shadowRoot.querySelector('#days').querySelectorAll('li');
      dates.forEach(date => {
        date.classList.remove('active');
      });
      this.wasDateSelected == false;
    }

    this.currentMonth--;

    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }

    this.showCalendar(this.currentMonth, this.currentYear);
  }

  daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    if (this.e.required && !this.e.defaultValue) {
      this.getInput().valueAsDate = new Date(); // .toDateInputValue();
    }

    if (this.e.defaultValue) {
      const date = parse(this.e.defaultValue, this.e.details['input_format'], new Date()); // date = new Date(this.e.defaultValue);

      this.getInput().valueAsDate = new Date(new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000)));
    }
  }

}

customElements.define(DateElement.is, DateElement);