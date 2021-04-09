import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SofboxModule } from '../components/sofbox/sofbox.module';

import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { Dashboard2Component } from './dashboards/dashboard2/dashboard2.component';

import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AnalyticsComponent } from './dashboards/analytics/analytics.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { WebAnalyticsComponent } from './dashboards/web-analytics/web-analytics.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TrackingComponent } from './dashboards/tracking/tracking.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TicketBookingComponent } from './dashboards/ticket-booking/ticket-booking.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgwWowModule } from 'ngx-wow';
import { CalendarComponent } from './calendar/calendar.component';

import { BalanceComponent } from './balance/balance.component';
import { HistoryWalletComponent } from './history-wallet/history-wallet.component';

import { EthereumComponent } from './ethereum/ethereum.component';
import { BtcComponent } from './btc/btc.component';
import { BitcComponent } from "./bitc/BitcComponent";
import { CedarcoinComponent } from './cedarcoin/cedarcoin.component';
import { CedarprojectComponent } from './cedarproject/cedarproject.component';
import { MyprojectComponent } from './myproject/myproject.component';
import { CedarhistoryComponent } from './cedarhistory/cedarhistory.component';
import { CryptoX } from './shared/models/crypto';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { DataService } from './shared/services/data.service';

//import { NgZorroAntdModule, NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';
//import { NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { en_US, NgZorroAntdModule, NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';
import { CryptoPriceComponent } from './crypto-price/crypto-price.component';
import { AdsComponent } from './ads/ads.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoinTestComponent } from './coin-test/coin-test.component';
import { CurrencyListItemComponent } from './myproject/currency-list/currency-list-item/currency-list-item.component';
import { CurrencyListComponent } from './myproject/currency-list/currency-list.component';
import { CurrencySelectorComponent } from './myproject/currency-selector/currency-selector.component';
import { LoadingSpinnerComponent } from './myproject/loading-spinner/loading-spinner.component';
import { MoneyComponent } from './myproject/money/money.component';
import { CedaraddprojectComponent } from './cedaraddproject/cedaraddproject.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';



export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    AnalyticsComponent,
    WebAnalyticsComponent,
    TrackingComponent,
    TicketBookingComponent,
    CalendarComponent,

    BalanceComponent,
    HistoryWalletComponent,
    EthereumComponent,
    BtcComponent,
    BitcComponent,
    CedarcoinComponent,
    CedarprojectComponent,
    CedaraddprojectComponent,
    MyprojectComponent,
    CedarhistoryComponent,
    CryptoDetailComponent,
    CryptoPriceComponent,
    AdsComponent,
    CoinTestComponent,
    MoneyComponent,
    CurrencySelectorComponent,
    CurrencyListComponent,
    CurrencyListItemComponent,
    LoadingSpinnerComponent,









  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SofboxModule,
    LottieModule.forRoot({ player: playerFactory }),
    ProgressbarModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatPaginatorModule,
    NgScrollbarModule,
    NgwWowModule,
    FormsModule,
    SlickCarouselModule,
    NgZorroAntdModule
    //.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' }),


  ],
  providers: [DataService,
    { provide: "", useValue: en_US },
    { provide: NZ_MESSAGE_CONFIG, useValue: { nzDuration: 2500 } }
  ]
})
export class ViewsModule { }
