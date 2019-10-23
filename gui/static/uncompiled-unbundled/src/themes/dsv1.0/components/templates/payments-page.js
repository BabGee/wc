/* eslint-disable indent */

/* eslint-disable no-unused-vars */

/* eslint-disable one-var */

/* eslint-disable no-undef */

/* eslint-disable prefer-const */

/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { html } from "../../../../../node_modules/lit-element/lit-element.js"; // import './section-page';

import '../snack-bar.js';
import "../form-render.js";
import { PaymentsPageBase } from "../../../../components/templates/payments-page.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class PaymentsPage extends PaymentsPageBase {
  render() {
    if (!this.interface) {
      return html`<div>Cannot render an UNDEFINED tab!!.</div>`;
    }

    return html`
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
      <style>
        :root{
        --is-white: #fff;
        --bg: #f5f8fb;
        --title-color: #4c6072;
        --helper-text: #333333;
        --graph-orange: #ff8a65;
        --graph-blue: #b2e4fa;
        --graph-grey: #dfeec0;
        --base-card-color: #f6f6f6;
        --is-info: #2f75ec;
        }
        .pay-frame{
            margin: 30px 0;
        }
        div.info{
            margin-top: 25px;
            margin-left: 4px;
        }
        div.base-card{
            width: 100%;
            /* height: 595px; */
            border-radius: 6px!important;
            box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.03);
            border: solid 1px #e5e5e5;
            background: var(--base-card-color)!important;
        }
        .frame-bg{
            color: #8db7ff!important;
            background: #2f75ec;
            padding: 15px 0!important;
            position: relative;
            font-size: 15px;
        }
        .frame-bg, .tabs.is-boxed a{
            border-radius: 0px!important;
        }
        .tabs.is-boxed a:hover, .tabs.is-boxed a:active{
            background-color: whitesmoke!important;
            color: #2f75ec!important;
        }
        .frame-bg.is-active{
          background-color: whitesmoke!important;
          color: #2f75ec!important;
        }
        .frame-bg::after{
            content: '';
            position: absolute;
            width: 1px;
            height: 35px;    
            background: #e4e0e6;
            left: 0px;
        }
        .frame-bg a:hover:active{
            content: '';
            position: absolute;
            width: 1px;
            height: 35px;
            background: transparent;
            left: 0px;
        }
        .frame-bg:nth-child(6)::after{
            background: transparent!important;
        }
        .tabs ul{
            border-bottom: 0 solid transparent!important;
        }
        .column.column-right{
            border-left: 1px solid #dcd0ff;
        }
        .column .column-title{
            border-bottom: 1px solid #dcd0ff;
            padding-bottom: 8.5px; 
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 30px;
        }
        .pay-input{
            width: 449px!important;
            border-radius: 6px!important;
            box-shadow: 0 0 0 transparent!important;
            padding: 18px!important;
        }
        .tab-brand{
            margin-bottom: 41px;
        }
        .tab-width{
            width: 50%;
        }
        .tab-right .tab-link, .tab-content-left .ref{
            font-size: 12px;
            font-weight: bold;
        }

        .tab-right-bottom{
            width: 72%;
            position: absolute;
            bottom: 0;
            /* padding: 30px; */
            margin-top: 100px;
        }
        .btn{
            width: 140px;
            height: 45px;
            letter-spacing: 2.5px;
            font-weight: 500;
            border: none;
            transition: all 0.3s ease 0s;
            cursor: pointer;
            outline: none;
            /* margin-left: 20px; */
            border-radius: 5px!important;
            border: 0 solid transparent!important;
            font-size: 13px!important;
            /* padding: .5em 1.5em!important */
        }
        .btn:focus{
            outline: none!important;
        }
        .trans{
            background: transparent!important;
        }
        .submit{
            background-color: #2f75ec!important;
            color: #fff!important;
        }


        /* Helper classes */
        .center, .center-column, .top, .right, .bottom, .left {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ul{
          list-style: none!important;
        }
        .center-column {
            flex-direction: column;
        }
        .card-padding{
          padding: 0 15px;
        }
        .top    { align-items:     flex-start; }
        .right  { justify-content: flex-end;   }
        .bottom { align-items:     flex-end;   }
        .left   { justify-content: flex-start; }

        .single-spaced, .single-spaced * {
            line-height: 1;
        }
        .is-regular{
          font-size: 14px;
        }
        .is-regular-4{
          font-size: 13px!important;
        }
        .input-text{
          font-size: 14px!important;
          padding: 15px!important;
        }
        .is-borderless{
          border: 0 solid transparent!important;
        }
        .cols .column:last-child{
          border-left: 1px solid #dcd0ff;
        }
        
      </style>

    <div class="main-wrapper">
        <div class="container">                            
            <div id="pay" class="base-card pay-frame">
              <header class="header card-head is-marginless">
                  <nav class="tabs is-boxed is-fullwidth" style="overflow: auto; overflow-y:hidden;">
                      <div class="container">
                          <ul>
                          ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
                              ${pageGroup.pages.map((tab, tabIndex) => html`     
                              <li id="tab_${tabIndex}"  class="tab is-marginless has-text-weight-bold">
                                  <a 
                                style="background-color: #2f75ec; border: 0;" 
                                href="${this._changeLink(pageGroupIndex, tabIndex)}" 
                                class="frame-bg ${pageGroupIndex == this._pageGroup && tabIndex == this._page ? 'is-active' : ''}">${tab.title}</a>
                              </li>
                              `)}
                          `)}
                          </ul>
                      </div>
                  </nav>
              </header>
                <div class="content section">
                  <div class="content-tab">
                  <div class="columns is-multiline cols">
                  ${this.page.pageInputGroups.map((feed, feedIndex) => html`
                    <div class="column ${this._gridClasses(feed)}" >
                      <form-render .feed="${feed}" .params=${this.parseParams()}></form-render>
                  `)}
                  </div> 
                  </div>
                </div>
            </div>
        </div>
    </div>
    <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar>
    `;
  }

  constructor() {
    super(); // this.title = [1]._title;
    // console.log(this.page.pageInputGroups);
  }

  static get properties() {
    return {
      title: String,
      tagline: String,
      logo: String,
      pages: Array,
      tab: Object,
      oe: Array,
      profile: {
        type: Object,
        value: ''
      }
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
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
    this.shadowRoot.querySelector('.tab-icon.is-active').classList.remove('is-active');
    e.currentTarget.classList.add('is-active');
    this.shadowRoot.querySelector('.menu-wrapper .icon-box-toggle').classList.add('active'); // this.shadowRoot.querySelector('.child-menu').classList.add('is-sidebar-translated');

    this.qsa('.dashboard-nav, #dashboard-wrapper').forEach(function (el) {
      el.classList.add('is-pushed');
    }); // disable reader mode switch when sidebar is opened

    this.shadowRoot.querySelector('.reader-switch label').classList.add('is-disabled');

    this._dataChildMenuSetup(e);
  }

  _viewList(evt) {
    this.shadowRoot.querySelector('#hero').style.display = 'block';
    this.shadowRoot.querySelector('#pay').style.display = 'none';
    this.shadowRoot.querySelector('#pay').classList.add('is-hidden-mobile');
  }

  _gridClasses(pageInputGroup) {
    const grid = super._gridClasses(pageInputGroup);

    const grids = grid.split('|');

    try {
      return `is-${Math.floor(Number(grids[0] / 2))}`;
    } catch (e) {
      return 'is-12';
    }
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