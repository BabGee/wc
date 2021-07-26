import{IronMeta,Polymer,IronA11yKeysBehavior,IronValidatableBehavior,html$1 as html,IronFormElementBehavior,PaperInputBehavior,SerializableElement,utilsMixin,html as html$1,css,InputDefaultStyles,InputLabelAnimationtStyles}from"../../../../../components/adaptive-ui.js";const IronValidatorBehavior={ready:function(){new IronMeta({type:"validator",key:this.is||this.constructor.is,value:this})},validate:function(){}};var ironValidatorBehavior={IronValidatorBehavior:IronValidatorBehavior};Polymer({is:"date-validator",behaviors:[IronValidatorBehavior],validate:function(date){if(!date)return!1;if(12<date.month||1>date.month)return!1;var then=new Date("20"+date.year,date.month),now=new Date;return then>now}});Polymer({_template:html`
    <style>
      span {
        @apply --paper-input-container-font;
        opacity: 0.33;
        text-align: center;
      }

      input[is="iron-input"], iron-input input {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        text-align: center;

        @apply --layout-flex;
        @apply --paper-font-subhead;
        @apply --paper-input-container-input;
      }

      .container {
        @apply --layout-horizontal;
      }
    </style>

    <date-validator id="validator"></date-validator>

    <span aria-hidden id="monthLabel" hidden>Month</span>
    <span aria-hidden id="yearLabel" hidden>Year</span>

    <div class="container">
      <iron-input
          id="expirationMonth"
          bind-value="{{month}}"
          allowed-pattern="[0-9]"
          invalid="{{invalid}}">
        <input
            id="nativeMonthInput"
            aria-labelledby$="[[_computeAriaLabel(ariaLabelPrefix,'monthLabel')]]"
            required$="[[required]]"
            maxlength="2"
            placeholder="MM"
            autocomplete="cc-exp-month"
            type="tel"
            disabled$="[[disabled]]"
            autofocus$="[[autofocus]]"
            inputmode$="[[inputmode]]"
            readonly$="[[readonly]]">
      </iron-input>
      <span>/</span>
      <iron-input
          id="expirationYear"
          bind-value="{{year}}"
          allowed-pattern="[0-9]"
          invalid="{{invalid}}">
        <input
            id="nativeYearInput"
            aria-labelledby$="[[_computeAriaLabel(ariaLabelPrefix,'yearLabel')]]"
            required$="[[required]]"
            maxlength="2"
            placeholder="YY"
            autocomplete="cc-exp-year"
            type="tel"
            disabled$="[[disabled]]"
            inputmode$="[[inputmode]]"
            readonly$="[[readonly]]">
      </iron-input>
    </div>
  `,is:"date-input",behaviors:[IronA11yKeysBehavior,IronValidatableBehavior],properties:{required:{type:Boolean,value:!1},month:{type:Number},year:{type:Number},date:{notify:!0,type:Object},validator:{type:String,value:"date-validator"},ariaLabelPrefix:{type:String},disabled:{type:Boolean,value:!1},autofocus:{type:Boolean},inputmode:{type:String},readonly:{type:Boolean,value:!1}},keyBindings:{"/":"_selectYear"},observers:["_computeDate(month, year)"],created:function(){this._computeDate("","")},_selectYear:function(){var yearInput=this.$.nativeYearInput||this.$.expirationYear;yearInput.focus()},_computeDate:function(month,year){this.date={month:month,year:year};if(month&&2===month.length){this._selectYear()}},validate:function(){if(!this.required&&""==this.month&&""==this.year){return!0}this.invalid=!this.$.validator.validate(this.date);this.fire("iron-input-validate");return!this.invalid},_computeAriaLabel:function(dateLabel,monthLabel){return dateLabel+" "+monthLabel}});Polymer({_template:html`
    <style>
      :host {
        display: block;
      }
    </style>

    <paper-input-container
        id="container"
        no-label-float="[[noLabelFloat]]"
        always-float-label="[[alwaysFloatLabel]]"
        attr-for-value="date"
        disabled$="[[disabled]]"
        invalid="[[invalid]]">
      <label slot="label" hidden$="[[!label]]">[[label]]</label>

      <date-input
          class="paper-input-input"
          id="input"
          slot="input"
          aria-label-prefix="[[_ariaLabelledBy]]"
          required$="[[required]]"
          autocomplete$="[[autocomplete]]"
          disabled$="[[disabled]]"
          invalid="{{invalid}}"
          autofocus$="[[autofocus]]"
          inputmode$="[[inputmode]]"
          placeholder$="[[placeholder]]"
          readonly$="[[readonly]]"
          on-date-changed="_onDateChanged">
      </date-input>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error slot="add-on" id="error">
          [[errorMessage]]
        </paper-input-error>
      </template>

    </paper-input-container>
  `,is:"gold-cc-expiration-input",hostAttributes:{tabindex:-1},behaviors:[PaperInputBehavior,IronFormElementBehavior],properties:{label:{type:String,value:"Expiration Date"},value:{type:String,value:"",observer:"_onValueChanged"}},observers:["_onFocusedChanged(focused)"],ready:function(){if(this.value){this._handleAutoValidate()}},created(){this.__ignoreAutoValidation=!0},_onValueChanged:function(value,oldValue){if(oldValue==void 0&&""===value){return}this.$.input.setProperties({month:this._computeMonth(value),year:this._computeYear(value)});this._handleAutoValidate()},_onDateChanged:function(event){if(!this.__firstDateComputeSkipped){this.__firstDateComputeSkipped=!0;return}var month=event.detail.value.month||"",year=event.detail.value.year||"",value=year?month+"/"+year:month;this.value=value+""},_computeMonth:function(value){return value.split("/")[0]},_computeYear:function(value){return value.split("/")[1]||""},validate:function(){return this.$.input.validate()},_onFocusedChanged:function(focused){if(this.__ignoreAutoValidation){this.__ignoreAutoValidation=!1;return}if(!focused){this._handleAutoValidate()}}});const CcExpirationBase=class extends utilsMixin(SerializableElement){static get is(){return"cc-expiration"}static get properties(){return{label:String,params:{type:Object,value:{}},columnSize:{type:Array}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getName(){return this.e.formName}validate(){if(this.e.required&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=CcExpirationBase.toTitleCase(pElement.name);this.required=pElement.min&&0<pElement.min;this.name=pElement.name}};var ccExpiration={CcExpirationBase:CcExpirationBase};class CcExpiration extends CcExpirationBase{static get styles(){return[InputDefaultStyles,InputLabelAnimationtStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html$1`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column">
      <div class="input-mixin input-effect">
        <input class="label-animation" type="month" placeholder="">
        <label>${this.e.name}</label>
        <span class="focus-bg"></span>
      </div>
    </div>
        `}static get is(){return"cc-expiration"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getInput(){return this.qs("#input")}getValue(){let newValue="";if(this.getInput().value){let oldValue=this.getInput().value,year=oldValue.substring(0,4),month=oldValue.substring(5);newValue=month+"-"+year}console.log("Expire ",newValue);return newValue}invalid(){this.shadowRoot.querySelector(".control").classList.add("required");this.shadowRoot.querySelector(".control").classList.add("has-error")}valid(){this.shadowRoot.querySelector(".control").classList.remove("required");this.shadowRoot.querySelector(".control").classList.remove("has-error")}}customElements.define(CcExpiration.is,CcExpiration);export{ironValidatorBehavior as $ironValidatorBehavior,ccExpiration as $ccExpiration,IronValidatorBehavior,CcExpirationBase};