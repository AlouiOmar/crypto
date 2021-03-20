import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorPageComponent} from './views/pages/error-page/error-page.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { Dashboard2Component } from './views/dashboards/dashboard2/dashboard2.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
 { path: '', loadChildren: './layouts/layout1/layout1.module#Layout1Module' , canActivate: [AuthGuard]},

  { path: 'page', loadChildren: './layouts/blank-layout/blank-layout.module#BlankLayoutModule' },
  { path: 'auth', loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule' },
  // { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
