import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const {
      name,
      labelCardName,
      dataTestId,
      options,
      onInputChange,
    } = this.props;

    return (
      <label htmlFor={ name }>
        { labelCardName }
        <select 
          data-testid={ dataTestId }
          onChange={ onInputChange }
          name={name}
        >
          { options.map(({ value, labelName }) => (
            <option
              key={ value }
              value={ value }
            >
              { labelName }
            </option>)) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  labelCardName: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onInputChange: PropTypes.func.isRequired,
};
