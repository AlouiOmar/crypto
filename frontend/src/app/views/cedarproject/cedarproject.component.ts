import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import jQuery from 'jquery';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-cedarproject',
  templateUrl: './cedarproject.component.html',
  styleUrls: ['./cedarproject.component.css']
})
export class CedarprojectComponent implements OnInit {
   selected;
   currentId;
   description;
   amount;
  optionsData: AnimationOptions = {
    path: '/assets/images/small/data2.json'
  };
  data = [
    /* {date: 1, week: 'new hospital'
   },
    {date: 2, week: 'university'},
    {date: 3, week: 'infrastructure'},
    {date: 4, week: 'Homless people'},
    {date: 5, week: ''} */
  ];

  slideConfig = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30',
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15',
        slidesToShow: 1
      }
    }],
    nextArrow: '<a href="javascript:void(0);" class="ri-arrow-left-s-line left"></a>',
    prevArrow: '<a href="javascript:void(0);" class="ri-arrow-right-s-line right"></a>',
  };

  constructor(private router:Router,private projectService:ProjectService, private authService:AuthService) {

   }

  ngOnInit() {
    this.selected=false;
    this.description="Select a project to get started"
    this.projectService.getAll().subscribe((dataa)=>{console.log(dataa);
    this.data=dataa;
    })
  }
newpage(){
  
  for(let i=0;i<this.data.length;i++){
    
      
/*     if(this.dates[i].date=1){
      this.router.navigateByUrl('/convert')
    } */
  }

}

project(id){
  this.selected=true;
  this.currentId=id;
  console.log("project clicked "+id);
  this.projectService.getById(id).subscribe((data)=>{ this.description=data.description})
  
  
}


invest(){
  console.log(this.currentId);
  console.log('pay clicked');
  console.log('amount '+ this.amount);
  let user=this.authService.getUserDetails();
  let info={amount:this.amount,userId: user.id,projectId: this.currentId};
  console.log(info);
  this.projectService.invest(info).subscribe(()=>{console.log("invest success");
  this.projectService.getAll().subscribe((dataa)=>{console.log(dataa);
    this.data=dataa;
    })
  })
}


}
