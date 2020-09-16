import{dataSourceMixin,utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const PriceTableBase=class extends utilsMixin(dataSourceMixin(BaseElement)){static get is(){return"price-table"}static get properties(){return{service:String,color:String,icon:String,params:Object,currentData:Object}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{self.currentGroups=self.groups;self.currentData=self.data;self.loading=!1})}_computeData(index){return this.data[index]}_rowsOrColumns(cData){if(cData===void 0){return}return cData.length}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=PriceTableBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=loader.pl.paramsCopy();self.maxlength=pElement.max;self.loader=this.loadData()}};var priceTable={PriceTableBase:PriceTableBase};const PriceTableStyles=css`

/*animations*/

.animate1{
    opacity:0;
    transform:translateY(40px);
    transition:0.7s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateY(0px);

}

.column{
    width: 100%;
}

.price-content{
    padding:60px;
}

.price-title{
    text-align: center;
    background-color: var(--app-default-color);
    color: #fff;
    padding: 24px;
    border-top-left-radius: 80px;
    border-top-right-radius: 8px;
}

.price-title h2 {
    font-weight: 600;
    font-size: 20px;
    cursor: default;
}

.contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#fff;
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 80px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    
}

.title{
    text-align: center!important;
    font-size: 25px!important;
    padding-bottom: 8px!important;
}
.contents:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.subtitle {
    text-align: center!important;
    font-size:1.10rem!important;

}

.group-summary {
    margin-bottom: 28px!important;
    margin-top: 28px!important;
}

.price {
    margin-top: 16px;
    text-align: center;
    border-radius: 50%;
    height: 180px;
    width: 180px;
    line-height: 180px;
    background: transparent;
    color: var(--app-secondary-color);
    border: 3px solid var(--app-secondary-color);
    transition: 1.0s;
}

.price p {
    font-size: 29px;
    font-weight: 500;
}

.price:hover {
    background: linear-gradient(var(--app-accent-color), var(--app-secondary-color));
    color: #fff;
    border-radius: 50%;
    border: none;
    
}
.description {
    margin-top: 16px;
    text-align: center;
}

.description p {
    margin-top: 16px;
    text-align: center;
    font-size: 18px;
    margin-left: 8px;
    margin-right: 8px;
}
.button {
    margin-top:16px;
    margin-bottom:38px;
    width: 80%!important;
    background-color: var(--app-accent-color)!important;
    color: #fff!important;
    border-radius:8px!important;
}
.button:hover {
    background-color:var(--app-accent-color)!important;
    color:var(--app-secondary-color)!important;
    border:3px solid var(--app-secondary-color)!important;
    border-radius:8px!important;
    border-color: var(--app-secondary-color)!important;
    
}


.ii__product{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: auto;
    border-radius: 8px;
    position: relative;
    color: #4a4a4a;
  }
  .ii__product:hover{
   
  }

  .ii__product-logo img 
  {
   max-width: 50px;
   max-height: 50px;
   margin-left:25px;
  }
  
  .ii__product-logo{
      display: flex;
      align-items: center;
      width: 95px;
      height: 95px;
      background: var(--app-accent-color);
      border-radius: 50%;
      margin: 0 auto;
  }
  .read_more{
    color:var(--app-accent-color);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .show_less{
    color:var(--app-accent-color);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .is-custom-color{
    background-color: var(--app-accent-color);
    color: #fff;
  }
  .ii__content{
    margin-top:10px;
  }

  @media screen and (max-width: 950px){
    .column{
        width: 100%;
        max-width: 100%;
    }

    .columns{
        display:flex!important;
        flex-direction:column!important;
    }
    
}

  @media screen and (max-width: 775px){
    .column{
        width: 100%;
        max-width: 100%;
    }
    
}

`;var priceTableCss={PriceTableStyles:PriceTableStyles};class PriceTable extends PriceTableBase{static get styles(){return[PriceTableStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="price-content animate1">
        
            ${this.loading?html`
            <loader-element></loader-element>
            `:html`
            ${!this._rowsOrColumns(this.rows)?html`

                    ${0==this.groups.length?html`

                    <empty-view 
                    message="${this.e.details.empty_message}"
                    gateway="${this.e.details.gateway}"
            
                    ></empty-view>
            
                    `:html`

                    ${this.groups.map((group,groupIndex)=>html`
                    <div class="row">
                       <div class="col-md-12 group-summary">
                           <p class="title is-3">${this.getTitle(group)}</p>
                           <p class="subtitle is-5">${this.getSubTitle(group)}</p>
                       </div>
                   </div>

                   ${0==this.data.length?html`

                   <empty-view 
                   message="${this.e.details.empty_message}"
                   gateway="${this.e.details.gateway}"
           
                   ></empty-view>
           
                   `:html`

                   <div class="columns is-multiline container-group-${groupIndex}">
                   ${this._computeData(groupIndex).map(item=>html`
                   <div class="column">
       
                   <div  class="ii__product">
                      <div class="price-title">
                        <h2>${item.name}</h2>
                      </div>
                      <div class="contents">
                            <div class="price">
                              <p>${item.count}</p>
                            </div>
                            <div class="description">
                                <p>${item.description}</p>

                             
                            </div>
                            <a href="${item.kind}"  target="_blank" class="button is-normal is-fullwidth" service="${item.kind}" @click="${this.launchService}">
                                <p>BUY NOW</p>
                            </a>
                      </div>
                   </div>
                 
               </div>
                   
                   `)}
                   </div>
                   
                   
                   `}   


                  
                    
                    `)}
                    
                    
                    `}
            
          
            `:html``}
          `}
            
        </div>`}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{this.shadowRoot.querySelectorAll(".column-group-0");window.addEventListener("scroll",()=>{self.scrollAppear()})})}_computeData(index){return this.data[index]}_rowsOrColumns(cData){if(cData===void 0){return}return cData.length}getTitle(text){let[title,subtitle]=text.split("|");return title}getSubTitle(text){let[title,subtitle]=text.split("|");return subtitle}scrollAppear(){const self=this;let contentContainer=self.shadowRoot.querySelector(".price-content"),contentStartPosition=contentContainer.getBoundingClientRect().top,screenPosition=window.innerHeight/2;if(contentStartPosition<screenPosition){contentContainer.classList.add("animate1-appear")}}onLoadData(dsc){super.onLoadData(dsc)}}customElements.define(PriceTable.is,PriceTable);export{priceTable as $priceTable,priceTableCss as $priceTableCss,PriceTableBase,PriceTableStyles};