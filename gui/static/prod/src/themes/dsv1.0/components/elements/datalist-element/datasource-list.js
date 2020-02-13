import "../../../../../../node_modules/@polymer/paper-checkbox/paper-checkbox.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../../node_modules/@polymer/paper-button/paper-button.js";
import "../../../../../../node_modules/@polymer/iron-image/iron-image.js";
import { dataSourceMixin } from "../../../../../core/mixins/datasource-mixin.js";
import "./datasource-table-head.js";
import "./datasource-table-actions.js";
import "./datasource-table-footer.js";
import { DatasourceListStyles } from "./datalist-element-styles/datasource-list-css.js";
import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class DataSourceList extends dataSourceMixin(LitElement) {
  static get styles() {
    return [DatasourceListStyles, css`
        :host {
          display: block;
        }
      `];
  }

  constructor() {
    super();
    this.columns = [];
    this.cols = [];
    this.data = [];
    this.selected = [];
    this.availableSize = [10, 50, 100, 500];
  }

  render() {
    return html`
       
        <!-- view starts here -->
        ${this.createCustomElement(this.type)}
`;
  }

  static get is() {
    return 'datasource-list';
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
      cols: {
        type: Array,
        value: []
      },
      columns: {
        type: Array // value: () => [],
        // notify: true,

      },
      // todo 3 sets of same columns, can be reduced

      /**
       * If true, the pagination will be activated.
       */
      paginate: {
        type: Boolean,
        value: false
      },

      /**
       * The current page.
       */
      page: {
        type: Number // notify: true,
        // observer: '_pageChanged',

      },

      /**
       * The current size.
       */
      size: {
        type: Number // notify: true,
        // observer: '_sizeChanged',

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
      // types
      type: {
        type: String,
        value: 'table'
      },
      details: Object,

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
        type: Array // value: () => [],
        // notify: true,

      },
      title: String,
      searchText: String
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    this._loadTypeModule();
  }

  _searchReset(evt) {
    this.shadowRoot.querySelector('#q').value = "";
  }

  _loadTypeModule() {
    let typeBase = './'; // if it's a bundled build, relative path do not work

    if (window.process['env']['NODE_ENV'] === 'production') {
      typeBase = './datalist-element/';
    }

    import(typeBase + `${this.type}-type.js`).then(module => {}).catch(err => {
      //TO_DO incase import fail import table and display
      console.warn("ERROR IS.." + err);
    });
  }

  createCustomElement(type) {
    if (type == 'table') {
      return html`<table-type
        .data = ${this.data}
        .details = ${this.details}
        .columns = ${this.columns}
        .paginate = ${this.paginate}
        .page = ${this.page}
        .size = ${this.size}
        .oldpage = ${this.oldPage}
        .totalElements = ${this.totalElements} 
        .totalPages = ${this.totalPages}
        .availableSize = ${this.availableSize}
        .selectable = ${this.selectable} 
        .selected = ${this.selected}
        .title=${this.title}
        .pl=${this.pl}
        .q=${this.q}
        .searchText=${this.searchText}
        @search="${this._search}"
        @clear-search="${this._clearSearch}"
        @page-change="${this._pageChanged}"
        @export="${this._exportType}"
        @size-change="${this._sizeChanged}"
        @dropdown-filter="${this._handleInputChange}"
        ></table-type>`;
    }

    if (type == 'card') {
      return html`<card-type
        .data = ${this.data}
        .details = ${this.details}
        .columns = ${this.columns}
        .paginate = ${this.paginate}
        .page = ${this.page}
        .size = ${this.size}
        .oldpage = ${this.oldPage}
        .totalElements = ${this.totalElements} 
        .totalPages = ${this.totalPages}
        .availableSize = ${this.availableSize}
        .selectable = ${this.selectable} 
        .selected = ${this.selected}
        .title=${this.title}
        .pl=${this.pl}
        ></card-type>`;
    } //Add more types here


    if (type == 'inbox') {
      return html`<inbox-type
      .data = ${this.data}
      .details = ${this.details}
      .columns = ${this.columns}
      .paginate = ${this.paginate}
      .page = ${this.page}
      .size = ${this.size}
      .oldpage = ${this.oldPage}
      .totalElements = ${this.totalElements} 
      .totalPages = ${this.totalPages}
      .availableSize = ${this.availableSize}
      .selectable = ${this.selectable} 
      .selected = ${this.selected}
      .title=${this.title}
      ></inbox-type>`;
    }

    if (type == 'staffprofile') {
      return html`<staffprofile-type
      .data = ${this.data}
      .details = ${this.details}
      .columns = ${this.columns}
      .paginate = ${this.paginate}
      .page = ${this.page}
      .size = ${this.size}
      .oldpage = ${this.oldPage}
      .totalElements = ${this.totalElements} 
      .totalPages = ${this.totalPages}
      .availableSize = ${this.availableSize}
      .selectable = ${this.selectable} 
      .selected = ${this.selected}
      .title=${this.title}
      @do-service="${this._doService}"
      ></staffprofile-type>`;
    }

    if (type == 'contact') {
      return html`<contact-type
    .data = ${this.data}
    .details = ${this.details}
    .columns = ${this.columns}
    .paginate = ${this.paginate}
    .page = ${this.page}
    .size = ${this.size}
    .oldpage = ${this.oldPage}
    .totalElements = ${this.totalElements} 
    .totalPages = ${this.totalPages}
    .availableSize = ${this.availableSize}
    .selectable = ${this.selectable} 
    .selected = ${this.selected}
    .title=${this.title}
    ></contact-type>`;
    }
  }

  searchFields(columns) {
    return columns.filter(function (item) {
      return item.filter;
    });
  }

  _handleSort(evt) {
    console.log(evt);
  }

  _handleInputChange(evt) {
    // console.log(evt);
    this.dispatchEvent(new CustomEvent('dropdown-filter', {
      detail: {
        path: evt.detail.path,
        value: evt.detail.value
      }
    }));
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

  _doService(evt) {
    const self = this;

    self.pl._dialog(evt.detail.service, self.params);
  }

  _exportType(evt) {
    const type = evt.detail.type;
    this.dispatchEvent(new CustomEvent('export', {
      detail: {
        type: type
      }
    }));
  }

  _pageChanged(evt) {
    const page = evt.detail.page;
    const oldPage = evt.detail.oldPage;

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
    const oldSize = evt.detail.size;

    if (oldSize !== undefined) {
      this.dispatchEvent(new CustomEvent('size-change', {
        detail: {
          oldSize: oldSize,
          size: size
        }
      }));
    }

    this.size = size;
  }

  _extractData(rowData, columnProperty) {
    if (columnProperty) {
      // TODO this is support for accessing sub-property paths like man.head.nose, not needed
      const splittedProperties = columnProperty.split('.');

      if (splittedProperties.length > 1) {
        return splittedProperties.reduce((prevRow, property) => {
          if (typeof prevRow === 'string' && rowData[prevRow] && rowData[prevRow][property]) {
            return rowData[prevRow][property];
          }

          return prevRow[property] || '';
        });
      }

      return rowData[columnProperty];
    }

    return null;
  }

  _selectChange(event) {
    let localTarget;

    if (event.type && event.type === 'change') {
      localTarget = Polymer.dom(event).localTarget;
    } else {
      localTarget = event;
    }

    const tr = Polymer.dom(localTarget).parentNode.parentNode;
    const rowData = localTarget.rowData;
    const rowId = localTarget.rowIndex;

    if (localTarget.checked) {
      this.push('selected', rowData['id']);
      tr.classList.add('selected');
    } else {
      this.splice('selected', this.selectedRows.indexOf(rowData['id']), 1);
      tr.classList.remove('selected');
    }
    /**
         *
         * Fired when a row is selected.
         * @event selection-changed
         * Event param: {{node: Object}} detail Contains selected id and row data.
         */
    // todo this.fire('selection-changed', eventData);

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
    this.dispatchEvent(new CustomEvent('clear-search', {
      detail: {
        searchFields: event.detail.searchFields
      }
    }));
  }

}
customElements.define(DataSourceList.is, DataSourceList);