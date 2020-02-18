import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const ShopProductsSectionBase=class extends utilsMixin(BaseElement){static get is(){return"shop-products-section"}static get properties(){return{icon:String,data_name:String,service:String,name:String,maxlength:Number,pattern:String,required:Boolean,variable:String,items:{type:Array,value:[]}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.loader.then(()=>{})}computeParams(link){return JSON.stringify(link.params)}_iframe(evt){evt.preventDefault();const self=this;self.pl._dialog(evt.currentTarget.dataService,JSON.parse(evt.currentTarget.dataParams))}mergeParams(obj1,obj2){var obj3={};for(var attrname in obj2){obj3[attrname]=obj2[attrname]}for(var attrname in obj1){obj3[attrname]=obj1[attrname]}return obj3}init(pElement,loader){super.init(pElement,loader);const self=this;if(pElement.min&&0<pElement.min){self.required=!0}self.icon=pElement.icon;self.title=ShopProductsSectionBase.toTitleCase(pElement.name);self.params=loader.pl.paramsCopy();self.service=pElement.service;self.variable=pElement.defaultValue;self.kind=pElement.kind;self.loader=this.loadData()}};var shopProductsSection={ShopProductsSectionBase:ShopProductsSectionBase};const ShopProductsSectionStyles=css`


`;var shopProductsSectionCss={ShopProductsSectionStyles:ShopProductsSectionStyles};class ShopProductsSection extends ShopProductsSectionBase{static get styles(){return[ShopProductsSectionStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`

        <div class="title_section">
            <div class="wrapper">
                <h2>${this.name}</h2>
            </div>
        </div>

        <section class="shop-products-section">
            <div class="container u-full-width">

                <template
                        is="dom-repeat"
                        items="${this.items}"
                        as="row">

                    <div class="product_section">
                        <div class="wrapper">
                            <template
                                    is="dom-repeat"
                                    items="${row}"
                                    as="product">

                                <div class="three columns">
                                    <div class="product">
                                        <!--<shop-product-item product="[[product]]"></shop-product-item>-->

                                        <div class="one_fourth">
                                            <div class="text-center product_image">
                                                <img src="/media/${product.image}" />
                                            </div>
                                            <h3><sup>${product.currency_code}.</sup>${product.price}</h3>
                                            <p>${product.name} | ${product.kind}</p>
                                            <div class="v_center_flex">
                                                <div class="fl left">
                                                    <div class="product-ratings">
                                                        <iron-icon icon="icons:icons:star" ></iron-icon>
                                                        <iron-icon icon="icons:icons:star" ></iron-icon>
                                                        <iron-icon icon="icons:icons:star" ></iron-icon>
                                                        <iron-icon icon="icons:star-half" ></iron-icon>
                                                        <iron-icon icon="icons:star-border" ></iron-icon>
                                                    </div>
                                                </div>
                                                <!--<div class="fr right"><img src="/static/polymer2.0/themes/furniture/app/images/8.png"  style="max-width:25px;"/></div>-->
                                                <div>
                                                    <template
                                                            is="dom-repeat"
                                                            items="[[product.links]]"
                                                            as="link">
                                                        <iron-icon icon="[[link.icon]]"
                                                                         style="cursor: pointer"
                                                                         data-service="[[link.service]]"
                                                                         data-params="{{computeParams(link)}}"
                                                                         on-tap="_iframe">

                                                        </iron-icon>

                                                    </template>
                                                </div>

                                                <div class="cb"></div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </template>
                            <div class="cb"></div>
                        </div>
                        </div>

                </template>
            </div>
        </section>
        `}}customElements.define(ShopProductsSection.is,ShopProductsSection);export{shopProductsSection as $shopProductsSection,shopProductsSectionCss as $shopProductsSectionCss,ShopProductsSectionBase,ShopProductsSectionStyles};