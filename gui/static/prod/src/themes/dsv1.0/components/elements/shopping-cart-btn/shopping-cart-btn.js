import{BaseElement,serviceCallMixin,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const ShoppingCartBtnBase=class extends utilsMixin(serviceCallMixin(BaseElement)){static get is(){return"shopping-cart-btn"}static get properties(){return{icon:String,title:String,reform:{type:Boolean,value:!0},carted:{type:Number},cartItems:{type:Array}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;var retrievedObject=localStorage.getItem("shop-cart");if(!retrievedObject){localStorage.setItem("shop-cart","[]")}self._cartCount()}initializeEmptyCart(){this.set("cartItems",[])}_myLocationListener(evt){this._addCartItem(evt.detail.item,evt.detail.quantity)}_cartCount(){this.cartItems=[];var retrievedObject=localStorage.getItem("shop-cart");if(!retrievedObject){localStorage.setItem("shop-cart","[]")}else{this.cartItems=JSON.parse(retrievedObject)}this.carted=this.cartItems.length}_computeQuantity(){var retrievedObject=localStorage.getItem("shop-cart");const items=JSON.parse(retrievedObject);if(!items.length){return 0}return items.reduce(function(accumulator,currentValue){return accumulator+ +currentValue.quantity},0)}constructor(){super();this.navigateTo="";this.carted=0;this._boundListener=this._myLocationListener.bind(this);this._boundListener2=this._cartCount.bind(this)}connectedCallback(){super.connectedCallback();window.addEventListener("add-cart-item",this._boundListener);window.addEventListener("change-cart-count",this._boundListener2)}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("add-cart-item",this._boundListener);window.removeEventListener("change-cart-count",this._boundListener2)}_findCartItem(items,productId){var results=items.filter(function(item){return item.item.id===parseInt(productId)});if(results.length){return results[0]}}_addCartItem(item,quantity){const productId=item.id;var retrievedObject=localStorage.getItem("shop-cart");const items=JSON.parse(retrievedObject);let cartItem=this._findCartItem(items,productId);if(cartItem===void 0){cartItem={item:item,quantity:quantity};items.push(cartItem)}else{var index=items.indexOf(cartItem);items[index].quantity+=quantity}localStorage.setItem("shop-cart",JSON.stringify(items));this._cartCount()}shopping(){var self=this;window.history.replaceState("shopping cart","shopping cart",self.navigateTo);self.pl._dialog.apply(self.pl,[self.payload,{service:this.e.service,params:this.serviceCallParams()}])}serviceCallParams(){this.params.data_name=this.e.defaultValue;return this.params}loadCartPage(){this.callService(this.e.service).then(response=>{this.payload=response.serviceCommands.get_section;if(window.location.pathname===this.navigateTo){this.pl._dialog.apply(this.pl,[this.payload,{service:this.e.service,params:this.serviceCallParams()}])}}).catch(()=>console.log)}init(pElement,loader){super.init(pElement,loader);var self=this;self.service=pElement.service;self.params=loader.pl.paramsCopy();self.title=ShoppingCartBtnBase.toTitleCase(pElement.name);const au=document.querySelector("adaptive-ui"),basePath=au.getAttribute("path");if(!window.paths){window.paths={}}const key=`/${basePath}/${pElement.details.path}/`;self.navigateTo=key;self.loadCartPage()}};var shoppingCartBtn={ShoppingCartBtnBase:ShoppingCartBtnBase};const ShoppingCartBtnStyles=css`
.menu-fab {
    position: fixed;
    right: 58px;
    top: 12px;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 901;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04);
    transition: all .4s;
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
    opacity: 1
}

.cart-badge {
    position: absolute;
    top: -2px;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: #F44336;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    font-weight: 500;
    pointer-events: none;
    text-align: center;
    
}
a{
    text-decoration: none;
}
`;var shoppingCartBtnCss={ShoppingCartBtnStyles:ShoppingCartBtnStyles};class ShoppingCartBtn extends ShoppingCartBtnBase{static get styles(){return[ShoppingCartBtnStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
             <div class="menu-fab" @click=${this.shopping}>
             <a id="shopping">     <iron-icon icon="icons:shopping-cart"></iron-icon></a>
             <div class="cart-badge" aria-hidden="true">${this.carted}</div>
            </div>
             `}constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}}customElements.define(ShoppingCartBtn.is,ShoppingCartBtn);export{shoppingCartBtn as $shoppingCartBtn,shoppingCartBtnCss as $shoppingCartBtnCss,ShoppingCartBtnBase,ShoppingCartBtnStyles};