/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { View404Base } from "../../../../components/templates/view-404.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class View404Page extends View404Base {
  render() {
    return html`
      
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>The page you're looking for doesn't seem to exist. Head back
           <a href="/">home</a> and try again?
        </p>
      </section>
    `;
  }

}

window.customElements.define(View404Page.is, View404Page);