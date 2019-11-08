import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { format } from "../../../../../node_modules/date-fns/esm/index.js";
import { TimeElementBase } from "../../../../elements/base/time-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TimeElement extends TimeElementBase {
  static get properties() {
    return {
      dropDownMenuHidden: Boolean
    };
  }

  constructor() {
    super();
    this.dropDownMenuHidden = true;
  }

  renderDefault() {
    return html`
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
 <div class="timer-element" @click="${() => this._dropdown()}">
  <p class="has-text-centered has-text-weight-bold is-size-4">
    <a class="hour" id="hrs">12</a>&nbsp; : &nbsp;<a class="minutes" id="min">00</a> <a class="tod" id="tod">AM</a></p>
 </div>
 <div id="timer-dropdown" class="timer-dropdown is-hidden">
  <div class="inner-container columns">
    <div class="column hrs-drp drp">
      <div class="heading">
        <p class="has-text-weight-bold is-size-5 has-text-centered">Hours</p>
      </div>
      <ul>
      ${this.range(1, 12).map(data => html`
           <li @click='${() => this.addHour(data)}'><a href="#">${data}</a></li>
      `)}
      </ul>
    </div>
    <div class="column drp">
    <div class="heading">
        <p class="has-text-weight-bold is-size-5 has-text-centered">Minutes</p>
      </div>
      <ul>
      ${this.range(0, 59).map(data => html`
      <li @click='${() => this.addMin(data)}'><a href="#">${data < 10 ? '0' + data : data}</a></li>
      `)}
       
      </ul>
    </div>
    <div class="column drp">
    <div class="heading">
        <p class="has-text-weight-bold is-size-5 has-text-centered">TOD</p>
      </div>
      <div class="radio">
        <input type="radio" name="tod" value="AM" checked @click='${() => this.addTOD("AM")}'> AM
        <input type="radio" name="tod" value="PM"  @click='${() => this.addTOD("PM")}'> PM
      </div>
    </div>
  </div>
  </div>
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
  }

  addHour(time) {
    const hourText = this.shadowRoot.querySelector("#hrs");
    hourText.innerHTML = time;
  }

  addMin(time) {
    let min = time;
    min < 10 ? min = "0" + time : min = time;
    const minText = this.shadowRoot.querySelector("#min");
    minText.innerHTML = min;
  }

  addTOD(tod) {
    const timeofDay = this.shadowRoot.querySelector("#tod");
    timeofDay.innerHTML = tod;
  }

  range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  }

  getInput() {
    const hourText = this.shadowRoot.querySelector("#hrs");
    const minText = this.shadowRoot.querySelector("#min");
    const timeofDay = this.shadowRoot.querySelector("#tod");
    const actualTime = hourText.innerHTML + ":" + minText.innerHTML + " " + timeofDay.innerHTML;
    const picker = actualTime;
    return picker;
  }

  getValue() {
    const pickerDate = this.getInput(); // AsDate;//.getUTCDate();

    return pickerDate; // if (pickerDate) {
    //   return this.convertTime24to12(pickerDate);
    // }
  }

  valid(Validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'none'; // Revert general text content

    this.shadowRoot.querySelector('.validation-info').textContent = 'Required';
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'block';

    if (validation) {
      this.shadowRoot.querySelector('.validation-info').textContent = validation;
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    if (this.required && !this.e.defaultValue) {
      this.getInput().value = format(new Date(), 'HH:mm');
    }

    if (this.e.defaultValue) {
      this.getInput().value = this.convertTime12to24(this.e.defaultValue);
    }
  }

}

customElements.define(TimeElement.is, TimeElement);