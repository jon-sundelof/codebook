import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alert) => (dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERTE,
    payload: { msg, alertType, id },
  });
};
