import{dataSourceMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const MsisdnInputBase=class extends dataSourceMixin(SerializableElement){constructor(){super();this.rows=[]}static get is(){return"msisdn-input"}static get properties(){return{params:{type:Object,value:{}},type:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if((this.e.required||this.required)&&!this.getValue()){return new this.Validation(!1,this.e.name+" is invalid")}return new this.Validation(!0,"valid")}valid(){}invalid(){}dscDataName(){return this.dataName}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{self.loading=!1})}init(pElement,loader){super.init(pElement,loader);this.required=this.e.required||pElement.min&&0<pElement.min;this.params=this.pl.paramsCopy();this.dataName=pElement.defaultValue;this.limit=500;this.loader=this.loadData()}};var msisdnInput={MsisdnInputBase:MsisdnInputBase};const MsisdnInputStyles=css`
.msisdn-container{
  width: 100%;
  border: 1px solid #b7b5b5;
  border-radius: 4px;
}
.msisdn-container.is-danger{
  border: #ff3860 2px solid;
}
.msisdn-container.is-danger input,
.msisdn-container.is-danger p, 
.msisdn-container.is-danger ~ label{
  color: #ff3860;
}
.msisdn-container.is-success{
  border: #23d160 2px solid;
}
.msisdn-container.is-success input,
.msisdn-container.is-success p, 
.msisdn-container.is-success ~ label{
  color: #23d160;
}
.input-left{
  width: 80px;
}
.country-code{
  cursor: pointer;
  min-height: 100%;
}
.country-code p{
  position: relative;
  left: 29%;
  top: 10px;
  color: rgb(1, 50, 67);
  letter-spacing: 0.5px;
  pointer-events: none;
  transition: all 0.3s ease 0s;
}

.input-right:before{
  content: '';
  background-color: #b7b5b5;
  width: 1px;
  height: 30px;
  position: absolute;
  top: 5px;
  z-index: 1;
}
.input-right{
  width: 95%;
  position: relative;
}
.input-right input{
  width: 100%;
  border: 0 solid transparent;
  padding: 13px 15px;
}
.input-right input:focus{
  outline: 0;
}
.input-right input ~ label.input-label{
  position: absolute;
  left: 11px;
  top: 8px;
  width: 100%;
  color: rgb(1, 50, 67);
  letter-spacing: 0.5px;
  pointer-events: none;
  transition: all 0.3s ease 0s;
}
// .icon{
//   top: 5px!important;
// }

#danger-icon {
  visibility: hidden;
  margin-top: 8px;
}

#check-icon {
  visibility: hidden;
  margin-top: 8px;
}
#warning-text {
  display: none;
}
.form_lists{
  display: none;
  position: absolute;
  /*padding: 0 20px;*/
  background-color: #fff;
  width: 200px;
  max-height: 350px;
  overflow: scroll;
  z-index: 1000;
  border: 1px solid #b7b5b5;
  border-radius: 4px;
  margin-top: 10px;
}
.form__list{
  padding: 5px 10px;
  cursor: pointer;
}
.form__list:hover{
  background-color: var(--app-default-color);
  color: #fff;
}
.lbl.is-success{
  color: #23d160!important;
}
.lbl.is-danger{
  color: #ff3860!important;
}
`;var msisdnInputCss={MsisdnInputStyles:MsisdnInputStyles};class MsisdnInput extends MsisdnInputBase{static get styles(){return[MsisdnInputStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
      <div class="column is-block is-marginless">
        <div class="msisdn-container is-flex">
          <div class="input-left">
            <div class="country-code" @click=${this.codeList}>
              <p>+254</p>
            </div>
          </div>
          <div class="input-right">
            <div class="msisdn-input field">
              <div class="input-container control has-icons-right">
                <input pattern="[^0-9]+" @keydown=${this.filterNumericInput} type="text" id="input" name="${this.e.name}" class="form-input" required="${this.required}" aria-required="true" aria-describedby="gentle_0" minlength="${this.e.min}" maxlength="${this.e.max}" @focusin=${this.stickyLabel} @focusout =${this.labelReset}>
                <label class="input-label lbl" id="label">${this.e.name}</label>

                <span id="danger-icon" class="icon is-small is-right">
                  <fa-icon
                    class="fas fa-exclamation-triangle icon"
                    size="1em"
                    color="#ff3860"
                  ></fa-icon>
                </span>
                <span id="check-icon" class="icon is-small is-right">
                  <fa-icon
                    class="fas fa-check"
                    size="1em"
                    color="#23d160"
                  ></fa-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
        <p class="help" id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
        <div class="form_lists" id="code_list">
          <ul id="code">
            ${this.loading?html`<loader-element></loader-element>`:html`${this.rows.map(row=>html`<li class="form__list" id="list" @click="${()=>this.codeSelected(row[0])}" ?selected="${"254"===row[0]}">${row[1]} +${row[0]}</li>`)}`}
          </ul>
        </div>
      </div>
        `}constructor(){super();this.countryCode="+254"}static get properties(){return{countryCode:String}}codeList(){const selectBubble=this.shadowRoot.getElementById("code_list");selectBubble.classList.toggle("is-block")}codeSelected(id){const codesContainer=this.shadowRoot.querySelector(".form_lists"),countryCode=this.shadowRoot.querySelector(".country-code p");countryCode.textContent="+"+id;this.countryCode=countryCode.textContent;codesContainer.classList.remove("is-block")}filterNumericInput(e){const key=e.key||e.code;if(1>=e.key.length&&!(e.metaKey||e.ctrlKey||e.altKey)){if(!("0"<=key&&"9">=key||"."===key||","===key||"-"===key||" "===key)){if(e.preventDefault){e.preventDefault()}else{e.returnValue=!1}}}}getValue(){const numberInput=this.shadowRoot.querySelector("#input");if(numberInput.value){return this.countryCode+numberInput.value}}valid(){const lbl=this.shadowRoot.querySelector("#label"),input=this.shadowRoot.querySelector(".msisdn-container"),dangerIcon=this.shadowRoot.querySelector("#danger-icon"),checkIcon=this.shadowRoot.querySelector("#check-icon"),warningText=this.shadowRoot.querySelector("#warning-text");input.classList.remove("is-danger");lbl.classList.remove("is-danger");input.classList.add("is-success");lbl.classList.add("is-success");warningText.style.display="none";dangerIcon.style.visibility="hidden";checkIcon.style.visibility="visible"}invalid(validation){const input=this.shadowRoot.querySelector(".msisdn-container"),lbl=this.shadowRoot.querySelector("#label"),dangerIcon=this.shadowRoot.querySelector("#danger-icon"),checkIcon=this.shadowRoot.querySelector("#check-icon"),warningText=this.shadowRoot.querySelector("#warning-text");warningText.style.display="block";input.classList.remove("is-success");lbl.classList.remove("is-success");input.classList.add("is-danger");lbl.classList.add("is-danger");dangerIcon.style.visibility="visible";checkIcon.style.visibility="hidden";if(validation){this.shadowRoot.querySelector("#warning-text").textContent=validation}}stickyLabel(){const label=this.shadowRoot.querySelector("#label");label.style.top=-25+"px";label.style.left=-6+"%";label.style.fontSize=12+"px";label.style.fontWeight=700}labelReset(){const label=this.shadowRoot.querySelector("#label"),input=this.shadowRoot.querySelector("#input");if(""==input.value){label.style.top=8+"px";label.style.left=11+"px";label.style.fontSize="inherit";label.style.fontWeight="inherit"}}}customElements.define(MsisdnInput.is,MsisdnInput);export{msisdnInput as $msisdnInput,msisdnInputCss as $msisdnInputCss,MsisdnInputBase,MsisdnInputStyles};