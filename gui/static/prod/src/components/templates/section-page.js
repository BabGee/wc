import { LitElement } from "../../../node_modules/lit-element/lit-element.js";
import "../../../node_modules/@polymer/paper-spinner/paper-spinner.js"; // import '../elements-list.js';

import { serviceCallMixin } from "../../core/mixins/servicecall-mixin.js";
import { Logger } from "../../core/logger.js";
export const SectionPageBase = class extends serviceCallMixin(LitElement) {
  static get is() {
    return 'section-page';
  }

  constructor() {
    super();
    this.params = {};
  } // todo not necessary if joined with page-view-element


  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      /**
             * Updating triggers a rendering of the first Page of the first PageGroup
             */
      payload: Object,
      // type IicParser
      title: String,
      params: Object
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // TODO duplicate from PageViewElement.parseParams
    // because this doesn't extend PageViewElement

    const au = document.querySelector('adaptive-ui');
    const p = au.getAttribute('params');
    this.params = p ? JSON.parse(p) : {};
  }

  _loadServiceParams(service, params) {
    const self = this;
    self.params = params;
    this.load(service);
  }

  _computeFeed(getSection) {
    var self = this;
    var pageGroup = getSection.pageGroups[0];
    self.title = pageGroup.title;
    var page = pageGroup.getTab(0);
    return page.pageInputGroups;
  }
  /**
   *
   * @param {GetSection} payload
   * @private
   */


  _renderPayload(payload) {
    var self = this;
    self.payload = payload;
  }

  serviceCallParams() {
    return this.params;
  }

  load(service) {
    // trigger loading view
    this.payload = null;
    this.callService(service).then(response => {
      this._renderPayload(response.serviceCommands['get_section']);
    }).catch(err => console.log(err));
  }

  async _activateLoadSectionInterface(...args) {
    console.warn('THIS SHOULD NEVER HAPPEN');
  }

  _gridClasses(el) {
    if (!el.sectionSize) {
      Logger.i.switchConfiguration(`Form ${el} is using default grid sizes`);
      return '24|24|24';
    }

    return el.sectionSize;
  }

};