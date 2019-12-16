import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{SharedStyles}from"../../styles/shared-styles.js";import{SHOP_STYLES}from"../../styles/shop-styles.js";import{ProductSearchBase}from"../../../../elements/base/product-search.js";class ProductSearch extends ProductSearchBase{renderDefault(){return html`
        ${SHOP_STYLES}
        ${SharedStyles}
        <style>
        .search-wrapper{
        height:60px;
        background-color:var(--app-default-color);
        }
        </style>
    <div  class="search-wrapper">
                            <!-- Title -->
                             <div class="column" style="padding-top: 15px;padding-left: 20px;padding-right: 20px;">
          <div class="control has-addon has-icon" style="display: flex;">
                                  <input class="input is-medium" type="text" placeholder="Search for products, brands and categories" style="border-bottom-right-radius: 0px;border-top-right-radius: 0px;">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <a class="button is-primary is-fullwidth " style="width: 120px;height: 26px;border-top-left-radius: 0px;border-bottom-left-radius: 0px;border-color: #f5f5f536;">
            <span>SEARCH</span></a>
                                  </div>
                                  
                                  </div>
                            <!-- Controls -->
                             
                            </div>

        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(ProductSearch.is,ProductSearch);