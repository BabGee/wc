/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { updateView } from "./template.js";
import { SNACKBAR_CONTEXT_SUCCESS, SNACKBAR_CONTEXT_WARNING } from "../components/snack-bar.js";
export const UPDATE_NAVIGATION = 'UPDATE_NAVIGATION';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const GET_PAYLOAD = 'GET_PAYLOAD';
import { Response } from '../core/parsers/response.js';
export const getPayload = (payloadjson, template) => (dispatch, getState) => {
  // Parse initial interface payload.
  let response = new Response(payloadjson);
  response.parseAll({}); // TODO [OPTIMIZATION] sequential loading
  // perform loading of the initial interface payload

  dispatch({
    type: GET_PAYLOAD,
    payload: response
  }); // TODO should do on each template change
  // initial load is unnecessary because of the pre-loading in index.html
  // there is need to load the 404 template even for index.html pre-loads

  dispatch(loadTemplate(template)); // TODO above is uncomment for backward compatibility but it's optional when pre-loading
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

  dispatch({
    type: UPDATE_NAVIGATION,
    page,
    pageGroup
  });

  if (paths.length > 1) {
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
        // todo source of exceptions caught here might be untraceable,
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
let snackbarTimer;
export const showSnackbar = message => dispatch => {
  dispatch({
    type: OPEN_SNACKBAR,
    message: message,
    title: 'Connection Status',
    context: 'error'
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
    dispatch(showSnackbar("You are now " + offline ? 'offline!!' : 'online', title, context));
  }

  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};