/**
@license
Copyright (c) 2018 InterIntel Technologies. All rights reserved.
 */
export const UPDATE_PAGE_GROUP = 'UPDATE_PAGE_GROUP';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_VIEW = 'UPDATE_VIEW';
export const updatePageGroup = pageGroup => {
  return {
    type: UPDATE_PAGE_GROUP,
    pageGroup
  };
};
export const updatePage = page => {
  return {
    type: UPDATE_PAGE,
    page
  };
};
export const updateView = view => {
  return {
    type: UPDATE_VIEW,
    view
  };
};