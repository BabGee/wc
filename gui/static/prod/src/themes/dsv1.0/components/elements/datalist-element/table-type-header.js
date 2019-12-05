import"../../../../../../node_modules/@polymer/paper-button/paper-button.js";import"../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";// import '@polymer/paper-icon-button/paper-icon-button';
import{LitElement,html}from"../../../../../../node_modules/lit-element/lit-element.js";/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/export class TableTypeHeader extends LitElement{render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
      .table-header-buttons{
          width: 100%;
          height: auto;
          position: relative;
      }

      .table-header-buttons h1{
        margin-bottom: 15px;
      }
    </style>
    <div class="table-header-buttons" style="margin-bottom: 15px;">
      <div class="heading">
        <h1 class="title is-size-6">${this.title}</h1>
      </div>
      <button @tap="${this.generatePDF}" class="button is-info is-size-7 is-rounded">Export PDF</button>
      <button @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
    </div>
`}static get is(){return"table-type-header"}static get properties(){return{title:String//   language: String,
//   column: {
//     type: Object,
//     notify: true,
//     value: () => ({}),
//   },
//   positionSortIcon: String,
//   sortable: {
//     type: Boolean,
//     value: () => false,
//   },
//   sorted: {
//     type: Boolean,
//     value: () => false,
//   },
//   sortDirection: {
//     type: String,
//     value: () => 'asc',
//   },
//   previousValue: {
//     type: String,
//     value: () => '',
//   },
//   currentValue: {
//     type: String,
//     value: () => '',
//   },
//   timeoutFilter: Number,
//   focused: {
//     type: Boolean,
//     value: false,
//   },
//   _dateFrom: Number,
//   _dateTo: Number,
//   dateFormat: String,
}}generateCSV(){const csv="csv";// console.log(evt);
this.dispatchEvent(new CustomEvent("export-type",{detail:{type:csv}}))}generatePDF(){const pdf="pdf";// console.log(evt);
this.dispatchEvent(new CustomEvent("export-type",{detail:{type:pdf}}))}}customElements.define(TableTypeHeader.is,TableTypeHeader);