import{LitElement,html,css,dataSourceMixin,SharedStyles,DataListElementBase}from"../../../../components/adaptive-ui.js";class DataSourceTableHead extends LitElement{render(){return html`
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

            .foot  {
                font-size: 12px;
                font-weight: normal;
                height: 55px;
                border-top: 1px solid;
                border-color: rgba(0, 0, 0, var(--dark-divider-opacity));
                padding: 0 14px 0 0;
                color: rgba(0, 0, 0, var(--dark-secondary-opacity));
            }

            .foot .left  {
                padding: 0 0 0 14px;
            }

            .foot paper-icon-button {
                width: 24px;
                height: 24px;
                padding: 0;
                margin-left: 24px;
            }

            .foot .status {
                margin: 0 8px 0 32px;
            }

            .foot .size {
                width: 64px;
                text-align: right;
            }

            .size paper-dropdown-menu {
                --paper-input-container-underline: {
                    display: none;
                };
                --paper-input-container-input: {
                    text-align: right;
                    font-size: 12px;
                    font-weight: 500;
                    color: var(--app-default-color, rgba(0, 0, 0, .54));
                };
                --paper-dropdown-menu-icon: {
                    color: var(--app-default-color, rgba(0, 0, 0, .54));
                };
            }
        </style>
        <div class$="layout horizontal center foot [[_computePosition(footerPosition)]]">
            <div class$="[[footerPosition]]">
                <div class="layout horizontal end-justified center">
                    <div class="layout horizontal center" style="display: inline-block;">
                        <div style="text-align: right;">
                            Per Page
                        </div>
                        <div class="size">
                          ${this.availableSize.length?html`
                                <paper-dropdown-menu no-label-float vertical-align="bottom">
                                    <paper-listbox attr-for-selected="size"
                                                   @iron-select="${this._newSizeIsSelected}"
                                                   selected="${this.size}"
                                                   slot="dropdown-content">
                                        ${this.availableSize.map(size=>html`<paper-item size="${size}">${size}</paper-item>`)}
                                    </paper-listbox>
                                </paper-dropdown-menu>
                          `:html`
                                <span>50</span>
                          `}                            
                        </div>
                    </div>

                    <div class="status" style="display: inline-block;">
                        ${this._computeCurrentSize(this.page,this.size)} - ${this._computeCurrentMaxSize(this.page,this.size,this.totalElements)} of ${this.totalElements}
                    </div>
                    
                    <paper-icon-button icon="chevron-left" 
                                       ?disabled="${!this._prevButtonEnabled(this.page)}" 
                                       @click="${this._prevPage}"></paper-icon-button>
                                       
                    <paper-icon-button icon="chevron-right" 
                                       ?disabled="${!this._nextButtonEnabled(this.page,this.totalPages)}" 
                                       @click="${this._nextPage}"></paper-icon-button>
                
                </div>
            </div>
        </div>`}constructor(){super();this.availableSize=[];this.size=50}static get is(){return"datasource-table-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_computeCurrentSize(page,size){return(page-1)*size+1}_computeCurrentMaxSize(page,size,totalElements){const maxSize=size*page;return maxSize>totalElements?totalElements:maxSize}_nextPage(){if(this.page<this.totalPages){this.page=this.page+1}this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){if(0<this.page-1){this.page=this.page-1}this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(page,totalPages){return page<totalPages}_prevButtonEnabled(page){return 1<page}_newSizeIsSelected(){const newSize=this.shadowRoot.querySelector("paper-listbox").selected;if(newSize){if(null!==this.oldPage&&this.oldPage!==void 0){this.page=1}this.size=newSize;this.dispatchEvent(new CustomEvent("size-change",{detail:{size:newSize}}))}}_computePosition(position){if("right"===position){return"end-justified"}return""}}customElements.define(DatasourceTableFooter.is,DatasourceTableFooter);var datasourceTableFooter={DatasourceTableFooter:DatasourceTableFooter};class DataSourceList extends dataSourceMixin(LitElement){static get styles(){return css`
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


            /* -- Material Design Table style -------------- */
            .table {
                background-color: #fff;
                width: 100%;
            }

            .table > thead > tr,
            .table > tbody > tr,
            .table > tfoot > tr {
                -webkit-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;
            }

            .table > thead > tr > th,
            .table > tbody > tr > th,
            .table > tfoot > tr > th,
            .table > thead > tr > td,
            .table > tbody > tr > td,
            .table > tfoot > tr > td {
                text-align: left;
                padding: 8px 16px;
                align-items: center;
                font-size: 13px;
                color: #54667a;
                border-top: 0;
                -webkit-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;
            }

            .table > thead > tr > th {
                font-weight: 400;
                color: #2d3436;
                vertical-align: bottom;
                font-size: 15px;
                padding: 15px 8px;
                text-transform: capitalize;
                border-bottom: 2px solid rgba(0, 0, 0, 0.12);
            }

            .table > caption + thead > tr:first-child > th,
            .table > colgroup + thead > tr:first-child > th,
            .table > thead:first-child > tr:first-child > th,
            .table > caption + thead > tr:first-child > td,
            .table > colgroup + thead > tr:first-child > td,
            .table > thead:first-child > tr:first-child > td {
                border-top: 0;
            }

            .table > tbody + tbody {
                border-top: 1px solid rgba(0, 0, 0, 0.12);
            }

            .table .table {
                background-color: #fff;
            }

            .table .no-border {
                border: 0;
            }

            .table-condensed > thead > tr > th,
            .table-condensed > tbody > tr > th,
            .table-condensed > tfoot > tr > th,
            .table-condensed > thead > tr > td,
            .table-condensed > tbody > tr > td,
            .table-condensed > tfoot > tr > td {
                padding: 0.8rem;
            }

            .table-bordered {
                border: 0;
            }

            .table-bordered > thead > tr > th,
            .table-bordered > tbody > tr > th,
            .table-bordered > tfoot > tr > th,
            .table-bordered > thead > tr > td,
            .table-bordered > tbody > tr > td,
            .table-bordered > tfoot > tr > td {
                border: 0;
                border-bottom: 1px solid #e0e0e0;
            }

            .table-bordered > thead > tr > th,
            .table-bordered > thead > tr > td {
                border-bottom-width: 2px;
            }

            .table-striped > tbody > tr:nth-child(odd) > td,
            .table-striped > tbody > tr:nth-child(odd) > th {
                background-color: #f5f5f5;
            }

            .table-hover > tbody > tr:hover > td,
            .table-hover > tbody > tr:hover > th {
                background-color: rgba(0, 0, 0, 0.12);
            }

            .table-responsive-vertical {
                padding: 0;
             /*   box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);*/
                overflow: auto;
            }

            @media screen and (max-width: 768px) {
                .table-responsive-vertical {
                    margin: 16px;
                }

                .table-responsive-vertical > .table {
                    margin-bottom: 0;
                    background-color: transparent;
                }

                .table-responsive-vertical > .table > thead,
                .table-responsive-vertical > .table > tfoot {
                    display: none;
                }

                .table-responsive-vertical > .table > tbody {
                    display: block;
                }

                .table-responsive-vertical > .table > tbody > tr {
                    display: block;
                    border: 1px solid #e0e0e0;
                    border-radius: 2px;
                    margin-bottom: 1.6rem;
                }

                .table-responsive-vertical > .table > tbody > tr > td {
                    background-color: #fff;
                    display: block;
                    vertical-align: middle;
                    text-align: right;
                }

                .table-responsive-vertical > .table > tbody > tr > td[data-title]:before {
                    content: attr(data-title);
                    float: left;
                    font-size: inherit;
                    font-weight: 400;
                    color: #757575;
                }

   



                .table-responsive-vertical > .table-bordered {
                    border: 0;
                }

                .table-responsive-vertical > .table-bordered > tbody > tr > td {
                    border: 0;
                    border-bottom: 1px solid #e0e0e0;
                }

                .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {
                    border-bottom: 0;
                }

                .table-responsive-vertical > .table-striped > tbody > tr > td,
                .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {
                    background-color: #f5f5f5;
                }

                .table-responsive-vertical > .table-hover > tbody > tr:hover > td,
                .table-responsive-vertical > .table-hover > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical > .table-hover > tbody > tr > td:hover {
                    background-color: rgba(0, 0, 0, 0.12);
                }
            }

            .table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {
                background-color: #fde0dc;
            }

            .table-hover.table-mc-red > tbody > tr:hover > td,
            .table-hover.table-mc-red > tbody > tr:hover > th {
                background-color: #f9bdbb;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {
                    background-color: #fde0dc;
                }

                .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-red > tbody > tr > td:hover {
                    background-color: #f9bdbb;
                }
            }

            .table-striped.table-mc-pink > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-pink > tbody > tr:nth-child(odd) > th {
                background-color: #fce4ec;
            }

            .table-hover.table-mc-pink > tbody > tr:hover > td,
            .table-hover.table-mc-pink > tbody > tr:hover > th {
                background-color: #f8bbd0;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {
                    background-color: #fce4ec;
                }

                .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr > td:hover {
                    background-color: #f8bbd0;
                }
            }

            .table-striped.table-mc-purple > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-purple > tbody > tr:nth-child(odd) > th {
                background-color: #f3e5f5;
            }

            .table-hover.table-mc-purple > tbody > tr:hover > td,
            .table-hover.table-mc-purple > tbody > tr:hover > th {
                background-color: #e1bee7;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {
                    background-color: #f3e5f5;
                }

                .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr > td:hover {
                    background-color: #e1bee7;
                }
            }

            .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > th {
                background-color: #ede7f6;
            }

            .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
            .table-hover.table-mc-deep-purple > tbody > tr:hover > th {
                background-color: #d1c4e9;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {
                    background-color: #ede7f6;
                }

                .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr > td:hover {
                    background-color: #d1c4e9;
                }
            }

            .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > th {
                background-color: #e8eaf6;
            }

            .table-hover.table-mc-indigo > tbody > tr:hover > td,
            .table-hover.table-mc-indigo > tbody > tr:hover > th {
                background-color: #c5cae9;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {
                    background-color: #e8eaf6;
                }

                .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr > td:hover {
                    background-color: #c5cae9;
                }
            }

            .table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {
                background-color: #e7e9fd;
            }

            .table-hover.table-mc-blue > tbody > tr:hover > td,
            .table-hover.table-mc-blue > tbody > tr:hover > th {
                background-color: #d0d9ff;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {
                    background-color: #e7e9fd;
                }

                .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {
                    background-color: #d0d9ff;
                }
            }

            .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > th {
                background-color: #e1f5fe;
            }

            .table-hover.table-mc-light-blue > tbody > tr:hover > td,
            .table-hover.table-mc-light-blue > tbody > tr:hover > th {
                background-color: #b3e5fc;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {
                    background-color: #e1f5fe;
                }

                .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr > td:hover {
                    background-color: #b3e5fc;
                }
            }

            .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > th {
                background-color: #e0f7fa;
            }

            .table-hover.table-mc-cyan > tbody > tr:hover > td,
            .table-hover.table-mc-cyan > tbody > tr:hover > th {
                background-color: #b2ebf2;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {
                    background-color: #e0f7fa;
                }

                .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr > td:hover {
                    background-color: #b2ebf2;
                }
            }

            .table-striped.table-mc-teal > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-teal > tbody > tr:nth-child(odd) > th {
                background-color: #e0f2f1;
            }

            .table-hover.table-mc-teal > tbody > tr:hover > td,
            .table-hover.table-mc-teal > tbody > tr:hover > th {
                background-color: #b2dfdb;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {
                    background-color: #e0f2f1;
                }

                .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr > td:hover {
                    background-color: #b2dfdb;
                }
            }

            .table-striped.table-mc-green > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-green > tbody > tr:nth-child(odd) > th {
                background-color: #d0f8ce;
            }

            .table-hover.table-mc-green > tbody > tr:hover > td,
            .table-hover.table-mc-green > tbody > tr:hover > th {
                background-color: #a3e9a4;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {
                    background-color: #d0f8ce;
                }

                .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-green > tbody > tr > td:hover {
                    background-color: #a3e9a4;
                }
            }

            .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > th {
                background-color: #f1f8e9;
            }

            .table-hover.table-mc-light-green > tbody > tr:hover > td,
            .table-hover.table-mc-light-green > tbody > tr:hover > th {
                background-color: #dcedc8;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {
                    background-color: #f1f8e9;
                }

                .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr > td:hover {
                    background-color: #dcedc8;
                }
            }

            .table-striped.table-mc-lime > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-lime > tbody > tr:nth-child(odd) > th {
                background-color: #f9fbe7;
            }

            .table-hover.table-mc-lime > tbody > tr:hover > td,
            .table-hover.table-mc-lime > tbody > tr:hover > th {
                background-color: #f0f4c3;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {
                    background-color: #f9fbe7;
                }

                .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {
                    background-color: #f0f4c3;
                }
            }

            .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {
                background-color: #fffde7;
            }

            .table-hover.table-mc-yellow > tbody > tr:hover > td,
            .table-hover.table-mc-yellow > tbody > tr:hover > th {
                background-color: #fff9c4;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {
                    background-color: #fffde7;
                }

                .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {
                    background-color: #fff9c4;
                }
            }

            .table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {
                background-color: #fff8e1;
            }

            .table-hover.table-mc-amber > tbody > tr:hover > td,
            .table-hover.table-mc-amber > tbody > tr:hover > th {
                background-color: #ffecb3;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {
                    background-color: #fff8e1;
                }

                .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {
                    background-color: #ffecb3;
                }
            }

            .table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {
                background-color: #fff3e0;
            }

            .table-hover.table-mc-orange > tbody > tr:hover > td,
            .table-hover.table-mc-orange > tbody > tr:hover > th {
                background-color: #ffe0b2;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {
                    background-color: #fff3e0;
                }

                .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr > td:hover {
                    background-color: #ffe0b2;
                }
            }

            .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > th {
                background-color: #fbe9e7;
            }

            .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
            .table-hover.table-mc-deep-orange > tbody > tr:hover > th {
                background-color: #ffccbc;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {
                    background-color: #fbe9e7;
                }

                .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {
                    background-color: #ffccbc;
                }
            }

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
            }

            /* Card Styles */

            .item {
                display:flex;
                flex-direction:row;
                padding: 20px;
                border-radius: 2px;
                background-color: white;
                border: 1px solid #ddd;
                /*max-width: 800px;*/
                /*margin: 16px auto 0 auto;*/
            }

            .item:focus {
                outline: 0;
                border-color: #333;
            }

            .avatar {
                height: 40px;
                width: 40px;
                border-radius: 20px;
                box-sizing: border-box;
                background-color: #DDD;
            }

            .pad {
                padding: 0 16px;
                flex:1;
                flex-basis:0.000001px;
                display:flex;
                flex-direction:column;
            }

            .primary {
                font-size: 16px;
                font-weight: bold;
            }

            .secondary {
                font-size: 14px;
            }

            .dim {
                color: gray;
            }
            
    
    `}constructor(){super();this.columns=[];this.cols=[];this.data=[];this.selected=[];this.availableSize=[10,50,100,500]}renderColumn(paperDatatableApiColumn,valueFromRowData,p,rowData,rowIndex){if(paperDatatableApiColumn.actions){return html`
        
        <datasource-table-actions
        .cols=${this.cols}
        .pl=${this.pl}
        .item=${rowData}
        ></datasource-table-actions>
        
        `}else if(this.selectable&&0===p){return html`
        <paper-checkbox
        .rowData=${rowData}
        .rowIndex=${rowIndex}
        ></paper-checkbox>
        `}else{try{const dJson=JSON.parse(valueFromRowData);if("object"!=typeof dJson){throw"Not Object JSON"}const vs=[];for(var property in dJson){vs.push("<strong>"+property+"</strong>: <span>"+dJson[property]+"</span>")}return html`
          ${vs.map(v=>html` ${v}<br>`)}`}catch(e){switch(paperDatatableApiColumn.type){case"boolean":return html`
              ${"false"==(valueFromRowData+"").toLowerCase()?html`
              <iron-icon icon="icons:close"></iron-icon>
              `:html`
              <iron-icon icon="icons:check"></iron-icon>
              `}
              
              `;break;default:return html`${valueFromRowData}`;}}}}render(){return html`
        <style>
            

        </style>
        ${this._searchFieldsExist(this.columns)?html`
        
            <div class="topnav">
                <div class="search-container">

                    <paper-dropdown-menu label="Search In">
                        <paper-listbox slot="dropdown-content"
                                       id="qIn"
                                       fallback-selection="q"
                                       attr-for-selected="param">
                            <paper-item param="q">All</paper-item>
                            ${this.searchFields(this.columns).map(item=>html`<paper-item param="${item.propertyPath}">${item.header}</paper-item>`)}
                        </paper-listbox>
                    </paper-dropdown-menu>

                    <paper-input style="display: inline-block"
                                 placeholder="Search ..."
                                 name="search"
                                 id="q"></paper-input>

                    <button type="submit" @click="${this._search}">Search</button>
                    <button type="button" @click="${this._searchReset}">Clear</button>

                </div>
            </div>        
            `:html``}
            <!-- Table starts here -->
            ${this._type("table")?html`
            
                     <!-- Responsive table starts here -->
            <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->
            <div class="table-responsive-vertical" style="max-height: 60vh;">
            
                <table id="table" class="table table-hover table-mc-light-blue">
                <thead>
                <tr>
                ${this.columns.map(column=>html`
                         <th style="">
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
                ${this.data.map((row,rowIndex)=>html`
                <tr>
                ${this.columns.map((column,columnIndex)=>html`
                
                <td>${this.renderColumn(column,row[column.property],columnIndex,row,rowIndex)}</td>
                
                `)}
                </tr>
                `)}
                
                
                </tbody>
            </table>
            </div>
            
            `:html`
            <!--_type('card') todo check more types-->
            <div style="height: 60vh;overflow-y: scroll;">
            ${this.data.map(item=>html`
            
                    <div class="item">
                        <iron-image class="avatar" sizing="contain" src="/media/${item.image}"></iron-image>
                        <div class="pad">

                            <div class="primary">${item.name}</div>

                            ${this.values(item).map(vv=>html`
                            <div class="secondary"> ${vv[0]} <span class="secondary dim"> ${vv[1]}</span></div>
                            `)}
                                
                            ${this.downloads(item,this.details).map(download=>html`
                            <a target="_blank" 
                                class="secondary" download href="/media/${download[1]}"> Download ${download[0]}</a>
                            `)}
                                

                            <div>
                                ${item.links.map(ll=>html`
                                <paper-button
                                            .dataLink=${ll}
                                            @tap="${this._action}"
                                            style="display: inline-block;">${ll.title}</paper-button>
                                
                                `)}
                            </div>

                        </div>
                    </div>

            
            
            `)}
            </div>

            
            `}
${this.paginate?html`
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
`:html``}
`}static get is(){return"datasource-list"}static get properties(){return{data:{type:Array,notify:!0},q:{type:String,value:"",notify:!0},cols:{type:Array,value:[]},columns:{type:Array},paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,type:{type:String,value:"table"},details:Object,selectable:{type:Boolean,value:!1},selected:{type:Array}}}firstUpdated(){}values(item){const v=[];for(var property in item){if(item.hasOwnProperty(property)){if("links"!==property&&"image"!==property&&"name"!==property){v.push([property,item[property]])}}}return v}downloads(item,details){if("download_links"in details&&details.download_links.length){const v=[];for(var property in item){if(item.hasOwnProperty(property)&&details.download_links.includes(property)){v.push([property,item[property]])}}return v}return[]}_type(typ){if(!this.type){return!0}return this.type==typ}_handleSort(evt){console.log(evt)}_handleInputChange(evt){this.dispatchEvent(new CustomEvent("dropdown-filter",{detail:{path:evt.detail.column.propertyPath,value:evt.detail.value}}))}searchFields(columns){return columns.filter(function(item){return item.filter})}_searchFieldsExist(columns){return 0<columns.filter(function(item){return item.filter}).length}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}_pageChanged(evt){const page=evt.detail.page,oldPage=this.page;if(oldPage!==void 0&&oldPage!=page){this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:oldPage,page:page}}))}this.page=page}_sizeChanged(evt){const size=evt.detail.size,oldSize=this.size;if(oldSize!==void 0&&oldSize!=size){this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:oldSize,size:size}}))}this.size=size}_extractData(rowData,columnProperty){if(columnProperty){const splittedProperties=columnProperty.split(".");if(1<splittedProperties.length){return splittedProperties.reduce((prevRow,property)=>{if("string"===typeof prevRow&&rowData[prevRow]&&rowData[prevRow][property]){return rowData[prevRow][property]}return prevRow[property]||""})}return rowData[columnProperty]}return null}_selectChange(event){let localTarget;if(event.type&&"change"===event.type){localTarget=Polymer.dom(event).localTarget}else{localTarget=event}const tr=Polymer.dom(localTarget).parentNode.parentNode,rowData=localTarget.rowData,rowId=localTarget.rowIndex;if(localTarget.checked){this.push("selected",rowData.id);tr.classList.add("selected")}else{this.splice("selected",this.selectedRows.indexOf(rowData.id),1);tr.classList.remove("selected")}}_searchReset(){}_search(){const self=this,q=self.shadowRoot.querySelector("#q").value,qIn=self.shadowRoot.querySelector("#qIn").selected;if(q){this.dispatchEvent(new CustomEvent("search",{detail:{column:qIn,searchFields:self.searchFields(self.columns).map(function(field){return field.propertyPath}),value:q}}))}}}customElements.define(DataSourceList.is,DataSourceList);var datasourceList={DataSourceList:DataSourceList};class DataListElement extends DataListElementBase{constructor(){super()}renderDefault(){const emptyStateSvg=html`
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
    `;return html`
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
      ${this.loading?html`
  <loader-element></loader-element>
`:html`
        ${this.empty?html`
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
  `:html`
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


`}static get properties(){return{table:{type:Boolean,value:!0},grid:{type:Boolean,value:!1},list:{type:Boolean,value:!1},sortProperty:{type:String},selectedRows:{type:Array,value:[]},showActions:{type:Boolean,value:!1,notify:!0}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_hideColumn(event){var property=event.currentTarget.columnProperty;this.$.dt.toggleColumn(property)}_switchView(event){const sel=event.currentTarget.selected;if(0===sel){this.table=!0;this.list=!1;this.grid=!1}else if(1===sel){this.table=!1;this.list=!0;this.grid=!1}else if(2===sel){this.table=!1;this.list=!1;this.grid=!0}}_handleSearch(event){var filter=event.detail.value,column=event.detail.column,columns=event.detail.searchFields;this.deleteParamKeys(columns.concat(["q"]),!1);this.updateParams(column,filter)}_handleDateRangeChange(event){var filter=event.detail.range;this.$.datasource.mergeParams(filter)}_handleSelectionChanged(event){if(event.detail.selected){this.actionRow=event.detail.data;this.showActions=!0}else{this.showActions=!1}}onLoadData(dsc){super.onLoadData(dsc)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(DataListElement.is,DataListElement);export{datasourceList as $datasourceList,datasourceTableActions as $datasourceTableActions,datasourceTableFooter as $datasourceTableFooter,datasourceTableHead as $datasourceTableHead,DataSourceList,DataSourceTableActions,DatasourceTableFooter,DataSourceTableHead};