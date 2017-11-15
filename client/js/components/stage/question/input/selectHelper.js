import _ from 'lodash';
import React from 'react';
import { Input } from 'react-materialize';

import getCountriesList from './countryList';

const prependWithDefaultOption = options => (
  [
    <option key='defaultOption' value='' disabled>Choose your option</option>,
    ...options
  ]
);

export const getCountrySelect = (onValid) => {
  const options = getCountriesList()
    .map(country => (<option key={ country } value={ country }> { country } </option>));

  return (
    <Input onChange={ () => { onValid('country'); } } required id='country' type='select' defaultValue=''>
      { prependWithDefaultOption(options) }
    </Input>
  );
};

export const getRangeSelect = (start, end, step = 1, name, onValid) => {
  const options = _.range(start, end, step)
    .map(num => (<option key={ num } value={ num }> { num } </option>));

  return (
    <Input onChange={ () => { onValid(name); } } required id={ name } className='inline' type='select' defaultValue=''>
      { prependWithDefaultOption(options) }
    </Input>
  );
};
