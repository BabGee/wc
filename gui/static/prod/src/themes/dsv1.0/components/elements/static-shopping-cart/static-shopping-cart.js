import{SerializableElement,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const StaticShoppingCartBase=class extends utilsMixin(SerializableElement){static get is(){return"static-shopping-cart"}constructor(){super();this.cartItems=[];var retrievedObject=localStorage.getItem("shop-cart");if(!retrievedObject){localStorage.setItem("shop-cart","[]")}else{this.cartItems=JSON.parse(retrievedObject)}}static get properties(){return{icon:String,target:String,data_name:String,service:String,params:{type:Object,value:{}},color:String,sums:Object,loading:{type:Boolean,value:!1},title:String,cartItems:{type:Array}}}static get observers(){return["_computeQuantity(cartItems.*)"]}getName(){return this.e.formName}getValue(){if(!this.cartItems){return""}const cartItemQuantities=this.cartItems.map(item=>item.item.id+"|"+item.quantity);return cartItemQuantities.join(",")}validate(){return!0}valid(){return!0}static get behaviors(){return[]}_computeTotal(quantity,price){return quantity*price}_computeTotals(){this;if(!this.cartItems){return 0}return this.cartItems.reduce(function(accumulator,currentValue){return accumulator+currentValue.quantity*currentValue.item.price},0)}_computeQuantity(){if(!this.cartItems){return 0}this.pl.bind=this.cartItems.reduce(function(accumulator,currentValue){return accumulator+currentValue.quantity},0)}_findCartItem(productId){var results=this.cartItems.filter(function(item){return item.item.id===parseInt(productId)});if(results.length){return results[0]}}_changeQuantity(productId){const value=this.shadowRoot.querySelector("#chart_item_"+productId).value,cartItem=this._findCartItem(productId),index=this.cartItems.indexOf(cartItem);this.cartItems[index].quantity=value;this.cartItems=[...this.cartItems];localStorage.setItem("shop-cart",JSON.stringify(this.cartItems));this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_incrementQuantity(evt){const productId=evt.currentTarget.dataset.product,cartItem=this._findCartItem(productId),index=this.cartItems.indexOf(cartItem);this.cartItems[index].quantity=cartItem.quantity+1;this.cartItems=[...this.cartItems];localStorage.setItem("shop-cart",JSON.stringify(this.cartItems));this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_decrementQuantity(evt){const productId=evt.currentTarget.dataset.product,cartItem=this._findCartItem(productId),index=this.cartItems.indexOf(cartItem);if(1<cartItem.quantity){this.cartItems[index].quantity=cartItem.quantity-1;this.cartItems=[...this.cartItems];localStorage.setItem("shop-cart",JSON.stringify(this.cartItems))}this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_removeCartItem(evt){const product_id=evt.currentTarget.cartItem,cartItem=this._findCartItem(product_id);var index=this.cartItems.indexOf(cartItem);if(-1<index){this.cartItems.splice(index,1);this.cartItems=[...this.cartItems];localStorage.setItem("shop-cart",JSON.stringify(this.cartItems))}this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_removeAllCartItems(){if(0!==this.cartItems){this.cartItems=[];localStorage.removeItem("shop-cart")}this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_submit(){this.pl.submitForm()}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=StaticShoppingCartBase.toTitleCase(pElement.name);self.icon=pElement.icon}};var staticShoppingCart={StaticShoppingCartBase:StaticShoppingCartBase};const StaticShoppingCartStyles=css`

`;var staticShoppingCartCss={StaticShoppingCartStyles:StaticShoppingCartStyles};class StaticShoppingCart extends StaticShoppingCartBase{static get styles(){return[StaticShoppingCartStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    
 <div class="shop-wrapper is-mobile-mode">
<div class="section" >
                <!-- Container -->
                <div class="container" >
                    <!-- Cart page -->
                    <div class="columns account-header">
                        <div class="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <div class="account-title">
                                <h2>MY CART</h2>                  
                            </div>
                            <!-- Total and checkout -->
                            <div class="cart-summary">
                                <span class="cart-total">
                                    KES ${this._computeTotals(this.cartItems)} <small>${this.cartItems.length} <span>items in cart</span></small>
                                       <span>
                                 <a class="button is-danger is-outlined" @click=${()=>this._removeAllCartItems()} ><span>Clear</span><span><iron-icon icon="icons:delete"></iron-icon></span></a> </span>
                                </span>
                              
                                <button class="button feather-button is-bold primary-button raised" @click=${this._submit}>
                                    CHECKOUT
                                </button>
                            </div>
        
                            <!-- Cart Layout -->
                            <div class="columns is-account-grid is-multiline">
                                            ${this.cartItems.map(cartItem=>html`
                                <!-- Product list -->
                                <div class="column is-12">
                                    <!-- Product -->
                                    <div class="flat-card is-auto cart-card">
                                        <ul class="cart-content">
                                            <li>
                                                <img src="/media/${cartItem.item.image}" alt=${cartItem.item.name}>
                                                <span class="product-info">
                                                    <span>${cartItem.item.name}</span>
                                                    <span>${cartItem.item.kind}</span>
                                                </span>
                                                <span class="product-price">
                                                    <span>Price</span>
                                                    <span>${cartItem.item.currency_code} ${cartItem.item.price}</span>
                                                </span>
        
                                                <span class="product-quantity">
                                                    <span>Qty</span>
                                                    <span class="control">
                                                        <input id="chart_item_${cartItem.item.id}" class="input" type="number" min="1" step="1" value="${cartItem.quantity}" @change=${()=>this._changeQuantity(cartItem.item.id)}>
                                                    </span>
                                                </span>
        
                                                <span class="action">
                                                    <span class="action-link is-like has-simple-popover" data-content="Add to Wishlist" data-placement="top">
                                                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart feather-icons"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a>
                                                    </span>
                                                    <span class="action-link is-remove has-simple-popover" 
                                                        data-content="Remove from Cart" 
                                                        data-placement="top">
                                                        <a @click="${this._removeCartItem}" .cartItem="${cartItem.item.id}">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x feather-icons"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                        </a>
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                       `)}
                            </div>
                            <!-- /Cart Layout -->
                        </div>
                    </div>
                    <!-- /Cart page -->
        
              
                </div>
                <!-- /Container -->
            </div>
            
</div>
        
    `}constructor(){super()}valid(){}invalid(){}_changeQuantity(productId){const value=this.shadowRoot.querySelector("#chart_item_"+productId).value,cartItem=this._findCartItem(productId),index=this.cartItems.indexOf(cartItem);this.cartItems[index].quantity=value;this.cartItems=[...this.cartItems];localStorage.setItem("shop-cart",JSON.stringify(this.cartItems));this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_incrementQuantity(evt){console.log("_incrementQuantity");const productId=evt.currentTarget.dataset.product,cartItem=this._findCartItem(productId),index=this.cartItems.indexOf(cartItem);this.cartItems[index].quantity=cartItem.quantity+1;this.cartItems=[...this.cartItems];localStorage.setItem("shop-cart",JSON.stringify(this.cartItems));this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_decrementQuantity(evt){console.log("_decrementQuantity");const productId=evt.currentTarget.dataset.product,cartItem=this._findCartItem(productId),index=this.cartItems.indexOf(cartItem);if(1<cartItem.quantity){this.cartItems[index].quantity=cartItem.quantity-1;this.cartItems=[...this.cartItems];localStorage.setItem("shop-cart",JSON.stringify(this.cartItems))}this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}_removeCartItem(evt){const product_id=evt.currentTarget.cartItem,cartItem=this._findCartItem(product_id);var index=this.cartItems.indexOf(cartItem);if(-1<index){this.cartItems.splice(index,1);this.cartItems=[...this.cartItems];localStorage.setItem("shop-cart",JSON.stringify(this.cartItems))}this.dispatchEvent(new CustomEvent("change-cart-count",{bubbles:!0,composed:!0,detail:{}}))}}customElements.define(StaticShoppingCart.is,StaticShoppingCart);export{staticShoppingCart as $staticShoppingCart,staticShoppingCartCss as $staticShoppingCartCss,StaticShoppingCartBase,StaticShoppingCartStyles};