/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { updateView, updatePage, updatePageGroup } from "./template.js";
import { SNACKBAR_CONTEXT_SUCCESS, SNACKBAR_CONTEXT_WARNING } from "../components/snack-bar.js";
export const UPDATE_SERVICE = 'UPDATE_SERVICE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const GET_PAYLOAD = 'GET_PAYLOAD';
import { Response } from '../core/parsers/response.js';
import { COMMAND_GET_INTERFACE } from "../core/parsers/response.js";
export const getPayload = (payloadjson, template) => (dispatch, getState) => {
  // Parse initial interface payload.
  let response = new Response(payloadjson);
  response.parseAll({}); // TODO #257 [OPTIMIZATION] sequential loading
  // make API call to load initial interface payload
  // making an API call to load the initial interface payload,
  // this would remove the need of passing the payload as a string through adaptive-ui-web component attribute
  // templating the payload using django template by the

  dispatch({
    type: GET_PAYLOAD,
    payload: response
  }); // TODO #258 Template Switching Without Reload
  // this can enhance the user experience as template changes currently require a full reload
  // this is achievable through what dispatching `loadTemplate(template)` does
  // Start Preloading elements

  dispatch(preloadElements(response)); // initial load is unnecessary because of the pre-loading in index.html
  // there is need to load the 404 template even for index.html pre-loads

  dispatch(loadTemplate(template)); // TODO #259 above is uncomment for backward compatibility but it's optional when pre-loading is in effect
};
export const navigate = path => dispatch => {
  // console.log(path);
  // console.log(window.location.href.indexOf('#'));
  if (!window.location.hash) {
    window.location.href = window.location.href + '#/0/0';
  }

  let paths = path.split('/').filter(function (x) {
    return x;
  }); // console.log(paths);

  let pageGroup, page;
  let hashes = window.location.hash.split('/');
  pageGroup = hashes[1] || 0;
  page = hashes[2] || 0; // Any other info you might want to extract from the path (like page type),
  // you can do here
  // navigate to hash paths

  dispatch(updatePageGroup(pageGroup));
  dispatch(updatePage(page));

  if (paths.length > 1) {
    // TODO #260 is this required?
    let view = 'dialog';
    dispatch(updateView(view));
  }
};
export const loadTemplate = template => dispatch => {
  switch (template) {
    case 'service':
    case 'landing':
    case 'payments':
    case 'section':
    case 'canvas':
      import(`../themes/${window.THEME}/components/templates/${template}-page.js`).then(module => {// Put code in here that you want to run every time when
        // navigating to view1 after my-view1.js is loaded.
      }).catch(error => {
        // TODO #261 source of exceptions caught here might be untraceable
        // removing this catch block is a dirty hack
        console.error(error);
      });
      break;

    default:
      template = 'view-404';
      import(`../themes/${window.THEME}/components/templates/${template}-page.js`).then(module => {// loaded view-404 module
      }).catch(error => {
        console.error(error);
      });
  } // dispatch(updateTemplate(template));

};
export const preloadElements = payload => dispatch => {
  let elLoader = document.createElement('element-loader'); // pre-loading elements

  let rp = payload.serviceCommands[COMMAND_GET_INTERFACE];
  rp.pageGroups.forEach(function (pageGroup) {
    pageGroup.pages.forEach(function (page) {
      page.pageInputGroups.forEach(function (pageInputGroup) {
        pageInputGroup.oe.forEach(function (pElement) {
          elLoader.headless = true; // trigger a load

          elLoader.element = pElement;
        });
      });
    });
  });
};
let snackbarTimer;
export const showSnackbar = (message, title, context) => dispatch => {
  dispatch({
    type: OPEN_SNACKBAR,
    message: message,
    title: title,
    context: context ? context : SNACKBAR_CONTEXT_SUCCESS
  });
  clearTimeout(snackbarTimer);
  snackbarTimer = setTimeout(() => dispatch({
    type: CLOSE_SNACKBAR
  }), 3000);
};
export const updateOffline = offline => (dispatch, getState) => {
  let title, context; // Show the snackbar, unless this is the first load of the page.

  if (getState().app.offline !== undefined) {
    title = 'Connectivity';
    context = offline ? SNACKBAR_CONTEXT_WARNING : SNACKBAR_CONTEXT_SUCCESS;
    dispatch(showSnackbar('You are now ' + offline ? 'offline!!' : 'online', title, context));
  }

  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};