import * as types from '../actions/actionTypes';

const initialState = {
  stagesData: [],
  stageNames: [],
  currentStage: 0,
  collectedData: {}
};

const checkStage = (stageNames, currentStage) => {
  return currentStage === stageNames.length - 1 ?
    'finish' :  // or push to 'finish' state from here
    currentStage + 1;
};

export default function survey(state = initialState, action) {
  switch (action.type) {
    case types.START_SURVEY:
      return {
        ...state,
        stagesData: action.payload,
        stageNames: action.payload.map((stage) => {
          return {
            name: stage.name,
            questionNames: stage.questions.map(q => q.name)
          };
        }),
        currentStage: 0
      };
    case types.STAGE_DONE:
      return {
        ...state,
        currentStage: checkStage(state.stageNames, state.currentStage),
        collectedData: { ...state.collectedData, ...action.payload }
      };
    case types.FINISH_SURVEY:
      console.log(state.collectedData);
      return initialState;
    default:
      return state;
  }
}
