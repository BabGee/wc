import { ElementsListBase } from "../../../components/elements-list.js";
import { html } from "../../../../node_modules/lit-element/lit-element.js";
import "./feed-card.js";
import "../../../../node_modules/@polymer/paper-progress/paper-progress.js";
import { register } from "../register.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ElementsList extends ElementsListBase {
  constructor() {
    super();
  }

  render() {
    return html` 
 
            <style> 
                element-loader{
                    padding-top: 2px;
                    padding-bottom: 10px;
                    margin:0px;
                    display: block;
                }
                .invalid-e-l{
                    border: 1px solid red;
                }
                
                .column 
                {
                    display:block;
                    flex-basis:0;
                    flex-grow:1;
                    flex-shrink:1
                }
                .column.is-1,.column.is-1-tablet{
                    flex:none;
                    width:8.33333%
                }
                .column.is-offset-1,.column.is-offset-1-tablet{
                    margin-left:8.33333%
                }
                .column.is-2,.column.is-2-tablet{
                    flex:none;
                    width:16.66667%
                }
                .column.is-offset-2,.column.is-offset-2-tablet{
                    margin-left:16.66667%
                }
                .column.is-3,.column.is-3-tablet{
                    flex:none;
                    width:25%;
                }
                .column.is-offset-3,.column.is-offset-3-tablet{
                    margin-left:25%;
                }
                .column.is-4,.column.is-4-tablet{
                    flex:none;width:33.33333%;
                }
                .column.is-offset-4,.column.is-offset-4-tablet{
                    margin-left:33.33333%;
                }
                .column.is-5,.column.is-5-tablet{
                    flex:none;
                    width:41.66667%;
                }
                .column.is-offset-5,.column.is-offset-5-tablet{
                    margin-left:41.66667%
                }
                .column.is-6,.column.is-6-tablet{
                    flex:none;
                    width:50%;
                }
                .column.is-offset-6,.column.is-offset-6-tablet{
                    margin-left:50%;
                }
                .column.is-7,.column.is-7-tablet{
                    flex:none;
                    width:58.33333%;
                }
                .column.is-offset-7,.column.is-offset-7-tablet{
                    margin-left:58.33333%;
                }
                .column.is-8,.column.is-8-tablet{
                    flex:none;width:66.66667%;
                }
                .column.is-offset-8,.column.is-offset-8-tablet{
                    margin-left:66.66667%;
                }
                .column.is-9,.column.is-9-tablet{
                    flex:none;width:75%;
                }
                .column.is-offset-9,.column.is-offset-9-tablet{
                    margin-left:75%;
                }
                .column.is-10,.column.is-10-tablet{
                    flex:none;
                    width:83.33333%;
                }
                .column.is-offset-10,.column.is-offset-10-tablet{
                    margin-left:83.33333%;
                }
                .column.is-11,.column.is-11-tablet{
                    flex:none;
                    width:91.66667%;
                }
                .column.is-offset-11,.column.is-offset-11-tablet{
                    margin-left:91.66667%;
                }
                .column.is-12,.column.is-12-tablet{
                    flex:none;width:100%;
                }
                .column.is-offset-12,.column.is-offset-12-tablet{
                    margin-left:100%;
                }
                .columns{
                    margin-left:0;
                    margin-right:0;
                    margin-top:0;
                }
                .columns:not(:last-child){
                    margin-bottom:calc(1.5rem - .75rem);
                }
                .columns.is-centered{
                    justify-content:center;
                }
                .columns.is-mobile{
                    display:flex;
                }.columns.is-multiline{
                    flex-wrap:wrap;
                }
                .columns.is-vcentered{
                    align-items:center;
                }
                @media screen and (min-width:769px),print{
                    .columns:not(.is-desktop){
                        display:flex;
                    }
                }
                @media screen and (min-width:1088px){
                    .columns.is-desktop{display:flex;
                    }
                }
                        
                @media screen and (max-width: 768px)  {
      
                    .column, .column.is-1, .column.is-2, 
                    .column.is-3, .column.is-4, .column.is-5, 
                    .column.is-6, .column.is-7, .column.is-8, 
                    .column.is-9, .column.is-10, .column.is-11, 
                    .column.is-12{
                        flex: none;
                        
                    }
      
                }
                
            </style>
                            
            <!--
             TODO use events to upward bind pos updates from feed-card
             TODO use state to upward bind pos updates from feed-card
             
             -->                               
            <feed-card 
                 .pos="${this.pos}"
                 .sections="${this.sections}"
                 head="${ElementsList.toTitleCase(this.title)}"
                 @pos-change="${evt => {
      this.pos = evt.detail.pos;
    }}"
                 @keypress="${this._onEnterKeyPress}"
                 id="pc">
            
                <paper-progress indeterminate
                                class="blue"
                                ?hidden="${!this.loading}"
                                style="width: 100%;margin-bottom: 5px"></paper-progress>
                
                <div  class="column is-tablet-landscape-padded">
                    <div id="form" class="columns is-product-grid is-multiline" style="margin-bottom: 20px;">
                    
                    ${this.activeFeedOe(this.feed, this.pos).map((el, elIndex) => html`
                            
                        <element-loader 
                            id="${el.id}"
                            style="padding:0"
                            class="column ${this._gridClasses(el)}"
                            .element="${el}"
                            .pl="${this}"></element-loader>
                           
                    `)}
                    </div>            
                </div>
                
           </feed-card>            
            
        `;
  }

  _gridClasses(el) {
    const grid = super._gridClasses(el);

    const grids = grid.split('|');

    try {
      return `is-${Math.floor(Number(grids[0] / 2))}`;
    } catch (e) {
      return 'is-12';
    }
  }

}

register(ElementsList);