import{dataSourceMixin}from"../../core/mixins/datasource-mixin.js";import{utilsMixin}from"../../core/mixins/utils-mixin.js";import{SerializableElement}from"../../core/serializable-element.js";export const TagInputBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){constructor(){super();this.tags=[]}static get is(){return"tag-input"}static get properties(){return{title:{type:String,value:""},focused:{type:Boolean,value:!1},tags:{type:Array}}}dscDataName(){return this.e.defaultValue}getName(){return this.e.formName}valid(){return!0}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_tagsChanged(){}_onFocus(){if(this.qs("#filter").focused){this.focused=!0}}_debug1(){const self=this;self.focused=!1}getValue(){if(!this.tags){return""}return this.tags.join(",")}validate(){if((this.e.required||this.required)&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}add(tag){if(null===this.tags){this.tags=[]}var tagIndex=this.tags.indexOf(tag);if(-1===tagIndex){this.push("tags",tag)}}remove(tag){if(null===this.tags){return}var tagIndex=this.tags.indexOf(tag);if(-1<tagIndex){this.tags.splice(tagIndex,1);this.qs("#suggestions").selectedValues=[]}}filter(){this}_onInput(){this.filter(this.$.filter.value)}init(pElement,loader){super.init(pElement,loader);var self=this;this.params=loader.pl.paramsCopy();self.title=TagInputBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;if(pElement.kind){const preselection=pElement.kind.split(",");this.tags=preselection.filter(function(el){return!isNaN(parseFloat(el))&&isFinite(el)})}}};