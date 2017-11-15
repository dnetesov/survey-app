import _ from 'lodash';
import * as types from '../actions/actionTypes';

const initialState = {
  questionNames: [],
  currentQuestion: 0,
  questionsValidity: {},
  allQuestionsValid: false
};

const extractQuestionNames = (questions) => {
  const namesObject = {};
  questions.forEach((q) => {
    namesObject[q.name] = false;
  });
  return namesObject;
};

export default function stage(state = initialState, action) {
  switch (action.type) {
    case types.STAGE_LOADED:
      return {
        ...state,
        currentQuestion: 0,
        allQuestionsValid: false,
        questionsValidity: extractQuestionNames(action.payload),
        questionNames: action.payload.map(q => q.name)
      };
    case types.STAGE_DONE:
      return {
        ...state,
        currentQuestion: 0,
        allQuestionsValid: false,
        questionsValidity: {}
      };
    case types.QUESTION_VALID:
      const stateDraft = {
        ...state,
        questionsValidity: { ...state.questionsValidity, [action.payload]: true },
        currentQuestion: state.currentQuestion + 1
      };
      if (_.values(stateDraft.questionsValidity).every(q => q === true)) {
        stateDraft.allQuestionsValid = true;
      }

      return stateDraft;
    default:

      return state;
  }
}
