import {SETLOADERVISIBLE,CURRENTLANGUAGE} from '../Types';
import {LANGUAGE} from "../../utills/Constants"
const intialState = {
  isLoaderVisible: false,
  language:LANGUAGE.ENGLISH
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SETLOADERVISIBLE: {
      return {
        ...state,
        isLoaderVisible: action.payload,
      };
    }
    case CURRENTLANGUAGE: {
      return {
        ...state,
        language: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
