import { html } from "../../../../node_modules/lit-element/lit-element.js";
export const SHOP_STYLES = html`
<style>
/*! core.scss | Nephos | CSS Ninja */


/*! _theme-default.scss | Nephos | CSS Ninja */


/*! _colors.scss | Nephos | CSS Ninja */


/*! _sidebar.scss | Nephos | CSS Ninja */

*{
  
}

.main-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 80px;
    background-color: #fff;
    box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.02);
    border-right: 1px solid #ededed;
    z-index: 10;
    transition: all .3s
}

.main-sidebar.is-pushed-mobile {
    -webkit-transform: translateX(-61px) !important;
    transform: translateX(-61px) !important
}

.main-sidebar .sidebar-brand {
    width: 80px;
    height: 80px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #fcfcfc;
    border-right: 1px solid #ededed
}

.main-sidebar .sidebar-brand img {
    width: 32px;
    height: 32px
}

.main-sidebar .sidebar-inner {
    height: 100%;
    width: 100%;
    position: relative
}

.main-sidebar .sidebar-inner .icon-menu li,
.main-sidebar .sidebar-inner .bottom-menu li {
    width: 80px;
    height: 80px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center
}

.main-sidebar .sidebar-inner .icon-menu li a,
.main-sidebar .sidebar-inner .bottom-menu li a {
    display: block;
    position: relative;
    max-height: 20px;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
    transition: all .3s
}

.main-sidebar .sidebar-inner .icon-menu li a svg,
.main-sidebar .sidebar-inner .bottom-menu li a svg {
    stroke: #A9ABAC;
    width: 20px;
    height: 20px
}

.main-sidebar .sidebar-inner .icon-menu li a:hover svg,
.main-sidebar .sidebar-inner .icon-menu li a.is-active svg,
.main-sidebar .sidebar-inner .bottom-menu li a:hover svg,
.main-sidebar .sidebar-inner .bottom-menu li a.is-active svg {
    stroke: var(--app-default-color)
}

.main-sidebar .sidebar-inner .icon-menu li a .cart-items,
.main-sidebar .sidebar-inner .bottom-menu li a .cart-items {
    position: absolute;
    top: -6px;
    right: -9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 9px;
    background: var(--app-default-color);
    font-weight: 700
}

.main-sidebar .sidebar-inner .icon-menu li a.is-opened,
.main-sidebar .sidebar-inner .bottom-menu li a.is-opened {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    opacity: 0
}

.main-sidebar .sidebar-inner .icon-menu li a.is-inactive,
.main-sidebar .sidebar-inner .bottom-menu li a.is-inactive {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    opacity: 0
}

.main-sidebar .sidebar-inner .icon-menu li #open-filters svg,
.main-sidebar .sidebar-inner .bottom-menu li #open-filters svg {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    transition: all .3s
}

.main-sidebar .sidebar-inner .icon-menu li #open-filters:hover svg,
.main-sidebar .sidebar-inner .bottom-menu li #open-filters:hover svg {
    -webkit-transform: rotate(145deg);
    transform: rotate(145deg)
}

.main-sidebar .sidebar-inner .bottom-menu {
    position: absolute;
    bottom: 80px;
    padding: 0
}


/*! _quickview.scss | Nephos | CSS Ninja */

.menu-fab {
    position: fixed;
    right: 30px;
    top: 12px;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 900;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04);
    transition: all .4s;
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
    opacity: 1
}

.menu-fab.dismissed {
    -webkit-transform: translateX(300px) rotate(360deg);
    transform: translateX(300px) rotate(360deg);
    opacity: 0
}

.menu-fab a {
    padding: 10px 0
}

.menu-fab .menu-toggle {
    font-size: 20px;
    color: #666;
    line-height: 48px;
    text-align: center;
    background: transparent;
    display: block;
    width: 24px;
    height: 26px;
    cursor: pointer;
    padding: 0;
    margin: 0 14px;
    transition: opacity 0.4s;
    opacity: 1;
    position: relative;
    -webkit-transform: scale(0.7);
    transform: scale(0.7)
}

.menu-fab .menu-toggle .icon-box-toggle {
    height: 100%;
    width: 100%;
    background: tranparent;
    position: relative;
    display: block
}

.menu-fab .menu-toggle .icon-box-toggle.active>span.rotate {
    -webkit-transform: rotate(90deg);
    transform: translate(0px, 0px) rotate(90deg)
}

.menu-fab .menu-toggle .icon-box-toggle.active>span>i.icon-line-center {
    visibility: hidden;
    width: 1px;
    height: 3px;
    left: 70%
}

.menu-fab .menu-toggle .icon-box-toggle.active>span>i.icon-line-bottom {
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transform: rotate(135deg);
    transform: translate(0px, 0px) rotate(135deg)
}

.menu-fab .menu-toggle .icon-box-toggle.active>span>i.icon-line-top {
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transform: rotate(45deg);
    transform: translate(0px, 0px) rotate(45deg)
}

.menu-fab .menu-toggle .icon-line-center {
    position: absolute;
    width: 20px;
    height: 2px;
    background: var(--app-default-color);
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    transition: all .2s ease
}

.menu-fab .menu-toggle .icon-line-top {
    position: absolute;
    width: 20px;
    height: 2px;
    background: var(--app-default-color);
    margin: -2px 0 0 -10px;
    left: 50%;
    top: 30%;
    transition: all .2s ease
}

.menu-fab .menu-toggle .icon-line-bottom {
    position: absolute;
    width: 20px;
    height: 2px;
    background: var(--app-default-color);
    margin: 1.5px 0 0 -10px;
    left: 50%;
    top: 60%;
    transition: all .2s ease
}

.category-quickview {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 260px;
    background-color: #fff;
    box-shadow: -2px 0px -2px 0px rgba(0, 0, 0, 0.06);
    border-left: 1px solid #ededed;
    z-index: 9;
    -webkit-transform: translateX(261px);
    transform: translateX(261px);
    transition: all .3s
}

.category-quickview.is-active {
    -webkit-transform: translateX(0);
    transform: translateX(0)
}

.category-quickview.is-pushed-mobile {
    -webkit-transform: translateX(-500px) !important;
    transform: translateX(-500px) !important
}

.category-quickview .inner {
    position: relative;
    height: 100%
}

.category-quickview .inner .category-menu {
    padding: 80px 0
}

.category-quickview .inner .category-menu li {
    height: 80px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 0 34px
}

.category-quickview .inner .category-menu li a {
    
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-align: center;
    align-items: center;
    color: #4a4a4a
}

.category-quickview .inner .category-menu li a span {
    min-width: 150px;
    text-align: right;
    padding: 0 10px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 76%;
    transition: color .4s
}

.category-quickview .inner .category-menu li a img,
.category-quickview .inner .category-menu li a svg {
    max-height: 40px
}

.category-quickview .inner .category-menu li a svg {
    height: 40px;
    width: 40px;
    fill: #ccc;
    transition: all .3s
}

.category-quickview .inner .category-menu li a:hover span {
    color: var(--app-default-color)
}

.category-quickview .inner .category-menu li a:hover svg {
    fill: var(--app-default-color)
}

.category-quickview .inner .all-categories {
    position: absolute;
    bottom: 52px;
    width: 100%;
    text-align: center
}

.category-quickview .inner .all-categories a {
    text-transform: uppercase;
    font-size: 75%;
    font-weight: 500
}

.category-quickview .inner .all-categories .centered-divider {
    width: 100px;
    height: 1px;
    border-bottom: 2px solid var(--app-default-color);
    margin: 0 auto;
    padding-top: 8px
}

.shop-quickview {
    position: fixed;
    top: 0;
    left: 84px;
    height: 100%;
    width: 280px;
    background-color: #344258;
    background-size: cover;
    background-position: bottom;
    box-shadow: -2px 0px -2px 0px rgba(0, 0, 0, 0.06);
    z-index: 3;
    -webkit-transform: translateX(-285px);
    transform: translateX(-285px);
    transition: all .3s;
    overflow: hidden
}

.shop-quickview.is-pushed-mobile {
    -webkit-transform: translateX(-500px) !important;
    transform: translateX(-500px) !important;
    left: 0 !important
}

.shop-quickview.is-active {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px)
}

.shop-quickview .inner {
    position: relative;
    height: 100%;
    background-color: rgba(43, 56, 76, 0.95)
}

.shop-quickview .inner .quickview-header {
    height: 84px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #3d4e68
}

.shop-quickview .inner .quickview-header span {
    cursor: pointer
}

.shop-quickview .inner .quickview-header h2 {
    position: relative;
    top: -4px;
    
    font-size: 1.15rem;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 6px;
    padding-left: 20px
}

.shop-quickview .inner .quickview-header svg {
    margin-right: 20px;
    width: 20px;
    height: 20px;
    stroke: #fff
}

.shop-quickview .inner .shop-menu li,
.shop-quickview .inner .user-profile li {
    width: 100%;
    height: 80px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: start;
    justify-content: flex-start;
    border-bottom: 1px solid #3d4e68
}

.shop-quickview .inner .shop-menu li {
    cursor: pointer
}

.shop-quickview .inner .shop-menu li:hover a {
    opacity: 0.8
}

.shop-quickview .inner .shop-menu li:hover a svg {
    -webkit-transform: translate3d(0, 0, 0) rotate(0);
    transform: translate3d(0, 0, 0) rotate(0);
    opacity: 1
}

.shop-quickview .inner .shop-menu a {
    width: 100%;
    padding: 0 20px;
    
    font-weight: 500 !important;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.75rem;
    color: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
    -ms-flex-align: center;
    align-items: center
}

.shop-quickview .inner .shop-menu a svg {
    width: 18px;
    height: 18px;
    margin: 0;
    opacity: 0;
    transition: all .3s;
    -webkit-transform: translate3d(100px, 0, 0) rotate(360deg);
    transform: translate3d(100px, 0, 0) rotate(360deg)
}

.shop-quickview .inner .user-profile {
    position: absolute;
    bottom: 0;
    padding: 0
}

.shop-quickview .inner .user-profile li {
    border-bottom: none !important
}

.shop-quickview .inner .user-profile li img {
    max-height: 40px;
    max-width: 40px;
    border-radius: 50%;
    margin-left: 20px
}

.shop-quickview .inner .user-profile li a {
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center
}

.shop-quickview .inner .user-profile li a .user {
    padding-left: 10px;
    color: #fff
}

.shop-quickview .inner .user-profile li a .user span {
    display: block;
    
}

.shop-quickview .inner .user-profile li a .user span:first-child {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.7rem;
    letter-spacing: 3px
}

.shop-quickview .inner .user-profile li a .user span:nth-child(2) {
    font-size: 0.8rem
}

.shop-quickview .inner .user-profile li a .user span:nth-child(2) small {
    font-size: 0.6rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px
}

.shop-quickview .inner .user-profile li a:hover span {
    opacity: 0.8
}

.filters-quickview {
    position: fixed;
    top: 0;
    left: 84px;
    height: 100%;
    width: 320px;
    background-color: #fff;
    background-size: cover;
    background-position: bottom;
    box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.02);
    z-index: 3;
    -webkit-transform: translateX(-325px);
    transform: translateX(-325px);
    transition: all .3s
}

.filters-quickview.is-pushed-mobile {
    -webkit-transform: translateX(-500px) !important;
    transform: translateX(-500px) !important
}

.filters-quickview.is-active {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px)
}

.filters-quickview .inner {
    position: relative;
    height: 100%
}

.filters-quickview .inner .quickview-header {
    height: 80px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}

.filters-quickview .inner .quickview-header span {
    cursor: pointer
}

.filters-quickview .inner .quickview-header h2 {
    position: relative;
    top: -4px;
    font-size: 1.15rem;
    
    font-weight: 500;
    color: #4a4a4a;
    text-transform: uppercase;
    letter-spacing: 6px;
    padding-left: 20px
}

.filters-quickview .inner .quickview-header svg {
    margin: 0 20px;
    width: 20px;
    height: 20px;
    stroke: #4a4a4a
}

.filters-quickview .inner .quickview-header svg:hover {
    stroke: var(--app-default-color)
}

.filters-quickview .inner .filters-body {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100vh;
    padding: 30px 20px
}

.filters-quickview .inner .filters-body::-webkit-scrollbar {
    width: 10px
}

.filters-quickview .inner .filters-body::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.filters-quickview .inner .filter-block {
    width: 100%;
    margin-bottom: 30px
}

.filters-quickview .inner .filter-block .filter-title {
    position: relative;
    font-size: 0.8rem;
    font-weight: 500;
    color: #4a4a4a;
    text-transform: uppercase;
    letter-spacing: 1px
}

.filters-quickview .inner .filter-block .filter-title.has-padding {
    padding: 2px 0
}

.filters-quickview .inner .checkbox-wrap {
    padding: 0;
    color: #4a4a4a !important;
    
    font-size: .9rem
}

.filters-quickview .inner .checkbox-wrap span {
    position: relative;
    top: -2px
}

.cart-quickview {
    position: fixed;
    top: 0;
    left: 84px;
    height: 100%;
    width: 340px;
    background-color: #fff;
    background-size: cover;
    background-position: bottom;
    box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.02);
    z-index: 900;
    -webkit-transform: translateX(-345px);
    transform: translateX(-345px);
    transition: all .3s
}

.cart-quickview.is-pushed-mobile {
    -webkit-transform: translateX(-500px) !important;
    transform: translateX(-500px) !important
}

.cart-quickview.is-active {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px)
}

.cart-quickview .inner {
    position: relative;
    height: 100%
}

.cart-quickview .inner .quickview-header {
    height: 84px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}

.cart-quickview .inner .quickview-header span {
    cursor: pointer
}

.cart-quickview .inner .quickview-header h2 {
    position: relative;
    top: -4px;
    
    font-size: 1rem;
    font-weight: 500;
    color: #4a4a4a;
    text-transform: uppercase;
    letter-spacing: 6px;
    padding: 0 20px
}

.cart-quickview .inner .quickview-header svg {
    margin: 0 20px;
    width: 20px;
    height: 20px;
    stroke: #4a4a4a
}

.cart-quickview .inner .quickview-header svg:hover {
    stroke: var(--app-default-color)
}

.cart-quickview .inner .cart-action {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    background: #fcfcfc;
    border-bottom: 1px solid #ededed
}

.cart-quickview .inner .cart-action .cart-total {
    display: block;
    font-size: 1.7rem;
    color: var(--app-default-color);
    font-weight: 600
}

.cart-quickview .inner .cart-action .cart-total small {
    font-size: 70%;
    font-weight: 600;
    padding-right: 5px
}

.cart-quickview .inner .cart-action .cart-total .abstract {
    display: block;
    font-size: 0.8rem;
    color: #999
}

.cart-quickview .inner .cart-action .cart-total .abstract span {
    font-size: 1rem;
    font-weight: 600
}

.cart-quickview .inner .cart-action a {
    min-width: 130px;
    font-weight: 200;
    font-size: 80%;
    height: 40px
}

.cart-quickview .inner .cart-action a svg {
    position: relative;
    top: 1px;
    width: 17px;
    height: 17px;
    margin-right: 8px
}

.cart-quickview .inner .cart-body .empty-cart h3,
.cart-quickview .inner .cart-body .empty-cart img {
    display: block
}

.cart-quickview .inner .cart-body .empty-cart h3 {
    
    font-size: 1.2rem;
    font-weight: 500;
    padding: 20px 0;
    color: #999
}

.cart-quickview .inner .cart-body .empty-cart img {
    max-height: 90px;
    max-width: 90px;
    margin: 0 auto
}

.cart-quickview .inner .cart-body .empty-cart a {
    margin-top: 20px;
    color: var(--app-default-color);
    border: 1.4px solid var(--app-default-color);
    transition: all .4s
}

.cart-quickview .inner .cart-body .empty-cart a:hover {
    color: rgba(0, 35, 255, 0.4);
    border-color: rgba(0, 35, 255, 0.4)
}

.cart-quickview .inner .cart-body .empty-cart small {
    display: block;
    color: #999;
    font-size: 80%;
    margin-top: 10px
}

.cart-quickview .inner .cart-body .shopping-cart-items {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 80vh;
    min-height: 60vh
}

.cart-quickview .inner .cart-body .shopping-cart-items::-webkit-scrollbar {
    width: 10px
}

.cart-quickview .inner .cart-body .shopping-cart-items::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.cart-quickview .inner .cart-body .shopping-cart-items li {
    height: 80px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 20px;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}

.cart-quickview .inner .cart-body .shopping-cart-items li:hover .remove-item {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0)
}

.cart-quickview .inner .cart-body .shopping-cart-items img {
    float: left;
    max-height: 50px
}

.cart-quickview .inner .cart-body .shopping-cart-items .item-meta {
    display: block;
    width: 40%;
    padding: 0 10px
}

.cart-quickview .inner .cart-body .shopping-cart-items .item-name {
    display: block;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase
}

.cart-quickview .inner .cart-body .shopping-cart-items .item-price {
    color: var(--app-default-color);
    margin-right: 8px
}

.cart-quickview .inner .cart-body .shopping-cart-items .quantity {
    display: block;
    margin: 0 10px
}

.cart-quickview .inner .cart-body .shopping-cart-items .quantity .input {
    max-width: 70px;
    margin: 0 10px;
    text-align: center;
    height: 32px
}

.cart-quickview .inner .cart-body .shopping-cart-items .item-quantity {
    color: #999
}

.cart-quickview .inner .cart-body .shopping-cart-items .item-quantity small {
    font-size: 80%
}

.cart-quickview .inner .cart-body .shopping-cart-items .remove-item {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 78px;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    transition: all .45s;
    opacity: 0;
    -webkit-transform: translateX(200px);
    transform: translateX(200px);
    background: #f9f9f9
}

.cart-quickview .inner .cart-body .shopping-cart-items .remove-item svg {
    width: 18px;
    height: 18px;
    stroke: #999
}

.cart-quickview .inner .cart-body .shopping-cart-items .remove-item:hover {
    background: #fcfcfc
}

.cart-quickview .inner .cart-body .shopping-cart-items .remove-item:hover svg {
    stroke: var(--app-default-color)
}

.quickview-header span:hover svg {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.quickview-header svg {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    transition: all .3s
}


/*! _cards.scss | Nephos | CSS Ninja */

.flat-card {
    position: relative;
    background-color: #fff;
    border: 1px solid #ededed;
    border-radius: 8px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 100%;
    transition: all 0.5s;
    max-height: 300px;
    min-height: 300px
}

.flat-card .image {
    text-align: center;
    margin: 40px 0
}

.flat-card .image img {
    width: 100%;
    height: 100px;
    margin: 10px auto;
    object-fit: contain;
}

.flat-card .product-info {
    padding: 0 20px
}

.flat-card .product-info a {
    color: #4a4a4a
}

.flat-card .product-info a:hover {
    opacity: 0.8;
    color: var(--app-default-color)
}

.flat-card .product-info .product-name {
    font-size: 16px;
    font-weight: 500;
    height:28px;
    overflow:hidden;
}

.flat-card .product-info .product-description {
    font-size: 14px;
    color: #999
}

.flat-card .product-info .product-price {
    font-size: 18px;
    font-weight: 700;
    color: var(--app-default-color)
}

.flat-card .product-info .product-price:before {
    font-size: 70%;
    position: relative
}

.flat-card .product-info .product-price .sale-price {
    color: #999;
    text-decoration: line-through;
    padding: 0 10px;
    font-size: 85%
}

.flat-card .product-info .product-price .sale-price:before {
    
    font-size: 70%;
    position: relative
}

.flat-card.is-auto {
    height: auto !important;
    width: 100% !important;
    min-height: 0 !important;
    max-height: none !important;
    max-width: auto !important
}

.flat-card:hover {
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18) !important
}

.flat-card.is-long {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around
}

.flat-card.is-long .left-image img {
    max-width: 260px
}

.flat-card.is-long .left-image.is-md img {
    max-width: 220px
}

.flat-card.is-long .product-info .product-name.featured {
    font-size: 1.2rem
}

.flat-card.is-long .product-info .product-name.featured-md {
    font-size: 1rem
}

.flat-card .actions {
    position: absolute;
    top: 15px;
    right: 15px
}

.flat-card .actions div,
.flat-card .actions span {
    display: inline-block;
    transition: all .3s
}

.flat-card .actions div svg,
.flat-card .actions span svg {
    height: 18px;
    width: 18px;
    margin-left: 10px;
    stroke: #999;
    transition: all .3s
}

.flat-card .actions div:hover,
.flat-card .actions span:hover {
    cursor: pointer
}

.flat-card .actions div.add,
.flat-card .actions span.add {
    transition-delay: .1s;
    -webkit-transform: translateX(250px);
    transform: translateX(250px)
}

.flat-card .actions div.add svg.is-active,
.flat-card .actions span.add svg.is-active {
    stroke: var(--app-default-color)
}

.flat-card .actions div.add:hover svg,
.flat-card .actions span.add:hover svg {
    stroke: var(--app-default-color)
}

.flat-card .actions div.like,
.flat-card .actions span.like {
    transition-delay: .2s;
    -webkit-transform: translateX(200px);
    transform: translateX(200px)
}

.flat-card .actions div.like svg.is-active,
.flat-card .actions span.like svg.is-active {
    stroke: #FF7273;
    fill: #FF7273
}

.flat-card .actions div.like:hover svg,
.flat-card .actions span.like:hover svg {
    stroke: #FF7273;
    fill: #FF7273
}

.flat-card .on-sale {
    position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    height: 90px;
    padding: 9px;
    background: var(--app-default-color);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: baseline;
    align-items: baseline;
    -webkit-transform: translate(-50%, -50%) rotate(135deg);
    transform: translate(-50%, -50%) rotate(135deg)
}

.flat-card .on-sale svg {
    height: 18px;
    width: 18px;
    stroke: #fff;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg)
}

.flat-card:hover .add,
.flat-card:hover .like {
    -webkit-transform: translateX(0) !important;
    transform: translateX(0) !important
}

.flat-card.is-list-item {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    height: auto !important;
    padding: 20px 40px;
    margin-top: 20px
}

.flat-card.is-list-item:first-child {
    margin-top: 0 !important
}

.flat-card.is-list-item span {
    display: block
}

.flat-card.is-list-item span.image {
    margin: 0 !important;
    width: 80px;
    height: 80px
}

.flat-card.is-list-item span.image img {
    margin: 0 !important
}

.flat-card.is-list-item .rating i {
    color: #FFD700
}

.flat-card.is-list-item .rating i.is-empty {
    color: #cecece
}

.flat-card.is-list-item .rating small {
    padding: 0 5px;
    font-size: .65rem;
    color: #999
}

.flat-card.is-list-item .product-info {
    padding: 20px 40px !important
}

.flat-card.is-list-item .product-info .product-price span {
    display: inline-block !important
}

.flat-card.is-list-item .product-abstract {
    margin-left: auto;
    padding: 15px 0;
    width: 40%;
    color: #999;
    font-size: .8rem
}

.flat-card.is-list-item .product-abstract .view-more {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px 0
}

.flat-card.is-list-item .product-abstract .view-more a {
    font-size: .75rem;
    font-weight: 500;
    text-transform: uppercase;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-align: center;
    align-items: center
}

.flat-card.is-list-item .product-abstract .view-more a svg {
    position: relative;
    height: 16px;
    width: 16px;
    opacity: 0;
    -webkit-transform: translate(0);
    transform: translate(0);
    transition: all .3s
}

.flat-card.is-list-item .product-abstract .view-more a:hover svg {
    opacity: 1;
    -webkit-transform: translate(3px);
    transform: translate(3px)
}

.flat-card.is-list-item .actions {
    right: 40px !important
}

.flat-card.is-list-item .actions span {
    display: inline-block !important
}


/*! _layout.scss | Nephos | CSS Ninja */

body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #ededed;
    position: relative
}

.shop-wrapper {
    height: 100%;
    width: calc(100% - 80px);
    margin-left: 80px;
    position: relative;
    background: #f0f0f0;
    transition: all .3s
}

.shop-wrapper.has-background-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center
}

.shop-wrapper.is-mobile-mode {
    width: 100% !important;
    margin-left: 0 !important
}

.shop-wrapper .slider-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    max-height: 100vh
}

.shop-wrapper .slider-wrapper .fullscreen-slick {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    outline: none !important
}

.shop-wrapper .slider-wrapper .fullscreen-slick:focus,
.shop-wrapper .slider-wrapper .fullscreen-slick:active {
    outline: none !important
}

.shop-wrapper .slider-wrapper .fullscreen-slick img {
    min-height: 100vh
}

.shop-wrapper .slider-wrapper .full-slide {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    outline: none !important
}

.shop-wrapper .slider-wrapper .full-slide:focus,
.shop-wrapper .slider-wrapper .full-slide:active {
    outline: none !important
}

.shop-wrapper .slider-wrapper .slick-dots {
    bottom: 20px;
    max-width: 200px;
    right: 0
}

.shop-wrapper .slider-wrapper .slick-dots li {
    width: 30px;
    height: 30px
}

.shop-wrapper .slider-wrapper .slick-dots li button::before {
    font-size: 12px
}

.shop-wrapper .slider-wrapper .slick-dots li.slick-active button::before {
    color: var(--app-default-color)
}

.shop-wrapper .hero-caption {
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    padding: 120px 0;
    text-align: center;
    z-index: 1
}

.shop-wrapper .hero-caption h1 {
    font-size: 8rem;
    font-weight: 300 !important;
    font-family: 'Alegreya Sans SC', sans-serif
}

.shop-wrapper .hero-caption h2 {
    font-size: 1.6rem;
    margin-top: -44px;
    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 300 !important
}

.shop-wrapper .hero-caption .button {
    margin-top: 20px;
    font-size: 0.8rem !important
}

.shop-wrapper .background-caption {
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    padding: 50px 0;
    text-align: center;
    z-index: 1
}

.shop-wrapper .background-caption h1 {
    font-size: 14rem;
    font-weight: 900 !important;
    font-family: 'Alegreya Sans SC', sans-serif;
    opacity: 0.04
}


/*! _categories.scss | Nephos | CSS Ninja */

.is-categories-grid {
    margin-top: 20px
}

.tile.has-background-image {
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    transition: all .3s;
    padding: 1.25rem 2rem
}

.tile.has-background-image:hover .tile-overlay {
    background: rgba(52, 66, 88, 0.95)
}

.tile.has-background-image:hover .tile-content .divider {
    width: 100% !important
}

.tile.has-background-image:hover .tile-content p,
.tile.has-background-image:hover .tile-content .products,
.tile.has-background-image:hover .tile-content .action {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.tile.has-background-image .tile-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(52, 66, 88, 0.5);
    transition: all .3s;
    z-index: 0
}

.tile.has-background-image .tile-content {
    position: relative;
    height: 100%;
    z-index: 2
}

.tile.has-background-image .tile-content.is-small .divider,
.tile.has-background-image .tile-content.is-small p {
    display: none
}

.tile.has-background-image .tile-content .shop-category {
    
    font-weight: 400;
    font-size: 1.2rem;
    color: #fff;
    letter-spacing: 3px
}

.tile.has-background-image .tile-content .shop-category.is-small {
    font-size: .9rem
}

.tile.has-background-image .tile-content .divider {
    height: 1.4px;
    background: #fff;
    width: 0%;
    min-width: 0px;
    margin: 10px 0;
    transition: width .3s ease
}

.tile.has-background-image .tile-content p {
    color: #fff;
    
    font-size: 1rem;
    font-weight: 400;
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    transition: all .4s;
    font-size: .9rem
}

.tile.has-background-image .tile-content p.is-italic {
    font-weight: 300;
    font-size: .7rem;
    
}

.tile.has-background-image .tile-content .products {
    color: #fff;
    position: absolute;
    bottom: 0;
    padding: 0;
    left: 0;
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    transition: all .4s;
    transition-delay: .1s
}

.tile.has-background-image .tile-content .products span {
    text-transform: uppercase;
    
    font-size: 50%;
    font-weight: 300
}

.tile.has-background-image .tile-content .action {
    position: absolute;
    right: 0;
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    opacity: 0;
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    transition: all .3s;
    transition-delay: .15s
}

.tile.has-background-image .tile-content .action span {
    
    font-size: .75rem;
    font-weight: 400;
    text-transform: uppercase
}

.tile.has-background-image .tile-content .action svg {
    width: 16px;
    height: 16px;
    stroke: #fff;
    opacity: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    transition: all .3s
}

.tile.has-background-image .tile-content .action:hover {
    opacity: 0.7
}

.tile.has-background-image .tile-content .action:hover svg {
    opacity: 1;
    -webkit-transform: translateX(5px);
    transform: translateX(5px)
}

.tile.is-relative {
    position: relative
}

.tile.has-min-height {
    min-height: 280px
}

.category-header.low-padding {
    padding-top: 20px
}

.category-header.no-padding {
    padding-top: 0 !important
}

.category-header.no-padding h2 {
    
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.2
}

.category-header h2 {
    font-size: 21px;
    font-weight: 500 !important;
    line-height: 1.2;
}

.category-header h2.is-small {
    font-size: 1.4rem
}

.category-header .category-title {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    margin: 20px 0;
    position: relative
}

.category-header .category-title.no-border {
    border-bottom: none !important
}

.category-header .category-title.is-product-category {
    margin: 0px !important;
    border-bottom: 1px solid #d6d6d6;
    padding: 10px;
}

.category-header .category-title h2 {
    width: 100%;
    color: #4a4a4a
}

.category-header .category-title .shadow-title {
    position: absolute;
    opacity: 0.1;
    font-weight: 700;
    text-transform: uppercase;
    display: block;
    font-size: 2.8rem;
    top: -11px
}

.category-header .category-title .category-icon {
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.category-header .category-title .category-icon img,
.category-header .category-title .category-icon svg {
    max-height: 40px;
    height: 40px;
    width: 40px;
    display: block
}

.category-header .category-title .category-icon svg {
    fill: #999
}

.category-header .category-title .category-icon span {
    text-transform: uppercase;
    font-size: 80%;
    color: #ccc;
    display: block
}

.category-header .category-title .brand-filigrane {
    position: absolute;
    top: -18px;
    left: -25px;
    height: 68px;
    opacity: 0.4
}

.no-controls {
    margin-top: 20px
}

.show-more {
    text-align: center;
    padding: 10px 0
}

.show-more a {
    text-transform: uppercase;
    font-size: 85%;
    font-weight: 600;
    color: var(--app-default-color)
}

.show-more a:hover {
    opacity: 0.8;
    text-decoration: underline
}

.listing-controls {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid #d6d6d6;
    line-height: 16px
}

.listing-controls .layout-controls {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center
}

.listing-controls .layout-controls span {
    margin-right: 5px;
    cursor: pointer;
    display: block
}

.listing-controls .layout-controls span svg {
    stroke: #999
}

.listing-controls .layout-controls span.is-active svg {
    stroke: var(--app-default-color)
}

.sort-box {
    position: relative;
    max-width: 200px
}

.sort-box label,
.sort-box .sort-box-select {
    display: block
}

.sort-box label {
    line-height: 40px;
    margin-top: 1px;
    padding: 0
}

.sort-box .chosen-container-single .chosen-single {
    height: 36px;
    line-height: 34px;
    border: 1px solid #fff;
    background-color: #fff;
    width: 100%;
    display: inline-block;
    padding: 0 14px 0 16px;
    box-shadow: none;
    color: #666;
    font-weight: 500;
    font-size: 14px;
    border-radius: 50px;
    transition: all 0.3s;
    display: inline-block
}

.sort-box .chosen-container .chosen-results li.highlighted {
    color: var(--app-default-color) !important
}

.sort-box .chosen-container-active .chosen-choices,
.sort-box .chosen-container-active.chosen-with-drop .chosen-single,
.sort-box .chosen-single:hover {
    background: #f3f3f3
}

.sort-box .chosen-container .chosen-drop {
    padding-top: 10px;
    border: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    border-radius: 3px;
    width: 200px;
    margin-left: 10px;
    background: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
    z-index: 999
}

.sort-box .chosen-container.chosen-with-drop .chosen-drop,
.sort-box .chosen-container .chosen-drop {
    left: auto;
    right: -1px
}

.sort-box .chosen-container-single .chosen-single div:after {
    color: #66676b;
    right: 0;
    top: 1px
}

.sort-box .chosen-container-single .chosen-default {
    color: #66676b
}

.sort-box .chosen-container-single .chosen-single span {
    margin-right: 0px;
    color: #666;
    font-weight: 600;
    transition: all 0.2s
}

.sort-box .chosen-container-single .chosen-single div {
    position: relative;
    top: 0;
    margin-left: 0;
    display: inline-block
}

.sort-box .chosen-container-single .chosen-single span {
    display: inline-block;
    margin-right: 0;
    vertical-align: top
}


/*! _account.scss | Nephos | CSS Ninja */

.account-header h2 {
    
    font-size: 1.8rem;
    font-weight: 400 !important;
    text-transform: uppercase
}

.account-header .account-title {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 20px
}

.account-header .account-title h2 {
    width: 100%
}

.account-header .account-title .account-icon {
    width: 100%;
    height: 62px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.account-header .account-title .account-icon img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: block
}

.account-header .account-title .account-icon span {
    text-transform: uppercase;
    font-size: 80%;
    color: #ccc;
    display: block
}

.account-header .account-title .brand-filigrane {
    position: absolute;
    top: -20px;
    left: -40px;
    height: 80px;
    opacity: 0.4
}

.account-tabs {
    margin-top: 1.5rem
}

.account-tabs li a {
    color: #999;
    border-width: 2px;
    padding-bottom: 15px
}

.account-tabs li a:hover {
    color: #999;
    border-color: #999
}

.account-tabs li.is-active a {
    color: var(--app-default-color);
    border-color: var(--app-default-color)
}

.account-tabs.has-controls {
    margin-bottom: 0 !important
}

.profile-card {
    border: none;
    margin-bottom: 20px
}

.profile-card .card-body {
    padding: 20px 40px
}

.profile-card .profile-image img {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto
}

.profile-card .username {
    padding-top: 10px
}

.profile-card .username span,
.profile-card .username small {
    display: block
}

.profile-card .username span {
    color: #4a4a4a;
    font-weight: 500
}

.profile-card .username small {
    font-size: 0.85rem;
    color: #999
}

.profile-card .profile-footer {
    padding: 20px 40px;
    background: #fcfcfc
}

.profile-card .profile-footer .achievement-title {
    
    text-transform: uppercase;
    font-weight: 500;
    font-size: .75rem;
    color: #999
}

.profile-card .profile-footer .count {
    font-size: 1.5rem;
    font-weight: 700;
    color: #4a4a4a
}

.profile-info-card,
.menu-card {
    margin-bottom: 20px;
    position: relative
}

.profile-info-card .card-title,
.menu-card .card-title {
    position: relative;
    padding: 15px 20px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: #fcfcfc;
    z-index: 2
}

.profile-info-card .card-title h3,
.menu-card .card-title h3 {
    font-weight: 500;
    color: #828282
}

.profile-info-card .card-title .edit-account,
.menu-card .card-title .edit-account {
    position: relative;
    height: 40px;
    width: 40px;
    max-height: 40px
}

.profile-info-card .card-title .edit-account svg,
.menu-card .card-title .edit-account svg {
    transition: all .3s;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    stroke-width: 1.2px
}

.profile-info-card .card-title .edit-account a,
.menu-card .card-title .edit-account a {
    color: grey;
    height: 40px;
    width: 40px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1.8px dashed #999;
    border-radius: 50%;
    max-height: 40px;
    transition: all .3s
}

.profile-info-card .card-title .edit-account a span,
.menu-card .card-title .edit-account a span {
    font-size: 90% !important;
    padding-left: 5px
}

.profile-info-card .card-title .edit-account a:hover,
.menu-card .card-title .edit-account a:hover {
    border: 1.8px solid var(--app-default-color)
}

.profile-info-card .card-title .edit-account a:hover svg,
.menu-card .card-title .edit-account a:hover svg {
    stroke: var(--app-default-color);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
}

.profile-info-card .card-title .confirm-button,
.menu-card .card-title .confirm-button {
    position: relative;
    height: 40px;
    width: 40px;
    max-height: 40px
}

.profile-info-card .card-title .confirm-button svg,
.menu-card .card-title .confirm-button svg {
    transition: all .3s;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    stroke-width: 1.2px
}

.profile-info-card .card-title .confirm-button a,
.menu-card .card-title .confirm-button a {
    color: grey;
    height: 40px;
    width: 40px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1.8px dashed #999;
    border-radius: 50%;
    max-height: 40px;
    transition: all .5s
}

.profile-info-card .card-title .confirm-button a span,
.menu-card .card-title .confirm-button a span {
    font-size: 90% !important;
    padding-left: 5px
}

.profile-info-card .card-title .confirm-button a:hover,
.menu-card .card-title .confirm-button a:hover {
    border: 1.8px solid #00b289
}

.profile-info-card .card-title .confirm-button a:hover svg,
.menu-card .card-title .confirm-button a:hover svg {
    stroke: #00b289;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
}

.profile-info-card .card-body,
.menu-card .card-body {
    padding: 20px
}

.profile-info-card .card-body .info-block,
.menu-card .card-body .info-block {
    margin-bottom: 20px
}

.profile-info-card .card-body .info-block span,
.menu-card .card-body .info-block span {
    display: block
}

.profile-info-card .card-body .info-block span.label-text,
.menu-card .card-body .info-block span.label-text {
    color: #4a4a4a;
    font-weight: 500;
    font-size: 0.85rem
}

.profile-info-card .card-body .info-block span.label-value,
.menu-card .card-body .info-block span.label-value {
    color: #828282
}

.profile-info-card .card-body .main-address,
.menu-card .card-body .main-address {
    position: relative;
    top: 1px;
    font-size: 0.8rem;
    color: #828282
}

.profile-info-card.is-dark,
.menu-card.is-dark {
    background: #344258;
    color: #fff
}

.profile-info-card.is-dark.is-achievement .card-body,
.menu-card.is-dark.is-achievement .card-body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center
}

.profile-info-card.is-dark.is-achievement .card-body img,
.menu-card.is-dark.is-achievement .card-body img {
    height: 45px
}

.profile-info-card.is-dark.is-achievement .card-body .achievement-name,
.menu-card.is-dark.is-achievement .card-body .achievement-name {
    padding: 0 10px
}

.profile-info-card.is-dark.is-achievement .card-body .achievement-name span,
.menu-card.is-dark.is-achievement .card-body .achievement-name span {
    display: block;
    
    font-weight: 500
}

.profile-info-card.is-dark.is-achievement .card-body .achievement-name span:first-child,
.menu-card.is-dark.is-achievement .card-body .achievement-name span:first-child {
    text-transform: uppercase;
    font-size: 0.8rem;
    
}

.profile-info-card.is-dark.is-achievement .card-body .achievement-name span.is-gold,
.menu-card.is-dark.is-achievement .card-body .achievement-name span.is-gold {
    color: #ffd700
}

.profile-info-card.is-dark.is-achievement .card-body .achievement-name span.is-green,
.menu-card.is-dark.is-achievement .card-body .achievement-name span.is-green {
    color: #00b289
}

.profile-info-card.is-dark.is-achievement .card-body .achievement-name span:nth-child(2),
.menu-card.is-dark.is-achievement .card-body .achievement-name span:nth-child(2) {
    font-size: .75rem
}

.profile-info-card.has-overflow,
.menu-card.has-overflow {
    overflow: visible !important
}

.profile-info-card.has-overflow .chosen-single,
.menu-card.has-overflow .chosen-single {
    max-height: 36px
}

.profile-info-card.has-overflow .chosen-single span,
.menu-card.has-overflow .chosen-single span {
    max-height: 36px;
    display: block;
    position: relative;
    top: -42.5px;
    left: -8px
}

.profile-info-card.has-overflow .switch-wrapper,
.menu-card.has-overflow .switch-wrapper {
    height: 40px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center
}

.profile-info-card .card-bg,
.menu-card .card-bg {
    position: absolute;
    right: -32px;
    bottom: 6px;
    height: 160px;
    opacity: 0.3
}

.menu-card .wishlists li {
    padding: 5px 20px;
    border-top: 1px solid #ededed
}

.menu-card .wishlists li a {
    padding: 10px 0;
    display: block;
    color: #999
}

.menu-card .wishlists li.is-active a {
    color: var(--app-default-color) !important
}

.menu-card .wishlists li:first-child {
    border-top: none !important
}

.menu-card .wishlists li:hover {
    background: #fcfcfc
}

.menu-card .wishlists li:hover a {
    color: #828282
}

.wishlist-card {
    overflow: visible
}

.wishlist-card .wishlist .wishlist-item {
    border-top: 1px solid #ededed;
    overflow: hidden
}

.wishlist-card .wishlist .wishlist-item:first-child {
    border-top: none !important
}

.wishlist-card .wishlist .wishlist-item span {
    display: block
}

.wishlist-card .wishlist .wishlist-item .item-wrapper {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 40px
}

.wishlist-card .wishlist .wishlist-item .item-wrapper:hover .on-sale {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center
}

.wishlist-card .wishlist .wishlist-item .item-wrapper img {
    height: 80px
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .product-info span:first-child {
    
    font-weight: 600;
    font-size: .9rem
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .product-info span:last-child {
    font-size: 70%;
    font-weight: 500;
    text-transform: uppercase;
    color: #828282
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action {
    margin-left: auto
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-button {
    position: relative;
    height: 40px;
    width: 40px;
    max-height: 40px
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-button svg {
    width: 20px;
    height: 20px;
    transition: all .3s;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    stroke-width: 1.2px
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-button a {
    color: grey;
    height: 40px;
    width: 40px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1.8px dashed #999;
    border-radius: 50%;
    max-height: 40px;
    transition: all .3s
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-button a span {
    font-size: 90% !important;
    padding-left: 5px
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-button a:hover {
    border: 1.8px solid var(--app-default-color)
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-button a:hover svg {
    stroke: var(--app-default-color)
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-item {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-item span {
    display: block;
    margin-left: 15px;
    color: #4a4a4a
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-item svg {
    height: 18px;
    width: 18px;
    stroke-width: 1.2px;
    stroke: #cecece
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .action .dropdown-item:hover svg {
    stroke: var(--app-default-color)
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .on-sale {
    position: absolute;
    top: -15px;
    left: -15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--app-default-color);
    display: none;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    transition: opacity .3s
}

.wishlist-card .wishlist .wishlist-item .item-wrapper .on-sale svg {
    height: 12px;
    width: 12px;
    stroke: #fff;
    stroke-width: 3px !important;
    -webkit-transform: rotate(0) translate(5px, 5px);
    transform: rotate(0) translate(5px, 5px)
}

.wishlist-pagination {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 30px 0
}

.wishlist-pagination ul li {
    display: inline-block;
    margin: 0 5px;
    transition: all .3s;
    cursor: pointer
}

.wishlist-pagination ul li span {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #999;
    font-size: .9rem;
    color: #fff;
    transition: inherit
}

.wishlist-pagination ul li.is-active span {
    background: var(--app-default-color);
    font-weight: 500;
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18) !important
}

.wishlist-pagination ul li:hover {
    opacity: 0.7
}

.wishlist-pagination ul li:hover span {
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18) !important
}

.avatar-wrapper {
    position: relative;
    height: 100px;
    width: 100px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 1px 1px 15px -5px black;
    transition: all .3s ease
}

.avatar-wrapper:hover {
    cursor: pointer
}

.avatar-wrapper:hover .profile-pic {
    opacity: .5
}

.avatar-wrapper .profile-pic {
    height: 100%;
    width: 100%;
    transition: all .3s ease
}

.avatar-wrapper .profile-pic:after {
    font-family: FontAwesome;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    font-size: 60px;
    color: #34495e;
    text-align: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center
}

.avatar-wrapper .upload-button {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%
}

.avatar-wrapper .upload-button .upload-icon {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    transition: all .3s ease;
    stroke: var(--app-default-color)
}

.avatar-wrapper .upload-button:hover .upload-icon {
    opacity: .9
}

.upload-card {
    padding: 40px 20px
}

.upload-card .username {
    padding: 10px 0;
    font-weight: 500
}

.upload-card .username span {
    display: block
}

.upload-card .username span:nth-child(2) {
    font-size: 90%;
    font-weight: 400;
    color: #828282
}

.upload-card .button {
    font-weight: 500 !important;
    text-transform: uppercase;
    margin: 0 auto !important
}


/*! _cart.scss | Nephos | CSS Ninja */

.cart-summary {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 20px
}

.cart-summary .cart-total {
    font-size: 1.6rem;
    font-weight: 500
}

.cart-summary .cart-total:before {
    
    font-size: 60%;
    position: relative;
    left: 8px
}

.cart-summary .cart-total small {
    display: block;
    font-size: .8rem;
    color: var(--app-default-color);
    text-align: right
}

.cart-summary .cart-total small span {
    text-transform: uppercase;
    font-weight: 600;
    
    font-size: .7rem
}

.cart-card {
    padding: 40px
}

.cart-card .cart-content li {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center
}

.cart-card .cart-content li img {
    display: block;
    height: 80px;
    width:80px;
    object-fit:contain;
}

.cart-card .cart-content li span {
    display: block
}

.cart-card .cart-content li .product-info {
    padding: 0 30px;
    width: 220px
}

.cart-card .cart-content li .product-info span:first-child {
    color: #4a4a4a;
    
    font-weight: 600;
    font-size: .9rem
}

.cart-card .cart-content li .product-info span:nth-child(2) {
    font-size: 80%;
    text-transform: uppercase;
    color: #828282;
    font-weight: 500
}

.cart-card .cart-content li .product-price span {
    margin-left: 30px
}

.cart-card .cart-content li .product-price span:first-child {
    font-weight: 600;
    font-size: .75rem;
    text-transform: uppercase;
    color: #4a4a4a
}

.cart-card .cart-content li .product-price span:nth-child(2) {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--app-default-color);
    width: 100px
}

.cart-card .cart-content li .product-price span:nth-child(2):before {
    
    font-size: 70%
}

.cart-card .cart-content li .product-quantity {
    margin: 0 30px
}

.cart-card .cart-content li .product-quantity span {
    font-weight: 600;
    font-size: .75rem;
    text-transform: uppercase;
    color: #4a4a4a
}

.cart-card .cart-content li .product-quantity .control {
    max-width: 70px
}

.cart-card .cart-content li .product-quantity .control input {
    max-height: 28px
}

.cart-card .cart-content li .action {
    margin-left: auto
}

.cart-card .cart-content li .action .action-link {
    position: relative;
    height: 36px;
    width: 36px;
    max-height: 36px;
    margin: 0 2px;
    display: inline-block
}

.cart-card .cart-content li .action .action-link svg {
    transition: all .3s;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    stroke-width: 1.2px
}

.cart-card .cart-content li .action .action-link a {
    color: grey;
    height: 36px;
    width: 36px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1.6px dashed #999;
    border-radius: 50%;
    max-height: 36px;
    transition: all .3s
}

.cart-card .cart-content li .action .action-link a span {
    font-size: 90% !important;
    padding-left: 5px
}

.cart-card .cart-content li .action .action-link a svg {
    height: 18px;
    width: 18px;
    transition: all .3s
}

.cart-card .cart-content li .action .action-link a:hover {
    border: 1.8px solid var(--app-default-color)
}

.cart-card .cart-content li .action .action-link a:hover svg {
    stroke: var(--app-default-color)
}

.cart-card .cart-content li .action .action-link.is-like:hover a,
.cart-card .cart-content li .action .action-link.is-like.is-active a {
    border: 1.8px solid #FF7273
}

.cart-card .cart-content li .action .action-link.is-like:hover svg,
.cart-card .cart-content li .action .action-link.is-like.is-active svg {
    stroke: #FF7273;
    fill: #FF7273
}

.cart-card .cart-content li .action .action-link.is-remove:hover a {
    border: 1.8px solid #eda514
}

.cart-card .cart-content li .action .action-link.is-remove:hover svg {
    stroke: #eda514
}

.empty-cart-card {
    padding: 40px;
    border-radius: 6px
}

.empty-cart-card .empty-cart h3,
.empty-cart-card .empty-cart img {
    display: block
}

.empty-cart-card .empty-cart h3 {
    
    font-size: 1.4rem;
    font-weight: 400;
    padding-bottom: 40px;
    color: #999
}

.empty-cart-card .empty-cart img {
    max-height: 90px;
    max-width: 90px;
    margin: 0 auto
}

.empty-cart-card .empty-cart a {
    margin-top: 20px;
    color: var(--app-default-color);
    border: 1.4px solid var(--app-default-color);
    transition: all .4s
}

.empty-cart-card .empty-cart a:hover {
    color: rgba(0, 35, 255, 0.4);
    border-color: rgba(0, 35, 255, 0.4)
}

.empty-cart-card .empty-cart small {
    display: block;
    color: #999;
    font-size: 80%;
    margin-top: 10px
}


/*! _orders.scss | Nephos | CSS Ninja */

.order-card {
    position: relative;
    padding: 20px;
    overflow: visible
}

.order-card .order-info {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 20px
}

.order-card .order-info span {
    display: block
}

.order-card .order-info span a {
    color: #4a4a4a;
    font-size: 90%;
    font-weight: 500
}

.order-card .order-info span a:hover {
    color: var(--app-default-color);
    text-decoration: underline
}

.order-card .circle-chart-wrapper {
    text-align: center
}

.order-card .circle-chart-circle {
    -webkit-animation: circle-chart-fill 2s reverse;
    animation: circle-chart-fill 2s reverse;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: center;
    transform-origin: center
}

.order-card .chart-icon {
    position: absolute;
    top: 45%;
    left: 0;
    width: 100%;
    height: 40px
}

.order-card .chart-icon svg {
    position: relative;
    width: 30px;
    height: 30px;
    stroke: #999
}

.order-card .ring-title span {
    font-size: 1rem;
    color: #A9ABAC
}

.order-card .tag {
    position: relative;
    display: -ms-flexbox !important;
    display: flex !important
}

.order-card .tag.is-primary {
    background: var(--app-default-color) !important;
    color: #fff !important
}

.order-card .tag.is-success {
    background: #00b289 !important;
    color: #fff !important
}

.order-card .tag.is-warning {
    background: #eda514 !important;
    color: #fff !important
}

.order-card .tag.is-danger {
    background: #FF7273 !important;
    color: #fff !important
}

@-webkit-keyframes circle-chart-fill {
    to {
        stroke-dasharray: 0 100
    }
}

@keyframes circle-chart-fill {
    to {
        stroke-dasharray: 0 100
    }
}

.list-card .list-card-header {
    
    font-weight: 500;
    padding: 15px 20px;
    background: #fcfcfc;
    border-bottom: 1px solid #ededed;
    color: #828282
}

.list-card ul li {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    padding: 15px 20px;
    cursor: pointer;
    color: #999;
    font-size: 0.75rem;
    font-weight: 500;
    border-top: 1px solid #ededed
}

.list-card ul li:first-child {
    border-top: none
}

.list-card ul li:hover {
    background: #f9f9f9;
    color: #4a4a4a
}

.list-card ul li:hover .order-indicator {
    opacity: 0.8
}

.list-card ul li.is-active {
    color: var(--app-default-color)
}

.list-card ul li.is-active .order-indicator {
    opacity: 1
}

.list-card ul li .order-indicator {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    opacity: 0
}

.list-card ul li .order-indicator.is-progress {
    background: var(--app-default-color)
}

.list-card ul li .order-indicator.is-preparing {
    background: #00b289
}

.list-card ul li .order-indicator.is-warning {
    background: #eda514
}

.list-card ul li .order-indicator.is-issue {
    background: #FF7273
}

.order-list-card {
    padding: 40px
}

.order-list-card .progress-block {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 10px
}

.order-list-card .progress-block h3 {
    font-size: .85rem;
    font-weight: 500
}

.order-list-card .progress-block progress {
    max-width: 120px
}

.order-list-card .progress-block progress.primary-progress::-webkit-progress-value {
    background-color: var(--app-default-color)
}

.order-list-card .progress-block progress.primary-progress::-moz-progress-bar {
    background-color: var(--app-default-color)
}

.order-list-card .progress-block progress.primary-progress::-ms-fill {
    background-color: var(--app-default-color)
}

.order-list-card .progress-block progress.success-progress::-webkit-progress-value {
    background-color: #00b289
}

.order-list-card .progress-block progress.success-progress::-moz-progress-bar {
    background-color: #00b289
}

.order-list-card .progress-block progress.success-progress::-ms-fill {
    background-color: #00b289
}

.order-list-card .progress-block progress.warning-progress::-webkit-progress-value {
    background-color: #eda514
}

.order-list-card .progress-block progress.warning-progress::-moz-progress-bar {
    background-color: #eda514
}

.order-list-card .progress-block progress.warning-progress::-ms-fill {
    background-color: #eda514
}

.order-list-card .progress-block progress.danger-progress::-webkit-progress-value {
    background-color: #FF7273
}

.order-list-card .progress-block progress.danger-progress::-moz-progress-bar {
    background-color: #FF7273
}

.order-list-card .progress-block progress.danger-progress::-ms-fill {
    background-color: #FF7273
}

.order-list-card .order-block {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 0
}

.order-list-card .order-block img {
    height: 40px;
    width: 40px;
    border-radius: 50%
}

.order-list-card .order-block .handled-by,
.order-list-card .order-block .status,
.order-list-card .order-block .date,
.order-list-card .order-block .total {
    margin: 0 10px
}

.order-list-card .order-block .handled-by div:first-child,
.order-list-card .order-block .status div:first-child,
.order-list-card .order-block .date div:first-child,
.order-list-card .order-block .total div:first-child {
    font-size: .65rem;
    text-transform: uppercase;
    font-weight: 600
}

.order-list-card .order-block .handled-by div:nth-child(2),
.order-list-card .order-block .status div:nth-child(2),
.order-list-card .order-block .date div:nth-child(2),
.order-list-card .order-block .total div:nth-child(2) {
    color: #828282
}

.order-list-card .order-block .handled-by div:nth-child(2).is-date,
.order-list-card .order-block .status div:nth-child(2).is-date,
.order-list-card .order-block .date div:nth-child(2).is-date,
.order-list-card .order-block .total div:nth-child(2).is-date {
    font-size: .85rem;
    font-weight: 500
}

.order-list-card .order-block .handled-by div:nth-child(2).is-price,
.order-list-card .order-block .status div:nth-child(2).is-price,
.order-list-card .order-block .date div:nth-child(2).is-price,
.order-list-card .order-block .total div:nth-child(2).is-price {
    font-size: 1rem;
    font-weight: 500;
    color: var(--app-default-color)
}

.order-list-card .order-block .handled-by div:nth-child(2).is-price:before,
.order-list-card .order-block .status div:nth-child(2).is-price:before,
.order-list-card .order-block .date div:nth-child(2).is-price:before,
.order-list-card .order-block .total div:nth-child(2).is-price:before {
    
    font-size: 80%;
    position: relative;
    top: -3px
}

.order-list-card .order-block .total .tag {
    margin: 0 5px;
    font-weight: 400
}

.order-list-card .order-block .order-icon {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    height: 40px;
    width: 40px
}

.order-list-card .order-block .order-icon svg {
    stroke: #999;
    stroke-width: 1.4px;
    height: 20px;
    width: 20px
}

.order-list-card .order-block .tag.primary-tag {
    background: var(--app-default-color);
    color: #fff
}

.order-list-card .order-block .tag.success-tag {
    background: #00b289;
    color: #fff
}

.order-list-card .order-block .tag.warning-tag {
    background: #eda514;
    color: #fff
}

.order-list-card .order-block .tag.danger-tag {
    background: #FF7273;
    color: #fff
}

.order-list-card .table-block {
    margin-top: 20px
}

.order-list-card .table-block table {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed
}

.order-list-card .table-block table th {
    font-size: .65rem !important;
    font-weight: 700;
    color: #4a4a4a
}

.order-list-card .table-block table td {
    font-size: .75rem;
    font-weight: 600;
    color: #828282;
    padding: .825rem .625em !important
}

.order-list-card .table-block table tr {
    background: #fcfcfc;
    border-bottom: 1px solid #ededed;
    padding: .35em
}

.order-list-card .table-block table th,
.order-list-card .table-block table td {
    padding: .625em;
    text-align: center
}

.order-list-card .table-block table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase
}

@media screen and (max-width: 600px) {
    .order-list-card .table-block table {
        border: 0
    }
    .order-list-card .table-block table caption {
        font-size: 1.3em
    }
    .order-list-card .table-block table thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px
    }
    .order-list-card .table-block table tr {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: .625em
    }
    .order-list-card .table-block table td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: .8em;
        text-align: right
    }
    .order-list-card .table-block table td:before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase
    }
    .order-list-card .table-block table td:last-child {
        border-bottom: 0
    }
}

.order-list-card .button-block {
    margin-top: 20px
}


/*! _product.scss | Nephos | CSS Ninja */

.product-panel {
    overflow-x: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    min-height: 100vh;
    width: 40%;
    background: #fff;
    box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.06);
    z-index: 1
}

.product-panel .panel-header {
    line-height: 48px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-align: center;
    align-items: center;
    padding: 40px 0;
    position: relative;
    z-index: 15
}

.product-panel .panel-header .likes {
    margin: 0 30px
}

.product-panel .panel-header .likes span {
    font-size: 1.1rem;
    font-weight: 500;
    color: #999
}

.product-panel .panel-header .likes svg {
    width: 18px;
    height: 18px;
    stroke: #A9ABAC;
    position: relative;
    top: 2px
}

.product-panel .panel-header .likes svg.is-liked {
    stroke: #FF7273 !important;
    fill: #FF7273 !important
}

.product-panel .product-image {
    padding: 25% 0;
    text-align: center;
    position: relative
}

.product-panel .product-image img {
    max-width: 250px
}

.product-panel .product-actions {
    position: absolute;
    bottom: 30px;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center
}

.product-panel .product-actions svg {
    width: 20px;
    height: 20px;
    cursor: pointer
}

.product-panel .product-actions .zoom-buttons {
    margin: 0 30px;
    max-height: 20px
}

.product-panel .product-actions .zoom-buttons svg {
    stroke: #999
}

.product-panel .product-actions .zoom-buttons svg:hover {
    stroke: var(--app-default-color)
}

.product-panel .product-actions .right-actions {
    margin: 0 30px;
    max-height: 20px
}

.product-panel .product-actions .right-actions svg {
    stroke: #999
}

.product-panel .product-actions .right-actions svg:hover {
    stroke: var(--app-default-color)
}

.product-panel .product-actions .right-actions span {
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 0 5px
}

.product-panel .product-actions .right-actions span.is-active svg {
    stroke: var(--app-default-color)
}

.product-panel .detailed-description {
    padding: 10px 40px 20px 40px;
    max-height: 65vh;
    overflow-y: auto;
    margin-top: 20px
}

.product-panel .detailed-description::-webkit-scrollbar {
    width: 10px
}

.product-panel .detailed-description::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.product-panel .detailed-description .meta-block {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px 0
}

.product-panel .detailed-description .meta-block h3 {
    
    font-weight: 600;
    color: #4a4a4a;
    font-size: 0.8rem;
    text-transform: uppercase
}

.product-panel .detailed-description .meta-block h3.spaced {
    padding-top: 10px
}

.product-panel .detailed-description .meta-block p {
    color: #999;
    padding-top: 5px;
    font-size: 0.9rem
}

.product-panel .detailed-description .meta-block p.spaced {
    padding-top: 10px
}

.product-panel .detailed-description .meta-block .colored-dots {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 10px
}

.product-panel .detailed-description .meta-block .colored-dots .dot-wrapper {
    text-align: center;
    margin: 0 5px
}

.product-panel .detailed-description .meta-block .colored-dots .dot-wrapper .dot {
    width: 24px;
    height: 24px;
    border-radius: 50%
}

.product-panel .detailed-description .meta-block .colored-dots .dot-wrapper .dot.is-blue {
    background: var(--app-default-color)
}

.product-panel .detailed-description .meta-block .colored-dots .dot-wrapper .dot.is-white {
    background: #fff;
    border: 1px solid #ccc
}

.product-panel .detailed-description .meta-block .colored-dots .dot-wrapper .dot.is-dark {
    background: #393447
}

.product-panel .detailed-description .meta-block .colored-dots .dot-wrapper .dot.is-cream {
    background: #d6d3c0
}

.product-panel .detailed-description .meta-block .colored-dots .dot-wrapper .dot.is-red {
    background: #FF7273
}

.product-panel .product-ratings {
    padding: 10px 40px 20px 40px;
    max-height: 65vh;
    overflow-y: auto;
    margin-top: 20px
}

.product-panel .product-ratings::-webkit-scrollbar {
    width: 10px
}

.product-panel .product-ratings::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.product-panel .product-ratings .main-rating {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}

.product-panel .product-ratings h3 {
    text-transform: uppercase;
    
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 15px
}

.product-panel .product-ratings span {
    font-weight: 400;
    color: #999;
    font-size: 0.9rem;
    padding-top: 15px
}

.product-panel .product-ratings span small {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--app-default-color)
}

.product-panel .product-ratings .stars {
    padding: 10px 20px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1)
}

.product-panel .product-ratings .stars i {
    font-size: 1.2rem;
    color: #FFD700
}

.product-panel .product-ratings .add-review {
    cursor: pointer
}

.product-panel .product-ratings .add-review svg {
    height: 16px;
    width: 16px;
    position: relative;
    top: 4px
}

.product-panel .product-ratings .add-review:hover {
    color: var(--app-default-color)
}

.product-panel .product-ratings .add-review:hover svg {
    stroke: var(--app-default-color)
}

.product-panel .product-ratings .customer-ratings .media {
    margin-top: 30px
}

.product-panel .product-ratings .customer-ratings .media img {
    border-radius: 50%
}

.product-panel .product-ratings .customer-ratings .media-content p {
    font-size: 0.9rem;
    color: #999
}

.product-panel .product-ratings .customer-ratings .media-content p span {
    color: #4a4a4a;
    font-size: 0.9rem;
    font-weight: 500
}

.product-panel .product-ratings .customer-ratings .media-content p .rating-content {
    font-size: 0.85rem;
    color: #999;
    font-weight: 400
}

.product-panel .product-ratings .customer-ratings .media-content p small {
    padding-left: 10px
}

.product-panel .product-ratings .customer-ratings .media-content p small i {
    color: #FFD700
}

.product-info-panel {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    min-height: 100vh;
    width: 60%;
    background: #f0f0f0
}

.product-info-panel .inner-panel {
    height: 100%
}

.product-info-panel .inner-panel .panel-header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    padding: 40px 0
}

.product-info-panel .inner-panel .panel-header .category-title {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    padding: 0 80px
}

.product-info-panel .inner-panel .panel-header .category-title h2 {
    
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0 20px;
    color: #4a4a4a
}

.product-info-panel .inner-panel .panel-header .category-title img {
    height: 48px
}

.product-info-panel .inner-panel .panel-header .category-title svg {
    height: 40px;
    width: 40px;
    fill: #999
}

.product-info-panel .inner-panel .panel-body {
    padding: 60px 80px
}

.product-info-panel .inner-panel .panel-body .product-name {
    
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 500;
    color: var(--app-default-color)
}

.product-info-panel .inner-panel .panel-body .product-name span {
    
    color: #999;
    font-size: 50%
}

.product-info-panel .inner-panel .panel-body .product-description {
    padding-top: 20px;
    color: #999
}

.product-info-panel .inner-panel .panel-body .product-controls {
    padding-top: 20px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: baseline;
    align-items: baseline;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.product-info-panel .inner-panel .panel-body .product-controls .product-price {
    position: relative
}

.product-info-panel .inner-panel .panel-body .product-controls .product-price .heading {
    
    font-weight: 600;
    margin: 5px 0
}

.product-info-panel .inner-panel .panel-body .product-controls .product-price .value {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--app-default-color)
}

.product-info-panel .inner-panel .panel-body .product-controls .product-price .value:after {
    content: '$90,00';
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 20px;
    color: #999;
    text-decoration: line-through
}

.product-info-panel .inner-panel .panel-body .product-controls .product-quantity {
    margin-left: auto
}

.product-info-panel .inner-panel .panel-body .product-controls .product-quantity .heading {
    
    font-weight: 600;
    margin: 5px 0;
    text-align: center
}

.product-info-panel .inner-panel .panel-body .product-controls .product-quantity .control {
    height: 48px;
    max-width: 80px
}

.product-info-panel .inner-panel .panel-body .product-controls .product-quantity .control .input {
    text-align: center
}

.product-info-panel .inner-panel .panel-body .product-controls .add-to-cart .heading {
    
    font-weight: 600;
    margin: 0
}

.product-info-panel .inner-panel .panel-body .product-controls .add-to-cart button {
    line-height: 0;
    font-size: 0.6rem;
    font-weight: 600;
    margin-left: 20px
}

.product-info-panel .inner-panel .panel-footer {
    padding: 35px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #fff;
    min-height: 250px;
    z-index: 0
}

.product-info-panel .inner-panel .panel-footer .footer-inner {
    padding: 20px 0
}

.product-info-panel .inner-panel .panel-footer .footer-inner .recommended {
    text-transform: uppercase;
    
    font-size: 1.1rem;
    font-weight: 500;
    color: #999;
    position: absolute;
    top: 106px;
    left: -20px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.product-info-panel .inner-panel .panel-footer .footer-inner .featured-product .image img {
    max-width: 80px;
    margin: 5px auto
}

.product-info-panel .inner-panel .panel-footer .footer-inner .featured-product a {
    color: #4a4a4a
}

.product-info-panel .inner-panel .panel-footer .footer-inner .featured-product .product-name {
    
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.9rem
}

.product-info-panel .inner-panel .panel-footer .footer-inner .featured-product .product-description {
    font-size: 70%;
    color: #999
}

.review-modal .modal-content {
    max-width: 480px
}

.review-modal .modal-content .modal-delete {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto
}

.review-modal .modal-content .modal-delete svg {
    width: 20px;
    height: 20px;
    stroke: #999;
    cursor: pointer
}

.review-modal .modal-content .modal-delete svg:hover {
    stroke: var(--app-default-color)
}

.review-modal .modal-content .box {
    padding: 0;
    overflow: hidden;
    transition: all .4s;
    -webkit-transform: scale(0);
    transform: scale(0)
}

.review-modal .modal-content .box .box-header {
    width: 100%;
    background: #ededed;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 20px
}

.review-modal .modal-content .box .box-header img {
    width: 40px;
    height: 40px;
    border-radius: 50%
}

.review-modal .modal-content .box .box-header span {
    display: block;
    padding-left: 10px;
    color: #4a4a4a
}

.review-modal .modal-content .box .box-header .delete {
    margin-left: auto
}

.review-modal .modal-content .box .box-body {
    padding: 20px
}

.review-modal .modal-content .box p {
    font-size: 85%;
    color: #999
}

.review-modal .modal-content fieldset,
.review-modal .modal-content label {
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 99
}

.review-modal .modal-content .rating {
    border: none;
    float: left
}

.review-modal .modal-content .rating>input {
    display: none
}

.review-modal .modal-content .rating>label:before {
    margin: 5px;
    font-size: 1.25em;
    font-family: FontAwesome;
    display: inline-block;
    content: "\\f005"
}

.review-modal .modal-content .rating>.half:before {
    content: "\\f089";
    position: absolute
}

.review-modal .modal-content .rating>label {
    color: #ddd;
    float: right
}

.review-modal .modal-content .rating>input:checked ~ label,
.review-modal .modal-content .rating:not(:checked)>label:hover,
.review-modal .modal-content .rating:not(:checked)>label:hover ~ label {
    color: #FFD700 !important
}

.review-modal .modal-content .rating>input:checked+label:hover,
.review-modal .modal-content .rating>input:checked ~ label:hover,
.review-modal .modal-content .rating>label:hover ~ input:checked ~ label,
.review-modal .modal-content .rating>input:checked ~ label:hover ~ label {
    color: #FFED85 !important
}

.review-modal.is-active .box {
    -webkit-transform: scale(1);
    transform: scale(1)
}

.is-carousel img {
    max-height: 350px !important
}

.is-carousel .slider {
    margin: 0 auto
}

.is-carousel .slick-slide img {
    margin: 0 auto !important
}

.is-carousel .slider:focus,
.is-carousel .slick-slide:focus {
    outline: none !important
}


/*! _checkout.scss | Nephos | CSS Ninja */

.steps-wrapper {
    width: 600px
}

.steps-wrapper .step-list {
    position: relative;
    overflow: hidden;
    counter-reset: wizard;
    list-style-type: none
}

.steps-wrapper .step-list li {
    position: relative;
    float: left;
    width: 25%;
    text-align: center
}

.steps-wrapper .step-list .active {
    color: #fff
}

.steps-wrapper .step-list .active:before {
    background: var(--app-default-color);
    color: #fff;
    border-color: #fff;
    font-weight: 500
}

.steps-wrapper .step-list li:before {
    counter-increment: wizard;
    content: counter(wizard);
    display: block;
    color: #999;
    background-color: #cecece;
    border: 2px solid #fff;
    text-align: center;
    width: 3em;
    height: 3em;
    line-height: 2.8em;
    border-radius: 3em;
    position: relative;
    left: 50%;
    margin-left: -1.5em;
    z-index: 1;
    font-size: .8rem;
    font-weight: 500
}

.steps-wrapper .step-list li+li:after {
    content: "";
    display: block;
    width: 100%;
    background-color: #cecece;
    height: 5px;
    position: absolute;
    left: -50%;
    top: 1.1em;
    z-index: 0
}

.steps-wrapper .step-list .active:after {
    background-color: var(--app-default-color)
}

.checkout-title {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    margin: 10px 0
}

.checkout-title h2 {
    font-size: 1.6rem;
    font-weight: 400 !important;
    text-transform: uppercase
}

.checkout-title h3 {
    font-weight: 500;
    color: var(--app-default-color)
}

.checkout-title.is-centered {
    -ms-flex-pack: center;
    justify-content: center
}

.checkout-title .brand-filigrane {
    position: absolute;
    top: -5px;
    left: -27px;
    height: 48px;
    opacity: 0.4
}

.checkout-title .brand-filigrane.is-centered {
    left: 0;
    right: 0;
    top: -10px;
    margin: 0 auto;
    height: 60px
}

.checkout-wrapper {
    padding: 60px 0
}

.flat-card.is-checkout-form.has-overflow {
    overflow: visible !important
}

.flat-card.is-checkout-form .form-title h3 {
    font-size: 1.2rem;
    font-weight: 300 !important;
    text-transform: uppercase;
    padding-bottom: 20px
}

.flat-card.is-checkout-form .column.is-padded {
    padding: 40px !important
}

.flat-card.is-checkout-form .column.is-light-padded {
    padding: 15px 40px !important
}

.flat-card.is-checkout-form .column.grey-column {
    background: #f9f9f9
}

.flat-card.is-checkout-form .customer-wrapper {
    padding: 80px 0
}

.flat-card.is-checkout-form .customer-wrapper .logged-as {
    font-size: 90%;
    color: #828282;
    padding-top: 10px
}

.flat-card.is-checkout-form .customer-wrapper .username {
    font-weight: 500
}

.flat-card.is-checkout-form .customer-wrapper .switch {
    padding-top: 10px;
    font-size: 90%;
    font-weight: 500
}

.flat-card.is-checkout-form .customer-wrapper .switch a {
    color: #828282
}

.flat-card.is-checkout-form .customer-wrapper .switch a:hover {
    color: var(--app-default-color)
}

.flat-card.is-checkout-form .customer-wrapper img {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18) !important
}

.flat-card.is-checkout-form .customer-wrapper img.logo {
    border-radius: 0;
    height: 75px;
    width: auto
}

.flat-card.is-checkout-form .shipping-wrapper {
    padding: 80px 10px
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card {
    position: relative;
    background: #fff;
    border-radius: 6px;
    border: 2px solid #cecece;
    padding: 20px;
    margin: 10px;
    overflow: visible;
    cursor: pointer;
    transition: all .3s
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card svg {
    height: 48px;
    fill: #cecece
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card .shipping-method {
    text-transform: uppercase;
    font-size: 70%;
    color: #cecece;
    display: block
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card .shipping-price {
    text-transform: uppercase;
    font-size: 70%;
    font-weight: 500;
    color: var(--app-default-color);
    display: none
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card:hover {
    border-color: #999
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card:hover svg {
    fill: #999
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card:hover .shipping-method {
    color: #999
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card .active-indicator {
    visibility: hidden;
    position: absolute;
    top: -16px;
    right: -16px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 2px solid #99a7ff;
    border-radius: 50%;
    background: var(--app-default-color)
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card .active-indicator svg {
    width: 14px;
    height: 14px;
    stroke: #fff;
    stroke-width: 3px
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card.is-active {
    border-color: var(--app-default-color)
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card.is-active svg {
    fill: var(--app-default-color)
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card.is-active .shipping-method {
    color: var(--app-default-color);
    display: none
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card.is-active .shipping-price {
    display: block
}

.flat-card.is-checkout-form .shipping-wrapper .mini-card.is-active .active-indicator {
    visibility: visible
}

.flat-card.is-checkout-form .shipping-address-form .column {
    padding: 0 .75rem !important
}

.flat-card.is-checkout-form .shipping-address-form .chosen-single {
    max-height: 36px
}

.flat-card.is-checkout-form .shipping-address-form .chosen-single span {
    max-height: 36px;
    display: block;
    position: relative;
    top: -2.5px;
    left: -8px
}

.flat-card.is-checkout-form .verification-wrapper {
    padding: 80px 0
}

.flat-card.is-checkout-form .verification-wrapper .total-price svg {
    width: 26px;
    height: 26px;
    stroke: #999
}

.flat-card.is-checkout-form .verification-wrapper .total-price span {
    display: block
}

.flat-card.is-checkout-form .verification-wrapper .total-price span:nth-child(2) {
    
    font-size: .85rem;
    font-weight: 600;
    text-transform: uppercase
}

.flat-card.is-checkout-form .verification-wrapper .total-price span:nth-child(3) {
    font-size: 2rem;
    font-weight: 600
}

.flat-card.is-checkout-form .verification-wrapper .total-price span:nth-child(3):before {
    
    position: relative;
    top: -10px;
    font-size: 50%
}

.flat-card.is-checkout-form .verification-wrapper .total-price span:nth-child(4) {
    
    font-weight: 600;
    color: var(--app-default-color);
    margin: 5px 0;
    font-size: .85rem
}

.flat-card.is-checkout-form .items-column {
    max-height: 350px;
    overflow-y: auto
}

.flat-card.is-checkout-form .items-column::-webkit-scrollbar {
    width: 10px
}

.flat-card.is-checkout-form .items-column::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.flat-card.is-checkout-form .items-column .order-item {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid #ededed
}

.flat-card.is-checkout-form .items-column .order-item .item-description span,
.flat-card.is-checkout-form .items-column .order-item .item-quantity span {
    display: block
}

.flat-card.is-checkout-form .items-column .order-item .item-description span:first-child,
.flat-card.is-checkout-form .items-column .order-item .item-quantity span:first-child {
    
    font-weight: 600;
    text-transform: uppercase;
    font-size: 80%
}

.flat-card.is-checkout-form .items-column .order-item .item-description span:nth-child(2),
.flat-card.is-checkout-form .items-column .order-item .item-quantity span:nth-child(2) {
    font-size: 80%;
    color: #828282
}

.flat-card.is-checkout-form .items-column .order-item .item-description {
    width: 50%
}

.flat-card.is-checkout-form .items-column .order-item .item-quantity {
    width: 15%
}

.flat-card.is-checkout-form .items-column .order-item .item-price {
    width: 25%;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 90%;
    color: var(--app-default-color)
}

.flat-card.is-checkout-form .payment-wrapper {
    padding: 100px 0
}

.flat-card.is-checkout-form .payment-wrapper .subtotal {
    padding: 5px 0
}

.flat-card.is-checkout-form .payment-wrapper .subtotal .partial-value:before,
.flat-card.is-checkout-form .payment-wrapper .subtotal .vat-value:before {
    
    font-size: 60%;
    position: relative;
    top: -6px
}

.flat-card.is-checkout-form .payment-wrapper .subtotal .partial-value {
    font-weight: 500;
    color: #828282
}

.flat-card.is-checkout-form .payment-wrapper .subtotal .vat-value {
    font-weight: 500;
    color: var(--app-default-color)
}

.flat-card.is-checkout-form .payment-wrapper .subtotal .plus-operator,
.flat-card.is-checkout-form .payment-wrapper .subtotal .equal-operator {
    font-weight: 600
}

.flat-card.is-checkout-form .payment-wrapper .total span {
    display: block;
    font-size: 2.2rem;
    font-weight: 700;
    color: #4a4a4a
}

.flat-card.is-checkout-form .payment-wrapper .total span:before {
    
    font-size: 60%;
    position: relative;
    top: -10px
}

.flat-card.is-checkout-form .logo {
    height: 35px;
    width: auto;
    border: none;
    box-shadow: none;
    display: block
}

.flat-card.is-checkout-form .logo.is-centered {
    margin: 0 auto
}

.flat-card.is-checkout-form .bank-account {
    padding: 10px 0;
    display: block;
    font-size: 90%;
    color: #828282
}

.flat-card.is-checkout-form .control {
    margin: 10px 0
}

.flat-card.is-checkout-form .control.has-margin {
    margin-left: 5px;
    margin-right: 5px
}

.flat-card.is-checkout-form .control .input {
    box-shadow: none !important;
    color: #828282
}

.flat-card.is-checkout-form .checkout-label {
    font-weight: 500;
    color: #4a4a4a;
    font-size: 90%;
    margin: 5px 0;
    display: block
}

.flat-card.payment-method {
    text-align: center;
    padding: 40px;
    border: 2px solid transparent;
    cursor: pointer
}

.flat-card.payment-method .payment-icon svg {
    height: 60px;
    width: 60px;
    fill: #cecece;
    transition: all .3s
}

.flat-card.payment-method .payment-text {
    text-transform: uppercase;
    padding: 10px 0;
    font-size: 80%;
    color: #cecece
}

.flat-card.payment-method:hover.is-paypal {
    border-color: #039BE5
}

.flat-card.payment-method:hover.is-paypal svg {
    fill: #039BE5
}

.flat-card.payment-method:hover.is-paypal .payment-text {
    color: #039BE5
}

.flat-card.payment-method:hover.is-bank {
    border-color: #eda514
}

.flat-card.payment-method:hover.is-bank svg {
    fill: #eda514
}

.flat-card.payment-method:hover.is-bank .payment-text {
    color: #eda514
}

.flat-card.payment-method:hover.is-credit-card {
    border-color: var(--app-default-color)
}

.flat-card.payment-method:hover.is-credit-card svg {
    fill: var(--app-default-color)
}

.flat-card.payment-method:hover.is-credit-card .payment-text {
    color: var(--app-default-color)
}

.flat-card.payment-method:hover.is-cash {
    border-color: #00b289
}

.flat-card.payment-method:hover.is-cash svg {
    fill: #00b289
}

.flat-card.payment-method:hover.is-cash .payment-text {
    color: #00b289
}

.flat-card.thanks-card {
    padding: 40px;
    margin: 10px 0
}

.flat-card.thanks-card img {
    display: block;
    height: 75px;
    margin: 0 auto 10px auto
}

.flat-card.thanks-card .card-heading {
    font-size: 1rem;
    font-weight: 500
}

.flat-card.thanks-card p {
    padding: 10px 40px;
    font-size: .9rem;
    color: #828282
}

.flat-card.thanks-card .big-button {
    border: 2px solid var(--app-default-color);
    color: var(--app-default-color);
    font-weight: 500
}

.flat-card.thanks-card .big-button:hover {
    border-color: #667bff;
    color: #667bff
}

#payment-methods {
    padding: 10px 0
}

.button-wrapper {
    padding: 10px 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center
}


/*! _auth.scss | Nephos | CSS Ninja */

.auth-title {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    margin: 20px 0
}

.auth-title h2 {
    
    font-size: 1.6rem;
    font-weight: 400 !important;
    text-transform: uppercase
}

.auth-title h3 {
    font-weight: 500;
    color: var(--app-default-color)
}

.auth-title.is-centered {
    -ms-flex-pack: center;
    justify-content: center
}

.auth-title .brand-filigrane {
    position: absolute;
    top: -15px;
    left: -25px;
    height: 68px;
    opacity: 0.4
}

.flat-card.is-auth-form {
    min-height: 445px !important
}

.flat-card.is-auth-form .form-title h3 {
    font-size: 1.2rem;
    font-weight: 300 !important;
    text-transform: uppercase;
    padding-bottom: 20px
}

.flat-card.is-auth-form .column.is-padded {
    padding: 40px !important
}

.flat-card.is-auth-form .column.is-mobile-padded {
    padding: 40px
}

.flat-card.is-auth-form .column.is-light-padded {
    padding: 15px 40px !important
}

.flat-card.is-auth-form .column.image-column {
    position: relative;
    background-image: url("http://via.placeholder.com/1600x1200");
    background-size: cover;
    background-repeat: no-repeat
}

.flat-card.is-auth-form .column.image-column .nephos-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(43, 56, 76, 0.95);
    z-index: 0
}

.flat-card.is-auth-form .store-wrapper {
    padding: 120px 0;
    position: relative;
    z-index: 2
}

.flat-card.is-auth-form .store-wrapper .title {
    font-size: 1.6rem;
    letter-spacing: 3px;
    color: #fff;
    padding-top: 10px;
    text-transform: uppercase;
    font-weight: 300
}

.flat-card.is-auth-form .store-wrapper .subtitle {
    font-size: .75rem;
    color: #fff;
    padding: 10px 0;
    text-transform: uppercase;
    letter-spacing: 2px
}

.flat-card.is-auth-form .store-wrapper img {
    height: 75px;
    width: 75px
}

.flat-card.is-auth-form .store-wrapper img.logo {
    border-radius: 0;
    height: 75px;
    width: auto
}

.flat-card.is-auth-form .is-form-tabs {
    margin-bottom: 20px
}

.flat-card.is-auth-form .is-form-tabs li a {
    color: #cecece;
    
    text-transform: uppercase;
    font-size: 85%
}

.flat-card.is-auth-form .is-form-tabs li.is-active a {
    color: var(--app-default-color)
}

.flat-card.is-auth-form .auth-label {
    font-weight: 500;
    color: #4a4a4a;
    font-size: 90%;
    margin: 5px 0;
    display: block
}

.flat-card.is-auth-form .input {
    box-shadow: none !important
}

.flat-card.is-auth-form .control {
    margin-bottom: 10px
}

.flat-card.is-auth-form .checkbox-wrap {
    padding: 0 !important;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center
}

.flat-card.is-auth-form .checkbox-wrap small {
    font-size: .8rem !important
}

.flat-card.is-auth-form .forgotten {
    font-size: .85rem
}


/*! _buttons.scss | Nephos | CSS Ninja */

.button.big-button {
    padding: 22px 40px !important
}

.button.big-button.btn-outlined.is-bold {
    border-width: 2px;
    font-weight: 600
}

.button.big-button.is-bold {
    font-weight: 600
}

.button.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(0, 0, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important;
    opacity: 0.8
}

.button.upper-button {
    text-transform: uppercase
}

.button.upper-button.is-bold {
    font-weight: 600 !important
}

.button.rounded {
    border-radius: 500px
}

.button.feather-button {
    min-width: 130px;
    font-weight: 200;
    font-size: 80%;
    height: 40px
}

.button.feather-button.is-pushed {
    margin-left: auto
}

.button.feather-button svg {
    position: relative;
    top: 1px;
    width: 17px;
    height: 17px;
    margin-right: 8px
}

.button.feather-button.is-small {
    min-width: 100px;
    height: 32px;
    font-size: 60%;
    font-weight: 500
}

.button.feather-button.is-bold {
    font-weight: 500 !important;
    font-size: .75rem;
    text-transform: uppercase;
    border-width: 2px
}

button[type=submit],
.will-upload {
    display: block ;
    text-align: center !important
}

.button.primary-button {
    outline: none;
    border-color: var(--app-default-color);
    background-color: var(--app-default-color);
    color: #fff !important;
    transition: all 0.5s
}

.button.primary-button:hover {
    color: #fff
}

.button.primary-button.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(0, 35, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 35, 255, 0.2) !important;
    opacity: 0.9 0.5
}

.button.primary-button.btn-outlined {
    border-color: var(--app-default-color);
    color: var(--app-default-color) !important;
    background-color: transparent
}

.button.primary-button.btn-outlined:hover {
    color: #fff !important;
    background-color: var(--app-default-color)
}

.button.primary-button:focus {
    border-color: var(--app-default-color)
}

.button.secondary-button {
    outline: none;
    border-color: #00D1B2;
    background-color: #00D1B2;
    color: #fff;
    transition: all 0.5s
}

.button.secondary-button:hover {
    color: #fff
}

.button.secondary-button.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(0, 209, 178, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 209, 178, 0.2) !important;
    opacity: 0.95
}

.button.secondary-button.btn-outlined {
    border-color: #00D1B2;
    color: #00D1B2;
    background-color: transparent
}

.button.secondary-button.btn-outlined:hover {
    color: #fff;
    background-color: #00D1B2
}

.button.secondary-button:focus {
    border-color: #00D1B2
}

.button.accent-button {
    outline: none;
    border-color: #7F00FF;
    background-color: #7F00FF;
    color: #fff;
    transition: all 0.5s
}

.button.accent-button:hover {
    color: #fff
}

.button.accent-button.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important;
    opacity: 0.8
}

.button.accent-button.btn-outlined {
    border-color: #7F00FF;
    color: #7F00FF;
    background-color: transparent
}

.button.accent-button.btn-outlined:hover {
    color: #fff;
    background-color: #7F00FF
}

.button.accent-button:focus {
    border-color: #7F00FF
}

.button.grey-button {
    outline: none;
    border-color: #ccc;
    background-color: #ccc;
    color: #fff;
    transition: all 0.5s
}

.button.grey-button:hover {
    color: #fff
}

.button.grey-button.raised:hover {
    opacity: 0.8
}

.button.grey-button.btn-outlined {
    border-color: #ccc;
    color: #ccc;
    background-color: transparent
}

.button.grey-button.btn-outlined:hover {
    color: #fff;
    background-color: #ccc
}

.button.grey-button:focus {
    border-color: #ccc
}


/*! _search.scss | Nephos | CSS Ninja */

.search-overlay {
    position: fixed;
    top: -100px;
    left: -100px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    transition: all .4s;
    -webkit-transform: scale(1);
    transform: scale(1);
    z-index: 3
}

.search-overlay.is-active {
    -webkit-transform: scale(50);
    transform: scale(50)
}

.search-input-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 4
}

.search-input-wrapper.is-desktop {
    left: 80px;
    width: calc(100% - 80px)
}

.search-input-wrapper .field {
    position: relative;
    top: 25%;
    width: 100%;
    padding: 0 18%
}

.search-input-wrapper .control {
    position: relative;
    width: 100%;
    margin: 0 auto;
    opacity: 0;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    transition: all .3s
}

.search-input-wrapper .control input {
    width: 100%;
    height: 155px;
    padding-right: 75px;
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 0;
    border-bottom: 3px solid var(--app-default-color);
    background: transparent;
    font-size: 5rem;
    font-weight: 200;
    font-family: 'Alegreya Sans SC', sans-serif;
    text-transform: uppercase;
    padding-bottom: 10px
}

.search-input-wrapper .control input:focus {
    outline: none !important
}

.search-input-wrapper .control .search-help {
    display: block;
    color: var(--app-default-color);
    font-size: 1.3rem;
    padding-top: 20px
}

.search-input-wrapper .control #clear-search {
    display: block;
    position: absolute;
    top: 64px;
    right: 16px;
    cursor: pointer
}

.search-input-wrapper .control #clear-search svg {
    width: 42px;
    height: 42px;
    stroke: var(--app-default-color);
    stroke-width: 1px
}

.search-input-wrapper .control.is-active {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.search-input-wrapper .control input:not(:valid) ~ #clear-search {
    display: none
}


/*! _filters.scss | Nephos | CSS Ninja */

.price-range-wrapper .price-limit {
    position: relative;
    top: 3px;
    float: left;
    color: #999;
    font-size: 16px;
    font-weight: 500;
    margin-right: 5px
}

.price-range-wrapper .price-limit small {
    font-size: 70%
}

.range-slider {
    position: relative;
    width: 220px;
    float: left;
    margin: 0 4px
}

.range-slider .slider-output {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.range-slider .slider-output small {
    font-size: .8rem;
    color: #999
}

.range-slider .input-range {
    -webkit-appearance: none;
    width: 220px;
    height: 5px;
    border-radius: 5px;
    background: #ccc;
    outline: none
}

.range-slider .input-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--app-default-color);
    cursor: pointer;
    transition: background .15s ease-in-out;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    -webkit-transform: scale(1);
    transform: scale(1)
}

.range-slider .input-range::-webkit-slider-thumb:hover {
    background: var(--app-default-color)
}

.range-slider .input-range:active::-moz-range-thumb {
    background: var(--app-default-color)
}

.range-slider .input-range::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border: 0;
    border-radius: 50%;
    background: var(--app-default-color);
    cursor: pointer;
    transition: background .15s ease-in-out
}

.range-slider .range-value {
    display: block !important;
    position: relative;
    color: var(--app-default-color);
    font-size: 14px;
    font-weight: 500;
    padding: 0 10px
}

.range-slider::-moz-range-track {
    background: #ccc;
    border: 0
}

.range-slider input::-moz-focus-inner {
    border: 0
}

.columns.is-checkboxes .column .field {
    margin: 5px 0
}


/*! _checkboxes.scss | Nephos | CSS Ninja */

.checkbox-wrap {
    position: relative;
    cursor: pointer;
    padding: 1em
}

.checkbox-wrap::-moz-selection {
    background: transparent
}

.checkbox-wrap::selection {
    background: transparent
}

.checkbox-wrap input.d-checkbox+span,
.checkbox-wrap input.b-radio+span {
    background: #fff;
    content: "";
    display: inline-block;
    margin: 0 .5em 0 0;
    padding: 0;
    border: 1px solid #999;
    vertical-align: middle;
    width: 2em;
    height: 2em
}

.checkbox-wrap input.d-checkbox+span::after,
.checkbox-wrap input.b-radio+span::after {
    content: "";
    display: block;
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s, -webkit-transform .2s
}

.checkbox-wrap input.d-checkbox:checked+span::after,
.checkbox-wrap input.b-radio:checked+span::after {
    -webkit-transform: scale(1);
    transform: scale(1)
}

.checkbox-wrap input.d-checkbox,
.checkbox-wrap input.b-radio {
    position: absolute;
    cursor: pointer;
    opacity: 0
}

.checkbox-wrap input+span {
    border-radius: 2px
}

.checkbox-wrap input+span::after {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTMuNzA3LDMyLjI5MyAxMi4yOTMsMzMuODU0IDI0LjI5Myw0NiAyNS43MDcsNDYgNDkuNzA3LDIxLjg1NCA0OC4yOTMsMjAuMzY2IDI1LDQzLjYyMyAiLz48L2c+PC9zdmc+) no-repeat center;
    background-size: contain;
    width: 1.9em;
    height: 1.9em;
    position: relative;
    top: -1px
}

.checkbox-wrap.is-medium input+span {
    width: 1.4em;
    height: 1.4em
}

.checkbox-wrap.is-medium input+span::after {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTMuNzA3LDMyLjI5MyAxMi4yOTMsMzMuODU0IDI0LjI5Myw0NiAyNS43MDcsNDYgNDkuNzA3LDIxLjg1NCA0OC4yOTMsMjAuMzY2IDI1LDQzLjYyMyAiLz48L2c+PC9zdmc+) no-repeat center;
    background-size: contain;
    width: 1.3em;
    height: 1.3em;
    position: relative;
    top: -1px
}

.checkbox-wrap.is-small input+span {
    width: 1em;
    height: 1em
}

.checkbox-wrap.is-small input+span::after {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTMuNzA3LDMyLjI5MyAxMi4yOTMsMzMuODU0IDI0LjI5Myw0NiAyNS43MDcsNDYgNDkuNzA3LDIxLjg1NCA0OC4yOTMsMjAuMzY2IDI1LDQzLjYyMyAiLz48L2c+PC9zdmc+) no-repeat center;
    background-size: contain;
    width: 0.9em;
    height: 0.9em;
    position: relative;
    top: -1px
}

.checkbox-wrap label {
    color: #999
}


/*! _forms.scss | Nephos | CSS Ninja */

textarea.textarea {
    color: #999;
    box-shadow: none;
    overflow: hidden;
    transition: all 0.8s
}

textarea.textarea:focus {
    border: 1px solid #ededed;
    box-shadow: none !important
}

textarea.textarea.is-primary-focus:focus {
    border-color: var(--app-default-color)
}

textarea.textarea.is-primary-focus:focus ~ span.icon i {
    color: var(--app-default-color)
}

textarea.textarea.is-secondary-focus:focus {
    border-color: #00D1B2
}

textarea.textarea.is-secondary-focus:focus ~ span.icon i {
    color: #00D1B2
}

textarea.textarea.is-accent-focus:focus {
    border-color: #7F00FF
}

textarea.textarea.is-accent-focus:focus ~ span.icon i {
    color: #7F00FF
}

textarea.textarea.is-grey-focus:focus {
    border-color: #A9ABAC
}

textarea.textarea.is-grey-focus:focus ~ span.icon i {
    color: #A9ABAC
}

textarea.textarea.is-default-focus:focus {
    border-color: #999
}

textarea.textarea.is-default-focus:focus ~ span.icon i {
    color: #999
}

textarea.textarea.is-grow {
    min-height: 40px !important;
    height: 40px;
    resize: none;
    transition: all 0.5s
}

textarea.textarea.is-grow:focus {
    height: 130px !important;
    border-color: #ededed
}

textarea.textarea.is-button {
    min-height: 60px !important;
    height: 60px !important;
    resize: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none !important;
    transition: all 0.6s
}

textarea.textarea.is-button:hover {
    border-color: #ededed
}

textarea.textarea.is-button:focus {
    height: 130px !important;
    padding-bottom: 40px !important;
    border-color: #ededed
}

textarea.textarea.is-button+.textarea-button {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    position: relative;
    border: 1px solid #ededed;
    border-top: none !important;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #f9f9f9
}

textarea.textarea.is-button+.textarea-button button {
    margin: 10px 7px 7px 7px;
    font-size: 0.85rem;
    padding: 4px 10px 8px 10px;
    width: 92px
}

.control.control-medium {
    padding: 20px
}

.control.is-input-wrapper {
    margin: 10px 0;
    background: #f7f7f7
}

.input {
    transition: all .3s
}

.input.is-minimal {
    box-shadow: none !important
}

.input.is-minimal:focus {
    box-shadow: none !important;
    border: 1px solid #ededed
}

.input.is-default {
    box-shadow: none;
    color: #828282
}

.input.is-default:focus {
    border: 1px solid #ededed
}


/*! _invoice.scss | Nephos | CSS Ninja */

.invoice-wrap {
    padding: 20px 0
}

.invoice-controls {
    padding: 10px 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center
}

.invoice {
    background: #fff;
    width: 100%;
    padding: 50px
}

.invoice .logo {
    width: 60px
}

.invoice .document-type {
    text-align: right;
    color: #444
}

.invoice .conditions {
    font-size: 0.7em;
    color: #666
}

.invoice .bottom-page {
    font-size: 0.85em
}

.invoice .bottom-page .company,
.invoice .bottom-page .url {
    font-weight: 500;
    
}

.invoice .bottom-page .url {
    color: var(--app-default-color)
}

.invoice .bottom-page .code,
.invoice .bottom-page .id {
    color: #4a4a4a;
    
    font-weight: 500;
    font-size: 90%
}

.invoice .seller,
.invoice .buyer {
    font-size: .85rem;
    color: #828282;
    font-weight: 400
}

.invoice .seller span,
.invoice .buyer span {
    
    font-size: 1.1rem;
    font-weight: 500;
    color: #4a4a4a
}

.invoice .invoice-meta span {
    text-transform: uppercase;
    
    font-size: 70%;
    font-weight: 600
}

.invoice .invoice-meta span small {
    font-weight: 500;
    color: #828282;
    text-transform: none;
    font-size: 1rem
}

.invoice .invoice-meta span small.date {
    font-size: .85rem;
    padding: 0 5px
}

.responsive-table {
    width: 100%
}

.responsive-table td {
    vertical-align: middle !important
}

.responsive-table td .product {
    
    font-weight: 600;
    font-size: 90%
}

.responsive-table td .sku {
    font-size: 80%;
    color: #828282;
    font-weight: 500
}

.responsive-table td .quantity {
    color: #828282
}

.responsive-table td .unit-price,
.responsive-table td .total-price {
    font-weight: 500;
    color: #4a4a4a;
    font-size: 85%
}

.responsive-table td .unit-price:before,
.responsive-table td .total-price:before {
    
    font-size: 80%
}

.responsive-table th {
    text-transform: uppercase;
    font-weight: 500 !important;
    font-size: .75rem;
    color: #828282 !important
}

@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px) {
    .responsive-table table,
    .responsive-table thead,
    .responsive-table tbody,
    .responsive-table th,
    .responsive-table td,
    .responsive-table tr {
        display: block
    }
    .responsive-table thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px
    }
    .responsive-table tr {
        border: 1px solid #ccc
    }
    .responsive-table td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%
    }
    .responsive-table td.has-text-centered {
        text-align: left !important
    }
    .responsive-table td:before {
        position: absolute;
        top: 12px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        text-transform: uppercase;
        font-weight: 500 !important;
        font-size: .75rem;
        color: #828282 !important
    }
    .responsive-table td:nth-of-type(1):before {
        content: "Product"
    }
    .responsive-table td:nth-of-type(2):before {
        content: "Quantity"
    }
    .responsive-table td:nth-of-type(3):before {
        content: "Price"
    }
    .responsive-table td:nth-of-type(4):before {
        content: "Total"
    }
}

.sub-table {
    width: 100% !important
}

.sub-table .subtotal,
.sub-table .vat {
    text-transform: uppercase;
    font-weight: 500 !important;
    font-size: .75rem;
    color: #828282
}

.sub-table .total {
    text-transform: uppercase;
    font-weight: 500 !important;
    font-size: 95%;
    color: #4a4a4a
}

.sub-table .subtotal-value,
.sub-table .vat-value {
    font-weight: 500;
    font-size: 80%;
    color: #4a4a4a
}

.sub-table .subtotal-value:before,
.sub-table .vat-value:before {
    
    font-size: 80%
}

.sub-table .total-value {
    font-weight: 600;
    color: var(--app-default-color)
}

.sub-table .total-value:before {
    
    font-size: 80%
}


/*! _pageloader.scss | Nephos | CSS Ninja */

.pageloader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 80px;
    width: calc(100% - 80px);
    background-color: #ededed;
    z-index: 999998;
    transition: -webkit-transform 0.35s ease-out;
    transition: transform 0.35s ease-out;
    transition: transform 0.35s ease-out, -webkit-transform 0.35s ease-out;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    will-change: transform
}

.pageloader.is-active {
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.pageloader.is-full {
    width: 100% !important;
    left: 0 !important
}

.pageloader.is-demo {
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%) !important
}

.pageloader::after,
.pageloader::before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    border-radius: 100%;
    content: "";
    z-index: 999999
}

.pageloader::after {
    margin-top: -100px;
    margin-left: -100px;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 3px solid rgba(255, 255, 255, 0.75);
    -webkit-animation: page-loader-inner 1.5s infinite ease-out;
    animation: page-loader-inner 1.5s infinite ease-out
}

.pageloader::before {
    margin-top: -30px;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    background-color: #fff;
    -webkit-animation: page-loader-outer 1.5s infinite ease-in;
    animation: page-loader-outer 1.5s infinite ease-in
}

@-webkit-keyframes page-loader-inner {
    0%,
    40% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

@keyframes page-loader-inner {
    0%,
    40% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

@-webkit-keyframes page-loader-outer {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    100%,
    40% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0
    }
}

@keyframes page-loader-outer {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    100%,
    40% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0
    }
}

.infraloader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 80px;
    width: calc(100% - 80px);
    background-color: #fff;
    z-index: -1;
    opacity: 0;
    transition: opacity .35s
}

.infraloader.is-active {
    opacity: 1;
    z-index: 999997
}

.infraloader.is-full {
    width: 100% !important;
    left: 0 !important
}


/*! _elements.scss | Nephos | CSS Ninja */

.is-element-card {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px 40px
}

.is-element-card .element-card-title {
    text-transform: uppercase;
    font-size: .75rem;
    font-weight: 500
}

.is-element-card img {
    max-width: 120px;
    width: 120px;
    margin: 5px 0
}

.is-element-card .view-element {
    
    text-transform: uppercase
}

.is-element-card .view-element a {
    font-weight: 600
}

.is-element-details {
    border: none !important;
    margin-bottom: 20px
}

.is-element-details.has-overflow {
    overflow: visible !important
}

.is-element-details .columns.is-gapless {
    background: #344258
}

.is-element-details .is-component .inner,
.is-element-details .is-description .inner {
    padding: 40px
}

.is-element-details .is-component {
    background: #fff
}

.is-element-details .is-component .control {
    margin-bottom: 20px
}

.is-element-details .is-component.is-grey {
    background: #fcfcfc
}

.is-element-details .is-description {
    color: #fcfcfc !important
}

.is-element-details .is-description .divider {
    height: 1.6px;
    background: #fcfcfc;
    border-radius: 50px;
    width: 60px;
    margin: 10px 0
}

.is-element-details .is-description h2 {
    color: #fcfcfc !important
}

.is-element-details .is-description p {
    
    font-size: .85rem;
    margin-bottom: 10px
}

.is-element-details .is-description code {
    color: #ffcc00;
    background: transparent !important
}

.spacer {
    padding: 20px 0
}

.control.required {
    position: relative
}

.control.required .input {
    padding-right: 36px
}

.control.required svg {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 16px;
    height: 16px;
    display: none;
    stroke-width: 2.4px
}

.control.required svg.success-icon {
    stroke: #00b289
}

.control.required svg.error-icon {
    stroke: #FF7273
}

.control.required svg.warning-icon {
    stroke: #eda514
}

.control.required .status-text span {
    font-size: 60%;
    
    display: none
}

.control.required .status-text span.success-text {
    color: #00b289
}

.control.required .status-text span.warning-text {
    color: #eda514
}

.control.required .status-text span.error-text {
    color: #FF7273
}

.control.required.has-success .input {
    border-color: #00b289 !important
}

.control.required.has-success .success-icon,
.control.required.has-success .success-text {
    display: block
}

.control.required.has-warning .input {
    border-color: #eda514 !important
}

.control.required.has-warning .warning-icon,
.control.required.has-warning .warning-text {
    display: block
}

.control.required.has-error .input {
    border-color: #FF7273 !important
}

.control.required.has-error .error-icon,
.control.required.has-error .error-text {
    display: block
}

.control.has-addon {
    position: relative
}

.control.has-addon.has-block .input {
    padding-right: 40px
}

.control.has-addon.has-block .input-block {
    position: absolute;
    top: 0;
    right: 0;
    height: 36px;
    width: 36px;
    background: #ededed;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 500
}

.control.has-addon.has-button .input {
    padding-right: 70px
}

.control.has-addon.has-button .input-button {
    max-height: 30px;
    background: #00D1B2;
    color: #fff;
    padding: 8px 14px;
    font-size: .7rem;
    line-height: 1.2;
    border-radius: 3px;
    position: absolute;
    top: 3px;
    right: 3px;
    transition: opacity .3s;
    cursor: pointer
}

.control.has-addon.has-button .input-button:hover {
    opacity: 0.7
}

.control.has-addon.has-icon .input {
    padding-left: 40px
}

.control.has-addon.has-icon .input:focus {
    border-color: var(--app-default-color)
}

.control.has-addon.has-icon .input:focus+svg {
    stroke: var(--app-default-color)
}

.control.has-addon.has-icon svg {
    height: 22px;
    width: 22px;
    position: absolute;
    top: 7px;
    left: 10px;
    stroke: #cecece;
    transition: all .3s
}

.control.has-select-icon {
    position: relative
}

.control.has-select-icon svg {
    position: absolute;
    top: 7px;
    left: 10px;
    width: 18px;
    height: 18px;
    color: #ccc
}

.control.has-select-icon .styledSelect {
    left: 36px !important
}

.control.has-select-icon.is-loading::after {
    left: .625em !important;
    top: .49em !important
}

.s-hidden {
    visibility: hidden;
    padding-right: 10px
}

.select:not(.is-multiple) {
    height: 2.85em !important
}

.select {
    cursor: pointer;
    display: block;
    position: relative;
    font: normal 11px/22px Arial, Sans-Serif;
    color: black;
}

.styledSelect {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    color: #999;
    padding: 0 10px;
    
    font-weight: 500;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center
}

.styledSelect:active,
.styledSelect.active {
    background-color: #fcfcfc
}

.options {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 999;
    margin: 0 0;
    padding: 0 0;
    list-style: none;
    border: 1px solid #ccc;
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2)
}

.options li {
    padding: 5px 6px;
    margin: 0 0;
    padding: 5px 10px
}

.options li:hover {
    background-color: var(--app-default-color);
    color: #fff
}

.control.is-loading.is-preloading:after {
    left: .625em !important;
    top: 0.8em !important
}

.control.is-loading.is-preloading.native:after {
    top: 0.5em !important
}

.control.is-loading.is-preloading .chosen-single {
    padding-left: 36px !important
}

.chosen-container-multi .chosen-choices li.search-field input[type="text"] {
    height: 40px !important
}

.chosen-container-multi .chosen-choices li.search-choice {
    background-color: var(--app-default-color) !important;
    margin: 10px 12px 10px -8px !important
}

.chosen-container-multi .chosen-choices li.search-choice .search-choice-close {
    top: 0px !important
}

.easy-autocomplete {
    width: 100% !important
}

.autocpl {
    box-shadow: none !important
}

.autocpl .easy-autocomplete-container ul {
    padding: 10px !important
}

.autocpl .easy-autocomplete-container ul li {
    margin: 0 10px
}

.template-wrapper {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center
}

.template-wrapper .autocpl-avatar {
    width: 36px !important;
    height: 36px !important;
    border-radius: 100px !important
}

.template-wrapper .autocpl-product {
    width: 36px !important;
    height: 36px !important;
    border-radius: 2px !important
}

.template-wrapper .entry-text {
    margin-left: 15px
}

.template-wrapper .entry-text span {
    font-size: 0.8rem;
    color: #A9ABAC
}

.spinner-control {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center
}

.spinner-control input {
    height: 36px;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    border-left: none !important;
    border-right: none !important
}

.spinner-control input:focus,
.spinner-control input:active {
    border-top: 1px solid #fcfcfc !important;
    border-bottom: 1px solid #fcfcfc !important;
    outline: non !important
}

.spinner-control .spinner-button {
    width: 36px;
    height: 36px;
    background: #ededed;
    border: 1px solid #cecece;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    transition: all .3s
}

.spinner-control .spinner-button svg {
    width: 16px;
    height: 16px;
    stroke-width: 1.6px;
    stroke: #999;
    transition: all .3s
}

.spinner-control .spinner-button:hover {
    opacity: 0.7
}

.spinner-control .spinner-button:hover svg {
    stroke: var(--app-default-color)
}

.spinner-control .input-group-prepend .spinner-button {
    border-radius: 4px 0 0 4px
}

.spinner-control .input-group-append .spinner-button {
    border-radius: 0 4px 4px 0
}

.tabs-wrapper.underline-tabs .tabs ul li a {
    color: #cecece
}

.tabs-wrapper.underline-tabs .tabs ul li.is-active a {
    color: var(--app-default-color)
}

.tabs-wrapper .navtab-content {
    
    font-size: .9rem
}


/*! _utils.scss | Nephos | CSS Ninja */

.action-bar {
    position: fixed;
    top: 0;
    left: 0;
    margin-left: 80px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-align: center;
    align-items: center;
    padding: 15px 20px;
    width: calc(100% - 80px);
    background: #fff;
    z-index: 2;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
    transition: all .3s
}

.action-bar.is-centered {
    -ms-flex-pack: center !important;
    justify-content: center !important
}

.mobile-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    transition: all .3s
}

.mobile-navbar.is-active {
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.mobile-navbar .navbar-item.is-icon svg {
    stroke-width: 1.6px;
    stroke: var(--app-default-color)
}

.mobile-navbar .navbar-item.is-sidebar-toggler svg {
    stroke: #999 !important
}

.mobile-navbar .navbar-item.is-flex {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center
}

.mobile-navbar .navbar-item.is-flex span {
    display: block
}

.mobile-navbar .navbar-item.is-flex span.menu-badge {
    color: #00D1B2;
    width: 20px;
    height: 20px;
    border: 1px solid #00D1B2;
    border-radius: 50%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 90%;
    font-weight: 500
}

.mobile-navbar .navbar-burger:hover {
    background-color: rgba(0, 0, 0, 0.02)
}

.mobile-navbar .navbar-burger span {
    background-color: var(--app-default-color)
}

.mobile-navbar .navbar-menu {
    background: #344258
}

.mobile-navbar .navbar-menu .navbar-item,
.mobile-navbar .navbar-menu .navbar-link {
    color: #fff
}

.mobile-navbar .navbar-menu .navbar-link {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #475a78
}

.mobile-navbar .navbar-menu .navbar-link img {
    height: 32px;
    width: 32px;
    max-height: 32px !important;
    border-radius: 50%
}

.mobile-navbar .navbar-menu .navbar-link svg {
    height: 20px;
    width: 20px;
    stroke-width: 1.2px;
    stroke: #fff
}

.mobile-navbar .navbar-menu .navbar-link span {
    margin: 0 10px
}

.mobile-navbar .navbar-menu .navbar-link span.is-heading {
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase
}

.mobile-navbar .navbar-menu .navbar-dropdown .navbar-item {
    font-size: 90%;
    padding: .75rem 1.5rem !important
}

.mobile-navbar .navbar-menu .navbar-dropdown .navbar-item.is-atcive,
.mobile-navbar .navbar-menu .navbar-dropdown .navbar-item:hover {
    background: #475a78
}

.tabs-wrapper .tabs {
    overflow: hidden
}

.tabs-wrapper.animated-tabs .navtab-content {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s
}

.tabs-wrapper.translated-tabs .navtab-content {
    -webkit-animation-name: translateLeft;
    animation-name: translateLeft;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s
}

.tabs-wrapper .navtab-content {
    display: none;
    padding: 15px;
    min-height: 190px
}

.tabs-wrapper .navtab-content.is-active {
    display: block
}

.form-switch {
    position: relative;
    display: inline-block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent
}

.form-switch i {
    position: relative;
    display: inline-block;
    margin-right: .5rem;
    width: 46px;
    height: 26px;
    background-color: #e6e6e6;
    border-radius: 23px;
    vertical-align: text-bottom;
    transition: all 0.3s linear
}

.form-switch i::before {
    content: "";
    position: absolute;
    left: 0;
    width: 42px;
    height: 22px;
    background-color: #fff;
    border-radius: 11px;
    -webkit-transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
    transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
    transition: all 0.25s linear
}

.form-switch i::after {
    content: "";
    position: absolute;
    left: 0;
    width: 22px;
    height: 22px;
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
    -webkit-transform: translate3d(2px, 2px, 0);
    transform: translate3d(2px, 2px, 0);
    transition: all 0.2s ease-in-out
}

.form-switch:active i::after {
    width: 28px;
    -webkit-transform: translate3d(2px, 2px, 0);
    transform: translate3d(2px, 2px, 0)
}

.form-switch:active input:checked+i::after {
    -webkit-transform: translate3d(16px, 2px, 0);
    transform: translate3d(16px, 2px, 0)
}

.form-switch input {
    position: absolute;
    opacity: 0;
    pointer-events: none
}

.form-switch input:checked+i {
    background-color: var(--app-default-color)
}

.form-switch input:checked+i::before {
    -webkit-transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
    transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0)
}

.form-switch input:checked+i::after {
    -webkit-transform: translate3d(22px, 2px, 0);
    transform: translate3d(22px, 2px, 0)
}

.webui-popover {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 10px 4px !important;
    background: #344258 !important;
    color: #fff !important;
    border: none !important;
    margin-top: -20px !important
}

.webui-popover.top>.webui-arrow {
    border-top-color: transparent !important
}

.webui-popover .webui-arrow {
    border-top-color: transparent !important
}

.webui-popover .webui-arrow:after {
    border-top-color: #344258 !important
}

.webui-popover .webui-popover-title {
    background-color: #344258 !important;
    border-bottom: none !important;
    font-weight: 500
}

.webui-popover .webui-popover-content {
    font-size: .75rem !important
}

.webui-popover .webui-popover-content .popover-flex-block {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px 0
}

.webui-popover .webui-popover-content .popover-flex-block .staff-avatar {
    height: 38px;
    width: 38px;
    border-radius: 50%
}

.webui-popover .webui-popover-content .popover-flex-block .content-block {
    margin-left: 10px
}

.webui-popover .webui-popover-content .popover-flex-block .content-block label,
.webui-popover .webui-popover-content .popover-flex-block .content-block span {
    display: block
}

.webui-popover .webui-popover-content .popover-flex-block .content-block label {
    color: #879ab8;
    text-transform: uppercase;
    font-size: 70%
}

.webui-popover .webui-popover-content .popover-flex-block .fa.fa-star,
.webui-popover .webui-popover-content .popover-flex-block .fa.fa-star-half {
    color: #FFD700
}

.webui-popover .webui-popover-content .popover-flex-block .icon-block {
    height: 38px;
    width: 38px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center
}

.webui-popover .webui-popover-content .popover-flex-block .icon-block svg {
    height: 18px;
    width: 18px;
    stroke: #fff;
    stroke-width: 1.3px
}

.webui-popover .webui-popover-content .popover-flex-block .icon-block svg.is-medium {
    height: 26px;
    width: 26px
}

.is-vhidden {
    visibility: hidden !important
}

.is-hidden {
    display: none !important
}

.is-disabled {
    pointer-events: none;
    opacity: 0.4;
    cursor: default !important
}

.mt-80 {
    margin-top: 80px !important
}

.is-space-between {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center
}

.text-bold-1 {
    font-weight: 400 !important
}

.ml-5 {
    margin-left: 5px !important
}

.mr-5 {
    margin-right: 5px !important
}

.light-text {
    color: #fff !important
}

.animated {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-fill-mode: both
}

@-webkit-keyframes fadeInUp {
    from {
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

@keyframes fadeInUp {
    from {
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

.preFadeInUp {
    opacity: 0
}

.fadeInUp {
    opacity: 0;
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp
}

@-webkit-keyframes translateLeft {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

@keyframes translateLeft {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

.translateLeft {
    -webkit-animation-name: translateLeft;
    animation-name: translateLeft;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    transition: all 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06)
}

@-webkit-keyframes fadeInLeft {
    from {
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
        opacity: 0
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

@keyframes fadeInLeft {
    from {
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
        opacity: 0
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

.preFadeInLeft {
    opacity: 0
}

.fadeInLeft {
    opacity: 0;
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft
}

@-webkit-keyframes gelatine {
    from,
    to {
        -webkit-transform: scale(1, 1)
    }
    25% {
        -webkit-transform: scale(0.9, 1.1)
    }
    50% {
        -webkit-transform: scale(1.1, 0.9)
    }
    75% {
        -webkit-transform: scale(0.95, 1.05)
    }
}

@keyframes gelatine {
    from,
    to {
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1)
    }
    25% {
        -webkit-transform: scale(0.9, 1.1);
        transform: scale(0.9, 1.1)
    }
    50% {
        -webkit-transform: scale(1.1, 0.9);
        transform: scale(1.1, 0.9)
    }
    75% {
        -webkit-transform: scale(0.95, 1.05);
        transform: scale(0.95, 1.05)
    }
}

.gelatine {
    -webkit-animation: gelatine 0.6s;
    animation: gelatine 0.6s;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

@-webkit-keyframes scaleIn {
    from {
        -webkit-transform: scale(0)
    }
    to {
        -webkit-transform: scale(1)
    }
}

@keyframes scaleIn {
    from {
        -webkit-transform: scale(0);
        transform: scale(0)
    }
    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.scaleIn {
    -webkit-animation: scaleIn 0.5s;
    animation: scaleIn 0.5s;
    -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1)
}

@-webkit-keyframes scaleOut {
    from {
        -webkit-transform: scale(1)
    }
    to {
        -webkit-transform: scale(0)
    }
}

@keyframes scaleOut {
    from {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    to {
        -webkit-transform: scale(0);
        transform: scale(0)
    }
}

.scaleOut {
    -webkit-animation: scaleOut 0.6s;
    animation: scaleOut 0.6s
}

@-webkit-keyframes levitate {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -webkit-transform: translate(0, 10px);
        transform: translate(0, 10px)
    }
    to {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}

@keyframes levitate {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -webkit-transform: translate(0, 10px);
        transform: translate(0, 10px)
    }
    to {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}

.levitate {
    -webkit-animation-name: levitate;
    animation-name: levitate;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}


/*! _responsive.scss | Nephos | CSS Ninja */

@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
    .fullscreen-slick .full-slide {
        background-position: bottom
    }
    .fullscreen-slick .slick-dots {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }
    .shop-wrapper .is-tablet-landscape-padded {
        margin-left: 5.33333% !important
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    .shop-wrapper .is-tablet-landscape-padded {
        width: 100% !important;
        margin: 0 !important
    }
    .shop-wrapper .is-invoice-landscape-padded {
        width: 100% !important;
        margin: 0 !important
    }
    .product-panel {
        width: 35%
    }
    .product-panel .likes {
        margin: 0 30px !important
    }
    .product-panel .detailed-description,
    .product-panel .product-ratings {
        padding: 10px 20px !important;
        margin-top: 10px !important
    }
    .product-panel .product-image {
        padding: 40% 0 !important
    }
    .product-panel .product-image img {
        max-width: 220px
    }
    .product-info-panel {
        width: 65%
    }
    .product-info-panel .category-title {
        padding: 0 40px !important
    }
    .product-info-panel .panel-body {
        padding: 60px 40px !important
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .fullscreen-slick .full-slide {
        background-position: bottom
    }
    .fullscreen-slick .slick-dots {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }
    .hero-caption {
        padding: 160px 0 !important
    }
    .background-caption {
        padding: 90px 0 !important
    }
    .main-sidebar.is-pushed-mobile {
        -webkit-transform: translateX(-81px) !important;
        transform: translateX(-81px) !important
    }
    .shop-wrapper {
        margin-top: 20px !important
    }
    .menu-fab {
        top: 80px !important
    }
    .category-title .brand-filigrane {
        left: -26px !important
    }
    .tile.has-background-image {
        min-height: 300px !important;
        padding: 1.25rem 1.5rem !important
    }
    .tile.has-background-image .tile-content {
        height: 260px !important
    }
    .tile.has-background-image .tile-content.is-small .divider,
    .tile.has-background-image .tile-content.is-small p {
        display: block !important
    }
    .tile.has-background-image .tile-content .products {
        position: absolute;
        bottom: 0;
        padding: 0;
        left: 0
    }
    .flat-card.is-long {
        display: block
    }
    .flat-card.is-long .left-image,
    .flat-card.is-long .left-image.is-md {
        text-align: center !important;
        margin: 40px 0 !important;
        width: 100% !important
    }
    .flat-card.is-long .left-image img,
    .flat-card.is-long .left-image.is-md img {
        max-width: 100px;
        margin: 10px auto !important;
        display: block !important
    }
    .flat-card.is-long .product-info {
        text-align: center !important
    }
    .flat-card.is-long .product-info h3 {
         !important;
        text-transform: uppercase !important;
        font-size: .8rem !important;
        font-weight: 500 !important
    }
    .product-panel {
        display: block;
        position: relative;
        width: 100%
    }
    .product-panel .panel-header {
        -ms-flex-pack: start;
        justify-content: flex-start
    }
    .product-panel .panel-header .likes {
        margin: 0 40px !important
    }
    .product-panel img {
        max-width: 360px !important
    }
    .product-panel .detailed-description,
    .product-panel .product-ratings {
        max-height: 75vh !important;
        padding: 20px 40px !important
    }
    .product-panel .product-actions {
        padding: 0 10px !important;
        bottom: 40px !important
    }
    .product-info-panel {
        display: block;
        position: relative;
        width: 100%
    }
    .product-info-panel .inner-panel {
        padding-right: 0
    }
    .product-info-panel .inner-panel .panel-header {
        padding-top: 40px !important
    }
    .product-info-panel .inner-panel .panel-header .category-title {
        padding: 0 40px !important
    }
    .product-info-panel .inner-panel .panel-header .category-title h2 {
        padding-left: 20px !important
    }
    .product-info-panel .inner-panel .panel-header .category-icon {
        display: none !important
    }
    .product-info-panel .inner-panel .panel-body {
        padding: 0 40px 40px 40px !important
    }
    .product-info-panel .inner-panel .panel-body .product-name {
        padding-top: 20px !important;
        font-size: 1.8rem !important
    }
    .product-info-panel .inner-panel .panel-body .product-controls {
        -ms-flex-pack: justify;
        justify-content: space-between
    }
    .product-info-panel .inner-panel .panel-body .product-controls .product-price {
        margin-bottom: 10px
    }
    .product-info-panel .inner-panel .panel-body .product-controls .product-quantity {
        margin-left: 0 !important
    }
    .product-info-panel .inner-panel .panel-body .product-controls .add-to-cart button {
        margin-left: 0 !important
    }
    .product-info-panel .inner-panel .panel-footer {
        display: block;
        position: relative
    }
    .product-info-panel .inner-panel .panel-footer .footer-inner {
        margin-top: 0;
        padding-bottom: 45px
    }
    .product-info-panel .inner-panel .panel-footer .footer-inner .recommended {
        display: block;
        position: relative;
        -webkit-transform: rotate(0);
        transform: rotate(0);
        top: 12px;
        left: 40px
    }
    .product-info-panel .inner-panel .panel-footer .footer-inner .product-info {
        padding: 0 40px;
        text-align: center !important
    }
    .cart-card .action {
        display: -ms-flexbox !important;
        display: flex !important
    }
    .action-bar {
        width: 100% !important;
        margin-left: 0 !important
    }
    .is-auth {
        padding: 100px 0 !important
    }
}

@media (max-width: 767px) {
    .fullscreen-slick .full-slide {
        background-position: bottom
    }
    .fullscreen-slick .slick-dots {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        bottom: 24px !important
    }
    .main-sidebar {
        width: 60px
    }
    .main-sidebar .sidebar-brand {
        width: 60px
    }
    .main-sidebar .icon-menu li,
    .main-sidebar .bottom-menu li {
        width: 60px !important
    }
    .navbar-link {
        padding: 0.5rem 1.5rem !important
    }
    .menu-fab {
        top: 72px !important
    }
    .shop-wrapper {
        width: calc(100% - 60px);
        margin-left: 60px
    }
    .shop-wrapper.is-mobile-mode {
        margin-top: 10px
    }
    .pageloader,
    .infraloader {
        left: 60px;
        width: calc(100% - 60px)
    }
    .pageloader.is-full,
    .infraloader.is-full {
        left: 0 !important;
        width: 100% !important
    }
    .hero-caption {
        padding-top: 100px !important
    }
    .hero-caption h1 {
        font-size: 4rem !important
    }
    .hero-caption h2 {
        font-size: 1.3rem !important;
        margin-top: -20px !important
    }
    .background-caption {
        top: 0 !important;
        padding-top: 76px !important
    }
    .background-caption h1 {
        font-size: 6rem !important
    }
    .search-input-wrapper.is-desktop {
        position: fixed;
        top: 0;
        left: 60px;
        height: 100%;
        width: calc(100% - 60px)
    }
    .search-input-wrapper.is-desktop .field {
        padding: 0 5%;
        top: 22%
    }
    .search-input-wrapper.is-desktop .search-help {
        font-size: 1rem !important
    }
    .search-input-wrapper.is-desktop input {
        height: 60px !important;
        padding-right: 34px !important;
        font-size: 1.6rem !important
    }
    .search-input-wrapper.is-desktop #clear-search {
        top: 10px !important;
        right: 1px !important
    }
    .search-input-wrapper.is-desktop #clear-search svg {
        width: 32px !important;
        height: 32px !important
    }
    .is-product-grid {
        padding-top: 20px
    }
    .is-product-grid .column {
        padding: 15px !important;
        width: 40%;
    flex-basis: unset;
    }
    .columns.is-multiline{
    display:flex;
    flex-wrap: wrap;
    }
    .category-title {
        border-bottom: none !important
    }
    .category-title .category-icon {
        -ms-flex-pack: start !important;
        justify-content: flex-start !important
    }
    .category-title .category-icon img {
        max-height: 30px !important;
        padding: 0 !important
    }
    .category-title h2 {
        font-size: 1.4rem !important
    }
    .category-title .brand-filigrane {
        top: -16px !important;
        left: -25px !important;
        height: 58px !important
    }
    .flat-card.is-long {
        display: block
    }
    .flat-card.is-long .left-image,
    .flat-card.is-long .left-image.is-md {
        text-align: center !important;
        margin: 40px 0 !important;
        width: 100% !important
    }
    .flat-card.is-long .left-image img,
    .flat-card.is-long .left-image.is-md img {
        max-width: 100px;
        margin: 10px auto !important;
        display: block !important
    }
    .flat-card.is-long .product-info h3 {
         !important;
        text-transform: uppercase !important;
        font-size: .8rem !important;
        font-weight: 500 !important
    }
    .shop-quickview {
        left: 60px !important;
        width: 260px !important;
        -webkit-transform: translateX(-261px);
        transform: translateX(-261px)
    }
    .cart-quickview {
        left: 60px !important;
        width: calc(100% - 60px);
        -webkit-transform: translateX(calc(-100% - 60px));
        transform: translateX(calc(-100% - 60px))
    }
    .filters-quickview {
        left: 60px !important;
        width: calc(100% - 60px);
        -webkit-transform: translateX(calc(-100% - 60px));
        transform: translateX(calc(-100% - 60px))
    }
    .range-slider {
        width: 200px !important
    }
    .range-slider .input-range {
        width: 200px !important
    }
    .product-panel {
        display: block;
        position: relative;
        width: 100%
    }
    .product-panel .panel-header {
        -ms-flex-pack: start;
        justify-content: flex-start
    }
    .product-panel .panel-header .likes {
        margin: 0 30px
    }
    .product-panel .detailed-description,
    .product-panel .product-ratings {
        margin-top: 0 !important;
        max-height: 70vh !important;
        padding: 10px 20px !important
    }
    .product-panel .product-actions {
        bottom: 30px !important
    }
    .product-info-panel {
        display: block;
        position: relative;
        width: 100%
    }
    .product-info-panel .inner-panel {
        padding-right: 0
    }
    .product-info-panel .inner-panel .panel-header {
        padding: 20px 0
    }
    .product-info-panel .inner-panel .panel-header .category-title {
        padding: 0 20px !important;
        -ms-flex-pack: center;
        justify-content: center
    }
    .product-info-panel .inner-panel .panel-header .category-title h2 {
        font-size: 1.1rem !important;
        padding: 0 10px !important
    }
    .product-info-panel .inner-panel .panel-header .category-title svg {
        display: none !important
    }
    .product-info-panel .inner-panel .panel-body {
        padding: 20px !important
    }
    .product-info-panel .inner-panel .panel-body .product-name {
        text-align: center !important;
        font-size: 1.8rem !important
    }
    .product-info-panel .inner-panel .panel-body .product-name span {
        display: block
    }
    .product-info-panel .inner-panel .panel-body .product-description {
        text-align: center
    }
    .product-info-panel .inner-panel .panel-body .product-controls {
        display: block
    }
    .product-info-panel .inner-panel .panel-body .product-controls .product-price {
        margin-bottom: 10px;
        width: 100%;
        text-align: center
    }
    .product-info-panel .inner-panel .panel-body .product-controls .product-price .value::after {
        display: none
    }
    .product-info-panel .inner-panel .panel-body .product-controls .product-quantity {
        margin-left: 0 !important;
        width: 100%;
        text-align: center !important
    }
    .product-info-panel .inner-panel .panel-body .product-controls .product-quantity .heading {
        margin-left: 0 !important;
        text-align: center
    }
    .product-info-panel .inner-panel .panel-body .product-controls .product-quantity .control {
        height: auto;
        width: 100%;
        max-width: 100%
    }
    .product-info-panel .inner-panel .panel-body .product-controls .add-to-cart {
        width: 100%;
        text-align: center;
        margin-top: 10px
    }
    .product-info-panel .inner-panel .panel-body .product-controls .add-to-cart .heading {
        display: none
    }
    .product-info-panel .inner-panel .panel-body .product-controls .add-to-cart button {
        margin-left: 0 !important;
        width: 100%
    }
    .product-info-panel .inner-panel .panel-footer {
        display: block;
        position: relative
    }
    .product-info-panel .inner-panel .panel-footer .footer-inner {
        margin-top: 20px;
        padding-bottom: 45px
    }
    .product-info-panel .inner-panel .panel-footer .footer-inner .recommended {
        display: block;
        -webkit-transform: rotate(0);
        transform: rotate(0);
        top: 25px;
        right: 0;
        left: 0;
        max-width: 300px;
        margin: 0 auto;
        text-align: center
    }
    .product-info-panel .inner-panel .panel-footer .footer-inner .product-info {
        text-align: center !important
    }
    .is-account-grid .column {
        padding: .75rem .25rem !important
    }
    .account-title .brand-filigrane {
        top: -8px !important;
        left: -25px !important;
        height: 60px !important
    }
    .profile-info-card .card-title {
        padding: 15px 12px
    }
    .wishlist-card .item-wrapper {
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 40px !important
    }
    .wishlist-card .item-wrapper img {
        margin-right: 0 !important
    }
    .wishlist-card .item-wrapper .product-info {
        text-align: center
    }
    .wishlist-card .item-wrapper .action {
        margin: 0 !important
    }
    .wishlist-card .item-wrapper .action .dropdown-menu {
        left: 0 !important;
        -webkit-transform: translateX(-40%) !important;
        transform: translateX(-40%) !important
    }
    .wishlist-item .action {
        padding: 10px 0
    }
    .action-bar {
        width: calc(100% - 60px) !important;
        margin-left: 60px !important
    }
    .invoice-wrapper {
        padding: .75rem 0 !important
    }
    .invoice {
        padding: 20px !important
    }
    .flat-card.is-auth-form .columns {
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse
    }
    .tile.has-background-image {
        min-height: 300px !important;
        padding: 1.25rem 1.5rem !important
    }
    .tile.has-background-image .tile-content {
        height: 260px !important
    }
    .tile.has-background-image .tile-content.is-small .divider,
    .tile.has-background-image .tile-content.is-small p {
        display: block !important
    }
    .tile.has-background-image .tile-content .products {
        position: absolute;
        bottom: 0;
        padding: 0;
        left: 0
    }
    .flat-card.is-list-item {
        padding: 20px !important
    }
    .flat-card.is-list-item .product-info {
        padding: 20px !important
    }
    .is-product-grid .product-info {
        text-align: center
    }
    .cart-card li {
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-direction: column;
        flex-direction: column
    }
    .cart-card li .product-info,
    .cart-card li .product-price,
    .cart-card li .product-quantity,
    .cart-card li .action {
        text-align: center !important;
        padding: 5px !important
    }
    .cart-card li .product-price span {
        margin-left: 0 !important
    }
    .cart-card li .action {
        margin: 10px auto
    }
    .cart-card li .action .action-link {
        margin: 0 2px !important
    }
    .order-list-card {
        padding: 20px !important
    }
    .checkout-title .brand-filigrane {
        left: -15px !important
    }
    .action-bar.is-mobile {
        width: 100% !important;
        margin-left: 0 !important
    }
    .customer-wrapper,
    .verification-wrapper {
        padding: 0 !important
    }
    .shipping-wrapper {
        padding: 20px 10px !important
    }
    .payment-wrapper {
        padding: 20px 0 !important
    }
    #payment-methods {
        padding: 20px 0 !important
    }
    .jp-card {
        left: -18px !important
    }
    .thanks-card p {
        padding: 10px 0 !important
    }
    .auth-title .brand-filigrane {
        top: -10px !important;
        left: -16px !important;
        height: 58px !important
    }
    .is-auth-form .column.is-mobile-padded {
        padding: 40px 20px !important
    }
}

a {
    color: var(--app-default-color)
}

@media (max-width: 420px) {
.is-product-grid .column {
    padding: 4px !important;
    width: 40%;
    flex-basis: unset;
}
}

</style>
    `;