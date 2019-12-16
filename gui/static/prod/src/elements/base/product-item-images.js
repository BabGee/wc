import{utilsMixin}from"../../core/mixins/utils-mixin.js";import{dataSourceMixin}from"../../core/mixins/datasource-mixin.js";import{BaseElement}from"../../core/base-element.js";export const ProductItemImagesBase=class extends utilsMixin(dataSourceMixin(BaseElement)){static get is(){return"product-item-images"}static get properties(){return{s:String,main:String,params:{type:Object,value:{}},data_name:String,service:String,default_value:String}}mergeParams(obj1,obj2){var obj3={};for(var attrname in obj2){obj3[attrname]=obj2[attrname]}for(var attrname in obj1){obj3[attrname]=obj1[attrname]}return obj3}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.loader.then(()=>{})}dscDataName(){return this.data_name}init(pElement,loader){super.init(pElement,loader);var self=this;self.s=pElement.elementJson[1];self.icon=pElement.icon;self.title=ProductItemImagesBase.toTitleCase(pElement.name);self.service=pElement.service;self.main=pElement.defaultValue;self.data_name=pElement.defaultValue;self.params=loader.pl.paramsCopy();self.loader=this.loadData()}};