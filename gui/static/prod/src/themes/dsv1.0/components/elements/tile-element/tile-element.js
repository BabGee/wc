import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { BaseElement } from "../../../../../core/base-element.js";
import { SectionPElementDsc } from "../../../../../elements/base/section-pelement-dsc.js";
import { TileElementStyles } from "./tile-element-css.js";
export class TileElement extends SectionPElementDsc {
  constructor() {
    super();
  }

  static get styles() {
    return [TileElementStyles, css`
        :host {
          display: block;
        }
      `];
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    
    <div class="columns" id="service">
        ${this.rows.map(slide => html` 
            <div class="column">
            <div class="ii__tile">
                <div class="ii__tile-head">
                <img src="/media/${slide[3]}"  alt="services image"/>
                </div>
                <div class="ii__tile-body">
                    <h3 class="ii_title ii__title-small is-size-6 has-text-weight-bold has-text-centered">
                    ${slide[1]}
                    </h3>
                    <p class="ii__paragraph" style="color: #7b7b7b; font-weight: normal; font-size: 14px;">${slide[2]}</p>
                </div>
                </div>
            </div>
        `)} 
    </div>
        `;
  }

  static get is() {
    return 'tile-element';
  }

  static get properties() {
    return {};
  }

}
customElements.define(TileElement.is, TileElement);