import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      imgUrl: '',
      valueTextArea: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.onTextAreaChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  onTextAreaChange({ target }) {
    console.log('test');
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const {
      name,
      attr01,
      attr02,
      attr03,
      imgUrl,
      valueTextArea,
    } = this.state;
    const options = [
      { value: 'normal', labelName: 'Normal' },
      { value: 'raro', labelName: 'Rare' },
      { value: 'muito raro', labelName: 'Very rare' },
    ];

    return (
      <>
        {/* input tipo text */}
        <Input
          dataTestId="name-input"
          name="name"
          labelName="Nome"
          value={ name }
          onInputChange={ this.handleChange }
        />
        <br />

        <TextArea
          dataTestId="description-input"
          name="Descrição"
          value={ valueTextArea }
          onTextAreaChange={ this.onTextAreaChange }
        />
        <br />

        {/* input tipo number attr1 */}
        <Input
          dataTestId="attr1-input"
          name="Attr01"
          value={ attr01 }
          type="number"
          onInputChange={ this.handleChange }
        />
        <br />

        {/* input tipo number attr2 */}
        <Input
          dataTestId="attr2-input"
          name="Attr02"
          value={ attr02 }
          type="number"
          onInputChange={ this.handleChange }
        />
        <br />

        {/* input tipo number attr3 */}
        <Input
          dataTestId="attr3-input"
          name="Attr03"
          value={ attr03 }
          type="number"
          onInputChange={ this.handleChange }
        />
        <br />

        {/* input tipo number attr3 */}
        <Input
          dataTestId="image-input"
          name="Imagem"
          value={ imgUrl }
          type="text"
          onInputChange={ this.handleChange }
        />
        <br />

        <Select
          dataTestId="rare-input"
          name="Raridade"
          options={ options }
        />
        <br />

        <label htmlFor="super">
          Super Trybe Trunfo
          <input data-testid="trunfo-input" type="checkbox" />
        </label>
        <br />

        <button type="submit" data-testid="save-button">Salvar</button>
      </>
    );
  }
}
