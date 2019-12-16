import{PosProductsBase}from"../../../../elements/base/pos-products.js";import{html}from"../../../../../node_modules/lit-element/lit-element.js";class PosProducts extends PosProductsBase{constructor(){super()}renderDefault(){return html`
        <style>
        .container{
            width: 90%;
            margin: 0px auto;
        }
        .title_section{
            background: #F0F0F0;
            padding: 20px 0px;
            text-align:center;
        }
        .title_section .wrapper {
            position: relative;
            width: 100%;
            margin: 0px auto;
        }
        .title_section .wrapper h2 {
            color: #545454;
            font-weight: 400;
            font-size: 32px;
            line-height: 25px;
            text-align: left;
            margin: 0px;
            position:relative;
        }
        .title_section .wrapper strong{position: relative;z-index:999;background:#F0F0F0}
        .title_section .wrapper::after {
            background: #C2C2C2;
            height: 4px;
            width:100%;
            position: absolute;
            right: 0px;
            top: 12px;
            content: "";
        }
        .product_section{
            margin-bottom: 40px;
        }
        .product_section .three.columns{
            width: 25%;
            float:left;
            padding: 30px;
            border-right: 2px solid #C2C2C2;
            min-height: 300px;
            box-sizing: border-box;
        }
        .product_section .three.columns:nth-child(4){border-right:none}
        .cb{
            clear:both;
        }
        .product_list_nav{background:#fff;padding: 20px 0;}
        .product_list_nav ul{margin:0;padding:0;list-style-type:none}
        .product_list_nav ul li{display:inline-block;margin-right:10px;vertical-align:middle;color:#666}
        .product_list_nav ul li.view_type span{float:left;width:35px;height:35px;line-height:35px;border:1px solid #ddd;text-align:center;color:#666;font-size:20px;}
        .product_list_nav ul li.view_type span.active{background:#000;color:#fff}
        .product_list_nav ul li.calculaor{font-size:12px;text-transform:uppercase;font-weight: 600;}
        .product_list_nav ul li.calculaor span{width:35px;height:35px;border:1px solid #ddd;vertical-align:middle;display:inline-block}
        .product_list_nav ul li.code span{width:35px;height:35px;line-height:35px;border:1px solid #ddd;display:inline-block;vertical-align: middle;}
        .product_list_nav ul li.code input{width:150px;padding:6px 10px;border:1px solid #333;font-size:14px;color:#666;font-weight:500;border-radius:20px;display:inline-block;}
        .shop-products-section{background:#fff}
        .product_section .two.columns {width:18%;float: left;margin:5px 1%;padding:10px; min-height: 255px;box-shadow:0px 0px 5px #eeb0d5;box-sizing: border-box;}
        @media only screen and (max-width: 1150px){
            .product_section .three.columns{padding: 15px;}

        }
        @media only screen and (max-width: 1000px){
            .product_section{margin-bottom:0px;}
            .product_section .three.columns{width: 50%; margin-bottom: 40px;}
            .product_section .three.columns:nth-child(2){border-right:none}

        }
        @media only screen and (max-width: 850px){
            .title_section .wrapper::after{width: 50%;}
        }
        @media only screen and (max-width: 750px){
            .product_section .three.columns{min-height: 420px;}
            .product_section .two.columns{width:48%}
            .product_list_nav ul li{display:block;margin: 10px 0;}
        }
        @media only screen and (max-width: 580px){
            .product_section .three.columns{width: 100%; float: none; border-right: 0px; margin-bottom: 40px; min-height: inherit; padding-bottom: 40px; border-bottom: 2px solid #C2C2C2;}
            .title_section .wrapper::after{display: none;}
        }
    </style>

    
    <div class="title_section">
        <div class="wrapper">
            <h2><strong>${this.name}</strong></h2>
        </div>
    </div>
    <section class="product_list_nav">
        <div class="container u-full-width">
            <ul>
                <li class="view_type">
                    <span class="active">x</span>
                    <span>y</span>
                    <div class="cb"></div>
                </li>
                <li class="calculaor">
                    <span></span>
                    calculaor
                </li>
                <li class="code">
                    <span></span>
                    <input type="text" placeholder="Enter code">
                </li>
            </ul>
        </div>
     </section>
    <section class="shop-products-section">
        <div class="container u-full-width">

            <template
                    is="dom-repeat"
                    items="[[items]]"
                    as="row">

                <div class="product_section">
                    <div class="wrapper">
                        <template
                                is="dom-repeat"
                                items="[[row]]"
                                as="product">
                            <div class="two columns">
                                <div class="product">
                                    <pos-product-item product="[[product]]">
                                    </pos-product-item>
                                </div>
                            </div>
                        </template>
                        <div class="cb"></div>
                    </div>
                    </div>

            </template>
        </div>
    </section>
        `}}customElements.define(PosProducts.is,PosProducts);