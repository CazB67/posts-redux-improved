import { SETTING_NAME } from "../constants/action-types";

const initialState = {
    setName: ""
  };

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case SETTING_NAME:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;