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
            

        </style>
        ${this._searchFieldsExist(this.columns) ? html`
        
            <div class="topnav">
                <div class="search-container">

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
                                 id="q"></paper-input>

                    <button type="submit" @click="${this._search}">Search</button>

                </div>
            </div>        
            ` : html``}

            <!-- view starts here -->
            
            ${this._viewType(this.type) ? this.createCustomElement(this.type) : html`
            <!--fallback to table-->

            <table-type
            .data = ${this.data}
            .details = ${this.details}
            .columns = ${this.columns}></table-type>

            
            `}
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

      }
    };
  }

  firstUpdated(changedProperties) {}

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
        .columns = ${this.columns}></table-type>`;
    }

    if (type == 'card') {
      return html`<card-type
        .data = ${this.data}
        .details = ${this.details}
        .columns = ${this.columns}></card-type>`;
    } //Add more types here


    if (type == 'inbox') {
      return html`<inbox-type
      .data = ${this.data}
      .details = ${this.details}
      .columns = ${this.columns}></inbox-type>`;
    }

    if (type == 'staffprofile') {
      return html`<staffprofile-type
      .data = ${this.data}
      .details = ${this.details}
      .columns = ${this.columns}></staffprofile-type>`;
    }

    if (type == 'contact') {
      return html`<contact-type
    .data = ${this.data}
    .details = ${this.details}
    .columns = ${this.columns}></contact-type>`;
    }
  }

  _handleSort(evt) {
    console.log(evt);
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
    const self = this;
    const q = self.shadowRoot.querySelector('#q').value;
    const qIn = self.shadowRoot.querySelector('#qIn').selected; // console.log(q);

    if (q) {
      // console.log(self.qIn);
      // self.q = q;
      // console.log(evt);
      this.dispatchEvent(new CustomEvent('search', {
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
customElements.define(DataSourceList.is, DataSourceList);