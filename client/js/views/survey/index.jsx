import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-materialize';

import Stage from '../../components/stage';
import StagesProgress from '../../components/progress/stagesProgress';
import { startSurvey } from '../../actions';

class Survey extends Component {

  // calling startSurvey action to get required data fron a server
  componentWillMount() {
    this.props.startSurvey();
  }

  render() {
    if (this.props.stagesData.length) {
      const { stagesData, stageNames, currentStage, currentQuestion } = this.props;
      const isFinalStage = currentStage === stageNames.length - 1;
      const currentStageData = stagesData[currentStage];
      return (
        <Row className='container'>
          <Col s={ 3 }>
            <StagesProgress
              currentStage={ currentStage }
              currentQuestion={ currentQuestion }
              stageNames={ stageNames }
            />
          </Col>
          <Col s={ 9 }>
            <Stage data={ currentStageData } isFinalStage={ isFinalStage } />
          </Col>
        </Row>
      );
    }
    return (
      <Row className='container'>
        <p>Loading...</p>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  const { stagesData, stageNames, currentStage } = state.survey;
  const { currentQuestion } = state.stage;
  return {
    stagesData,
    stageNames,
    currentStage,
    currentQuestion
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startSurvey }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
