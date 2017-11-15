import axios from 'axios';

import * as types from './actionTypes';

const serverUrl = 'http://localhost:4000';

export const startSurvey = () => {
  const request = axios.get(`${serverUrl}/api/survey`);

  return (dispatch) => {
    request.then((res) => {
      const stagesData = res.data.stages;
      dispatch({ type: types.START_SURVEY, payload: stagesData });
    });
  };
};
export const stageLoaded = questions => ({ type: types.STAGE_LOADED, payload: questions });
export const questionValid = questionName => (
  { type: types.QUESTION_VALID, payload: questionName }
);
export const stageDone = answers => ({ type: types.STAGE_DONE, payload: answers });
export const finishSurvey = () => ({ type: types.FINISH_SURVEY, payload: null });
