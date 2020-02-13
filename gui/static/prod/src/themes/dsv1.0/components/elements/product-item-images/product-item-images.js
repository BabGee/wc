import { ProductItemImagesBase } from "../../../../../elements/base/product-item-images.js";
import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { ProductItemImagesStyles } from "./product-item-images-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ProductItemImages extends ProductItemImagesBase {
  constructor() {
    super();
  }

  static get styles() {
    return [ProductItemImagesStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
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
        `;
  }

}

customElements.define(ProductItemImages.is, ProductItemImages);