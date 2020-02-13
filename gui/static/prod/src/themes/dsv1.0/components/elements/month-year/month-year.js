import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { MonthYearBase } from "../../../../../elements/base/month-year.js";
import { InputDefaultStyles } from "../../../styles/input-shared-default.js";
import { InputLabelAnimationtStyles } from "../../../styles/input-label-animation.js";

class MonthYear extends MonthYearBase {
  static get styles() {
    return [InputDefaultStyles, InputLabelAnimationtStyles, css`
            :host {
                display: block;
            }
            `];
  }

  renderDefault() {
    return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="column">
            <div class="input-mixin input-effect">
                <input class="label-animation" type="month" class="input is-medium" id="input"  name=${this.e.name} value=${this.value} required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max} @keyup="${this.count}">
                <label>${this.e.name}</label>
                <span class="focus-bg"></span>
            </div>
        </div>
        `;
  }

}

customElements.define(MonthYear.is, MonthYear);