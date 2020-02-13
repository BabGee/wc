import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/paper-card/paper-card.js";
import "../datalist-element/loader-element.js";
import { SummaryBoxesStyles } from "./summary-boxes-css.js";
import { SummaryBoxesBase } from "../../../../../elements/base/summary-boxes.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SummaryBoxes extends SummaryBoxesBase {
  static get styles() {
    return [SummaryBoxesStyles, css`
            :host {
              display: block;
            }
          `];
  }

  renderDefault() {
    return html`

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="summary-content">
        
            ${this.loading ? html`
            <loader-element></loader-element>
            ` : html`
            ${!this._rowsOrColumns(this.rows) ? html`
            
            ${this.groups.map((group, groupIndex) => html`
             <div class="row">
                <div class="col-md-12 group-summary">
                    <h1>${group}</h1>
                </div>
            </div>
            <div class="columns is-multiline">
            ${this._computeData(groupIndex).map(item => html`
                <div class="column">
                    <div class="summary-wrapper">
                        <div class="graph">
                            <svg viewBox="0 0 230 100" class="chart">
                                <polyline
                                    fill="none"
                                    stroke="#23d160"
                                    stroke-width="5"
                                    points="
                                    00,90
                                    60,70
                                    90,90
                                    140,10
                                    160,80
                                    180,60
                                    200,100
                                    "
                                />
                                
                            </svg>

                        </div>
                        <div class="summary-details">
                            <p class="currency is-text-7 has-text-justified has-text-uppercase">KES</p>
                            <h1 class="title has-text-justified">${item.count}</h1>
                            <p class="summary-type has-text-justified has-text-capitalized">${item.description}</p>
                            <p class="summary-type has-text-justified has-text-capitalized">${item.kind}</p>
                            <p class="summary-type has-text-justified has-text-capitalized">${item.type}</p>
                            <p class="summary-type has-text-justified has-text-capitalized">${item.name}</p>
                        </div>
                    </div>
                </div>
            
            `)}
            </div>
             
             `)}
            ` : html`
            
              <div class="row">
                <div class="col-md-12">
                    <h1 style="text-align: center;">${this.title}</h1>
                </div>
              </div>
              
              ${this.rows.map(item => html`
                <div class="column">
                    <div class="summary-wrapper">
                        <div class="graph">
                        <!-- <img src="../../../../../images/web/Screenshot.png" alt="profile image"> -->
                        </div>
                        <div class="summary-details">
                            <p class="currency is-text-7 has-text-justified has-text-uppercase">KES</p>
                            <h1 class="title has-text-justified">${item.count}</h1>
                            <p class="summary-type has-text-justified has-text-capitalized">${item.name}</p>
                        </div>
                    </div>
                </div>
            `)}
              
            `}
            `}
            
        </div>`;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  _computeData(index) {
    return this.data[index];
  }

  _rowsOrColumns(cData) {
    if (cData === undefined) {
      return;
    }

    return cData.length;
  }

  onLoadData(dsc) {
    super.onLoadData(dsc);
  }

}

customElements.define(SummaryBoxes.is, SummaryBoxes);