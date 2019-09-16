import { GroupedSelectBase } from "../../../../elements/base/grouped-select.js";
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class GroupedSelect extends GroupedSelectBase {
  constructor() {
    super();
  }

  renderDefault() {
    return html`
  <div class="field">
<div class="select is-multiple is-fullwidth">
  <select multiple size="8">
    <option value="Argentina">Argentina</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Brazil">Brazil</option>
    <option value="Chile">Chile</option>
    <option value="Colombia">Colombia</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Guyana">Guyana</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Suriname">Suriname</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Venezuela">Venezuela</option>
  </select>
  </div>
</div>

</div>
        `;
  }

}

customElements.define(GroupedSelect.is, GroupedSelect);