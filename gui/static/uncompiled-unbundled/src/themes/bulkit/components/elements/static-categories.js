import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { LANDING_STYLES } from "../../styles/landing-style.js";
import { BULMA_STYLES } from "../../styles/bulma-styles.js";
import { DASHBOARD_STYLES } from "../../styles/dashboard-styles.js";
import { StaticCategoriesBase } from "../../../../elements/base/static-categories.js";

class StaticCategories extends StaticCategoriesBase {
  render() {
    return html`   
        ${BULMA_STYLES}
     ${DASHBOARD_STYLES} 
     ${LANDING_STYLES}
					
    <style>
        .wrapper{
            display: flex;
            flex-wrap: wrap;
            }
        .card {
            background-color: white;
            box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
            color: #4a4a4a;
            max-width: 100%;
            position: relative;
            border-radius: 5px;
            padding: 20px;
            margin: 20px;
            }
        .dropContain{
            padding: 40px;
        }
        .text-content{
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .hover{
            display: none;
            color: white;
            background-color:#4D4C4B;
            padding:10px;
        }
        .text-content:hover + .hover{
            display:inline-table;
        }
</style>	 
								      

        
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