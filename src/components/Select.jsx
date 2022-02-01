import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const {
      name,
      value,
      options,
      labelName,
      dataTestId,
      onInputChange,
    } = this.props;

    return (
      <label htmlFor={ value }>
        {labelName}
        <select
          name={ name }
          data-testid={ dataTestId }
          onChange={ onInputChange }
          value={ value }
        >
          {options.map(({ label, value: objValue }) => (
            <option key={ objValue } value={ objValue }>{label}</option>
          ))}
          {/* <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option> */}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  labelName: '',
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
