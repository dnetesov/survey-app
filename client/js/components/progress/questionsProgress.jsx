import React from 'react';
import { Row, Col, ProgressBar } from 'react-materialize';

export default (props) => {
  const { questionsAmount, currentQuestion } = props;
  const percentage = ((currentQuestion) / questionsAmount) * 100;

  return (
    <Row className='progress-questions'>
      <Col s={ 12 }>
        <ProgressBar progress={ percentage ? percentage : 1 } />
      </Col>
    </Row>
  );
};
