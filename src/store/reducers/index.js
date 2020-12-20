import {combineReducers} from "redux";
import authReducer from './authReducer';
import nutritionReducer from './nutritionReducer';

const reducer = combineReducers({
     authReducer,
     nutritionReducer
});

export default reducer;