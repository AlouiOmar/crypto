import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class WebServices {
  cnam: any;
  constructor(private http: Http) {}
  /* topup(value) {
    console.log(value);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let url = "http://localhost:8080/pay/pay?montant=" + value;

    return this.http.get(url).map((res) => res.json());
  }*/

  getBaseUrl() {
    return "http://localhost:8080/";
  }
  topup(value) {
    let url = "pay/pay?montant=" + value;
    return this.http.get(this.getBaseUrl() + url);
  }
}
