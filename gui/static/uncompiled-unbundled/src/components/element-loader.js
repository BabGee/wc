import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import { Logger } from "../core/logger.js";
import { PageInput } from "../core/parsers/commands/iic/page-input.js";

class ElementLoader extends LitElement {
  constructor() {
    super();
    this.renderInstance = 0;
  }

  render() {
    // track why it keeps changing all the time
    return html`<div id="content"></div>`;
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }`;
  }

  firstUpdated(changedProps) {}

  createRenderRoot() {
    return this;
  }

  set element(val) {
    let oldVal = this._element;
    this._element = val;

    if (oldVal !== val) {
      Logger.i.debug('this.load', this, this.renderInstance + 1);
      this.load();
    } // this.requestUpdate('prop', oldVal);

  }

  get element() {
    return this._element;
  }

  static get properties() {
    return {
      icon: String,
      _element: PageInput,
      // todo is this definition necessary
      element: {
        type: Object
      },
      el: Object,
      pl: Object,
      params: {
        type: Object,
        value: {}
      }
    };
  }

  loadedElement() {
    if (!this.el) {
      Logger.i.warn('[EARLY ELEMENT ACCESS] ' + this._element.name + ' not loaded');
    }

    return this.el;
  }

  elementPath(el) {
    if (!el) {
      el = this._element;
    }

    let switchName = el.variableType.toLocaleLowerCase(); // if element variable type is 1 worded, warn and append element

    if (switchName.split(' ').length === 1) {
      Logger.i.warn('[SWITCH CONFIGURATION] single worded element naming is not recommended -> ', switchName.toUpperCase());
      switchName += ' element';
    } // replace spaces with dashes


    let eln = switchName.replace(/ /g, '-');
    let elp = `../themes/${window.THEME}/components/elements/${eln}.js`;
    return {
      'path': elp,
      'name': eln,
      'switchName': el.variableType
    };
  }

  load() {
    const self = this;
    let el = this._element;
    self.renderInstance += 1; // New Element Naming Convention for Auto-Picking

    /*
    * source files for elements names loaded from switch should end in  *-element.js
    * the name of the element should be same as the file name
    *
    * e.g
    *   element in name from switch     LIST                SHOPPING CART
    *   element file                    list-element.js   shopping-cart-element.js
    *   element name in element file    list-element        shopping-cart-element
    *
    * */

    let elementProps = this.elementPath();
    let content = self.querySelector('#content'); // Clear Previous Content

    if (content) {
      content.innerHTML = `<style>
            .loading {
                text-align: center;
               }
               .loading-bar {
                 display: inline-block;
                 width: 4px;
                 height: 18px;
                 border-radius: 4px;
                 animation: loading 1s ease-in-out infinite;
               }
               .loading-bar:nth-child(1) {
                 background-color: var(--app-default-color);
                 animation-delay: 0;
               }
               .loading-bar:nth-child(2) {
                 background-color: var(--app-default-color);
                 animation-delay: 0.09s;
               }
               .loading-bar:nth-child(3) {
                 background-color: var(--app-default-color);
                 animation-delay: .18s;
               }
               .loading-bar:nth-child(4) {
                 background-color: var(--app-default-color);
                 animation-delay: .27s;
               }
               
