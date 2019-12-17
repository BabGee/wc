/**
 @license
 Copyright (c) 2018 InterIntel. All rights reserved.
 */
import { PageViewElement } from './page-view-element.js'; // import '../elements-list.js';

export const LandingPageBase = class extends PageViewElement {
  constructor() {
    super();
  }

  _tabs(page) {
    if (page === undefined) {
      return;
    }

    return page.tabs;
  }

  static get properties() {
    return {
      toggle: Boolean
    };
  }
  /*
  TODO #268 deprecated, this + import dependencies left for reference
  stateChanged(state) {
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