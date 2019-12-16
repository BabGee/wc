import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{SHOP_STYLES}from"../../styles/shop-styles.js";import{SharedStyles}from"../../styles/shared-styles.js";import{StaticProductsListBase}from"../../../../elements/base/static-products-list.js";class StaticProductsList extends StaticProductsListBase{renderDefault(){return html`
        ${SHOP_STYLES}
        ${SharedStyles}
        <style>
        /* The Modal (background) */
.product-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 2000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.product-modal-content {
  margin: 15% auto; /* 15% from the top and centered */
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.card {
  background-color: white;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  border-radius: 5px;
  margin: 20px;
}
.detail-image img{
width: 100%;
    height: 250px;
    margin: 10px auto;
    object-fit: contain;
}
.detail{
padding: 50px;
}
.detail-name{
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600!important;
}
.detail-description{
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
}
.detail-price{
    font-size: 24px;
    font-weight: 600!important;
    color: #58d288;
}
.ribbon{
background-color: #58d288;
    border-right: none;
    color: #fff;
    margin: 5px;
    font-size: 1rem !important;
    justify-content: center;
    padding: 8px 0.75em;
    text-align: center;
    white-space: nowrap;
    position: absolute;
    top: 0.5em;
    left: 0;
    font-weight: 400;
    z-index: 2;
}
.close-modal{
background-color: #ffffff;
    border-radius: 100%;
    border-right: none;
    height: 32px;
    width: 32px;
    color: #000000;
    font-size:20px;
    justify-content: center;
    padding: 10px;
    text-align: center;
    white-space: nowrap;
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 400;
    z-index: 2;
}
        </style>
<div>
                <!-- Container -->
                <div class="card">
    <div class="category-header">
                        <div class="column is-12 is-tablet-landscape-padded">
                            <!-- Title -->
                                <div class="category-title is-product-category">
                                <h2>${this.title}</h2>
                                  </div>
                  
                  </div>
                             
                            </div>
                            <!-- /Controls -->
        
                            <!-- Product grid -->
                            <div class="column is-12 is-tablet-landscape-padded">
                            <div class="columns is-product-grid is-multiline is-centered">
                              ${this.productItems.map(product=>html`
                                <!-- Product -->
                                 
                                 <div class="column is-2">
                                    <div class="flat-card" @click =${()=>this._productDialog(product)}>
                                    <!-- Product zoomable image -->
                                <div class="image">
                                    <img src="/media/${product.image||"crm_productitem_imagepath/NO_Image_sMI9Ypk.jpg"}" alt="">
                                    </div>
                                    <!-- Product meta -->
                                    <div class="product-info has-text-centered">
                                    <a href="product.html"><h3 class="product-name">${product.name} (${product.kind})</h3></a>
                                <p class="product-description">${product.group} </p>
                                    <p class="product-price">
                                    <span data-currency-iso="KES">${product.currency_code}</span>
                                    ${product.price}
                                    <!--<span class="sale-price">45,00</span>-->
                                </p>
                                </div>
                                <!-- Product actions -->
                                <div class="actions">
                                    <div class="add" 
                                         .product-id=${product.id}
                                         @click=${this._productDetails}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart has-simple-popover" data-content="Add to Cart" data-placement="top"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                    </div>
                                <div class="like"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart has-simple-popover" data-content="Add to Wishlist" data-placement="top"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
                                </div>
                                </div>
                                </div>
                           
                                <!-- Product -->
                                 `)} 
                            </div>
                            <!-- /Product grid -->
                            </div>
        
        
                        </div>
                        </div>
                          <!-- Main wrapper -->
                          <div id="productModal" class="product-modal">

  <!-- Modal content -->
  <div class="product-modal-content">
                <div class="column is-12  is-tablet-landscape-padded">
                                <!-- Title -->

                                <!-- Order -->
                                <div class="flat-card is-auto is-checkout-form">
                                    <div class="columns is-gapless ">
                                    <!---->
                                        <!-- Order Total -->
                                        <div class="column is-6">
                                            <div>
                                             <div class="column is-12">
                                              <div class="box has-ribbon-left" style="margin: 5px">  
                                              <div class="ribbon is-success">ON OFFER</div>
                                              <div class="close-modal"  @click =${()=>this._productDialogClose()} >X</div>
        
                <!-- Product image -->
                <div id="product-view" class="detail-image translateLeft">
                    <img data-action="zoom" alt="" src="/media/${this.selectedProduct.image||"crm_productitem_imagepath/NO_Image_sMI9Ypk.jpg"}">
                </div>
        
                                             </div> </div>
                                            </div>
                                        </div>
                                     <!---->
                                        <!-- Order Total -->
                                        <div class="column is-6" style="background-color: #f9f9f9;">
                                            <div>
                                            <div class="column is-12">
                                    <!-- Product meta -->
                                    <div class="detail">
                                    <div class="product-info">
                                    <a href="product.html"><h1 class="detail-name"><!---->${this.selectedProduct.name} </h1></a>
                                <p class="detail-description"><!---->${this.selectedProduct.description}  </p>
                                         <p class="product-description"><!---->${this.selectedProduct.kind}  </p>
                                    <p class="detail-price">
                                    <span class="detail-price"><!---->KES<!----></span>
                                    ${this.selectedProduct.price} 
                                    <!--<span class="sale-price">45,00</span>-->
                                </p>
                                <a class="button primary-btn is-success is-large" .product-id=${this.selectedProduct.id} @click=${this._productDetails} style="width: 100%; color:#fff;">ADD TO CART</a>
                                </div>
                                <!-- Product actions -->
                                </div>
                                </div>
                                </div>
                                            </div>
                                        </div>
                                     <!---->    
                                    </div>
                                </div>
                               
                       
                            </div>
         </div>

</div>
        <!-- /Main wrapper --  
    
        `}constructor(){super()}_productDialog(product){this.selectedProduct=product;this.shadowRoot.querySelector("#productModal").style.display="block"}_productDialogClose(){this.shadowRoot.querySelector("#productModal").style.display="none"}_findProductItem(productId){var results=this.productItems.filter(function(item){return item.id===parseInt(productId)});return results[0]}_productDetails(evt){const productId=evt.currentTarget["product-id"],product=this._findProductItem(productId);this.currentProduct=product;this._addCartItem(evt)}}customElements.define(StaticProductsList.is,StaticProductsList);