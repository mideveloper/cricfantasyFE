import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  OPEN_LOGIN_DIALOG,
  CLOSE_LOGIN_DIALOG,
} from '../actions';

const initState = {
  open: false,
  data: {},
  errMessage: '',
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state };
    case LOGIN_SUCCESS:
      return {
        ...state,
        open: false,
        data: payload,
        notFound: false,
        errMessage: '',
      };
    case LOGIN_FAIL:
      return {
        ...state,
        data: {},
        notFound: true,
        errMessage: payload.meta.message,
      };
    case OPEN_LOGIN_DIALOG:
      return { ...state, open: true };
    case CLOSE_LOGIN_DIALOG:
      return { ...state, open: false, errMessage: '' };
    default:
      return { ...state };
  }
};
