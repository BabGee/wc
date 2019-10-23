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
    /* width: 371px; */
    height: 100px;;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #fff;
    border-radius: 8px;
    border: #8B8B8B 1px solid;
    padding: 15px 35px;
}
.timer-container .clock svg{
    width: 50px;
    height: 100px;
    align-items: center;
    display: flex;
    position: relative;
    top: 9px;
}
.timer-container .digi-clock p{
    font-size: 40px;
    font-weight: bolder;
    color: #464646;
    text-align: right;
}
.timer-container .digi-clock p a{
    color: inherit;
}
.drop-down-container{
    width: 10%;
    height: auto;
    right: 129px;
    position: absolute;
    background-color: #fff;
    border-radius: 8px;
    border: #8B8B8B 1px solid;
    margin-top: 20px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    align-content: center; */
    z-index: 9999;
}
/* .drop-down-container::after{
    content: '';
    position: absolute;
    top: -17px;
    border-top: 9px solid transparent;
    border-left: 9px solid transparent;
    border-bottom: 9px solid #fff;
    border-right: 9px solid transparent;
} */
.drop-down-container ul{
    width: 100%;
    height: 150px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.drop-down-container ul li{
    width: 100%;
    padding: 5px 0;
}
.drop-down-container ul li a{
    padding: 10px 63px;
    width: 100%;
    position: relative;
    color: #464646;
    left: -5px;
}
.drop-down-container ul li a:hover{
    background: #e5e5e5;
}
.card-center{
    margin: 0 auto;
}
.time-title h1{
  font-size: 20px;
  margin: 15px;
}
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css">

<div class="timer-container">
    <div class="columns">
        <div class="column clock">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 58.153 58.153" style="enable-background:new 0 0 58.153 58.153;" xml:space="preserve" width="512px" height="512px"><g><g>
                <path d="M40.076,29.153h-7.142c-0.364-1.399-1.459-2.494-2.858-2.858V16.153c0-0.553-0.448-1-1-1s-1,0.447-1,1v10.142   c-1.72,0.447-3,1.999-3,3.858c0,2.206,1.794,4,4,4c1.858,0,3.411-1.28,3.858-3h7.142c0.552,0,1-0.447,1-1   S40.629,29.153,40.076,29.153z M29.076,32.153c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2S30.179,32.153,29.076,32.153z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
                <path d="M50.188,9.764l4.096,4.096c0.188,0.188,0.442,0.293,0.707,0.293s0.52-0.105,0.707-0.293c3.167-3.166,3.167-8.319,0-11.485   s-8.319-3.166-11.485,0c-0.188,0.188-0.293,0.441-0.293,0.707s0.105,0.52,0.293,0.707l4.561,4.561l-1.699,1.699   c-4.78-4.284-11.089-6.896-17.998-6.896s-13.218,2.612-17.998,6.896L9.379,8.35l4.561-4.561c0.188-0.188,0.293-0.441,0.293-0.707   s-0.105-0.52-0.293-0.707c-3.166-3.166-8.318-3.166-11.485,0s-3.167,8.319,0,11.485c0.188,0.188,0.442,0.293,0.707,0.293   s0.52-0.105,0.707-0.293l4.096-4.096l1.676,1.676c-4.679,4.857-7.565,11.453-7.565,18.713c0,9.898,5.357,18.564,13.321,23.265   l-3.028,3.028c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l3.45-3.45   c3.578,1.754,7.597,2.743,11.843,2.743s8.265-0.989,11.843-2.743l3.45,3.45c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-3.028-3.028c7.964-4.701,13.321-13.367,13.321-23.265   c0-7.26-2.886-13.856-7.565-18.713L50.188,9.764z M54.283,3.789c2.146,2.146,2.362,5.502,0.649,7.893l-8.541-8.542   C48.781,1.427,52.136,1.642,54.283,3.789z M3.22,11.681C1.507,9.291,1.723,5.935,3.869,3.789s5.502-2.361,7.892-0.649L3.22,11.681z    M29.076,55.153c-13.785,0-25-11.215-25-25s11.215-25,25-25s25,11.215,25,25S42.862,55.153,29.076,55.153z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
                <path d="M29.076,10.032c0.552,0,1-0.447,1-1v-1c0-0.553-0.448-1-1-1s-1,0.447-1,1v1C28.076,9.584,28.524,10.032,29.076,10.032z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
                <path d="M29.076,50.032c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1s1-0.447,1-1v-1C30.076,50.479,29.629,50.032,29.076,50.032z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
                <path d="M50.076,31.032h1c0.552,0,1-0.447,1-1s-0.448-1-1-1h-1c-0.552,0-1,0.447-1,1S49.524,31.032,50.076,31.032z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
                <path d="M8.076,29.032h-1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1S8.629,29.032,8.076,29.032z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
                <path d="M43.926,13.768l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S44.316,13.377,43.926,13.768z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
                <path d="M13.52,44.174l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S13.911,43.784,13.52,44.174z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
                <path d="M44.633,44.174c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L44.633,44.174z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
                <path d="M14.227,13.768c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L14.227,13.768z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#5F5F5F"/>
            </g></g> </svg>
        </div>
    </div>

    <div class="column time">
        <div class="digi-clock is-pulled-right">
            <p class="has-text-center" style="text-align: center;">
                <a href="" id="hrs">12</a>&nbsp;:&nbsp;<a href="" id="mins">00</a>&nbsp;<a href="" id="tod">AM</a>
            </p>
        </div>
    </div>
</div>
<div class="drop-down-container">
    <div class="time-title"><h1 class="title has-text-centered is-block">Hour</h1></div>
    <ul>
        <li><a>1</a></li>
        <li><a>2</a></li>
        <li><a>3</a></li>
        <li><a>4</a></li>
        <li><a>5</a></li>
        <li><a>6</a></li>
        <li><a>7</a></li>
    </ul>
</div>
`;
  }

  range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
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