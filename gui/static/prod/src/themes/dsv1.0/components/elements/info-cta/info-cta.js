import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementDsc } from "../../../../../elements/base/section-pelement-dsc.js";
import { InfoCtaStyles } from "./info-cta-css.js";

class InfoCta extends SectionPElementDsc {
  static get styles() {
    return [InfoCtaStyles, css`
            :host {
              display: block;
            }
          `];
  }

  static get is() {
    return 'info-cta';
  }

  render() {
    return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
     

        <div class="container mipay-info-cta">
            <div class="columns" style="width: 100%;">
                <div class="column is-three-quaters">
                    <div class="heading">
                        <h1 class="title">${this.e.name}</h1>
                    </div>
                    <p>${this.e.defaultValue}</p>
                </div>
                <div class="column is-flex">
                    <div class="info-btn">
                        <a href="${this.e.details.path}" target="_blank" class="button btn" style="background: var(--app-secondary-color)!important">${this.e.details.button_title}</a>
                    </div>
                </div>
            </div>
        </div>
        `;
  }

}

customElements.define(InfoCta.is, InfoCta);