import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementBase } from "../../../../../elements/base/section-pelement.js";
import { Section10Styles } from "./section-10-css.js";
import { SectionStyles } from "../../../styles/section.js";

class SectionPElement10 extends SectionPElementBase {
  static get styles() {
    return [Section10Styles, SectionStyles, css`
            :host {
              display: block;
            }
          `];
  }

  renderDefault() {
    return html`
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <footer>
        <div class="footer-top">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="subscribe">
                            <div class="title" style="color: #fff">Dolorem habemus</div>
                            <p class="sub">Mandamus et, eius ponderum at nec cum lorem.</p>
                            <div class="inputs is-flex">
                                <div class="field">
                                    <input type="text" class="input is-rounded" name="" id="" placeholder="Your Email">
                                </div>
                                <div class="btn field">
                                    <button class="button landing-btn">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="subscribe">
                            <div class="title" style="color: #fff">Definitiones</div>
                            <p class="sub">Ut est fastidii iracundia at quo scripserit tantas.</p>
                            <div class="icons is-flex">
                                <div class="icon">

                                </div>
                                <div class="icon">
                                
                                </div>
                                <div class="icon">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;
  }

  static get is() {
    return 'section-10';
  }

}

customElements.define(SectionPElement10.is, SectionPElement10);