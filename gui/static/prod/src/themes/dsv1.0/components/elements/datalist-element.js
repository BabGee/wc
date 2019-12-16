import{LitElement,html,css,dataSourceMixin,DataListElementBase}from"../../../../components/adaptive-ui.js";class DataSourceTableHead extends LitElement{render(){return html`
        <style>
            :host {
                display: block;
            }

            :host>div {
                @apply --layout-horizontal;
                @apply --layout-center;
            }

            paper-input {
                min-width: var(--paper-datatable-api-min-width-input-filter, 120px);
                
                --paper-input-container-underline-focus: {
                    display: block;
                };
                --paper-input-container-label: {
                    position: initial;
                };
                --paper-input-container: {
                    padding: 0;
                };
                --paper-input-container-input: {
                    font-size: 12px;
                };
            }
            
            paper-dropdown-menu {
                  --paper-input-container: {
                      padding: 0;
                  };
            }

            paper-icon-button {
                --paper-icon-button-hover: {
                    @apply --paper-datatable-api-header-sorted;
                };
                min-width: 36px;
                min-height: 36px;
                transition: transform .2s linear;
            }

            paper-icon-button[sortable].filter {
                color: rgba(0, 0, 0, .26);
            }

            paper-icon-button[sortable].filter.active {
                @apply --paper-datatable-api-header-sorted;
            }

            paper-icon-button.sort {
                color: rgba(0, 0, 0, .26);
            }

            paper-icon-button[sorted].sort {
                @apply --paper-datatable-api-header-sorted;
            }

            paper-icon-button.sort:not([sorted]):not([sort-direction='desc']) {
                transform: rotate(0deg);
            }

            paper-icon-button.sort[sorted]:not([sort-direction='desc']),
            paper-icon-button.sort:not([sorted]) {
                transform: rotate(180deg);
            }

            paper-menu-button {
                padding: 0;
            }

            paper-icon-button[icon="arrow-drop-down"] {
                color: rgba(0, 0, 0, .26);
            }

            iron-icon[icon="check-box"] {
                color: var(--paper-datatable-api-checked-checkbox-color, --primary-color);
            }

            iron-icon[icon="check-box-outline-blank"] {
                color: var(--paper-datatable-api-unchecked-checkbox-color, --primary-text-color);
            }

            [hidden]{
                display: none;
            }

        </style>

        <div>
             
             
             ${this.equals(this.positionSortIcon,"left")?html`
             
                          ${this.column.sortable?html`
                            <paper-icon-button icon="paper-datatable-api-icons:arrow-downward"
                                       sorted$="[[sorted]]"
                                       class="sort"
                                       on-tap="_handleSort"
                                       sort-direction$="[[sortDirection]]"></paper-icon-button>
                          
                          `:html``}
                          
                          ${this.column.filter?html`
                          ${this.column.activeFilter?html`
                              <paper-icon-button icon="paper-datatable-api-icons:clear"
                                           sortable$="[[sortable]]" class="filter active"
                                           @tap="${this._handleFilter}"></paper-icon-button>                          
                          `:html`
                          <paper-icon-button icon="paper-datatable-api-icons:search" sortable$="[[sortable]]" class="filter" @tap="${this._handleFilter}"></paper-icon-button>
                          
                          `}
                          
                          
                          `:html``} 
             
             
             `:html``}
             
             <div class="flex" @click="${this._handleFilter}">                  
                ${this.column.choices?html`
                  `:html`${this.column.header}`}
             
                  ${this.column.date?html`
                  
                  
                        <paper-item>${this.column.header}</paper-item>
                        <range-datepicker-input  on-date-from-changed="_dateFromFilter"
                                                 on-date-to-changed="_dateToFilter"
                                                 col="[[column]]"
                                                 date-format="YYYY/MM/DD">
                            <template>
                                <div class="layout horizontal center">
                                    <paper-input label="from" value="[[column.choices.0]]" readonly></paper-input>
                                    <paper-input label="to" value="[[column.choices.1]]" readonly></paper-input>
                                </div>
                            </template>
                        </range-datepicker-input>

                  
                  
                  `:html`
                  ${this.column.choices?html`
                  <paper-dropdown-menu label="${this.column.header}" style="width: 100%">
   
                      <paper-listbox horizontal-align="left"
                                     slot="dropdown-content"
                                     @iron-select="${this._handleColumnDropdownFilter}"
                                     selected="0">
                          <paper-item val="">All</paper-item>
                          ${this.column.choices.map(choice=>html`<paper-item .val=${choice}>${choice}</paper-item>`)}
                            
                      </paper-listbox>
    
                  </paper-dropdown-menu>
                  
                  `:html``}
                  
                  `}
                </div>

             ${this.equals(this.positionSortIcon,"right")?html`
              <!-- Filter icon -->
              ${this.column.filter?html`
              ${this.column.activeFilter?html`
                         <paper-icon-button icon="paper-datatable-api-icons:clear" sortable$="[[sortable]]" class="filter active"
                               on-tap="_handleFilter"></paper-icon-button>
             `:html`
             <paper-icon-button icon="paper-datatable-api-icons:search" sortable$="[[sortable]]" class="filter" on-tap="_handleFilter"></paper-icon-button>
             `}
             
             `:html``}
             
             <!-- Sort -->
             ${this.column.sortable?html`
                 <paper-icon-button icon="paper-datatable-api-icons:arrow-downward" sorted$="[[sorted]]" class="sort"
                       on-tap="_handleSort" sort-direction$="[[sortDirection]]"></paper-icon-button>             
             `:html``}
             
                          
             `:html``}

        </div>`}static get is(){return"datasource-table-head"}static get properties(){return{language:String,column:{type:Object,notify:!0,value:()=>({})},positionSortIcon:String,sortable:{type:Boolean,value:()=>!1},sorted:{type:Boolean,value:()=>!1},sortDirection:{type:String,value:()=>"asc"},previousValue:{type:String,value:()=>""},currentValue:{type:String,value:()=>""},timeoutFilter:Number,focused:{type:Boolean,value:!1},_dateFrom:Number,_dateTo:Number,dateFormat:String}}static get observers(){return["_dateChanged(_dateTo)"]}_dateChanged(){if(this._dateFrom&&this._dateTo){this.column.activeFilterValue={dateFrom:this._dateFrom,dateTo:this._dateTo};this.fire("date-input-change-th-content",{column:this.column,value:this.column.activeFilterValue})}}_displayPickerDate(dateFrom,dateTo){if(dateFrom&&dateTo){return`${dateFrom} - ${dateTo}`}return""}_handleSort(){this.dispatchEvent(new CustomEvent("sort-th-content",{detail:{column:this.column}}))}_dateFromFilter(){}_dateToFilter(evt){const picker=evt.currentTarget,x={start_date:moment.unix(picker.dateFrom).format("YYYY-MM-DD"),end_date:moment.unix(picker.dateTo).format("YYYY-MM-DD")};this.fire("filter-date-range",{range:x})}_handleFilter(){if(this.column.filter){if(this.column.activeFilter){const paperInput=this.shadowRoot.querySelector("paper-input");if(paperInput){paperInput.value=""}this.previousValue=null}this.fire("filter-th-content",{column:this.column})}}setPaperInputValue(value){this.shadowRoot.querySelector("paper-input").value=value}_handleChoiceChanged(){this.dispatchEvent(new CustomEvent("input-change-th-content",{detail:{column:this.column,value:this._selectedChoices}}))}_handleColumnDropdownFilter(evt){this.dispatchEvent(new CustomEvent("input-change-th-content",{detail:{column:this.column,value:evt.detail.item.val}}))}_handleActiveFilterChange(event){const parentDiv=event.currentTarget.parentNode;Polymer.dom.flush();this.async(()=>{let paperInput;if(!this.column.date&&!this.column.choices){paperInput=this.shadowRoot.querySelector("paper-input");if(paperInput){paperInput.focus();if(this.column.activeFilterValue){this.previousValue=this.column.activeFilterValue}}}else if(this.column.date){const datePicker=parentDiv.querySelector("range-datepicker-input");if(datePicker){if(this.column.activeFilterValue){this.previousValue=this.column.activeFilterValue}}}else{this._selectedChoices=[]}})}_handleKeyDownInput(event){const input=event.currentTarget;this.currentValue=input.value;if(this.previousValue!==this.currentValue){if(13===event.keyCode){this.fire("input-change-th-content",{column:this.column,value:this.currentValue});this.previousValue=this.currentValue}else{clearTimeout(this.timeoutFilter);this.timeoutFilter=setTimeout(()=>{if(this.previousValue!==this.currentValue){this.fire("input-change-th-content",{column:this.column,value:this.currentValue})}this.previousValue=this.currentValue},1e3)}}}equals(targetedValue,value){return value===targetedValue}_draggableClass(draggable){if(draggable){return"draggable"}return""}_isDraggable(draggableColumn,focused){if(draggableColumn&&!focused){return"true"}return"false"}_computeIconName(choice,selectedChoices){if(-1===selectedChoices.base.indexOf(choice)){return"check-box-outline-blank"}return"check-box"}}customElements.define(DataSourceTableHead.is,DataSourceTableHead);var datasourceTableHead={DataSourceTableHead:DataSourceTableHead};class DataSourceTableActions extends LitElement{render(){return html`
        <style>
            /* CSS rules for your element */
            :host {
                display: block;
                min-width: max-content;
            }
        </style>
        ${this.item.links.length?html`
        <paper-menu-button>
        <paper-icon-button icon="icons:more-vert" slot="dropdown-trigger"></paper-icon-button>
        <paper-listbox slot="dropdown-content">


        ${this.item.links.map(link=>html`
        <paper-item @click="${this._action}" 
                        .dataAction=${link} 
                        .col=${link}>
            <paper-icon-button icon=${link.icon}>
            </paper-icon-button>
            ${link.title} 
            </paper-item>

        `)}
        </paper-listbox>
      </paper-menu-button>
        
        `:html``}
        
        `}static get is(){return"datasource-table-actions"}constructor(){super();this.cols=[]}static get properties(){return{cols:{type:Array,value:[]},pl:Object,item:Object}}_action(evt){const dataAction=evt.currentTarget.dataAction;this.pl._dialog.apply(this.pl,[dataAction.service,dataAction.params])}}customElements.define(DataSourceTableActions.is,DataSourceTableActions);var datasourceTableActions={DataSourceTableActions:DataSourceTableActions};class DatasourceTableFooter extends LitElement{render(){return html`
        <style>
            :host {
              display: block;
            }
            .size{
              margin-right: 15px;
            }
            .btn{
              position: relative;
              cursor: pointer;
              top: 4px;
              left: 20px;
            }
            .right-btn::after, .left-btn::after{
              content: '';
              position: absolute;
              width: 5px;
              height: 5px;
              border-left: 2px solid #3a3a3a;
              border-bottom: 2px solid #3a3a3a;
            }
            .right-btn{
              position: relative;
            }
            .left-btn::after{
              transform: rotate(45deg);
            }
            .right-btn::after{
              left: 15px;
              transform: rotate(-135deg);
            }
            .perpage-dropdown .p-display{
              position: relative;
              cursor: pointer;
              margin: 0 15px 0 0;
            }
            .perpage-dropdown .p-display::after{
              content: '';
              position: absolute;
              right: -15px;
              top: 4px;
              width: 5px;
              height: 5px;
              border-left: 2px solid #3a3a3a;
              border-bottom: 2px solid #3a3a3a;
              transform: rotate(-45deg);
            }
            .perpage-dropdown .p-dropdown{
              width: 100%;
              background: #fff;
              border: 1px solid #e5e5e5;
              padding: 0 8px;
              display: none;
            }
            .perpage-dropdown .p-dropdown li a{
              text-align: right;
              display: inline-block;
              width: 100%;
              color: #4a4a4a;
            }
            .perpage-dropdown .p-dropdown li a:hover{
              background: #e5e5e5;
            }
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="wrapper is-flex" style="margin-top: 20px;">
          <div class="size">
          
            <div class="perpage-dropdown">
              <div class="p-display" @click=${this._dropdownReveal}>
                ${this.availableSize.length?html`
                <p class="is-capitalized is-size-7">Per Page ${this.availableSize.map(size=>html`${size}`)}</p>
                `:html`<p class="is-capitalized is-size-7">Per Page 0</p>`}
              </div>
              <div class="p-dropdown">
              <ul>
                ${this.availableSize.map(size=>html`<li><a href="$1" class="is-size-7">${size}</a></li>`)}
                
                <li><a href="$1" class="is-size-7">2</a></li>
                <li><a href="$1" class="is-size-7">3</a></li>
                <li><a href="$1" class="is-size-7">4</a></li>
                <li><a href="$1" class="is-size-7">5</a></li>
              </ul>
              </div>
            </div>
          </div>
          <div class="range">
            <div class="is-flex">
              <div class="pagination-range">
                <p class="is-size-7">${this._computeCurrentSize(this.page,this.size)} - ${this._computeCurrentMaxSize(this.page,this.size,this.totalElements)} of ${this.totalElements}</p>
              </div>
              <div class="is-flex pagination-buttons">
                <div class="left-btn btn" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}"></div>
                <div class="right-btn btn" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page,this.totalPages)}"></div>
              </div>
            </div>
          </div>
        </div>`}constructor(){super();this.availableSize=[];this.size=50}static get is(){return"datasource-table-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_dropdownReveal(){const drp=this.shadowRoot.querySelector(".p-dropdown");switch(drp.style.display){case"block":drp.style.display="none";break;default:drp.style.display="block";break;}}_computeCurrentSize(page,size){return(page-1)*size+1}_computeCurrentMaxSize(page,size,totalElements){const maxSize=size*page;return maxSize>totalElements?totalElements:maxSize}_nextPage(){if(this.page<this.totalPages){this.page=this.page+1}this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){if(0<this.page-1){this.page=this.page-1}this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(page,totalPages){return page<totalPages}_prevButtonEnabled(page){return 1<page}_newSizeIsSelected(){const newSize=this.shadowRoot.querySelector("paper-listbox").selected;if(newSize){if(null!==this.oldPage&&this.oldPage!==void 0){this.page=1}this.size=newSize;this.dispatchEvent(new CustomEvent("size-change",{detail:{size:newSize}}))}}_computePosition(position){if("right"===position){return"end-justified"}return""}}customElements.define(DatasourceTableFooter.is,DatasourceTableFooter);var datasourceTableFooter={DatasourceTableFooter:DatasourceTableFooter};class DataSourceList extends dataSourceMixin(LitElement){static get styles(){return css`
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
            
            ${this._viewType(this.type)?this.createCustomElement(this.type):html`
            <!--fallback to table-->

            <table-type
            .data = ${this.data}
            .details = ${this.details}
            .columns = ${this.columns}></table-type>

            
            `}

`}static get is(){return"datasource-list"}static get properties(){return{data:{type:Array,notify:!0},q:{type:String,value:"",notify:!0},cols:{type:Array,value:[]},columns:{type:Array},paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,type:{type:String,value:"table"},details:Object,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String,searchText:String}}firstUpdated(){}_searchReset(){this.shadowRoot.querySelector("#q").value=""}_viewType(type){if(!(null==type)||!(type==void 0)||!(""==type)){import(`./datalist-element/${type}-type.js`).then(()=>{}).catch(err=>{console.warn("ERROR IS.."+err)});return!0}else{import("./datalist-element/table-type.js").then(()=>{}).catch(err=>{console.warn("ERROR IS.."+err)});return!1}}createCustomElement(type){if("table"==type){return html`<table-type
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
        ></card-type>`}if("inbox"==type){return html`<inbox-type
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
    ></contact-type>`}}searchFields(columns){return columns.filter(function(item){return item.filter})}_handleSort(evt){console.log(evt)}_handleInputChange(evt){this.dispatchEvent(new CustomEvent("dropdown-filter",{detail:{path:evt.detail.path,value:evt.detail.value}}))}_searchFieldsExist(columns){return 0<columns.filter(function(item){return item.filter}).length}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}_exportType(evt){const type=evt.detail.type;this.dispatchEvent(new CustomEvent("export",{detail:{type:type}}))}_pageChanged(evt){const page=evt.detail.page,oldPage=evt.detail.oldPage;if(oldPage!==void 0){this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:oldPage,page:page}}))}this.page=page}_sizeChanged(evt){const size=evt.detail.size,oldSize=evt.detail.size;if(oldSize!==void 0){this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:oldSize,size:size}}))}this.size=size}_extractData(rowData,columnProperty){if(columnProperty){const splittedProperties=columnProperty.split(".");if(1<splittedProperties.length){return splittedProperties.reduce((prevRow,property)=>{if("string"===typeof prevRow&&rowData[prevRow]&&rowData[prevRow][property]){return rowData[prevRow][property]}return prevRow[property]||""})}return rowData[columnProperty]}return null}_selectChange(event){let localTarget;if(event.type&&"change"===event.type){localTarget=Polymer.dom(event).localTarget}else{localTarget=event}const tr=Polymer.dom(localTarget).parentNode.parentNode,rowData=localTarget.rowData,rowId=localTarget.rowIndex;if(localTarget.checked){this.push("selected",rowData.id);tr.classList.add("selected")}else{this.splice("selected",this.selectedRows.indexOf(rowData.id),1);tr.classList.remove("selected")}}_search(evt){var filter=evt.detail.value,column=evt.detail.column,columns=evt.detail.searchFields;this.dispatchEvent(new CustomEvent("search",{detail:{column:column,searchFields:columns,value:filter}}))}_clearSearch(event){this.dispatchEvent(new CustomEvent("clear-search",{detail:{searchFields:event.detail.searchFields}}))}}customElements.define(DataSourceList.is,DataSourceList);var datasourceList={DataSourceList:DataSourceList};class DataListElement extends DataListElementBase{constructor(){super();this.searchText=""}renderDefault(){return html`
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
                `}static get properties(){return{table:{type:Boolean,value:!0},grid:{type:Boolean,value:!1},list:{type:Boolean,value:!1},sortProperty:{type:String},selectedRows:{type:Array,value:[]},showActions:{type:Boolean,value:!1,notify:!0},searchText:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_switchView(event){const sel=event.currentTarget.selected;if(0===sel){this.table=!0;this.list=!1;this.grid=!1}else if(1===sel){this.table=!1;this.list=!0;this.grid=!1}else if(2===sel){this.table=!1;this.list=!1;this.grid=!0}}_handleSearch(event){var filter=event.detail.value,column=event.detail.column,columns=event.detail.searchFields;this.searchText=filter;this.deleteParamKeys(columns.concat(["q"]),!1);this.updateParams(column,filter)}_handleClearSearch(event){this.searchText="";var columns=event.detail.searchFields;this.deleteParamKeys(columns.concat(["q"]),!0)}_handleDateRangeChange(event){var filter=event.detail.range;this.$.datasource.mergeParams(filter)}_handleSelectionChanged(event){if(event.detail.selected){this.actionRow=event.detail.data;this.showActions=!0}else{this.showActions=!1}}_handleExport(event){"pdf"==event.detail.type?this.generatePDF():this.generateCSV()}}customElements.define(DataListElement.is,DataListElement);export{datasourceList as $datasourceList,datasourceTableActions as $datasourceTableActions,datasourceTableFooter as $datasourceTableFooter,datasourceTableHead as $datasourceTableHead,DataSourceList,DataSourceTableActions,DatasourceTableFooter,DataSourceTableHead};