import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConversionRatesService } from './conversion-rates.service';
import { CurrencyListService } from './currency-list.service';
import { ConversionRate } from './model/conversion-rate.model';
import { Currencies } from './model/currencies.model';

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {
  private subscription: Subscription;
  newRates: ConversionRate;
  isLoading = false;
  responseErrorMessage: string;
  baseCurrencies: Currencies;
  currencies: Currencies;
  constructor(private conversionRatesService: ConversionRatesService,
    private currencyListService: CurrencyListService) { }

  ngOnInit() {
    this.currencies = this.currencyListService.getCurrencies();
    this.baseCurrencies = this.currencyListService.generateBaseCurrencies(['Bitcoin', 'Ethereum', 'Binance Coin','Tether','Polkadot','Cardano']);

    this.subscription = this.conversionRatesService
      .getLoadingStatus()
      .subscribe(isLoading => {
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onExchangeRateUpdate(newRates: ConversionRate) {
    this.newRates = newRates;
  }
}
