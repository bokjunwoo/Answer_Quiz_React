import { combineReducers } from 'redux';
import quzi from './modules/quzi';
import data from './modules/data';

export default combineReducers({
  quzi, data
});
