import{dataSourceMixin}from"../../core/mixins/datasource-mixin.js";import{utilsMixin}from"../../core/mixins/utils-mixin.js";import{SerializableElement}from"../../core/serializable-element.js";export const MonthYearBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){static get is(){return"month-year"}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=MonthYearBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.params=self.pl.paramsCopy();self.maxlength=pElement.max}};