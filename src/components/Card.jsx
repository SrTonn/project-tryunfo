import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const {
      id,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasRemoveButton,
      onRemoveButtonClick,
    } = this.props;
    return (
      <>
        <h3 data-testid="name-card">{ cardName }</h3>
        <img data-testid="image-card" src={ cardImage } alt="" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        {hasRemoveButton && (
          <button
            data-testid="delete-button"
            type="button"
            onClick={ onRemoveButtonClick }
            id={ id }
          >
            Excluir
          </button>)}
      </>
    );
  }
}

Card.defaultProps = {
  id: '',
  hasRemoveButton: false,
  onRemoveButtonClick: () => {},
};

Card.propTypes = {
  id: PropTypes.string,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasRemoveButton: PropTypes.bool,
  onRemoveButtonClick: PropTypes.func,
};
