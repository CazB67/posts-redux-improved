import { SETTING_NAME, CHANGE_COLOR, DATA_LOADED, LOADING_POSTS } from "../constants/action-types";

export const settingName = (length) => {
    return {
        type: SETTING_NAME,
        payload: length
    }
}

export const settingColor = (chosenColor) => {
    return {
        type: CHANGE_COLOR,
        payload: chosenColor
    }
}

export const getData = (json) => {
    return {
      type: DATA_LOADED,
      payload: json
    }
  }

export const loading = (showSpinner) => {
  return {
    type: LOADING_POSTS,
    payload: showSpinner
  }
}

