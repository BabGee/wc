import{ProductItemImagesBase,html}from"../../../../components/adaptive-ui.js";class ProductItemImages extends ProductItemImagesBase{constructor(){super()}renderDefault(){return html`
        <style>

        @import url("https://netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css");
        @import url("bootstrap-override.css");
        @import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");


        .product{
            border: 1px solid #dddddd;
            /*height: 321px;*/
        }

        .product>img{
            max-width: 230px;
        }


        .service1-items {
            padding: 0px 0 0px 0;
            float: left;
            position: relative;
            overflow: hidden;
            max-width: 100%;
            height: 321px;
            width: 130px;
            display: none;
        }

        .service1-item {
            height: 107px;
            width: 120px;
            display: block;
            float: left;
            position: relative;
            padding-right: 20px;
            border-right: 1px solid #DDD;
            border-top: 1px solid #DDD;
            border-bottom: 1px solid #DDD;
        }

        .service1-item > img {
            max-height: 110px;
            max-width: 110px;
            opacity: 0.6;
            transition: all .2s ease-in;
            -o-transition: all .2s ease-in;
            -moz-transition: all .2s ease-in;
            -webkit-transition: all .2s ease-in;
        }

        .service1-item > img:hover {
            cursor: pointer;
            opacity: 1;
        }

        .service-image-left {
            padding-right: 50px;
            height: auto;
            max-width: 100%;
        }
        .col-md-3 {
            width: 100%;
            padding: 25px;
        }



        .service-image-left > center > img,.service-image-right > center > img{
            height: auto;
        }


    </style>
        <div class="row">
        <div class="product col-md-3 service-image-left">

            <center>
                <img id="item-display" src="${main}" alt=""></img>
            </center>
        </div>

        <div class="container service1-items col-sm-2 col-md-2 pull-left">
            <center>
                <template
                        is="dom-repeat"
                        items="${this.currentData}"
                        as="image">

                <a id="item-1" class="service1-item">
                    <img src="/media/${image.image}" alt=""></img>
                </a>
                <!--<a id="item-2" class="service1-item">-->
                    <!--<img src="https://heri.shop/media/crm_productitem_imagepath/Golden_Fry_wFdvQYa.jpg" alt=""></img>-->
                <!--</a>-->
                <!--<a id="item-3" class="service1-item">-->
                    <!--<img src="https://heri.shop/media/crm_productitem_imagepath/Golden_Fry_wFdvQYa.jpg" alt=""></img>-->
                <!--</a>-->
                </template>
            </center>
        </div>
    </div>
        `}}customElements.define(ProductItemImages.is,ProductItemImages);