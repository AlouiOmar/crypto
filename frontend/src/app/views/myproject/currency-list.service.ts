import { Currencies } from './model/currencies.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyListService {

  private currencies: Currencies = {
    'Bitcoin': {
      currency: 'Bitcoin',
      weight: 10
    },
    'Ethereum': {
      currency: 'Ethereum',
      weight: 10
    },
    'Binance Coin': {
      currency: 'Binance Coin',
      weight: 10
    },
    'Tether': {
      currency: 'Tether',
      weight: 9
    },
    'Polkadot': {
      currency: 'Polkadot',
      weight: 9
    },
    'Cardano': {
      currency: 'Cardano',
      weight: 8
    },
    'XRP': {
      currency: 'XRP',
      weight: 8
    },
    'Uniswap': {
      currency: 'Uniswap',
      weight: 8
    },
    'Litecoin': {
      currency: 'Litecoin',
      weight: 6
    },
    'Chainlink': {
      currency: 'Chainlink',
      weight: 6
    },
    'Bitcoin Cash': {
      currency: 'Bitcoin Cash',
      weight: 6
    }
  };

  getCurrencies(): Currencies {
    return this.currencies;
  }

  generateBaseCurrencies(currencyCodes: string[]): Currencies {
    const baseCurrencies = currencyCodes.reduce((prevValue, currentValue) => {
      if (this.currencies[currentValue]) {
        prevValue[currentValue] = this.currencies[currentValue];
      }
      return prevValue;
    }, {});
    return baseCurrencies;
  }
}
