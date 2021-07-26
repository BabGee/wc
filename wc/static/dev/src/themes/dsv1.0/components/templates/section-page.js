import { css, html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/paper-spinner/paper-spinner.js";
import '../snack-bar.js';
import '../form-render.js';
import { SectionPageBase } from "../../../../components/templates/section-page.js";
import { Colors, Fonts, Reset } from "../../styles/shared.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionPage extends SectionPageBase {
  render() {
    // TODO render 404
    return html`
     <style>
     
</style>
        
        ${this.payload ? html`
                



        <!-- Column Container -->
        <div class="columns is-multiline">
              ${this._computeFeed(this.payload).map(feed => html`
              <!-- a single column -->      
              <div class="column ${this._gridClasses(feed)}" >
                      <form-render .feed="${feed}" .params=${this.params} ></form-render>
                  </div>
              `)}
          </div>
         
        ` : html`            
            <div style="width: 100px;height: 100px;margin:10px auto;" >
                <paper-spinner style="width: 100%;height: 100%;" active ></paper-spinner>
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

  _gridClasses(feed) {
    const grid = super._gridClasses(feed);

    const grids = grid.split('|');

    try {
      return `is-${Math.floor(Number(grids[0] / 2))}`;
    } catch (e) {
      return 'is-12';
    }
  }

  static get styles() {
    return [Reset, Colors, Fonts, css`:host { display: block; }`];
  }

}

customElements.define(SectionPage.is, SectionPage);