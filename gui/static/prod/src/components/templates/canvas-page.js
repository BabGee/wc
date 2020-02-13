/**
 @license
 Copyright (c) 2018 InterIntel. All rights reserved.
 */
import { PageViewElement } from './page-view-element.js'; // import '../elements-list.js';

export const CanvasPageBase = class extends PageViewElement {
  constructor() {
    super();
  }

  _tabs(page) {
    if (page === undefined) {
      return;
    }

    return page.tabs;
  }
  /* TODO #268 deprecated, left for reference
  static get properties() {
    return {
      title: String,
      name: String,
      logo: String,
      view: String,
      defaultColor: String,
      pages: Array,
      tab: Object,
      group: Object,
      toggle: Boolean,
      dialogServicesQueue: Array,
      dialogsStack: Array,
    };
  }
    stateChanged(state) {
    this.title = state.app.payload.name;
    this.name = state.app.payload.name;
    this.logo = state.app.payload.logo;
      this.defaultColor = state.app.payload.defaultColor;
    updateStyles({'--app-default-color': this.defaultColor});
  }
    */

  /**
     * Dialogs Back navigation, Pop dialogs' stack
     *
     * @param evt
     * @private
     */


  _viewList(evt) {
    if (!this.dialogsStack.length) {
      this.view = 'list';
      this.updateLocationHash();
    } else {
      const args = this.dialogsStack.pop();
      console.log(args);
      const dialog = this.qs('#dialog');
      dialog.payload = args[0];
      dialog.params = args[1];
      dialog.loading = false;
    }
  }
  /**
     * Returns the top bar of the current page used in rendering top bar elements
     * e.g Shopping Cart button with cart items count
     * @return {Promise<*>}
     * @private
     */


  async _computeTop() {
    // TODO move into super
    await this.updateComplete;
    return this.qs('#top');
  }

};