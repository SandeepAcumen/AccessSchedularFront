import {
    INDEX_FAIL,
    INDEX_LOADING,
    INDEX_SUCCESS,
  } from "../actions/returnType.js";
  import { indexStateData } from "../constants/initalStateData.js";
  
  export const initialReducer = (state = indexStateData, action) => {
    switch (action.type) {
      case INDEX_LOADING:
        return {
          ...state,
          loading: true,
          error: false,
          success: false,
        };
      case INDEX_SUCCESS: {
        return {
          loading: false,
          error: false,
          success: true,
          message: action.message,
          accessToken: action.accessToken,
        };
      }
      case INDEX_FAIL: {
        return {
          loading: false,
          error: true,
          success: false,
          message: action.message,
          accessToken: null,
        };
      }
      default:
        return state;
    }
  };
  