               @keyframes loading {
                 0% {
                   transform: scale(1);
                 }
                 20% {
                   transform: scale(1, 2.2);
                 }
                 40% {
                   transform: scale(1);
                 }
               }
            </style>
            <div class="loading">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
          </div>`;
    } else {
      // no previous content, initial render
      Logger.i.info(`initial element-loader render ${elementProps.name}`);
    }

    self.loadDynamic(elementProps, self.renderInstance, async function (newElement, rI, hl) {
      //console.log(newElement);
      try {
        self.el = newElement;
        newElement.init(el, self);
        Logger.i.debug('this.load done', newElement, rI);

        if (rI < self.renderInstance) {
          Logger.i.info('skipped redundant render: ', rI, self.renderInstance, newElement);
        } else {
          // initial render
          if (!content) {
            // we have to wait for dom existence to query select
            await self.updateComplete;
            content = self.querySelector('#content');
          } // todo [OPTIMIZATION POINT] self.replaceWith(newElement);
          // todo [OPTIMIZATION POINT] find a way to no re-create element if the previous was of the same type
          // todo [CONT] this could be further extended into form wide element re-use


          content.firstChild ? content.firstChild.replaceWith(newElement) : content.appendChild(newElement);
        }
      } catch (e) {
        if (e.message === 'newElement.init is not a function') {
          Logger.i.error("Custom Element Doesn't implement init: " + elementProps.path);
        } else {
          Logger.i.error(e);
        }
      }
    });
  }

  loadDynamic(elementProps, rI, cb) {
    const self = this;
    var elementPath = elementProps.path;
    var elementName = elementProps.name;
    let l = self.autoLoad(elementProps.switchName);

    if (l) {
      //check config first
      self.autoLoadDynamic(l, rI, cb);
    } else {
      //do networking here
      import(elementPath).then(module => {
        //NETWORK
        // Put code in here that you want to run every time when
        // navigating to view1 after my-view1.js is loaded
        // .
        // console.log(module);
        // console.log("Auto-Loaded " + elementPath + " Element: " + elementName);
        // console.log(holder);
        // e.target.import is the import document.
        let newElement = document.createElement(elementName);

        if (newElement.constructor === HTMLElement) {
          throw new DOMException("Custom Element Not Found: " + elementName);
        }

        if (cb) return cb(newElement, rI, self);
      }).catch(error => {
        // todo OPTIMIZATION, test which is faster, network first or auto-load configs check
        Logger.i.info(`
                ${elementName} Couldn't be loaded using the naming convention, 
                    trying to get path for ${elementName} from current auto-load configs
                `);
        Logger.i.error(elementName + 'element wasn\'t found neither has an auto-load configuration!');
        Logger.i.error(error);
        let missingElementConfig = {
          'path': '../elements/missing-element.js',
          'name': 'missing-element'
        };
        const content = this.querySelector('#content');
        self.autoLoadDynamic(missingElementConfig, rI, function (newElement, hl) {
          newElement.msg = elementProps.switchName; //todo self.replaceWith(newElement);

          content.firstChild ? content.firstChild.replaceWith(newElement) : content.appendChild(newElement);
        });
      });
    }
  } //Todo Remove Duplications from top function


  autoLoadDynamic(elementProps, rI, cb) {
    var self = this;
    var elementPath = elementProps.path;
    var elementName = elementProps.name;
    import(elementPath).then(module => {
      //todo console.log("Auto-Loaded " + elementPath + " Element: " + elementName);
      // console.log(e.target.import);
      // e.target.import is the import document.
      let newElement = document.createElement(elementName);

      if (newElement.constructor === HTMLElement) {
        throw new DOMException("Custom Element Not Found: " + elementName);
      }

      if (cb) return cb(newElement, rI, self);
    }).catch(error => {
      Logger.i.error("Auto-Loading " + elementPath + " Error");
      Logger.i.error(error);
    });
  }
  /**
   * Manual Autoload Configs,
   * this should mainly be used for elements without an interface
   * Note : We should never get here
   *
   * @param {string} elementName
   */


  autoLoad(elementName) {
    switch (elementName) {
      case 'HIDDEN':
        return {
          'path': '../elements/hidden-element.js',
          'name': 'hidden-element'
        };

      case 'FINGERPRINT ELEMENT':
        return {
          'path': '../elements/fingerprint-element.js',
          'name': 'fingerprint-element'
        };

      case 'REDIRECT URL':
        return {
          'path': '../elements/redirect-url.js',
          'name': 'redirect-url'
        };

      default:
        return undefined;
    }
  }

}

window.customElements.define('element-loader', ElementLoader);