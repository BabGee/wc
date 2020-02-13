import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { ForceDirectedBase } from '../../../../../elements/base/force-directed.js';
import { ForceDirectedStyles } from "./force-directed-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ForceDirected extends ForceDirectedBase {
  static get styles() {
    return [ForceDirectedStyles, css`
        :host {
          display: block;
        }
      `];
  }

  constructor() {
    super();
  }

  renderDefault() {
    if (this.rows === undefined || this.q === undefined) {
      return html``;
    }

    return html`

<h2>Force Directed Graph</h2>
<div id="main-content"> </div>
   <div class="column">
  <script src="https://d3js.org/d3.v3.min.js"></script>
 <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
 <label class="form-label">${this.e.name}</label>
   <div class="select is-fullwidth">
  <select id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
    ${this._computeItems(this.rows, this.q).map(data => html`<option value="${data[0]}">${this._dataJoined(data)}</option>`)}
  </select>
</div>
  </div>
  </div>`;
  }

}

customElements.define(ForceDirected.is, ForceDirected);