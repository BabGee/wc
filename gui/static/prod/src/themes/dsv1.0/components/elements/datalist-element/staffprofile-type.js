import{LitElement,html}from"../../../../../../node_modules/lit-element/lit-element.js";import"../../../../../../node_modules/fa-icons/index.js";import"../../../../../../node_modules/@polymer/paper-listbox/paper-listbox.js";import"../../../../../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";import"../../../../../../node_modules/@polymer/paper-item/paper-item.js";import"../../../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";import"../../../../../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js";import"./staffprofile-type-footer.js";import"./staffprofile-type-header.js";import"./datasource-staffprofile-head.js";export class StaffProfileType extends LitElement{constructor(){super()}render(){return html`

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
}else{status.classList.replace("active","suspended")}})}checkRow(index){const row=this.shadowRoot.querySelector("#tr-"+index),checkbox=this.shadowRoot.querySelector("#checkbox-"+index);if(!0==checkbox.checked){row.classList.add("active-row")}else{row.classList.remove("active-row")}}}customElements.define(StaffProfileType.is,StaffProfileType);