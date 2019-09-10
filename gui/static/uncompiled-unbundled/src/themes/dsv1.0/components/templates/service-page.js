/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { css, html } from "../../../../../node_modules/lit-element/lit-element.js";
import "./section-page.js"; // todo move into base

import '../form-render.js';
import '../snack-bar.js';
import { ServicePageBase } from "../../../../components/templates/service-page.js";
import { Colors, Fonts, Reset } from "../../styles/shared.js";
import { ServiceStyles } from "../../styles/service.js";
import { VIEW_MODE_DIALOG, VIEW_MODE_MAIN } from "../../../../components/templates/page-view-element.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/editor-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/communication-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/notification-icons.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class ServicePage extends ServicePageBase {
  render() {
    if (!this.interface) {
      return html`<div>Cannot render an UNDEFINED tab!!.</div>`;
    }

    return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            
            <style>
            ${ServiceStyles}
            </style>
            
            ${this.view === VIEW_MODE_DIALOG ? html`
                <iron-icon icon="icons:arrow-back"style="color: white" @click="${this._viewList}"></iron-icon>
                <section-page id="dialog" queue=${this.dialogServicesQueue}></section-page>
            ` : html`
            <style>
            ${ServiceStyles}
            </style>
            
 <div class="main">
    <div class="columns" style="height: 100vh;margin: 0;">
      <div class="column is-narrow is-hidden-mobile"
        style="background-color: var(--app-default-color);padding-top:0;">
        <nav class="navbar" role="navigation" aria-label="main navigation" style="background: transparent;">
          <div class="navbar-brand">

            <a class="navbar-item" href="/">
              <img src="${this._computeLogo(this.gateway)}"
                alt="Logo" width="112" height="28">
            </a>

          </div>
        </nav>
        <aside class="menu">

          <ul class="menu-list">
          ${this.interface.pageGroups.map((pageGroup, pageGroupIndex) => html`
          <li>
            <a class="${pageGroupIndex == this._pageGroup ? 'is-active' : ''}">${ServicePageBase.toTitleCase(pageGroup.title)}</a>
            <ul>
            ${pageGroup.pages.map((page, pageIndex) => html`
                <li><a class="${pageGroupIndex == this._pageGroup && pageIndex == this._page ? 'is-active' : ''}" href="${window.location.pathname + window.location.search}#/${pageGroupIndex}/${pageIndex}/">${ServicePageBase.toTitleCase(page.title)}</a></li>
              `)}
            </ul>

          </li>
          `)}

          </ul>

        </aside>
      </div>

      <div class="column is-main-content" style="padding: 0;">
        <nav class="navbar" style="background-color: #f6f6f9;">
          <div class="navbar-brand">

          </div>

          <div id="navMenubd-example" class="navbar-menu">
            <div class="navbar-start">
            </div>
            ${this.gateway.profile ? html`
            <div class="navbar-end" style="padding-right: 35px;">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link " href="#">
                  ${this.gateway.profile.firstName} ${this.gateway.profile.lastName}
                </a>
                <div id="blogDropdown" class="navbar-dropdown is-right" data-style="width: 18rem;">

                  <a class="navbar-item" href="#">
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">Username</small>
                      </p>
                      <p>${this.gateway.profile.username}</p>
                    </div>
                  </a>

                  <hr class="navbar-divider">
                  <div class="navbar-item">
                    <div class="navbar-content">
                      <div class="level is-mobile">
                        <div class="level-left">
                          <div class="level-item">
                            <strong>${this.gateway.profile.role}</strong>
                          </div>
                        </div>
                        <div class="level-right">
                          <div class="level-item">
                            <a class="button bd-is-rss is-small" href="#">
                              <span class="icon is-small">
                                <i class="fa fa-rss"></i>
                              </span>
                              <span @click="${this.logout}" >Logout</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ` : html``}
          </div>
        </nav>

        <main style="padding:20px;max-height: calc(100vh - 52px); overflow-y: auto;">

          <div class="columns is-multiline">


          ${this.page.pageInputGroups.map((feed, feedIndex) => html`
              
           <div class="column is-12">
          <form-render .feed="${feed}" .params=${this.parseParams()}></form-render>
          </div>`)}
          </div>
        </main>
      </div>
    </div>
  </div>
  </div> `}
     `;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      pages: Array,
      tab: Object,
      profile: {
        type: Object,
        value: ''
      },
      page: Number
    };
  }

  static get styles() {
    console.log('getStyles called');
    return [Colors, Fonts, ServiceStyles, css`:host { display: block; }`];
  }
  /**
     * Dialogs Back navigation, Pop dialogs' stack
     *
     * @param evt
     * @private
     */


  _viewList(evt) {
    this.mainNavigation();
  }

  firstUpdated(changedProperties) {}

}

window.customElements.define('service-page', ServicePage);