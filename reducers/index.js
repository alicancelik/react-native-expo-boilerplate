import { combineReducers } from 'redux';
import user from './user';


const appReducer = combineReducers({
  user,
});

const rootReducer = (state, action) => {
  if (action.type === 'DO_SIGNOUT') {
    state = undefined; //eslint-disable-line
  }
  return appReducer(state, action);
};

export default rootReducer;
