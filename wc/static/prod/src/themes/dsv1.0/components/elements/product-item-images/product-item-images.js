import{utilsMixin,dataSourceMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const ProductItemImagesBase=class extends utilsMixin(dataSourceMixin(BaseElement)){static get is(){return"product-item-images"}static get properties(){return{s:String,main:String,params:{type:Object,value:{}},data_name:String,service:String,default_value:String}}mergeParams(obj1,obj2){var obj3={};for(var attrname in obj2){obj3[attrname]=obj2[attrname]}for(var attrname in obj1){obj3[attrname]=obj1[attrname]}return obj3}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.loader.then(()=>{})}dscDataName(){return this.data_name}init(pElement,loader){super.init(pElement,loader);var self=this;self.s=pElement.elementJson[1];self.icon=pElement.icon;self.title=ProductItemImagesBase.toTitleCase(pElement.name);self.service=pElement.service;self.main=pElement.defaultValue;self.data_name=pElement.defaultValue;self.params=loader.pl.paramsCopy();self.loader=this.loadData()}};var productItemImages={ProductItemImagesBase:ProductItemImagesBase};const ProductItemImagesStyles=css`


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



`;var productItemImagesCss={ProductItemImagesStyles:ProductItemImagesStyles};class ProductItemImages extends ProductItemImagesBase{constructor(){super()}static get styles(){return[ProductItemImagesStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <style>
    @import url("https://netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css");
@import url("bootstrap-override.css");
@import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");</style>
       
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
        `}}customElements.define(ProductItemImages.is,ProductItemImages);export{productItemImages as $productItemImages,productItemImagesCss as $productItemImagesCss,ProductItemImagesBase,ProductItemImagesStyles};