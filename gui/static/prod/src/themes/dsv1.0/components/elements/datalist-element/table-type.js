import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "./datasource-table-head.js";
import "./datasource-table-actions.js";
import "./datasource-table-footer.js";
import "../../../../../../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../../../../../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";
import "../../../../../../node_modules/@polymer/paper-item/paper-item.js";
import "../../../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../../../../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import "../../../../../../node_modules/@polymer/iron-image/iron-image.js";
import "./table-type-header.js";
import { TableStyles } from "../../../styles/table-type.js";
import { TableTypeStyles } from "./datalist-element-styles/table-type-css.js";
export class TableType extends LitElement {
  constructor() {
    super();
    this.columns = [];
    this.cols = [];
    this.data = [];
    this.selected = [];
    this.availableSize = [10, 50, 100, 500];
  }

  static get styles() {
    return [TableStyles, TableTypeStyles, css`
            :host {
              display: block;
            }
          `];
  }

  render() {
    return html`
      
      <!-- Responsive table starts here -->
<!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->
<table-type-header 
    .title="${this.title}"
    .columns="${this.columns}"
    .searchText="${this.searchText}"
    @export-type="${this._exportType}"
    @_search="${this._search}"
    @_clearSearch="${this._clearSearch}"
    >
</table-type-header>
<div class="table-container">
      <table class="dt-table" cellspacing="0">
        <thead>
            <tr>
            ${this.columns.map(column => html`
            <th style="" scope="col">
                <datasource-table-head
                        .column="${column}"
                        sort-direction$="[[column.sortDirection]]"
                        @input-change-th-content="${this._handleInputChange}"
                        sorted$="[[column.sorted]]"
                        sortable$="[[column.sortable]]"
                        @sort-th-content="${this._handleSort}">
                </datasource-table-head>
            </th>
            `)}
            </tr>
        </thead>

        <tbody>
        ${this.data.map((row, rowIndex) => html`
            <tr>
            ${this.columns.map((column, columnIndex) => html`
                <td data-label= ${column}>${this.renderColumn(column, row[column.property], columnIndex, row, rowIndex)}</td>
            `)}
            </tr>
        `)}
        </tbody>
      </table>
</div>

${this.paginate ? html`
      <datasource-table-footer resources="${this.resources}"
                             language="${this.language}"
                             footer-position="${this.footerPosition}"
                             .availableSize="${this.availableSize}"
                             .totalPages="${this.totalPages}"
                             .totalElements="${this.totalElements}"
                             .oldPage="${this.oldPage}"
                             
                             size="${this.size}"
                             page="${this.page}"
                             
                             @size-change="${this._sizeChanged}"
                             @p-page="${this._pageChanged}"
                             @n-page="${this._pageChanged}">
      </datasource-table-footer>
      ` : html``}


  `;
  }

  static get is() {
    return 'table-type';
  }

  renderColumn(paperDatatableApiColumn, valueFromRowData, p, rowData, rowIndex) {
    if (paperDatatableApiColumn.actions) {
      return html`
        
        <datasource-table-actions
        .cols=${this.cols}
        .pl=${this.pl}
        .item=${rowData}
        ></datasource-table-actions>
        
        `;
    } else if (this.selectable && p === 0) {
      return html`
        <paper-checkbox
        .rowData=${rowData}
        .rowIndex=${rowIndex}
        ></paper-checkbox>
        `;
    } else {
      try {
        // todo possible optimization point, should probably be a column type
        // test using jsPerf
        let columnValue = valueFromRowData;
        var dJson; // = JSON.parse(columnValue);

        if (typeof columnValue == 'object') {
          dJson = columnValue;
        } else {
          dJson = JSON.parse(columnValue); // skip boolean and number columns

          if (typeof dJson != 'object') {
            throw 'Not Object JSON';
          }
        }

        const vs = [];

        for (var property in dJson) {
          // if (dJson.hasOwnProperty(property)) {
          vs.push(html`<div style="margin-top:0.1px;"><strong>${property}: </strong><span>${dJson[property]}</span></div>`); // }
        }

        return html`
          ${vs.map(v => html` ${v}<br>`)}`;
      } catch (e) {
        switch (paperDatatableApiColumn.type) {
          case 'boolean':
            return html`
              ${String(valueFromRowData).toLowerCase() == 'false' ? html`
              <iron-icon icon="icons:close"></iron-icon>
              ` : html`
              <iron-icon icon="icons:check"></iron-icon>
              `}
              
              `;
            break;
          // todo OPTIMIZATION - parse types for only values to be displayed and not in
          // dsc service command
          // i.e date, time, datetime

          default:
            return html`${valueFromRowData}`;
        }
      }
    }
  }

