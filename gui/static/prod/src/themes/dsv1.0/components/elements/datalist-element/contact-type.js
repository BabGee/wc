import{LitElement,html}from"../../../../../components/adaptive-ui.js";class ContactTypeFooter extends LitElement{render(){return html`
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
        </div>`}constructor(){super();this.availableSize=[];this.size=50}static get is(){return"contact-type-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_computeCurrentSize(page,size){return(page-1)*size+1}_computeCurrentMaxSize(page,size,totalElements){const maxSize=size*page;return maxSize>totalElements?totalElements:maxSize}_nextPage(){if(this.page<this.totalPages){this.page=this.page+1}this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){if(0<this.page-1){this.page=this.page-1}this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(page,totalPages){return page<totalPages}_prevButtonEnabled(page){return 1<page}_newSizeIsSelected(){const newSize=this.shadowRoot.querySelector("paper-listbox").selected;if(newSize){if(null!==this.oldPage&&this.oldPage!==void 0){this.page=1}this.size=newSize;this.dispatchEvent(new CustomEvent("size-change",{detail:{size:newSize}}))}}_computePosition(position){if("right"===position){return"end-justified"}return""}}customElements.define(ContactTypeFooter.is,ContactTypeFooter);var contactTypeFooter={ContactTypeFooter:ContactTypeFooter};class ContactTypeHeader extends LitElement{render(){return html`

        <h4>${this.title}</h4>
        <div>
       <paper-button  @tap="${this.generatePDF}" style=" background: #3498db; color:white;"><iron-icon icon="image:picture-as-pdf"></iron-icon>Export PDF</paper-button>
       <paper-button @tap="${this.generateCSV}" style=" background: #2ecc71; color:white;"><iron-icon icon="icons:save"></iron-icon>Export CSV</paper-button>
   </div>
`}static get is(){return"contact-type-header"}static get properties(){return{title:String}}}customElements.define(ContactTypeHeader.is,ContactTypeHeader);var contactTypeHeader={ContactTypeHeader:ContactTypeHeader};class ContactType extends LitElement{constructor(){super()}render(){return html`

      <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet">
    
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

  <style>

 

  .basic-info-p1 {
    
    margin-top: -40px; 
    margin-left: 45px;
}

.basic-info-p2 {

    margin-left: 45px;
}

.th-basic-info {

    margin-left: -80px;
    padding-top:5px;
}

.td-basic-info {

    margin-left: -90px;
}

.td-basic-info1 {

    margin-left: -50px;
}


.sortbtn{
    margin-left: 20px;
}

.th-add-contact{

    margin-left: -20px;
}

.items-per{

    margin-left: -130px;
}

.pagination-1 {

    margin-left: -50px;
}

.list-icon{

padding-top: 0px;
padding-bottom: 13px;
margin-top: 1px;
}

.basic-info-icon{

padding-top: 7px;
padding-bottom: 0px;
}


/* small tablet to big tablets: 1024px*/
@media only screen and (max-width: 1024px ) {

.list-icon{

        margin-left: -150px;
        }

.th-add-contact{

        margin-left: -80px;
        }

.td-basic-info {

        margin-left: -80px;
        }

.td-basic-info1 {

        margin-left: -40px;
        }

.items-per{

    margin-left: -110px;
    }

.separatore-line {

    display: none;
}

.counting-pagination {

    display: block;
}

.pagination-1 {

margin-left: -200px;
}


}

/* small tablet to big tablets: from 768px to 1023px */
@media only screen and (max-width: 768px ) {

.list-icon{

        margin-left: -150px;
        }

.th-add-contact{

        margin-left: -80px;
        }

.td-basic-info {

        margin-left: -80px;
        }

.td-basic-info1 {

        margin-left: -40px;
        }

.items-per{

    margin-left: -110px;
    }

.separatore-line {

    display: none;
}

.counting-pagination {

    display: block;
}

.pagination-1 {

margin-left: -200px;
}


}

/* small tablet to big tablets: from 751px to 1023px */
@media only screen and (max-width: 751px ) {

    .list-icon{

            margin-left: -150px;
            }

    .th-add-contact{

            margin-left: -80px;
            }

    .td-basic-info {

            margin-left: -80px;
            }

    .td-basic-info1 {

            margin-left: -40px;
            }

    .items-per{

        margin-left: -110px;
        }

    .separatore-line {

        display: none;
    }

    .counting-pagination {

        display: block;
    }

    .pagination-1 {

margin-left: -200px;
}

   
}

.active-row {
  background-color: grey; 
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.03); 
  border-left: 5px solid #419588;  
  border-radius: 3px; 
  margin-bottom: 5px;
  }
.active-color {
   color: #419588;
}
.normal-tr{
  background-color: white; 
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.03); 
  border-radius: 3px; 
  margin-bottom: 5px;
 
}
  </style>

  <section class="section">

  <contact-type-header .title="${this.title}"></contact-type-header>


        <table class="table is-fullwidth is-hoverable"  style="background-color: #ececee;">
               
                <thead>

                  <tr style="background-color: #ececee; border-bottom: 0px solid #ececee;">

                    <th style=" border-bottom: 0px solid #ececee;">
                      
                        <p style="color: #1f2552; font-size: 22px; font-weight: bold; font-family: Noto Sans JP;"> Contacts </p>
                    </th>

                    <th style=" border-bottom: 0px solid #ececee;">
                    </th>
    
                    <th style=" border-bottom: 0px solid #ececee;">
                    </th>

                    <th style=" border-bottom: 0px solid #ececee;">
                       
                           
                    </th>

                    

                    <th  style=" border-bottom: 0px solid #ececee;">
                            <span class="icon has-text-grey list-icon" style=" background-color: white;">
                               
                                    <fa-icon class="fas fa-list" style="width: 13px; height: 11px;"></fa-icon>
                                    
                                </span>
                            <p class="button" style="font-family: Montserrat; font-size: 12px; 
                            font-weight: 500; color: #757575; ">
                            
                            Filter
                            
                            <span class="icon " style=" background-color: white; margin-left: 5px;">
                              
                              <fa-icon class="fas fa-list" style="width: 16px; height: 16px;"></fa-icon>
                             
                         </span>
                           
                           </p>

                    </th>
                    
                    

                    <th style=" border-bottom: 0px solid #ececee;">

                    <p class="th-add-contact" style="float: left; color: #2f75ec;  
                            font-size: 16px; font-weight: bold;">
                             
                             <span class="icon " >
                               
                                 <fa-icon class="fas fa-user-plus  add-contact-icon" color="#575bde"></fa-icon>
                                
                            </span>
                             
                              <span> Add contacts </span>
                             
                             
                            </p>
                        
                    </th>

                   

                   
                  </tr>

                  <tr style="background-color: #ececee; ">

                        <th style="padding-top: 20px; padding-bottom: 20px; " >
                        
                        <a class="is-paddingless" href="" >

                        <span class="icon  basic-info-icon" style="color: rgba(17, 15, 36, 0.4); background-color: white; border-radius: 3px;">

                            <fa-icon class="far fa-plus-square "></fa-icon>
                            
                        </span>
                        </a>

                        </th>

                        <th style="padding-top: 20px; padding-bottom: 20px;">

                            <p class="th-basic-info" style="color: #757575; font-size: 12px; font-weight: bold; font-family: Montserrat;">BASIC INFO </p>
                        
                        </th>

                        

                        <th style="padding-top: 20px; padding-bottom: 20px;">
                            <p style="color: #757575; font-size: 12px; font-weight: bold; font-family: Montserrat;">COMPANY</p> 
                        </th>

                      

                        <th style="padding-top: 20px; padding-bottom: 20px;">
                            <p style="color: #757575; font-size: 12px; font-weight: bold; font-family: Montserrat;">PHONE NUMBER </p>
                        </th> 

                        
                        <th style="padding-top: 20px; padding-bottom: 20px;">
                            <p style="color: #757575; font-size: 12px; font-weight: bold; font-family: Montserrat;">CREATED DATE </p>
                        </th> 
                        
                        <th style="padding-top: 20px; padding-bottom: 20px; ">

                            <p class="button " style="width: 19.9px; height: 20px; font-weight: bolder;">﹤</p> 
                            <p class="button " style="width: 19.9px; height: 20px; font-weight: bolder;">﹥</p>
                        </th> 

                  </tr>
                </thead>
              
                <tbody>

                ${this.data.map((item,itemIndex)=>html`
                
                <tr id="tr-${itemIndex}" class="normal-tr">

                  <th style="padding-top: 22px; padding-bottom: 20px;">

                  <label class="checkbox">

                  <input id="checkbox-${itemIndex}" @click="${()=>this.checkRow(itemIndex)}" type="checkbox">
                  
                  </label>

                  </th>


                  <td class="" style="padding-top: 22px; padding-bottom: 9px; ">

                  <span class="icon td-basic-info " style="color: #d8d8d8; margin-right: 19.1px; ">
                          
                          <fa-icon class="fas fa-circle" color ="#d4d4d4" style="width: 40.2px; height: 40px;"></fa-icon>
                          
                      </span>

                      <p class="basic-info-p1 td-basic-info1" style="font-size: 12px; font-family: Montserrat; 
                          color: #757575;  font-weight: 500px;">${item.name}</p>
                          
                      <p class="basic-info-p2 td-basic-info1" style="font-size: 12px; font-family: Montserrat ; 
                          color: #ccced0; font-weight: 500px;  margin-top: -3px;">${item.description}</p>
                  </td>

                  <td style="padding-top: 23px; padding-bottom: 22px;">

                  <p style="font-size: 12px; font-family: Montserrat;
                  color: #757575;  font-weight: 500px;">${item.id}</p>

                  </td>

                  <td style="padding-top: 24px; padding-bottom: 21px;">

                  <p style=" font-size: 12px; font-family: Montserrat;  
                  color: #757575; font-weight: 500px; ">${item["Contact Count"]}</p>
                  </td>


                  <td style="padding-top: 24px; padding-bottom: 21px;">

                  <p style="font-size: 12px; font-family: Montserrat; 
                  color: #757575; font-weight: 500px; ">${item.index} </p>

                  </td>

                  <td style="padding-top: 24px; padding-bottom: 27px;">

                  <p class="help sortbtn" style=" color: #bac5cb;"> •••</p>

                  </td>

                  </tr>
                             
                `)}
                  
                <tr id="first-row" style="background-color: #ececee; box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.03); 
                                  border-radius: 3px; margin-bottom: 5px;">
                
                                    <th style="padding-top: 22px; padding-bottom: 20px;">
                
                
                                    </th>
                
                
                                    <td class="" style="padding-top: 22px; padding-bottom: 9px; ">
                
                                            <p class="items-per" style=" font-size: 12px; font-weight: normal; font-family: Lato;">Items per page:
        
                                            <span style="margin-left: 10px; font-size: 14px; font-weight: normal; font-family: Lato;">
                                                 9
                                            </span>
                                                       
                                            <a href="" class = "has-text-black-bis">
                                                       
                                            <span class="icon " style=" background-color: #ececee; margin-left: 5px; ">
                                                                  
                                                 <fa-icon class="fas fa-caret-down" style = "height: 18px; width: 18px;" ></fa-icon >
                                                                      
                                            </span>
               
                                                 </a>
               
                                                 <span class="separatore-line" style="margin-right: 20px; margin-left: 3.1px;font-size: 12px; font-weight: normal; font-family: Lato;"> |</span>
                                                       
                                         <span class="counting-pagination" style="font-size: 12px; font-weight: normal; font-family: Lato;"> 1 -10 of 20 Items</span>
                                   
                                    </td>
                
                                    <td style="padding-top: 23px; padding-bottom: 22px;">
                
                                    
                
                                    </td>
                
                                    <td style="padding-top: 24px; padding-bottom: 21px;">
                
                                   
                                    </td>
                
                
                                    <td style="padding-top: 24px; padding-bottom: 21px;">
                
                
                                    </td>
                
                                    <td style="padding-top: 24px; padding-bottom: 27px;">
                
                                            <span class=" has-text-black-bis pagination-1" style=" font-size: 14px; font-family: Lato; font-weight: normal; ">
           
                                                    1 of 2 pages
                                                    
                                                </span>
                                                  
                                        
                                                 <a href="" class="previuos-msg">

                                                <span class="icon " style=" background-color: #ececee; margin-left: 35px; ">
                                                   
                                                    <fa-icon  class="fas fa-caret-left" style = "height: 18px; width: 18px;"  ></fa-icon >
                                                    
                                                </span>
                                            </a>
                                               
                                                
                                                 <span class="has-text-black-bis" style=" font-size: 12px; font-family: Lato; font-weight: normal; margin-left: 20px; margin-right: 20px;"> 1</span>
                                            
                                                <a href="">
                                                 <span class="icon " style=" background-color: #ececee; margin-left: 5px;">
                                                   
                                                    <fa-icon  class="fas fa-caret-right" style = "height: 18px; width: 18px;" ></fa-icon >
                                                   
                                               </span>
                                            </a>
                                    </td>
                
                                    </tr>

                </tbody>
              </table>

              ${this.paginate?html`
<contact-type-footer resources="${this.resources}"
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
</contact-type-footer>
`:html``}

  </section>
        `}static get is(){return"contact-type"}static get properties(){return{data:{type:Array,notify:!0},details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String}}checkRow(index){const row=this.shadowRoot.querySelector("#tr-"+index),checkbox=this.shadowRoot.querySelector("#checkbox-"+index);if(!0==checkbox.checked){row.classList.add("active-row")}else{row.classList.remove("active-row")}}_pageChanged(evt){const page=evt.detail.page,oldPage=this.page;if(oldPage!==void 0){this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:oldPage,page:page}}))}this.page=page}_sizeChanged(evt){const size=evt.detail.size,oldSize=this.size;if(oldSize!==void 0){this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:oldSize,size:size}}))}this.size=size}}customElements.define(ContactType.is,ContactType);var contactType={ContactType:ContactType};export{contactTypeFooter as $contactTypeFooter,contactTypeHeader as $contactTypeHeader,contactType as $contactType,ContactTypeFooter,ContactTypeHeader,ContactType};