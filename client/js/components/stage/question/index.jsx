import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { questionValid } from '../../../actions';
import getProperInput from './input';

const Question = (props) => {
  const { rules, name, text } = props.data;
  const onValid = props.questionValid.bind(this);
  const questionText = text.split('{input}');
  const inputField = getProperInput(rules, name, onValid);
  const hiddenClass = Number.parseInt(props.index) <= Number.parseInt(props.currentQuestion) ? '' : 'hid';

  return (
    <div className={ `stage-question ${hiddenClass}` }>
      <p>
        { questionText[0] }
      </p>
      { inputField }
      <p>
        { questionText[1] }
      </p>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ questionValid }, dispatch);
}

export default connect(null, mapDispatchToProps)(Question);
