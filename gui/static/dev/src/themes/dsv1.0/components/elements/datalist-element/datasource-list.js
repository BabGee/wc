import "../../../../../../node_modules/@polymer/paper-checkbox/paper-checkbox.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../../node_modules/@polymer/paper-button/paper-button.js";
import "../../../../../../node_modules/@polymer/iron-image/iron-image.js";
import { dataSourceMixin } from "../../../../../core/mixins/datasource-mixin.js";
import "./datasource-table-head.js";
import "./datasource-table-actions.js";
import "./datasource-table-footer.js"; //  import './table-type';
//  import './card-type';

import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class DataSourceList extends dataSourceMixin(LitElement) {
  static get styles() {
    return css`
    :host {
                display: block;
            }

            /* -- import Roboto Font ---------------------------- */
            @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 100;
                font-display: swap;
                src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOiCnqEu92Fr1Mu51QrEzQdKg.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 300;
                font-display: swap;
                src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc-CsE.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 400;
                font-display: swap;
                src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xMIzc.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc-CsE.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 700;
                font-display: swap;
                src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic-CsE.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 900;
                font-display: swap;
                src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc-CsE.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 100;
                font-display: swap;
                src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1MmgVxMIzc.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fABc9.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxP.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fABc9.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfABc9.ttf) format('truetype');
            }

            @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 900;
                font-display: swap;
                src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfABc9.ttf) format('truetype');
            }

            /* -- You can use this tables in Bootstrap (v3) projects. -- */
            /* -- Box model ------------------------------- */
            *,
            *:after,
            *:before {
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }

            /* -- Demo style ------------------------------- */
            html,
            body {
                position: relative;
                min-height: 100%;
                height: 100%;
            }

            html {
                position: relative;
                overflow-x: hidden;
                margin: 16px;
                padding: 0;
                min-height: 100%;
                font-size: 62.5%;
            }

            body {
                font-family: "RobotoDraft", "Roboto", "Helvetica Neue, Helvetica, Arial", sans-serif;
                font-style: normal;
                font-weight: 300;
                font-size: 1.4rem;
                line-height: 2rem;
                letter-spacing: 0.01rem;
                color: #212121;
                background-color: #f5f5f5;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-rendering: optimizeLegibility;
            }

            #demo {
                margin: 20px auto;
                max-width: 960px;
            }

            #demo h1 {
                font-size: 2.4rem;
                line-height: 3.2rem;
                letter-spacing: 0;
                font-weight: 300;
                color: #212121;
                text-transform: inherit;
                margin-bottom: 1rem;
                text-align: center;
            }

            #demo h2 {
                font-size: 1.5rem;
                line-height: 2.8rem;
                letter-spacing: 0.01rem;
                font-weight: 400;
                color: #212121;
                text-align: center;
            }


   
    `;
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
        <style>
            

        .topnav {
          overflow: hidden;
          /*background-color: #ffffff;*/
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
  
      }
  
      .topnav .search-container {
          display: inline-block;
      }
  
      .topnav input[type=text] {
          padding: 12px;
          margin-top: 8px;
          margin-bottom: 8px;
          background-color: #f5f5f5;
          color: #606060;
          font-size: 14px;
          border: none;
          width: 600px;
      }
  
      .topnav .search-container button {
          padding: 12px;
          margin-top: 8px;
          margin-bottom: 8px;
          color: #FFFFFF;
          background-color: var(--app-default-color);
          font-size: 14px;
          border: none;
          cursor: pointer;
  
      }
  
      .topnav .search-container button:hover {
          background: #ccc;
      }
  
      @media screen and (max-width: 790px) {
          .topnav {
              overflow: hidden;
              background-color: #ffffff;
              width: 100%;
              display: contents;
              justify-content: normal;
              align-items: normal;
  
          }
  
          .topnav .search-container {
              display: inline-block;
          }
  
          .topnav .search-container {
              display: contents;
              width: 100%;
              float: none;
          }
  
          .topnav a, .topnav input[type=text], .topnav .search-container button {
              float: none;
              display: block;
              text-align: left;
              width: 100%;
              margin: 0;
              padding: 14px;
          }
  
          .topnav input[type=text] {
              border: 1px solid #ccc;
          }
  
        </style>
            <!-- view starts here -->
            
            ${this._viewType(this.type) ? this.createCustomElement(this.type) : html`
            <!--fallback to table-->

            <table-type
            .data = ${this.data}
            .details = ${this.details}
            .columns = ${this.columns}></table-type>

            
            `}

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

  firstUpdated(changedProperties) {}

  _searchReset(evt) {
    this.shadowRoot.querySelector('#q').value = "";
  }

  _viewType(type) {
    const table = './table-type.js';

    if (!(type == null) || !(type == undefined) || !(type == '')) {
      import(`./${type}-type.js`).then(module => {}).catch(err => {
        //TO_DO incase import fail import table and display
        console.warn("ERROR IS.." + err);
      });
      return true;
    } else {
      //  //the fallback to table
      import(table).then(module => {}).catch(err => {
        console.warn("ERROR IS.." + err);
      });
      return false;
    }
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