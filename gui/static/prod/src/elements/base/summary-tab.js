import { dataSourceMixin } from "../../core/mixins/datasource-mixin.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { BaseElement } from "../../core/base-element.js";
export const SummaryTabBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
  static get is() {
    return 'summary-tab';
  }

  static get properties() {
    return {
      service: String,
      color: String,
      icon: String,
      params: Object,
      currentData: Object
    };
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  dataResponseType() {
    return Symbol.for('DATA');
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    this.loader.then(dsc => {
      // self.cols = dsc.cols;
      // self.rows = dsc.rows;
      // self.groups = dsc.groups;
      self.currentGroups = self.groups; // self.data = dsc.data;

      self.currentData = self.data;
      self.loading = false;
    });
  }

  _computeData(index) {
    return this.data[index];
  }

  _rowsOrColumns(cData) {
    if (cData === undefined) {
      return;
    }

    return cData.length;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.title = SummaryTabBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = loader.pl.paramsCopy();
    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }

};