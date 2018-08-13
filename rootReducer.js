import userReducer from './src/reducers/user';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer
});
