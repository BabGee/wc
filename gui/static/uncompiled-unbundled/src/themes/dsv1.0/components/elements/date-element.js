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
}
.calendar-select-header p{
  font-size: 14px;
  font-weight: 500;
}
.calendar-select-body{
  width: 100%;
  margin-top: 15px;
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
  text-transform: uppercase;
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
  width: 12.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size:12px;
  color: #013243;
}

.days li .active {
  padding: 5px;
  background: #1abc9c;
  color: white !important;
  border-radius: 50%;
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
    <div class="calendar-select-header">
        <p class="has-text-center"><fa-icon class="fas fa-calendar-minus center" color="#4a4a4a" size="1em"></fa-icon>&nbsp;&nbsp; 24 May, 2018 - 26 May, 2018</p>
    </div>

    <div class="calendar-select-body">
        <div class="month">      
            <ul>
              <div class="columns">
                  <div class="column">
                      <li class="is-pulled-left">
                        August
                      </li>
                  </div>
                  <div class="column">
                      <div class="calendar-scroll is-flex is-pulled-right">
                          <li class="prev">&#10094;</li>
                          <li class="next">&#10095;</li>
                      </div>
                  </div>
              </div>
            </ul>
          </div>
          <ul class="weekdays">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
          </ul>

          <ul class="days">  
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li><span class="active">10</span></li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
          </ul>
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
      }
    };
  }

  getInput() {
    const picker = this.qs('#input');
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