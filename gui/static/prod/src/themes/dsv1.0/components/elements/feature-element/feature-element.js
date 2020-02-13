import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { FeatureElementStyles } from "./feature-element-css.js";
import { SectionPElementDsc } from "../../../../../elements/base/section-pelement-dsc.js";
export class FeatureElement extends SectionPElementDsc {
  static get styles() {
    return [FeatureElementStyles, css`
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

    <div class="ii__features">
    ${this.rows.map(slide => html`
    <div class="columns">
        <div class="column">
            <img src="/media/${slide[3]}"  width="250px" height="50px" alt="feature image">
        </div>
        <div class="column">
            <div class="feature-container">
                <h1 class="feature-title has-text-weight-bold">${this._getTitle(slide[1])}</h1>
                <p class=""style="color: #7b7b7b; font-weight: normal; font-size: 14px;">${slide[2]}</p>
                <div class="btn">
                
                  <button class="button feature-button" style=" background-color: var(--app-primary-color); color: #fff" data-name=${this._getLink(slide[1])} @click="${this.openLink}">Get Started</button>

                </div>
                    
            </div>
        </div>
    </div>
    `)}
        
    </div>
        `;
  }

  static get is() {
    return 'feature-element';
  }

  static get properties() {
    return {};
  }

  openLink(event) {
    let link = event.target.getAttribute("data-name");
    window.open(link, "_blank");
  }

  _getTitle(text) {
    let [title, link] = text.split('|');
    return title;
  }

  _getLink(text) {
    let [title, link] = text.split('|');
    return link;
  }

}
customElements.define(FeatureElement.is, FeatureElement);