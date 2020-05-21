import React from 'react';
import PropTypes from 'prop-types';

function SharedButton({ buttonText, emitEvent }) {
  const submitButton = () => {
    if (emitEvent) {
      emitEvent();
    }
  };
  return (
    <button data-test="buttonComponent" onClick={() => submitButton()}>
      {buttonText}
    </button>
  );
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default SharedButton;
