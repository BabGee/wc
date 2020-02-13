import { html, LitElement, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { BaseElement } from "../../../../../core/base-element.js";
import { FooterElementStyles } from "./footer-element-css.js";

class FooterElement extends BaseElement {
  constructor() {
    super();
  }

  static get styles() {
    return [FooterElementStyles, css`
            :host {
              display: block;
            }
          `];
  }

  render() {
    return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
       
        <footer class="landing-footer ii__footer">
        <div class="ii__container wa__container">
            <div class="ii-footer-flexcontainer columns">
                <div class="column">
                    <div class="ii__footer-branding">
                        <a href="#"><img src="${this.e.details.logo_path}" alt="footer branding"/></a>
                    </div>
                    <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e.details.location}</p>
                    <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e.details.address}</p>
                </div>
                <div class="column">
                    <div class="ii-footerfexrow">

                    ${this.e.details.links.map(slide => html`
                        <div class="ii-footer-col">
                                <h3 class="ii__footer-col-title is-capitalized">${slide.title}</h3>
                                ${slide.links.map(link => html`
                                <a href="mailto:${link}" class="ii__footer-col-link">${link}</a>
                                `)}
                        </div>
                    `)}
                       
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="columns">
                    <div class="column">
                        <p class="ii__paragraph is-size-7 footer-rights">${this.e.name} Copyright &copy; ${this._getCurrentYear()}. All rights reserved</p>
                    </div>
                    <div class="column">
                        <div class="ii-footerfexrow">
                            <div class="ii-footer-col-sm">
                                <a href="#" class="footer-icon">
                                    <fa-icon class="fal fa-envelope" style="fill: #2980B9;height: 2em;width: 2em;"></fa-icon>
                                </a>
                            </div>
                            <div class="ii-footer-col-sm"></div>
                            <div class="ii-footer-col-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        `;
  }

  static get is() {
    return 'footer-element';
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

  _getCurrentYear() {
    let year = new Date().getFullYear();
    return year;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

}

customElements.define(FooterElement.is, FooterElement);