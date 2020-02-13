import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementBase } from "../../../../../elements/base/section-pelement.js";
import { SectionStyles } from "../../../styles/section.js";
import { Section2Styles } from "./section-2-css.js";

class SectionPElement2 extends SectionPElementBase {
  static get styles() {
    return [SectionStyles, Section2Styles, css`
            :host {
              display: block;
            }
          `];
  }

  renderDefault() {
    return html`
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <section class="section coffee-break">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="section-content">
                            <div class="section-sub-title">
                                <p class="has-text-justified is-uppercase">Sale veritus</p>
                            </div>
                            <div class="heading">
                                <h1 class="title has-text-justified has-text-centered">Fabulas invenire partiendo</h1>
                            </div>
                            <p style="margin-bottom: 50px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto dolore repudiandae odit vel libero, eius ad velit eaque non beatae. Ut qui nostrum blanditiis laboriosam eligendi non dolore sapiente.</p>

                            <div class="main-lander-cta padd">
                                <a class="landing-btn">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <img src="images/coffee-break.png" alt="Coffee break">
                    </div>
                </div>
            </div>
        </section>
        `;
  }

  static get is() {
    return 'section-2';
  }

}

customElements.define(SectionPElement2.is, SectionPElement2);