import{html,PosCartBase}from"../../../../components/adaptive-ui.js";const posCartTheme=html`
<style>
            /*
            * TODO These styles are copied from list select, they are deprecated but not tested
            **/
            :host {
                width: 100%;
            }

            #scroller {
                overflow-x: hidden;
                overflow-y: scroll;
                max-height: 500px;
                /*overflow: auto;
                min-height: 450px;
                max-height: 4500px;
                height: var(--list-select-height);*/
            }

            .item {
                box-sizing: border-box;
                padding: 2px;
                overflow: hidden;
                color: black;
                border-bottom: 1px solid gray;
            }

            .item > img {
                height: 50px;
                width: 50px;
            }

            .selected {
                color: white;
                background: gray;
            }

            .body {
                font-size: 10px;
            }

            .description {
            }

            .divider {
                color: gray;
            }

            paper-toolbar {
                background: var(--app-default-color);
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
                display: inherit;
            }

            .title {
                padding: 4px 2px 2px 2px;
            }

            .title.grid {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.3);
                color: white;
            }

            .pad {
                padding: 2px;
            }

            .pad-left {
                padding-left: 2px;
            }

            .menu {
                color: black;
            }

            .primary {
                font-size: 14px;
            }

            .secondary {
                font-size: 12px;
            }

            .message-item {
                padding: 4px;
                background: white;
                font-family: sans-serif;
            }

            .message-item.selected {
                background-color: #eee;
            }

            .dim {
                color: gray;
            }

            iron-list {
                background-color: var(--paper-grey-200, #eee);
                padding-bottom: 16px;
                height: 500px;
            }

            .item {
                @apply(--layout-horizontal);

                /*margin: 16px 16px 0 16px;*/
                padding: 20px;

                /*border-radius: 8px;*/
                background-color: white;
                border: 1px solid #ddd;
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
                @apply(--layout-flex);
                @apply(--layout-vertical);
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

            iron-selector > * {
                padding: 8px;
            }

            .iron-selected {
                background-color: #ddd;
            }

            .count, .date_time, state {
                text-align: right;
                font-size: 12px;
                font-weight: 500;
            }

            .hidden-input {
                display: none;
            }

            input[is="iron-input"] {
                font: inherit;
                outline: none;
                box-shadow: none;
                border: none;
                width: auto;
                text-align: center;
            }

            /* From here not post-list styles */
            .product-image {
                float: left;
                width: 20%;
            }

            .product-details {
                float: left;
                width: 17%;
            }

            .product-price {
                float: left;
                width: 15%;text-align: center;
            }

            .product-quantity {
                float: left;
                width: 10%;
            }

            .product-removal {
                float: left;
                width: 9%;
            }

            .product-line-price {
                float: left;
                width: 32%;
                text-align: center;
            }

            /* This is used as the traditional .clearfix class */
            .group:before, .shopping-cart:before, .column-labels:before, .product:before, .totals-item:before,
            .group:after,
            .shopping-cart:after,
            .column-labels:after,
            .product:after,
            .totals-item:after {
                content: '';
                display: table;
            }

            .group:after, .shopping-cart:after, .column-labels:after, .product:after, .totals-item:after {
                clear: both;
            }

            .group, .shopping-cart, .column-labels, .product, .totals-item {
                zoom: 1;
            }

            /* Body/Header stuff */
            body {
                padding: 0px 30px 30px 20px;
                font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-weight: 100;
            }

            h1 {
                font-weight: 100;
            }

            label {
                color: #aaa;
                font-size: 14px;
                font-family: "Montserrat";
                color: rgb(51, 51, 51);
                text-transform: uppercase;
                line-height: 1.2;
            }

            /* .shopping-cart {
                margin-top: -45px;
            } */

            /* Column headers */
            .column-labels{background: var(--app-default-color);padding: 1px;}
            .column-labels label {width: 10%;color:#fff;font-family: 'Open Sans', sans-serif;text-align: center;}

            /* .column-labels .product-image, .column-labels .product-details, .column-labels .product-removal {
                text-indent: -9999px;
            } */

            /* Product entries */
            .product {
                padding: 10px 0px;background: #fff;
                border-bottom: 1px solid #eee;
            }
            .pro_cat{width:19%;float:left;}

            .product .product-image {
                text-align: center;
                height: 50px;
            }

            .product .product-image img {
                width: 100%;height: 100%;
                /* border: 1px solid #e4e4e4; */
            }

            .product .product-details .product-title {
                margin-left: 10px;font-weight: bold;
                font-family: 'Open Sans', sans-serif !important;
                font-size: 12px;
                font-family: "Montserrat";
                color: rgb(51, 51, 51);
                text-transform: uppercase;
                line-height: 1.429;
                text-align: left;
            }
            .cb{clear:both;}
            .pay_details{width: 60%;float:right;margin-bottom: 25px;}
            .pay_details h3{background: #ff0000;padding:10px 10px 10px 26px;color:#fff;margin: 20px 0px 0px;text-transform: uppercase;}
            .pay_details > div{background:#fff;padding: 10px;}
            .pay_details .product-details{width: 50%;}
            .pay_details > div div.last_bor_none:nth-last-child(3) + br{display:none;}
            .pay_details .fl{float:left;width:30%;font-size: 16px;padding-left: 20px;}
            .pay_details .fr{float:right;width:30%;text-align: right;padding-right: 30px;}
            .pay_details .cb{clear:both;}
            .pay_details div span{font-size: 20px;}
            .pay_details > div > div{border-bottom:1px solid #cecece;padding-bottom: 10px;}
            .pay_details > div div.last_bor_none:nth-last-child(3){border:0px;}
            .product .product-details .product-description {
                margin: 5px 0px 5px 10px;font-family: 'Open Sans', sans-serif !important;
                line-height: 1.4em;font-size: 12px
            }

            .product .product-quantity input {
                width: 90px;
            }

            .product .remove-product {
                border: 0;
                padding: 4px 8px;
                background-color: #c66;
                color: #fff;
                font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
                font-size: 12px;
                border-radius: 3px;
            }

            .product .remove-product:hover {
                background-color: #a44;
            }

            /* Totals section */
            .totals .totals-item {
                float: right;
                clear: both;
                width: 100%;
                margin-bottom: 10px;
            }

            .totals .totals-item label {
                float: left;
                clear: both;
                width: 79%;
                text-align: right;
            }

            .totals .totals-item .totals-value {
                float: right;
                width: 21%;
                text-align: right;
            }

            .totals .totals-item-total {
                font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
            }

            .checkout {
                float: right;
                border: 0;
                margin-top: 20px;
                padding: 6px 25px;
                background-color: #6b6;
                color: #fff;
                font-size: 25px;
                border-radius: 3px;
            }

            .checkout:hover {
                background-color: #494;
            }

            /* Make adjustments for tablet */
            @media screen and (max-width: 980px) {
                .column-labels label{font-size: 10px;}
                .product .product-image{height:30px;}
                .product .product-details .product-title, .product .product-details .product-description{margin-left: 0px;font-size: 10px;}
                .product .product-price:before, .product .product-line-price:before, .totals-value:before{font-size: 12px;display: inline-block;margin-top: 4px;}
                .product-line-price{font-size: 12px;}
                .pay_details h3{padding: 10px 10px 10px 10px;font-size: 13px;text-align: center;}
                .pay_details .fl{width:50%;padding-left: 0px}
                .pay_details .fr{width:50%;padding-right: 0px}
            }
            @media screen and (max-width: 650px) {
                .shopping-cart {
                    margin: 0;
                    padding-top: 20px;
                    border-top: 1px solid #eee;
                }

                .column-labels {
                    display: none;
                }

                .product-image {
                    float: right;
                    width: auto;
                }

                .product-image img {
                    margin: 0 0 10px 10px;
                }

                .product-details {
                    float: none;
                    margin-bottom: 10px;
                    width: auto;
                }

                .product-price {
                    clear: both;
                    width: 70px;
                    font-size: 14px;
                    font-family: "Montserrat";
                    color: rgb(106, 106, 106);
                    text-transform: uppercase;
                    line-height: 1.2;
                    text-align: center;
                }

                .product-quantity {
                    width: 100px;
                    font-size: 14px;
                    font-family: "Montserrat";
                    color: rgb(106, 106, 106);
                    text-transform: uppercase;
                    line-height: 1.2;
                    text-align: center;
                }

                .product-quantity input {
                    margin-left: 20px;
                    font-size: 14px;
                    font-family: "Montserrat";
                    color: rgb(106, 106, 106);
                    text-transform: uppercase;
                    line-height: 1.2;
                    text-align: center;
                }

                .product-quantity:before {
                    content: 'x';
                }

                .product-removal {
                    width: auto;
                    margin-top: 0;
                    float: none;
                }

                .product-line-price {
                    float: right;
                    width: 70px;
                    font-size: 14px;
                    font-family: "Montserrat";
                    color: rgb(106, 106, 106);
                    text-transform: uppercase;
                    line-height: 1.2;
                    text-align: center;
                }

                .pd-u-lg-12-24 {
                    width: 100%;
                }
                .pro_cat {
                    width: 100%;
                    float: left;
                }
                .product .product-image {
                    height: 100%;text-align: center;width: 100%;
                }
                .product .product-details .product-title, .product .product-details .product-description{margin-left: 0px;text-align: center;font-size: 16px;}
                .product-line-price{width: 100%;text-align: center;font-size: 20px;}

                .product-image img {
                    margin: 0px 0px 10px;
                }
                .pay_details{width:100%;}
                .product-details{text-align: center}
                .product-price{display:block;width: 100%;}
                .product{margin-bottom: 20px;border:0px;    -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .11);
    -moz-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .11);
    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .11);}
            }

            /* Make more adjustments for phone */
            @media screen and (max-width: 425px) {
                .product .product-quantity input {
                    width: 40px;
                }

                .product-quantity:before {
                    display: none;
                }

                .product-price{display:block;}
            }

            /* Make more adjustments for phone */
            @media screen and (max-width: 350px) {
                .product-removal {
                    float: right;
                }

                .product-line-price {
                    float: right;
                    clear: left;
                    width: auto;
                    margin-top: 0;
                }

                .product .product-line-price:before {
                    content: 'Item Total: Ksh';
                }

                .totals .totals-item label {
                    width: 60%;
                }

                .totals .totals-item .totals-value {
                    width: 40%;
                }
            }
        </style>
`;var posCartStyles={posCartTheme:posCartTheme};class PosCart extends PosCartBase{constructor(){super()}renderDefault(){return html`
        ${posCartTheme}
        <paper-toolbar class="toolbar" id="paper_toolbar">
            <paper-item class="flex">
                <iron-icon icon="[[icon]]" prefix></iron-icon>
                [[title]]
            </paper-item>
            <paper-menu-button class="flex-one">
                <paper-listbox on-iron-select="typeFilter" class="dropdown-content">
                    <template is="dom-repeat" items="[[ repeatObject(groups) ]]" as="group" index-as="idx">
                        <paper-item>[[group.2]]</paper-item>
                    </template>
                </paper-listbox>
                <paper-icon-button icon="icons:filter-list"
                                   title="Filter"
                                   class="dropdown-trigger"
                                   noink>
                </paper-icon-button>

            </paper-menu-button>

        </paper-toolbar>
        <div id="">
            <div class="shopping-cart">

                <div class="column-labels">
                    <!--todo Not displaying -->
                    <!-- <label class="product-image">Image</label> -->
                    <label class="product-details">Product</label>
                    <label class="product-quantity">Quantity</label>
                    <label class="product-price">Price</label>
                    <label class="product-line-price">Total</label>
                    <!-- <label class="product-removal">Remove</label> -->
                </div>

                <template is="dom-repeat" items="[[ currentData ]]" as="product" index-as="idx">
                    <div class="product">
                        <div class="pro_cat">
                            <div class="product-image">
                                <img src="/media/[[product.image]]">
                            </div>
                            <div class="product-details">
                                <div class="product-title">[[product.name]]</div>
                                <p class="product-description">[[product.kind]]</p>
                            </div>
                            <div style="clear:both"></div>
                        </div>
                        <template is="dom-repeat"
                                  items="[[product.inline]]"
                                  index-as="ifp"
                                  as="inlineForm">
                            <inline-elements-list
                                    class="product-details"
                                    service="[[inlineForm.service]]"
                                    params="[[inlineForm.params]]">
                            </inline-elements-list>
                        </template>
                        <div class="product-price">[[product.price]]</div>
                        <div class="product-line-price">[[product.total]]</div>
                    </div>
                </template>
                <div class="pay_details">
                    <h3>Payment Details</h3>
                    <div>
                        <template is="dom-repeat"
                                  items="[[col_sums]]"
                                  index-as="ifs"
                                  class="pay_in_box"
                                  as="sum">

                            <div class="last_bor_none"><span class="fl">[[sum.name]]</span><span class="fr">[[sum.value]]</span><div class="cb"></div></div><br/>
                        </template>
                    </div>
                </div>
                <div class="cb"></div>

            </div>
            <template is="dom-if" if="[[!currentData.length]]">
                <h3 style="text-align: center;">No [[title]] Items</h3>
            </template>
        </div>

        
        `}}customElements.define(PosCart.is,PosCart);export{posCartStyles as $posCartStyles,posCartTheme};