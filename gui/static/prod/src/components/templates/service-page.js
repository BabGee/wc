/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { PageViewElement } from './page-view-element.js';
export const ServicePageBase = class extends PageViewElement {
  constructor() {
    super();
  }
  /*
  static get properties() {
    return {
      title: String,
      view: String, // main|dialog
      tagline: String,
      logo: String,
      iconImage: String,
      pages: Array,
      tab: Object,
      profile: {type: Object, value: ''},
      page: Number,
      };
  }
  */

  /*
  stateChanged(state) {
    this.title = state.app.payload.name;
    this.tagline = state.app.payload.tagLine;
    this.logo = state.app.payload.logo;
    this.iconImage = state.app.payload.iconImage;
    this.profile = state.app.payload.profile;
  }
  */

  /**
     * Returns the top bar of the current page used in rendering top bar elements
     * e.g Shopping Cart button with cart items count
     * @return {Promise<*>}
     * @private
     */


  async _computeTop() {
    await this.updateComplete;
    return this.qs('#top');
  }

  static get is() {
    return 'service-page';
  }

};