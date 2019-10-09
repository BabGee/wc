import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/paper-card/paper-card.js";
import "./datalist-element/loader-element.js";
import { SummaryBoxesBase } from "../../../../elements/base/summary-boxes.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SummaryBoxes extends SummaryBoxesBase {
  renderDefault() {
    return html`

        <style>

        .summary-wrapper{
            width: 100%;
            background: #fff;
            border: 1px solid #ebebed;
            border-radius: 10px;
            padding: 30px;
        }
        .summary-details{
            width: 100%;
        }
        .summary-details h1{
            margin: 10px 0;
            font-size: 20px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.25;
            letter-spacing: normal;
            color: #141821;
        }
        .summary-details p, .summary-details h1{
            margin: 0;
        }
        .summary-details p.currency{
            font-size: 12px;
            font-weight: bold;
        }
        .summary-details p.summary-type{
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #858997;
        }
        </style>
        <div class="columns summary-content">
        
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
            ${this._computeData(groupIndex).map(item => html`
                <div class="column">
                    <div class="summary-wrapper">
                        <div class="graph">
                        <!-- <img src="../../../../../images/web/Screenshot.png" alt="profile image"> -->
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