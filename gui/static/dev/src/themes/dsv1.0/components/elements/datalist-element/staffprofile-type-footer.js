import { LitElement, html } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../../../../../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";
import "../../../../../../node_modules/@polymer/paper-item/paper-item.js";
import "../../../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../../../../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class StaffProfileTypeFooter extends LitElement {
  render() {
    return html`
        <style>
            :host {
                display: block;
            }

            .foot  {
                font-size: 12px;
                font-weight: normal;
                height: 55px;
                border-top: 1px solid;
                border-color: rgba(0, 0, 0, var(--dark-divider-opacity));
                padding: 0 14px 0 0;
                color: rgba(0, 0, 0, var(--dark-secondary-opacity));
            }

            .foot .left  {
                padding: 0 0 0 14px;
            }

            .foot paper-icon-button {
                width: 24px;
                height: 24px;
                padding: 0;
                margin-left: 24px;
            }

            .foot .status {
                margin: 0 8px 0 32px;
            }

            .foot .size {
                width: 64px;
                text-align: right;
            }

            .size paper-dropdown-menu {
                --paper-input-container-underline: {
                    display: none;
                };
                --paper-input-container-input: {
                    text-align: right;
                    font-size: 12px;
                    font-weight: 500;
                    color: var(--app-default-color, rgba(0, 0, 0, .54));
                };
                --paper-dropdown-menu-icon: {
                    color: var(--app-default-color, rgba(0, 0, 0, .54));
                };
            }
        </style>
        <div class$="layout horizontal center foot [[_computePosition(footerPosition)]]">
            <div class$="[[footerPosition]]">
                <div class="layout horizontal end-justified center">
                    <div class="layout horizontal center" style="display: inline-block;">
                        <div style="text-align: right;">
                            Per Page
                        </div>
                        <div class="size">
                          ${this.availableSize.length ? html`
                                <paper-dropdown-menu no-label-float vertical-align="bottom">
                                    <paper-listbox attr-for-selected="size"
                                                   @iron-select="${this._newSizeIsSelected}"
                                                   selected="${this.size}"
                                                   slot="dropdown-content">
                                        ${this.availableSize.map(size => html`<paper-item size="${size}">${size}</paper-item>`)}
                                    </paper-listbox>
                                </paper-dropdown-menu>
                          ` : html`
                                <span>50</span>
                          `}                            
                        </div>
                    </div>

                    <div class="status" style="display: inline-block;">
                        ${this._computeCurrentSize(this.page, this.size)} - ${this._computeCurrentMaxSize(this.page, this.size, this.totalElements)} of ${this.totalElements}
                    </div>
                    
                    <paper-icon-button icon="chevron-left" 
                                       ?disabled="${!this._prevButtonEnabled(this.page)}" 
                                       @click="${this._prevPage}"></paper-icon-button>
                                       
                    <paper-icon-button icon="chevron-right" 
                                       ?disabled="${!this._nextButtonEnabled(this.page, this.totalPages)}" 
                                       @click="${this._nextPage}"></paper-icon-button>
                
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
    return 'staffprofile-type-footer';
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
customElements.define(StaffProfileTypeFooter.is, StaffProfileTypeFooter);