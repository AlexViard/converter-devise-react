import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Toggler = ({ onClick, active }) => (
  <button
    className="toggler"
    type="button"
    onClick={onClick}
  >
    {(active) ? '=' : '$'}
  </button>
);

Toggler.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

Toggler.defaultProps = {
  onClick: () => {},
  active: false,
};

export default React.memo(Toggler);
