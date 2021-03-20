import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class EmailComposeComponent implements OnInit {

  data = [];
  statusClass = 'primary';
  lastDate = 0;
  TICKINTERVAL = 86400000;
  XAXISRANGE: any;
  constructor() { }

  ngOnInit() {
  }
  
  
  public getOrderStatus($msg) {
    $msg = $msg.toLowerCase();
    if($msg == 'pending') {
      this.statusClass = 'warning';
    } else if ($msg == 'canceled') {
      this.statusClass = 'danger';
    }else if ($msg == 'working') {
      this.statusClass = 'primary';
    } else {
      this.statusClass = 'success';
    }
    return  this.statusClass;
  }

}


