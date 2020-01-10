import{LitElement,html}from"../../../../../components/adaptive-ui.js";class CardTypeFooter extends LitElement{render(){return html`
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
        </div>`}constructor(){super();this.availableSize=[];this.size=50}static get is(){return"card-type-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_computeCurrentSize(page,size){return(page-1)*size+1}_computeCurrentMaxSize(page,size,totalElements){const maxSize=size*page;return maxSize>totalElements?totalElements:maxSize}_nextPage(){if(this.page<this.totalPages){this.page=this.page+1}this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){if(0<this.page-1){this.page=this.page-1}this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(page,totalPages){return page<totalPages}_prevButtonEnabled(page){return 1<page}_newSizeIsSelected(){const newSize=this.shadowRoot.querySelector("paper-listbox").selected;if(newSize){if(null!==this.oldPage&&this.oldPage!==void 0){this.page=1}this.size=newSize;this.dispatchEvent(new CustomEvent("size-change",{detail:{size:newSize}}))}}_computePosition(position){if("right"===position){return"end-justified"}return""}}customElements.define(CardTypeFooter.is,CardTypeFooter);var cardTypeFooter={CardTypeFooter:CardTypeFooter};class CardTypeHeader extends LitElement{render(){return html`

        <h4>${this.title}</h4>
        <div>
       <paper-button  @tap="${this.generatePDF}" style=" background: #3498db; color:white;"><iron-icon icon="image:picture-as-pdf"></iron-icon>Export PDF</paper-button>
       <paper-button @tap="${this.generateCSV}" style=" background: #2ecc71; color:white;"><iron-icon icon="icons:save"></iron-icon>Export CSV</paper-button>
   </div>
`}static get is(){return"card-type-header"}static get properties(){return{title:String}}}customElements.define(CardTypeHeader.is,CardTypeHeader);var cardTypeHeader={CardTypeHeader:CardTypeHeader};class CardType extends LitElement{constructor(){super()}render(){return html`
        <style>
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

        </style>

        <card-type-header .title="${this.title}"></card-type-header>

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
        ${this.paginate?html`
        <card-type-footer resources="${this.resources}"
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
        </card-type-footer>
        `:html``} 
        

        `}static get is(){return"card-type"}static get properties(){return{data:{type:Array,notify:!0},pl:Object,details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String}}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}values(item){const v=[];for(var property in item){if(item.hasOwnProperty(property)){if("links"!==property&&"image"!==property&&"name"!==property){v.push([property,item[property]])}}}return v}downloads(item,details){if("download_links"in details&&details.download_links.length){const v=[];for(var property in item){if(item.hasOwnProperty(property)&&details.download_links.includes(property)){v.push([property,item[property]])}}return v}return[]}}customElements.define(CardType.is,CardType);var cardType={CardType:CardType};export{cardTypeFooter as $cardTypeFooter,cardTypeHeader as $cardTypeHeader,cardType as $cardType,CardTypeFooter,CardTypeHeader,CardType};