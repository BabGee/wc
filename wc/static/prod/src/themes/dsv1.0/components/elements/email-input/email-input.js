import{utilsMixin,SerializableElement,inputMixin}from"../../../../../components/adaptive-ui.js";const EmailInputBase=class extends utilsMixin(SerializableElement){static get is(){return"email-input"}static get properties(){return{params:{type:Object,value:{}},type:String,required:Boolean,pageType:{type:Object,value:{}},columnSize:{type:Array}}}getName(){return this.e.formName}validateEmail(email){var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test((email+"").toLowerCase())}validate(){if(this.required&&!this.getValue()&&!this.validateEmail(this.getValue())){if(this.required&&!this.getValue()){if(!1===this.e.required&&!this.getValue()){return new this.Validation(!0,"valid")}return new this.Validation(!1,this.e.name+" is Required")}else{return new this.Validation(!1,this.e.name+" Invalid format")}}if(this.getValue()){const emailValid=this.validateEmail(this.getValue());return new this.Validation(emailValid,emailValid?"Valid":"Invalid Email Format")}return new this.Validation(!0,"Valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=EmailInputBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var emailInput={EmailInputBase:EmailInputBase};class EmailInput extends inputMixin(EmailInputBase){get type(){return"email"}}customElements.define(EmailInput.is,EmailInput);export{emailInput as $emailInput,EmailInputBase};