import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { format } from "../../../../../../node_modules/date-fns/esm/index.js";
import { TimeElementBase } from "../../../../../elements/base/time-element.js";
import { TimeElementStyles } from "./time-element-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TimeElement extends TimeElementBase {
  static get styles() {
    return [TimeElementStyles, css`
        :host {
          display: block;
        }
      `];
  }

  static get properties() {
    return {
      dropDownMenuHidden: Boolean,
      today: String,
      todayHourTime: String,
      todayMinTime: String,
      amOrPm: String,
      isHourSelected: Boolean,
      isMinSelected: Boolean,
      isTODSelected: Boolean
    };
  }

  constructor() {
    super();
    this.dropDownMenuHidden = true;
    this.today = new Date();
    this.todayHourTime = this._getHour(this.today);
    this.todayMinTime = this._getMin(this.today.getMinutes());
    this.amOrPm = this._getAMOrPM(this.today);
  }

  _getHour(today) {
    let H = today.getHours();
    let h = H % 12 || 12;
    return h.toString();
  }

  _getMin(time) {
    let min = time;
    min < 10 ? min = "0" + time : min = time;
    return min.toString();
  }

  _getAMOrPM(today) {
    let H = today.getHours();
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    return ampm.toString();
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">


<div class="column">
  <div class="calendar-select" style="width:100%;">
    <div class="calendar-select-header" @click="${() => this._dropdown()}">
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
          ${this.range(1, 12).map(data => html`
            <li id="hour-${data}" class="has-text-centered" @click='${() => this.addHour(data)}'>${data}</li>
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
          ${this.range(0, 59).map(data => html`
            <li id="min-${data}" class="has-text-centered" @click='${() => this.addMin(data)}'>${data < 10 ? '0' + data : data}</li>
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
            <div class ="radio-div"><input type="radio" name="tod" value="AM"  @click='${() => this.addTOD("AM")}'> AM</div>
            <div class ="radio-div"><input type="radio" name="tod" value="PM"  @click='${() => this.addTOD("PM")}'> PM </div>
          </div>
        </div>
      </div>
    </div>


    </div> <!-- end of calender body -->

  </div> <!-- end of calender select -->


</div>
`;
  }

  _dropdown() {
    const dropdown = this.shadowRoot.querySelector("#timer-dropdown");

    if (this.dropDownMenuHidden === true) {
      dropdown.classList.remove('is-hidden');
      this.dropDownMenuHidden = false;
    } else {
      dropdown.classList.add('is-hidden');
      this.dropDownMenuHidden = true;
    }

    this.isHourSelected = false;
    this.isMinSelected = false;
    this.isTODSelected = false;
  }

  addHour(time) {
    const hourText = this.shadowRoot.querySelector("#hrs");
    hourText.innerHTML = time;
    const allHourTime = this.shadowRoot.querySelector("#timer-lineup").querySelectorAll("li");
    const selectedHour = this.shadowRoot.querySelector("#hour-" + time);
    allHourTime.forEach(li => {
      li.classList.remove("time-active");
    });
    selectedHour.classList.add("time-active");
    this.isHourSelected = true;

    if (this.isHourSelected && this.isMinSelected && this.isTODSelected) {
      this._dropdown();
    }
  }

  addMin(time) {
    let min = time;
    min < 10 ? min = "0" + time : min = time;
    const minText = this.shadowRoot.querySelector("#min");
    minText.innerHTML = min;
    const allMinTime = this.shadowRoot.querySelector("#timer-lineup-minutes").querySelectorAll("li");
    const selectedMin = this.shadowRoot.querySelector("#min-" + time);
    allMinTime.forEach(li => {
      li.classList.remove("time-active");
    });
    selectedMin.classList.add("time-active");
    this.isMinSelected = true;

    if (this.isHourSelected && this.isMinSelected && this.isTODSelected) {
      this._dropdown();
    }
  }

  addTOD(tod) {
    const timeofDay = this.shadowRoot.querySelector("#tod");
    timeofDay.innerHTML = tod;
    this.isTODSelected = true;

    if (this.isHourSelected && this.isMinSelected && this.isTODSelected) {
      this._dropdown();
    }
  }

  range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  }

  getInput() {
    const hourText = this.shadowRoot.querySelector("#hrs");
    const minText = this.shadowRoot.querySelector("#min");
    const timeofDay = this.shadowRoot.querySelector("#tod");
    const actualTime = hourText.innerText + ":" + minText.innerText + " " + timeofDay.innerText;
    const picker = actualTime;
    return picker;
  }

  getValue() {
    const pickerDate = this.getInput(); // AsDate;//.getUTCDate();

    return pickerDate; // if (pickerDate) {
    //   return this.convertTime24to12(pickerDate);
    // }
  }

  valid(Validation) {//this.shadowRoot.querySelector('.validation-info').style.display='none';
    // Revert general text content
    //this.shadowRoot.querySelector('.validation-info').textContent= 'Required';
  }

  invalid(validation) {// this.shadowRoot.querySelector('.validation-info').style.display='block';
    // if (validation)
    // {this.shadowRoot.querySelector('.validation-info').textContent= validation;}
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    if (this.required && !this.e.defaultValue) {//Shows current by default
    }

    if (this.e.defaultValue) {
      if (this.e.defaultValue.length > 5) {
        //default time is in 12hr format
        let defaultTime = this.e.defaultValue;
        const [time, modifier] = defaultTime.split(' ');
        let [hours, minutes] = time.split(':');
        this.todayHourTime = hours;
        this.todayMinTime = minutes;
        this.amOrPm = modifier.toUpperCase();
      } else {
        //default time is in 24hr format
        let defaultTime = this.convertTime24to12(this.e.defaultValue);
        const [time, modifier] = defaultTime.split(' ');
        let [hours, minutes] = time.split(':');
        this.todayHourTime = hours;
        this.todayMinTime = minutes;
        this.amOrPm = modifier;
      }
    }
  }

}

customElements.define(TimeElement.is, TimeElement);