import React from 'react';
import { Button, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className='container'>
      <Row>
        <div className='center'>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis, odio a posuere sodales, enim dolor viverra neque, sit amet gravida orci ex at enim. Cras eget magna quis felis pulvinar auctor ut eu nisl. Morbi rhoncus lacinia arcu in consequat. Maecenas vel condimentum neque. Nam vel tristique ante. Aliquam scelerisque bibendum cursus. </p>
        </div>
        <div className='center'>
          <Button><Link to='/survey'>Take a Survey</Link></Button>
        </div>
      </Row>
    </div>
  );
};
