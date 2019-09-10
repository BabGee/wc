import { LitElement } from "../../node_modules/lit-element/lit-element.js";
import { PageInput } from "./parsers/commands/iic/page-input.js";
import { ElementsListBase } from "../components/elements-list.js";
export class BaseElement extends LitElement {
  // Declare properties for the element's public API
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