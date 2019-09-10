import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { BaseElement } from "../../core/base-element.js";
export const ShopProductsSectionBase = class extends utilsMixin(BaseElement) {
  static get is() {
    return 'shop-products-section';
  }

  static get properties() {
    return {
      icon: String,
      data_name: String,
      service: String,
      name: String,
      maxlength: Number,
      pattern: String,
      required: Boolean,
      variable: String,
      items: {
        type: Array,
        value: []
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.loadData().then(dsc => {});
  }

  computeParams(link) {
    return JSON.stringify(link.params);
  }

  _iframe(evt) {
    evt.preventDefault();
    const self = this;

    self.pl._dialog(evt.currentTarget.dataService, JSON.parse(evt.currentTarget.dataParams));
  }

  mergeParams(obj1, obj2) {
    var obj3 = {};

    for (var attrname in obj2) {
      obj3[attrname] = obj2[attrname];
    }

    for (var attrname in obj1) {
      obj3[attrname] = obj1[attrname];
    }

    return obj3;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;

    if (pElement.min && pElement.min > 0) {
      self.required = true;
    }

    self.icon = pElement.icon;
    self.title = ShopProductsSectionBase.toTitleCase(pElement.name);
    self.params = loader.pl.paramsCopy();
    self.service = pElement.service;
    self.variable = pElement.defaultValue;
    self.kind = pElement.kind;
  }

};