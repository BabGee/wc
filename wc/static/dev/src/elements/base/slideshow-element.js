import { BaseElement } from "../../core/base-element.js";
import { dataSourceMixin } from "../../core/mixins/datasource-mixin.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
export const SlideshowElementBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
  constructor() {
    super();
    this.slideIndex = 0;
    this.filtered_items = [];
    this.rows = [];
  }

  static get is() {
    return 'slideshow-element';
  }

  static get properties() {
    return {
      icon: String,
      dataName: {
        type: String,
        value: ''
      },
      service: String,
      q: {
        type: String,
        value: ''
      },
      title: String,
      maxlength: Number,
      dropdownValue: Object,
      pattern: String,
      required: Boolean,
      filtered_items: {
        type: Object,
        value: []
      },
      rows: {
        type: Object,
        value: []
      },
      params: {
        type: Object,
        value: ''
      },
      slideIndex: {
        type: Number,
        value: 0
      }
    };
  }

  dscDataName() {
    return this.dataName;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    this.loader.then(dsc => {
      // console.log(dsc);
      self.cols = dsc.cols;
      self.rows = dsc.rows;
      self.q = '';
      self.groups = dsc.groups;
      self.currentGroups = self.groups;
      self.data = dsc.data;
      self.currentData = self.data;

      if (Object.keys(self.rows).length > 0) {
        self.dropdownValue = self.rows[0][0];
      }
    }); //  this.showSlides(this.slideIndex);
    // var slideIndex = 0;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.required = pElement.min && pElement.min > 0;
    self.title = SlideshowElementBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = self.pl.paramsCopy();
    self.dataName = pElement.defaultValue;
    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }

};