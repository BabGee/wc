/**
@license
Copyright (c) 2018 InterIntel Technologies. All rights reserved.
 */
import { UPDATE_SERVICE, UPDATE_OFFLINE, OPEN_SNACKBAR, CLOSE_SNACKBAR, GET_PAYLOAD } from '../actions/app.js';
import { SNACKBAR_CONTEXT_INFO } from "../components/snack-bar.js";
const INITIAL_STATE = {
  offline: undefined,
  snackbarOpened: false,
  snackbarMessage: '',
  snackbarTitle: 'Info',
  snackbarContext: SNACKBAR_CONTEXT_INFO
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PAYLOAD:
      return { ...state,
        payload: action.payload
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
        snackbarMessage: action.message,
        snackbarTitle: action.title,
        snackbarContext: action.context
      };

    case CLOSE_SNACKBAR:
      return { ...state,
        snackbarOpened: false,
        snackbarMessage: '',
        snackbarTitle: '',
        snackbarContext: ''
      };

    default:
      return state;
  }
};

export default app;