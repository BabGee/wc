import"../../../../../../node_modules/@polymer/paper-button/paper-button.js";import"../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";// import '@polymer/paper-icon-button/paper-icon-button';
import{LitElement,html}from"../../../../../../node_modules/lit-element/lit-element.js";/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/export class StaffProfileHeader extends LitElement{render(){return html`

        <h4>${this.title}</h4>
        <div>
       <paper-button  @tap="${this.generatePDF}" style=" background: #3498db; color:white;"><iron-icon icon="image:picture-as-pdf"></iron-icon>Export PDF</paper-button>
       <paper-button @tap="${this.generateCSV}" style=" background: #2ecc71; color:white;"><iron-icon icon="icons:save"></iron-icon>Export CSV</paper-button>
   </div>
`}static get is(){return"staffprofile-type-header"}static get properties(){return{title:String//   language: String,
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
}}}customElements.define(StaffProfileHeader.is,StaffProfileHeader);