import { css, html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/paper-spinner/paper-spinner.js";
import '../snack-bar.js';
import { SectionPageBase } from "../../../../components/templates/section-page.js";
import { Colors, Fonts, Reset } from "../../styles/shared.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionPage extends SectionPageBase {
  render() {
    return html`
     <style>
     
     /* TODO including Reset doesn't, set's the value to inherit */
     elements-list{
      box-sizing: border-box;
     }

</style>
        
        ${this.payload ? html`
                
        <div class="">
              ${this._computeFeed(this.payload).map(feed => html`
                    <div class="" style="">
                        <elements-list
                            id="pl"                                                        
                            title="${feed.title}"
                            .params="${this.params}"
                            .feed="${feed}">
                        </elements-list>
                    </div>
        
              `)}
          </div>
          <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar>

        ` : html`            
            <div style="width: 100px;height: 100px;margin:10px auto;">
                <paper-spinner style="width: 100%;height: 100%;" active></paper-spinner>
            </div>
            <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar>

        `}
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