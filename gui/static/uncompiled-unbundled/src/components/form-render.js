/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { html, LitElement } from "../../node_modules/lit-element/lit-element.js";
import { GetSection } from "../core/parsers/commands/get-section.js";
import { COMMAND_SESSION, COMMAND_WINDOW_EVENT, COMMAND_GET_SECTION, COMMAND_CLEAR_CART } from "../core/parsers/response.js";
import { PageInputGroup } from "../core/parsers/commands/iic/page-input-group.js";
import { store } from '../store.js';
import { Logger } from "../core/logger.js";
import { showSnackbar } from '../actions/app.js';
import { utilsMixin } from "../core/mixins/utils-mixin.js";
import { serviceCallMixin } from "../core/mixins/servicecall-mixin.js";
export const FORM_TYPE_FORM = 'FORM';
export const FORM_TYPE_PAYMENTS_FORM = 'PAYMENTS FORM';
export const FORM_TYPE_LANDING_FORM = 'LANDING FORM';
export const FORM_TYPE_HIDDEN_FORM = 'HIDDEN FORM';
export const FORM_TYPE_WINDOW_EVENT = 'WINDOW EVENT FORM';
export const FormRenderBase = class extends utilsMixin(serviceCallMixin(LitElement)) {
  constructor() {
    super();
    this.sections = [];
    this.loading = false;
    this.pos = 0;
  }

  set feed(val) {
    const oldVal = this._feed;

    if (val === oldVal) {
      return;
    }

    this._feed = val;
    this.sections = [this._feed];
    this.pos = 0;
    this.stepParams = this.params ? this.mergeParams({}, this.params) : {}; // this.load();

    this.requestUpdate('feed', oldVal);
  }

  get feed() {
    return this._feed;
  }

  static get is() {
    return 'form-render';
  }

  static get properties() {
    return {
      /**
       * Global params from parent
       */
      params: {
        type: Object
      },

      /**
       * Params created from form submissions in steps,
       * This is used to prevent params leak to other pages
       * and should never mix with params
       */
      stepParams: {
        type: Object
      },
      feed: Object,
      _feed: {
        // todo is this definition necessary
        type: PageInputGroup
      },

      /**
       * The currently rendered PageInputGroup
       */
      activeFeed: {
        type: PageInputGroup
      },

      /**
       * Current Page Section position
       *
       */
      pos: {
        type: Number
      },
      bind: {
        type: Number,
        notify: true
      },

      /**
       *
       * Cache/Storage of all section sections
       */
      sections: Array
    };
  }

  render() {
    throw new DOMException('extending must implement render');
  }
  /**
   * @return {Object} A copy of stepParams merged into params
   * called by elements that require parent params for requests
   */


  paramsCopy() {
    return this.mergeParams(this.stepParams, this.params);
  }

  activeFeedOe(a, pos) {
    const self = this; // console.log('activeFeedOe',pos,a);

    const af = self.__computeActiveFeed();

    return af.oe;
  }

  _onPosChange(evt) {
    Logger.i.debug(evt.detail);
    this.pos = evt.detail['pos'];
  }

  __computeActiveFeed() {
    const self = this;

    if (self.sections.length) {
      return self.sections[self.pos];
    } // todo this case

  }

  mergeParams(obj1, obj2) {
    // todo update to use Object.assign
    // todo obj1 and obj2 should never be null
    var obj3 = {};

    if (obj1) {
      for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
      }
    }

    if (obj2) {
      for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
      }
    }

    return obj3;
  }

  get form() {
    return this.shadowRoot.querySelector('#form');
  }

  _dialog(...args) {
    const adaptiveUi = document.querySelector('adaptive-ui'); // Destructuring assignment of service and params

    if (args[0] instanceof GetSection) {
      if (!args[1]) {
        Logger.i.warn(`[DEPRECATED API USAGE] 
          Whatever called this should update to include the get_section service and params`);
      } else {// ({service, params}  = args[1]);
      }
    } else {
      args[1] = this.mergeParams(args[1], this.stepParams); // [service,params] = args;
    } // todo use the spread operator instead of apply


    adaptiveUi.dialogView.apply(adaptiveUi, args);
  }

  handleResponse(response) {
    const self = this;

    if (response.containsServiceCommand(COMMAND_SESSION)) {
      const session = localStorage.getItem('session'); // Define a session if it doesn't exist. If exists, leave it

      if (!session || typeof session === 'undefined') {
        localStorage.setItem('session', response.serviceCommands[COMMAND_SESSION].response);
      }
    } // New Step Section Response


    if (response.containsServiceCommand(COMMAND_GET_SECTION)) {
      const command = response.serviceCommands[COMMAND_GET_SECTION];

      try {
        const newFeed = command.pageGroups[0].pages[0].pageInputGroups[0]; // todo update

        if (self.sections.length < self.pos + 1) {
          self.sections.push(newFeed);
        } else {
          self.sections[self.pos + 1] = newFeed;
        } // self.push('sections',newFeed);


        self.pos += 1;
      } catch (e) {
        console.error(e);
      }
    } // Clear Cart Action


    if (response.containsServiceCommand(COMMAND_CLEAR_CART)) {
      localStorage.setItem('shop-cart', JSON.stringify([])); // TODO this should be through redux action

      self.dispatchEvent(new CustomEvent('change-cart-count', {
        bubbles: true,
        composed: true,
        detail: {}
      }));
    } // TOAST (Show response summary)


    store.dispatch(showSnackbar(response.summary()));
  }

  submitForm() {
    const self = this;

    if (self.loading) {
      Logger.i.warn('A Submit is already in processing');
      return;
    }

    self.loading = true;
    var formValid = this.form.validate();

    if (!formValid) {
      console.warn('invalid FORM');
      self.loading = false;
      return;
    }

    const formData = this.form.serialize();
    self.stepParams = self.mergeParams(formData, self.stepParams);

    const af = self.__computeActiveFeed();

    const formType = af.formType();

    if (formType === FORM_TYPE_WINDOW_EVENT || af.formMethod === 'GET') {
      window.addEventListener('message', function (ev) {
        if (ev.data.message === 'deliverResult') {
          ev.source.close();
          self.loading = false;
          self.handleResponse(ev.data.payload);
        }
      });
      let endpoint = af.inputVarAt(5) + '?'; // TODO fix implicit declaration

      const paramsString = Object.keys(formData).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(self.stepParams[k]);
      }).join('&');
      endpoint = endpoint + paramsString;
      const w = 600;
      const h = 600;
      const left = window.screen.width / 2 - (w / 2 + 10);
      const top = window.screen.height / 2 - (h / 2 + 50);
      const child = window.open(endpoint, '_blank', `toolbar=no, 
        location=no, 
        directories=no, 
        status=no, 
        menubar=no, 
        scrollbars=yes, 
        resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`);
      const interval = setInterval(function () {
        child.postMessage({
          message: 'requestResult'
        }, 'https://gomipay.com');

        if (child.closed) {
          clearInterval(interval);
        }

        console.log('Interval Check');
      }, 500);
    } else {
      // FORM_TYPE_FORM
      // FORM_TYPE_HIDDEN_FORM
      // FORM_TYPE_PAYMENTS_FORM
      this.callServiceParams(af.service, self.mergeParams(self.params, self.stepParams)).then(function (response) {
        self.loading = false;

        if (response.containsServiceCommand(COMMAND_WINDOW_EVENT)) {
          // this will be made available by the android web-view implementation
          if (window.Android) {
            Android.onWindowEvent(response.stringify());
          } else {
            const interval = setInterval(function () {
              window.addEventListener('message', function (ev) {
                if (ev.data.message === 'requestResult') {
                  const origin = ev.origin || ev.originalEvent.origin;
                  ev.source.postMessage({
                    message: 'deliverResult',
                    success: true,
                    payload: response
                  }, origin);
                  clearInterval(interval);
                }
              });
            }, 500);
          }
        } // Handle Command Response Actions


        self.handleResponse(response);
      }).catch(function (error) {
        console.log(error);
        self.loading = false;
      });
    }
  }

};