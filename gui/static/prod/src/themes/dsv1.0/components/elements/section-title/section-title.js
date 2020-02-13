import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementBase } from "../../../../../elements/base/section-pelement.js";
import { SectionTitleStyles } from "./section-title-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionTitle extends SectionPElementBase {
  static get styles() {
    return [SectionTitleStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
      
        <div class="c-title-container">
            <h3 class="ii__title is-centered">${this.e.name}</h3>
            <p class="ii__paragraph" style="color: #7b7b7b">${this.e.defaultValue}</p> 
                   
        </div>    
    `;
  }

  static get is() {
    return 'section-title';
  }

}

customElements.define(SectionTitle.is, SectionTitle);