import{LitElement,html}from"../../../../../../node_modules/lit-element/lit-element.js";import"../../../../../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";import"../../../../../../node_modules/@polymer/paper-menu-button/paper-menu-button.js";import"../../../../../../node_modules/@polymer/paper-listbox/paper-listbox.js";import"../../../../../../node_modules/@polymer/paper-item/paper-item.js";export class DataSourceTableActions extends LitElement{render(){return html`
        <style>
            /* CSS rules for your element */
            :host {
                display: block;
                min-width: max-content;
            }
        </style>
        ${this.item.links.length?html`
        <paper-menu-button>
        <paper-icon-button icon="icons:more-vert" slot="dropdown-trigger"></paper-icon-button>
        <paper-listbox slot="dropdown-content">


        ${this.item.links.map(link=>html`
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
        
        `:html``}
        
        `}static get is(){return"datasource-table-actions"}constructor(){super();this.cols=[]}static get properties(){return{cols:{type:Array,value:[]},pl:Object,item:Object}}_action(evt){const dataAction=evt.currentTarget.dataAction;this.pl._dialog.apply(this.pl,[dataAction.service,dataAction.params])}}customElements.define(DataSourceTableActions.is,DataSourceTableActions);