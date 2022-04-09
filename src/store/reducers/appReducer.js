import {
  CONFIG_SET_DATA
} from '../constants/constants';

const initialState = {
  configData: [],
}

export default function app(state = initialState, action) {
  const {payload, type} = action;

  switch (type) {
    case CONFIG_SET_DATA:
      return { ...state, configData: payload }
    default:
      return state;
  }
}