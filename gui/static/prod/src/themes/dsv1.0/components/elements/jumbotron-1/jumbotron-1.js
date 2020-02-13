import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { JumbotronBase } from "../../../../../elements/base/jumbotron-base.js";
import { JumboTronStyles } from "./jumbotron-1-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Jumbotron1 extends JumbotronBase {
  static get styles() {
    return [JumboTronStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
   

    <section id="nav-section" class="hero">
      <div class="hero-body">
        <div id="nav-title">NAVIGATION</div>
        <div id="page-title">System-wide elements, Navigation<br /> &amp; Step-Menus</div>
      </div>
    </section>
     `;
  }

  static get is() {
    return 'jumbotron-1';
  }

}

customElements.define(Jumbotron1.is, Jumbotron1);