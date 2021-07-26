import { LitElement, html } from "../../../../../../node_modules/lit-element/lit-element.js";
import "./simulator-preview.js";
import { CONNECTION_END, CONNECTION_BEG, CONNECTION_CON } from "./simulator-preview.js";
import { Logger } from "../../../../../core/logger.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class Nexus4 extends LitElement {
  constructor(props) {
    super(props);
    this.isLoading = false;
    this.state = 0;
    this.ussdString = ''; // generate a random string of X chars

    this.session = '';
    this.sessionState = CONNECTION_BEG;
  }

  static get properties() {
    return {
      session: String,
      msisdn: String,
      serviceCode: String,
      ussdString: String,
      sessionState: String,
      isLoading: Boolean,
      dialed: Boolean
    };
  }

  render() {
    return html`
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        ::selection {
            background: transparent;
        }

        :host {
            color: #4196b7;
            font: normal 12px arial, sans-serif;
        }

        .nexus {
            position: relative;
            margin: 10px auto;
            width: 314px;
            height: 600px;
            border-radius: 80px / 40px;
            border-top: 3px solid #222;
            background: #6d6d6b;
            background: -moz-linear-gradient(left, #6d6d6b 0%, #3b3b3c 1%, #979797 3%, #686868 4%, #2e2e2e 100%);
            background: -webkit-gradient(linear, left top, right top, color-stop(0%, #6d6d6b), color-stop(1%, #3b3b3c), color-stop(3%, #979797), color-stop(4%, #686868), color-stop(100%, #2e2e2e));
            background: -webkit-linear-gradient(left, #6d6d6b 0%, #3b3b3c 1%, #979797 3%, #686868 4%, #2e2e2e 100%);
            background: -o-linear-gradient(left, #6d6d6b 0%, #3b3b3c 1%, #979797 3%, #686868 4%, #2e2e2e 100%);
            background: -ms-linear-gradient(left, #6d6d6b 0%, #3b3b3c 1%, #979797 3%, #686868 4%, #2e2e2e 100%);
            background: linear-gradient(to right, #6d6d6b 0%, #3b3b3c 1%, #979797 3%, #686868 4%, #2e2e2e 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6d6d6b', endColorstr='#2e2e2e', GradientType=1);
        }

        .nexus:before {
            position: absolute;
            content: '';
            z-index: -1;
            top: -6px;
            left: 0px;
            background: #babbbb;
            width: 314px;
            height: 78px;
            border-radius: 25% / 45%;
            border-top: 1px solid #444;
        }

        .nexus:after {
            position: absolute;
            content: '';
            z-index: -1;
            bottom: -5px;
            left: 0px;
            background: #babbbb;
            width: 314px;
            height: 78px;
            border-radius: 25% / 45%;
            border-bottom: 2px solid #555;
        }

        .speaker {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 65px;
            height: 5px;
            background: #333;
            left: 50%;
            margin-left: -33px;
            border-radius: 0 0 6px 6px;
            border: 1px solid #474747;
            border-top: 0;
            box-shadow: inset 0 0 1px black;
        }

        .screen {
            position: absolute;
            left: 17px;
            top: 64px;
            width: 282px;
            height: 467px;
            background: white;
        }

        .phone-infos {
            width: 100%;
            height: 17px;
            background: #303030;
        }

        .phone-infos span {
            float: right;
            font-size: 11px;
            margin: 2px 3px;
        }

        .phone-infos .battery {
            width: 8px;
            height: 10px;
            background: #4196b7;
            margin-top: 2px;
            position: relative;
            margin-top: 4px;
        }

        .phone-infos .battery:before {
            width: 4px;
            height: 2px;
            position: absolute;
            left: 2px;
            top: -2px;
            background: #4196b7;
            content: '';
        }

        .phone-infos .gsm {
            position: relative;
            height: 12px;
            margin-right: 10px;
        }

        .phone-infos .gsm b {
            float: left;
            position: absolute;
            bottom: 0;
        }

        .phone-infos .gsm b:before {
            position: absolute;
            content: '';
            top: -3px;
            width: 0;
            height: 0;
            border-bottom: 3px solid #4196b7;
            border-left: 3px solid transparent;
        }

        .phone-infos .gsm .signal1 {
            width: 3px;
            height: 0px;
            background: #4196b7;
            left: -8px;
        }

        .phone-infos .gsm .signal2 {
            width: 3px;
            height: 3px;
            background: #4196b7;
            left: -4px;
        }

        .phone-infos .gsm .signal3 {
            width: 3px;
            height: 7px;
            background: #4196b7;
        }

        .phone-infos .gsm .signal4 {
            width: 3px;
            height: 11px;
            background: #808184;
            left: 4px;
        }

        .phone-infos .gsm .signal4:before {
            border-bottom: 3px solid #808184;
            border-left: 3px solid transparent;
        }

        .phone-tabs {
            border-bottom: 1px solid #858383;
            background: #303030;
            height: 50px;
        }

        .phone-tabs li {
            float: left;
            list-style: none;
            -webkit-transition: all .05s ease-in;
            -moz-transition: all .05s ease-in;
            -o-transition: all .05s ease-in;
            transition: all .05s ease-in;
        }

        .phone-tabs li a {
            -webkit-transition: all .05s ease-in;
            -moz-transition: all .05s ease-in;
            -o-transition: all .05s ease-in;
            transition: all .05s ease-in;
            text-decoration: none;
            background: #303030;
            cursor: pointer;
            height: 40px;
            width: 94px;
            display: block;
            text-align: center;
            position: relative;
            padding-top: 10px;
        }

        .phone-tabs li a:active {
            background: rgba(104, 208, 249, .4);
        }

        .phone-tabs li a:before {
            height: 20px;
            width: 1px;
            background: #858383;
            position: absolute;
            content: '';
            left: 0;
            top: 16px;
        }

        .phone-tabs li:first-child a:before {
            display: none;
        }

        .phone-tabs li.current a:after {
            position: absolute;
            content: '';
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 5px;
            background: #4196b7;
        }

        .phone-tab-contents {
            width: 100%;
            height: 365px;
            position: relative;
            overflow: hidden;
        }

        .phone-tab-contents .tab {
            width: 100%;
            height: 365px;
            position: absolute;
            background: #3f3f3f;
            position: absolute;
            -webkit-transition: all .25s ease-in;
            -moz-transition: all .25s ease-in;
            -o-transition: all .25s ease-in;
            transition: all .25s ease-in;
        }

        .phone-tab-contents .tab.phone {
            left: 0;
            background: #3f3f3f url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAKElEQVQIW2NkQAOO07anMSKLgQT2Z3nOggvCBECKwILIAmBBdAGQIABJuxH63EphJgAAAABJRU5ErkJggg==) repeat;
        }

        .phone-tab-contents .tab.clock {
            left: 282px;
        }

        .phone-tab-contents .tab.peoples {
            left: 564px;
        }

        .phone-tab-contents.getclock .tab.phone {
            left: -282px;
        }

        .phone-tab-contents.getclock .tab.clock {
            left: 0px;
        }

        .phone-tab-contents.getclock .tab.peoples {
            left: 282px;
        }

        .phone-tab-contents.getpeoples .tab.phone {
            left: -564px;
        }

        .phone-tab-contents.getpeoples .tab.clock {
            left: -282px;
        }

        .phone-tab-contents.getpeoples .tab.peoples {
            left: 0px;
        }

        .phone-tab-contents .tab.clock p:first-child,
        .phone-tab-contents .tab.peoples p:first-child {
            margin-top: 50px;
        }

        .phone-tab-contents .tab.peoples p,
        .phone-tab-contents .tab.clock p {
            width: 90%;
            padding: 10px 5% 0;
            text-align: center;
            color: #bbb;
        }

        .phone-tab-contents .tab.peoples p a,
        .phone-tab-contents .tab.clock p a {
            color: #fff;
        }

        .main-btns {
            width: 100%;
            height: 34px;
            background: #303030;
        }

        .main-btns li {
            list-style: none;
            float: left;
        }

        .main-btns li a {
            width: 30px;
            display: block;
            width: 94px;
            height: 34px;
            text-align: center;
        }

        .number-area {
            color: #fff;
            font-size: 20px;
            text-align: center;
            padding: 20px 0 20px;
            width: 100%;
            overflow: hidden;
            border-bottom: 1px solid #333;
            margin-bottom: 10px;
        }

        .number-area .numbers {
            width: 230px;
            float: left;
            padding: 0 10px;
            height: 14px;
        }

        .number-area .delete-btn {
            float: right;
            margin-right: 10px;
            cursor: pointer;
        }

        .numbers-container {
            overflow: hidden;
        }

        .numbers-container span {
            width: 94px;
            height: 30px;
            float: left;
            font-size: 30px;
            text-indent: 22px;
            position: relative;
            padding: 15px 0;
            cursor: pointer;
        }

        .numbers-container span:active {
            background: rgba(104, 208, 249, .4);
        }

        .numbers-container span em {
            font-size: 12px;
            color: #fff;
            font-style: normal;
            position: absolute;
            left: 22px;
            bottom: 15px;
            padding-bottom: 5px;
        }

        .numbers-container span em.brd:before {
            position: absolute;
            width: 14px;
            height: 2px;
            background: #fff;
            content: '';
            top: 9px;
            left: 24px;
        }

        .numbers-container span em:after {
            width: 35px;
            height: 2px;
            background: #4196b7;
            content: '';
            position: absolute;
            top: 16px;
            left: 22px;
        }

        .numbers-container span.fff {
            color: #fff;
            text-align: center;
        }

        .call-btn {
            width: 100%;
            text-align: center;
            border-top: 1px solid #333;
            padding-top: 10px;
        }

        /* 	Icon Group 	*/
        .icon {
            display: inline-block;
            font-style: normal;
            position: relative;
        }

        .icon.phone {
            background: #fff;
            width: 5px;
            height: 26px;
            -webkit-transform: rotate(145deg);
            -moz-transform: rotate(145deg);
            -o-transform: rotate(145deg);
            transform: rotate(145deg);
            border-radius: 0 6px 6px 0;
            margin-top: 5px;
        }

        .icon.phone:before {
            position: absolute;
            content: '';
            width: 8px;
            height: 9px;
            background: #fff;
            left: -6px;
            bottom: -1px;
            border-radius: 3px 6px 7px 3px;
        }

        .icon.phone:after {
            position: absolute;
            content: '';
            width: 8px;
            height: 9px;
            background: #fff;
            left: -6px;
            top: -1px;
            border-radius: 3px 6px 7px 3px;
        }

        .icon.clock {
            background: #303030;
            width: 22px;
            height: 22px;
            border: 2px solid #fff;
            border-radius: 22px;
            margin-top: 4px;
        }

        .icon.clock:before {
            position: absolute;
            content: '';
            height: 9px;
            width: 2px;
            background: #fff;
            top: 2px;
            left: 10px;
        }

        .icon.clock:after {
            position: absolute;
            content: '';
            height: 9px;
            width: 2px;
            background: #fff;
            top: 9px;
            -webkit-transform: rotate(120deg);
            -o-transform: rotate(120deg);
            -moz-transform: rotate(120deg);
            transform: rotate(120deg);
            left: 14px;
        }

        .icon.peoples {
            background: #fff;
            height: 10px;
            width: 22px;
            border-radius: 12px 12px 0 0;
            margin-top: 20px;
        }

        .icon.peoples:after {
            position: absolute;
            content: '';
            background: #fff;
            width: 14px;
            height: 14px;
            border: 2px solid #303030;
            border-radius: 18px;
            top: -14px;
            left: 2px;
            z-index: 10;
        }

        .icon.peoples:before {
            position: absolute;
            content: '';
            background: #303030;
            width: 10px;
            height: 5px;
            left: 6px;
            top: -5px;
            z-index: 20;
            border-radius: 0 0 15px 15px;
        }

        .icon.close {
            font-size: 12px;
            color: #303030;
            background: #fff;
            width: 14px;
            height: 12px;
            line-height: 12px;
            margin-top: 5px;
        }

        .icon.close:before {
            position: absolute;
            content: '';
            left: -8px;
            width: 0px;
            height: 0px;
            border-style: solid;
            border-width: 6.5px 8px 6.5px 0;
            border-color: transparent #ffffff transparent transparent;
        }

        .icon.home {
            width: 25px;
            height: 8px;
            border: 2px solid #bbbbbb;
            border-top: 0;
            margin-top: 15px;
        }

        .icon.home:after {
            width: 2px;
            height: 17px;
            background: #bbbbbb;
            position: absolute;
            top: -12px;
            left: 5px;
            content: '';
            -webkit-transform: rotate(70deg);
            -moz-transform: rotate(70deg);
            -o-transform: rotate(70deg);
            transform: rotate(70deg);
        }

        .icon.home:before {
            width: 2px;
            height: 17px;
            background: #bbbbbb;
            position: absolute;
            top: -12px;
            right: 5px;
            content: '';
            -webkit-transform: rotate(110deg);
            -moz-transform: rotate(110deg);
            -o-transform: rotate(110deg);
            transform: rotate(110deg);
        }

        .icon.windows {
            width: 20px;
            height: 8px;
            border: 2px solid #bbbbbb;
            margin-top: 13px;
        }

        .icon.windows:after {
            width: 2px;
            height: 14px;
            background: #bbbbbb;
            position: absolute;
            content: '';
            right: -6px;
            top: -6px;
        }

        .icon.windows:before {
            width: 22px;
            height: 2px;
            background: #bbbbbb;
            position: absolute;
            content: '';
            right: -4px;
            top: -6px;
        }

        .icon.back {
            width: 20px;
            height: 2px;
            background: #bbb;
            color: #bbb;
            font-size: 18px;
            line-height: 0px;
            text-indent: -16px;
            font-family: sans-serif;
            margin-top: 12px;
        }

        .icon.back:before {
            width: 7px;
            height: 11px;
            background: #303030;
            position: absolute;
            content: '';
            left: 8px;
            z-index: 10;
            top: 2px;
        }

        .icon.back:after {
            width: 20px;
            height: 7px;
            border: 2px solid #bbb;
            position: absolute;
            content: '';
            border-radius: 10px;
        }


    </style>
    <div> ${this.isLoading ? html`Loading ...` : html``} </div>

        <div class="nexus">
	<div class="speaker"></div>
	<div class="screen">
		<div class="phone-infos">
			<span>03.15</span>
			<span class="battery"></span>
			<span class="gsm">
				<b class="signal1"></b>
				<b class="signal2"></b>
				<b class="signal3"></b>
				<b class="signal4"></b>
			</span>
		</div>
		<ul class="phone-tabs">
			<li class="current">
				<a class="getphone" @click=${this.currentTab} data-t='phone'><i class="icon phone"></i></a>
			</li>
			<li>
				<a class="getclock" @click=${this.currentTab} data-t='clock'><i class="icon clock"></i></a>
			</li>
			<li>
				<a class="getpeoples" @click=${this.currentTab} data-t='people'><i class="icon peoples"></i></a>
			</li>
		</ul>
		<div class="phone-tab-contents">
			<div class="tab phone current">
				<div class="number-area">
					<span id="code" class="numbers"></span>
					<a class="delete-btn" @click=${this.delete}>
					<i class="icon close">x</i>
					</a>
				</div>
				<div class="numbers-container">
					<span @click=${this.pusher} data-v=1 >1<em class="brd">o o</em></span>
					<span @click=${this.pusher} data-v=2>2<em>ABC</em></span>
					<span @click=${this.pusher} data-v=3>3<em>DEF</em></span>
					<span @click=${this.pusher} data-v=4>4<em>GHI</em></span>
					<span @click=${this.pusher} data-v=5>5<em>JKL</em></span>
					<span @click=${this.pusher} data-v=6>6<em>MNO</em></span>
					<span @click=${this.pusher} data-v=7>7<em>PQRS</em></span>
					<span @click=${this.pusher} data-v=8>8<em>TUV</em></span>
					<span @click=${this.pusher} data-v=9>9<em>WXYZ</em></span>
					<span class="fff" @click=${this.pusher} data-v=*>*</span>
					<span @click=${this.pusher} data-v=0>0<em>+</em></span>
					<span class="fff" @click=${this.pusher} data-v=#>#</span>
				</div>
				<div class="call-btn" @click=${this._callCode}>
					<i class="icon phone"></i>
				</div>
			</div>
			<div class="tab clock">
				<p>History</p>
				<p>Under Development</p>
			</div>
			<div class="tab peoples">
				<p>Contacts</p>
				<p>Under Development</p>
			</div>
		</div>
		<ul class="main-btns">
			<li><a><i class="icon back"><</i></a></li>
			<li><a><i class="icon home"></i></a></li>
			<li><a><i class="icon windows"></i></a></li>
		</ul>

    <ussd-simulator-preview ?active=${this.dialed}
            id="preview"
            @submit=${this.handleSubmit} 
            @cancel=${this.handleCancel}></ussd-simulator-preview>
	</div>
        
</div>
    `;
  }
  /*	Pusher	*/


  pusher(evt) {
    var num = evt.currentTarget.dataset['v'];
    const display = this.shadowRoot.querySelector('.number-area .numbers');
    display.innerHTML += '' + num + '';
  }
  /*	Delete */


  delete(evt) {
    const display = this.shadowRoot.querySelector('.number-area .numbers');
    var numbers = display.textContent;
    var numbers2 = numbers.length;
    display.innerHTML = numbers.substr(0, numbers2 - 1);
  }

  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  _callCode() {
    var code = this.shadowRoot.querySelector('#code');
    const codeV = code.textContent; // remove * at begining
    // TODO deprecated, left for reference
    // if (codeV.startsWith('*'))
    // {codeV = codeV.slice(0, 0) + codeV.slice(1, codeV.length);}
    // remove # at end
    // TODO deprecated, left for reference
    // if (codeV.endsWith('#')) {
    //   codeV = codeV.slice(0, codeV.length - 1)
    //     + codeV.slice(codeV.length, codeV.length);
    // }

    this.serviceCode = codeV; // generate session id

    this.session = `EM${this.makeid(8)}`;
    this.makeRequest().then(preview => {
      this.state = 2;
      this.dialed = true;
      return this.updateComplete.then(() => {
        this.displayMenu(preview['PAGE_STRING'], preview['MNO_RESPONSE_SESSION_STATE']);
      });
    });
  }

  makeRequest() {
    var params = {
      'MSISDN': this.msisdn,
      'accessPoint': this.serviceCode,
      'sessionID': this.session,
      'input': this.ussdString,
      'sessionState': this.sessionState
    };
    this.isLoading = true;
    return this.el.makeRequest(params);
  }

  handleSubmit(event) {
    const selection = event.detail['selection'];

    if (this.ussdString) {
      this.ussdString += '*' + selection;
    } else {
      this.ussdString = selection;
    }

    this.makeRequest().then(preview => {
      this.displayMenu(preview['PAGE_STRING'], preview['MNO_RESPONSE_SESSION_STATE']);
    });
  }

  handleCancel(evt) {
    this.dialed = false; // clear preview for next dial

    this.updatePreview('');
  }

  updatePreview(message) {
    const prvw = this.shadowRoot.querySelector('#preview');
    prvw.updateDisplay(message);
  }

  displayMenu(string, sessionState) {
    this.isLoading = false;

    if (sessionState == CONNECTION_END) {
      const prvw = this.shadowRoot.querySelector('#preview');
      this.sessionState = CONNECTION_END;
      prvw.setState(this.sessionState);
    } else if (sessionState == CONNECTION_BEG) {
      this.sessionState = CONNECTION_BEG;
    } else if (sessionState == CONNECTION_CON) {
      this.sessionState = CONNECTION_CON;
    } else {
      Logger.i.warn('Unknown USSD startsWith');
    } // Logger.i.debug(string);


    this.updatePreview(string);
  }
  /*	Current Tab 	*/


  currentTab(evt) {
    var els = this.shadowRoot.querySelectorAll('.phone-tabs li');

    for (let i = 0; i < els.length; ++i) {
      const el = els[i];
      el.classList.remove('current');
    }

    const link = evt.currentTarget; // console.log(link);

    link.parentElement.classList.add('current');
    /*	Simple Tab 	*/

    var tabContents = this.shadowRoot.querySelector('.phone-tab-contents');
    var tab = evt.currentTarget.dataset['t'];

    if (tab == 'phone') {
      tabContents.classList.remove('getpeoples');
      tabContents.classList.remove('getclock');
    } else if (tab == 'clock') {
      tabContents.classList.remove('getpeoples');
      tabContents.classList.add('getclock');
    } else if (tab == 'people') {
      tabContents.classList.remove('getclock');
      tabContents.classList.add('getpeoples');
    }
  }

}

customElements.define('nexus-4', Nexus4);