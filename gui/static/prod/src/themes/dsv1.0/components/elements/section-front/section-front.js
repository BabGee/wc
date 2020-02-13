import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { BaseElement } from "../../../../../core/base-element.js";
import { SectionPElementDsc } from "../../../../../elements/base/section-pelement-dsc.js";
import { SectionFrontStyles } from "./section-front-css.js";
export class SectionFront extends BaseElement {
  static get styles() {
    return [SectionFrontStyles, css`
            :host {
              display: block;
            }
          `];
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
   
    <div class="ii__section module section-box">
        <div class="module-inner">
            <div class="module-wrap">
                <div class="box">
                    <p style="margin-bottom: 21px;font-size: 20px;"><i>${this.e.name}</i></p>
                    <p class="section-text">${this.e.defaultValue}</p>
                </div>
            </div>
        </div>  
    </div>
        `;
  }

  static get is() {
    return 'section-front';
  }

  static get properties() {
    return {};
  }

}
customElements.define(SectionFront.is, SectionFront);