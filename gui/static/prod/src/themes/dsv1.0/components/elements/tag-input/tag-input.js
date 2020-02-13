import { css, html } from "../../../../../../node_modules/lit-element/lit-element.js";
import { TagInputBase } from "../../../../../elements/base/tag-input.js"; // import {Logger} from '../../../../core/logger';

import { TagInputStyles } from "./tag-input-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TagInput extends TagInputBase {
  constructor() {
    super();
    this.contentOpen = false;
    this.selected = [];
    this.hasActive = false;
  }

  static get properties() {
    return {
      hasActive: true
    };
  }

  static get styles() {
    return [TagInputStyles, css`
    :host {
      display: block;
    }
    `];
  }

  renderDefault() {
    return html`

    <div class="main-container">
      <div class="ss-main" @click=${this.animLabel}>
      
        <div class="ss-multi-selected ${this.contentOpen ? 'ss-open-below' : ''}" @click="${this._onSingleSelectContainerClick}">
          
          <div class="ss-values">
          ${this.selected.length ? html`
          <label for="name" class="label-name placeholder lbl active"><span class="content-name">Select ${this.title}s</span></label>
              ${this.getSelections(this.selected).map(option => html`
              <div class="ss-value">
                <span class="ss-value-text">${option.label}</span>
                <span class="ss-value-delete" data-value="${option.value}" @click="${this._onDeselectValueClick}">x</span>
              </div>          
              `)}
          ` : html`
            <label for="name" class="label-name placeholder"><span class="content-name">Select ${this.title}s</span></label>
          `}
</div>
          <div class="ss-add">
          <span class="ss-plus ${this.contentOpen ? 'ss-cross' : ''}"></span>
          
      </div>
          
        </div>
        
        <div class="ss-content ${this.contentOpen ? 'ss-open' : ''}">
              <!--container -->
              <div class="ss-search">
                  <!--input-->
                  <input 
                    type="search" 
                    placeholder="Enter Search" 
                    tabindex="0" 
                    aria-label="Enter Search"
                    @click=${this._onSearchInputClick}" 
                    @keydown=${this._onSearchKeyDown}" 
                    @keyup=${this._onSearchKeyUp}" 
                    @focus=${this._onSearchFocus}">
            </div>
        
            <!--list-->
            <div class="ss-list">
            
            ${this.loading ? html`
                 <div class="ss-option ss-disabled" >Searching options ... </div>
            ` : html`            
                ${this.selectOptions(this.rows).length ? html`
                    ${this.selectOptions(this.rows).map(option => html`
                      <div class="ss-option ${option.selected ? 'ss-option-selected' : ''}" 
                            data-value="${option.value}" 
                            @click="${this._onOptionClick}">${option.label}</div>
                      `)}
                ` : html`
                    <div class="ss-option ss-disabled" >No Results</div>
                `}
            `}
            </div>
    </div>
</div>
</div>

<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>

    
    `;
  }

  getValue() {
    return this.selected.join(',');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    this.loader.then(dsc => {}); // TODO #307 Test whether this event listener is automatically detached when this component is detached

    document.addEventListener('click', function (e) {
      // TODO this doesn't work
      if (!self.shadowRoot.contains(e.currentTarget)) {
        self.close();
      } else {
        console.log(e.target);
        console.log(self.contains(e.target));
      }
    });
  }

  static get properties() {
    return {
      icon: String,
      title: String,
      // slim
      contentOpen: {
        type: Boolean
      },
      options: {
        type: Array
      },
      selected: Array
    };
  }

  valid(validation) {
    const warningText = this.shadowRoot.querySelector('#warning-text');
    warningText.style.display = 'none';
  }

  invalid(validation) {
    const warningText = this.shadowRoot.querySelector('#warning-text');
    warningText.style.display = 'block';
  }

  getOption(value) {
    const o = this.rows.find(function (element) {
      return element[0] == value;
    });

    if (o) {
      return {
        'label': o[1],
        'value': o[0]
      };
    }
  } // used for multi select


  getSelections() {
    const ss = this.selected.map(s => this.getOption(s));
    console.log(ss);
    return ss;
  }
  /**
   * adds a property 'selected=true' to options that have been selected
   *
   * @return {Array}
   */


  selectOptions() {
    const options = [];

    for (var i = 0; i < this.rows.length; i++) {
      const item = this.rows[i];
      const option = {}; // first item is the pk
      // second item is the label

      option['value'] = item[0];
      option['label'] = item[1];
      option['selected'] = this.selected.includes(option.value);
      options.push(option);
    }

    return options;
  }

  _onSingleSelectContainerClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.contentOpen ? this.close() : this.open();
  }

  _onDeselectValueClick(e) {
    e.stopPropagation();
    const item = e.currentTarget.dataset['value']; // remove animation is set by adding class ss-out
    // TODO e.currentTarget.parentElement.classList.add('ss-out');
    // remove item from selections

    var filteredAry = this.selected.filter(e => e != item);
    this.selected = filteredAry;
  }

  _onSearchInputClick(evt) {
    evt.stopPropagation();
  }

  _onSearchKeyUp(e) {
    const searchValue = e.target.value;
    this.updateParams('q', searchValue);
  }

  _onSearchFocus(e) {
    // todo slim.js 342
    this.open();
  }

  _onOptionClick(e) {
    e.preventDefault(); // todo this event should not reach up to document

    e.stopPropagation();
    const selected = e.currentTarget.dataset['value']; // the selections are unique
    // we use the spread to combine the new selection with current existing

    this.selected = Array.from(new Set([...this.selected, selected])); // todo cache full selection because search will update rows

    const label = this.shadowRoot.querySelector('.lbl');
    label.classList.add('active');
  }

  open() {
    if (this.contentOpen) {
      return;
    }

    this.contentOpen = true; // if (_this.config.searchFocus) {
    //     _this.slim.search.input.focus();
    // }
    //
  }

  close() {
    if (!this.contentOpen) {
      return;
    }

    this.contentOpen = false;
  }

  onLoadData(dsc) {
    if (this.selected.length < 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

}

window.customElements.define(TagInput.is, TagInput);