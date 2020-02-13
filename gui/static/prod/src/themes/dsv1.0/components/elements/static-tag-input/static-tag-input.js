import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js"; // import '@polymer/paper-input/paper-input';
// import '@polymer/paper-listbox/paper-listbox';
// import '@polymer/paper-item/paper-item';
// import '@polymer/iron-icon/iron-icon';

import { StaticTagInputBase } from "../../../../../elements/base/static-tag-input.js";
import { StaticTagInputStyles } from "./static-tag-input-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class StaticTagInput extends StaticTagInputBase {
  static get styles() {
    return [StaticTagInputStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`
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

  invalid(validation) {}

  valid(validation) {
    return true;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
  } // todo override kept because of qs


  _onFocus() {
    if (this.qs('#filter').focused) {
      this.focused = true; // this.requestUpdate()
    }
  } // todo override kept because it's an event handler


  _debug1(evt) {
    const self = this; // this.$.filter.value = '';

    self.focused = false; // self.requestUpdate()
  }

  getValue() {
    if (!this.tags) {
      return '';
    }

    return this.tags.join(',');
  }
  /**
     * ui function
     * @param tagId
     * @param dataFromApi
     * @return {*}
     * @private
     */


  _computeLabel(tagId, dataFromApi) {
    if (tagId === undefined || dataFromApi === undefined) {
      return;
    }

    const tag = dataFromApi.filter(function (item) {
      return item['id'] == tagId;
    })[0];

    if (tag) {
      return tag['name'];
    }
  }

  select(evt) {
    const institutionItem = evt.currentTarget; // console.log(evt.currentTarget.getAttribute('id'));

    const itemId = institutionItem.getAttribute('id'); // console.log(id);

    this.add(institutionItem.dataName);
  } // todo override kept because of qs


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
  } // todo override kept because of qs


  _onInput(e) {
    // if (e.keyCode === 13) {
    //
    //     this.add(e.target.value.toLowerCase());
    //
    //     e.target.value = '';
    // }else {
    // todo remove enter key dependence
    this.filter(this.$.filter.value); // }
  }

}

window.customElements.define(StaticTagInput.is, StaticTagInput);