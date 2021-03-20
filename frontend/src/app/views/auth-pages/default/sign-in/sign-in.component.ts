import { Router } from '@angular/router';
import { TokenPayload } from './../../../../models/TokenPayload';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {

  credentials: TokenPayload = {
    username: '',
    password: ''
};

  errorMsg;

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.credentials);
    this.errorMsg=false;
    this.authService.login(this.credentials).subscribe(
      (data) => {
        if (!(data.toString()=="Username or password is incorrect")) {
        this.router.navigateByUrl('/topUp');}else{
          this.errorMsg=true;
        }
    },
    err => {
        console.error(err);
    }
);
    
  }

}
