
import userReducer from './userReducer';
import  {combineReducers} from 'redux';
import postsReducer from './postsReducer';

const allReducers = combineReducers({
    setName: userReducer,
    setTheme: postsReducer
})

export default allReducers;