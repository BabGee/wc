import { LitElement, html } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../../../../../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";
import "../../../../../../node_modules/@polymer/paper-item/paper-item.js";
import "../../../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../../../../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class DatasourceTableFooter extends LitElement {
  render() {
    return html`
        <style>
            :host {
              display: block;
            }
            .size{
              margin-right: 15px;
            }
            .btn{
              position: relative;
              cursor: pointer;
              top: 4px;
              left: 20px;
            }
            .right-btn::after, .left-btn::after{
              content: '';
              position: absolute;
              width: 5px;
              height: 5px;
              border-left: 2px solid #3a3a3a;
              border-bottom: 2px solid #3a3a3a;
            }
            .right-btn{
              position: relative;
            }
            .left-btn::after{
              transform: rotate(45deg);
            }
            .right-btn::after{
              left: 15px;
              transform: rotate(-135deg);
            }
            .perpage-dropdown .p-display{
              position: relative;
              cursor: pointer;
              margin: 0 15px 0 0;
            }
            .perpage-dropdown .p-display::after{
              content: '';
              position: absolute;
              right: -15px;
              top: 4px;
              width: 5px;
              height: 5px;
              border-left: 2px solid #3a3a3a;
              border-bottom: 2px solid #3a3a3a;
              transform: rotate(-45deg);
            }
            .perpage-dropdown .p-dropdown{
              width: 100%;
              background: #fff;
              border: 1px solid #e5e5e5;
              padding: 0 8px;
              display: none;
            }
            .perpage-dropdown .p-dropdown li a{
              text-align: right;
              display: inline-block;
              width: 100%;
              color: #4a4a4a;
            }
            .perpage-dropdown .p-dropdown li a:hover{
              background: #e5e5e5;
            }
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="wrapper is-flex" style="margin-top: 20px;">
          <div class="size">
          
            <div class="perpage-dropdown">
              <div class="p-display" @click=${this._dropdownReveal}>
                ${this.availableSize.length ? html`
                <p class="is-capitalized is-size-7">Per Page ${this.availableSize.map(size => html`${size}`)}</p>
                ` : html`<p class="is-capitalized is-size-7">Per Page 0</p>`}
              </div>
              <div class="p-dropdown">
              <ul>
                ${this.availableSize.map(size => html`<li><a href="$1" class="is-size-7">${size}</a></li>`)}
                
                <li><a href="$1" class="is-size-7">2</a></li>
                <li><a href="$1" class="is-size-7">3</a></li>
                <li><a href="$1" class="is-size-7">4</a></li>
                <li><a href="$1" class="is-size-7">5</a></li>
              </ul>
              </div>
            </div>
          </div>
          <div class="range">
            <div class="is-flex">
              <div class="pagination-range">
                <p class="is-size-7">${this._computeCurrentSize(this.page, this.size)} - ${this._computeCurrentMaxSize(this.page, this.size, this.totalElements)} of ${this.totalElements}</p>
              </div>
              <div class="is-flex pagination-buttons">
                <div class="left-btn btn" @click="${this._prevPage}" ?disabled="${!this._prevButtonEnabled(this.page)}"></div>
                <div class="right-btn btn" @click="${this._nextPage}" ?disabled="${!this._nextButtonEnabled(this.page, this.totalPages)}"></div>
              </div>
            </div>
          </div>
        </div>`;
  }

  constructor() {
    super();
    this.availableSize = [];
    this.size = 50;
  }

  static get is() {
    return 'datasource-table-footer';
  }

  static get properties() {
    return {
      footerPosition: String,
      size: {
        type: Number
      },
      page: {
        type: Number
      },
      totalElements: {
        type: Number
      },
      totalPages: {
        type: Number
      },
      availableSize: Array
    };
  }

  _dropdownReveal() {
    const drp = this.shadowRoot.querySelector('.p-dropdown');

    switch (drp.style.display) {
      case 'block':
        drp.style.display = 'none';
        break;

      default:
        drp.style.display = 'block';
        break;
    }
  }

  _computeCurrentSize(page, size) {
    return (page - 1) * size + 1;
  }

  _computeCurrentMaxSize(page, size, totalElements) {
    const maxSize = size * page;
    return maxSize > totalElements ? totalElements : maxSize;
  }

  _nextPage() {
    if (this.page < this.totalPages) {
      this.page = this.page + 1;
    }

    this.dispatchEvent(new CustomEvent('n-page', {
      detail: {
        page: this.page
      }
    }));
  }

  _prevPage() {
    if (this.page - 1 > 0) {
      this.page = this.page - 1;
    }

    this.dispatchEvent(new CustomEvent('p-page', {
      detail: {
        page: this.page
      }
    }));
  }

  _nextButtonEnabled(page, totalPages) {
    return page < totalPages;
  }

  _prevButtonEnabled(page) {
    return page > 1;
  }

  _newSizeIsSelected() {
    const newSize = this.shadowRoot.querySelector('paper-listbox').selected;

    if (newSize) {
      if (this.oldPage !== null && this.oldPage !== undefined) {
        this.page = 1;
      }

      this.size = newSize;
      this.dispatchEvent(new CustomEvent('size-change', {
        detail: {
          size: newSize
        }
      }));
    }
  }

  _computePosition(position) {
    if (position === 'right') {
      return 'end-justified';
    }

    return '';
  }

}
customElements.define(DatasourceTableFooter.is, DatasourceTableFooter);