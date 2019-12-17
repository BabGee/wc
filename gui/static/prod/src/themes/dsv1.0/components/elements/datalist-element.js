import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/paper-button/paper-button.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "./datalist-element/datasource-list.js";
import { DataListElementBase } from "../../../../elements/base/datalist-element.js";
import "./datalist-element/loader-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DataListElement extends DataListElementBase {
  constructor() {
    super();
    this.searchText = '';
  }

  renderDefault() {
    return html`
    ${this.loading ? html`<loader-element></loader-element>` : html`
    <datasource-list
                        id="dt"
                        paginate
                        .selectable="${this.selectable}"
                        filters
                        .details="${this.e.details}"
                        .pl="${this.pl}"
                        .data="${this.data}"
                        .page="${this.page}"
                        .q="${this.q}"
                        .columns="${this.columns}"
                        .cols="${this.cols}"
                        .size="${this.limit}"
                        .title="${this.title}"
                        toggle-columns="${this.toggleColumns}"
                        .searchText = "${this.searchText}"
                        
                        @sort="${this._handleSort}"
                        @filter="${this._handleFilter}"
                        @search="${this._handleSearch}"
                        @clear-search="${this._handleClearSearch}"
                        @dropdown-filter="${this._handleDFilter}"
                        @filter-th-content="${this._handleFilterTh}"
                        @filter-date-range="${this._handleDateRangeChange}"
                        @selection-changed="${this._handleSelectionChanged}"
                        @page-change="${this._handlePageChanged}"
                        @size-change="${this._handleLimitChanged}"
                        @export="${this._handleExport}"
                        
                        selected-rows=${this.selectedRows}
                        .totalElements="${this.totalElements}"
                        .type="${this._validateType(this.e.details)}"
                        .availableSize="${this._validatePageLimits(this.e.details)}"
                        .totalPages="${this.totalPages}">
                </datasource-list>
    `}
                `;
  }

  static get properties() {
    return {
      table: {
        type: Boolean,
        value: true
      },
      grid: {
        type: Boolean,
        value: false
      },
      list: {
        type: Boolean,
        value: false
      },
      sortProperty: {
        type: String
      },
      selectedRows: {
        type: Array,
        value: []
      },
      showActions: {
        type: Boolean,
        value: false,
        notify: true
      },
      searchText: String
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  _switchView(event) {
    const sel = event.currentTarget.selected;

    if (sel === 0) {
      this.table = true;
      this.list = false;
      this.grid = false;
    } else if (sel === 1) {
      this.table = false;
      this.list = true;
      this.grid = false;
    } else if (sel === 2) {
      this.table = false;
      this.list = false;
      this.grid = true;
    }
  }
  /**
   * General and per column search event handler
   *
   *
   * @param event
   * @private
   */


  _handleSearch(event) {
    var filter = event.detail.value;
    var column = event.detail.column;
    var columns = event.detail.searchFields;
    this.searchText = filter; // console.log(columns);
    // delete any previous column and general search query

    this.deleteParamKeys(columns.concat(['q']), false); // update new search query param

    this.updateParams(column, filter);
  }

  _handleClearSearch(event) {
    this.searchText = "";
    var columns = event.detail.searchFields; // delete any previous column and general search query

    this.deleteParamKeys(columns.concat(['q']), true);
  }

  _handleDateRangeChange(event) {
    var filter = event.detail.range;
    this.$.datasource.mergeParams(filter);
  }

  _handleSelectionChanged(event) {
    if (event.detail.selected) {
      // event.detail.selected
      // event.detail.data
      this.actionRow = event.detail.data;
      this.showActions = true;
    } else {
      // event.detail.deselected
      this.showActions = false;
    }
  }

  _handleExport(event) {
    event.detail.type == 'pdf' ? this.generatePDF() : this.generateCSV();
  }

}

customElements.define(DataListElement.is, DataListElement);