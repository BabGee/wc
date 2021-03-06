import{SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const BankInstructionsBase=class extends SerializableElement{static get is(){return"bank-instructions"}constructor(){super();this.bank=0}static get properties(){return{bank:Number}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getName(){return this.e.formName}validate(){if(this.e.required&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}init(pElement,loader){super.init(pElement,loader)}};var bankInstructions={BankInstructionsBase:BankInstructionsBase};const BankInstructionsStyles=css`

`;var bankInstructionsCss={BankInstructionsStyles:BankInstructionsStyles};class BankInstructions extends BankInstructionsBase{static get styles(){return[BankInstructionsStyles,css`
        :host {
          display: block;
        }
      `]}createRenderRoot(){return this}renderDefault(){return html`
    <style>
    .inp{
      border-radius: 6px!important;
      font-size: 14px!important;
      padding: 20px!important;
      line-height: 1;
      background-color: #fcfcfc!important;
      border: 1px solid #a3a3a4!important;
      box-shadow: 0 0 0 transparent!important;
    }
    </style>
     
<div class="column is-9 is-paddingless">
    <div class="field">
        <div class="select is-fullwidth">
          <select class="inp"  @change="${()=>this.changeBank()}" id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
            <option value="kcb">KCB BANK</option>
            <option value="equity">EQUITY BANK</option>   
          </select>
        </div>
    </div>
</div>
<div id="kcb" class="column is-12">      
    <!-- Widget -->
    <div class="flex-card light-bordered light-raised padding-10">
    
        <ol class="simple-feed">
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">This is the markup content for KCB instructions</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">You can access KCB :</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text"> on Google Play Store or Apple Store</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">By dialling <span class="name"> *522# </span> on your KCB M-Banking registered phone.</span>
                </div>
            </li>
          
        </ol>
    </div>
    <!-- /Widget -->
</div>
<div id="equity" class="column is-12" style="display: none;">
    <!-- Widget -->
    <div class="flex-card light-bordered light-raised padding-10">
        <ol class="simple-feed">
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">This is the markup content for Equity Bank instructions</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">You can access Equity :</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text"> on Google Play Store or Apple Store</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">By dialling <span class="name">  </span> on your Equitel registered phone.</span>
                </div>
            </li>
          
        </ol>
    </div>
    <!-- /Widget -->
</div>`}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getValue(){return this.shadowRoot.querySelector("#input").value}changeBank(){if("equity"===this.shadowRoot.querySelector("#input").value){this.shadowRoot.querySelector("#equity").style.display="unset";this.shadowRoot.querySelector("#kcb").style.display="none"}else{this.shadowRoot.querySelector("#equity").style.display="none";this.shadowRoot.querySelector("#kcb").style.display="unset"}}validate(){if(this.e.required&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}valid(){}invalid(){}init(pElement,loader){super.init(pElement,loader)}}customElements.define(BankInstructions.is,BankInstructions);export{bankInstructions as $bankInstructions,bankInstructionsCss as $bankInstructionsCss,BankInstructionsBase,BankInstructionsStyles};