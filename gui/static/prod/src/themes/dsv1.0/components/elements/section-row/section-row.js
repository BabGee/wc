import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { SectionPElementBase } from "../../../../../elements/base/section-pelement.js";
import { SectionRowStyles } from "./section-row-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionRow extends SectionPElementBase {
  static get styles() {
    return [SectionRowStyles, css`
            :host {
              display: block;
            }
          `];
  }

  renderDefault() {
    return html`
        
      
        <header id="showcase" class="grid">
            <div class="content-wrap">
          <!--      <iron-icon style="width:115px !important;height: 115px !important;"
                           icon="[[icon]]"></iron-icon> -->
                <h1>${SectionRow.toTitleCase(pElement.elementJson[4])}</h1>
                <p>${this.e.defaultValue} </p>
                <!--<a href="#section-b" class="btn">Read More</a>-->
            </div>
        </header>
        `;
  }

  static get is() {
    return 'section-row';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
  }

}

customElements.define(SectionRow.is, SectionRow);