import { LOADING_POSTS, CHANGE_COLOR, DATA_LOADED } from "../constants/action-types";

const initialState = {
    posts: [],
    color: "grey",
    isFetchingPosts: true
  };

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING_POSTS :
            return Object.assign({}, state, {
                isFetchingPosts: action.payload
            });
        case DATA_LOADED :
            return Object.assign({}, state, {
                posts: state.posts.concat(action.payload)
              });
        case CHANGE_COLOR :
            return Object.assign({}, state, {
                color: action.payload
              });
        default:
            return state;
    }
}

export default postsReducer;