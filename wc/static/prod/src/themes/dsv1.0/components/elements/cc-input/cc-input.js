import{IronFormElementBehavior,IronValidatableBehavior,PaperInputBehavior,Polymer,html$1 as html,SerializableElement,utilsMixin,html as html$1}from"../../../../../components/adaptive-ui.js";var __indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1},card,card_type,card_types,_i,_len,_ref;card_types=[{name:"amex",icon:"images/amex.png",pattern:/^3[47]/,valid_length:[15]},{name:"diners_club",icon:"images/diners_club.png",pattern:/^30[0-5]/,valid_length:[14]},{name:"diners_club",icon:"images/diners_club.png",pattern:/^36/,valid_length:[14]},{name:"jcb",icon:"images/jcb.png",pattern:/^35(2[89]|[3-8][0-9])/,valid_length:[16]},{name:"laser",pattern:/^(6304|670[69]|6771)/,valid_length:[16,17,18,19]},{name:"visa_electron",pattern:/^(4026|417500|4508|4844|491(3|7))/,valid_length:[16]},{name:"visa",icon:"images/visa.png",pattern:/^4/,valid_length:[16]},{name:"mastercard",icon:"images/mastercard.png",pattern:/^5[1-5]/,valid_length:[16]},{name:"maestro",pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,valid_length:[12,13,14,15,16,17,18,19]},{name:"discover",icon:"images/discover.png",pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,valid_length:[16]}];var options={};if(null==options.accept){options.accept=function(){var _i,_len,_results;_results=[];for(_i=0,_len=card_types.length;_i<_len;_i++){card=card_types[_i];_results.push(card.name)}return _results}()}_ref=options.accept;for(_i=0,_len=_ref.length;_i<_len;_i++){card_type=_ref[_i];if(0>__indexOf.call(function(){var _j,_len1,_results;_results=[];for(_j=0,_len1=card_types.length;_j<_len1;_j++){card=card_types[_j];_results.push(card.name)}return _results}(),card_type)){throw"Credit card type '"+card_type+"' is not supported"}}function get_card_type(number){var _j,_len1,_ref1;_ref1=function(){var _k,_len1,_ref1,_results;_results=[];for(_k=0,_len1=card_types.length;_k<_len1;_k++){card=card_types[_k];if(_ref1=card.name,0<=__indexOf.call(options.accept,_ref1)){_results.push(card)}}return _results}();for(_j=0,_len1=_ref1.length;_j<_len1;_j++){card_type=_ref1[_j];if(number.match(card_type.pattern)){return card_type}}return null}function is_valid_luhn(number){var digit,n,sum,_j,_len1,_ref1;sum=0;_ref1=number.split("").reverse();for(n=_j=0,_len1=_ref1.length;_j<_len1;n=++_j){digit=_ref1[n];digit=+digit;if(n%2){digit*=2;if(10>digit){sum+=digit}else{sum+=digit-9}}else{sum+=digit}}return 0===sum%10}function is_valid_length(number,card_type){var _ref1;return _ref1=number.length,0<=__indexOf.call(card_type.valid_length,_ref1)}function validate_number(number){var length_valid,luhn_valid;card_type=get_card_type(number);luhn_valid=!1;length_valid=!1;if(null!=card_type){luhn_valid=is_valid_luhn(number);length_valid=is_valid_length(number,card_type)}return{card_type:card_type,valid:luhn_valid&&length_valid,luhn_valid:luhn_valid,length_valid:length_valid}}function normalize(number){return number.replace(/[ -]/g,"")}function validateCcInput(input){return validate_number(normalize(input))}var ccValidator={validateCcInput:validateCcInput};const bundledImportMeta={...import.meta,url:new URL("../../../../../../node_modules/%40polymer/gold-cc-input/gold-cc-input.js",import.meta.url).href};Polymer({_template:html`
    <style>
    :host {
      display: block;
    }

    /* Use a container so that when hiding the icon, the layout doesn't jump around. */
    .icon-container {
      margin-left: 10px;
      height: 24px;
      @apply --gold-cc-input-icon-container;
    }

    iron-icon {
      --iron-icon-width: 40px;
      --iron-icon-height: 24px;
    }

    .container {
      @apply --layout-horizontal;
    }

    input {
      @apply --layout-flex;
    }

    input {
      position: relative; /* to make a stacking context */
      outline: none;
      box-shadow: none;
      padding: 0;
      width: 100%;
      max-width: 100%;
      background: transparent;
      border: none;
      color: var(--paper-input-container-input-color, var(--primary-text-color));
      -webkit-appearance: none;
      text-align: inherit;
      vertical-align: bottom;
      /* Firefox sets a min-width on the input, which can cause layout issues */
      min-width: 0;
      @apply --paper-font-subhead;
      @apply --paper-input-container-input;
    }
    input::-webkit-input-placeholder {
      color: var(--paper-input-container-color, var(--secondary-text-color));
    }
    input:-moz-placeholder {
      color: var(--paper-input-container-color, var(--secondary-text-color));
    }
    input::-moz-placeholder {
      color: var(--paper-input-container-color, var(--secondary-text-color));
    }
    input:-ms-input-placeholder {
      color: var(--paper-input-container-color, var(--secondary-text-color));
    }
    </style>

    <paper-input-container
        id="container"
        disabled$="[[disabled]]"
        no-label-float="[[noLabelFloat]]"
        always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]"
        invalid="[[invalid]]">
      <label slot="label" hidden$="[[!label]]">[[label]]</label>

      <iron-input
          id="input"
          slot="input"
          allowed-pattern="[0-9 ]"
          bind-value="{{value}}"
          invalid="{{invalid}}"
          maxlength="30">
        <input
            id="nativeInput"
            aria-labelledby$="[[_ariaLabelledBy]]"
            aria-describedby$="[[_ariaDescribedBy]]"
            invalid$="{{invalid}}"
            required$="[[required]]"
            type="tel"
            prevent-invalid-input
            autocomplete="cc-number"
            name$="[[name]]"
            disabled$="[[disabled]]"
            autofocus$="[[autofocus]]"
            inputmode$="[[inputmode]]"
            placeholder$="[[placeholder]]"
            readonly$="[[readonly]]"
            size$="[[size]]">
      </iron-input>
      <div class="icon-container" slot="suffix">
        <iron-icon id="icon"></iron-icon>
      </div>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error slot="add-on" id="error">
          [[errorMessage]]
        </paper-input-error>
      </template>
    </paper-input-container>
  `,is:"gold-cc-input",importMeta:bundledImportMeta,behaviors:[PaperInputBehavior,IronValidatableBehavior,IronFormElementBehavior],properties:{label:{type:String,value:"Card number"},cardType:{type:String,notify:!0},cardTypes:{type:Array,observer:"_onCardTypesChanged"},value:{type:String,observer:"_onValueChanged"}},observers:["_onFocusedChanged(focused)"],ready:function(){if(!this.value){this.value=""}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){if(!!this.inputElement.bindValue){this._handleAutoValidate()}},_onCardTypesChanged:function(){if(this.value)this._handleAutoValidate()},_onValueChanged:function(value,oldValue){if(oldValue==void 0)return;var start=this.$.input.selectionStart,previousCharASpace=value?" "==this.value.charAt(start-1):!1;value=value.replace(/\s+/g,"");for(var formattedValue="",i=0;i<value.length;i++){if(0!=i&&0==i%4){formattedValue+=" "}formattedValue+=value[i]}this.updateValueAndPreserveCaret(formattedValue.trim());if(!previousCharASpace&&" "==this.value.charAt(start-1)){this.$.input.selectionStart=start+1;this.$.input.selectionEnd=start+1}this._handleAutoValidate()},validate:function(){if(!this.required&&""==this.value){return!0}var result=validateCcInput(this.value),valid=result.valid&&result.length_valid;if(valid&&this.cardTypes&&0<this.cardTypes.length){valid=-1!==this.cardTypes.indexOf(result.card_type.name)}this.cardType=valid?result.card_type.name:"";this.$.container.invalid=!valid;this.$.container.updateAddons({inputElement:this.$.input,value:this.value,invalid:!valid});if(valid&&result.card_type.icon){this.$.icon.src=this.resolveUrl(result.card_type.icon);this.$.icon.alt=this.cardType;this.$.icon.hidden=!1}else{this.$.icon.src=null;this.$.icon.alt="";this.$.icon.hidden=!0}return valid},_onFocusedChanged:function(focused){if(!this._focusableElement){return}if(!focused){this._handleAutoValidate()}}});const CcInputBase=class extends utilsMixin(SerializableElement){static get is(){return"cc-input"}static get properties(){return{value:String,params:{type:Object,value:{}},type:String,columnSize:String,ColumnOffset:{type:Array}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getName(){return this.e.formName}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}validate(){if(this.e.required&&!this.getValue()&&15!==this.getValue().length){if(15!==this.getValue().length){return new this.Validation(!1,this.e.name+" Minimum of 3 Required")}else{return new this.Validation(!1,this.e.name+" is Required")}}return new this.Validation(!0,"valid")}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=CcInputBase.toTitleCase(pElement.name);this.required=pElement.min&&0<pElement.min;this.name=pElement.name}};var ccInput={CcInputBase:CcInputBase};class CcInput extends CcInputBase{renderDefault(){return html$1`
 <div class="column">
<div class="field">
  <div class="control  has-icons-left has-icons-right">

     <gold-cc-input id="input" placeholder="${this.name}" required label="${this.name}" auto-validate></gold-cc-input>
          <small class="validation-info error" style="display: none; color: red;">Required</small>

  </div>
</div>
</div>
        `}static get is(){return"cc-input"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}invalid(validation){this.shadowRoot.querySelector(".control").classList.add("required");this.shadowRoot.querySelector(".control").classList.add("has-error");this.shadowRoot.querySelector(".validation-info").style.display="flex";if(validation){this.shadowRoot.querySelector(".validation-info").textContent=validation}}valid(){this.shadowRoot.querySelector(".control").classList.remove("required");this.shadowRoot.querySelector(".control").classList.remove("has-error");this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=CcInput.toTitleCase(pElement.name);this.required=pElement.min&&0<pElement.min;this.name=pElement.name}}customElements.define(CcInput.is,CcInput);export{ccValidator as $ccValidator,ccInput as $ccInput,validateCcInput,CcInputBase};