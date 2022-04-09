import {
  CONFIG_SET_DATA
} from '../constants/constants';

export function configSetData(payload) {
  return { type: CONFIG_SET_DATA, payload }
}