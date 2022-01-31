import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkAllConditions = this.checkAllConditions.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }), this.checkAllConditions);
  }

  onSaveButtonClick() {
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }));
  }

  checkAllConditions() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maxNumber = 90;
    const maxSumNumber = 210;
    const allConditions = [
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      +cardAttr1 >= 0 && +cardAttr1 <= maxNumber,
      +cardAttr2 >= 0 && +cardAttr2 <= maxNumber,
      +cardAttr3 >= 0 && +cardAttr3 <= maxNumber,
      +cardAttr1 + +cardAttr2 + +cardAttr3 <= maxSumNumber,
    ];

    const checkConditions = !allConditions.every((test) => test);

    this.setState(() => ({
      isSaveButtonDisabled: checkConditions,
    }));
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
        />
      </div>
    );
  }
}
