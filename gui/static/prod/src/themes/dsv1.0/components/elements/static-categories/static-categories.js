import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { StaticCategoriesStyles } from "./static-categories-css.js";
import { StaticCategoriesBase } from "../../../../../elements/base/static-categories.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class StaticCategories extends StaticCategoriesBase {
  static get styles() {
    return [StaticCategoriesStyles, css`
            :host {
              display: block;
            }
          `];
  }

  renderDefault() {
    return html`					      

        
        <!-- Features section -->
        <section>
            <div class="card">

                <div>
                    <h2 class="title section-title has-text-centered dark-text">
                        Shop Categories
                    </h2>
                </div>

                <div>
                    <div class="wrapper is-vcentered has-text-centered">
                              ${this.currentData.map((item, index) => html` 
						 
                        <!-- Icon box -->
                        <div class="column is-3">
                            <div class="square-icon-box rounded secondary is-drop" >
                                <div class="icon-box-wrapper">
                                    <div class="icon-box">
                                        <i><iron-icon icon="icons:shopping-cart"></iron-icon></i>
                                       
                                    </div>
                                </div>
                                <div class="box-title">
                                
                                    <div class="button btn-align has-icon-right is-white is-drop">  ${item.name} 
    <div class="dropContain">
        <div class="dropOut">
        
            <ul>
            ${item.value.map(sub => html`
                <li><iron-icon icon="icons:shopping-cart"></iron-icon><a  .dataLink="${sub.href[0]}"  @click="${this._followLink}"><div class="text-content">${sub.name}</div><div class="hover">${sub.name}</div></a></li>
                 `)}
            </ul>
        </div>
    </div>
</div>
                                </div>
                            </div>
         
                        </div>
                            `)}
                    </div>
                </div>

            </div>
        </section> 
        <!-- /Features section -->
        `;
  }

  constructor() {
    super();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

}

customElements.define(StaticCategories.is, StaticCategories);