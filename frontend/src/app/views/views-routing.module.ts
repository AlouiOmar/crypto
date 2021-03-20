import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Dashboard1Component} from './dashboards/dashboard1/dashboard1.component';
import {Dashboard2Component} from './dashboards/dashboard2/dashboard2.component';
import {AnalyticsComponent} from './dashboards/analytics/analytics.component';
import {WebAnalyticsComponent} from './dashboards/web-analytics/web-analytics.component';
import {TrackingComponent} from './dashboards/tracking/tracking.component';
import {TicketBookingComponent} from './dashboards/ticket-booking/ticket-booking.component';
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
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { CryptoPriceComponent } from './crypto-price/crypto-price.component';
import { CoinTestComponent } from './coin-test/coin-test.component';







const routes: Routes = [
 {
      path: '',
      component: Dashboard1Component
    },
   
    {
      path: 'dashboard2',
      component: Dashboard2Component
    },
    {
      path: 'convert',
      component: AnalyticsComponent
    },
    
    {
      path: 'topUp',
      component: WebAnalyticsComponent
    },
    
    {
      path: 'balance',
      component: BalanceComponent
    },
    
    {
      path: 'history-wallet',
      component: HistoryWalletComponent
    },
    {
      path: 'convert-to-USD',
      component: MyprojectComponent
    },
    {
      path: 'cedarproject',
      component: CedarprojectComponent
    },
    
    {
      path: 'cedarhistory',
      component: CedarhistoryComponent
    },
    {
      path: 'cedarcoin',
      component: CedarcoinComponent
    },
    {
      path: 'bitcoin',
      component: BitcComponent
    },
    {
      path: 'crypto',
      component: CryptoPriceComponent
    },
    { path: ':symbol', component: CryptoDetailComponent },
    {
      path: 'btc',
      component: BtcComponent
    },
    
      
    {
      path: 'tracking',
      component: TrackingComponent
    },
    
    {
      path: 'eth',
      component: EthereumComponent
    },
    {
      path: 'ticket-booking',
      component: TicketBookingComponent
    },
  
    {
      path: 'calendar',
      component: CalendarComponent
    },

  {
    path: 'core',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/core/core.module').then(m => m.CoreModule),
      }
    ]
  },
  {
    path: 'forms',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/forms/forms.module').then(m => m.FormsModule),
      }
    ]
  },
  {
    path: 'table',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/table/table.module').then(m => m.TableModule),
      }
    ]
  },
  {
    path: 'charts',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/charts/charts.module').then(m => m.ChartsModule),
      }
    ]
  },
  {
    path: 'icons',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/icons/icons.module').then(m => m.IconsModule),
      }
    ]
  },
  {
    path: 'extra-pages',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/pages/pages.module').then(m => m.PagesModule),
      }
    ]
  },
  {
    path: 'maps',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/maps/maps.module').then(m => m.MapsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
