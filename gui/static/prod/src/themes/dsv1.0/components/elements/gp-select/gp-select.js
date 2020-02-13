import { GpSelectBase } from "../../../../../elements/base/gp-select.js";
import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "../../../../bulkit/icons/my-icons.js";
import { GpSelectStyles } from "./gp-select-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class GpSelect extends GpSelectBase {
  static get styles() {
    return [GpSelectStyles, css`
        :host {
          display: block;
        }
      `];
  }

  constructor() {
    super();
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
      },
      columnSize: {
        type: Array
      }
    };
  }

  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
      <style>
      
      </style>
        <div class="account-select">
          <div class="account-header" @click='${() => this.dropdown()}'>
              <div class="account-item is-flex">
                  <div class="profile-pic center">
                  <iron-icon icon=${this.e.icon || 'icons:input'}></iron-icon>
                  </div>
                  <div class="accout-details center">
                      <p class="is-capitalized">${this.e.name}</p>
                  </div>
              </div>
          </div>
          <div class="account-body">
              <ul>
              ${this._computeItems(this.rows, this.q).map(data => html`
              <li id="list-${data[0]}" class="" selected="${this.e.kind === data[0]}"  @click='${() => this.dropdown(this._dataJoined(data), data[0])}'>
                <div class="account-item is-flex">
                      <div class="profile-pic center">
                      <iron-icon icon=${this.e.icon || 'icons:input'}></iron-icon>
                      </div>
                      <div class="accout-details center">
                          <p class="is-capitalized">${this._dataJoined(data)}</p>
                      </div>
                  </div>
              </li>
              `)}
              </ul>
          </div>
      </div>
        `;
  }

  dropdown(link, id) {
    if (link == null || link == undefined) {
      this.shadowRoot.querySelector('.account-body').classList.toggle('is-block');
    } else {
      const headTitle = this.shadowRoot.querySelector('.account-header').querySelector('p');
      const allLists = this.shadowRoot.querySelector('.account-body').querySelectorAll('li');
      headTitle.innerHTML = `${link}`;
      allLists.forEach(list => list.className = '');
      this.shadowRoot.querySelector("#list-" + id).className = "list-active";
      this.shadowRoot.querySelector('.account-body').classList.toggle('is-block');
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

}

customElements.define(GpSelect.is, GpSelect);