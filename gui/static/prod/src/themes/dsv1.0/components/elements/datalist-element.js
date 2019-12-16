import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../../../../node_modules/@polymer/paper-button/paper-button.js";import"../../../../../node_modules/@polymer/iron-icon/iron-icon.js";import"./datalist-element/datasource-list.js";import{DataListElementBase}from"../../../../elements/base/datalist-element.js";import"./datalist-element/loader-element.js";class DataListElement extends DataListElementBase{constructor(){super();this.searchText=""}renderDefault(){return html`
    ${this.loading?html`<loader-element></loader-element>`:html`
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
                `}static get properties(){return{table:{type:Boolean,value:!0},grid:{type:Boolean,value:!1},list:{type:Boolean,value:!1},sortProperty:{type:String},selectedRows:{type:Array,value:[]},showActions:{type:Boolean,value:!1,notify:!0},searchText:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_switchView(event){const sel=event.currentTarget.selected;if(0===sel){this.table=!0;this.list=!1;this.grid=!1}else if(1===sel){this.table=!1;this.list=!0;this.grid=!1}else if(2===sel){this.table=!1;this.list=!1;this.grid=!0}}_handleSearch(event){var filter=event.detail.value,column=event.detail.column,columns=event.detail.searchFields;this.searchText=filter;this.deleteParamKeys(columns.concat(["q"]),!1);this.updateParams(column,filter)}_handleClearSearch(event){this.searchText="";var columns=event.detail.searchFields;this.deleteParamKeys(columns.concat(["q"]),!0)}_handleDateRangeChange(event){var filter=event.detail.range;this.$.datasource.mergeParams(filter)}_handleSelectionChanged(event){if(event.detail.selected){this.actionRow=event.detail.data;this.showActions=!0}else{this.showActions=!1}}_handleExport(event){"pdf"==event.detail.type?this.generatePDF():this.generateCSV()}}customElements.define(DataListElement.is,DataListElement);