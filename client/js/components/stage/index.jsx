import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-materialize';

import MainArea from './mainArea';
import Question from './question';

import { stageDone, stageLoaded } from '../../actions';

class Stage extends Component {

  componentWillMount() {
    this.props.stageLoaded(this.props.data.questions);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data.name !== nextProps.data.name) {
      this.props.stageLoaded(nextProps.data.questions);
    }
  }

  checkAllValid() {
    const inputElements = this.props.data.questions.map(q => (
      document.querySelector(`#${q.name}`)
    ));
    return inputElements.every(el => el.validity.valid);
  }

  gatherAnswers() {
    const answers = {};
    this.props.data.questions
      .map(q => document.querySelector(`#${q.name}`))
      .forEach((el) => { answers[el.id] = el.value; });

    return answers;
  }

  handleSubmit() {
    const answers = this.checkAllValid() && this.gatherAnswers();
    return answers && this.props.stageDone(answers);
  }

  finish() {
    this.handleSubmit();
    this.context.router.history.push('/finish');
  }

  render() {
    const { text, questions } = this.props.data;
    const currentQuestion = this.props.currentQuestion || 0;
    const questionElemensArray = questions
      .map((q, index) => (
        <Question
          key={ q.name }
          data={ q }
          index={ index }
          currentQuestion={ currentQuestion }
        />
      ));

    return (
      <MainArea>
        <p className='stage-text'>
          { text }
        </p>

        { questionElemensArray }

        <div className='center'>
          {
            this.props.isFinalStage
              ? <Button disabled={ !this.props.allQuestionsValid } onClick={ this.finish.bind(this) }>Finish</Button>
              : <Button disabled={ !this.props.allQuestionsValid } onClick={ this.handleSubmit.bind(this) }>Next</Button>
          }
        </div>
      </MainArea>
    );
  }
}

Stage.contextTypes = {
  router: React.PropTypes.shape({
    history: React.PropTypes.object.isRequired
  })
};

function mapStateToProps(state) {
  const { allQuestionsValid, currentQuestion } = state.stage;
  return {
    allQuestionsValid,
    currentQuestion
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ stageDone, stageLoaded }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stage);
