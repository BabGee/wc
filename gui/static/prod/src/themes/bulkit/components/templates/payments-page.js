/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../form-render.js';
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/social-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/communication-icons.js";
import '../snack-bar.js';
import '../../icons/payments-icons.js';
import { LANDING_STYLES } from "../../styles/landing-style.js";
import { SHOP_STYLES } from "../../styles/shop-styles.js";
import { BULMA_STYLES } from "../../styles/bulma-styles.js";
import { PaymentsPageBase } from "../../../../components/templates/payments-page.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class PaymentsPage extends PaymentsPageBase {
  render() {
    // console.log(title,pages,tab);
    if (!this.interface) {
      return html`<div>Cannot render an UNDEFINED tab!!.</div>`;
    } else if (!this.pageGroup || !this.page) {
      return html`
      <h3> this is a missing page </h3>
      <a href="/#/0/0/">Go Home</a>
      `;
    }

    return html`
        
    ${BULMA_STYLES} 
    ${LANDING_STYLES} 
    ${SHOP_STYLES}
 <style>
 .tab-icon{
 position: relative;
    border-radius: 10px;
    border: 2px solid #fff;
    font-weight: 600;
    color: #fff;
    overflow: visible;
    padding: 40px;
    cursor: pointer;
    transition: all .3s;
     text-align: center;
     background-color: #0a0a0a59;
 }
 .tab-icon:hover {
    border-color: #fff;
        background: #fff;
        color: #000;
}
.tab-icon.is-active {
    border-color: #0023ff;
    background: #fff;
       color: #000;
}
.tab-icon.is-active iron-icon {
    fill: #000;
}
.tab-icon iron-icon {
     height: 100px;
    width: 100px;
    fill: #fff;
}
.tab-icon iron-icon:hover {
    fill: #2c3e50;
}
.tab-icon:hover iron-icon {
    fill: #2c3e50;
}

.parent-link{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.card {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 16px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
       background: #EFF4F7;
}
</style>

    <div class="login-wrapper columns is-gapless">
        <div class="column is-12">
            <div class="hero">
               <div class="hero hero-waves-dark is-relative is-light-grey">
                    <div class="navbar-wrapper navbar-fade">
                         <div class="hero-head">
                              <!-- Nav -->
                              <div class="container">
                                    <nav class="nav">
                                        <div class="container">
                                            <div class="nav-item nav-icon logout-button is-hidden-desktop is-hidden-tablet">
                                            <iron-icon icon="icons:arrow-back"
                                                    style="color: white; width: 32px; height: 32px;"
                                                    @click="${this._viewList}"></iron-icon>
                                            </div>
                                            <div class="nav-left">
                                                <a class="nav-item" href="/">
                                                    <img alt="logo" src="/media/${this.gateway.logo}">
                                                </a>
                                            </div>
                                      
                                        </div>
                                    </nav>
                                </div>
                              <!-- /Nav -->
                         </div>
                    </div>
               </div>
              
            </div>
                    
            <div id="hero" class="column is-12  is-hidden-desktop is-hidden-tablet">
                <h1 style="margin-left: 15px;">SELECT PAYMENT METHOD</h1>
                <ul class="user-list">
                 ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                    ${pageGroup.pages.map((tab, tabIndex) => html`
                        <li class="card">       
                            <a class="parent-link"   @click="${this._closeChildMenu}" href="${this._changeLink(pageGroupIndex, tabIndex)}">           
                                <div class="user-list-avatar">
                                    <i> <iron-icon icon="${tab.icon || 'icons:announcement'}"></iron-icon></i>
                                </div>
                                <div class="user-list-info">
                                    <div class="name">${tab.title}</div>
                                    <div class="position">Make your payments through ${tab.title}</div>
                                </div>
                                <div class="user-list-status is-online"></div>
                            </a>
                        </li>
                    `)}
               `)}
                </ul>
            </div>
                            
            <div id="pay" class="section is-hidden-mobile">
                <div class="container">
                    <div class="columns account-header">
                        <div class="column is-12  is-tablet-landscape-padded">
                            <div id="cash" class="animated preFadeInUp fadeInUp">
                                <div class="flat-card is-auto is-checkout-form" style="border-radius: 16px;">
                                    <div class="tabs is-centered is-hidden-mobile" style="margin-bottom: 0px;background-color: var(--app-default-color);">
                                        <ul>
                                        ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                                            ${pageGroup.pages.map((tab, tabIndex) => html`     
                                                 <li id="tab_${tabIndex}"  class="has-text-centered" style="padding-top:18px">
                                                     <a href="${this._changeLink(pageGroupIndex, tabIndex)}">
                                                        <i> <iron-icon icon="${tab.icon || 'icons:announcement'}" style="color:#fff"></iron-icon></i>&nbsp;&nbsp;${tab.title}
                                                     </a>
                                                 </li>
                                           `)}
                                        `)}
                                        </ul>
                                    </div>
                                    <div class="columns is-gapless ">
                                    ${this.page.pageInputGroups.map((feed, feedIndex) => html`
                                        <!-- Order Total -->
                                        <div class="column is-6">
                                            <div>
                                            <h3 style="text-align: center; font-size: 18px">${feed.title}</h3>
                                            <form-render .feed="${feed}" .params=${this.parseParams()}></form-render>
                                            </div>
                                        </div>
                                     `)}    
                                    </div>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="level centered-level">
                <p class="level-item has-text-centered">
                   <img alt="Credit Card Logos" title="Credit Card Logos" src="images/payments/mpesa.png" width="64" height="41" border="0" />
                </p>
                <p class="level-item has-text-centered">
                      <img alt="Credit Card Logos" title="Credit Card Logos" src="images/payments/airtel.png" width="64" height="41" border="0" />
                </p>
                <p class="level-item has-text-centered">
                  <img src="https://www.merchantequip.com/image/?logos=v|m|a|d|jcb|me|msc&height=64" alt="Merchant Equipment Store Credit Card Logos"/>
                </p>
                <p class="level-item has-text-centered">
                     <img alt="Credit Card Logos" title="Credit Card Logos" src="images/payments/mipay.png" width="64" height="41" border="0" />
                </p>
                <p class="level-item has-text-centered">
                      <img alt="Credit Card Logos" title="Credit Card Logos" src="images/payments/eazzypay.png" width="64" height="41" border="0" />
                </p>
            </nav>
        </div>
</div>
<snack-bar id="snack-bar" ?active="${this._snackbarOpened}">${this._snackbarMessage}</snack-bar>
`;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      title: String,
      view: String,
      tagline: String,
      logo: String,
      pages: Array,
      tab: Object,
      profile: {
        type: Object
      },
      page: Object
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // if only one page exists, activate it's first tab

    if (this.interface.pageGroups.length === 1) {
      this._closeChildMenu();
    }
  }

  _profileTriggerClick(e) {
    const self = this;
    this.qs('.main-menu-avatar, .dot').classList.toggle('vanish');

    if (this.qs('.js-hamburger').classList.contains('is-active')) {
      this.qs('.js-hamburger').classList.remove('is-active');
      document.querySelector('body').classList.remove('is-fixed');
    } else {
      this.qs('.js-hamburger').classList.add('is-active'); // wait 700ms before adding the fixed class to the body to prevent unpleasant effects

      setTimeout(function () {
        document.querySelector('body').classList.add('is-fixed');
      }, 700);
    }
  }

  _sideIconClick(e) {
    document.querySelector('.tab-icon.is-active').classList.remove('is-active');
    e.currentTarget.classList.add('is-active');
    document.querySelector('.menu-wrapper .icon-box-toggle').classList.add('active'); // this.shadowRoot.querySelector('.child-menu').classList.add('is-sidebar-translated');

    this.qsa('.dashboard-nav, #dashboard-wrapper').forEach(function (el) {
      el.classList.add('is-pushed');
    }); // disable reader mode switch when sidebar is opened

    document.querySelector('.reader-switch label').classList.add('is-disabled');

    this._dataChildMenuSetup(e);
  }

  _closeChildMenu(e) {
    document.querySelector('#hero').style.display = 'none';
    document.querySelector('#pay').style.display = 'unset';
    document.querySelector('#pay').classList.remove('is-hidden-mobile');

    this._menuWrapperClick(e);
  }

  _viewList(evt) {
    document.querySelector('#hero').style.display = 'block';
    document.querySelector('#pay').style.display = 'none';
    document.querySelector('#pay').classList.add('is-hidden-mobile');
  }

  _menuWrapperClick(e) {
    /*
        this.qs('.child-menu').classList.toggle('is-sidebar-translated');
        this.qsa('.dashboard-nav, #dashboard-wrapper').forEach(function (el) {
            el.classList.toggle('is-pushed');
        });
         //enable reader mode switch when sidebar is closed
        this.qs('.reader-switch label').classList.remove('is-disabled');
         */
  }

  _iconBoxToggle(e) {
    e.currentTarget.classList.toggle('active');
    e.preventDefault();
  }

  _dataChildMenuSetup(e) {
    const menuId = e.currentTarget['data-child-menu'];
    const menuTitle = e.currentTarget['data-title'];
    this.qsa('.sidebar-menu.is-active').forEach(function (el) {
      el.classList.remove('is-active');
    });
    this.qs('#' + menuId).classList.add('is-active');
    this.qs('.sidebar-title').textContent = menuTitle;
  }

  stateChanged(state) {
    super.stateChanged(state);
  }

  _changeLink(pageGroupIndex, tabIndex) {
    var url = window.location.pathname + window.location.search + '#/' + pageGroupIndex + '/' + tabIndex + '/'; //   console.log('Link '+url);
    // console.log('param '+this.getParams(window.location.search.substr(1)));
    // this.qs('.has-text-centered').classList.remove('is-active');
    //     e.currentTarget.classList.add('is-active');

    return url;
  }

}

window.customElements.define('payments-page', PaymentsPage);