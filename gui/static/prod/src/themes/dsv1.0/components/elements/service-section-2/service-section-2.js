import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementDsc } from "../../../../../elements/base/section-pelement-dsc.js";
import { ServiceSection2Styles } from "./service-section-2-css.js";

class ServiceSection2 extends SectionPElementDsc {
  static get styles() {
    return [ServiceSection2Styles, css`
            :host {
              display: block;
            }
          `];
  }

  static get is() {
    return 'service-section-2';
  }

  render() {
    return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
       
        <section class="section service-section">
            <div class="row container">
                <div class="columns">
                ${this.rows.map((slide, index) => html`
                <div class="column">
                    <h1 class="is-size-5 has-text-weight-bold service-title">${slide[1]}</h1>
                    <p class="service-content">${slide[2]}</p>
                 </div>
                
                `)}
                    
                </div>
            </div>
        </section>
        `;
  }

}

customElements.define(ServiceSection2.is, ServiceSection2);