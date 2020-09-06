import React from 'react';
import classNames from 'classnames';

export default function Button({ onClick, outline, cart, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', {
        'button--outline': outline,
        'button--cart': cart,
      })}>
      {children}
    </button>
  );
}
