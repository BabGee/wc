import{dataSourceMixin,utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const ProductSearchBase=class extends utilsMixin(dataSourceMixin(BaseElement)){static get is(){return"product-search"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,q:{type:String,value:""},title:String,pattern:String,required:Boolean,rows:{value:[]},params:{type:Object,value:""},colorType:{type:Array}}}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this;this.loader.then(()=>{})}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.title=ProductSearchBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=self.pl.params;self.colorType=["success","secondary","warning","danger","primary"];self.loader=this.loadData()}};var productSearch={ProductSearchBase:ProductSearchBase};const ProductSearchStyles=css`
.search-wrapper{
    height:60px;
    background-color:var(--app-default-color);
    }
`;var productSearchCss={ProductSearchStyles:ProductSearchStyles};class ProductSearch extends ProductSearchBase{static get styles(){return[ProductSearchStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        </style>
    <div  class="search-wrapper">
                            <!-- Title -->
                             <div class="column" style="padding-top: 15px;padding-left: 20px;padding-right: 20px;">
          <div class="control has-addon has-icon" style="display: flex;">
                                  <input class="input is-medium" type="text" placeholder="Search for products, brands and categories" style="border-bottom-right-radius: 0px;border-top-right-radius: 0px;">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <a class="button is-primary is-fullwidth " style="width: 120px;height: 26px;border-top-left-radius: 0px;border-bottom-left-radius: 0px;border-color: #f5f5f536;">
            <span>SEARCH</span></a>
                                  </div>
                                  
                                  </div>
                            <!-- Controls -->
                             
                            </div>

        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(ProductSearch.is,ProductSearch);export{productSearch as $productSearch,productSearchCss as $productSearchCss,ProductSearchBase,ProductSearchStyles};