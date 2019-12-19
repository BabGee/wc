/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import { connect } from "../../node_modules/pwa-helpers/connect-mixin.js";
import { installMediaQueryWatcher } from "../../node_modules/pwa-helpers/media-query.js";
import { installOfflineWatcher } from "../../node_modules/pwa-helpers/network.js";
import { installRouter } from "../../node_modules/pwa-helpers/router.js";
import { updateMetadata } from "../../node_modules/pwa-helpers/metadata.js";
import { Logger } from '../core/logger.js'; // This element is connected to the Redux store.

import { store } from '../store.js'; // These are the actions needed by this element.

import { navigate, updateOffline, getPayload } from '../actions/app.js';
import { COMMAND_GET_SECTION } from "../core/parsers/response.js"; // this is required for pre-loading to work

import "./element-loader.js";
/**
 * Does Template Selection and Loading
 */

class AdaptiveUi extends connect(store)(LitElement) {
  render() {
    if (this._payload) {
      return html`
      <service-page ?active="${this.template === 'service'}"></service-page>
      <landing-page ?active="${this.template === 'landing'}"></landing-page>
      <canvas-page ?active="${this.template === 'canvas'}"></canvas-page>
      <payments-page ?active="${this.template === 'payments'}"></payments-page>
      ${this.template === 'section' ? html`
      <section-page       
        .payload="${this._cleanPayload}"
        .loading="${false}"></section-page>` : html``}
      <view-404  
        ?active="${this.template === 'view-404'}"></view-404>
    `;
    } else {
      return html`loading ...`;
    }
  }

  createRenderRoot() {
    return this;
  }

  get _cleanPayload() {
    if (this._payload) {
      return this._payload.serviceCommands[COMMAND_GET_SECTION];
    }

    return null;
  }

  static get properties() {
    return {
      appTitle: String,
      template: String,
      _page: Number,
      _tab: Number,
      _payload: Object,
      // TODO #266 Only used in section dialog, update to use selector
      payloadjson: String,
      params: String,
      csrftoken: String,
      activeTab: Object,
      activePageGroup: Object
    };
  }

  constructor() {
    super();
    Logger.i.info('ADAPTIVE UI WEB');
    Logger.i.info(`THEME : ${window.THEME}`);
  }

  static get styles() {
    return css`
    :host {
      display: block;
      width: 100vw;
      height: 100vh;
      overflow-x:hidden;
      overflow-y:hidden;
    }`;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    if (window.NO_NETWORKING) {
      this.payloadjson = JSON.stringify(window.PAYLOAD_JSON);
    }

    window.template = this.template; // parse initial interface payload into the state

    store.dispatch(getPayload(this.payloadjson, this.template));
    Logger.i.debug('dispatched getPayload');
    installRouter(location => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installOfflineWatcher(offline => store.dispatch(updateOffline(offline)));
    /* todo #267 complete
      installMediaQueryWatcher(`(min-width: 460px)`, (matches) => store.dispatch(updateLayout(matches)));
    */

    window.csrfToken = this.csrftoken; // todo should be passed through app state
  }
  /**
   * Retrieve current template page
   * @return {Element}
   */


  templatePage() {
    switch (this.template) {
      case 'service':
        return this.querySelector('service-page');

      case 'landing':
        return this.querySelector('landing-page');

      case 'canvas':
        return this.querySelector('canvas-page');

      default:
        console.error('THIS SHOULD NOT HAPPEN');
        break;
    }
  }
  /**
   * Activates Section/Dialog View Mode
   * Expected args is payload, service, params
   * @param {Array} args {array} payload, service, params
   */


  dialogView(...args) {
    this.templatePage()._activateLoadSectionInterface(...args).then(r => {
      console.log(r);
    }).catch(error => {
      console.error(error);
    });
  }

  updated(changedProperties) {
    super.updated(changedProperties); // TODO finish

    /*
    if ('_template' in changeList) {
        const pageTitle = properties.appTitle + ' - ' + changeList._template;
        updateMetadata({
            title: pageTitle,
            description: pageTitle
            // This object also takes an image property, that points to an img src.
        });
    }
    */
  }
  /*
   * // TODO move into utilsMixin
   * iterates URLSearchParams.entries into an object
   * @param entries
   * @returns params
   *
   */


  paramsToObject(entries) {
    const result = {};

    for (const entry of entries) {
      // each 'entry' is a [key, value] tupple
      result[entry[0]] = entry[1];
    }

    return result;
  }

  stateChanged(state) {
    const self = this;
    this._payload = state.app.payload; // todo deprecated, still used in section dialog, update to use selector

    /*
        // TODO #270 Theme Colors Verifier
        // verifies the themes colors if can work i.e do not make elements invisible
        // if can't works updates with default working colors
         let defaultColor = state.app.payload.defaultColor;
        let primaryColor = state.app.payload.primaryColor;
        let secondaryColor = state.app.payload.secondaryColor;
        let accentColor = state.app.payload.accentColor;
         updateStyles({
            '--app-default-color': defaultColor,
            '--app-primary-color': '#2885c0', // #2885c0
            '--app-secondary-color': secondaryColor,
            '--app-accent-color': accentColor
        });
        */
  }

}

window.customElements.define('adaptive-ui', AdaptiveUi);