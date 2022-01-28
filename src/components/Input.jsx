import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const {
      name,
      labelName = name,
      value,
      onInputChange,
      type = 'text',
      dataTestId,
    } = this.props;

    return (
      <label htmlFor={ name }>
        {labelName}
        {labelName.includes('Nome') ? <br /> : ''}
        <input
          data-testid={ dataTestId }
          type={ type }
          id={ name }
          name={ name }
          onChange={ onInputChange }
          value={ value }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  dataTestId: PropTypes.string.isRequired,
};
