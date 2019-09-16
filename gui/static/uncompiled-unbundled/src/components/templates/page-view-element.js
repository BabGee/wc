/**
@license
Copyright (c) 2019 InterIntel Technologies. All rights reserved.
*/
import { LitElement } from "../../../node_modules/lit-element/lit-element.js"; // import {IicParser} from '../../core/payload-parser';

import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { connect } from "../../../node_modules/pwa-helpers/connect-mixin.js"; // This element is connected to the Redux store.

import { store } from '../../store.js'; // These are the actions needed by this element.

import { updatePageGroup, updatePage, updateView } from '../../actions/template.js'; // We are lazy loading its reducer.

import template from '../../reducers/template.js';
store.addReducers({
  template
});
import { gatewaySelector, interfaceSelector, currentPageGroupSelector, currentPageSelector } from "../../reducers/template.js";
import { Command } from "../../core/parsers/commands/command.js";
import { GetSection } from "../../core/parsers/commands/get-section.js";
import { Logger } from "../../core/logger.js";
export const VIEW_MODE_MAIN = 'main';
export const VIEW_MODE_DIALOG = 'dialog';
/**
 * Does Page Selection and Loading
 */

export class PageViewElement extends connect(store)(utilsMixin(LitElement)) {
  constructor() {
    super();
    this._snackbarOpened = false;
    this.dialogServicesQueue = [];
    this.dialogsStack = [];
    this.count = 1;
  } // Only render this page if it's actually visible.


  shouldUpdate() {
    return this.active;
  }

  createRenderRoot() {
    return this;
  }

  updateLocationHash() {
    const hashes = window.location.hash.split('/');
    const page = hashes[1] || 0;
    const tab = hashes[2] || 0; // remove frontend route

    let pagePath;
    const paths = window.location.pathname.split('/');

    if (paths.length === 4) {
      pagePath = `/${paths[1]}/`;
    } else {
      pagePath = window.location.pathname;
    }

    history.replaceState(null, null, `${pagePath + window.location.search}#/${page}/${tab}`);
  }
  /**
   * Parse request GET params returned into params for template
   * @return {{}}
   */


  parseParams() {
    const au = document.querySelector('adaptive-ui');
    const p = au.getAttribute('params');
    return p ? JSON.parse(p) : {};
  }
  /**
   * Logout the current session
   * performs logout cleanup like clearing the local storage
   *
   * @param {Event} evt
   */


  logout(evt) {
    // todo move into super
    window.location = '/logout/';
  }
  /**
   * Returns the media formatted logo url or an Initials' Avatar if the logo is missing
   * @param {Object} gateway
   * @return logo url
   */


  _computeLogo(gateway) {
    // rounded=true
    let defaultUrl = 'https://ui-avatars.com/api/?background=FFFFFF&name=' + gateway.name;

    if (gateway.iconImage) {
      defaultUrl = `/media/${gateway.iconImage}`;
    }

    if (gateway.logo) {
      defaultUrl = `/media/${gateway.logo}`;
    }

    return defaultUrl;
  }

  static get properties() {
    return {
      active: {
        type: Boolean
      },
      view: String,
      // main|dialog
      _pageGroup: Number,
      _page: Number,
      _snackbarOpened: Boolean,
      _offline: Boolean,
      interface: Command,
      // GetSection || GetInterface
      gateway: Command,
      // GetGatewayDetails || GetInstitutionDetails
      dialogServicesQueue: Array,
      dialogsStack: Array,
      pages: Array,
      profile: {
        type: Object,
        value: ''
      }
    };
  }

  async _activateLoadSectionInterface(...args) {
    // payload,service,params
    // self.loading = true;
    const self = this;
    let dialog;

    if (self.view === VIEW_MODE_DIALOG) {
      // cache the previous dialog
      dialog = this.qs('#dialog');
      this.dialogsStack.push([dialog.payload, Object.assign({}, dialog.params)]);
    } else {
      // activate dialog view mode
      store.dispatch(updateView(VIEW_MODE_DIALOG));
    }

    this.scrollToTop(); // wait for section-dialog and other nodes to resolve

    await this.updateComplete; // todo display loader

    dialog = this.qs('#dialog');

    if (!dialog) {
      Logger.i.warn('[BAD INTERFACE] children must have section-dialog with #dialog');
      throw new DOMException();
    }

    if (args[0] instanceof GetSection) {
      dialog.payload = args[0];
      dialog.loading = false; // todo pass in params here too
    } else {
      dialog._loadServiceParams(args[0], args[1]);
    } // todo is this required


    if (self.view !== VIEW_MODE_DIALOG) {
      store.dispatch(updateView(VIEW_MODE_DIALOG));
    } // console.log(self.dialogsStack);

  }

  viewMain() {
    store.dispatch(updateView(VIEW_MODE_MAIN));
  }
  /**
   * Dialogs Back navigation, Pop dialogs' stack
   *
   */


  mainNavigation() {
    if (!this.dialogsStack.length) {
      this.viewMain();
      this.updateLocationHash();
    } else {
      const args = this.dialogsStack.pop();
      const dialog = this.qs('#dialog');
      dialog.payload = args[0];
      dialog.params = args[1];
      dialog.loading = false;
    }
  }

  _gridClasses(el) {
    if (!el.sectionSize) {
      Logger.i.switchConfiguration(`Form ${el} is using default grid sizes`);
      return '24|24|24';
    }

    return el.sectionSize;
  } // This is called every time something is updated in the store.


  stateChanged(state) {
    this._pageGroup = state.app.pageGroup;
    this._page = state.app.page;
    this.view = state.template.view;
    this.interface = interfaceSelector(state);
    this.gateway = gatewaySelector(state);
    this.pageGroup = currentPageGroupSelector(state);
    this.page = currentPageSelector(state); // console.log(this.interface, this.page);
    // console.log(this.interface.pageGroups);

    this._snackbarOpened = state.app.snackbarOpened;
    this._snackbarMessage = state.app.snackbarMessage;
    this._offline = state.app.offline;
  } // To scroll to top of window


  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}