import{dataSourceMixin,utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const ShopProductsMenuBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super();this.currentData=[]}static get is(){return"shop-products-menu"}static get properties(){return{icon:String,params:Object,title:String,variable:String,menu_open:Boolean}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{const objs={};for(var d=0,itemT;d<dsc.data.length;d++){itemT=dsc.data[d];if(!objs[itemT.category]){objs[itemT.category]=[]}var toPush={name:itemT.group,href:itemT.links};objs[itemT.category].push(toPush)}self.currentData=self._toArray(objs)})}_followLink(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}dscDataName(){return this.e.defaultValue}_toArray(obj){return Object.keys(obj).map(function(key){return{name:key,value:obj[key]}})}init(pElement,loader){super.init(pElement,loader);var self=this;self.icon=pElement.icon;self.title=ShopProductsMenuBase.toTitleCase(pElement.name);self.kind=pElement.kind;self.params=loader.pl.paramsCopy();self.loader=this.loadData()}};var shopProductsMenu={ShopProductsMenuBase:ShopProductsMenuBase};const ShopProductsMenuStyles=css`
.tab-right-bottom{
    margin-top: 20px;
    position: absolute;
    bottom: 0px;
    /* margin-top: 30px; */
  }
`;var shopProductsMenuCss={ShopProductsMenuStyles:ShopProductsMenuStyles};class ShopProductsMenu extends ShopProductsMenuBase{renderDefault(){return html`           

        <div class="section">
            <!-- Container -->
            <div class="container">
	            <header>
		            <div class="cd-dropdown-wrapper">
			            <a class="cd-dropdown-trigger" @click="${this.close_menu}">
			                <span style="border-radius: 5px;border: 1px solid white; padding: 8px;" >
			                    <span>CATEGORIES</span>
			                </span>
			            </a>
                        <nav class="cd-dropdown">
                            <h2>BROWSE CATEGORIES</h2>
                            <a class="cd-close" @click="${this.close_menu}">Close</a>
                            <ul class="cd-dropdown-content">
                                ${this.currentData.map((item,index)=>html` 
                                    <li class="has-children">   
                                        <a @click="${()=>this.move_out(index)}" id="item_${index}" >
                                            <iron-icon icon="icons:shopping-cart"></iron-icon>${item.name}
                                        </a>
                                        <ul id="sub_item_${index}" class="cd-secondary-dropdown is-hidden fade-out">
                                            <li class="go-back" @click="${()=>this.go_back(index)}"><a>Menu</a></li>
                                            <li class="see-all">All ${item.name}</a></li>
                                            <li class="has-children">
                                                <a >${item.name}</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back"><a href="">${item.name}</a></li>
                                                    ${item.value.map(sub=>html`
                                                        <li><a  .dataLink="${sub.href[0]}"  @click="${this._followLink}">${sub.name}</a></li>
                                                    `)}
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>    
                                `)}
                            </ul>
                        </nav> 
                    </div>    
	            </header>
	        </div>
	    </div>`}constructor(){super()}move_out(index){if(this.menu_open&&window.matchMedia("screen and (max-width: 768px)").matches){this.qs("#sub_item_"+index).classList.remove("is-hidden");this.qs(".cd-dropdown-content").classList.add("move-out")}}go_back(index){if(this.menu_open&&window.matchMedia("screen and (max-width: 768px)").matches){this.qs("#sub_item_"+index).classList.add("is-hidden");this.qs(".cd-dropdown-content").classList.remove("move-out")}}close_menu(){if(this.menu_open){this.menu_open=!1;this.qs(".cd-dropdown-trigger").classList.remove("dropdown-is-active");this.qs(".cd-dropdown").classList.remove("dropdown-is-active")}else{this.menu_open=!0;this.qs(".cd-dropdown-trigger").classList.add("dropdown-is-active");this.qs(".cd-dropdown").classList.add("dropdown-is-active")}}}customElements.define(ShopProductsMenu.is,ShopProductsMenu);export{shopProductsMenu as $shopProductsMenu,shopProductsMenuCss as $shopProductsMenuCss,ShopProductsMenuBase,ShopProductsMenuStyles};