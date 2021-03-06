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
export const pageGroupSelector = state => state.template.pageGroup;
export const pageSelector = state => state.template.page;
export const payloadSelector = state => state.app.payload;
export const gatewaySelector = createSelector(payloadSelector, payload => {
  return payload.serviceCommands['get_gateway_details'] || payload.serviceCommands['get_institution_details'];
});
export const interfaceSelector = createSelector(payloadSelector, payload => {
  return payload.serviceCommands['get_interface'] || payload.serviceCommands['get_section'];
});
export const currentPageGroupSelector = createSelector(interfaceSelector, pageGroupSelector, (i, pageGroup) => {
  const index = Number(pageGroup);
  if (index >= i.pageGroups.length) return null;
  return i.pageGroups[index];
});
export const currentPageSelector = createSelector(currentPageGroupSelector, pageSelector, (pageGroup, page) => {
  const index = Number(page);
  if (pageGroup === null || index >= pageGroup.pages.length) return null;
  return pageGroup.pages[index];
});