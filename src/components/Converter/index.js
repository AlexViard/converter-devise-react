// == Import npm
import React, { PureComponent } from 'react';

// == Import
import './style.scss';
import dataCurrencies from 'src/data/currencies';
import Header from '../Header';
import Currencies from '../Currencies';
import Conversion from '../Conversion';
import Toggler from '../Toggler';

// == Composant
class Converter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      open: false,
      selectedCurrency: { name: null, value: null },
    };
  }

  pageTitleEffect = () => {
    const { selectedCurrency } = this.state;
    document.title = selectedCurrency.name;
  }

  getFilteredCurrencies = () => {
    const { search } = this.state;
    return dataCurrencies.filter((currency) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      currency.name.toLowerCase().includes(search.toLowerCase()));
  }

  componentDidMount = () => {
    document.addEventListener('keyup', this.handlerKeyUp);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.handlerKeyUp);
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { selectedCurrency: { name: currentCurrencyName } } = this.state;
    const { selectedCurrency: { name: prevCurrencyName } } = prevState;

    if (currentCurrencyName !== prevCurrencyName) {
      this.pageTitleEffect();
    }
  }

  handlerKeyUp = (evt) => {
    if (evt.key === 'Escape') {
      this.setState({
        open: false,
      });
    }
  }

  render() {
    const { open } = this.state;
    const { selectedCurrency } = this.state;
    const { search } = this.state;

    return (
      <div className="app">
        <Header />
        <Toggler
          onClick={() => {
            this.setState({
              open: !open,
            });
          }}
          active={open}
        />
        {
          open && (
            <Currencies
              onClick={(elem) => {
                this.setState({
                  selectedCurrency: { name: elem.name, value: elem.rate },
                  search: '',
                });
              }}
              searchValue={search}
              currencies={this.getFilteredCurrencies()}
              onSearch={(event) => {
                this.setState({
                  search: event.target.value,
                });
              }}
            />
          )
        }
        <Conversion name={selectedCurrency.name} value={selectedCurrency.value} />
      </div>
    );
  }
}

// == Export
export default Converter;
