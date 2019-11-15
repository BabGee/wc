import"../../../../../../node_modules/@polymer/paper-button/paper-button.js";import"../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";import{LitElement,html}from"../../../../../../node_modules/lit-element/lit-element.js";export class CardTypeHeader extends LitElement{render(){return html`

        <h4>${this.title}</h4>
        <div>
       <paper-button  @tap="${this.generatePDF}" style=" background: #3498db; color:white;"><iron-icon icon="image:picture-as-pdf"></iron-icon>Export PDF</paper-button>
       <paper-button @tap="${this.generateCSV}" style=" background: #2ecc71; color:white;"><iron-icon icon="icons:save"></iron-icon>Export CSV</paper-button>
   </div>
`}static get is(){return"card-type-header"}static get properties(){return{title:String}}}customElements.define(CardTypeHeader.is,CardTypeHeader);