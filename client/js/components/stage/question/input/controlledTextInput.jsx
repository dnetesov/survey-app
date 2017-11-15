import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { questionValid } from '../../../../actions';

class ControlledTextInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
    this.onChange = this.onChange.bind(this);
    this.dispatchOnValidAnswer = (target) => {
      if (target.checkValidity()) {
        this.props.questionValid(this.props.name);
        // Destroy function after dispatching
        this.dispatchOnValidAnswer = () => false;
      }
    };
  }

  onChange(e) {
    this.setState({
      text: e.target.value,
      valid: this.validate(e.target)
    });
  }

  validate(target) {
    this.dispatchOnValidAnswer(target);
    if (target.value.length > 3) {
      return target.checkValidity() ? 'valid' : 'invalid';
    }
    return '';
  }

  render() {
    const { rules, name } = this.props;
    const type = rules.type || 'text';
    const pattern = rules.pattern || '';
    const { min, max, step } = rules;
    return (
      <input
        required
        { ...(pattern && { pattern }) }
        { ...(min && { min }) }
        { ...(max && { max }) }
        { ...(step && { step }) }
        id={ name }
        type={ type }
        className={ `validate ${this.state.valid}` }
        onChange={ this.onChange }
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ questionValid }, dispatch);
}

export default connect(null, mapDispatchToProps)(ControlledTextInput);
