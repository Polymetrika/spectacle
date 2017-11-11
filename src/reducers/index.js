import { combineReducers } from 'redux';
import fragment from './fragment';
import route from './route';
import style from './style';
import slideReference from './slide-reference';

const rootReducer = combineReducers({
  fragment,
  route,
  style,
  slideReference
});

export default rootReducer;
