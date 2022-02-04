import React from 'react';
import uuid from 'react-uuid';
import Form from './components/Form';
import Card from './components/Card';
import Input from './components/Input';
import AllCards from './components/AllCards';
import Select from './components/Select';

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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      allCards: [],
      searchCard: '',
      searchRare: 'todas',
      searchTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkAllConditions = this.checkAllConditions.bind(this);
    this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);
    this.updateSuperTrunfo = this.updateSuperTrunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    this.setState(() => ({
      [name]:  target.type === 'checkbox' ? target.checked : target.value,
    }), this.checkAllConditions);
  }

  onSaveButtonClick() {
    const { hasTrunfo, isSaveButtonDisabled, allCard, ...rest } = this.state;

    const newCard = {
      ...rest,
      id: uuid(),
    };

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: rest.cardTrunfo,
      allCards: [...prevState.allCards, newCard],
    }), this.checkAllConditions);
  }

  onRemoveButtonClick({ target }) {
    this.setState(({ allCards }) => ({
      allCards: allCards.filter((card) => (card.id !== target.id)),
    }), this.updateSuperTrunfo);
  }

  updateSuperTrunfo() {
    this.setState(({ allCards }) => ({
      cardTrunfo: false,
      hasTrunfo: allCards.some((card) => card.cardTrunfo),
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
    const { searchCard, searchRare, searchTrunfo } = this.state;
    const options = [
      { label: 'Todas', value: 'todas' },
      { label: 'Normal', value: 'normal' },
      { label: 'Raro', value: 'raro' },
      { label: 'Muito raro', value: 'muito raro' },
    ];
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <h2>Pré visualização</h2>
        <Card { ...this.state } />
        <h2>Todas as cartas</h2>
        <Input
          { ...this.state }
          dataTestId="name-filter"
          labelName="Filtros de busca"
          name="searchCard"
          value={ searchCard }
          onInputChange={ this.onInputChange }
        />
        <br />
        <Select
          name="searchRare"
          dataTestId="rare-filter"
          onInputChange={ this.onInputChange }
          value={ searchRare }
          options={ options }
        />
        <br />
        <label htmlFor="searchTrunfo">
          <input
            name="searchTrunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ this.onInputChange }
            checked={ searchTrunfo }
          />
          Super Trybe Trunfo
        </label>
        <AllCards { ...this.state } onRemoveButtonClick={ this.onRemoveButtonClick } />
      </div>
    );
  }
}
