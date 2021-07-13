import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Currencies = ({
  onClick, currencies, onSearch, searchValue,
}) => (
  <main className="currencies">
    <ul className="currencies__list">
      <input
        type="text"
        className="currencies__search"
        placeholder="Chercher..."
        value={searchValue}
        onChange={onSearch}
      />
      {currencies.length ? (
        currencies.map((elem) => (
          <li
            onClick={() => {
              onClick(elem);
            }}
            className="currencie"
            key={elem.name}
          >
            {elem.name}
          </li>
        ))
      ) : (
        <li className="currencie">Aucune devise ne corresponds a votre recherche</li>
      )}
    </ul>
  </main>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func,
  onSearch: PropTypes.func,
  searchValue: PropTypes.string,
};

Currencies.defaultProps = {
  currencies: [],
  onClick: () => {},
  onSearch: () => {},
  searchValue: '',
};

export default React.memo(Currencies);
