import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementBase } from "../../../../../elements/base/section-pelement.js";
import { SectionHeroStyles } from "./section-hero-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionHero extends SectionPElementBase {
  static get styles() {
    return [SectionHeroStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
   
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>

    <a name="home"></a>
    <div class="intro-header">
      <div class="bg-overlay">
        <div class="container">
  

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>This is header text</h1>
                        <h3>Where Awesomeness Is Brought To Life.</h3>
                        <!-- <hr class="intro-divider"> -->
                        <!-- <div class="$1"></div> -->
                        <div class="button-cta">
                            <a href="#" class="button is-rounded button-borderd is-info">Get started</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- /.container -->
      </div>
    </div>
        `;
  }

  static get is() {
    return 'section-hero';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(SectionHero.is, SectionHero);