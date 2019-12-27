import { RECIEVE_TEST } from '../actions';

export default (state = '', { type, text }) => {
  switch (type) {
    case RECIEVE_TEST:
      return text;
    default:
      return state;
  }
};
