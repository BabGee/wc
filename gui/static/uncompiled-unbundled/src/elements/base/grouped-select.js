import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { dataSourceMixin } from "../../core/mixins/datasource-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
import "../../../node_modules/@polymer/iron-selector/iron-selector.js";
export const GroupedSelectBase = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'grouped-select';
  }

  constructor() {
    super(); // this.data = [];
    // this.groups = [];
  }

  static get properties() {
    return {
      icon: String,
      // data_name: String,
      //service: String,
      params: {
        type: Object,
        value: {}
      },
      title: String,
      maxlength: Number,
      pattern: String,
      required: Boolean,
      multi: Boolean,
      currentData: {
        type: Object,
        notify: true
      },
      scrollerheight: String,
      scroller: {
        observer: 'jumpToGroup',
        value: 0
      }
    };
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.icon = pElement.icon;
    self.title = GroupedSelectBase.toTitleCase(pElement.name); // self.service = pElement.service;

    self.params = loader.pl.paramsCopy();
    self.maxlength = pElement.max; // TODO use details

    if (pElement.variableType === 'GROUPED SELECT') {
      self.multi = false;
    } else {
      // Its GROUPED MULTI SELECT
      self.multi = true;
    }
  }

  isEqual(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }

  _checked(s, i) {
    // console.log(this.selection,i);
    return s == i['index'];
  }

  repeatObject(item) {
    var items = [];

    if (typeof item == 'object') {
      var count = 0;

      for (var x in item) {
        items.push([count, x, item[x]]);
        count++;
      }
    }

    return items;
  }

  getValue() {
    if (this.multi) {
      return this.qs('#iron_selector').selectedValues.join(',');
    }

    return this.qs('#iron_selector').selected;
  }

  getName() {
    return this.e.formName;
  }

  validate() {
    return new this.Validation(true, 'valid');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.loadData().then(dsc => {
      console.log(dsc); // todo
      // target.cols = payload.response.data_source.cols;
      // target.rows = payload.response.data_source.rows;
      // target.groups = payload.response.data_source.groups;
      //
      // target.currentGroups = target.groups;
      // target.data = payload.response.data_source.data;
      //
      // target.currentData = target.data;
      //
    });
  }

  viewAll(e) {
    this.currentGroups = this.groups;
    this.currentData = this.data;

    if (this.multi) {
      this.$.iron_selector.selectedValues = [];
    } else {
      this.$.iron_selector.selected = '';
    } // this.selection = "";
    // this.$.hidden_input.value = this.selection;
    // this.fire("selected", this.selection);

  }

  jumpToGroup(e) {
    // todo finish
    return;

    if (this.data && Object.keys(this.data).length > 0) {
      this.currentData = [this.data[this.scroller]];
    }

    if (this.groups && Object.keys(this.groups).length > 0) {
      this.currentGroups = [this.groups[this.scroller]];
    }

    if (this.multi) {
      this.$.iron_selector.selectedValues = [];
    } else {
      this.$.iron_selector.selected = '';
    }

    this.selection = ''; //  this.$.hidden_input.value = this.selection;
    // todo use CustomEvent
    // this.fire("selected", this.selection);
  }

};