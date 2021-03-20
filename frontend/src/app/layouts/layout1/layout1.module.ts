import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout1RoutingModule } from './layout1-routing.module';
import { IndexComponent } from './index/index.component';
import {SofboxModule} from '../../components/sofbox/sofbox.module';



@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    CommonModule,
    Layout1RoutingModule,
    SofboxModule,
  

  ]
})
export class Layout1Module { }
