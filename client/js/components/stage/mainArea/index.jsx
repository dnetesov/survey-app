import React from 'react';
import { Row, Col } from 'react-materialize';

export default props => {
  return (
    <div className='container'>
      <Row>
        <div className='center'>
          <Col s={ 12 }>
            { props.children }
          </Col>
        </div>
      </Row>
    </div>
  );
};
