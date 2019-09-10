import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { JumbotronBase } from "../../../../elements/base/jumbotron-base.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Jumbotron1 extends JumbotronBase {
  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
    
    #nav-section{
      background-color: #fff;
      max-width: 1520px; 
      height: 220px;
      padding: 2rem 8.75rem 0px 8.25rem;
      margin-bottom: 6rem;
    }

    #nav-title {
      float: right;
      color: #6c7a89;
      font-weight: bold;
      font-size: 10px;
    }
    #page-title{
      color: #013243;
      font-size: 36px;
      line-height: 48px;
    }
    </style>

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