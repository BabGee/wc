import "../../../../../../node_modules/@polymer/paper-button/paper-button.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../../../../../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";
import "../../../../../../node_modules/@polymer/paper-item/paper-item.js";
import "../../../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../../../../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import { TableStyles } from "../../../styles/table-type.js";
import { DatalistHeaderStyles } from "../../../styles/datalist-header.js";
import { TableTypeHeaderStyles } from "./datalist-element-styles/table-type-header-css.js";
import "../../../../../../node_modules/@polymer/iron-image/iron-image.js"; // import '@polymer/paper-icon-button/paper-icon-button';

import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class TableTypeHeader extends LitElement {
  static get styles() {
    return [TableStyles, DatalistHeaderStyles, TableTypeHeaderStyles, css`
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
      
    </div>
    <div class="sub-container">
      <div class="buttons is-pulled-left" style="width:20%;">
        <button @tap="${this.generatePDF}" class="button is-info is-size-7 is-rounded">Export PDF</button>
        <button @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
      </div>

      ${this._searchFieldsExist(this.columns) ? html`
      
      <div class="search-container" style="position: relative; top: -23px;">

      <paper-dropdown-menu label="Search In">
          <paper-listbox slot="dropdown-content"
                         id="qIn"
                         fallback-selection="q"
                         attr-for-selected="param">
              <paper-item param="q">All</paper-item>
              ${this.searchFields(this.columns).map(item => html`<paper-item param="${item.propertyPath}">${item.header}</paper-item>`)}
          </paper-listbox>
      </paper-dropdown-menu>
  
      <paper-input style="display: inline-block"
                   placeholder="Search ..."
                   name="search"
                   value="${this.searchText}"
                   id="q"></paper-input>
        <button class="button" style="background-color:var(--app-default-color); color: #fff; padding: 8px .75em;" type="submit" @click="${this._search}">Search</button>
        <button class="button" style="background-color:var(--app-default-color); color: #fff; padding: 8px .75em;" type="button" @click="${this._searchReset}">Clear</button>
  
      </div>
      
      
      ` : html``}


  </div>



`;
  }

  static get is() {
    return 'table-type-header';
  }

  static get properties() {
    return {
      title: String,
      columns: {
        type: Array // value: () => [],
        // notify: true,

      } //   language: String,
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

  generateCSV() {
    const csv = 'csv'; // console.log(evt);

    this.dispatchEvent(new CustomEvent('export-type', {
      detail: {
        type: csv
      }
    }));
  }

  generatePDF() {
    const pdf = 'pdf'; // console.log(evt);

    this.dispatchEvent(new CustomEvent('export-type', {
      detail: {
        type: pdf
      }
    }));
  }

  searchFields(columns) {
    return columns.filter(function (item) {
      return item.filter;
    });
  }

  _searchReset(evt) {
    const self = this;
    this.dispatchEvent(new CustomEvent('_clearSearch', {
      detail: {
        searchFields: self.searchFields(self.columns).map(function (field) {
          return field.propertyPath;
        })
      }
    }));
  }

  _searchFieldsExist(columns) {
    return columns.filter(function (item) {
      return item.filter;
    }).length > 0;
  }

  _search(evt) {
    const self = this;
    const q = self.shadowRoot.querySelector('#q').value;
    const qIn = self.shadowRoot.querySelector('#qIn').selected; // console.log(q);

    this.searchText = q;

    if (q) {
      // console.log(self.qIn);
      // self.q = q;
      // console.log(evt);
      this.dispatchEvent(new CustomEvent('_search', {
        detail: {
          column: qIn,
          searchFields: self.searchFields(self.columns).map(function (field) {
            return field.propertyPath;
          }),
          value: q
        }
      }));
    }
  }

}
customElements.define(TableTypeHeader.is, TableTypeHeader);