import { LitElement } from "../../../node_modules/lit-element/lit-element.js";
export const FeedCardBase = class extends LitElement {
  static get is() {
    return 'feed-card';
  }

  constructor() {
    super();
    this.pos = 0;
    this.sections = []; // this.head = "";
  }

  static get properties() {
    return {
      pos: {
        type: Number,
        reflect: true
      },
      sections: Array,
      head: {
        type: String,
        reflect: true
      }
    };
  }

  _notifyPosChange(newPos) {
    this.dispatchEvent(new CustomEvent('pos-change', {
      bubbles: true,
      composed: true,
      detail: {
        pos: newPos
      }
    }));
  }

  _back(evt) {
    // console.info('back')
    this.pos -= 1;

    this._notifyPosChange(this.pos);
  }

  _forward(evt) {
    this.pos += 1;

    this._notifyPosChange(this.pos);
  }

  _hideB(p, s) {
    return p === 0; // ||  p >= s.length-1
  }

  _hideF(p, s) {
    return p >= s.length - 1;
  }

};