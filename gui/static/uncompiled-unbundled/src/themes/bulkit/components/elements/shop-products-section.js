import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { shopProductsSectionTheme } from "../../styles/shared-styles.js";
import { shopProductItemTheme } from "../../styles/shop-product-item-styles.js";
import { ShopProductsSectionBase } from "../../../../elements/base/shop-products-section.js";

class ShopProductsSection extends ShopProductsSectionBase {
  render() {
    return html`
        ${shopProductsSectionTheme}
        ${shopProductItemTheme}

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
        `;
  }

}

customElements.define(ShopProductsSection.is, ShopProductsSection);