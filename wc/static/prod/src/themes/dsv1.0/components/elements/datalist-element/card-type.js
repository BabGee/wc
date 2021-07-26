import{css,LitElement,html,DatalistFooterStyles,DatalistHeaderStyles}from"../../../../../components/adaptive-ui.js";const CardtypeFooterStyles=css`

`;var cardTypeFooterCss={CardtypeFooterStyles:CardtypeFooterStyles};class CardTypeFooter extends LitElement{static get styles(){return[DatalistFooterStyles,CardtypeFooterStyles,css`
        :host {
          display: block;
        }
      `]}render(){return html`
        <style>
       
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
              ${this._nextButtonEnabled(this.page,this.totalPages)?html`<div class="right-btn btn" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page,this.totalPages)}"></div>`:html`<div></div>`} 
              </div>
            </div>
          </div>
        </div>`}constructor(){super();this.availableSize=[];this.size=50}static get is(){return"card-type-footer"}static get properties(){return{footerPosition:String,size:{type:Number},page:{type:Number},totalElements:{type:Number},totalPages:{type:Number},availableSize:Array}}_dropdownReveal(){const drp=this.shadowRoot.querySelector(".p-dropdown");switch(drp.style.display){case"block":drp.style.display="none";break;default:drp.style.display="block";break;}}_computeCurrentSize(page,size){return(page-1)*size+1}_computeCurrentMaxSize(page,size,totalElements){const maxSize=size*page;return maxSize>totalElements?totalElements:maxSize}_nextPage(){if(this.page<this.totalPages){this.page=this.page+1}this.dispatchEvent(new CustomEvent("n-page",{detail:{page:this.page}}))}_prevPage(){if(0<this.page-1){this.page=this.page-1}this.dispatchEvent(new CustomEvent("p-page",{detail:{page:this.page}}))}_nextButtonEnabled(page,totalPages){return page<totalPages}_prevButtonEnabled(page){return 1<page}_newSizeIsSelected(){const newSize=this.shadowRoot.querySelector("paper-listbox").selected;if(newSize){if(null!==this.oldPage&&this.oldPage!==void 0){this.page=1}this.size=newSize;this.dispatchEvent(new CustomEvent("size-change",{detail:{size:newSize}}))}}_computePosition(position){if("right"===position){return"end-justified"}return""}}customElements.define(CardTypeFooter.is,CardTypeFooter);var cardTypeFooter={CardTypeFooter:CardTypeFooter};const CardTypeHeaderStyles=css`
#pdf-btn{
    background: var(--app-default-color)!important;
    color:#fff!important;
    border: none!important;
}
#csv-btn{
    background: var(--app-secondary-color)!important;
    color:#fff!important;
    border: none!important;
}

`;var cardTypeHeaderCss={CardTypeHeaderStyles:CardTypeHeaderStyles};class CardTypeHeader extends LitElement{static get styles(){return[DatalistHeaderStyles,CardTypeHeaderStyles,css`
        :host {
          display: block;
        }
      `]}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    
    <div class="table-header-buttons" style="margin-bottom: 15px;">
      <div class="heading">
        <h1 class="title is-size-6">${this.title}</h1>
      </div>
      <button id ="pdf-btn" @tap="${this.generatePDF}" class="button is-info is-size-7 is-rounded">Export PDF</button>
      <button id ="csv-btn" @tap="${this.generateCSV}" class="button is-success is-size-7 is-rounded">Export CSV</button>
    </div>
`}static get is(){return"card-type-header"}static get properties(){return{title:String}}}customElements.define(CardTypeHeader.is,CardTypeHeader);var cardTypeHeader={CardTypeHeader:CardTypeHeader};const CardTypeStyles=css`
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
`;var cardTypeCss={CardTypeStyles:CardTypeStyles};class CardType extends LitElement{constructor(){super()}static get styles(){return[CardTypeStyles,css`
        :host {
          display: block;
        }
      `]}render(){return html`

        <card-type-header .title="${this.title}"></card-type-header>

        ${0==this.data.length?html`

        <empty-view 
        message="${this.message}"
        gateway="${this.gateway}"

        ></empty-view>

      `:html`



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
      
      
      
      `}

  
        

        `}static get is(){return"card-type"}static get properties(){return{data:{type:Array,notify:!0},pl:Object,details:Object,paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String,message:String,gateway:String}}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}values(item){const v=[];for(var property in item){if(item.hasOwnProperty(property)){if("links"!==property&&"image"!==property&&"name"!==property){v.push([property,item[property]])}}}return v}downloads(item,details){if("download_links"in details&&details.download_links.length){const v=[];for(var property in item){if(item.hasOwnProperty(property)&&details.download_links.includes(property)){v.push([property,item[property]])}}return v}return[]}}customElements.define(CardType.is,CardType);var cardType={CardType:CardType};export{cardTypeFooter as $cardTypeFooter,cardTypeHeader as $cardTypeHeader,cardType as $cardType,cardTypeCss as $cardTypeCss,cardTypeFooterCss as $cardTypeFooterCss,cardTypeHeaderCss as $cardTypeHeaderCss,CardTypeFooter,CardTypeHeader,CardType,CardTypeStyles,CardtypeFooterStyles,CardTypeHeaderStyles};