import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import { Logger } from "../core/logger.js";
import { PageInput } from "../core/parsers/commands/iic/page-input.js";

class ElementLoader extends LitElement {
  constructor() {
    super();
    this.renderInstance = 0;
    this.loading = true;
    /**
     * Used Element Pre-loadinng - Dynamically import an element but do not init
     */

    this.headless = false;
  }

  render() {
    if (this.loading) {
      return html`
<style>
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
     animation-delay: 0s;
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
      return html`<div id="content"></div>`;
    }
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }`;
  }

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
      },
      loading: true
    };
  }
  /**
   * Used to access the active loaded element instance
   *
   * @return {*}
   */


  loadedElement() {
    if (!this.el) {
      Logger.i.alert('[EARLY ELEMENT ACCESS] ' + this._element.name + ' not loaded');
    }

    return this.el;
  }

  elementPath(el) {
    if (!el) el = this._element;
    let switchName = el.variableType.toLocaleLowerCase(); // if element variable type is 1 worded, warn and append element

    if (switchName.split(' ').length === 1) {
      Logger.i.switchConfiguration(`Single worded element naming is not recommended -> ${switchName.toUpperCase()}`); // backward compatibility for single element names

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
    let el = this._element; // render count
    // this is incremented on each _element update
    // it is used to cancel out outdated callbacks

    this.renderInstance += 1;
    /*
    *  Element Naming Convention for Auto-Picking
    * source files for elements names loaded from switch should end in  *-element.js
    * the name of the element should be same as the file name
    *
    * e.g
    *   element in name from switch     LIST                SHOPPING CART
    *   element file                    list-element.js   shopping-cart-element.js
    *   element name in element file    list-element        shopping-cart-element
    *
    * */

    let elementProps = this.elementPath(); // Display loading indicator

    if (!this.headless) this.loading = true;
    this.loadDynamic(elementProps, this.renderInstance, (newElement, rI, hl) => {
      // check if callback is outdated,
      // only the highest renderInstance is valid
      if (rI < this.renderInstance) {
        Logger.i.info('skipped redundant render: ', rI, this.renderInstance, newElement);
      } else {
        try {
          this.el = newElement;
          newElement.init(el, this);
          Logger.i.debug('this.load done', newElement, rI); // TODO ignored promise

          this.replaceWith(newElement);
        } catch (e) {
          if (e.message === 'newElement.init is not a function') {
            Logger.i.error(`Custom Element Doesn't implement init:${elementProps.path}`);
          } else {
            Logger.i.error(e);
          }
        }
      }
    });
  }
  /**
   * Dynamically imports a module from elementPath,
   * creates a new node of elementName then passes it to a callback function cb
   *
   * @param elementPath {string} Module Path relative to this file
   * @param elementName {string} Custom Element registration name
   * @param renderInstance {number}
   * @param cb {function} Callback Function
   */


  importAndInit(elementPath, elementName, renderInstance, cb) {
    const self = this;
    import(elementPath).then(module => {
      Logger.i.debug(`Auto-Loaded ${elementName} from ${elementPath}.`); // e.target.import is the import document.

      if (!this.headless) {
        let newElement = document.createElement(elementName);

        if (newElement.constructor === HTMLElement) {
          throw new DOMException('Custom Element Not Found: ' + elementName);
        }

        if (cb) return cb(newElement, renderInstance, self);
      }
    }).catch(error => {
      Logger.i.info(`${elementName} Couldn't be loaded`);
      Logger.i.error(error);
      const missingElementName = 'missing-element'; // avoid recursive loop, return if it's missing-element

      if (elementName === missingElementName) {
        return;
      }

      const missingElementPath = '../elements/missing-element.js';
      self.importAndInit(missingElementPath, missingElementName, renderInstance, (newElement, hl) => {
        if (!this.headless) {
          newElement.msg = elementName; // TODO ignored promise

          this.replaceWith(newElement);
        }
      });
    });
  }

  async replaceWith(newElement) {
    // Clear Previous Content and remove loading indicator
    this.loading = false; // we have to wait for dom existence to query select

    await this.updateComplete;
    const content = this.querySelector('#content'); // todo [OPTIMIZATION POINT] this.replaceWith(newElement);
    // todo [OPTIMIZATION POINT] find a way to no re-create element if the previous was of the same type
    // todo [CONT] this could be further extended into form wide element re-use

    if (content.firstChild) {
      content.firstChild.replaceWith(newElement);
    } else {
      content.appendChild(newElement);
    }
  }
  /**
   * Checks element module existence in auto-load configs
   * then triggers the loading from the right location
   *
   * @param elementProps
   * @param rI
   * @param cb
   */


  loadDynamic(elementProps, rI, cb) {
    let l = ElementLoader.autoLoad(elementProps.switchName);

    if (l) {
      // Load from config
      this.importAndInit(l.path, l.name, rI, cb);
    } else {
      // Load from naming convention
      this.importAndInit(elementProps.path, elementProps.name, rI, cb);
    }
  }
  /**
   * Manual Autoload Configs,
   * this should mainly be used for elements without an interface
   * Note : We should never get here
   *
   * @param {string} elementName
   */


  static autoLoad(elementName) {
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