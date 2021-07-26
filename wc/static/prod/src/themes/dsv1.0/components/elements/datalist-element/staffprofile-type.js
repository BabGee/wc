import{css,LitElement,html,DatalistFooterStyles,DatalistHeaderStyles}from"../../../../../components/adaptive-ui.js";const StaffProfileTypeStyles=css`

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

`;var staffprofileTypeCss={StaffProfileTypeStyles:StaffProfileTypeStyles};const StaffProfileTypeFooterStyles=css`

`;var staffprofileTypeFooterCss={StaffProfileTypeFooterStyles:StaffProfileTypeFooterStyles};const StaffProfileTypeHeaderStyles=css`

`;var staffprofileTypeHeaderCss={StaffProfileTypeHeaderStyles:StaffProfileTypeHeaderStyles};class StaffProfileTypeFooter extends LitElement{static get styles(){return[DatalistFooterStyles,StaffProfileTypeFooterStyles,css`
        :host {
          display: block;
        }
      `]}render(){return html`
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
</div>`}constructor(){super();this.availableSize=[];this.size=50}static get is(){return"staffprofile-type-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_dropdownReveal(){const drp=this.shadowRoot.querySelector(".p-dropdown");switch(drp.style.display){case"block":drp.style.display="none";break;default:drp.style.display="block";break;}}_computeCurrentSize(page,size){return(page-1)*size+1}_computeCurrentMaxSize(page,size,totalElements){const maxSize=size*page;return maxSize>totalElements?totalElements:maxSize}_nextPage(){if(this.page<this.totalPages){this.page=this.page+1}this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){if(0<this.page-1){this.page=this.page-1}this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(page,totalPages){return page<totalPages}_prevButtonEnabled(page){return 1<page}_newSizeIsSelected(){const newSize=this.shadowRoot.querySelector("paper-listbox").selected;if(newSize){if(null!==this.oldPage&&this.oldPage!==void 0){this.page=1}this.size=newSize;this.dispatchEvent(new CustomEvent("size-change",{detail:{size:newSize}}))}}_computePosition(position){if("right"===position){return"end-justified"}return""}}customElements.define(StaffProfileTypeFooter.is,StaffProfileTypeFooter);var staffprofileTypeFooter={StaffProfileTypeFooter:StaffProfileTypeFooter};class StaffProfileHeader extends LitElement{static get styles(){return[StaffProfileTypeHeaderStyles,DatalistHeaderStyles,css`
        :host {
          display: block;
        }
      `]}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
  
    <div class="table-header-buttons" style="margin-bottom: 15px;">
      <div class="heading">
        <h1 class="title is-size-6">${this.title}</h1>
      </div>
      <button @tap="${this.generatePDF}" class="button is-info is-size-7 is-rounded">Export PDF</button>
      <button @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
    </div>
`}static get is(){return"staffprofile-type-header"}static get properties(){return{title:String}}}customElements.define(StaffProfileHeader.is,StaffProfileHeader);var staffprofileTypeHeader={StaffProfileHeader:StaffProfileHeader};class StaffProfileType extends LitElement{constructor(){super()}static get styles(){return[StaffProfileTypeStyles,css`
        :host {
          display: block;
        }
      `]}render(){return html`

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

  
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

    `}static get is(){return"staffprofile-type"}static get properties(){return{data:{type:Array,notify:!0},details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const allsideActions=this.shadowRoot.querySelectorAll(".side-action"),allDropdowns=this.shadowRoot.querySelectorAll(".arrow-down");allsideActions.forEach(icon=>{icon.classList.add("hidden")});allDropdowns.forEach(dropdown=>{dropdown.classList.add("hidden")});const statuses=this.shadowRoot.querySelectorAll("a[class~=\"button\"]");statuses.forEach(status=>{if(!("Active"!==status.innerHTML)){status.classList.replace("active","suspended")}})}doService(){if(this.details.service){this.dispatchEvent(new CustomEvent("do-service",{detail:{service:this.details.service}}))}}checkRow(index){const row=this.shadowRoot.querySelector("#tr-"+index),checkbox=this.shadowRoot.querySelector("#checkbox-"+index);if(!0==checkbox.checked){row.classList.add("active-row")}else{row.classList.remove("active-row")}}}customElements.define(StaffProfileType.is,StaffProfileType);var staffprofileType={StaffProfileType:StaffProfileType};export{staffprofileTypeCss as $staffprofileTypeCss,staffprofileTypeFooterCss as $staffprofileTypeFooterCss,staffprofileTypeHeaderCss as $staffprofileTypeHeaderCss,staffprofileTypeFooter as $staffprofileTypeFooter,staffprofileTypeHeader as $staffprofileTypeHeader,staffprofileType as $staffprofileType,StaffProfileTypeStyles,StaffProfileTypeFooterStyles,StaffProfileTypeHeaderStyles,StaffProfileTypeFooter,StaffProfileHeader,StaffProfileType};