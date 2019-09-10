import { css, html, LitElement } from "../../node_modules/lit-element/lit-element.js";
import { Logger } from "../core/logger.js"; // import {FormRenderBase} from '../../../components/form-render.js';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export const EListBase = class extends LitElement {
  constructor() {
    super();
    this.oe = [];
  }

  static get is() {
    return 'e-list';
  }

  static get properties() {
    return {
      oe: Array
    };
  }

  submitForm() {
    Logger.i.info('submit form');
    return this.fr.submitForm();
  }

  paramsCopy() {
    return this.fr.paramsCopy();
  }

  _dialog(...args) {
    // todo use the spread operator instead of apply
    this.fr._dialog.apply(this.fr, args);
  }

  render() {
    throw new DOMException('extending must override render');
  }

  _gridClasses(el) {
    if (!el.sectionSize) {
      Logger.i.switchConfiguration(`${el.name} : ${el.variableType} is using default grid sizes`);
      return '24|24|24';
    }

    return el.sectionSize;
  }

};