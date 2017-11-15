import React from 'react';
import { Button, Row } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { finishSurvey } from '../../actions';

const Finish = (props) => {
  props.finishSurvey();
  return (
    <div className='container'>
      <Row>
        <div className='center'>
          <p> Thank you for your time. </p>
        </div>
        <div className='center'>
          <Button><Link to='/'>Home</Link></Button>
        </div>
      </Row>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ finishSurvey }, dispatch);
}

export default connect(null, mapDispatchToProps)(Finish);
