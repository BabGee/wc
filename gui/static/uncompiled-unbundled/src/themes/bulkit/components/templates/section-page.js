import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/social-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/communication-icons.js";
import "../../../../../node_modules/@polymer/paper-spinner/paper-spinner.js"; // todo this can be dynamically imported as a dynamic-import from the base class
// import '../elements-list';

import '../form-render.js';
import '../snack-bar.js';
import { SectionPageBase } from "../../../../components/templates/section-page.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionPage extends SectionPageBase {
  render() {
    return html`
     <style>
     .flex-card {
    position: relative;
    background-color: #fff;
    border: 1px solid #fcfcfc;
    border-radius: 14px;
    display: inline-block;
    
    overflow: hidden;
    width: 100%;
    margin-bottom: 20px;
    transition: all 0.5s;
}

</style>
        
        ${this.payload ? html`
                
        <div id="dashboard-wrapper" class="columns is-multiline" style="background: -webkit-linear-gradient(45deg, #F4F6FE, #ecf0f1); background: linear-gradient(45deg, #F4F6FE, #ecf0f1);">
            ${this._computeFeed(this.payload).map(feed => html`
            
            <div class="column ${this._gridClasses(feed)}"> 
            <div class="flex-card light-bordered"> 
                  <div class="card-body is-responsive" style="padding: 0px;">
                      <form-render 
                          id="pl"    
                          .feed="${feed}" 
                          .params=${this.params}></form-render>
                  </div>
            </div>                                    
            </div> 
            `)}
        </div>

        
        ` : html`
            
            <div style="width: 100px;height: 100px;margin:10px auto;">
                <paper-spinner style="width: 100%;height: 100%;" active></paper-spinner>
            </div>
        `}
        
     <snack-bar id="snack-bar" ?active="${this._snackbarOpened}">${this._snackbarMessage}</snack-bar>   
`;
  }

  constructor() {
    super();
  }

  _gridClasses(feed) {
    const grid = super._gridClasses(feed);

    const grids = grid.split('|');

    try {
      return `is-${Math.floor(Number(grids[0] / 2))}`;
    } catch (e) {
      return 'is-12';
    }
  }

}

customElements.define(SectionPage.is, SectionPage);