export const utilsMixin = BaseClass => class extends BaseClass {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  static isEmpty(str) {
    return str.length === 0 || !str.trim();
  }

  static toTitleCase(item) {
    if (!item) return '';
    item = item.toString();
    item = item.toLowerCase().split(' ');
    var newItem = [];

    for (var i = 0; i < item.length; i++) {
      newItem[i] = item[i].substr(0, 1).toUpperCase() + item[i].substr(1);
    }

    return newItem.join(' ');
  }

  qs(xxx) {
    const document = this.shadowRoot || window.document;
    return document.querySelector(xxx);
  }

  qsa(xxx) {
    const document = this.shadowRoot || window.document;
    return document.querySelectorAll(xxx);
  }

};