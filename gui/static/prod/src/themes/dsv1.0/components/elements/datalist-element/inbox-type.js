import{LitElement,html}from"../../../../../components/adaptive-ui.js";class InboxTypeFooter extends LitElement{render(){return html`
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
        </div>`}constructor(){super();this.availableSize=[];this.size=50}static get is(){return"inbox-type-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_computeCurrentSize(page,size){return(page-1)*size+1}_computeCurrentMaxSize(page,size,totalElements){const maxSize=size*page;return maxSize>totalElements?totalElements:maxSize}_nextPage(){if(this.page<this.totalPages){this.page=this.page+1}this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){if(0<this.page-1){this.page=this.page-1}this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(page,totalPages){return page<totalPages}_prevButtonEnabled(page){return 1<page}_newSizeIsSelected(){const newSize=this.shadowRoot.querySelector("paper-listbox").selected;if(newSize){if(null!==this.oldPage&&this.oldPage!==void 0){this.page=1}this.size=newSize;this.dispatchEvent(new CustomEvent("size-change",{detail:{size:newSize}}))}}_computePosition(position){if("right"===position){return"end-justified"}return""}}customElements.define(InboxTypeFooter.is,InboxTypeFooter);var inboxTypeFooter={InboxTypeFooter:InboxTypeFooter};class InboxTypeHeader extends LitElement{render(){return html`

        <h4>${this.title}</h4>
        <div>
       <paper-button  @tap="${this.generatePDF}" style=" background: #3498db; color:white;"><iron-icon icon="image:picture-as-pdf"></iron-icon>Export PDF</paper-button>
       <paper-button @tap="${this.generateCSV}" style=" background: #2ecc71; color:white;"><iron-icon icon="icons:save"></iron-icon>Export CSV</paper-button>
   </div>
`}static get is(){return"inbox-type-header"}static get properties(){return{title:String//   language: String,
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
}}}customElements.define(InboxTypeHeader.is,InboxTypeHeader);var inboxTypeHeader={InboxTypeHeader:InboxTypeHeader};class InboxType extends LitElement{constructor(){super()}render(){return html`

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<style>

td{

  
font-family: Raleway;

font-size: 12px;

font-weight: 600;

font-style: normal;

font-stretch: normal;

line-height: normal;

letter-spacing: 0.86px;

color: #6c4c9b;

}





#icon-delete {
  margin-left: -90px;
  margin-top: -10px;
}

#icon-message {
  margin-left: -120px;
}

#first-row {

background-color: #fff;
}

.active-row {
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
  background-color: #fff; 
  border-left: 5px solid #419588;  
}
.active-color {
  color: #419588;

}
.normal-tr{
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.05);
}
.default-start{
  fill: #6e6e6;
  height: 17px;
  width: 19px;
}
.hidden{
  display: none;
  visibility: hidden;
}
.visible {
  display: block;
  visibility: visible;
}
.overlay {
  background-color: rgba(170,170,170,0.6);
}
.pointer{
  cursor:pointer;
}
.hide-action{
  visibility: hidden;
}
.unhide-action{
  visibility: visible;
}

 </style> 
                
  
        <section class="section">

        <inbox-type-header .title="${this.title}"></inbox-type-header>

<table class="table is-fullwidth is-hoverable"  style="background-color: #f7f6f6;">
       
        <thead>
          <tr >
            <th style="padding-top: 10px; padding-bottom: 10px;">
              
              <input  type="checkbox" name="" id=""> 
            </th>

            <th id="hideUnhideSec" class="hide-action" style="padding-top: 10px; padding-bottom: 10px; ">

                <div id="eye-icon" @click="${this.removeOverlayMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px;" class="icon pointer" style="color: #000000;">
         
                    <fa-icon class="fas fa-eye" color="#000000" ></fa-icon>
                    
                    
                </div>

                 
         
                <div id="eye-slash-icon" @click="${this.overlayMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px;" class="icon pointer" style="color: #000000;">
         
                      <fa-icon class="fas fa-eye-slash" ></fa-icon>
                      
                      
                  </div>

            </th>

            

            <th id="deleteAchieveSec" class="hide-action" style="padding-top: 10px; padding-bottom: 10px;">

                <span id="icon-delete" @click="${this.deleteMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px; " class="icon pointer" style="color: #000000;">
         
                    <fa-icon class="fas fa-trash-alt" ></fa-icon>
                    
                    
                  </span>
         
                  <span id="icon-archive" @click="${this.archiveMessages}" style="border: 1px solid rgba(0, 0, 0, 0.2); width: 33px; height: 31px; margin-left: -5px; " class="icon pointer" style="color: #000000;">
         
                      <fa-icon class="fas fa-archive" ></fa-icon>
                      
                      
                  </span>

            </th>

            <th></th>
            
            

            <th style="padding-top: 10px; padding-bottom: 10px;">

                <p id="icon-message" style="font-weight: bold; font-size: 16px; font-family: Montserrat; color: #2f75ec;">

                    <span class="icon is-pulled-left" style="color: #000000; margin-right: 7px; margin-top: 4px;">
         
                        <fa-icon class="fas fa-envelope" color= "#2f75ec" ></fa-icon>
                        
                        
                      </span>
                   
                  Text Message </p>
                
            </th>

           

            
           
          </tr>
        </thead>
      
        <tbody>

        ${this.data.map((item,itemIndex)=>html`
        
        <tr id="tr-${itemIndex}" class="normal-tr">
        <th style="padding-top: 20px; padding-bottom: 20px;">
            
            <label class="checkbox">

                <input id="checkbox-${itemIndex}" class="inboxCheckBox" @click="${()=>this.checkRow(itemIndex)}" type="checkbox">
                
              </label>
            
            </th>


        <td style="padding-top: 20px; padding-bottom: 20px;">
            <span id="span-icon1-${itemIndex}" class="icon has-text-grey pointer visible" @click="${()=>this.favorite(itemIndex)}" >
                        
               
                <fa-icon id="fa-${itemIndex}"  class="far fa-star" style="fill: #d4d4d4;height: 17px;width: 19px;" ></fa-icon>

               
                          
            </span>
            <span id="span-icon2-${itemIndex}" class="icon has-text-grey pointer hidden " @click="${()=>this.favorite(itemIndex)}" >
                        
               
                <fa-icon id="fa-${itemIndex}"  class="fas fa-star" style="fill: #ff8000;height: 17px;width: 19px;" ></fa-icon>

               
                          
            </span>
        </td>

        <td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">${item.name}</td>

        <td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">${item.description}</td>
        <td class="normal-td" style="padding-top: 20px; padding-bottom: 20px;">${item.id}</td>

      </tr>


        `)}
       
        </tbody>
      </table>

      ${this.paginate?html`
<inbox-type-footer resources="${this.resources}"
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
</inbox-type-footer>
`:html``}


