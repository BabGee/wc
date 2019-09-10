import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { dataSourceMixin } from "../../core/mixins/datasource-mixin.js";
import { BaseElement } from "../../core/base-element.js";
export const ListSelectBase = class extends utilsMixin(dataSourceMixin(BaseElement)) {
  static get is() {
    return 'list-select';
  }

  static get properties() {
    return {
      icon: String,
      target: String,
      data_name: String,
      service: String,
      params: {
        type: Object,
        value: {}
      },
      title: String,
      maxlength: Number,
      pattern: String,
      required: Boolean,
      multi: Boolean,
      selection: {
        notify: true,
        observer: 'selectionChanged'
      },
      currentData: {
        type: Object,
        notify: true
      }
    };
  }

  isEqual(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
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

  _iframe(evt) {
    evt.preventDefault();

    if (evt.currentTarget.getAttribute('target') == '_blank') {
      window.open(evt.target.href, '_blank', 'location=yes,height=570,scrollbars=yes,status=yes');
    } else {
      this.pl._dialog(evt.currentTarget.dataService, JSON.parse(evt.currentTarget.dataParams));
    }
  }

  computeTarget(link) {
    return (
      /* link.target ||*/
      this.target
    );
  }

  computeParams(link) {
    return JSON.stringify(link.params);
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this;
    /* todo incomplete dev
        if (this.multi) {
            this.$.iron_selector.setAttribute("multi", "");
        }
         this.$.hidden_input.addEventListener('keydown', function (e) {
            e.preventDefault();
        });
        if (this.required) {
            this.$.hidden_input.setAttribute("required", false);
        }
         var iron_selector = this.$.iron_selector;
         iron_selector.addEventListener('tap', function () {
            if (self.multi) {
                self.selection = this.selectedValues;
            }
            else {
                self.selection = this.selected;
            }
            self.$.hidden_input.value = self.selection;
            self.fire("selected", self.selection);
            //target.$.submit_form.click();
         });
         */

    this.loadData(function (dsc) {
      /* todo incomplete dev
             self.cols = payload.response.data_source.cols;
            self.rows = payload.response.data_source.rows;
            self.groups = payload.response.data_source.groups;
             self.currentGroups = self.groups;
            self.data = payload.response.data_source.data;
            self.currentData = self.data;
              self.loading = false;
            */
    });
  }

  dscDataName() {
    return this.data_name;
  }

  selectionChanged() {
    var iron_selector = this.$.iron_selector;

    if (this.multi) {
      iron_selector.selectedValues = this.selection;
    } else {
      iron_selector.selected = this.selection;
    }
  } // TODO this should be collected together into a Utilities functions


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

  jsonify(object) {
    return JSON.stringify(object);
  }

  _refresh() {}

  postsLoaded(event, response) {
    var payload = response.response;
    this.cols = payload.response.data_source.cols;
    this.rows = payload.response.data_source.rows;
    this.groups = payload.response.data_source.groups;
    this.data = payload.response.data_source.data; // this.response = JSON.stringify(payload);
    // for(key in payload){ console.log('Key: '+key+' Value: '+payload[key]); }

    if (payload.response_status == '00') {
      console.log('Success');
    }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    self.title = ListSelect.toTitleCase(pElement.name);
    self.icon = pElement.icon;
    self.service = pElement.service;
    self.params = loader.pl.params;
    self.data_name = pElement.defaultValue;
    self.maxlength = pElement.max; // self.icon = pElement.elementJson[6];
  }

};