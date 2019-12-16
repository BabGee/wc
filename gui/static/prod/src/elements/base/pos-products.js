import{utilsMixin}from"../../core/mixins/utils-mixin.js";import{dataSourceMixin}from"../../core/mixins/datasource-mixin.js";import{BaseElement}from"../../core/base-element.js";export const PosProductsBase=class extends utilsMixin(dataSourceMixin(BaseElement)){static get is(){return"pos-products"}static get properties(){return{icon:String,data_name:String,service:String,name:String,maxlength:Number,pattern:String,required:Boolean,variable:String,items:{type:Array,value:[]},default_value:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this;this.loader.then(()=>{})}mergeParams(obj1,obj2){var obj3={};for(var attrname in obj2){obj3[attrname]=obj2[attrname]}for(var attrname in obj1){obj3[attrname]=obj1[attrname]}return obj3}init(pElement,loader){super.init(pElement,loader);var self=this;if(pElement.elementJson[2]&&0<pElement.elementJson[2]){self.required=!0}self.icon=pElement.elementJson[6];self.title=PosProducts.toTitleCase(pElement.elementJson[0]);self.params=loader.pl.params;self.default_value=pElement.elementJson[11];self.variable=pElement.elementJson[4];self.kind=pElement.elementJson[8];self.loader=this.loadData()}dscDataName(){return this.e.defaultValue}};