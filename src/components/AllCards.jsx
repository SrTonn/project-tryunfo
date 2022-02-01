import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class AllCards extends Component {
  render() {
    const { allCards, onRemoveButtonClick } = this.props;
    return (
      <>
        {allCards.map((card) => (
          <Card
            { ...card }
            key={ card.id }
            hasRemoveButton
            onRemoveButtonClick={ onRemoveButtonClick }
          />
        ))}
      </>
    );
  }
}

AllCards.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  onRemoveButtonClick: PropTypes.func.isRequired,
};
