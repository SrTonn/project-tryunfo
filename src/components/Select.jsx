import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const {
      name,
      dataTestId,
      options,
    } = this.props;

    return (
      <label htmlFor={ name }>
        {name}
        <select data-testid={ dataTestId }>
          {options.map(({ value, labelName }) => (
            <option
              key={ value }
              value={ value }
            >
              {labelName}
            </option>))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.string,
  ]).isRequired,
};
