import { LitElement } from "../../node_modules/lit-element/lit-element.js";
import { PageInput } from "./parsers/commands/iic/page-input.js";
import { ElementsListBase } from "../components/elements-list.js";
import { Logger } from "./logger.js";
export class BaseElement extends LitElement {
  constructor() {
    super();
    this.renderFunction = `render${window.template.charAt(0).toUpperCase() + window.template.substring(1)}`;
  }

  static get properties() {
    return {
      /**
       * The Element
       */
      e: PageInput,

      /**
       * The Container ElementList Instance
       */
      pl: ElementsListBase
    };
  }

  render() {
    // TODO how-to-prevent-function-overriding-in-es6
    // https://stackoverflow.com/questions/45558939/how-to-prevent-function-overriding-in-es6
    try {
      return this[this.renderFunction]();
    } catch (e) {
      // TODO log to Sentry if render function exists
      return this.renderDefault();
    }
  }

  renderDefault() {
    Logger.i.incompleteDev(this, 'Must at least implement renderDefault');
    throw new Error('Must implement renderDefault');
  }
  /**
     *
     * @param {PageInput} pElement
     * @param {ElementLoader} loader
     */


  init(pElement, loader) {
    this.e = pElement;
    this.pl = loader.pl; // todo bind to post-list
  }

}