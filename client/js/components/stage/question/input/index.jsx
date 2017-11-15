import _ from 'lodash';
import React from 'react';

import ControlledTextInput from './controlledTextInput';
import { getCountrySelect, getRangeSelect } from './selectHelper';

/**
 * Returns input component depending on passed rules
 * @param  {Object} rules Input type and validation info
 * @param  {String} name  Input name (in the case of 'text' type will also be used as a placeholder)
 * @return {Component}    Wrapped <Input> Component
 */
export default (rules, name, onValid = null) => {
  switch (rules.type) {
    case 'country':
      return getCountrySelect(onValid);
    case 'select':
      if (rules.range) {
        const args = _.values(rules.range);
        return getRangeSelect(...args, name, onValid);
      }
      break;
    case 'number':
      return (
        <div className='input-field inline'>
          <ControlledTextInput
            type='number'
            rules={ rules }
            name={ name }
          />
          <label htmlFor={ name }>{ _.capitalize(name) }</label>
        </div>
      );
    default:
      return (
        <div className='input-field inline'>
          <ControlledTextInput
            rules={ rules }
            name={ name }
          />
          <label htmlFor={ name }>{ _.capitalize(name) }</label>
        </div>);
  }
};
