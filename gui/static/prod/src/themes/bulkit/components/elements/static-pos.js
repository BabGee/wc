import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { SharedStyles, shopProductsSectionTheme } from "../../styles/shared-styles.js";
import { shopProductItemTheme } from "../../styles/shop-product-item-styles.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { SHOP_STYLES } from "../../styles/shop-styles.js";
import { StaticPosBase } from "../../../../elements/base/static-pos.js";

class StaticPos extends StaticPosBase {
  renderDefault() {
    return html`
        ${SHOP_STYLES}
        ${shopProductsSectionTheme}
        ${shopProductItemTheme}
        ${SharedStyles}
        <style>
        html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

/* Responsive Images */

embed,
iframe,
img,
object,
video {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding-right: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
}

a:focus {
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  display: block;
}

/* Removes all decimals and discs from lists */

ol,
ul {
  list-style: none;
}

/* 
 * Completely resets form items
 * ----------------------------
 * Super hard reset that removes all borders
 * and radiuses of all form items (including
 * checkboxes and radios)
 */

.calculator__keys input,
.calculator__keys textarea, button {
  border: 0;
  border-radius: 0;
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  appearance: none;
  text-align: left;
}






.pad {
display: none;
  font-size: 120%;
  font-weight: 700;
  line-height: 1.3;
  max-width: 40em;
  margin: auto;
}

.pad > p {
  text-align: center;
}

.calculator {
  border-radius: 12px;
  box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  overflow: hidden;
}

.calculator__display {
  background-color: #222222;
  color: #fff;
  font-size: 1.714285714em;
  padding: 1.5em 2.5em;
  text-align: right;
}

.calculator__keys {
  background-color: #999;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
}

.calculator__keys > * {
  background-color: #fff;
  padding:  3em 2em;
  position: relative;
  text-align: center;
}

.calculator__keys > *:active::before,
.calculator__keys > .is-depressed::before {
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5) inset;
  content: "";
  left: 0;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.key--operator {
  background-color: #eee;
}

.key--equal {
  background-image: linear-gradient(to bottom, #fe886a, #ff7033);
}
#btn-keypad{
display: none;
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
</style>
        
        <div class="title_section">
            <div class="wrapper">
                <h2>${this.title}</h2>
            </div>

        </div>
        
                <div class="topnav">
            <div class="search-container">

                <input type="text" value="" style="display: inline-block" placeholder="Search for products, brands, barcode" name="search">
                <button style="display: unset" type="submit"><b>SEARCH</b></button>
                <button id ="btn-keypad" type="submit" @click="${this.showpad}"><iron-icon icon="icons:apps"></iron-icon></button>

            </div>
        </div>
       
               <section class="shop-products-section">
            <div class="container u-full-width">
<div class="section" >
                            <div id="products_section" class="column is-12 is-tablet-landscape-padded">
                            <div class="columns is-product-grid is-multiline">
                         ${this._filterKeypad(this.productItems).map(product => html`

                                    <div class="column is-3">
                                            <div class="flat-card" style="min-height: unset; max-height: unset">
                                                    <!--<shop-product-item product="[[product]]"></shop-product-item>-->
            
                                                    <div class="one_fourth">
                                                         
                                                        <div class="text-center product_image">
                                                            <button class="badge">${product.group}</button>
                                                            <img src="/media/${product.image}" />
                                                        
                                                        </div>
                                                       
                                                        <!--Price Box -->
                                                        <div class="product-details"> 
                                                                <p>${product.group} </p>
                                                              

                                                                <div> 
                                                                        <h4>${product.name} (${product.kind})</h4>
                                                             <span class="price-box ri"> 
                                                                 <span class="price ">
                                                                     <span data-currency-iso="KES">${product.currency_code}</span> <span dir="ltr" data-price="14399">${product.price}</span> 
                                                                     </span> 
                                                                      <span class="price -old  -no-special"></span>
                                                                     </span>
                                                                     
                                                                </div>
                                                                    
                                                                     <div> 
                                                                        <!--</div>-->
                                                                        <div>
                                                                        </div>
                                                                        
                                                                     </div>
                                                                    </div>
                                                                    <button   style="cursor: pointer" data-target="modal" aria-haspopup="true"
                                                                    product-id=${product.id} onclick=${() => this._addProduct(product.id)} class="btncart">Add to Cart</button>
                                                        <div class="v_center_flex">
                                                           
                                                            <div class="cb"></div>
                                                        </div>
                                                    </div>
            
            
                                                </div>
                                        </div>
                                               `)} 
                            <div class="cb"></div>
                            </div>
                            </div>
                            <div id="quickview-trigger" class="menu-fab">
            <a class="hamburger-btn" @click=${this.openCartView}>
                      <iron-icon class="brand-filigrane" icon="icons:shopping-cart"></iron-icon>
            </a>
            <div class="cart-badge" aria-hidden="true"><span>${this.cartItems.length}</span></div>
        </div>
         <div id="cart-view" class="cart-quickview">
            <div class="inner">
                <!-- Header -->
                <div class="quickview-header">
                    <h2>Pos Cart</h2>
                    <span id="close-cart-sidebar" @click=${this.closeCartView}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                </div>
                <!-- Total and checkout -->
                <div class="cart-action">
                    <span class="cart-total">
                        <small>KES</small>${this._computeTotals(this.cartItems)}
                    </span>
                    <a @click="${this._submit}" class="button primary-button feather-button is-bold raised">
                        <span>Checkout</span>
                    </a>
                </div>
                <!-- Cart quickview body -->
                <div class="cart-body">
                    <ul class="shopping-cart-items">
                     ${this.cartItems.map((cartItem, idx) => html`
                        <!-- Item -->
                        <li class="clearfix">
                            <img src="/media/${cartItem.item.image}" alt="">
                            <span class="item-meta">
                                <span class="item-name">${cartItem.item.name}</span>
                                <span class="item-price">${cartItem.item.currency_code} ${cartItem.item.price}</span>
                            </span>
                            <span class="quantity">
                                <input id="chart_item_${cartItem.item.id}" class="input is-rounded" type="number" min="1" step="1" value="${cartItem.quantity}" onchange=${() => this._changeQuantity(cartItem.item.id)}>
                            </span>
        
                            <span class="remove-item" onclick="${() => this._removeCartItem(cartItem.item.id)}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x has-simple-popover" data-content="Remove from Cart" data-placement="top"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </span>
                        </li>
                        <!-- Item -->
                         `)}
                    </ul>
                </div>
            </div>
        </div>
                            </div>
               
               
                    <div class="pad">
                        <div class="calculator">
      <div class="calculator__display"></div>
                    <div class="calculator__keys">
  <button @click="${this.display}">7</button>
  <button @click="${this.display}">8</button>
  <button @click="${this.display}">9</button>
  <button @click="${this.display}">4</button>
  <button @click="${this.display}">5</button>
  <button @click="${this.display}">6</button>
  <button @click="${this.display}">1</button>
  <button @click="${this.display}">2</button>
  <button @click="${this.display}">3</button>
   <button style="background-color: #e43537" @click="${this.clear}">C</button>
  <button @click="${this.display}">0</button>
  <button class="key--equal" @click="${this.addPadCart}">+</button>
</div>
</div>
</div>
            </div>
        </section> 
        
     
        `;
  }

