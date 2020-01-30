import{LitElement,html}from"../../../../../components/adaptive-ui.js";class DataSourceStaffProfileHead extends LitElement{render(){return html`
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

        </div>`}static get is(){return"datasource-staffprofile-head"}static get properties(){return{language:String,column:{type:Object,notify:!0,value:()=>({})},positionSortIcon:String,sortable:{type:Boolean,value:()=>!1},sorted:{type:Boolean,value:()=>!1},sortDirection:{type:String,value:()=>"asc"},previousValue:{type:String,value:()=>""},currentValue:{type:String,value:()=>""},timeoutFilter:Number,focused:{type:Boolean,value:!1},_dateFrom:Number,_dateTo:Number,dateFormat:String}}static get observers(){return["_dateChanged(_dateTo)"]}_dateChanged(){if(this._dateFrom&&this._dateTo){this.column.activeFilterValue={dateFrom:this._dateFrom,dateTo:this._dateTo};this.fire("date-input-change-th-content",{column:this.column,value:this.column.activeFilterValue})}}_displayPickerDate(dateFrom,dateTo){if(dateFrom&&dateTo){return`${dateFrom} - ${dateTo}`}return""}_handleSort(){this.dispatchEvent(new CustomEvent("sort-th-content",{detail:{column:this.column}}))}_dateFromFilter(evt){// console.log('date from filter');
// console.log(evt);
// console.log(evt.currentTarget);
// console.log(evt.currentTarget.col);
}_dateToFilter(evt){// console.log('date to filter');
// console.log(evt);
const picker=evt.currentTarget,x={start_date:moment.unix(picker.dateFrom).format("YYYY-MM-DD"),end_date:moment.unix(picker.dateTo).format("YYYY-MM-DD")};this.fire("filter-date-range",{range:x})}_handleFilter(){if(this.column.filter){if(this.column.activeFilter){const paperInput=this.shadowRoot.querySelector("paper-input");if(paperInput){paperInput.value=""}this.previousValue=null}this.fire("filter-th-content",{column:this.column})}}setPaperInputValue(value){this.shadowRoot.querySelector("paper-input").value=value}_handleChoiceChanged(){this.dispatchEvent(new CustomEvent("input-change-th-content",{detail:{column:this.column,value:this._selectedChoices}}))}_handleColumnDropdownFilter(evt){this.dispatchEvent(new CustomEvent("input-change-th-content",{detail:{column:this.column,value:evt.detail.item.val}}))}_handleActiveFilterChange(event){const parentDiv=event.currentTarget.parentNode;Polymer.dom.flush();this.async(()=>{let paperInput;if(!this.column.date&&!this.column.choices){paperInput=this.shadowRoot.querySelector("paper-input");if(paperInput){paperInput.focus();if(this.column.activeFilterValue){this.previousValue=this.column.activeFilterValue}}}else if(this.column.date){const datePicker=parentDiv.querySelector("range-datepicker-input");if(datePicker){if(this.column.activeFilterValue){this.previousValue=this.column.activeFilterValue}}}else{this._selectedChoices=[]}})}_handleKeyDownInput(event){const input=event.currentTarget;this.currentValue=input.value;if(this.previousValue!==this.currentValue){if(13===event.keyCode){this.fire("input-change-th-content",{column:this.column,value:this.currentValue});this.previousValue=this.currentValue}else{clearTimeout(this.timeoutFilter);this.timeoutFilter=setTimeout(()=>{if(this.previousValue!==this.currentValue){this.fire("input-change-th-content",{column:this.column,value:this.currentValue})}this.previousValue=this.currentValue},1e3)}}}equals(targetedValue,value){return value===targetedValue}_draggableClass(draggable){if(draggable){return"draggable"}return""}_isDraggable(draggableColumn,focused){if(draggableColumn&&!focused){return"true"}return"false"}_computeIconName(choice,selectedChoices){if(-1===selectedChoices.base.indexOf(choice)){return"check-box-outline-blank"}return"check-box"}}customElements.define(DataSourceStaffProfileHead.is,DataSourceStaffProfileHead);var datasourceStaffprofileHead={DataSourceStaffProfileHead:DataSourceStaffProfileHead};class StaffProfileTypeFooter extends LitElement{render(){return html`
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
      width: 7px;
      height: 7px;
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
     
    }
    .per{
      position:relative;
      
    }
    .per::after{
      content:'';
      position: absolute;
      right: -14px;
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
    .active-list{
      background: #e5e5e5;
    }
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<div class="wrapper is-flex" style="margin-top: 20px;">
  <div class="size">
  
    <div class="perpage-dropdown">
      <div class="p-display" >
      
        ${this.availableSize.length?html`
        <p class="per is-capitalized is-size-7" @click=${this._dropdownReveal}>Per Page ${this.size}</p>
        <div class="p-dropdown">
        <ul>
          ${this.availableSize.map(size=>html`<li class="${size==this.size?"active-list":""}"><a href="$1" class="is-size-7" data-name="${size}"  @click="${this._newSizeIsSelected}">${size}</a></li>`)}
          
        </ul>
        </div>
        `:html`<p class="is-capitalized is-size-7">Per Page ${this.size}</p>`}
      </div>

    </div>
  </div>
  <div class="range">
    <div class="is-flex">
      <div class="pagination-range">
        <p class="is-size-7">${this._computeCurrentSize(this.page,this.size)} - ${this._computeCurrentMaxSize(this.page,this.size,this.totalElements)} of ${this.totalElements}</p>
      </div>
      <div class="is-flex pagination-buttons">
      ${this._prevButtonEnabled(this.page)?html`<div class="left-btn btn" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}"></div>`:html`<div></div>`}
        <div class="right-btn btn" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page,this.totalPages)}"></div>
      </div>
    </div>
  </div>
