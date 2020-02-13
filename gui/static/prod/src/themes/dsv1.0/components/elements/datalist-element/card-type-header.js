import "../../../../../../node_modules/@polymer/paper-button/paper-button.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js"; // import '@polymer/paper-icon-button/paper-icon-button';

import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { DatalistHeaderStyles } from "../../../styles/datalist-header.js";
import { CardTypeHeaderStyles } from "./datalist-element-styles/card-type-header-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class CardTypeHeader extends LitElement {
  static get styles() {
    return [DatalistHeaderStyles, CardTypeHeaderStyles, css`
        :host {
          display: block;
        }
      `];
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    
    <div class="table-header-buttons" style="margin-bottom: 15px;">
      <div class="heading">
        <h1 class="title is-size-6">${this.title}</h1>
      </div>
      <button @tap="${this.generatePDF}" class="button is-info is-size-7 is-rounded">Export PDF</button>
      <button @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
    </div>
`;
  }

  static get is() {
    return 'card-type-header';
  }

  static get properties() {
    return {
      title: String //   language: String,
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

    };
  }

}
customElements.define(CardTypeHeader.is, CardTypeHeader);