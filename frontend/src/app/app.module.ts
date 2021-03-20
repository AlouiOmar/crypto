import { HistoryService } from './services/history.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SofboxModule } from "./components/sofbox/sofbox.module";
import { ErrorPageComponent } from "./views/pages/error-page/error-page.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store/reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { ModalModule } from "ngx-bootstrap/modal";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { AlertModule } from "ngx-bootstrap";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgScrollbarModule } from "ngx-scrollbar";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { NgwWowModule } from "ngx-wow";
import { BiitoinComponent } from "./views/biitoin/biitoin.component";

import { WebServices } from "./views/webservices.service";
import { IndexComponent } from './layouts/auth-layout/index/index.component';
import { AuthGuard } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { PayService } from './services/pay.service';


@NgModule({
  declarations: [AppComponent, ErrorPageComponent, BiitoinComponent],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SofboxModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgScrollbarModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    NgwWowModule,
  ],
  exports: [SofboxModule],
  providers: [
              WebServices,
              AuthService,
              HistoryService,
              PayService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
