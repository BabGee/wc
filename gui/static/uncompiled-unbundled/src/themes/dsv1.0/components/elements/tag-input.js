import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/paper-input/paper-input.js";
import "../../../../../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../../../../../node_modules/@polymer/paper-item/paper-item.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { TagInputBase } from "../../../../elements/base/tag-input.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class TagInput extends TagInputBase {
  renderDefault() {
    return html`
        <style>
            :host {
                display: block;
            }
            [hidden] {
                display: none !important;
            }
            
            input {
                text-transform: lowercase;
                height: 36px;
                width: auto !important;
                padding-left: 0.5em;
            }
            
            iron-icon {
                --iron-icon-height: 20px;
                --iron-icon-width: 20px;
                color: var(--disabled-text-color);
            }

            .iron-selected {
                background-color: var(--app-default-color);
            }
            
            paper-input {

                max-width: 40%;
                margin: auto;

                /* Label and underline color when the input is not focused
                --paper-input-container-color: red;

                 Label and underline color when the input is focused
                --paper-input-container-focus-color: blue;

                 Label and underline color when the input is invalid
                --paper-input-container-invalid-color: green;

                 Input foreground color
                --paper-input-container-input-color: black;*/


                --paper-input-container-input-color: black;


                --paper-input-container: {
                    padding: 8px 0 8px 0;
                };
                --paper-input-container-label: {
                    padding: 5px;
                };
                --paper-input-container-label-focus: {
                    color:#D81B60;
                    padding: 0;
                };
                --paper-input-container-label-floating: {
                    padding: 0;
                };
                --paper-input-container-input: {
                    padding: 8px;
                    border: 1px solid var(--divider-color, #b6b6b6);
                    border-radius: 4px;
                    background: #FFFFFF;
                };
                --paper-input-container-underline: {
                    display: none;
                };
                --paper-input-container-underline-focus: {
                    display: none;
                };
                --paper-input-container-underline-disabled: {
                    display: none;
                } ;


            }

            @media screen and (max-width: 1400px) {

                paper-input {

                    min-width: 60%;
                    margin: auto;
                }

            }


            @media screen and (max-width: 1200px) {

                paper-input {

                    min-width: 60%;
                    margin: auto;
                }

            }
            @media screen and (max-width: 850px) {

                paper-input {

                    min-width: 80%;
                    margin: auto;
                }

            }
            @media screen and (max-width: 750px) {

                paper-input {

                    min-width: 90%;
                    margin: auto;
                }

            }
            @media screen and (max-width: 580px) {

                paper-input {

                    min-width: 100%;
                    margin: auto;
                }

            }
            paper-input.no-underline {
                --paper-input-container-underline: {
                    display: none;
                };
                --paper-input-container-underline-focus: {
                    display: none;
                };
                --paper-input-container-underline-disabled: {
                    display: none;
                };
            }
            input{
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }

            iron-icon, div[suffix] {
                color: #54667a;
                margin-right: 12px;
            }



        </style>
         <div>
           
                ${this.tags.map(tag => html`<paper-item style="display: inline-block;">${this._computeLabel(tag, this.data)}
                        <iron-icon icon="icons:cancel" .tag="${tag}" @tap="${this._onTagRemoveTapped}"></iron-icon></paper-item>`)}
                </div>
            
            <paper-input label="${this.title}"
                     @focused-changed="${this._onFocus}"
                     placeholder="${this.title} ..."
                     
                     id="filter">
                     <!-- todo value="{{q}}">-->
           
        </paper-input>
        
        <!--<template is="dom-if" if="[[focused]]">-->
        <paper-listbox id="suggestions" 
                       multi 
                       ?hidden="${!this.focused}"
                       attr-for-selected="id"
                       .selectedValues="${this.tags}"
                       @iron-select="${this._debug1}"
                       @iron-deselect="${this._debug1}">
                       ${this.data.map(item => html`<paper-item id="${item.id}" data-name="${item.name}">${item.name}</paper-item>`)}
        </paper-listbox>
        <!--</template>-->
`;
  }

  constructor() {
    super();
  }

  valid(validation) {}

  invalid(validation) {} // todo override kept because of qs


  _onFocus() {
    if (this.qs('#filter').focused) {
      this.focused = true; // this.requestUpdate()
    }
  } // todo override kept because of qs usage


  remove(tag) {
    if (this.tags === null) {
      return;
    }

    var tagIndex = this.tags.indexOf(tag);

    if (tagIndex > -1) {
      this.tags.splice(tagIndex, 1); // this.requestUpdate()

      this.qs('#suggestions').selectedValues = []; // console.log()
    }
  }

  _onTagRemoveTapped(e) {
    e.preventDefault();
    this.remove(e.currentTarget.tag);
  }

}

window.customElements.define(TagInput.is, TagInput);