</div>`}constructor(){super();this.availableSize=[];this.size=50}static get is(){return"staffprofile-type-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_dropdownReveal(){const drp=this.shadowRoot.querySelector(".p-dropdown");switch(drp.style.display){case"block":drp.style.display="none";break;default:drp.style.display="block";break;}}_computeCurrentSize(page,size){return(page-1)*size+1}_computeCurrentMaxSize(page,size,totalElements){const maxSize=size*page;return maxSize>totalElements?totalElements:maxSize}_nextPage(){if(this.page<this.totalPages){this.page=this.page+1}this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){if(0<this.page-1){this.page=this.page-1}this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(page,totalPages){return page<totalPages}_prevButtonEnabled(page){return 1<page}_newSizeIsSelected(){const newSize=this.shadowRoot.querySelector("paper-listbox").selected;if(newSize){if(null!==this.oldPage&&this.oldPage!==void 0){this.page=1}this.size=newSize;this.dispatchEvent(new CustomEvent("size-change",{detail:{size:newSize}}))}}_computePosition(position){if("right"===position){return"end-justified"}return""}}customElements.define(StaffProfileTypeFooter.is,StaffProfileTypeFooter);var staffprofileTypeFooter={StaffProfileTypeFooter:StaffProfileTypeFooter};class StaffProfileHeader extends LitElement{render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
      .table-header-buttons{
          width: 100%;
          height: auto;
          position: relative;
      }

      .table-header-buttons h1{
        margin-bottom: 15px;
      }
    </style>
    <div class="table-header-buttons" style="margin-bottom: 15px;">
      <div class="heading">
        <h1 class="title is-size-6">${this.title}</h1>
      </div>
      <button @tap="${this.generatePDF}" class="button is-info is-size-7 is-rounded">Export PDF</button>
      <button @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
    </div>
`}static get is(){return"staffprofile-type-header"}static get properties(){return{title:String//   language: String,
//   column: {
//     type: Object,
//     notify: true,
//     value: () => ({}),
//   },
//   positionSortIcon: String,
//   sortable: {
//     type: Boolean,
//     value: () => false,
//   },
//   sorted: {
//     type: Boolean,
//     value: () => false,
//   },
//   sortDirection: {
//     type: String,
//     value: () => 'asc',
//   },
//   previousValue: {
//     type: String,
//     value: () => '',
//   },
//   currentValue: {
//     type: String,
//     value: () => '',
//   },
//   timeoutFilter: Number,
//   focused: {
//     type: Boolean,
//     value: false,
//   },
//   _dateFrom: Number,
//   _dateTo: Number,
//   dateFormat: String,
}}}customElements.define(StaffProfileHeader.is,StaffProfileHeader);var staffprofileTypeHeader={StaffProfileHeader:StaffProfileHeader};class StaffProfileType extends LitElement{constructor(){super()}render(){return html`

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

    <style>
    .table td, .table th{
      padding: 15px 0;
    }
    .staff-profile{
      width: 100%;
      background: #fff;
      border-radius: 6px;
      margin-bottom: 10px;
    } 
    .staffTitle h3, .staffTitle p{
      font-size: 20px;
    }
    .staffTitle p{
      cursor: pointer;
      color: var(--app-primary-color);
    }

    .staff-header{
      padding: 5px 30px;
      border-bottom: 1px solid #e5e5e5;
    }
    .staff-table{
      padding: 5px 30px;
    }

    .table thead td, .table thead th{
      border-bottom: 0 solid transparent;
      border: 0;
      border-width: 0 0 0!important;
    }
    </style>
  
    <section class="section">

    <staffprofile-type-header ></staffprofile-type-header>

    <div class="staff-profile">
      <div class="columns staff-header">
        <div class="column">
          <div class="staffTitle">
            <h3 class="has-text-weight-bold">${this.title}</h3>
          </div>
        </div>
        ${this.details.addType?html`
           
        <div class="column">
          <div class="staffTitle is-pulled-right">
              <p @click="${this.doService}" class="has-text-weight-bold" color="var(--app-primary-color)">
                <span class="icon" style="color: #000;">
                  <fa-icon class="fas fa-user-plus fa-flip-horizontal" color="var(--app-primary-color)"></fa-icon>
                </span>
              Add ${this.details.addType}</p>
            </div>
        </div>
           
           `:html``}
        
      </div>

      <div class="staff-table">
        <table class="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              ${this.columns.map(column=>html`
                <th>
                  <p class="has-text-weight-bold is-capitalized">
                    <datasource-staffprofile-head
                      .column="${column}"
                      sort-direction$="[[column.sortDirection]]"
                      @input-change-th-content="${this._handleInputChange}"
                      sorted$="[[column.sorted]]"
                      sortable$="[[column.sortable]]"
                      @sort-th-content="${this._handleSort}">
                    </datasource-staffprofile-head>
                  </p>
                </th>
              `)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${this.data.map((item,itemIndex)=>html`
            <tr>
              ${!0!==this.details.selectable?html`
              <td><span class="normal-td" style="font-weight: normal;">${item.index}</span></td>
              `:html`
              <td>
                <label class="checkbox">
                  <input id="checkbox-${itemIndex}" @click="${()=>this.checkRow(itemIndex)}" type="checkbox">
                </label>
              </td>
              </th>`}
              <td>
                <span class= "normal-td" >${item.name}</span>
              </td>
              <td> 
                <a id="status-${itemIndex}"  class="button is-small  is-rounded active">${item.description}</a>
              </td>
              <td>
                <span class= "normal-td">${item["Contact Count"]}</span>
              </td>
              ${!0!==this.details.selectable?html``:html`
              <td class="side-action">  
                <span class="icon is-pulled-right pointer">
                  <fa-icon class="fas fa-ellipsis-v" color="#6c7a89"></fa-icon>
                </span>
              </td>
              `}
              
            </tr>
            `)}
          </tbody>
        </table>
      </div>
    </div>

    ${this.paginate?html`
    <staffprofile-type-footer resources="${this.resources}"
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
    </staffprofile-type-footer>
    `:html``}

    </section>

    `}static get is(){return"staffprofile-type"}static get properties(){return{/**
       * Contains the data which will be displayed in the table.
       */data:{type:Array,notify:!0},details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},/**
       * The number of the previous page
       */oldPage:{type:Number,notify:!0},/**
       * The total of elements have to be provided in case of pagination, it is mandatory.
       */totalElements:Number,/**
       * The total of pages have to be provided in case of pagination, it is mandatory.
       * It is used to compute the footer.
       */totalPages:Number,/**
       * The available size in case of pagination.
       */availableSize:Array,/**
       * If true, the rows may be selectable.
       */selectable:{type:Boolean,value:!1},/**
       * Contains the positions of selected columns.
       * Can contain a specific data if selectableDataKey is setted.
       */selected:{type:Array},title:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const allsideActions=this.shadowRoot.querySelectorAll(".side-action"),allDropdowns=this.shadowRoot.querySelectorAll(".arrow-down");allsideActions.forEach(icon=>{icon.classList.add("hidden")});allDropdowns.forEach(dropdown=>{dropdown.classList.add("hidden")});const statuses=this.shadowRoot.querySelectorAll("a[class~=\"button\"]");statuses.forEach(status=>{if("Active"!==status.innerHTML){// do nothing since by default is active
}else{status.classList.replace("active","suspended")}})}doService(evt){if(this.details.service){this.dispatchEvent(new CustomEvent("do-service",{detail:{service:this.details.service}}))}}checkRow(index){const row=this.shadowRoot.querySelector("#tr-"+index),checkbox=this.shadowRoot.querySelector("#checkbox-"+index);if(!0==checkbox.checked){row.classList.add("active-row")}else{row.classList.remove("active-row")}}}customElements.define(StaffProfileType.is,StaffProfileType);var staffprofileType={StaffProfileType:StaffProfileType};export{datasourceStaffprofileHead as $datasourceStaffprofileHead,staffprofileType as $staffprofileType,staffprofileTypeFooter as $staffprofileTypeFooter,staffprofileTypeHeader as $staffprofileTypeHeader,DataSourceStaffProfileHead,StaffProfileHeader,StaffProfileType,StaffProfileTypeFooter};