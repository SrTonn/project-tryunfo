import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  render() {
    const {
      name,
      labelName,
      value,
      onInputChange,
      dataTestId,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { labelName }
        <textarea
          data-testid={ dataTestId }
          id={ name }
          name={ name }
          onChange={ onInputChange }
          value={ value }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
