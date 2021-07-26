import{IronFormElementBehavior,PaperInputBehavior,Polymer,html$1 as html,SerializableElement,utilsMixin,css,html as html$1,InputDefaultStyles,InputLabelAnimationtStyles}from"../../../../../components/adaptive-ui.js";const bundledImportMeta={...import.meta,url:new URL("../../../../../../node_modules/%40polymer/gold-cc-cvc-input/gold-cc-cvc-input.js",import.meta.url).href};Polymer({_template:html`
    <style>
      :host {
        display: block;
      }

      iron-icon {
        margin-left: 10px;
        @apply --gold-cc-cvc-input-icon;
      }

      iron-icon[hidden] {
        display: none !important;
      }

      .container {
        @apply --layout-horizontal;
      }

      input {
        @apply --layout-flex;
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

    <paper-input-container id="container" disabled\$="[[disabled]]" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" invalid="[[invalid]]">

      <label slot="label" hidden\$="[[!label]]">[[label]]</label>

      <iron-input id="input" slot="input" bind-value="{{value}}" allowed-pattern="[0-9]" invalid="{{invalid}}">
        <input id="nativeInput" aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" required\$="[[required]]" type="tel" autocomplete="cc-csc" name\$="[[name]]" disabled\$="[[disabled]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" maxlength\$="[[_requiredLength]]" size\$="[[size]]">
      </iron-input>
      <div class="icon-container" slot="suffix">
        <iron-icon id="icon" src="[[resolveUrl('cvc_hint.png')]]" hidden\$="[[_amex]]" alt="cvc"></iron-icon>
        <iron-icon id="amexIcon" hidden\$="[[!_amex]]" src="[[resolveUrl('cvc_hint_amex.png')]]" alt="amex cvc"></iron-icon>
      </div>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

    </paper-input-container>
  `,is:"gold-cc-cvc-input",importMeta:bundledImportMeta,properties:{label:{type:String,value:"CVC"},cardType:{type:String,value:""},_requiredLength:{type:Number,computed:"_computeRequiredLength(cardType)"},_amex:{type:Boolean,computed:"_computeIsAmex(cardType)"},value:{type:String,observer:"_onValueChanged"}},behaviors:[PaperInputBehavior,IronFormElementBehavior],observers:["_onFocusedChanged(focused)"],ready:function(){if(!this.value){this.value=""}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){if(!!this.inputElement.bindValue){this._handleAutoValidate()}},_onValueChanged:function(value,oldValue){if(oldValue==void 0){return}this._handleAutoValidate()},_computeRequiredLength:function(cardType){return this._computeIsAmex(cardType)?4:3},_computeIsAmex:function(cardType){return"amex"==cardType.toLowerCase()},validate:function(){var valid=this.$.input.validate()&&this.value.length==this._requiredLength||!this.required&&""==this.value;this.invalid=!valid;this.$.container.invalid=!valid;this.$.container.updateAddons({inputElement:this.$.input,value:this.value,invalid:!valid});return valid},_onFocusedChanged:function(focused){if(!this._focusableElement){return}if(!focused){this._handleAutoValidate()}}});const CvcInputBase=class extends utilsMixin(SerializableElement){static get is(){return"cvc-input"}static get properties(){return{value:String,params:{type:Object,value:{}},columnSize:{type:Array}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getName(){return this.e.formName}validate(){if(this.e.required&&!this.getValue()&&3!==this.getValue().length){if(3!==this.getValue().length){return new this.Validation(!1,this.e.name+" 3 numbers required")}else{return new this.Validation(!1,this.e.name+" is Required")}}return new this.Validation(!0,"valid")}init(pElement,loader){super.init(pElement,loader);self.title=CvcInputBase.toTitleCase(pElement.name);this.required=pElement.min&&0<pElement.min;this.name=pElement.name}};var cvcInput={CvcInputBase:CvcInputBase};const CvcInputDefaultStyles=css`

`;var cvcInputDefaultCss={CvcInputDefaultStyles:CvcInputDefaultStyles};const CvcInputServiceStyles=css`
.row{
    width: 100%;
}
.row .inp-right{
    /* width: 5%; */
    height: 100px;
}
.row .inp-right input{
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
    padding: 18px calc(.625em - 1px) 18px 20px;
}
.row .inp-right input::-webkit-input-placeholder { /* Edge */
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
}
.row .inp-right input :-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
}
.row .inp-right input ::placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
}
.row .inp-right .field .label{
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #013243;
}

.row .inp-right .field.error, 
.row .inp-right .field.error input, 
.row .inp-right .field.error .icon{
    color: #ff3860;
    fill: #ff3860;
}
.row .inp-right .field.error{
    font-weight: normal;
    font-size: 12px;
}

.row .inp-right .field.success, 
.row .inp-right .field.success input, 
.row .inp-right .field.success svg{
    color: #23d160;
    fill: #23d160;
}
.row .inp-right .field.success{
    font-weight: normal;
    font-size: 12px;
}
`;var cvcInputServiceCss={CvcInputServiceStyles:CvcInputServiceStyles};const GetStylesConst=function(){console.log("GET STYLES");if("service"==window.template){return CvcInputServiceStyles}else{return CvcInputDefaultStyles}};class CvcInput extends CvcInputBase{static get styles(){return[InputDefaultStyles,InputLabelAnimationtStyles,GetStylesConst(),css`
        :host {
          display: block;
        }
      `]}renderService(){return html$1`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column row">
      <div class="input-mixin input-effect">
        <input class="label-animation" type="text" placeholder="">
        <label>${this.e.name}</label>
        <span class="focus-bg"></span>
      </div>
    </div>
    `}renderDefault(){return html$1`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column is-paddingless">
      <div class="column">
        <div class="input-mixin input-effect">
          <input class="label-animation" type="text" placeholder="">
          <label>${this.e.name}</label>
          <span class="focus-bg"></span>
        </div>
      </div>
    </div>
        `}static get properties(){return{value:String,params:{type:Object,value:{}},columnSize:{type:Array}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}invalid(){this.qs(".control").classList.add("required");this.qs(".control").classList.add("has-error")}valid(){this.qs(".control").classList.remove("required");this.qs(".control").classList.remove("has-error")}}customElements.define(CvcInput.is,CvcInput);export{cvcInput as $cvcInput,cvcInputDefaultCss as $cvcInputDefaultCss,cvcInputServiceCss as $cvcInputServiceCss,CvcInputBase,CvcInputDefaultStyles,CvcInputServiceStyles};