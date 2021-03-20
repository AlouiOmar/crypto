import { Component, OnInit, Injectable } from "@angular/core";
import { WebServices } from "../webservices.service";
import { Router } from "@angular/router";

export interface Msg {
  montant: string;
}

@Component({
  selector: "app-balance",
  templateUrl: "./balance.component.html",
  styleUrls: ["./balance.component.css"],
})
export class BalanceComponent implements OnInit {
  constructor(private webservice: WebServices, private router: Router) {}

  ngOnInit() {}
  /*
  topup(value) {
    console.log("test");
    this.webservice.topup(value).subscribe((data) => {});
    /// return this.http.post<any>('http://localhost:8080/pay', { montant: montant } )
  }*/

  topup(value): Promise<any> {
    return new Promise((resolve, reject) => {
      this.webservice.topup(value).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