  constructor() {
    super();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  _filterKeypad(rows) {
    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i]; // institution name isn't specified in values

      var group = item.group;

      if (group === 'Keypad') {
        this.qs('#btn-keypad').style.display = 'unset';
        this.itemPad = item;
      } else {
        filtered_items.push(item);
      }
    }

    return filtered_items;
  }

  showpad() {
    if (!this.is_pad) {
      this.qs('#products_section').style.display = 'none';
      this.qs('.pad').style.display = 'block';
      this.is_pad = true;
    } else {
      this.qs('#products_section').style.display = 'flex';
      this.qs('.pad').style.display = 'none';
      this.is_pad = false;
    }
  }

  display(numb) {
    var result = this.qs('.calculator__display').textContent;
    this.qs('.calculator__display').textContent = +result + '' + numb;
  }

  clear() {
    this.qs('.calculator__display').textContent = '';
  }

  setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
  }

  addPadCart() {
    var result = this.qs('.calculator__display').textContent;
    var retrievedObject = localStorage.getItem('pos-cart');
    const items = JSON.parse(retrievedObject);

    if (result.charAt(0) == 0) {
      result = this.setCharAt(result, 0, '');
    }

    if (Number(result) !== 0) {
      // this.itemPad.price = Number(result);
      const product = this._findProductItem(this.itemPad.id); // console.log(cartItem);


      this.currentProduct = product;
      product.price = Number(result);

      let cartItem = this._findInCartItem(items, this.itemPad.id); // console.log(cartItem);


      if (cartItem === undefined) {
        cartItem = {
          'item': product,
          'quantity': 1
        };
        items.push(cartItem);
      } else {
        var index = items.indexOf(cartItem);
        items[index].item.price = Number(items[index].item.price) + Number(result);
      }
    }

    localStorage.setItem('pos-cart', JSON.stringify(items));
    this.cartItems = items;
    this.clear();
  }

  _changeQuantity(productId) {
    const value = this.qs('#chart_item_' + productId).value;

    const cartItem = this._findCartItem(productId);

    const index = this.cartItems.indexOf(cartItem);
    var group = cartItem.group;

    if (group !== 'Keypad') {
      this.cartItems[index].quantity = Number(value);
      this.cartItems = [...this.cartItems]; // this.cartItems[index] = cartItem['quantity'] + 1;
    } else {
      this.qs('#chart_item_' + productId).value = 1;
      this.qs('#chart_item_' + productId).textContent = 1;
      this.cartItems[index].quantity = 1;
      this.cartItems = [...this.cartItems];
    } // this.set('cartItems.' + index + '.quantity', cartItem['quantity'] + 1);


    localStorage.setItem('pos-cart', JSON.stringify(this.cartItems));
  }

  closeCartView() {
    this.qs('#cart-view').classList.remove('is-active');
  }

  openCartView() {
    this.qs('#cart-view').classList.add('is-active');
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(StaticPos.is, StaticPos);