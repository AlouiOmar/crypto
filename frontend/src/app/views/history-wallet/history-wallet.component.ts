import { AuthService } from 'src/app/services/auth.service';
import { HistoryService } from './../../services/history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-wallet',
  templateUrl: './history-wallet.component.html',
  styleUrls: ['./history-wallet.component.css']
})
export class HistoryWalletComponent implements OnInit {

   historyList=[];
   role;
  constructor(private historyService:HistoryService,private authService:AuthService) { }

  ngOnInit() {
    this.role=""
    console.log('historyyyyyyy')
    let user=this.authService.getUserDetails();
    if(user.role=="admin"){
      this.role="admin"
    this.historyService.getAll().subscribe((data)=>{
      console.log(data)
      this.historyList=data;
    })}else{
      this.historyService.getUserHistory(user.id).subscribe((data)=>{
        console.log(data)
        this.historyList=data;
      })
    }
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
