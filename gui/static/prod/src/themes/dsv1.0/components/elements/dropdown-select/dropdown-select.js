import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { DropdownSelectBase } from "../../../../../elements/base/dropdown-select.js";
import { RENDER_M_DEFAULT, RENDER_M_SIDE_BY_SIDE } from "../../../../../components/e-list.js";
import { DropDownSelectStyles } from "./dropdown-select-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class DropdownSelect extends DropdownSelectBase {
  static get styles() {
    return [DropDownSelectStyles, css`
        :host {
          display: block;
        }
      `];
  }

  constructor() {
    super();
    this.contentOpen = false;
    this.selected = null;
  }

  renderDefault() {
    if (this.renderMode === RENDER_M_SIDE_BY_SIDE) {
      return html`
        RENDER_M_SIDE_BY_SIDE not supported
      `;
    } else {
      return html`

      <style>        
        #warning-text{
          display:none;
        }
        .lbl{
          position: absolute;
          bottom: 0px;
          left: 11px;
          height: 100%;
          width: 100%;
          pointer-events: none;
        }
        .lbl::after{
          content: '';
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 100%;
          width: 100%;
          border-bottom: #595f6e;
          transform: translateX(-100%);
          transition: transform .3s ease;
        }
        .lbl.active{
          /* position: absolute; */
          width: 100%;
          transform: translateY(-17px);
          color: var(--app-default-color);
          font-size: 70%;
          position: relative;
          left: 0;
        }
      </style>

    <div class="main-container">
      <div class="ss-main">
      
        <div class="ss-single-selected ${this.contentOpen ? 'ss-open-below' : ''}" @click="${this._onMultiSelectContainerClick}">
          <label for="name" class="label-name placeholder lbl"><span class="content-name">select a ${this.title}</span></label>
          <span class="placeholder" style="height: 16px">${this.getSelected(this.selected)}</span>
          <span class="ss-deselect ss-plus" @click="${this._onDeselectClick}">x</span>
          <!--arrow container-->
          <span class="ss-arrow">
                <!--arrow icons-->
               <span class="${this.contentOpen ? 'arrow-up' : 'arrow-down'}"></span>        
          </span>
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
  }

  static get properties() {
    return {
      icon: String,
      title: String,
      q: {
        type: String,
        value: ''
      },
      // slim
      contentOpen: {
        type: Boolean
      },
      options: {
        type: Array
      }
    };
  }

  getValue() {
    return this.selected;
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
    const label = this.shadowRoot.querySelector('.lbl');
    console.log(label);
    label.classList.add('active');
    const o = this.rows.find(function (element) {
      return element[0] == value;
    });

    if (o) {
      return {
        'label': o[1],
        'value': o[0],
        'selected': this.selected == o.value
      };
    }
  } // used fro multi select


  getSelections() {
    const ss = this.selections.map(s => this.getOption(s));
    console.log(ss);
    return ss;
  } // used fro single select


  getSelected() {
    // const title = 'Select a '+this.title;
    if (this.selected) {
      const option = this.getOption(this.selected);
      return option.label;
    }
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
      const option = {
        'value': item[0],
        'label': item[1]
      };
      option['selected'] = this.selected == option.value;
      options.push(option);
    }

    return options;
  }

  _onMultiSelectContainerClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.contentOpen ? this.close() : this.open();
  }

  _onDeselectClick(e) {
    e.stopPropagation();
    const item = e.currentTarget.dataset['value']; // remove animation is set by adding class ss-out
    // TODO e.currentTarget.parentElement.classList.add('ss-out');
    // remove item from selections

    var filteredAry = this.selections.filter(e => e != item);
    console.log(filteredAry);
    this.selections = filteredAry;
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
    const selected = e.currentTarget.dataset['value'];
    console.log(selected);
    this.selected = selected;
    this.close();
  }

  open() {
    if (this.contentOpen) {
      return;
    }

    this.contentOpen = true;
  }

  close() {
    if (!this.contentOpen) {
      return;
    }

    this.contentOpen = false;
  }

  firstUpdated() {
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

}

customElements.define(DropdownSelect.is, DropdownSelect);