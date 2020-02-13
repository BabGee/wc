import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SummaryTabBase } from "../../../../../elements/base/summary-tab.js";
import { SummaryTabStyles } from "./summary-tab-css.js";

class SummaryTab extends SummaryTabBase {
  static get styles() {
    return [SummaryTabStyles, css`
            :host {
              display: block;
            }
          `];
  }

  render() {
    return html`
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        

    <section>
    ${!this._rowsOrColumns(this.rows) ? html`
        <div class="columns has-text-weight-bold is-size-6">

            ${this.groups.map((group, groupIndex) => html`

             ${this._computeData(groupIndex).map(item => html`
             
                <div class="column">
                    <p class="summary-info">${item.count}</p>
                    <p class="summary-info">${item.description}</p>
                    <p class="summary-info">${item.kind}</p>
                    <p class="summary-info">${item.type}</p>
                    <p class="summary-p ">${item.name}</p>
                </div>
            
             
             `)}
            
                   
            
            `)}
    
    
    
         </div>
    ` : html`
    
    `}
        
    </section>
        
        `;
  }

  static get is() {
    return 'summary-tab';
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

customElements.define(SummaryTab.is, SummaryTab);