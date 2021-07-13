import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ baseAmount }) => (
  <div className="header">
    <h1 className="header__title">Converter</h1>
    <h2 className="header__subtitle">{baseAmount} euro{(baseAmount > 1) ? 's' : ''}</h2>
  </div>
);

Header.propTypes = {
  baseAmount: PropTypes.number,
};

Header.defaultProps = {
  baseAmount: 1,
};
export default React.memo(Header);
