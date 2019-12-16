import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../icons/my-icons.js";import"./ussd-simulator/phone.js";import{UssdSimulatorBase}from"../../../../elements/base/ussd-simulator.js";class UssdSimulator extends UssdSimulatorBase{constructor(props){super(props);this.msisdn="";this.state=0}static get properties(){return{msisdn:String,state:Number}}renderDefault(){let page;if(0===this.state){page=html`
              <input type="text" placeholder="Enter Phone" id="phone"> 
              <button @click=${this._init}>Start</button>
            `}else if(1===this.state){page=html`
            <!--<ussd-simulator-display></ussd-simulator-display>-->
            <!--code dial-->
            <!--<ussd-simulator-keypad></ussd-simulator-keypad>-->
            <nexus-4 .el=${this} msisdn=${this.msisdn}></nexus-4>
            `}else{page=html``}return html`
        <div style="margin-top: 40px;margin-left: auto;margin-right: auto;">
        
        ${page}       
        </div>
        `}_init(){var phone=this.shadowRoot.querySelector("#phone");let msisdn=phone.value;if(msisdn.startsWith("+")){msisdn=msisdn.substring(1)}else if(msisdn.startsWith("0")){msisdn="254"+msisdn.substring(1)}this.msisdn=msisdn;this.state=1}serialize(obj){const str="?"+Object.keys(obj).reduce(function(a,k){a.push(k+"="+encodeURIComponent(obj[k]));return a},[]).join("&");return str}}window.customElements.define(UssdSimulator.is,UssdSimulator);