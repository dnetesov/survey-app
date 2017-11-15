import { combineReducers } from 'redux';

import survey from './reducer_survey';
import stage from './reducer_stage';

const rootReducer = combineReducers({
  survey,
  stage
});

export default rootReducer;
