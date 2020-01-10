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

        </div>`}static get is(){return"datasource-staffprofile-head"}static get properties(){return{language:String,column:{type:Object,notify:!0,value:()=>({})},positionSortIcon:String,sortable:{type:Boolean,value:()=>!1},sorted:{type:Boolean,value:()=>!1},sortDirection:{type:String,value:()=>"asc"},previousValue:{type:String,value:()=>""},currentValue:{type:String,value:()=>""},timeoutFilter:Number,focused:{type:Boolean,value:!1},_dateFrom:Number,_dateTo:Number,dateFormat:String}}static get observers(){return["_dateChanged(_dateTo)"]}_dateChanged(){if(this._dateFrom&&this._dateTo){this.column.activeFilterValue={dateFrom:this._dateFrom,dateTo:this._dateTo};this.fire("date-input-change-th-content",{column:this.column,value:this.column.activeFilterValue})}}_displayPickerDate(dateFrom,dateTo){if(dateFrom&&dateTo){return`${dateFrom} - ${dateTo}`}return""}_handleSort(){this.dispatchEvent(new CustomEvent("sort-th-content",{detail:{column:this.column}}))}_dateFromFilter(){}_dateToFilter(evt){const picker=evt.currentTarget,x={start_date:moment.unix(picker.dateFrom).format("YYYY-MM-DD"),end_date:moment.unix(picker.dateTo).format("YYYY-MM-DD")};this.fire("filter-date-range",{range:x})}_handleFilter(){if(this.column.filter){if(this.column.activeFilter){const paperInput=this.shadowRoot.querySelector("paper-input");if(paperInput){paperInput.value=""}this.previousValue=null}this.fire("filter-th-content",{column:this.column})}}setPaperInputValue(value){this.shadowRoot.querySelector("paper-input").value=value}_handleChoiceChanged(){this.dispatchEvent(new CustomEvent("input-change-th-content",{detail:{column:this.column,value:this._selectedChoices}}))}_handleColumnDropdownFilter(evt){this.dispatchEvent(new CustomEvent("input-change-th-content",{detail:{column:this.column,value:evt.detail.item.val}}))}_handleActiveFilterChange(event){const parentDiv=event.currentTarget.parentNode;Polymer.dom.flush();this.async(()=>{let paperInput;if(!this.column.date&&!this.column.choices){paperInput=this.shadowRoot.querySelector("paper-input");if(paperInput){paperInput.focus();if(this.column.activeFilterValue){this.previousValue=this.column.activeFilterValue}}}else if(this.column.date){const datePicker=parentDiv.querySelector("range-datepicker-input");if(datePicker){if(this.column.activeFilterValue){this.previousValue=this.column.activeFilterValue}}}else{this._selectedChoices=[]}})}_handleKeyDownInput(event){const input=event.currentTarget;this.currentValue=input.value;if(this.previousValue!==this.currentValue){if(13===event.keyCode){this.fire("input-change-th-content",{column:this.column,value:this.currentValue});this.previousValue=this.currentValue}else{clearTimeout(this.timeoutFilter);this.timeoutFilter=setTimeout(()=>{if(this.previousValue!==this.currentValue){this.fire("input-change-th-content",{column:this.column,value:this.currentValue})}this.previousValue=this.currentValue},1e3)}}}equals(targetedValue,value){return value===targetedValue}_draggableClass(draggable){if(draggable){return"draggable"}return""}_isDraggable(draggableColumn,focused){if(draggableColumn&&!focused){return"true"}return"false"}_computeIconName(choice,selectedChoices){if(-1===selectedChoices.base.indexOf(choice)){return"check-box-outline-blank"}return"check-box"}}customElements.define(DataSourceStaffProfileHead.is,DataSourceStaffProfileHead);var datasourceStaffprofileHead={DataSourceStaffProfileHead:DataSourceStaffProfileHead};class StaffProfileTypeFooter extends LitElement{render(){return html`
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
        </div>`}constructor(){super();this.availableSize=[];this.size=50}static get is(){return"staffprofile-type-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_computeCurrentSize(page,size){return(page-1)*size+1}_computeCurrentMaxSize(page,size,totalElements){const maxSize=size*page;return maxSize>totalElements?totalElements:maxSize}_nextPage(){if(this.page<this.totalPages){this.page=this.page+1}this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){if(0<this.page-1){this.page=this.page-1}this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(page,totalPages){return page<totalPages}_prevButtonEnabled(page){return 1<page}_newSizeIsSelected(){const newSize=this.shadowRoot.querySelector("paper-listbox").selected;if(newSize){if(null!==this.oldPage&&this.oldPage!==void 0){this.page=1}this.size=newSize;this.dispatchEvent(new CustomEvent("size-change",{detail:{size:newSize}}))}}_computePosition(position){if("right"===position){return"end-justified"}return""}}customElements.define(StaffProfileTypeFooter.is,StaffProfileTypeFooter);var staffprofileTypeFooter={StaffProfileTypeFooter:StaffProfileTypeFooter};class StaffProfileHeader extends LitElement{render(){return html`

        <h4>${this.title}</h4>
        <div>
       <paper-button  @tap="${this.generatePDF}" style=" background: #3498db; color:white;"><iron-icon icon="image:picture-as-pdf"></iron-icon>Export PDF</paper-button>
       <paper-button @tap="${this.generateCSV}" style=" background: #2ecc71; color:white;"><iron-icon icon="icons:save"></iron-icon>Export CSV</paper-button>
   </div>
`}static get is(){return"staffprofile-type-header"}static get properties(){return{title:String}}}customElements.define(StaffProfileHeader.is,StaffProfileHeader);var staffprofileTypeHeader={StaffProfileHeader:StaffProfileHeader};class StaffProfileType extends LitElement{constructor(){super()}render(){return html`

        <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

