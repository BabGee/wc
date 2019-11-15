import { Command } from "../parsers/commands/command.js";
import { currentPageGroupSelector, currentPageSelector, gatewaySelector, interfaceSelector } from "../../reducers/template.js";
import { connect } from "../../../node_modules/pwa-helpers/connect-mixin.js";
import { store } from "../../store.js";
export const adaptiveUiMixin = BaseClass => class extends connect(store)(BaseClass) {
  constructor() {
    super();
  }

  static get properties() {
    return {
      /**
       * main|dialog
       */
      view: String,
      _pageGroup: Number,
      _page: Number,

      /**
       * GetSection || GetInterface
       */
      interface: Command,

      /**
       * GetGatewayDetails || GetInstitutionDetails
       */
      gateway: Command,

      /**
       * Snackbar
       */
      _snackbarOpened: Boolean,
      _snackbarTitle: String,
      _snackbarContext: String,

      /**
       * App is offline
       */
      _offline: Boolean
    };
  }
  /**
   * Called every time something is updated in the store.
   * @param state
   */


  stateChanged(state) {
    this._pageGroup = state.template.pageGroup;
    this._page = state.template.page;
    this.view = state.template.view;
    this.interface = interfaceSelector(state);
    this.gateway = gatewaySelector(state);
    this.pageGroup = currentPageGroupSelector(state);
    this.page = currentPageSelector(state);
    this._snackbarOpened = state.app.snackbarOpened;
    this._snackbarMessage = state.app.snackbarMessage;
    this._snackbarTitle = state.app.snackbarTitle;
    this._snackbarContext = state.app.snackbarContext;
    this._offline = state.app.offline;
  }

};