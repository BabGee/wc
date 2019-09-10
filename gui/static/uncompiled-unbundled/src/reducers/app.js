/**
@license
Copyright (c) 2018 InterIntel Technologies. All rights reserved.
 */
import { UPDATE_NAVIGATION, UPDATE_SERVICE, UPDATE_OFFLINE, OPEN_SNACKBAR, CLOSE_SNACKBAR, GET_PAYLOAD } from '../actions/app.js';
const INITIAL_STATE = {
  offline: undefined,
  snackbarOpened: false,
  snackbarMessage: ''
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PAYLOAD:
      return { ...state,
        payload: action.payload
      };

    case UPDATE_NAVIGATION:
      return { ...state,
        page: action.page,
        pageGroup: action.pageGroup
      };

    case UPDATE_SERVICE:
      return { ...state,
        service: action.service,
        params: action.params
      };

    case UPDATE_OFFLINE:
      return { ...state,
        offline: action.offline
      };

    case OPEN_SNACKBAR:
      return { ...state,
        snackbarOpened: true,
        snackbarMessage: action.message
      };

    case CLOSE_SNACKBAR:
      return { ...state,
        snackbarOpened: false,
        snackbarMessage: ''
      };

    default:
      return state;
  }
};

export default app; //
// export const feedSelector = createSelector(
//     pageSelector,
//     tabSelector,
//     payloadSelector,
//     (payloadSelector,pageSeletor, tabSelector) => (payloadSelector.tab(pageSeletor,tabSelector))
// );