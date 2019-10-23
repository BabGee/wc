import { css, html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/paper-spinner/paper-spinner.js";
import '../snack-bar.js';
import '../form-render.js';
import { SectionPageBase } from "../../../../components/templates/section-page.js";
import { Colors, Fonts, Reset } from "../../styles/shared.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionPage extends SectionPageBase {
  render() {
    return html`
     <style>
     
</style>
        
        ${this.payload ? html`
                
        <div class="">
              ${this._computeFeed(this.payload).map(feed => html`
                    <div class="column is-12" >
                      <form-render .feed="${feed}" .params=${this.params}></form-render>
                  </div>
              `)}
          </div>
         
        ` : html`            
            <div style="width: 100px;height: 100px;margin:10px auto;">
                <paper-spinner style="width: 100%;height: 100%;" active></paper-spinner>
            </div>
            

        `}
        <!--TODO this is repeated-->
        <snack-bar 
            id="snack-bar" 
            ?active="${this._snackbarOpened}"  
            context="${this._snackbarContext}">
              <span slot="title">${this._snackbarTitle}</span>
              ${this._snackbarMessage}</snack-bar>

`;
  }

  constructor() {
    super();
  }

  static get styles() {
    return [Reset, Colors, Fonts, css`:host { display: block; }`];
  }

}

customElements.define(SectionPage.is, SectionPage);