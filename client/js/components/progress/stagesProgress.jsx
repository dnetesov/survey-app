import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

import QuestionsProgress from './questionsProgress';


export default (props) => {
  const { currentStage, stageNames, currentQuestion } = props;
  const questionsAmount = stageNames[currentStage].questionNames && stageNames[currentStage].questionNames.length;
  console.log(props);
  return (
    <Collection>
      {
        stageNames.map((stage, index) => (
          <CollectionItem
            key={ stage.name + '_stage' }
          >
            { stage.name }
            {
              index === currentStage
                ? <QuestionsProgress
                  questionsAmount={ questionsAmount }
                  currentQuestion={ currentQuestion }
                />
                : ''
            }

          </CollectionItem>
        ))
      }
    </Collection>
  );
};
