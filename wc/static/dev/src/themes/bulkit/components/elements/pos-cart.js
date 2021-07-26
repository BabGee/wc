import { PosCartBase } from "../../../../elements/base/pos-cart.js";
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { posCartTheme } from "../../styles/pos-cart-styles.js";

class PosCart extends PosCartBase {
  constructor() {
    super();
  }

  renderDefault() {
    return html`
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

        
        `;
  }

}

customElements.define(PosCart.is, PosCart);