  static get properties() {
    return {
      /**
           * Contains the data which will be displayed in the table.
           */
      data: {
        type: Array,
        notify: true
      },
      q: {
        type: String,
        value: '',
        notify: true
      },
      pl: Object,
      details: Object,
      columns: {
        type: Array // value: () => [],
        // notify: true,

      },
      paginate: {
        type: Boolean,
        value: false
      },
      page: {
        type: Number
      },
      size: {
        type: Number
      },

      /**
           * The number of the previous page
           */
      oldPage: {
        type: Number,
        notify: true
      },

      /**
           * The total of elements have to be provided in case of pagination, it is mandatory.
           */
      totalElements: Number,

      /**
           * The total of pages have to be provided in case of pagination, it is mandatory.
           * It is used to compute the footer.
           */
      totalPages: Number,

      /**
           * The available size in case of pagination.
           */
      availableSize: Array,

      /**
           * If true, the rows may be selectable.
           */
      selectable: {
        type: Boolean,
        value: false
      },

      /**
           * Contains the positions of selected columns.
           * Can contain a specific data if selectableDataKey is setted.
           */
      selected: {
        type: Array
      },
      title: String,
      searchText: String
    };
  }

  firstUpdated(changedProperties) {// console.log("DATA is..."+this.data +"COLUMNS is..."+this.columns);
  }

  _handleSort(evt) {
    console.log(evt);
  }

  _exportType(evt) {
    const type = evt.detail.type;
    this.dispatchEvent(new CustomEvent('export', {
      detail: {
        type: type
      }
    }));
  }

  _handleInputChange(evt) {
    // console.log(evt);
    this.dispatchEvent(new CustomEvent('dropdown-filter', {
      detail: {
        path: evt.detail.column.propertyPath,
        value: evt.detail.value
      }
    }));
  }

  searchFields(columns) {
    return columns.filter(function (item) {
      return item.filter;
    });
  }

  _searchFieldsExist(columns) {
    return columns.filter(function (item) {
      return item.filter;
    }).length > 0;
  }

  _action(evt) {
    const dataAction = evt.currentTarget.dataLink;

    this.pl._dialog(dataAction.service, dataAction.params);
  }

  _pageChanged(evt) {
    const page = evt.detail.page;
    const oldPage = this.page;

    if (oldPage !== undefined) {
      this.dispatchEvent(new CustomEvent('page-change', {
        detail: {
          oldPage: oldPage,
          page: page
        }
      }));
    }

    this.page = page;
  }

  _sizeChanged(evt) {
    const size = evt.detail.size;
    const oldSize = this.size;

    if (oldSize !== undefined) {
      this.dispatchEvent(new CustomEvent('size-change', {
        detail: {
          oldSize: oldSize,
          size: size
        }
      }));
    }

    this.size = size;
  } // _extractData(rowData, columnProperty) {
  //   if (columnProperty) {
  //     // TODO this is support for accessing sub-property paths like man.head.nose, not needed
  //     const splittedProperties = columnProperty.split('.');
  //     if (splittedProperties.length > 1) {
  //       return splittedProperties.reduce((prevRow, property) => {
  //         if (typeof prevRow === 'string' && rowData[prevRow] && rowData[prevRow][property]) {
  //           return rowData[prevRow][property];
  //         }
  //         return prevRow[property] || '';
  //       });
  //     }
  //     return rowData[columnProperty];
  //   }
  //   return null;
  // }


  _selectChange(event) {
    let localTarget;

    if (event.type && event.type === 'change') {
      localTarget = Polymer.dom(event).localTarget;
    } else {
      localTarget = event;
    } //   const tr = Polymer.dom(localTarget).parentNode.parentNode;
    //   const rowData = localTarget.rowData;
    //   const rowId = localTarget.rowIndex;
    //   if (localTarget.checked) {
    //     this.push('selected', rowData['id']);
    //     tr.classList.add('selected');
    //   } else {
    //     this.splice('selected', this.selectedRows.indexOf(rowData['id']), 1);
    //     tr.classList.remove('selected');
    //   }
    //   /**
    //        *
    //        * Fired when a row is selected.
    //        * @event selection-changed
    //        * Event param: {{node: Object}} detail Contains selected id and row data.
    //        */
    //   // todo this.fire('selection-changed', eventData);
    // }

  }

  _searchReset(evt) {
    this._clearSearch();
  }

  _search(evt) {
    var filter = evt.detail.value;
    var column = evt.detail.column;
    var columns = evt.detail.searchFields;
    this.dispatchEvent(new CustomEvent('search', {
      detail: {
        column: column,
        searchFields: columns,
        value: filter
      }
    }));
  }

  _clearSearch(event) {
    var columns = event.detail.searchFields;
    this.dispatchEvent(new CustomEvent('clear-search', {
      detail: {
        searchFields: columns
      }
    }));
  }

}
customElements.define(TableType.is, TableType);