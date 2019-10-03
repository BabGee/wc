import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import { DropdownSelectBase } from "../../../../elements/base/dropdown-select.js";
import "../../../../../node_modules/slim-select/dist/slimselect.min.js";
import { Logger } from "../../../../core/logger.js";

class DropdownSelect extends DropdownSelectBase {
  renderDefault() {
    return html`
 ${SharedStyles}
 <link href="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.23.0/slimselect.min.css" rel="stylesheet"/>
  <style>
 option{
 font-size: 18px;
 }
 .select select {
    background-color: white;
    border-color: #dbdbdb;
    color: #363636;
    border: none;
    border-bottom: 1px solid #A9ABAC;
    cursor: pointer;
    padding-left: 2.5em;
    height: 2.5em;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none;
}
</style>
<div class="column ">
    <div class="field" style="margin-top: 10px; margin-bottom: 0px;">
        <label class="form-label">
            <span><iron-icon icon=${this.e.icon || 'icons:input'}></iron-icon></span>${this.e.name}
        </label>
        <div id="select-section" class="select is-fullwidth">
            <select id="input" @mouseover= '${() => this.mouseOver()}' @click='${() => this.optionCount()}'   style="text-indent: 20px;padding: 0px; border-radius: 4px;">
                <option data-placeholder="true" value="" disabled hidden ?selected="${!this.e.kind}">${this.e.name}</option>
                ${this._computeItems(this.rows, this.q).map(data => html`<option value="${data[0]}" ?selected="${this.e.kind === data[0]}">${this._dataJoined(data)}</option>`)}
            </select>
        </div>
    </div>
</div>`;
  }

  static get properties() {
    return {
      icon: String,
      dataName: {
        type: String,
        value: ''
      },
      service: String,
      title: String,
      maxlength: Number,
      pattern: String,
      q: {
        type: String,
        value: ''
      },
      dropdownValue: Object,
      rows: {
        value: []
      },
      params: {
        type: Object,
        value: ''
      }
    };
  }

  getValue() {
    const select = this.shadowRoot.querySelector('#input');
    this.dropdownValue = select.value;
    return this.dropdownValue;
  }

  valid(validation) {}

  invalid(validation) {}

  mouseOver() {
    const normalSelect = this.shadowRoot.querySelector("#input");
    const options = normalSelect.querySelectorAll('option'); //check first if options is greater than 10 inorder to prevent normal dropdown

    if (options.length > 10) {
      normalSelect.addEventListener('mousedown', function (e) {
        e.preventDefault();
      });
    }
  }

  optionCount() {
    const items = this.shadowRoot.querySelector('#input').querySelectorAll('option');
    items.length > 10 ? this.showFilter() : console.log("items is less than 10");
  }

  showFilter() {
    console.log("showing filter");
    const selectSection = this.shadowRoot.querySelector('#select-section');
    selectSection.classList.remove('select'); //to remove bulma dropdown arrow

    const slim = new SlimSelect({
      select: this.shadowRoot.querySelector('#input'),
      placeholder: this.e.name,
      allowDeselect: true,
      showContent: 'down',
      deselectLabel: '<span style="color: #1c5a6b; text-shadow: -0.5px -1px 8px #00c8ff;">x</span>'
    });
    slim.open(); //get slimSelect search input

    let searchInput = this.shadowRoot.querySelector(".ss-search").querySelector("input");
    searchInput.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  onLoadData(dsc) {
    Logger.i.info('onLoadData Callback');
    Logger.i.info(this.rows.length);
  }

}

customElements.define(DropdownSelect.is, DropdownSelect);