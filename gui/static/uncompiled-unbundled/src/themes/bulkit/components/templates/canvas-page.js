/**
 @license
 Copyright (c) 2018 InterIntel. All rights reserved.
 */
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/social-icons.js";
import "../../../../../node_modules/@polymer/iron-icons/communication-icons.js";
import '../snack-bar.js';
import { BULMA_STYLES } from "../../styles/bulma-styles.js";
import { LANDING_STYLES } from "../../styles/landing-style.js";
import '../form-render.js';
import "./section-page.js"; // todo move into base

import { VIEW_MODE_DIALOG, VIEW_MODE_MAIN } from "../../../../components/templates/page-view-element.js";
import { CanvasPageBase } from "../../../../components/templates/canvas-page.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class CanvasPage extends CanvasPageBase {
  render() {
    // todo implement 404 tab to all pages
    if (!this.interface) {
      return html`
      ${BULMA_STYLES}            
        ${LANDING_STYLES} 
        <div class="Wallop Wallop--fade">
                <div class="Wallop-list">
                    <!-- Slide -->
                    <div class="Wallop-item  has-background-image" >

                    <div id="main-hero" class="hero-body pt-80 pb-80">
                <div class="container has-text-centered">
                    <div class="columns is-vcentered">
                        <div class="column is-12 has-text-centered">
                         <img class="main-menu-avatar" src="images/web/thinking-emoji.png" alt="">
                            <h1 class="title main-title is-4 dark-text" style="font-size: 56px;font-weight: 300;">
                                Oops!
                            </h1>
                            <h2 class="subtitle is-4 dark-text pt-10 pb-10">
                            We can't seem to find the page you are looking for <br>
                                Cannot render an UNDEFINED tab.
                            </h2>
                            <br>
                                    <div class="action">
                                                    <a href="/" class="button button-cta primary-btn rounded" style="font-size: 28px; font-weight: 500;">Go Back Home</a>
                                                </div>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
`;
    } else if (!this.pageGroup || !this.page) {
      return html`
      <h3> this is a missing page </h3>
      <a href="/#/0/0/">Go Home</a>
      `;
    }

    return html`
        ${BULMA_STYLES}            
        ${LANDING_STYLES} 
        
        <style>
        elements-list{
        width:100%;
        }
    
</style>                

 ${this.view === VIEW_MODE_DIALOG ? html`
                        <!-- Section Back button -->
                       <button class="menu-fab" @click="${this._viewList}"><iron-icon icon="icons:close"></iron-icon></button>
                    <!-- /Section Back button -->
                    ` : html``}

        
        ${this.view === VIEW_MODE_DIALOG ? html`
                                <section-page id="dialog" queue=${this.dialogServicesQueue} ></section-page>
                            ` : html`
        
        ${this.pageGroup.pages.map((page, index) => html`        
${page.pageInputGroups.map(feed => html`<form-render .params=${this.parseParams()} .top=${this._computeTop()} .feed="${feed}"></form-render>`)}

`)} 
`}<snack-bar id="snack-bar" ?active="${this._snackbarOpened}">${this._snackbarMessage}</snack-bar>`;
  }

  constructor() {
    super();
  }

  scrollPage(evt) {
    const index = evt.currentTarget.pageIndex; // var elementToFocus = document.getElementById(window.location.hash.slice(1));
    //   var elementToFocus = document.getElementById("#section_1");

    var elementToFocus = this.shadowRoot.querySelector('#section_' + index);

    if (elementToFocus) {
      //  elementToFocus.scrollIntoView(true);
      elementToFocus.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      }); //   console.log("Scroll");
    }
  } // todo deperecated, left for reference


  static get properties() {
    return {
      title: String,
      name: String,
      logo: String,
      view: String,
      defaultColor: String,
      pages: Array,
      tab: Object,
      group: Object,
      toggle: Boolean
    };
  }

  toggleNav() {
    if (this.toggle) {
      this.qs('.navbar-wrapper').classList.remove('navbar-light');
      this.qs('.navbar-wrapper').classList.remove('mobile-menu-dark');
      this.qs('.nav-toggle').classList.remove('is-active');
      this.qs('.nav-right').classList.remove('is-active');
      this.toggle = false;
    } else {
      this.qs('.navbar-wrapper').classList.add('navbar-light');
      this.qs('.navbar-wrapper').classList.add('mobile-menu-dark');
      this.qs('.nav-toggle').classList.add('is-active');
      this.qs('.nav-right').classList.add('is-active');
      this.toggle = true;
    }
  }

  stateChanged(state) {
    super.stateChanged(state);
  }
  /**
     * Dialogs Back navigation, Pop dialogs' stack
     *
     * @param evt
     * @private
     */


  _viewList(evt) {
    if (!this.dialogsStack.length) {
      this.view = 'list';
      this.updateLocationHash();
    } else {
      const args = this.dialogsStack.pop();
      console.log(args);
      const dialog = this.qs('#dialog');
      dialog.payload = args[0];
      dialog.params = args[1];
      dialog.loading = false;
    }
  }

}

window.customElements.define('canvas-page', CanvasPage);