import { LitElement } from "../../node_modules/lit-element/lit-element.js";
import { GetSection } from "../core/parsers/commands/get-section.js";
import { COMMAND_SESSION, COMMAND_WINDOW_EVENT, COMMAND_GET_SECTION, COMMAND_CLEAR_CART } from "../core/parsers/response.js";
import { PageInputGroup } from "../core/parsers/commands/iic/page-input-group.js";
import "./element-loader.js";
import { serviceCallMixin } from "../core/mixins/servicecall-mixin.js";
import { SerializableElement, Validation } from "../core/serializable-element.js";
import { utilsMixin } from "../core/mixins/utils-mixin.js"; // This element is connected to the Redux store.

import { store } from '../store.js';
import { Logger } from "../core/logger.js"; // These are the actions needed by this element.

import { showSnackbar } from '../actions/app.js';
/* global Android:false */

export const ElementsListBase = class extends utilsMixin(serviceCallMixin(LitElement)) {
  constructor() {
    super();
    this.sections = [];
    this.loading = false;
    this.pos = 0;
  }

  _gridClasses(el) {
    if (!el.sectionSize) {
      Logger.i.switchConfiguration(`${el.name} : ${el.variableType} is using default grid sizes`);
      return '24|24|24';
    }

    return el.sectionSize;
  }

  _onEnterKeyPress(event) {
    if (event.which === 13 || event.keyCode === 13) {//todo this.submitForm();
      //todo return false;
    }
  }

  createRenderRoot() {
    return this;
  }

  attributeChangedCallback(name, old, value) {
    super.attributeChangedCallback(name, old, value);
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
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

  static get properties() {
    return {
      show: String,
      title: String,
      loading: {
        type: Boolean
      },
      top: {
        type: Object
      },

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
      feed: {
        type: Object
        /*
        hasChanged:function (newValue) {
            console.log('feed.hasChanged');
            console.log(newValue);
            console.log(this);
             return false;
        }*/

      },
      _feed: {
        // todo is this definition necessary
        type: PageInputGroup
      },
      loaded: {
        type: Number,
        value: -1,
        observer: '_elementLoaded'
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
      sections: Array,
      self: {
        type: ElementsListBase,
        value: function () {
          return this;
        }
      }
    };
  }

  static get is() {
    return 'elements-list';
  }

  __computeActiveFeed() {
    const self = this;

    if (self.sections.length) {
      return self.sections[self.pos];
    } // todo this case

  }

  activeFeedOe(a, pos) {
    const self = this; // console.log('activeFeedOe',pos,a);

    const af = self.__computeActiveFeed();

    return af.oe;
  }

  _computeOE(a) {
    const self = this;

    const af = self.__computeActiveFeed();

    if (af) {
      // todo dirty
      // if(self.top){
      //     self.top = self.top._computeTop();
      //
      // }
      self.activeFeed = af;
      return af.oe; // self.interface(af.oe); // todo no need of parameter
    }

    return [];
  }
  /**
   * @return {Object} A copy of stepParams merged into params
   * called by elements that require parent params for requests
   */


  paramsCopy() {
    return this.mergeParams(this.stepParams, this.params);
  }
  /**
   *
   * @return {Element}
   */


  app() {
    return document.querySelector('adaptive-ui');
  }

  _dialog(...args) {
    // payload, service, params
    var self = this;
    const home = self.app();

    if (!home) {
      console.error('Please add the right entry element for this page like above...');
      return;
    }

    if (home.tagName === 'ADAPTIVE-UI') {
      // Todo adaptive-ui always exists
      // merge in self current params

      /*
            let page, tab;
            let hashes = window.location.hash.split('/');
             page = hashes[1] || 0;
            tab = hashes[2] || 0;
            */
      // clean urls
      // let service, params;
      // Destructure service and params
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      if (args[0] instanceof GetSection) {
        // todo update to match API update
        if (!args[1]) {
          console.warn(`[DEPRECATED API USAGE] 
          Whatever called this should update to include the get_section service and params`);
        } else {// ({service, params}  = args[1]);
        }
      } else {
        args[1] = self.mergeParams(args[1], this.stepParams); // [service,params] = args;
      }
      /*
            let paramsQueryStr = Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
            let paramsEncoded = encodeURIComponent(paramsQueryStr);
            // filter out null items from url
            let validItems = [page,tab,service,paramsEncoded].filter(function (item) {
                return(item === 0) || item;
            });
            */
      // update hash path with service and params
      // history.replaceState(null,null,window.location.pathname+window.location.search+'#/'+validItems.join('/'));


      home.dialogView.apply(home, args);
    } else {
      // include switch params but let the service params take precedence
      // todo deprecated
      home.$.dialog.load(service, self.mergeParams(params, this.params));
    }
  }

  hashPath(str) {
    if (typeof str !== 'string') {
      return {};
    }

    str = str.trim().replace(/^\?/, '');

    if (!str) {
      return {};
    }

    return str.trim().split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      ret[parts[0]] = parts[1] === undefined ? null : decodeURIComponent(parts[1]);
      return ret;
    }, {});
  }

  _elementLoaded() {
    if (this.loaded == 0) {
      this.dispatchEvent(new CustomEvent('elements-loaded', {
        detail: {// TODO future use, maybe pass in the post-list
        }
      }));
    }
  }
  /**
   * Renders the feed oe into form by creating individual doms
   * @param {Array} oElements
   */


  interface(oElements) {
    const self = this; // todo self.setAttribute('style',self.activeFeed.style);
    // var form_generator;

    switch (self.activeFeed.formType()) {
      case 'FORM':
        self.qs('#pc').removeAttribute('hidden-form');
        break;

      case 'HIDDEN FORM':
        self.qs('#pc').setAttribute('hidden-form', '');
        break;

      case 'FRAME FORM':
        console.warn('[DEPRECATED API USAGE] FRAME FORM is no longer supported');
        break;

      default:
        break;
    }
    /**
     * Replace form dom with new elements list
     **/


    self.qs('#form').innerHTML = ''; // TODO: clear top-bar content, should be done once per page

    if (self.top) {
      self.top.then(topBar => topBar.innerHTML = '');
    }

    self.loaded = oElements.length;

    for (let i = 0; i < oElements.length; i++) {
      const el = oElements[i];
      const elLoader = document.createElement('element-loader');
      elLoader.pl = self;
      elLoader.element = el;
      elLoader.setAttribute('id', el.id);
      elLoader.classList.add('column');
      let grid = el.sectionSize;

      if (!grid) {
        console.warn(`[SWITCH CONFIGURATION] ${el.name} : ${el.variableType} is using default grid sizes`);
        grid = '24|24|24';
      }

      const grids = grid.split('|');

      if (grids[0] === '24') {
        elLoader.classList.add('is-12');
      } else {
        elLoader.classList.add('is-' + grids[0]);
      } // TODO : use form bind_position


      if (el.variableType === 'SHOPPING CART BTN') {
        // console.log(self.top);
        elLoader.classList.add('nav-item');
        elLoader.classList.add('drop-pop');
        elLoader.classList.add('is-centered');
        elLoader.classList.add('nav-icon');
        self.top.then(topBar => topBar.appendChild(elLoader));
      } else {
        self.qs('#form').appendChild(elLoader);
      }
    } // the form type GET or POST


    var formType = self.activeFeed.formType;

    if (formType === 'GET') {} // target.$.form.setAttribute('method','get');
    // target.$.form.setAttribute('action',self.activeFeed.inputVarAt(5));
    // TODO create and submit before appending to dom
    // TODO Should we skip DOM creation for auto-submit forms ?


    if (self.activeFeed.autoSubmits) {
      // this.$.spinner_dialog.open();
      console.log('Auto Submit Form Type: ' + self.qs('#form'));

      if (self.submitForm()) {
        console.log('Auto-submit Started');
      }
    }
    /* TODO ELEMENT hasn't been added to loader root yet
        if (window.process['env']['NODE_ENV'] === 'development') {
            console.log('serialize: ', this, this.serialize());
            console.log('params: ', this, this.mergeParams(self.stepParams, self.params));
        }
        */

  }
  /**
   * TODO deprecate
   */


  getElementColumnSize() {
    const columnSizeList = [];

    const feed = this.__computeActiveFeed();

    if (feed.styles !== '' && JSON.parse(feed.styles).type !== null && JSON.parse(feed.styles).type === 'register') {
      columnSizeList.push('is-8');
      columnSizeList.push('is-offset-3');
      return columnSizeList;
    } else if (feed.styles !== '' && JSON.parse(feed.styles).type !== null && JSON.parse(feed.styles).type === 'payments') {
      columnSizeList.push('is-12');
      columnSizeList.push('is-offset-0');
      return columnSizeList;
    } else {
      columnSizeList.push('is-5');
      columnSizeList.push('is-offset-4');
      return columnSizeList;
    }
  }
  /**
   * TODO deprecate
   */


  getElementColumnOffset() {
    const feed = this.__computeActiveFeed();

    if (feed.styles !== '' && JSON.parse(feed.styles).type !== null && JSON.parse(feed.styles).type === 'register') {
      return 'is-offset-3';
    } else {
      return 'is-offset-4';
    }
  }

  mergeParams(obj1, obj2) {
    // todo update to use Object.assign
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

  serialize() {
    // Only elements that have a `name` and are not disabled are submittable.
    var elements = this._findElements();

    var json = {};

    for (var i = 0; i < elements.length; i++) {
      const loader = elements[i];
      const l = loader.loadedElement();

      if (l instanceof SerializableElement) {
        const value = l.getValue(); // If value is an object, iterate the key value pairs

        if (!Array.isArray([value]) && typeof value === 'object') {
          // `value === null` should never happen
          Object.entries(value).forEach(([name, value]) => {
            this._addSerializedElement(json, name, value);
          });
        } else {
          this._addSerializedElement(json, l.getName(), value);
        }
      }
    }

    return json;
  }
  /**
   * Validate all Serializeable Form elements
   *
   * @return {boolean}
   */


  validate() {
    var elements = this._findElements();

    for (var i = 0; i < elements.length; i++) {
      const loader = elements[i];
      const l = loader.loadedElement();

      if (l instanceof SerializableElement) {
        const validation = l.validate();

        if (validation instanceof Validation) {
          if (!validation.isValid) {
            // prefer elements invalid() implementation over general class addition to loader
            try {
              l.invalid(validation);
            } catch (e) {
              console.error(e);
              loader.classList.add('invalid-e-l');
            }

            console.error(loader, l);
            l.scrollIntoView({
              behavior: 'smooth',
              block: 'end'
            });
            return false;
          } else {
            try {
              l.valid(validation);
            } catch (e) {
              console.error(e);
              loader.classList.remove('invalid-e-l');
            }
          }
        } else {
          // todo backward compatibility
          console.warn('[DEPRECATED API USAGE] the element [' + l.e.name + '] is still on legacy code .validate');

          if (!validation) {
            // prefer elements invalid() implementation over general class addition to loader
            try {
              l.invalid();
            } catch (e) {
              console.error(e);
              loader.classList.add('invalid-e-l');
            }

            l.scrollIntoView({
              behavior: 'smooth',
              block: 'end'
            });
            console.error(loader, l);
            return false;
          } else {
            try {
              l.valid();
            } catch (e) {
              console.error(e);
              loader.classList.remove('invalid-e-l');
            }
          }
        }
      }
    }

    return true;
  }

  _addSerializedElement(json, name, value) {
    // If the name doesn't exist, add it. Otherwise, serialize it to
    // an array,
    if (json[name] === undefined) {
      json[name] = value;
    } else {
      if (!Array.isArray(json[name])) {
        json[name] = [json[name]];
      }

      json[name].push(value);
    }
  }
  /**
   * Override if form container doesn't have id form
   */


  getForm() {
    return this.querySelector('#form');
  }

  _findElements() {
    // var nodes = Polymer.dom(parent).querySelectorAll('element-loader');
    var nodes = this.getForm().children;
    var submittable = [];

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i]; // An element is submittable if it is not disabled, and if it has a
      // 'name' attribute.

      var tag = node.nodeName.toLowerCase();

      if (tag === 'element-loader') {
        submittable.push(node);
      }
    }

    return submittable;
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
    var formValid = this.validate();

    if (!formValid) {
      console.warn('invalid FORM');
      self.loading = false;
      return;
    }

    const formData = this.serialize();
    self.stepParams = self.mergeParams(formData, self.stepParams);

    const af = self.__computeActiveFeed();

    const formType = af.formType();

    if (formType === 'FORM' || formType === 'HIDDEN FORM') {
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
      });
    } else if (formType === 'WINDOW EVENT FORM' || af.formMethod === 'GET') {
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
    }
  }

};