import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { format } from "../../../../../node_modules/date-fns/esm/index.js";
import { TimeElementBase } from "../../../../elements/base/time-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TimeElement extends TimeElementBase {
  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
 <style>
 
.timer-container{
  width: 500px;
  margin: 10px;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  border: 1px solid #e5e5e5;
}
.timer-container .timer-picker-header h1{
  font-size: 18px;
  text-align: center;
}
.timer-container .timer-picker-body{
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 450px;
}

.timer-container .timer-picker-body .time-capsule{
  width: 100%;
}
.timer-container .timer-picker-body .time-capsule{
  position: relative;
}
.timer-container .timer-picker-body .time-capsule::after{
  content: '';
  position: absolute;
  top: 43%;
  right: 10px;
  border-top: 4px solid #4a4a4a;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  border-bottom: 4px solid transparent;
}
.timer-container .timer-picker-body .time-capsule input{
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #013243;
  padding: 11px;
  border-radius: 6px;
}
.range{
  width: 100%;
  height: 100px;
  overflow-y: scroll;
  border: 1px solid #e5e5e5;
  z-index: 5000;
  margin-top: 10px;
  border-radius: 4px;
  display: none;
}
.range ul li{
  cursor: pointer;
  padding: 5px 10px;
}
.range ul li:hover{
  background: #e5e5e5;
}
.timer-button{
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css">
<div class="timer-container">
  <div class="timer-picker-header">
    <h1 class="title is-text-6 is-capitalized has-text-centered">Select time</h1>
  </div>
  <div class="timer-picker-body columns is-mobile">
    <div class="column">
      <div class="time-capsule hrs" id="hrs">
        <input type="text" class="input" value='00' @click="${() => this.displyRange('hrs-range')}">
      </div>
      <div class="hrs-range range">
        <ul>

        </ul>
      </div>
    </div>
    
    <div class="column">
      <div class="time-capsule min" id="mins">
        <input type="text" class="input" value='00' @click="${() => this.displyRange('min-range')}">
      </div>
      <div class="min-range range">
        <ul>

        </ul>
      </div>
    </div>
    
    <div class="column">
      <div class="time-capsule sec" id="secs">
        <input type="text" class="input" value="AM" @click="${() => this.displyRange('ver-range')}">
      </div>
      <div class="ver-range range">
        <ul>

        </ul>
      </div>
    </div>
  </div>

  <div class="timer-button">
    <button class="button btn is-capitalized" @click = "${this.handleChange}">set</button>
  </div>
  
  <div class="timer-display">
    
  </div>
</div>`;
  }

  displyRange(blk) {
    const inp = this.shadowRoot.querySelectorAll('.time-capsule input');
    const rangePicker = this.shadowRoot.querySelector('.' + blk);
    rangePicker.classList.toggle('is-block');
    const hRange = this.shadowRoot.querySelector('.hrs-range ul');
    const vRange = this.shadowRoot.querySelector('.ver-range ul');
    const mRange = this.shadowRoot.querySelector('.min-range ul');

    if (rangePicker.classList.contains('hrs-range')) {
      const hrsRange = this.range(1, 12);
      hrsRange.map(item => {
        const list = document.createElement('li');
        list.classList.add('lst');
        const data = document.createTextNode(item);
        list.appendChild(data);
        hRange.appendChild(list);
      });
      const lst = this.shadowRoot.querySelectorAll('.lst');
      lst.forEach(el => {
        el.addEventListener('click', () => {
          if (inp[0].value <= 9) {
            inp[0].value = "0" + el.innerText;
          } else {
            inp[0].value = el.innerText;
          }

          rangePicker.classList.remove('is-block');
        });
      });
    } else if (rangePicker.classList.contains('min-range')) {
      const minRange = this.range(0, 59);
      minRange.map(item => {
        const list = document.createElement('li');
        list.classList.add('lst-2');
        const data = document.createTextNode(item);
        list.appendChild(data);
        mRange.appendChild(list);
        const lst2 = this.shadowRoot.querySelectorAll('.lst-2');
        lst2.forEach(el => {
          el.addEventListener('click', () => {
            if (inp[1].value <= 9) {
              inp[1].value = "0" + el.innerText;
            } else {
              inp[1].value = el.innerText;
            }

            rangePicker.classList.remove('is-block');
          });
        });
      });
    } else {
      const verRange = ['AM', 'PM'];
      verRange.map(item => {
        const list = document.createElement('li');
        list.classList.add('lst-3');
        const data = document.createTextNode(item);
        list.appendChild(data);
        vRange.appendChild(list);
        const lst3 = this.shadowRoot.querySelectorAll('.lst-3');
        lst3.forEach(el => {
          el.addEventListener('click', () => {
            inp[2].value = el.innerText;
            rangePicker.classList.remove('is-block');
          });
        });
      });
    }
  }

  range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  }

  handleChange() {
    const disp = this.shadowRoot.querySelector('.timer-display');
    const inp = this.shadowRoot.querySelectorAll('.time-capsule input');

    if (inp[0].value != inp[0].defaultValue || inp[1].value != inp[1].defaultValue || inp[2].value != inp[2].defaultValue) {
      disp.innerHTML = `<p class="has-text-centered" style="margin-top: 20px">${inp[0].value} : ${inp[1].value} : ${inp[2].value}</p>`;
    } else {
      disp.innerHTML = `<p class="has-text-centered" style="margin-top: 20px">Please select a correct time</p>`;
    }
  }

  getInput() {
    const picker = this.shadowRoot.querySelector('#input');
    return picker;
  }

  getValue() {
    const pickerDate = this.getInput().value; // AsDate;//.getUTCDate();

    if (pickerDate) {
      return this.convertTime24to12(pickerDate);
    }
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