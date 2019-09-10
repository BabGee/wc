import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import "../../../../../node_modules/@polymer/paper-button/paper-button.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { SharedStyles } from "../../styles/shared-styles.js";
import "./datalist-element/datasource-list.js";
import { DataListElementBase } from "../../../../elements/base/datalist-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DataListElement extends DataListElementBase {
  constructor() {
    super();
  }

  render() {
    return html`

 ${SharedStyles}
<style>
.table-title{
  display: inline-block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.export-button{
margin-block-start: 0.83em; 
margin-left: 10px;
background: var(--app-default-color); 
color:white;border:0; float:right;
border-radius: 5px;
}

</style>


 <div class="column">
<div class="field">


                 <div>
                  <span class="table-title"> ${this.title} </span>
                  
                <button  @click="${this.generatePDF}" class="export-button">
                  <iron-icon icon="icons:save"></iron-icon>Pdf
                </button>
                <button @click="${this.generateCSV}" class="export-button">
                  <iron-icon icon="icons:save"></iron-icon>Csv
                  </button>
            </div>
            

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
                        toggle-columns="${this.toggleColumns}"
                        
                        @sort="${this._handleSort}"
                        @filter="${this._handleFilter}"
                        @search="${this._handleSearch}"
                        @dropdown-filter="${this._handleDFilter}"
                        @filter-th-content="${this._handleFilterTh}"
                        @filter-date-range="${this._handleDateRangeChange}"
                        @selection-changed="${this._handleSelectionChanged}"
                        @page-change="${this._handlePageChanged}"
                        @size-change="${this._handleLimitChanged}"
                        
                        selected-rows=${this.selectedRows}
                        .totalElements="${this.totalElements}"
                        .type="${this._validateType(this.e.details)}"
                        .availableSize="${this._validatePageLimits(this.e.details)}"
                        .totalPages="${this.totalPages}">
                </datasource-list>
</div>
</div>
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
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  _hideColumn(event) {
    var property = event.currentTarget.columnProperty;
    this.$.dt.toggleColumn(property);
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
    var columns = event.detail.searchFields; // console.log(columns);
    // delete any previous column and general search query

    this.deleteParamKeys(columns.concat(['q']), false); // update new search query param

    this.updateParams(column, filter);
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

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(DataListElement.is, DataListElement);