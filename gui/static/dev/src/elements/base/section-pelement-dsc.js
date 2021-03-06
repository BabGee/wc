import { SectionPElementBase } from "./section-pelement.js";
import { dataSourceMixin } from "../../core/mixins/datasource-mixin.js";
export const SectionPElementDsc = class extends dataSourceMixin(SectionPElementBase) {
  dscDataName() {
    return this.e.defaultValue;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.loader.then(dsc => {});
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.params = self.pl.paramsCopy();
    this.loader = this.loadData();
  }

};