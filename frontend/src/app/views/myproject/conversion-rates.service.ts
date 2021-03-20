import { ExchangeRates } from './model/exchange-rates.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {ConversionRate} from './model/conversion-rate.model';
import {Observable, Subject, of, throwError} from 'rxjs';
import {map, tap, catchError} from 'rxjs/operators';
import { ExchangeRateItem } from './model/exchange-rate-item.model';
import { jsonpFactory } from '@angular/http/src/http_module';

@Injectable({providedIn: 'root'})
export class ConversionRatesService {

  private baseUrl = 'https://api.alternative.me/v1/ticker/?fbclid=IwAR323sgtgwbfLFda6u6TWIWNEJgle992zOlm7yTp0yehiG_MkroP_niAJvI';
  private _loading: boolean;
  private loadingStatus: Subject<boolean> = new Subject<boolean>();

  private cache = {};

  constructor(private http: HttpClient) {}

  getLatestExchangeRates(
    amount: number,
    baseCurrencyCode: string,
    otherCurrencyCodes: string[]
  ): Observable <ConversionRate> {
    console.log(amount)
    console.log(baseCurrencyCode)
    console.log(otherCurrencyCodes)
    const url = 'https://cors-anywhere.herokuapp.com/'+this.baseUrl;
    let resp=[];
    let conversionRateObj: ConversionRate;
    let exchangeRates: ExchangeRates;

    this.startLoading();

    if (this.cache && this.cache[baseCurrencyCode]) {

      if (amount !== this.cache[baseCurrencyCode].amount) {
        conversionRateObj = new ConversionRate(
          amount,
          baseCurrencyCode,
          this.cache[baseCurrencyCode].date,
          this.cache[baseCurrencyCode].rates
        );
        return of(conversionRateObj);
      }

      return of(this.cache[baseCurrencyCode]);
    } else {

      return this.http.get(url, {observe: 'response'}).pipe(
        map((response) => {
          console.log(response.body[0].symbol)
        /*   for(let i=0;i<100;i++){
            response.body[i]
          }
           */
       //  let v = response.body;
        // JSON.parse(JSON.stringify({v})).foreach((element)=>{console.log(element.symbol)})
        let abc=[];
        abc=JSON.parse(JSON.stringify({res:response.body}));
        console.log("######")
        let baseInUSD;
        abc["res"].forEach(element => {
          if(element.name===baseCurrencyCode){
            baseInUSD=element["price_usd"]
          }
        });
        let key=[];
        let val=[];
        console.log('baseInUSD'+baseInUSD)
        exchangeRates={};
        /* exchangeRates={"aa":11};
        exchangeRates={...exchangeRates,"bb":22};
        console.log(exchangeRates) */
        /* console.log(abc["res"])
        const usersJson: any[] = Array.of(abc);
        console.log(usersJson[0]["res"].length)
        // console.log(usersJson )
        //usersJson[0]["res"].forEach((element)=>{console.log(element)}) */
         abc["res"].forEach(element => {
           console.log(element.name)

           otherCurrencyCodes.forEach(curr=>{
             if(curr===element.name){
               console.log('true')
               let x=1/baseInUSD;
               let y=element["price_usd"]*x;
               let z=1/y;
               console.log(y +''+baseCurrencyCode)
               const curren=curr.toString();
               key.push(curr)
               val.push(z)
               /* exchangeRates={...exchangeRates,curren:y}
               console.log(exchangeRates) */
             }
           })
         });
         console.log(key)
         console.log(val)
         var result =  val.reduce(function(result, field, index) {
          result[key[index]] = field;
          return result;
        }, {})
        console.log(result);
        //  console.log(exchangeRates)
          if (response.ok && response.status === 200) {
            return new ConversionRate(
              amount,
              baseCurrencyCode,
              new Date(),
              result
            );
          }
        }),
        tap(lastConversionRate => this.cache[baseCurrencyCode] = lastConversionRate),
        catchError((error: HttpErrorResponse, originalObs: Observable<ConversionRate>) => {
          return throwError(new Error('oops! We couldn\'t get the latest rates. Please try later.'));
        })
      );
    }
  }

  get loading(): boolean {
    return this._loading;
  }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }

  getLoadingStatus() {
    return this.loadingStatus.asObservable();
  }
}
