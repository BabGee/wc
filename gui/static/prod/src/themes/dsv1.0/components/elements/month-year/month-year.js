import{dataSourceMixin,utilsMixin,SerializableElement,html,css,InputDefaultStyles,InputLabelAnimationtStyles}from"../../../../../components/adaptive-ui.js";const MonthYearBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){static get is(){return"month-year"}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=MonthYearBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.params=self.pl.paramsCopy();self.maxlength=pElement.max}};var monthYear={MonthYearBase:MonthYearBase};class MonthYear extends MonthYearBase{static get styles(){return[InputDefaultStyles,InputLabelAnimationtStyles,css`
            :host {
                display: block;
            }
            `]}renderDefault(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="column">
            <div class="input-mixin input-effect">
                <input class="label-animation" type="month" class="input is-medium" id="input"  name=${this.e.name} value=${this.value} required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max} @keyup="${this.count}">
                <label>${this.e.name}</label>
                <span class="focus-bg"></span>
            </div>
        </div>
        `}}customElements.define(MonthYear.is,MonthYear);export{monthYear as $monthYear,MonthYearBase};