</section>
  

        `}static get is(){return"inbox-type"}static get properties(){return{/**
       * Contains the data which will be displayed in the table.
       */data:{type:Array,notify:!0},columns:{},details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},/**
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
       */selected:{type:Array},title:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const selectable=this.details.selectable,allCheckBoxes=this.shadowRoot.querySelectorAll("input[type=checkbox]"),allStars=this.shadowRoot.querySelectorAll(".icon.has-text-grey.pointer.visible"),columnsType=typeof this.columns;"Boolean"!==columnsType?allStars.forEach(star=>{star.classList.replace("visible","hidden")}):allStars.forEach(star=>{});if(selectable===void 0){allCheckBoxes.forEach(checkbox=>{checkbox.style.display="none"})}else{!0!==selectable?allCheckBoxes.forEach(checkbox=>{checkbox.style.display="none"}):allCheckBoxes.forEach(checkbox=>{checkbox.style.display="block"})}}checkRow(index){const row=this.shadowRoot.querySelector("#tr-"+index),checkbox=this.shadowRoot.querySelector("#checkbox-"+index),deleteAchieveSec=this.shadowRoot.querySelector("#deleteAchieveSec"),hideUnhideSec=this.shadowRoot.querySelector("#hideUnhideSec"),rowTexts=row.querySelectorAll(".normal-td");var checked=this.shadowRoot.querySelectorAll("input:checked");if(0===checked.length){// there are no checked checkboxes
deleteAchieveSec.className="hide-action";hideUnhideSec.className="hide-action"}else{// there are some checked checkboxes
deleteAchieveSec.className="unhide-action";hideUnhideSec.className="unhide-action"}if(!0==checkbox.checked){row.classList.add("active-row");rowTexts.forEach(text=>{text.classList.add("active-color")})}else{row.classList.remove("active-row");rowTexts.forEach(text=>{text.classList.remove("active-color")})}}favorite(index){const span1=this.shadowRoot.querySelector("#span-icon1-"+index),span2=this.shadowRoot.querySelector("#span-icon2-"+index);if(span1.classList.contains("visible")){span1.classList.replace("visible","hidden");span2.classList.replace("hidden","visible")}else{span1.classList.replace("hidden","visible");span2.classList.replace("visible","hidden")}}deleteMessages(){const selectedMessages=this.shadowRoot.querySelectorAll("tr[class~=\"active-row\"]");selectedMessages.forEach(message=>{message.classList.add("hidden")})}archiveMessages(){const selectedMessages=this.shadowRoot.querySelectorAll("tr[class~=\"active-row\"]");selectedMessages.forEach(message=>{message.classList.add("hidden")})}overlayMessages(){const selectedMessages=this.shadowRoot.querySelectorAll("tr[class~=\"active-row\"]");selectedMessages.forEach(message=>{message.classList.add("overlay")})}removeOverlayMessages(){const overlayMessages=this.shadowRoot.querySelectorAll("tr[class~=\"overlay\"]");overlayMessages.forEach(message=>{message.classList.remove("overlay")})}_pageChanged(evt){const page=evt.detail.page,oldPage=this.page;if(oldPage!==void 0){this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:oldPage,page:page}}))}this.page=page}_sizeChanged(evt){const size=evt.detail.size,oldSize=this.size;if(oldSize!==void 0){this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:oldSize,size:size}}))}this.size=size}}customElements.define(InboxType.is,InboxType);var inboxType={InboxType:InboxType};export{inboxType as $inboxType,inboxTypeFooter as $inboxTypeFooter,inboxTypeHeader as $inboxTypeHeader,InboxType,InboxTypeFooter,InboxTypeHeader};