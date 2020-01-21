import{LitElement,css,html,dataSourceMixin,DataListElementBase}from"../../../../components/adaptive-ui.js";class DataSourceList extends dataSourceMixin(LitElement){static get styles(){return css`
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


   
    `}constructor(){super();this.columns=[];this.cols=[];this.data=[];this.selected=[];this.availableSize=[10,50,100,500]}render(){return html`
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
        ${this.createCustomElement(this.type)}
`}static get is(){return"datasource-list"}static get properties(){return{/**
       * Contains the data which will be displayed in the table.
       */data:{type:Array,notify:!0},q:{type:String,value:"",notify:!0},cols:{type:Array,value:[]},columns:{type:Array// value: () => [],
// notify: true,
},// todo 3 sets of same columns, can be reduced
/**
       * If true, the pagination will be activated.
       */paginate:{type:Boolean,value:!1},/**
       * The current page.
       */page:{type:Number// notify: true,
// observer: '_pageChanged',
},/**
       * The current size.
       */size:{type:Number// notify: true,
// observer: '_sizeChanged',
},/**
       * The number of the previous page
       */oldPage:{type:Number,notify:!0},/**
       * The total of elements have to be provided in case of pagination, it is mandatory.
       */totalElements:Number,/**
       * The total of pages have to be provided in case of pagination, it is mandatory.
       * It is used to compute the footer.
       */totalPages:Number,/**
       * The available size in case of pagination.
       */availableSize:Array,// types
type:{type:String,value:"table"},details:Object,/**
       * If true, the rows may be selectable.
       */selectable:{type:Boolean,value:!1},/**
       * Contains the positions of selected columns.
       * Can contain a specific data if selectableDataKey is setted.
       */selected:{type:Array// value: () => [],
// notify: true,
},title:String,searchText:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this._loadTypeModule()}_searchReset(evt){this.shadowRoot.querySelector("#q").value=""}_loadTypeModule(){let typeBase="./";// if it's a bundled build, relative path do not work
if("production"===window.process.env.NODE_ENV){typeBase="./datalist-element/"}import(typeBase+`${this.type}-type.js`).then(module=>{}).catch(err=>{//TO_DO incase import fail import table and display
console.warn("ERROR IS.."+err)})}createCustomElement(type){if("table"==type){return html`<table-type
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
        ></table-type>`}if("card"==type){return html`<card-type
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
        ></card-type>`}//Add more types here
if("inbox"==type){return html`<inbox-type
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
      ></inbox-type>`}if("staffprofile"==type){return html`<staffprofile-type
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
      ></staffprofile-type>`}if("contact"==type){return html`<contact-type
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
    ></contact-type>`}}searchFields(columns){return columns.filter(function(item){return item.filter})}_handleSort(evt){console.log(evt)}_handleInputChange(evt){// console.log(evt);
this.dispatchEvent(new CustomEvent("dropdown-filter",{detail:{path:evt.detail.path,value:evt.detail.value}}))}_searchFieldsExist(columns){return 0<columns.filter(function(item){return item.filter}).length}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}_doService(evt){const self=this;self.pl._dialog(evt.detail.service,self.params)}_exportType(evt){const type=evt.detail.type;this.dispatchEvent(new CustomEvent("export",{detail:{type:type}}))}_pageChanged(evt){const page=evt.detail.page,oldPage=evt.detail.oldPage;if(oldPage!==void 0){this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:oldPage,page:page}}))}this.page=page}_sizeChanged(evt){const size=evt.detail.size,oldSize=evt.detail.size;if(oldSize!==void 0){this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:oldSize,size:size}}))}this.size=size}_extractData(rowData,columnProperty){if(columnProperty){// TODO this is support for accessing sub-property paths like man.head.nose, not needed
const splittedProperties=columnProperty.split(".");if(1<splittedProperties.length){return splittedProperties.reduce((prevRow,property)=>{if("string"===typeof prevRow&&rowData[prevRow]&&rowData[prevRow][property]){return rowData[prevRow][property]}return prevRow[property]||""})}return rowData[columnProperty]}return null}_selectChange(event){let localTarget;if(event.type&&"change"===event.type){localTarget=Polymer.dom(event).localTarget}else{localTarget=event}const tr=Polymer.dom(localTarget).parentNode.parentNode,rowData=localTarget.rowData,rowId=localTarget.rowIndex;if(localTarget.checked){this.push("selected",rowData.id);tr.classList.add("selected")}else{this.splice("selected",this.selectedRows.indexOf(rowData.id),1);tr.classList.remove("selected")}/**
           *
           * Fired when a row is selected.
           * @event selection-changed
           * Event param: {{node: Object}} detail Contains selected id and row data.
           */ // todo this.fire('selection-changed', eventData);
}_search(evt){var filter=evt.detail.value,column=evt.detail.column,columns=evt.detail.searchFields;this.dispatchEvent(new CustomEvent("search",{detail:{column:column,searchFields:columns,value:filter}}))}_clearSearch(event){this.dispatchEvent(new CustomEvent("clear-search",{detail:{searchFields:event.detail.searchFields}}))}}customElements.define(DataSourceList.is,DataSourceList);var datasourceList={DataSourceList:DataSourceList};class DataListElement extends DataListElementBase{constructor(){super();this.searchText=""}renderDefault(){return html`
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
                `}static get properties(){return{table:{type:Boolean,value:!0},grid:{type:Boolean,value:!1},list:{type:Boolean,value:!1},sortProperty:{type:String},selectedRows:{type:Array,value:[]},showActions:{type:Boolean,value:!1,notify:!0},searchText:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_switchView(event){const sel=event.currentTarget.selected;if(0===sel){this.table=!0;this.list=!1;this.grid=!1}else if(1===sel){this.table=!1;this.list=!0;this.grid=!1}else if(2===sel){this.table=!1;this.list=!1;this.grid=!0}}/**
     * General and per column search event handler
     *
     *
     * @param event
     * @private
     */_handleSearch(event){var filter=event.detail.value,column=event.detail.column,columns=event.detail.searchFields;this.searchText=filter;// console.log(columns);
// delete any previous column and general search query
this.deleteParamKeys(columns.concat(["q"]),!1);// update new search query param
this.updateParams(column,filter)}_handleClearSearch(event){this.searchText="";var columns=event.detail.searchFields;// delete any previous column and general search query
this.deleteParamKeys(columns.concat(["q"]),!0)}_handleDateRangeChange(event){var filter=event.detail.range;this.$.datasource.mergeParams(filter)}_handleSelectionChanged(event){if(event.detail.selected){// event.detail.selected
// event.detail.data
this.actionRow=event.detail.data;this.showActions=!0}else{// event.detail.deselected
this.showActions=!1}}_handleExport(event){"pdf"==event.detail.type?this.generatePDF():this.generateCSV()}}customElements.define(DataListElement.is,DataListElement);export{datasourceList as $datasourceList,DataSourceList};