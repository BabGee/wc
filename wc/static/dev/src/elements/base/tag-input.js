import { dataSourceMixin } from "../../core/mixins/datasource-mixin.js";
import { utilsMixin } from "../../core/mixins/utils-mixin.js";
import { SerializableElement } from "../../core/serializable-element.js";
export const TagInputBase = class extends utilsMixin(dataSourceMixin(SerializableElement)) {
  constructor() {
    super();
    this.tags = [];
  }

  static get is() {
    return 'tag-input';
  }

  static get properties() {
    return {
      title: {
        type: String,
        value: ''
      },
      focused: {
        type: Boolean,
        value: false
      },
      tags: {
        type: Array
      }
    };
  }

  dscDataName() {
    return this.e.defaultValue;
  }

  getName() {
    return this.e.formName;
  }

  valid(validation) {
    return true;
  }

  invalid(validation) {}

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  _tagsChanged() {// console.log('tags changed');
  }

  _onFocus() {
    if (this.qs('#filter').focused) {
      this.focused = true; // this.requestUpdate()
    }
  }

  _debug1(evt) {
    const self = this; // this.$.filter.value = '';

    self.focused = false; // self.requestUpdate()
  }

  getValue() {
    if (!this.tags) {
      return '';
    }

    return this.tags.join(',');
  }

  validate() {
    if ((this.e.required || this.required) && !this.getValue()) {
      return new this.Validation(false, 'invalid');
    }

    return new this.Validation(true, 'valid');
  }

  add(tag) {
    if (this.tags === null) {
      this.tags = [];
    } // TODO use before search
    // var trimmedTag = tag.replace(/^\s+/, '').replace(/\s+$/, '');
    //
    // if (trimmedTag !== '') {
    //     var tagIndex = this.tags.indexOf(trimmedTag);
    //     if (tagIndex === -1) {
    //         this.push('tags', trimmedTag);
    //     }
    // }


    var tagIndex = this.tags.indexOf(tag);

    if (tagIndex === -1) {
      this.push('tags', tag);
    }
  }

  remove(tag) {
    if (this.tags === null) {
      return;
    }

    var tagIndex = this.tags.indexOf(tag);

    if (tagIndex > -1) {
      this.tags.splice(tagIndex, 1); // this.requestUpdate()

      this.qs('#suggestions').selectedValues = []; // console.log()
    }
  }

  filter(q) {
    const self = this; // todo this.data = [];
  }

  _onInput(e) {
    // if (e.keyCode === 13) {
    //
    //     this.add(e.target.value.toLowerCase());
    //
    //     e.target.value = '';
    // }else {
    // todo remove enter key dependence
    this.filter(this.$.filter.value); // }
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    var self = this;
    this.params = loader.pl.paramsCopy();
    self.title = TagInputBase.toTitleCase(pElement.name);
    this.required = this.e.required || pElement.min && pElement.min > 0;

    if (pElement.kind) {
      const preselection = pElement.kind.split(',');
      this.tags = preselection.filter(function (el) {
        // return el.length && el==+el;
        return !isNaN(parseFloat(el)) && isFinite(el);
      });
    }
  }

};