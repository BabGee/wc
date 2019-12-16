import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../icons/my-icons.js";import{SharedStyles}from"../../styles/shared-styles.js";import{ShoppingCartBtnBase}from"../../../../elements/base/shopping-cart-btn.js";class ShoppingCartBtn extends ShoppingCartBtnBase{renderDefault(){return html`
             ${SharedStyles}
             <style>

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
        </style>
             <div class="menu-fab" @click=${this.shopping}>
             <a id="shopping">     <iron-icon icon="icons:shopping-cart"></iron-icon></a>
             <div class="cart-badge" aria-hidden="true">${this.carted}</div>
            </div>
             `}constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}}customElements.define(ShoppingCartBtn.is,ShoppingCartBtn);