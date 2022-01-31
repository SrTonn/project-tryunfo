import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    const options = [
      { label: 'Normal', value: 'normal' },
      { label: 'Raro', value: 'raro' },
      { label: 'Muito raro', value: 'muito raro' },
    ];
    return (
      <>
        {/* input tipo text */}
        <Input
          dataTestId="name-input"
          labelName="Nome"
          name="cardName"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <br />

        <TextArea
          dataTestId="description-input"
          name="cardDescription"
          labelName="Descrição"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <br />

        {/* input tipo number attr1 */}
        <Input
          dataTestId="attr1-input"
          name="cardAttr1"
          labelName="Attr1"
          value={ cardAttr1 }
          type="number"
          onInputChange={ onInputChange }
        />
        <br />

        {/* input tipo number attr2 */}
        <Input
          dataTestId="attr2-input"
          name="cardAttr2"
          labelName="Attr2"
          value={ cardAttr2 }
          type="number"
          onInputChange={ onInputChange }
        />
        <br />

        {/* input tipo number attr3 */}
        <Input
          dataTestId="attr3-input"
          name="cardAttr3"
          labelName="Attr3"
          value={ cardAttr3 }
          type="number"
          onInputChange={ onInputChange }
        />
        <br />

        {/* input tipo number attr3 */}
        <Input
          dataTestId="image-input"
          name="cardImage"
          labelName="Imagem"
          value={ cardImage }
          imagemUrl={ cardImage }
          type="text"
          onInputChange={ onInputChange }
        />
        <br />

        {/* <label htmlFor="cardRare">
          Raridade:
          <select
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <br /> */}
        <Select
          name="cardRare"
          labelName="Raridade"
          dataTestId="rare-input"
          onInputChange={ onInputChange }
          value={ cardRare }
          options={ options }
        />
        <br />

        <label htmlFor="super">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
        </label>
        <br />

        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
        >
          Save
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
