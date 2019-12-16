import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{MonthYearBase}from"../../../../elements/base/month-year.js";class MonthYear extends MonthYearBase{renderDefault(){return html`
        <style>
            .inp{
                border-radius: 6px!important;
                font-size: 14px!important;
                padding: 20px!important;
                line-height: 1;
                background-color: #fcfcfc!important;
                border: 1px solid #a3a3a4!important;
                box-shadow: 0 0 0 transparent!important;
            }
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="field">
            <div class="control">
                <input class="input inp" type="month" placeholder="Primary input">
            </div>
        </div>
        `}}customElements.define(MonthYear.is,MonthYear);