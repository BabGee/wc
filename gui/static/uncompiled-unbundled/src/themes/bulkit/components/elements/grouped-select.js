import { GroupedSelectBase } from "../../../../elements/base/grouped-select.js";
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";

class GroupedSelect extends GroupedSelectBase {
  constructor() {
    super();
  }

  render() {
    return html`
        <div id="scroller" class="scroller" style="height:600px;">
	<iron-selector id="iron_selector"
				   attr-for-selected="name"
				   multi="[[multi]]">
				   
				   
				   ${this.data.map((data0, idx) => html`
				   <div>
				   ${this.groups.map((group, idy) => html`
				   
				   ${this.isEqual(idx, idy) ? html`
				   <div id="${group}"><span>${group}</span></div>
				   ` : html``}
				   
				   `)}
				   
				   ${data0.map((item, idz) => html`
				   <div class="item" name="${item.index}">
				   
					<paper-checkbox checked="${this._checked(this.selection, item)}" style="position:relative;left:0px;top:0px;"></paper-checkbox>
					
					<div class="pad">
						<div class="primary"><span>${item.name}</span></div>
						<div class="secondary"><span>${item.type}</span></div>
						<div class="secondary dim"><span>${item.description}</span></div>
						<div class="count"><span id="count">${item.count}</span></div>
						
						<div class="state"><span id="state">${item.state}</span></div>
						<div class="date_time"><span id="date_time">${item.date_time}</span></div>
					</div>
					<!--<iron-icon icon$="[[iconForItem(item)]]"></iron-icon>-->
				</div>
				
				   
				   `)}
			   </div>
				`)}

		
	</iron-selector>
</div>
		`;
  }

}

customElements.define(GroupedSelect.is, GroupedSelect);