<style>
  table {
background-color: #fff;
}

tr {
    box-shadow: 1px 1px 30px -10px rgba(0, 0, 0, 0.15);
    height: 64px;
}
.active-row {
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
  background-color: #f5f5f5; 
  border-left: 5px solid #419588;  
}
.active-color {
  color: #419588;     
}
.suspended{
 background-color: #299ed8;
 color: #fff;
 height: 19px;
 width: 80px;

}
.active{
 background-color: #56e73c; 
 color: black;
 height: 19px; 
 width: 80px;

}
.pointer{
  cursor:pointer;
}
.arrow{
 cursor:default;
}
.hidden{
  visibility: hidden;
}
</style>
  
<section class="section">

<staffprofile-type-header .title="${this.title}"></staffprofile-type-header>


<table class="table is-fullwidth is-hoverable" >
       
        <thead>
          <tr>
            <th style="padding-top: 20px; padding-bottom: 20px;" class="arrow">
              
                    <p style="font-weight: bold; font-size: 16px; font-family: Montserrat; color: #202124;" >Short code</p>
            </th>

            <th style="padding-top: 20px; padding-bottom: 20px;">
              

            </th>

            <th style="padding-top: 20px; padding-bottom: 20px;"></th>

            <th>

               

            </th>

            <th style="padding-top: 20px; padding-bottom: 20px;"></th>
            
            

            <th style="padding-top: 20px; padding-bottom: 20px;">

                    <p style="font-weight: bold; font-size: 16px; font-family: Montserrat; color: #2f75ec;" 
                    class="is-pulled-right pointer">

                            <span class="icon" style="color: #000;">
              
                                <!-- <fa-icon class="fas fa-xs fa-user-plus " color= "#000" ></fa-icon> -->
                                <fa-icon class="fas fa-user-plus fa-flip-horizontal" color="#2f75ec"></fa-icon>
                                
                              </span>
                          Add staff profile</p>
                
            </th>

           

            
           
          </tr>
        </thead>
      
        <tbody>

          <tr id="first-row" >
          ${this.columns.map(column=>html`
            <th  style="padding-top: 20px; padding-bottom: 20px; border-bottom: 0px solid #fff;">
                <datasource-staffprofile-head
                        .column="${column}"
                        sort-direction$="[[column.sortDirection]]"
                        @input-change-th-content="${this._handleInputChange}"
                        sorted$="[[column.sorted]]"
                        sortable$="[[column.sortable]]"
                        @sort-th-content="${this._handleSort}">
                </datasource-staffprofile-head>
            </th>
            `)}
          </tr>

          ${this.data.map((item,itemIndex)=>html`
          <tr id="tr-${itemIndex}">
          <th class="index-column" style="padding-top: 20px; padding-bottom: 20px;">

          ${!0!==this.details.selectable?html`<span class= "normal-td" style="color: #6c7a89; font-size: 14px; font-weight: 500; font-family: Montserrat;">${item.index}</span>
          `:html`<label class="checkbox">
          <input id="checkbox-${itemIndex}" @click="${()=>this.checkRow(itemIndex)}" type="checkbox">
          
        </label>
      
      </th>`}
          
                  


              <td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">

                      <span class= "normal-td" style="color: #6c7a89; font-size: 14px; font-weight: 500; font-family: Montserrat;">${item.name}</span>
              </td>

              <td " style="padding-top: 20px; padding-bottom: 20px;"> 
                      <a id="status-${itemIndex}"  class="button is-small  is-rounded active" 
                      >${item.description}</a>
              </td>

              <td  style="padding-top: 20px; padding-bottom: 20px;">
                  
                  <span style="color: #6c7a89; font-size: 14px; font-weight: 500; font-family: Montserrat;" class= "normal-td">${item["Contact Count"]}</span>

              
              </td>

             

              <td class="side-action" style="padding-top: 20px; padding-bottom: 20px;">  
                      <span class="icon is-pulled-right pointer">

                              <!-- <fa-icon class="fas  fa-ellipsis-v" ></fa-icon> -->
                              <fa-icon class="fas fa-ellipsis-v" color="#6c7a89"></fa-icon>

                      </span>

              </td>
    </tr>    
          `)}    
       
        </tbody>
      </table>

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

        `}static get is(){return"staffprofile-type"}static get properties(){return{data:{type:Array,notify:!0},details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const allsideActions=this.shadowRoot.querySelectorAll(".side-action"),allDropdowns=this.shadowRoot.querySelectorAll(".arrow-down");allsideActions.forEach(icon=>{icon.classList.add("hidden")});allDropdowns.forEach(dropdown=>{dropdown.classList.add("hidden")});const statuses=this.shadowRoot.querySelectorAll("a[class~=\"button\"]");statuses.forEach(status=>{if(!("Active"!==status.innerHTML)){status.classList.replace("active","suspended")}})}checkRow(index){const row=this.shadowRoot.querySelector("#tr-"+index),checkbox=this.shadowRoot.querySelector("#checkbox-"+index);if(!0==checkbox.checked){row.classList.add("active-row")}else{row.classList.remove("active-row")}}}customElements.define(StaffProfileType.is,StaffProfileType);var staffprofileType={StaffProfileType:StaffProfileType};export{datasourceStaffprofileHead as $datasourceStaffprofileHead,staffprofileTypeFooter as $staffprofileTypeFooter,staffprofileTypeHeader as $staffprofileTypeHeader,staffprofileType as $staffprofileType,DataSourceStaffProfileHead,StaffProfileTypeFooter,StaffProfileHeader,StaffProfileType};