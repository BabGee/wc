import { css, html } from "../../../../node_modules/lit-element/lit-element.js";
import { EListBase } from "../../../components/e-list.js";
import { register } from "../register.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class EList extends EListBase {
  static get is() {
    return 'e-list';
  }

  static get properties() {
    return {
      oe: Array
    };
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
    element-loader{

    }
    </style>
    <div class="columns is-multiline">
    
    ${this.oe.map(el => html`
    <element-loader
        class="column is-block ${this._gridClasses(el)}"
        id="${el.id}"
        .element="${el}"
        .pl="${this}"></element-loader>  
    `)}
    </div>
    `;
  }

  elementLoaders() {
    return this.shadowRoot.querySelectorAll('element-loader');
  }

  _gridClasses(el) {
    const grid = super._gridClasses(el);

    const grids = grid.split('|');

    try {
      return `is-${Math.floor(Number(grids[0] / 2))}`;
    } catch (e) {
      return 'is-12';
    }
  }

} // window.customElements.define(EList.is, EList);


register(EList);