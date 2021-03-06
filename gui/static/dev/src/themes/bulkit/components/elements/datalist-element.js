import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import "../../../../../node_modules/@polymer/paper-button/paper-button.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { SharedStyles } from "../../styles/shared-styles.js";
import "./datalist-element/datasource-list.js";
import "./datalist-element/loader-element.js";
import { DataListElementBase } from "../../../../elements/base/datalist-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DataListElement extends DataListElementBase {
  constructor() {
    super();
  }

  renderDefault() {
    // TODO convert to li-html svg tag
    const emptyStateSvg = html`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 415.998 415.998" style="enable-background:new 0 0 415.998 415.998;" xml:space="preserve" width="100px" height="100px"><g><g>
	<g>
		<rect x="111.999" y="176" width="192" height="16" data-original="#000000" class="active-path" data-old_color="#000000" fill="#ADADAD"/>
	</g>
</g><g>
	<g>
		<rect x="111.999" y="224" width="192" height="16" data-original="#000000" class="active-path" data-old_color="#000000" fill="#ADADAD"/>
	</g>
</g><g>
	<g>
		<rect x="111.999" y="272" width="192" height="16" data-original="#000000" class="active-path" data-old_color="#000000" fill="#ADADAD"/>
	</g>
</g><g>
	<g>
		<rect x="111.999" y="320" width="96" height="16" data-original="#000000" class="active-path" data-old_color="#000000" fill="#ADADAD"/>
	</g>
</g><g>
	<g>
		<circle cx="208.239" cy="48" r="12" data-original="#000000" class="active-path" data-old_color="#000000" fill="#ADADAD"/>
	</g>
</g><g>
	<g>
		<path d="M367.998,95.999c0-17.673-14.326-32-31.999-32h-44.424c-5.926-6.583-13.538-11.62-22.284-14.136    c-7.367-2.118-13.037-7.788-15.156-15.155C248.37,14.664,229.897,0,207.998,0c-21.898,0-40.37,14.663-46.134,34.706    c-2.122,7.376-7.806,13.039-15.182,15.165c-8.736,2.518-16.341,7.55-22.262,14.128H79.999c-17.674,0-32,14.327-32,32v287.999    c0,17.673,14.326,32,32,32c73.466,0,163.758,0,256,0c17.674,0,32-14.327,32-32C367.999,293.119,367.998,206.096,367.998,95.999z     M128,95.741c0.11-14.066,9.614-26.606,23.113-30.496c12.71-3.662,22.477-13.426,26.127-26.116    C181.157,25.51,193.805,16,207.998,16c14.194,0,26.842,9.51,30.758,23.13c3.652,12.698,13.413,22.459,26.111,26.11    c13.618,3.917,23.13,16.566,23.13,30.758v16H128V95.741z M335.999,399.998c-85.455,0-170.77,0-256,0c-8.823,0-16-7.178-16-16    V95.999c0-8.822,7.177-16,16-16h34.742c-1.73,4.892-2.698,10.143-2.74,15.617v32.383h191.998v-32c0-5.615-0.992-10.991-2.764-16    h34.764c8.822,0,15.999,7.178,15.999,16c0,45.743-0.001,260.254,0.002,287.999C351.999,392.82,344.822,399.998,335.999,399.998z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#ADADAD"/>
	</g>
</g></g> </svg>
    `;
    return html`
    ${SharedStyles}
  <style>
  button{
    cursor: pointer;
  }
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
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-container{
    padding: 30px;
  }
  .page-container .page-content{
    padding: 10px 0 0 0;
  }
  .page-container .page-content p{
    font-size: 20px;
    font-weight: bolder;
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
        <button @click = "${this.refresh}" class="export-button">
          <iron-icon icon="icons:refresh"></iron-icon>
        </button>
      </div>
      ${this.loading ? html`
  <loader-element></loader-element>
` : html`
        ${this.empty ? html`
    <div class="wrapper">
      <div class="page-container">
        <div class="page-icon center">
        ${emptyStateSvg}
        </div>
        <div class="page-content">
          <p class="has-text-center center">Sorry.. There is no data to display</p>
        </div>
      </div>
    </div>
  ` : html`
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
      `}
`}
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

  onLoadData(dsc) {
    super.onLoadData(dsc);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(DataListElement.is, DataListElement);