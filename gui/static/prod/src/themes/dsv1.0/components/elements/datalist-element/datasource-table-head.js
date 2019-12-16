import"../../../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";import"../../../../../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js";import{LitElement,html}from"../../../../../../node_modules/lit-element/lit-element.js";export class DataSourceTableHead extends LitElement{render(){return html`
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

        </div>`}static get is(){return"datasource-table-head"}static get properties(){return{language:String,column:{type:Object,notify:!0,value:()=>({})},positionSortIcon:String,sortable:{type:Boolean,value:()=>!1},sorted:{type:Boolean,value:()=>!1},sortDirection:{type:String,value:()=>"asc"},previousValue:{type:String,value:()=>""},currentValue:{type:String,value:()=>""},timeoutFilter:Number,focused:{type:Boolean,value:!1},_dateFrom:Number,_dateTo:Number,dateFormat:String}}static get observers(){return["_dateChanged(_dateTo)"]}_dateChanged(){if(this._dateFrom&&this._dateTo){this.column.activeFilterValue={dateFrom:this._dateFrom,dateTo:this._dateTo};this.fire("date-input-change-th-content",{column:this.column,value:this.column.activeFilterValue})}}_displayPickerDate(dateFrom,dateTo){if(dateFrom&&dateTo){return`${dateFrom} - ${dateTo}`}return""}_handleSort(){this.dispatchEvent(new CustomEvent("sort-th-content",{detail:{column:this.column}}))}_dateFromFilter(){}_dateToFilter(evt){const picker=evt.currentTarget,x={start_date:moment.unix(picker.dateFrom).format("YYYY-MM-DD"),end_date:moment.unix(picker.dateTo).format("YYYY-MM-DD")};this.fire("filter-date-range",{range:x})}_handleFilter(){if(this.column.filter){if(this.column.activeFilter){const paperInput=this.shadowRoot.querySelector("paper-input");if(paperInput){paperInput.value=""}this.previousValue=null}this.fire("filter-th-content",{column:this.column})}}setPaperInputValue(value){this.shadowRoot.querySelector("paper-input").value=value}_handleChoiceChanged(){this.dispatchEvent(new CustomEvent("input-change-th-content",{detail:{column:this.column,value:this._selectedChoices}}))}_handleColumnDropdownFilter(evt){this.dispatchEvent(new CustomEvent("input-change-th-content",{detail:{column:this.column,value:evt.detail.item.val}}))}_handleActiveFilterChange(event){const parentDiv=event.currentTarget.parentNode;Polymer.dom.flush();this.async(()=>{let paperInput;if(!this.column.date&&!this.column.choices){paperInput=this.shadowRoot.querySelector("paper-input");if(paperInput){paperInput.focus();if(this.column.activeFilterValue){this.previousValue=this.column.activeFilterValue}}}else if(this.column.date){const datePicker=parentDiv.querySelector("range-datepicker-input");if(datePicker){if(this.column.activeFilterValue){this.previousValue=this.column.activeFilterValue}}}else{this._selectedChoices=[]}})}_handleKeyDownInput(event){const input=event.currentTarget;this.currentValue=input.value;if(this.previousValue!==this.currentValue){if(13===event.keyCode){this.fire("input-change-th-content",{column:this.column,value:this.currentValue});this.previousValue=this.currentValue}else{clearTimeout(this.timeoutFilter);this.timeoutFilter=setTimeout(()=>{if(this.previousValue!==this.currentValue){this.fire("input-change-th-content",{column:this.column,value:this.currentValue})}this.previousValue=this.currentValue},1e3)}}}equals(targetedValue,value){return value===targetedValue}_draggableClass(draggable){if(draggable){return"draggable"}return""}_isDraggable(draggableColumn,focused){if(draggableColumn&&!focused){return"true"}return"false"}_computeIconName(choice,selectedChoices){if(-1===selectedChoices.base.indexOf(choice)){return"check-box-outline-blank"}return"check-box"}}customElements.define(DataSourceTableHead.is,DataSourceTableHead);