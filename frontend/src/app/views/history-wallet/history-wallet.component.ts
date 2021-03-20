import { HistoryService } from './../../services/history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-wallet',
  templateUrl: './history-wallet.component.html',
  styleUrls: ['./history-wallet.component.css']
})
export class HistoryWalletComponent implements OnInit {

   historyList=[];
  constructor(private historyService:HistoryService) { }

  ngOnInit() {
    console.log('historyyyyyyy')
    this.historyService.getAll().subscribe((data)=>{
      console.log(data)
      this.historyList=data;
    })
  }

  delete(id){
    console.log("hey "+id);
    
    this.historyService.delete(id).subscribe(()=>{
      this.historyService.getAll().subscribe((data)=>{
        console.log(data)
        this.historyList=data;
      })
    })
    
  }

}
