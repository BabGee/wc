import{dataSourceMixin}from"../../core/mixins/datasource-mixin.js";import{utilsMixin}from"../../core/mixins/utils-mixin.js";import{BaseElement}from"../../core/base-element.js";export const StaticCategoriesBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super();this.currentData=[]}static get is(){return"static-categories"}static get properties(){return{icon:String,params:{type:Object,value:{}},currentData:Array,title:String,required:Boolean,variable:String,menu_open:Boolean}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.loader.then(dsc=>{for(var objs={},d=0,itemT;d<dsc.data.length;d++){itemT=dsc.data[d];if(!objs[itemT.category]){objs[itemT.category]=[]}var toPush={name:itemT.group,href:itemT.links};objs[itemT.category].push(toPush)}this.currentData=this._toArray(objs)})}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog("PRODUCTS",dataAction.params);console.log("load service dialog")}_followLink(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}dscDataName(){return this.e.defaultValue}_toArray(obj){return Object.keys(obj).map(function(key){return{name:key,value:obj[key]}})}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.required||pElement.min&&0<pElement.min;self.icon=pElement.icon;self.title=StaticCategoriesBase.toTitleCase(pElement.name);self.params=loader.pl.paramsCopy();self.menu_open=!1;this.loader=this.loadData()}};