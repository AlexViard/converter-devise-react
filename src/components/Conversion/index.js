import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Conversion = ({ value, name }) => (
  <footer className="conversion">

    {
      (value !== null) ? (
        <>
          <span className="conversion__rate">{value.toFixed(2)}</span>
          <h2 className="conversion__name">{name}</h2>
        </>
      ) : (
        <h2 className="conversion__empty">Veuillez choisir une monnaie</h2>
      )
    }
  </footer>
);

Conversion.propTypes = {
  value: PropTypes.number,
  name: PropTypes.string,
};

Conversion.defaultProps = {
  value: null,
  name: null,
};
export default React.memo(Conversion);
