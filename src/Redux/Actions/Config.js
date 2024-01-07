import {SETLOADERVISIBLE,CURRENTLANGUAGE} from '../Types';
export const setLoaderVisible = (payload) => {
  return {
    type: SETLOADERVISIBLE,
    payload: payload,
  };
};
export const setLanguage = (payload) => {
  return {
    type: CURRENTLANGUAGE,
    payload: payload,
  };
};
