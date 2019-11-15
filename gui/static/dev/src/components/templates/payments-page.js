/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { PageViewElement } from './page-view-element.js'; // import '../elements-list.js';

export const PaymentsPageBase = class extends PageViewElement {
  constructor() {
    super();
  } // TODO deprecated, left for reference
  // static get properties() {
  //   return {
  //     title: String,
  //     view: String,
  //     tagline: String,
  //     logo: String,
  //     pages: Array,
  //     tab: Object,
  //     profile: {type: Object, value: ''},
  //
  //   };
  // }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }
  /* TODO deprecated, left for reference
  stateChanged(state) {
    this.title = state.app.payload.name;
    this.tagline = state.app.payload.tagLine;
    this.logo = state.app.payload.logo;
    this.profile = state.app.payload.profile;
  }
  */


  async _activateLoadSectionInterface(...args) {
    self.params = params; // self.loading = true;

    this.dialogServicesQueue.push([service, params]);
    self.view = 'dialog'; //
    //
    // let dialog = this.shadowRoot.querySelector('#dialog');
    // console.log(dialog);
    // console.log(service,params);
    //
    // dialog.onLoad(function () {
    //     // service,params
    //
    //
    // });
    //
  }

};