import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { DatasourceTableActionsStyles } from "./datalist-element-styles/datasource-table-actions-css.js";
import "../../../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../../../../../node_modules/@polymer/paper-menu-button/paper-menu-button.js";
import "../../../../../../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../../../../../../node_modules/@polymer/paper-item/paper-item.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export class DataSourceTableActions extends LitElement {
  static get styles() {
    return [DatasourceTableActionsStyles, css`
        :host {
          display: block;
        }
      `];
  }

  render() {
    return html`
       
        ${this.item.links.length ? html`
        <paper-menu-button>
        <paper-icon-button icon="icons:more-vert" slot="dropdown-trigger"></paper-icon-button>
        <paper-listbox slot="dropdown-content">


        ${this.item.links.map(link => html`
        <paper-item @click="${this._action}" 
                        .dataAction=${link} 
                        .col=${link}>
            <paper-icon-button icon=${link.icon}>
            </paper-icon-button>
            ${link.title} 
            </paper-item>

        `)}
        </paper-listbox>
      </paper-menu-button>
        
        ` : html``}
        
        `;
  }

  static get is() {
    return 'datasource-table-actions';
  }

  constructor() {
    super();
    this.cols = [];
  } // Declare properties for the element's public API


  static get properties() {
    return {
      cols: {
        type: Array,
        value: []
      },
      pl: Object,
      item: Object
    };
  } // _computeActions(cols) {
  //
  //     let actions = [];
  //     cols.filter(function (col) {
  //         return col['type'] == 'href'
  //     }).map(function (col) {
  //         var links = [];
  //
  //         for (var l in col['links']) {
  //             var link = col['links'][l];
  //             link['name'] = l;
  //             actions.push(link);
  //         }
  //
  //         // console.log(col['links']);
  //         return col;
  //     });
  //     return actions;
  //
  // }


  _action(evt) {
    const dataAction = evt.currentTarget.dataAction;

    this.pl._dialog.apply(this.pl, [dataAction.service, dataAction.params]);
  }

}
customElements.define(DataSourceTableActions.is, DataSourceTableActions);