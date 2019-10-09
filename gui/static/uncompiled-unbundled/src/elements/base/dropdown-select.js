import { dataSourceMixin } from "../../core/mixins/datasource-mixin.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
export const DropdownSelectBase = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
  static get is() {
    return 'dropdown-select';
  }

  static get properties() {
    return {
      icon: String,
      title: String,
      maxlength: Number,
      pattern: String,
      q: String,
      dropdownValue: Object,
      params: Object,
      columnSize: Array
    };
  }

  getName() {
    const el = this.e.formName.split('=');
    return el[0];
  }

  validate() {
    if (this.e.required && !this.getValue()) {
      return new this.Validation(false, 'invalid');
    }

    return new this.Validation(true, 'valid');
  }

  valid(validation) {}

  invalid(validation) {}
  /**
     * Formats a Row for Displaying
     * the first column is assumed to be the Id
     * the columns that are action links should be ignored
     * columns in contact_exclude should be ignored
     *
     * @param data
     * @return {*}
     * @private
     */


  _dataJoined(data) {
    const self = this;
    var concatExclude = [];

    if (self.e.details['concat_exclude']) {
      concatExclude = self.e.details['concat_exclude'].split(',');
    }

    return data.filter(function (item, index) {
      return !(index === 0 || concatExclude.includes(String(index)) || // concat_exclude
      self.cols.length && self.cols[index]['type'] === 'href');
    }).join(' ');
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    this.loader.then(dsc => {
      // console.log(dsc);
      self.q = '';
      self.currentGroups = self.groups;
      self.currentData = self.data;

      if (Object.keys(self.rows).length > 0 && !self.dropdownValue) {
        self.dropdownValue = self.rows[0][0];
      }
    });
  }

  _computeItemsCount(rows) {
    return rows.length;
  }

  _shouldFilter(items) {
    var b = this._computeItemsCount(items);

    return b > 10;
  }

  _computeItems(rows, q) {
    const filtered_items = [];

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i]; // institution name isn't specified in values

      if (q) {
        var query = q.toLowerCase();
        var name = item[1].toLowerCase();

        if (name.indexOf(query) !== -1) {
          filtered_items.push(item);
        }
      } else {
        filtered_items.push(item);
      } // if(filtered_items.length>   10){
      //     break
      // }

    }

    return filtered_items;
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.required = this.e.required || pElement.min && pElement.min > 0;
    self.title = DropdownSelectBase.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.params = self.pl.paramsCopy(); // self.dropdownValue = Number(pElement.kind);

    self.maxlength = pElement.max;
    self.loader = this.loadData();
  }

};