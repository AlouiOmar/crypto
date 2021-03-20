import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import {SignInComponent} from './default/sign-in/sign-in.component';
import { SignUpComponent } from './default/sign-up/sign-up.component';
import { LockScreenComponent } from './default/lock-screen/lock-screen.component';
import { PasswordResetComponent } from './default/password-reset/password-reset.component';
import { ConfirmMailComponent } from './default/confirm-mail/confirm-mail.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    LockScreenComponent,
    PasswordResetComponent,
    ConfirmMailComponent
  ],
  imports: [
    CommonModule,
    AuthPagesRoutingModule,
    FormsModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    LockScreenComponent,
    PasswordResetComponent,
    ConfirmMailComponent
  ]
})
export class AuthPagesModule { }
