import { PageInput } from "./page-input.js";
export class PageInputGroup {
  constructor(tab, feedJson, feedIndex) {
    this._id = tab.id + '-' + String(feedIndex);
    this._index = feedIndex;
    this._tab = tab;
    this._title = Object.keys(feedJson)[0];
    this._sectionJson = feedJson[this.title];
    this.initVars();
    this._oe = this.getOrderedElements();
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get index() {
    return this._index;
  }

  initVars() {
    var inputVar = this.getInputVar();
    this._service = inputVar[11];
    this._element = inputVar[1];
    this._icon = inputVar[6]; // console.log(this.getInputVar());
  }

  getContent() {
    return this.sectionJson; // sectionJson.getJSONObject(title);
  }

  get stringedContent() {
    return JSON.stringify(this.getContent());
  }

  get oe() {
    return this._oe;
  }

  get styles() {
    return this.getInputVar()[10];
  }

  get autoSubmits() {
    return this.getInputVar()[9];
  }

  get formMethod() {
    return this.getInputVar()[4];
  }

  getOrderedElements() {
    var keys = this.initKeys();
    var toReturn = new Array();

    for (var feedK in keys) {
      var toPass = new PageInput(this.sectionJson[keys[feedK]]);
      toPass.id = this.id + '-' + feedK;
      toReturn.push(toPass);
    }

    return toReturn;
  }

  formType() {
    return this.getInputVar()[1];
  }

  inputVarAt(index) {
    return this.getInputVar()[index];
  }

  getElements() {
    var keys = this.initKeys();
    var toReturn = new Object();

    for (var feedK in keys) {
      var toPass = this.sectionJson[feedK];
      toReturn[feedK] = toPass;
    }

    return toReturn;
  }

  initKeys() {
    var keys = Object.keys(this.sectionJson);
    var feedKeys = new Array();

    for (var key in keys) {
      var k = keys[key];
      if (k == 'input_var') continue;
      feedKeys.push(k);
    }

    return feedKeys;
  }

  getInputVar() {
    return this.getContent()['input_var'];
  }

  get icon() {
    return this._icon;
  }

  get title() {
    return this._title;
  }

  get service() {
    return this._service;
  }

  get element() {
    return this._element;
  }

  showTitle() {
    return this.getInputVar()[10];
  }

  get sectionJson() {
    return this._sectionJson;
  }

  get sectionSize() {
    var ss = this.getInputVar()[7];

    if (ss.length) {
      return ss;
    }

    return '24|24|24';
  }

  set index(index) {
    this._index = index;
  }

}