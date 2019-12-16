import{utilsMixin}from"../../core/mixins/utils-mixin.js";import{SerializableElement}from"../../core/serializable-element.js";export const BarcodeScannerBase=class extends utilsMixin(SerializableElement){static get is(){return"barcode-scanner"}static get properties(){return{params:Object,type:String,pageType:Object,columnSize:Array,columnOffset:Array}}getName(){return this.e.formName}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=BarcodeScannerBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};