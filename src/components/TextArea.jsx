import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  render() {
    const {
      name,
      value,
      onTextAreaChange,
      dataTestId,
    } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <textarea
          data-testid={ dataTestId }
          id={ name }
          name={ name }
          onChange={ onTextAreaChange }
          value={ value }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onTextAreaChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
