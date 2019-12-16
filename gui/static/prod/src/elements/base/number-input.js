import{utilsMixin}from"../../core/mixins/utils-mixin.js";import{SerializableElement}from"../../core/serializable-element.js";export const NumberInputBase=class extends utilsMixin(SerializableElement){static get is(){return"number-input"}static get properties(){return{params:{type:Object,value:{}},pageType:{type:Object,value:{}},type:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}const inputValueInt=parseInt(this.getValue());if(inputValueInt<this.e.min||inputValueInt>this.e.max){return new this.Validation(!1,this.e.name+" value is invalid.Try again.")}else{return new this.Validation(!0,"valid")}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};