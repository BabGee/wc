/**
@license
Copyright (c) 2019 InterIntel Technologies. All rights reserved.
*/
import { UPDATE_PAGE_GROUP, UPDATE_PAGE, UPDATE_VIEW } from '../actions/template.js';
import { createSelector } from "../../node_modules/reselect/es/index.js";
const INITIAL_STATE = {
  pageGroup: 0,
  page: 0,
  view: 'main'
};

const template = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PAGE_GROUP:
      return { ...state,
        pageGroup: action.pageGroup
      };

    case UPDATE_PAGE:
      return { ...state,
        page: action.page
      };

    case UPDATE_VIEW:
      return { ...state,
        view: action.view
      };

    default:
      return state;
  }
};

export default template;
export const pageGroupSelector = state => state.app.pageGroup;
export const pageSelector = state => state.app.page;
export const payloadSelector = state => state.app.payload;
export const gatewaySelector = createSelector(payloadSelector, payload => {
  return payload.serviceCommands['get_gateway_details'] || payload.serviceCommands['get_institution_details'];
});
export const interfaceSelector = createSelector(payloadSelector, payload => {
  return payload.serviceCommands['get_interface'] || payload.serviceCommands['get_section'];
});
export const currentPageGroupSelector = createSelector(interfaceSelector, pageGroupSelector, (i, pageGroup) => {
  return i.pageGroups[Number(pageGroup)];
});
export const currentPageSelector = createSelector(currentPageGroupSelector, pageSelector, (pageGroup, page) => {
  return pageGroup.pages[Number(page)];
});